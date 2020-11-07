# 03 JavaScript: Password Generator

## Password Generator website

This project was undertaken to modify given CSS and HTML source code, and add to it the dynamic functionality of Javascript to produce a random password based on given criteria. Based on a series of prompts that appear when an eventListener alerts the source code to run the writePassword function on clicking, the Javascript will run the additional functions to select from special characters, numbers and upper and lower case letters from the user's input. Certain conditions must be met to get the function to run, including a numerical input between 8 and 128 for the length and at least one type of character must be chosen. 

This web applicaton is also styled to be responsive to given screen size. This provides accessibility from mobile devices.

## Installation

This project can be viewed and used using any web browser from the link provided.

[Password Generator](https://deck-jessica.github.io/PasswordGenHW3/)

## Usage 

This page can be accessed and used to randomly populate a password. To generate a random password, you will first click the "Generate Password" button to start the prompts. First, you must select a number between 8 and 128, which is parsed to an integer. The first validation occurs here, where the number must be between the given values. Once a proper number has been entered, the prompts will take you through whether you want to include special characters, numbers, lower and upper case letters. The next validation occurs here, where you must select at least one type of special character. Both validations to this point will return an undefined password if there are no proper length or characters selected. 

Once the length and characters are confirmed, the characters undergo further validation given the length of the password selected, to populate into possible values for the getRandom function. Once the chosen characters have been run through the getRandom function and been sorted into the array, the writePassword function will fire and print the password to the passwordText field, and shown on the screen.

![Password Generator](PassGenScreenshot.png)

## Credits

I used my Bootcamp course materials, and some minor help from my classmates and LAs. I also relied on some Youtube videos for ideas on how to set up the random functions, special thanks to Traversy Media for that.



## License

MIT License

Copyright (c) [2020] [Jessica Deck]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---


