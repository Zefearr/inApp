// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {  
  production: false,
  mapbox: {
    accessToken: "pk.eyJ1IjoiemVmZWFyIiwiYSI6ImNqY3JrZ3JqbTFxYWUyd3M1Nm55bGE4aGoifQ.Pi_CCNIJS5GFKFCSPjREWw"
  },
  firebase: {
    apiKey: "AIzaSyBHaiGZfrbiET5rRXLwWlw76bUPMVY-wZA",
    authDomain: "inapp-ae6b8.firebaseapp.com",
    databaseURL: "https://inapp-ae6b8.firebaseio.com",
    projectId: "inapp-ae6b8",
    storageBucket: "gs://inapp-ae6b8.appspot.com/",
    messagingSenderId: "900308829476"
  }
};
