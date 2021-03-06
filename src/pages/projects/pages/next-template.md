---
title: Next Template
description: A template repository for Nextjs projects
timestamp: 3-12-22
tags:
  - scss
  - javascript
  - nodejs
  - nextjs
  - template
  - typescript
---

# Nextjs Template

Starter project in Next js. It uses TypeScript, Scss, Next, Jest, Prettier, and
ESLint. You don't **_need_** to know all of these technologies to use this.

## Setup

```bash
$ mv .env.example .env # rename env file
$ npm install
$ npm run dev
```

## Jest

#### How-to

If you do not know how to use jest, see their
[Docs Page](https://jestjs.io/docs/getting-started), to learn more.

##### To write a test:

```ts
test('test name', () => {
  expect(<VALUE>).toEqual(<VALUE>);
});
```

###### Note: `test()`, `it()`, and `describe()` are all interchangeable, but `test()` is considered by jest to be a best practice.

##### Example test:

```ts
test("logic works correctly", () => {
  expect(0).toEqual(0);
});
```

Assuming you have a `jest.config.ts` or `jest.config.js` file, and jest
installed, run: `$ npx jest` to run all test suites.

## React

[React](https://github.com/facebook/react) is a frontend Javascript framework
(the best one), that simplifies development.

## TypeScript

[TypeScript](https://github.com/microsoft/TypeScript) is a superset of
JavaScript that introduces types.

When you use TypeScript with React, you can write JSX with TypeScript, called
TSX.

#### tsconfig.json

This template comes with very strict TypeScript settings. See the
[tsconfig docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## SCSS

Scss is a superset of SCSS, that compiles down to CSS. With the `sass` npm
package, react can do this within runtime, so converting from CSS to SCSS is as
easy is switching the file extension.

Converting from Scss to Css is as easy as replacing file extensions and removing
the `sass` package from `package.json`.

### Support me!

[![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/cooperrunyE)
