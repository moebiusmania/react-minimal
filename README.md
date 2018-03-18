# react-minimal
> A minimal starter kit for React with Webpack, Babel, SASS &amp; CSS Modules.

As the name says, this is *another* React starter kit created to give the minimum-viable-configuration to get started a new React based project with less dependencies and boilerplate as possible.

Developed mainly for me 😎 but open to everyone who may find this useful.

* React & React DOM
* Webpack
  * HTML plugin
  * Notifier
* SASS
* Styles loaded as CSS Modules
* Babel, with the `env` & `React` presets
* gh-pages (publish)

### Get started
A few steps to quick-start a new project:

Clone the repo on a new folder
```
$ git clone https://github.com/moebiusmania/react-minimal my-project
```

Change the name in the `package.json`, this will also affect the HTML title and the Webpack's notifications:
```json
...
  "name": "my-project"
...
```

```
$ yarn
```
to install dependencies

```
$ yarn start
``` 
to start webserver on `localhost:8090`

### Build & publish

To create deployable static files in the `./dist` folder:
```
$ yarn build
```

to deploy the `./dist` folder as a Github page:
```
$ yarn deploy
```

if you are lazy and want to do both build & publish in a single command:
```
$ yarn build:deploy
```

### License
Released under the [MIT license](LICENSE).