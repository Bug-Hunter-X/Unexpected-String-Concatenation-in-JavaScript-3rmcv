# Unexpected String Concatenation in JavaScript
This repository demonstrates a common, yet subtle, error in JavaScript related to loose typing and the unexpected concatenation of strings and numbers.  The bug highlights how JavaScript's implicit type coercion can lead to unexpected results if not handled carefully.  The solution provides a corrected version of the function that explicitly handles type checking.

## Bug
The `foo` function is intended to add two numbers. However, due to JavaScript's loose typing, if one of the inputs is a string, the `+` operator performs string concatenation instead of numerical addition.

## Solution
The solution uses type checking to ensure both inputs are numbers before performing the addition. If not, an error message is displayed, or a default value is used.
