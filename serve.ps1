# 멋쟁이 챌린지 프로토타입 로컬 서버 (Node/Python 없이 실행)
# 사용법:  powershell -ExecutionPolicy Bypass -File .\serve.ps1
# 이후 브라우저에서 http://localhost:8123/ 접속
param(
  [int]$Port = 8123,
  [string]$Root = $PSScriptRoot
)
$ErrorActionPreference = "Stop"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving '$Root' at http://localhost:$Port/  (Ctrl+C to stop)"

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg"  = "image/svg+xml"
}

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response
    $rel = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath.TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($rel)) { $rel = "index.html" }
    $path = Join-Path $Root $rel
    if (Test-Path $path -PathType Leaf) {
      $bytes = [System.IO.File]::ReadAllBytes($path)
      $ext = [System.IO.Path]::GetExtension($path).ToLower()
      if ($mime.ContainsKey($ext)) { $res.ContentType = $mime[$ext] }
      $res.Headers.Add("Cache-Control", "no-store")
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404: $rel")
      $res.OutputStream.Write($msg, 0, $msg.Length)
    }
    $res.OutputStream.Close()
  } catch {
    Write-Host "err: $_"
  }
}
