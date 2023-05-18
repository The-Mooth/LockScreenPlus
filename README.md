[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11176623)
# Lab 3

Your name: XXX (replace with your name)

## Code base

Instead of starting from scratch, you will start with a code base for this lab. The code base was revised from some code generated by ChatGPT. You can change anything in the code base to achieve the desired functionality and design. 

## Functionality

Overall, your users should be able to:

* View the current time and location information based on their IP address
* View additional information about the date and time in the expanded state
* Be shown the correct greeting and background image based on the time of day they're visiting the site
* Generate random programming quotes by clicking the refresh icon near the quote

Specifically, you should:

* Change the greeting depending on the time of day. It should say:
  - "Good morning" between 5am and 12pm
  - "Good afternoon" between 12pm and 6pm
  - "Good evening" between 6pm and 5am
* Change the greeting icon and background image depending on the time of day. They should show:
  - The sun icon and the daytime background image between 5am and 6pm
  - The moon icon and the nighttime background image between 6pm and 5am
* Generate a new random programming quote whenever the refresh icon is clicked

You can use the following APIs to retrieve the necessary data:

* World Time API (http://worldtimeapi.org/) to set the time based on the visitor's IP address. This API will also be used for additional data, like the day of the year shown in the expanded state.
* IP Geolocation API (https://freegeoip.app/) to set the city and country underneath the time
* Quotes API (https://api.quotable.io/random) to generate random programming quotes.

You may use other third-party APIs as alternatives to the listed options (e.g., the example API used by the codebase).

**Lastly, you will need to develop a set of test cases to test each component of yours.**

## Design

See the expected design in [the design folder](./design/). Please try your best to make your app look the same as the expected design. All the required assets for this project are in the /assets folder. 

## To do

When you finish, please do the following:

1. design and develop the application
1. add your tests to cover all possible user error scenarios
1. commit and push your code
2. add your name to this README file (see above)
3. capture how your app looks locally in the simulated app on your machine
4. put the captured image in the design folder
5. edit this README file to display your captured image here in this README file (see the above displayed expected design as an example)