# App README Mock

Welcome to my App, where you can see the latest post or read all of them, and also write comments.

Demo at:

App created using [Next.js 13](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [styled-components](https://styled-components.com/) and for testing [Jest](https://jestjs.io/). Thank you for using my app.

**Note:** To run this project be sure to have a Node version installed that is 16.x or higher

## Table of Contents

- [Installation](#installation)
- [Future Work](#future-work)
- [Contributing](#contributing)
- [License](#license)
- [Folder Structure](#folder-structure)
- [Environment variables](#environment-variables)
- [Available Scripts](#available-scripts)
  - [npm run dev](#npm-run-dev)
  - [npm run build](#npm-run-build)
  - [npm run start](#npm-run-start)
  - [npm run test](#npm-run-test)
  - [npm run test:watch](#npm-run-testwatch)
  - [npm run test:coverage](#npm-run-testcoverage)
  - [npm run lint](#npm-run-lint)
  - [npm run format](#npm-run-format)
  - [npm run find:unused](#npm-run-findunused)
  - [npm run install:npm](#npm-run-installnpm)

## Installation

To use this app, first clone from GitHub via 'git clone https://github.com/katiaipduarte' at your terminal, `cd` to the new directory, then run `npm i`. Before running this project, you will need to create a `.env.local` file, with the same env as the ones in the `.env.example`. At last, run `npm run dev` to launch your http server.

If you clone this repository, don't forget to run `npm run prepare` to enable husky.

## Future Work

[ ] Future work examlpe<br>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/katiaipduarte. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License

The code is available as open source under the terms of the MIT License.

## Folder Structure

```
nextjs-template/
    app/
    components/
    constants/
    interfaces/
    types/
    public/
    styles/
    utils/
```

For the project to build, **these files must exist with exact filenames**:

- `components` is the folder that houses all the components used. It's divided for now into 5 modules.
- `constants` is the folder with all the enums or const objects used in the components.
- `interfaces` is the folder with all the interfaces files used in the components.
- `app` is the folder that contains the files with the initial logic used for each route.
- `public` the folder only contains the favicon images.
- `styles` is the folder with reset, themes and any other style rules shared by all components.
- `types` is the folder with all the types files used in the components.
- `utils` is the folder with helper functions.

## Environment variables

NEXT_PUBLIC_APP_URL=

NEXT_PUBLIC_API_ENDPOINT=

## Available Scripts

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run start`

Runs the app in the production mode.<br />
Open [http://localhost](http://localhost) to view it in the browser.

### `npm run lint`

Automatic linting, with rules to work with TypeScript and React. The `node_modules` and `e2e` folders are not included.

This is runned each time you do a commit and a push it to your branch.

For more information see the [ESLint documentation](https://eslint.org/).

### `npm run format`

Command to format the code according to the rules that can be found in `.prettierrc`. The `node_modules` and `e2e` folders is not included.

This will be automatically run each time you do a commit.

For more information see the [Prettier documentation](https://prettier.io/).
