// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyClPsiH6DFJc_XvltxqrhLeFRWVm3jUZoo',
    authDomain: 'tft-library.firebaseapp.com',
    databaseURL: 'https://tft-library.firebaseio.com',
    projectId: 'tft-library',
    storageBucket: 'tft-library.appspot.com',
    messagingSenderId: '113394856035'
  }
};
