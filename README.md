# Advent of Code 2022
[link](https://adventofcode.com/2022)

## Running a Solution

For any given day, in order to run the solution, simply use `node` to run that day specifically.

e.g. `node 04.js`

To run that day's solution in debug mode (using the example input instead of the actual input), add the `-d` flag.

e.g. `node 04.js -d`

## Creating a Solution for a Day

To setup files for a day, use the `make` command from the `package.json` `scripts` and pass through the day.

e.g. `npm run make -- 04`

This will create 3 files
* 04.js - the code file to write the solution
* 04-debug.txt - the file into which you can place the example input (for testing)
* 04.txt - the file into which you can place the actual input

Additionally, there is a file `helpers.js` which I've used to create a few helper functions that I used in several of my solutions.