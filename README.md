# Advent of Code 2022
[link](https://adventofcode.com/2022)

## Running a Solution

For any given day, in order to run the solution, use `node index {day}`

e.g. `node index 04`

You can use `-d` to run that solution in debug mode, which will use the debug data file

e.g. `node index 04 -d`

It will assume the current year, but if you want to run a previous year, add it like this

e.g. `node index 04 2022 -d`

## Creating a Solution for a Day

To setup files for a day, use the `make` command from the `package.json` `scripts` and pass through the day.

e.g. `npm run make -- 04`

This will create 3 files
* 04.js - the code file to write the solution
* 04-debug.txt - the file into which you can place the example input (for testing)
* 04.txt - the file into which you can place the actual input

Additionally, there is a file `helpers.js` which I've used to create a few helper functions that I used in several of my solutions.