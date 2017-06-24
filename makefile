runFunctionInDocker:
	@docker run -it --rm --name executeSpecificFunction -v $(shell pwd):/usr/src/app -w /usr/src/app node:8-slim node ./loadCode.js $(filter-out $@,$(MAKECMDGOALS))