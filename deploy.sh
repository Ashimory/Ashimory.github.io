# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -b master
git add -A
git commit -m 'deploy'

git remote add origin http://github.com/ashimory/ashimory.github.io.git

git push git push -u origin master


cd -