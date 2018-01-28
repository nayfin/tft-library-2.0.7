
#!/bin/bash

set -e # exit when error

# check we are on master
branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$branch" != "master" ]
then
  echo "Not on master branch, exiting"
  exit 1
fi

# TODO: Request git status and ask user to commit changes

# # read actual dist/package.json version
# actual_version=$(grep version package.json cut -c 15- | rev | cut -c 3- | rev)

# # ask user for next version
# echo
# echo "Actual version: ${actual_version}"
echo "What type of update is this ?"
update_options=(major minor patch premajor preminor prepatch prerelease from-git)
#TODO: check update_type against update_options
echo "options: ${update_options[*]}"
read update_type
echo ${update_type}

# TODO: properly check against update_options array instead of limping through this if statement
if [ "$update_type" != "patch" ] && [ "$update_type" != "minor" ] && [ "$update_type" != "major" ]
then
  echo "Not a valid semantic update, try 'patch', 'minor', or 'major'"
  exit 1
fi
npm version "${update_type}"

npm run packagr

# TODO: Maybe pass algolia image with library 'assets/images/, maybe serve from cdn
npm publish dist

# TODO: 
# # replace package.json with next version
# # sed -i.bak "s/${actual_version}/${next_version}/g" src/version.ts
# # sed -i.bak "s/${actual_version}/${next_version}/g" dist/package.json
# # sed -i.bak "s/${actual_version}/${next_version}/g" package.json

# # remove .bak files from sed
# rm -f package.json.bak dist/package.json.bak src/version.ts.bak

# # show and update changelog
# conventional-changelog -p angular -u

# echo
# read -p "Is the changelog correct? [y/N] " -n 1 -r
# echo

# if [[ $REPLY =~ ^[Yy]$ ]]
# then
#   conventional-changelog -p angular -i CHANGELOG.md -s
# else
#   git reset origin master --hard
#   exit 1
# fi

# # clean node_modules and build library
# echo "Build library"
# rm -rf node_modules
# yarn
# yarn build

# # copy README.md and CHANGELOG.md to dist folder
# cp README.md CHANGELOG.md dist

# # commit and tag
# git add src/version.ts package.json dist/package.json CHANGELOG.md
# git commit -m "chore(release): publish v${next_version}"
# git tag $next_version

# echo
# read -p "Is everything correct? (Check in a new tab) [y/N] " -n 1 -r
# echo

# if [[ $REPLY =~ ^[Yy]$ ]]
# then
#   git push origin master
#   git push --tags
#   yarn doc:publish
#   (cd dist && npm publish)
# else
#   git reset origin/master --hard
#   git tag -d $next_version
#   exit 1
# fi
