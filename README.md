# Location search


This is a simple location search website with dynamic dropdown from memory and creates tags of search history.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.


This website is built using MEAN stack. 

---
## Build
Follow the steps given-

* Make sure you have node-js and MongoDB installed

* If you don't have angular installed, execute this command in command prompt(Admin)- 
> npm install -g @angular/cli@latest  

* In case if you dont have MongoDB installed, download the setup files, run the setup and set the dbpath and log files.

* Clone or download the repository and extract files.

* Import the database by copying the values.json from db folder to MongoDB/bin and execute the following command in the same folder.

>mongoimport --db locationdb --collection values --file values.json 

* Then, start the mongodb server by using the command below -
>mongob

* open command line in the directory , execute following command-
> npm install

* Then, build the app by executing-
>ng build

* Atlast, run the app using -
>node server


    Navigate to `http://localhost:3000/`.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
