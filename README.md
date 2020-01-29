# jsonAPI


### Used Software

  - Javascript
  - MongoDB
  - Heroku
  - Express.js
 

 ### Project Description

This is an backend that was built from countries API. 

I created JSON file using API with a lot of information.

It has CRUD functionality: user may retrieve all the data, search a particular country,  create new one and update a country information.


### API RESTful Paths:

| Method  | path  | description  |
|---|---|---|
| GET  | /generalinfo/country  |  all countries  |
| GET  | /generalinfo/country/:name  | Find a country by its name  |
| GET | /generalinfo/country/cap/:name  | Find what country capital is  |
|  POST | /generalinfo/create  |  Create a new country |
|  DELETE | /delete/:id  | Delete a country  |
| PUT | /update  |   Update a country information



### How to start

run Mongo

```sh
$ mongod
$ mongo
```
run index.js using node

```sh
$ node index.js
```
use local host to retrieve the data

