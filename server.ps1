$port = 8085
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Output "Server running at http://localhost:$port/"

$root = $PSScriptRoot

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    $localPath = $request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrEmpty($localPath) -or $localPath -eq "/") {
        $localPath = "index.html"
    }
    
    # URL decode
    $localPath = [System.Uri]::UnescapeDataString($localPath)
    $filePath = Join-Path $root $localPath

    if (Test-Path $filePath -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        
        switch ($ext) {
            ".html" { $response.ContentType = "text/html; charset=utf-8" }
            ".css"  { $response.ContentType = "text/css; charset=utf-8" }
            ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
            ".json" { $response.ContentType = "application/json; charset=utf-8" }
            ".jpg"  { $response.ContentType = "image/jpeg" }
            ".png"  { $response.ContentType = "image/png" }
            Default { $response.ContentType = "application/octet-stream" }
        }
        
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $notFoundMsg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $response.ContentLength64 = $notFoundMsg.Length
        $response.OutputStream.Write($notFoundMsg, 0, $notFoundMsg.Length)
    }
    $response.OutputStream.Close()
}
