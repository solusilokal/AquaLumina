@echo off
title Deploy to GitHub - AquaLumina
echo ========================================================
echo          DEPLOY PROYEK KE GITHUB REPOSITORY
echo ========================================================
echo.
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"

echo [1/3] Melakukan build aset produksi (npm run build ^& standalone)...
call npm.cmd run build
if %errorlevel% neq 0 (
    echo [ERROR] Build gagal. Silakan periksa pesan error di atas.
    pause
    exit /b 1
)
call npm.cmd run standalone

echo.
echo [2/3] Menyiapkan commit git...
git add .
git commit -m "feat: complete AquaLumina pool website for preview and deployment" 2>nul
echo [OK] Git commit siap.
echo.

echo [3/3] Mengupload (Push) ke GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo [SUKSES] Proyek berhasil di-deploy ke GitHub!
    echo ========================================================
) else (
    echo.
    echo [INFO] Jika belum menghubungkan remote repository, jalankan terlebih dahulu:
    echo        git remote add origin ^<url-repository-github-anda^>
)
echo.
pause
