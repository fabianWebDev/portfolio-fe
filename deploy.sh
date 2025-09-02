#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy the portfolio to various platforms

set -e

echo "🚀 Portfolio Deployment Script"
echo "=============================="

# Function to display usage
usage() {
    echo "Usage: $0 [platform]"
    echo ""
    echo "Platforms:"
    echo "  vercel     - Deploy to Vercel"
    echo "  netlify    - Deploy to Netlify"
    echo "  github     - Deploy to GitHub Pages"
    echo "  build      - Build for production only"
    echo "  preview    - Preview production build"
    echo ""
    echo "Examples:"
    echo "  $0 build"
    echo "  $0 vercel"
    echo "  $0 preview"
}

# Function to build the project
build_project() {
    echo "📦 Building project for production..."
    npm run deploy:build
    echo "✅ Build completed successfully!"
}

# Function to preview the build
preview_build() {
    echo "👀 Starting preview server..."
    npm run preview:prod
}

# Function to deploy to Vercel
deploy_vercel() {
    echo "🔵 Deploying to Vercel..."
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        echo "❌ Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    build_project
    vercel --prod
    echo "✅ Deployed to Vercel!"
}

# Function to deploy to Netlify
deploy_netlify() {
    echo "🟢 Deploying to Netlify..."
    
    # Check if Netlify CLI is installed
    if ! command -v netlify &> /dev/null; then
        echo "❌ Netlify CLI not found. Installing..."
        npm install -g netlify-cli
    fi
    
    build_project
    netlify deploy --prod --dir=dist
    echo "✅ Deployed to Netlify!"
}

# Function to deploy to GitHub Pages
deploy_github() {
    echo "🐙 Deploying to GitHub Pages..."
    
    # Check if gh-pages is installed
    if ! npm list gh-pages &> /dev/null; then
        echo "📦 Installing gh-pages..."
        npm install --save-dev gh-pages
    fi
    
    build_project
    npx gh-pages -d dist
    echo "✅ Deployed to GitHub Pages!"
}

# Main script logic
case "${1:-}" in
    "vercel")
        deploy_vercel
        ;;
    "netlify")
        deploy_netlify
        ;;
    "github")
        deploy_github
        ;;
    "build")
        build_project
        ;;
    "preview")
        preview_build
        ;;
    *)
        usage
        exit 1
        ;;
esac
