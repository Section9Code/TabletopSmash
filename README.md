# Tabletop Smash
Tabletop Smash is an Angular site to let people create and manage their OSR Characters. Initially I am building this for the RPG Lamentations of the Flame Princess but would like to include other game systems as well.

It is based on the [Angular FireStarter project](https://github.com/codediodeio/angular-firestarter) for it base and uses [Firebase](https://firebase.google.com/) as its database.

## Running locally

#### Prerequisites
You will need:
- npm (From the command line run ```npm --version``` to check)
- Angular Cli (From the command line run ```ng --version``` to check)

#### Clone the project to your computer

Clone the project onto you computer by running 

```git clone https://github.com/Section9Code/TabletopSmash.git```

#### Install node modules
From the root of the project on the command line run ```npm i``` this will install all the node modules the project needs.

#### Put in your Firebase configuration
Go to the file ```/src/environments/environment.ts``` and paste in your angular configuration settings.

They will look something like this:

```json
firebase: {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "YOUR_PROJECT_NAME.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECTN_AME.firebaseio.com",
    projectId: "YOUR_PROJECT_NAME",
    storageBucket: "YOUR_PROJECT_NAME.appspot.com",
    messagingSenderId: "xxxxxxxxxxxx"
  }
```
You can create your own project for free by going to firebase.google.com and following their "Getting Started" guide.

#### Running the project
From the command line type ```ng serve``` and it will start the Angular project. Open a web browser and go to http://localhost:4200 and you will see the project running.

Any changes made to the project will cause the website to reload.

That is it, you are working with your own copy of **Tabletop Smash**. Have fun.