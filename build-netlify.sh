#!/bin/bash

echo "🚀 Building for Netlify deployment..."

# Clean previous builds
rm -rf dist-static

# Build using Netlify-specific Vite config
npx vite build --config vite.config.netlify.ts

# Verify build output
if [ -f "dist-static/index.html" ]; then
    echo "✅ Static build completed successfully"
    echo "📁 Files ready for Netlify deployment in dist-static/"
    ls -la dist-static/
else
    echo "❌ Build failed - index.html not found"
    exit 1
fi