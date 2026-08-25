#!/bin/bash

echo "⚡ Mem-build frontend..."
cd frontend
npm install
npm run build

echo "📦 Deploy ke GitHub Pages..."
cd dist
git init
git add .
git commit -m "Deploy Fishgpt Laut $(date)"
git branch -M gh-pages
git remote add origin https://github.com/USERNAME/REPO.git
git push -f origin gh-pages

echo "✅ Selesai! Frontend live di GitHub Pages."
