# TypeScript for Angular

## Project setup

NPM Commands:
https://docs.npmjs.com/cli/install

Angular uses its own watcher for TS-Compilation. In this part we will use the build-in watcher in TypeScript.

    > node -v   // 12.16.x
    > npm init -y
    > npm i -D typescript tslint
    
Delete following line in your package.json

    "main": "main.js",
    
Add following line:

    "private": true,
    
Create a tsconfig.json file. You can use a template from the new dialog of your IDE.

    {
      "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "sourceMap": true
      },
      "exclude": [
        "node_modules"
      ]
    }
    
Modify the initial tsconfig.json:

    {
      "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "sourceMap": true,
        "watch": true
      },
      "exclude": [
        "node_modules"
      ],
      "include": [
        "src"
      ],
      "compileOnSave": true
    }
    
Create an entry for a compile script in your package.json

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "tsc": "tsc"
      },

When you execute the command, an error will come up. This is ok, because we currently have no files to compile.

    > tsc
    >[15:27:40] Starting compilation in watch mode...

## Usage of TSLint

In order to reduce the technical debt to a minimum, linting ist recommended. In Angular TSLint is used. You already have installed TSLint. You will now need a configuration file.

    > npx tslint --init
    
Complete package.json
    
    {
      "name": "02_typescript",
      "version": "1.0.0",
      "description": "",
      "private": true,
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "tsc": "tsc",
        "lint": "tslint ./src/**/*.ts"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "tslint": "^6.0.0",
        "typescript": "^3.8.2"
      }
    }

You can start your linter with:

    > npm run lint -s


## TS-Features you will need in Angular

- TypeScript Type Defintions
- TS Class Definitions
- Usage of Decoarators
- Interfaces, Classes and Enum
