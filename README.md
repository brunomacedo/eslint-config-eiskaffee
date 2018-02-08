# ESLint Plugin Eiskaffee

It is just a simple styleguide.

[![project-version](https://img.shields.io/npm/v/eslint-config-eiskaffee.svg?style=flat-square)](https://github.com/brunomacedo/eslint-config-eiskaffee) [![downloads](https://img.shields.io/npm/dt/eslint-config-eiskaffee.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-eiskaffee)

## Installation

```prompt
npm i -D eslint-config-eiskaffee
```

## Usage
Create the file `.eslintrc`.

```json
{
  "extends": "eiskaffee"
}
```

## Fix litte bugs

Create this command in your `package.json` to fix automatically litte bugs like breaklines and convert quotes.

```json
"scripts": {
	"esfix": "./node_modules/.bin/eslint --fix \"**/*.{js,jsx}\""
}
```

```prompt
npm run esfix
```

![eslint-magic](screenshot/example.gif)
