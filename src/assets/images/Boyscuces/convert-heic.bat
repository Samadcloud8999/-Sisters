@echo off
for %%i in (*.HEIC *.heic *.Heic *.HEIc) do (
    magick "%%i" "%%~ni.webp"
)
echo Готово!
pause
