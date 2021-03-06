# Red Hat iPaaS API

[![CircleCI](https://circleci.com/gh/redhat-ipaas/ipaas-api.svg?style=svg)](https://circleci.com/gh/redhat-ipaas/ipaas-api)

The API for Red Hat iPaaS - a flexible, customizable, cloud-hosted platform that provides core integration capabilities as a service. It leverages Red Hat's existing product architecture using OpenShift Online/Dedicated and Fuse Integration Services.

For the client repository, [see here](https://github.com/redhat-ipaas/ipaas-client). For the back end application, please see [this repo](https://github.com/fabric8io/fabric8-forge).

## Overview
This is an enterprise-grade API that uses a layered approach for greater abstraction, improved security, and extendability. It supports:

- A **repository layer**, which is essentially a data access layer (DAL), that allows for multiple data stores and ORMs should you need them. You can simply default this to in-memory and not use an ORM at all.
- A **model layer** that can be mapped to each data store using its own data-mapping file.
- A **service layer** for communicating with any service you'd like (ie Twitter, Facebook), where you can parse and transform data as necessary.
- And, finally, the **interface** that we traditionally know as an API, which returns JSON to users like any RESTful API.

For a more detailed overview of the Red Hat iPaaS API, please see our [Technical Overview](docs/overview.md).

## Technologies
The API uses a few lightweight technologies, consisting of the following:

>- Authentication & ACL: [Everyauth](https://github.com/bnoguchi/everyauth) (may switch to [Passport](http://passportjs.org/))
- Data Store (default): [SQLite](https://www.npmjs.com/package/sqlite3) (supports any you create a schema for)
- Encryption: [Bcrypt](https://www.npmjs.com/package/bcrypt), [Crypto](https://www.npmjs.com/package/crypto)
- Framework: [Express.js](http://expressjs.com/)
- ORM: [Sequelize](http://docs.sequelizejs.com/en/v3/)
- UUID Generator: [node-uuid](https://www.npmjs.com/package/node-uuid)
- Convenience: [Async](https://github.com/caolan/async), [Lodash](https://npmjs.org/package/lodash). [Request](https://www.npmjs.com/package/request)

## Installing
- Clone this repository: `git clone git@github.com:redhat-ipaas/ipaas-api.git`
- Install dependencies with: `npm install` or `npm i`
- Rename `config/development_example.json` to `config/development.json`, or whichever environment you prefer.

## Running
Run `npm start` and the API will be available on [http://127.0.0.1:9090](http://127.0.0.1:9090) or [http://localhost:9090](http://localhost:9090).

## Running the tests
Run `npm test` to run all the unit tests.

## Contributing
For information on contributing to ipaas-api, see [`docs/contributing.md`](./docs/contributing.md).

