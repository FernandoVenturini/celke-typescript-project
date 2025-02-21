### Requirements
   *** Node.js 22 or higher - Check the version: node -v

### How to run the downloaded project

### Install the dependencies indicated by the package.json file.
   *** npm install

### Sequence to create the project
   *** Create the package.json file
      * npm init (Create the file manually)
      * npm init -y (Create the file automatically)

### Install TypeScript as a development dependency.
   *** npm install --save-dev typescript

### Create the tsconfig.json file, run when typescript has been installed only in the project. *** npx tsc --init

### Put in the tsconfig.json file:
   *** "outDir": "./dist",
   *** "rootDir": "./src",
   *** "include": [
      "./src/**/*.ts"
      ]

### Compile the TypeScript files.
   *** npx tsc

### Run the compiled JavaScript file.
   *** node dist/index.js

### Compile the TypeScript files. The compiler keeps track of the project's .ts files. Whenever a file is changed, tsc automatically recompiles the changes to generate the corresponding .js files.
   *** npx tsc -watch
