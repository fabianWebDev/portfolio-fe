@echo off
REM Portfolio Deployment Script for Windows
REM This script helps deploy the portfolio to various platforms

echo 🚀 Portfolio Deployment Script
echo ==============================

if "%1"=="" goto usage
if "%1"=="help" goto usage
if "%1"=="build" goto build
if "%1"=="preview" goto preview
if "%1"=="vercel" goto vercel
if "%1"=="netlify" goto netlify
if "%1"=="github" goto github
goto usage

:usage
echo Usage: %0 [platform]
echo.
echo Platforms:
echo   vercel     - Deploy to Vercel
echo   netlify    - Deploy to Netlify
echo   github     - Deploy to GitHub Pages
echo   build      - Build for production only
echo   preview    - Preview production build
echo.
echo Examples:
echo   %0 build
echo   %0 vercel
echo   %0 preview
goto end

:build
echo 📦 Building project for production...
call npm run deploy:build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    goto end
)
echo ✅ Build completed successfully!
goto end

:preview
echo 👀 Starting preview server...
call npm run preview:prod
goto end

:vercel
echo 🔵 Deploying to Vercel...
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI not found. Installing...
    call npm install -g vercel
)
call :build
if %errorlevel% neq 0 goto end
call vercel --prod
echo ✅ Deployed to Vercel!
goto end

:netlify
echo 🟢 Deploying to Netlify...
where netlify >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Netlify CLI not found. Installing...
    call npm install -g netlify-cli
)
call :build
if %errorlevel% neq 0 goto end
call netlify deploy --prod --dir=dist
echo ✅ Deployed to Netlify!
goto end

:github
echo 🐙 Deploying to GitHub Pages...
call npm list gh-pages >nul 2>nul
if %errorlevel% neq 0 (
    echo 📦 Installing gh-pages...
    call npm install --save-dev gh-pages
)
call :build
if %errorlevel% neq 0 goto end
call npx gh-pages -d dist
echo ✅ Deployed to GitHub Pages!
goto end

:end
