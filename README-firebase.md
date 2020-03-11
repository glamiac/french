# Firebase setup

This project was created based on the great information from this article: `https://medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71`

Useful links include:

    Github doc for angularfire repo
    https://github.com/angular/angularfire/blob/master/docs/rtdb/lists.md

    Cloud Firestore vs Realtime Database
    https://firebase.google.com/docs/firestore/rtdb-vs-firestore

    RTDB: CRUD operations, transactions, listeners, offline usage
    https://firebase.google.com/docs/database/web/read-and-write

    Cloud Firestore quickstart
    https://firebase.google.com/docs/firestore/quickstart

## Creating an account in Firebase

Go to `https://console.firebase.google.com/`. Sign in and click 'Add Project', and name your new project'.  Click on 'Add Firebase to your web app', and then put the config keys into 'src/environments/environment.ts' (and -prod).  Go to the database rules and authentication tab and clear the auth rules:

{
  "rules": {
    ".read": "auth == null",
    ".write": "auth == null"
  }
}

## Update Angular app to include package.json

Open package.json and add "@angular/fire": "~5.2.1" to your dependencies.

Open app.module.ts
    add these two lines at the top
        import { AngularFireModule } from '@angular/fire';
        import { AngularFireDatabaseModule } from '@angular/fire/database';
    add to imports:
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
