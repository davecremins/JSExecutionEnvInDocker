The Challenge
=============

`breadCrumbMaker.js` is a JavaScript solution to [this](https://www.codewars.com/kata/563fbac924106b8bf7000046) codewars problem.

When running the tests for the solution I would sometimes receive a message relating to an error with the running container. For the purposes of a challenge I decided to see if I could create a simple JS execution environment in a Docker container and specify which function & args to run.

`loadCode.js` uses the `vm` module for compiling and running code within V8 Virtual Machine contexts. For this example I have loaded the breadCrumb solution.

`runFunctionInDocker.sh` spins up a container and executes the `loadCode.js` which allows the user to specify which function and args to run in the context of the breadcrumb solution.

# Example
```bash
./runFunctionInDocker generateBC https://www.google.ie/search /
```