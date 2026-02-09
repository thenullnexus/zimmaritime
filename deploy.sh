#!/bin/bash

# Build the project
npm run build

# Go to the dist directory
cd dist

# Initialize git repo if not exists
if [ ! -d ".git" ]; then
  git init
  git branch -M main
fi

# Add and commit changes
git add .
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push -f origin main:gh-pages

echo "Deployment complete! Your site should be available at https://[username].github.io/[repository]"
