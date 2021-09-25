#!/bin/bash

git pull && hexo g && git add -f ./* && git commit -m "initial commit" && git push