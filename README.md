# Informations

When the server is started, it automatically builds the JS and CSS files whenever the asset files change, and
automatically reloads the site in the browser when a file is modified and saved.

In this example project, the chosen template file extension is ".html.twig" (to be easily integrated in a Symfony
project)

In the "templates" folder, the loaded pages are the files at the root of this folder.

To provide data that can be used as variables in the template files, create a new json file in the "data" folder, named
exactly the same as the template file.

## Requirements

Tip: use nvm for better flexibility of node version

- NodeJS
- NPM (or Yarn)

## Installation

You can replace "yarn" with "npm" if you wish

```
yarn install
```

## Configuration

To override the configuration, copy and paste the .env.example file and rename it to .env, and edit the values.

## Start the server

```
yarn start
```

By default, without custom configuration, go to: `http://localhost:3001`



