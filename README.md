# 03 JavaScript: Password Generator

## Objective

The objective of the task was to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. The user can choose if the password will include special characters, lower cases and numeric characters. 

## The process

The problem was solved the following way:

* A function generate password was declared
* An array with every upper case letter was made and an array with (almost) every special character was also made; for the lower case the function .toLowerCase() was applied to the upper case array and for the numeric characters Math.Random() was used
* A loop while was declared, in each loop checking what did the user wanted the password to include and, if it was true, concatenated to the password. 
* A break was needed to be included since the password ended up being larger than the desired length. 

## Limitation:

The solution had a main limitation: each element was added in the same pattern (first special character, then lower case, then numeric element, then upper case) and repeated itself

## Solution of the limitation:

In order to solve the limitation, a randomize function was made in which the elements within the string password were randomly swapped to eliminate the pattern issue 
