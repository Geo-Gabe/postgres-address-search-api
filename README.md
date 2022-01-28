# address-search-api

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

The PostgreSQL Address Search API provides a fast, convenient way to search for addresses within your PostgreSQL database. With this API, you can quickly connect to your data and find the addresses you need.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

- [PostgreSQL](https://postgresql.org)
- [PostGIS](https://postgis.net)
- [Node JS](https://nodejs.org/)

```
A table that has a column with a full address
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone this repo using a terminal window

```
git clone https://github.com/Geo-Gabe/postgres-address-search-api.git
```

Navigate to the folder you just cloned

```
cd postgresql-address-search-api
```

Install the node modules that the API depends on

```
npm install
```

Rename src/Config/db.sample.js to db.js and add the database connection information

```
cd src/Config/db.js
```

Edit the src/Routes/address.js with your table specific column name

```
const address_column = "COLUMN NAME WITH ADDRESS";
```

## Usage <a name = "deployment"></a>

Start the API

```
npm run start
```

## Endpoint Usage <a name = "usage"></a>

Open http://localhost:3001/api/v1/ <= append the address or partial address after /
