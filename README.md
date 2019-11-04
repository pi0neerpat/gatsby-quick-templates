<h1 align="center">
  Gatsby Templates
</h1>

|Branch| Description|
|---|---|
|master|Base template|
|...||


## 🚀 Quick start

```shell
# Start
yarn start
```

Open browser at http://localhost:8000

## Set-up

1. Edit `gatsby-config.js` with:
  - siteMetadata
  - SEO details for `gatsby-plugin-manifest`.

2. 

## Features

### 💅 styled-components

Creating a new styled component is as easy as:

```js
const Button = styled.button`
  width: 150px;
  height: 80px;
`
```

### ✨ ESLint + Prettier pre-commit

To ensure good code quality, lint and format rules are enforced prior to commits. To ignore temporarily, add `--no-verify` to your commit. To turn off completely, simply remove these lines from `package.json`

```js
"husky": {
  "hooks": {
    "pre-commit": "yarn lint"
  }
},
```

### Github Pages

Deploys the app upon a successful Travis build (set-up required).


1. In `package.json` edit the deploy script for your repository.

  ```shell
  gatsby build --prefix-paths && gh-pages -d public -r https://$GH_TOKEN@github.com/<repo-owner>/<repo-name>.git
  ```

2. In `gatsby-config.js` edit the `pathPrefix` to the repo name.
3. See `.travis.yml` if you want to modify the deployed branch (default: master)
4. Generate  in your github [token settings](https://github.com/settings/tokens) and add it as `GH_TOKEN`to your Travis Environment Variables. :warning: Do not turn on "Display value in build log".

### 📢👾 Discord Notifications

Ping Discord when a build is successful

1. Generate a Discord Webhook
2. Add it `DISCORD_WEBHOOK_URL` to your Travis Environment Variables.


## Additional resources

[Awesome-Styled-Components](https://github.com/styled-components/awesome-styled-components)
[Gatsby documentation](https://www.gatsbyjs.org/docs/)
