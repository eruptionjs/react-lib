# Eruption🌋 React Lib

Your production go-to model to easily publish a lib/components to npm and github package registry, for your React/Typescript projects.

## how to use

The project is ready to be used as a template for your own lib. You can clone it or use the Eruption🌋 CLI to create a new project (available soon).

## how to develop

The project have two separated structures: `lib` is for the lib itself where the components will be developed and will bundle to publish into github/npm, and the `src` where you should use as your usual development mode to develop the library itself. Since we use absolute paths to import the components, you can import the libs/components using `@lib/` prefix, the same way you would do with `@src/`.

## how to publish

Before you publish, don't forget to change the lib name in the `package.json` file. The name is the one that will be used to install the package in other projects. Also, don't forget to change the `package.json` version, description and author, too. Homepage, bugs and repository, should be changed as well and reflect the repository that your project lives in (aka github).

A friendly reminder that you can't publish a package with the same version twice, and you can't publish a private package to npm with a free account. In addition, to publish via github, you need to have a personal access token with the right access to publish packages. You can create one in your github account settings. Check the docs for further details.

This project takes a lot of opinions of how a lib should be structured, developed and published. If you want to change the structure, take your time to understand each config under `vite.config.ts` and `tsconfig.json` files. You should be able to follow with the official vite and rollup docs.

## how to publish to github/npm

- run

```bash
npm login --scope=@<username> --registry=https://npm.pkg.github.com
```

- authenticate with your github `username` and your `personal access token`:

```bash
Username: <username>
Password: <personal access token>
```

- If you have the right access with your token, you can then publish your package:

```bash
npm publish
```

Then, if everything if your access is right, ti will be published to your github package registry and be available to install as a dependency in other projects:

```bash
npm install @<username>/<package-name>
```
