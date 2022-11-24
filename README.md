# PruebasUnitariasJest

## Install the Angular CLI

You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

To install the Angular CLI, open a terminal window and run the following command:

```
npm install -g @angular/cli
```

## Create a workspace and initial application

You develop apps in the context of an Angular workspace.

To create a new workspace and initial starter app:

- Run the CLI command ng new and provide the name my-app, as shown here:

```
ng new my-app
```

## Remove karma and jasmine dependencies

These dependencies will not be used since the configuration will be done with jest, for this in the **packge.json** dependency configuration file we look for all the dependencies and delete them.

```
npm remove [dependencies]
```

## remove karma setting in **angular.json** file

The test section must be completely removed from the angular.json file, since this configuration will be done later with jest

The section to be removed is similar to this:

```
    "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        }

```

- You must also delete the file called **karma.config.js** and the file **test.ts** that is inside the src folder.

## Configure jest in angular

This schematic will configure Angular to execute unit tests with Jest for single projects or workspaces.

## Install jest

- install Jest, types and a builder
- add Jest configuration files
- remove Karma & Jasmine along with their configuration files

```
ng add @briebug/jest-schematic
```

## Optionally: install globally

```
npm install -g @briebug/jest-schematic
```

Then in an Angular CLI project run

```
ng g @briebug/jest-schematic:add
```

- In the setup-jest.ts file you can add global mocks below the import.
  **import 'jest-preset-angular/setup-jest'**;

Examples:

```
const mock = () => {
  let storage: { [key: string]: string } = {};

  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => (storage[key] = value),
    clean: () => (storage = {}),
  };
};

Object.defineProperties(window, {
  storage: {
    value: mock(),
    enumerable: false,
  },
});

Object.defineProperties(window, {
  sessionStorage: {
    value: mock(),
    writable: false,
  },
});

Object.defineProperties(window, {
  getComputedStyle: {
    value: () => {
      return {
        display: 'none',
        appearance: ['-webkit-appearance'],
      };
    },
    writable: false,
  },
});

Object.defineProperties(document.body.style, {
  transform: {
    value: () => {
      return { enumerable: true, configurable: true };
    },
  },
});

HTMLCanvasElement.prototype.getContext = <
  typeof HTMLCanvasElement.prototype.getContext
>jest.fn();

```

### optional configuration

The following attributes can be added to the **tsconfig.spec.json** file.

Inside **compilerOptions** it is placed to prevent verbosity in the console.

```
 "esModuleInterop": true,
```

And in the same section to activate the jest dependency injection the following:
Inside compilerOptions it is placed to prevent verbosity in the console.

```
"emitDecoratorMetadata": true
```

## Coverage setting

So that when executing the tests a coverage folder is created with its respective report, the following attributes must be added to the jest.config.js file:

```
collectCoverage: true
```

To activate coverage

```
coverageDirectory: 'coverage/pruebas-unitarias-jest'
```

To indicate the path and name of the coverage folder

## Execution command configuration

To run the tests, you must modify the scripts in the **package.js** file as follows:

```
"test": "jest"
"test-watch": "jest --watchAll",
"test-coverage": "jest --coverage"
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Development test

Run `npm run test` to run the tests with jest.
