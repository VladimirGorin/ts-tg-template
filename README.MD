# Project Setup and Running Scripts
## Prerequisites

Ensure that you have the following tools installed:

    Node.js
    npm
    TypeScript

If you haven't installed the project dependencies yet, run:

```
npm install
```

This will install all the necessary dependencies and devDependencies.
Available Scripts
### dev

This script will start the project in development mode, using nodemon to watch for changes in the ./src directory and automatically recompile the TypeScript files.

```
npm run dev
```

`Watches all .ts files in the ./src folder.
    Executes ts-node ./src/main.ts.`

### build

This script will compile the TypeScript files to JavaScript using the TypeScript compiler (tsc).
```
npm run build
```

`Compiles the TypeScript files in the project according to the configuration in tsconfig.json.`

### start

This script starts the project in production mode using pm2, a process manager for Node.js applications. It will run the compiled JavaScript file (`dist/main.js`).
```
npm run start
```

`Runs the dist/main.js file after the TypeScript project has been compiled.
    Manages the process with pm2, allowing you to easily monitor and restart the bot.`

### delete

This script deletes the bot process managed by pm2.
```
npm run delete
```
`Stops and deletes the bot process with the name bot.`

### Example Workflow

Install dependencies:
```
npm install
```
Run the bot in development mode:
```
npm run dev
```
After building the project, run it in production mode:
```
npm run build
npm run start
```
