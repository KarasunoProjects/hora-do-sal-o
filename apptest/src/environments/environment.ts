// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

// 1) insira os dados de conexão  com o aplicativo do Firebase
firebase: {
  apiKey: "AIzaSyD1Vw546kh6T-PD_0WdSM_WOFh10arPZaw",
    authDomain: "appteste-375c4.firebaseapp.com",
    databaseURL: "https://appteste-375c4.firebaseio.com",
    projectId: "appteste-375c4",
    storageBucket: "appteste-375c4.appspot.com",
    messagingSenderId: "521846470936",
    appId: "1:521846470936:web:e2dea5b5072d08cb4b066d"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

