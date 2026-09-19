@echo off
title Publish Portfolio to GitHub
echo ========================================
echo Pushing Portfolio to GitHub...
echo ========================================
git push origin main --force
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push failed!
    pause
    exit /b %errorlevel%
)
echo.
echo ========================================
echo SUCCESS! Portfolio published to GitHub.
echo Opening GitHub Pages settings now...
echo ========================================
start https://github.com/selvasridharant-code/portfolio/settings/pages
echo.
echo Under 'Branch', select 'main' and click 'Save'.
echo.
echo Your live link will be:
echo https://selvasridharant-code.github.io/portfolio/
echo ========================================
pause
