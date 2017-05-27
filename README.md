# vue-letter-avatar

![demo](https://raw.github.com/aidewoode/vue-letter-avatar/master/test/demo.png)

## Introduction
An elegant and easy to use letter avatar component for vue.js 2.0+

## Install
```shell
$ yarn add vue-letter-avatar
```

or

```shell
$ npm install vue-letter-avatar
```

## Usage

```js
import VueLetterAvatar from 'vue-letter-avatar';

Vue.use(VueLetterAvatar);
```

Create avatar
```js
<vue-letter-avatar name='aide' size='40' :rounded=true />

```

## Properties

| Name    | Required | Type    | Default | Description            |
| ---     | ---      | ---     | ---     | ---                    |
| name    | true     | String  |         | the name of avatar     |
| size    | false    | String  | 50      | the size of avatar     |
| rounded | false    | Boolean | false   | if is a rounded avatar |

## Development

```shell
// first clone the repo

$ git clone https://github.com/aidewoode/vue-letter-avatar.git

// install all dependencies

$ yarn install

// you can check the result on development server

$ yarn run server

// bundle the file

$ yarn run bundle
```
