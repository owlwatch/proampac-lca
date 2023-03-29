# ProAmpac LCA

The ProAmpac LCA tool is an interactive data visualization. It can be added to a page by including a javascript file, a stylesheet, and then adding some `<div>` elements that will be populated with their corresponding interface elements.

## Installation

The javascript and stylesheet files to be included can be found in the `dist` directory. They include a hash in the filename. Include these on the page (it shouldn't matter if its in the `head` or `body`).

The `div` containers available are:

## `proampac-lca-report` 

This is the primary component that renders the main content. You need to provide it the Google Sheet ID and Api Key.

### Example

```
<div data-proampac-component="proampac-lca-report"
    data-google-sheet-id="google_sheet_id"
    data-google-api-key="google_api_key"
></div>
```

## `proampac-lca-selector`

This element renders the dropdown that allows a user to select the 

### Example
```
<div data-proampac-component="proampac-lca-selector"></div>
``` 

___
> **Note**  
> 
> The rest of this README is for developers, and basically just the
> boilerplate documentation for vite apps.
>
> You can use Gitpod.io for a no-muss-no-fuss dev environment

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
