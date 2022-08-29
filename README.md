# Random-Password-Generator

## Description
This project was created in order to provide employees a way to have a new random password generated when they need to implement a new password. The employee is prompted to indicate
how long they would like their password to be as well as if they would like their password to consist of lowercase, uppercase, numbers and/or special characters. Once all this information is
confirmed, the system will provide the employee with a new random password.

![Password Generator Screen Shot](./assets/randompassSS.png)

[Deployed Site](https://angi-adema.github.io/Random-Password-Generator/)

## Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
