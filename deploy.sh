#!/bin/sh
# https://gist.github.com/domenic/ec8b0fc8ab45f39403dd
set -e # exit with nonzero exit code if anything fails

rm -rf demo || exit 0;
npm run compile;

cd demo
git init

git config user.name "Travis-CI"
git config user.email "iamhoneyboy@gmail.com"

git add .
git commit -m "Deploy to GitHub Pages"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://github.com/sullenor/teatime-components.git" master:gh-pages > /dev/null 2>&1
