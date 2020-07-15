## Steps of running this project
from the command prompt clone the project
* git clone https://github.com/sathish-shanmugam/nagarro-JavaScript-ES6-and-Jasmine-Karma-Protractor.git
* cd ng5-jasmin-karma-test

Open terminlal window in VS code
* npm install
* npm install webdriver-manager -g
* webdriver-manager update
* webdriver-manager update --standalone
* webdriver-manager start

Once selenium server started, open another terminal window
* ng serve - run angular application on port 'http://localhost:4200/'
* ng test - perform unit test by jasmine / karma
* ng e2e - perforom integration(e2e) test by using protractor

