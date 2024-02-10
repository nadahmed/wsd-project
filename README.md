## Description

An demo project for WSD using the [Nest](https://github.com/nestjs/nest) framework.

* Application: http://localhost:3000

* Swagger Docs: http://localhost:3000/docs

## Usage

1. Visit http://localhost:3000. 

2. Upload a .txt file. You should be redirect to the resource page.

    ![alt text](https://github.com/nadahmed/wsd-project/blob/main/screenshots/home_page.png?raw=true)

3. On the resource page click on any action button to see the analyzed result.

    ![alt text](https://github.com/nadahmed/wsd-project/blob/main/screenshots/resource_page.png?raw=true)

## Running with Docker Compose

```bash
$ docker-compose up
```

## Install Manually

### Requirements

* [Node 18](https://yarnpkg.com/)

* [Postgres database](https://www.postgresql.org/)

* [Yarn](https://yarnpkg.com/)

* Linux (Tested on WSL), Windows or Mac OS

### Setup

* Install packages from the project directory

  ```bash
  $ yarn install
  ```
* Copy the content in .env.template to .env file and set the environment variables in the .env file.

  ```bash
  $ cat .env.template > .env
  ```

## Environment Variables

<b>SESSION_SECRET</b>: A string containing random letters used to encrypt the session ID.

<b>NODE_ENV</b>: Use ```development``` for sqlite database or ```production``` for Postgres database.

<b>DATABASE_URL</b>: Required if 'NODE_ENV' is set to ```production```. Format: ```postgres://<username>:<password>@<host>:<port>/<database>```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run build
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test
```

## Stay in touch

- Author - [Noor Al Din Ahmed](https://linkedin.com/in/nadahmed)
- Email - [nooraldinahmed@gmail.com](mailto:nooraldinahmed@gmail.com)
