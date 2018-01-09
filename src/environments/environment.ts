// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
       apiKey: "AIzaSyBaaegvQxYMUmeBRdkq6Cmp4vYnL6X4udE",
       authDomain: "clientpanel-fdc7c.firebaseapp.com",
       databaseURL: "https://clientpanel-fdc7c.firebaseio.com",
       storageBucket: "clientpanel-fdc7c.appspot.com",
       messagingSenderId: "252586174365"
  }
};
