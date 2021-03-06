# JavaScript Calculator

## Description

Recreate a calculater from chosen image and have it be able to carry out basic functions.

## Screenshot

<img src="images\istockphoto-531633071-612x612.jpg" width=100>

## Implementation

### MVP

_Part 1_

-   Create a calculator to be rendered to the html page
-   it should have number keys from 0 to 9
-   It should have operator keys (+, -, /, \*, =)
-   It should have a display rendering the current calculation in a box at the top
-   It should also have a “.” key

_Part 2_

-   Should render the current calculation in a box at the top (calculator display)
-   It should handle decimals
-   It doesn’t need to support orders of operation
-   It should not use eval() or Function() constructor

## Plan

1. Each button will carry out function onClick eventListener
2. Number Buttons

-   Replace content of display if previous onClick was an operator
-   Add to diplay if number or '.'

3. '.' Add to displayed number
4. Operator Buttons

-   Create variable for operator
-   Create variable to decide calculation based on value

5. Carry out calculation with stored value and displayed value then display the total.

-   Allow next calculation
-   Create two variables to store numbers
