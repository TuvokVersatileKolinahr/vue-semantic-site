rm -rf docs
npm run build
mv dist docs
git add .
git commit -am "Update gh-pages"
git push