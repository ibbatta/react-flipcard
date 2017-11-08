# __REACT WEATHER FLIP-CARD__

> Simple flipcard showing weather in react.

---


## __What this boilerplate contains__

<img src="./repo_readme_assets/logo-npm.png" height="55">&nbsp;&nbsp;
<img src="./repo_readme_assets/logo-yarn.png" height="55">&nbsp;&nbsp;
<img src="./repo_readme_assets/logo-es6.png" height="55">&nbsp;&nbsp;
<img src="./repo_readme_assets/logo-babel.png" height="55">&nbsp;&nbsp;
<img src="./repo_readme_assets/logo-webpack.png" height="55">&nbsp;&nbsp;
<img src="./repo_readme_assets/logo-react.png" height="55">&nbsp;&nbsp;
<img src="./repo_readme_assets/logo-sass.png" height="55">&nbsp;&nbsp;

- [x] Yarn / Npm package managers
- [x] ES6 supported
- [x] React
- [x] Babel
- [x] Webpack
- [x] Moment for date manipulations
- [x] Google map visual geolocalization

---



## __Set up project__

Before cloning the repo **be sure** you have installed:

* [Node](http://nodejs.org/download/) (version >= 8.8.x)
* [Yarn](https://yarnpkg.com/en/docs/install) (version >= 1.2.x)
* [Npm](https://www.npmjs.com/) (version >= 5.5.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder `git clone https://github.com/ibbatta/react-flipcard.git`

---



## __Installation__

To install the project and all dependencies, run (from the directory of the project):

```bash
# install dependencies
npm install
```

or

``` bash
# install dependencies
yarn
```

---



## __Run the project__

##### run the project to develop
```bash
npm start
# or
yarn start
```


##### run the project to production
``` bash
npm run build
#or
yarn build
```


##### run the tests
``` bash
# WORK IN PROGRESS (actually doesn't work)
npm run test
#or
yarn test
```

---



# __Editor setup__

To keep consistency to the style of resources, I decided to stick to some shared rules that have to be applied to every project using some editors plugins. Plese be sure to disable / remove any other js/jsx linters or custom configurations.


#### Basic Editor Configuration
I chose to use [EditorConfig](http://editorconfig.org/) to share the basic configuration like indentation and charset. It works including an `.editorconfig` file in the root directory and making sure your editor has the necessary plugin. You can find a list of downloads [here](http://editorconfig.org/#download). The choice to keep the indentation with 2 spaces is to be compliant with actual standards (major frameworks use this configuration both for JS and CSS).


#### Auto correction on save
I have chose to use [js-beautify](https://github.com/beautify-web/js-beautify). Despite of his name it works as a beautifier also for HTML and CSS. Every editor has a plugin that implement it, es. [Sublime](https://github.com/victorporof/Sublime-HTMLPrettify), [Atom](https://atom.io/packages/atom-beautify) or [Visual studio](https://www.visualstudio.com/it/?rr=https%3A%2F%2Fwww.google.it%2F). The setup for js-beautify is controlled within a `.jsbeautifyrc` file that have to be included in the root directory of the project (.hbs are not completely supported yet).


#### Eslint
To check on Javascript / React [.js / .jsx] syntax I use [Eslint](http://eslint.org/). The rules to detect errors are written in a `.eslintrc` file included in the root directory of the project (best practice use `airbnb linter`).

---



## __Todo__

- [x] Webpack build optimization for production
- [x] Code optimization (css and js refactoring)
- [ ] Manage errors and when browser doesn't support Html5 geolocation
- [ ] Add i18n for messages
- [ ] Add tests


---


## __Credits__

- [Weatherbit.io](https://api.weatherbit.io) (weather free api)
- [Yihsuan Lu](http://www.yihsuanlu.com/) (weather free icon pack)

---


### __Troubleshootings__ ###

This is just a personal project created for study / demonstration purpose only, it may or may not be a good fit for your project(s).

---



> GitHub [@ibbatta](https://github.com/ibbatta) &nbsp;&middot;&nbsp;
> Twitter [@battago](https://twitter.com/battago)
