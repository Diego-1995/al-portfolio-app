Add-Type -AssemblyName System.Drawing

$sourcePath = Join-Path $PSScriptRoot "..\public\automa.JPG"
$outputPath = Join-Path $PSScriptRoot "..\public\automa-transparent.png"

$source = [System.Drawing.Bitmap]::FromFile($sourcePath)
$output = New-Object System.Drawing.Bitmap $source.Width, $source.Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $source.Height; $y++) {
  for ($x = 0; $x -lt $source.Width; $x++) {
    $pixel = $source.GetPixel($x, $y)
    $brightness = [Math]::Max($pixel.R, [Math]::Max($pixel.G, $pixel.B))

    if ($brightness -le 18) {
      $alpha = 0
    }
    elseif ($brightness -le 58) {
      $alpha = [Math]::Min(255, [Math]::Max(0, [int](($brightness - 18) * 6.4)))
    }
    else {
      $alpha = 255
    }

    $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $pixel.R, $pixel.G, $pixel.B))
  }
}

$output.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$source.Dispose()
$output.Dispose()
