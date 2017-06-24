#!/bin/bash
docker run -it --rm --name executeSpecificFunction -v $(pwd):/usr/src/app -w /usr/src/app node:8-slim node ./loadCode.js "$@"