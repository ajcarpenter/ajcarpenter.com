#!/bin/bash

npm run build
git add build
git commit -m "Build"
git push origin master
git push origin `git subtree split --prefix build master`:gh-pages --force