#!/bin/bash

# Stop script execution on error
set -e

# Build the project
npm run build

# Create 404.html for SPA routing
cp dist/index.html dist/404.html

# Go to the dist directory
cd dist

# Initialize git repo if not exists
if [ ! -d ".git" ]; then
  git init
  git branch -M main
fi

# Ensure remote is set
if ! git remote | grep -q origin; then
  git remote add origin https://github.com/thenullnexus/zimmaritime.git
fi

# Add and commit changes
git add .
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push -f origin main:gh-pages

echo "Deployment complete! Your site should be available at https://thenullnexus.github.io/zimmaritime/"
