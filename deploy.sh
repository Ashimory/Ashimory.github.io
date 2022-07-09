# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git add -A -f
git commit -m 'deploy'


git push -u origin gh-pages


cd -