## Steps of running this project
from the command prompt clone the project
* $git clone https://github.com/sathish-shanmugam/nagarro-JavaScript-ES6-and-Jasmine-Karma-Protractor.git
* $cd ng5-jasmin-karma-test

Open terminlal in VS code
* npm install
* npm install webdriver-manager -g
* webdriver-manager update
* webdriver-manager update --standalone
* webdriver-manager start

Once selenium server started, open another terminal window
* ng serve - To run application on port 'http://localhost:4200/'
* ng test - Perform unit test by Jsamin / Karma
* ng e2e - perforom integartion(e2e) test by using Protractor

