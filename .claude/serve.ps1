$root = Split-Path -Parent $PSScriptRoot
# 포트는 실행 환경이 정해주면 그걸 쓰고(여러 세션이 동시에 띄울 때 충돌 방지), 없으면 5173
$port = if ($env:PORT) { $env:PORT } else { 5173 }
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$port/"

$mime = @{
  ".html" = "text/html"; ".js" = "application/javascript"; ".css" = "text/css";
  ".svg" = "image/svg+xml"; ".json" = "application/json"; ".png" = "image/png";
  ".jpg" = "image/jpeg"; ".ico" = "image/x-icon";
  ".txt" = "text/plain; charset=utf-8"; ".md" = "text/markdown; charset=utf-8";
  ".pdf" = "application/pdf"; ".mp4" = "video/mp4"; ".webp" = "image/webp"; ".gif" = "image/gif";
}

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $req = $context.Request
  $res = $context.Response
  try {
    $path = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath)
    if ($path -eq "/") { $path = "/index.html" }
    $filePath = Join-Path $root ($path.TrimStart("/"))
    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath)
      $contentType = $mime[$ext]
      if (-not $contentType) { $contentType = "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $res.ContentType = $contentType
      # 개발용 - 편집한 파일이 항상 새로 내려가도록 캐시를 끈다
      $res.Headers.Add("Cache-Control", "no-store, no-cache, must-revalidate")
      $res.Headers.Add("Pragma", "no-cache")
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
      $res.OutputStream.Write($msg, 0, $msg.Length)
    }
  } catch {
    $res.StatusCode = 500
  } finally {
    $res.OutputStream.Close()
  }
}
