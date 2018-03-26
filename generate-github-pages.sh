#!/bin/bash

ng build --prod --output-path docs --base-href brew-journey
cp docs/index.html docs/404.html
