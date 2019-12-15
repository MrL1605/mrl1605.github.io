#!/usr/bin/env sh

CWD=`pwd`
WD="`pwd`/`dirname $0`"

main() {

  # Check if elm is installed
  type elm >/dev/null 2>&1

  if [[ $? -ne 0 ]]; then
    echo -e "Could not find ELM.\nInstall using https://guide.elm-lang.org/install/"
    return 1
  fi

  # cd to working dir
  cd $WD
  echo "Building App"
  elm make ./src/Main.elm --output assets/js/elm-bundle.js
  [[ $? -ne 0 ]] && echo -e "Error Occurred while building"

  # Revert back to currrent working dir
  cd $CWD

}

main
