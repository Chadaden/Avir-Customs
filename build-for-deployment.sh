#!/bin/bash

# Build the application
npm run build

# Move files from dist/public to dist and remove the public subdirectory
if [ -d "dist/public" ]; then
    # Move all files from dist/public to dist
    mv dist/public/* dist/
    # Remove the empty public directory
    rmdir dist/public
    echo "✅ Build files moved from dist/public to dist for deployment"
else
    echo "❌ dist/public directory not found"
    exit 1
fi