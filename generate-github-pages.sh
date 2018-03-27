#!/bin/bash -eux

cd "$(dirname $0)"
rm -rf docs
ng build --prod --output-path docs --base-href brew-journey
cp docs/index.html docs/404.html
echo 'Done, now run git add docs/ and commit'
