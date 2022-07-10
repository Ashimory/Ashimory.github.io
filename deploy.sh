# abort on errors
set -e

# build
npm run build


# git add . 
# git commit -m 'oops messed up setup'
# git push origin master


git add dist -f
git commit -m 'deploy'
git subtree push -f --prefix dist origin gh-pages


# cd -