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


## Example from the demo:
```html
<!-- you can include these in the head -->
<script type="module" crossorigin src="./assets/index-9442cd30.js"></script>
<link rel="stylesheet" href="./assets/index-81093a18.css">

 <!------------------------
    Begin Demo Area
  -------------------------->
  <section class="hero background-image green" style="background-image: url(https://dev.weareturnstyle.com/proampac/new/images/bg-hero-sustainability-leaves.jpg);">
    <div class="content row align-items-center justify-content-center">
      <div class="col-sm-12 col-md-10 col-lg-8 text-center">
        <div class="description text-center">
          <h1>Using ProActive CHART™ to Help Reach Sustainability Goals</h1>
          <p class="mb-5">
            Reaching sustainability goals can be a challenge. 
            ProAmpac is here to help you understand pathways to success.
            No matter what your goal is, we will work hard to guide you to it.
            Our ProActive Chart™ Life Cycle analysis tool will help you gain a 
            baseline for your current product and packaging formats as well as 
            gain further business insights into how products can play a role in the circular economy.
          </p>
          <div data-proampac-component="proampac-lca-selector">

          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="intro">
    <div data-proampac-component="proampac-lca-report"
      data-google-sheet-id="1_D53QXT0PlRs8rdFza9Wmr69MZCIlnylztEBLa7nLQo"
      data-google-api-key="AIzaSyBlZSpbxCoJ4Af3vPHE7qDp_TZzdzKc3As"
    ></div>
  </section>
  <!------------------------
    End Demo Area
  -------------------------->
  ```

> **Note**
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
