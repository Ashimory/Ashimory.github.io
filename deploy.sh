# abort on errors
set -e

# build
npm run build


git add -A 
git commit -m 'crude texture for star'
git push origin master

git add dist -f
git commit -m 'deploy'


git subtree push --prefix dist origin gh-pages


cd -