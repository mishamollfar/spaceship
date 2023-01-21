<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Api project to serve calculated suitable spaceship configurations based on the various requirements.

## Api routes

```bash
- /api - starter message
- /api/getVesselConfigs - configuration spaceships by parameter
- /api/scanner - all scanners save by collection
- /api/scanner - create new document into scanner collection by body parameters
- /api/scanner/:id - show scanner by id
- /api/scanner/:id - find scanner by id and update field by body parameters
- /api/scanner/:id - remove scanner by id
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Build app

```bash
# build
$ npm run build
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Format code

```bash
# format code by prettier
$ npm run format

# check lint code by eslint
$ npm run lint
```
