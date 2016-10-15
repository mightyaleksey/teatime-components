#!/bin/sh

if [ `git status -s|wc -l` -gt 0 ]
then
  # there are some changings in the staging area
  # no continuation until everything is ready
  echo commit changes first
  exit 1
fi

babelify() {
  node_modules/.bin/babel $1 --out-dir ${2:-$1} || exit $?
}

# convert scripts to es5
babelify component
babelify lib
babelify view

if [ "$1" != "--publish" ]
then
  # stop in case publish flag was not provided
  exit
fi

npm publish --tag beta
# npm publish
git reset --hard
