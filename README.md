# how to publish

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
