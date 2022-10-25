# Todo List

This is a simple Todo List project. Project still in progress and made just to practice skills and also as a portfolio.

The project will have both the beckend and also the fronted. The backend is currently being built with NodeJS.

Basically it will be possible to register users, log in, register tasks and count the time spent in solving problems.

## Install
    
    clone https://github.com/RicardoCassio/Todo-List-Fullstack.git
    cd todo-list-fullstack/backend
    npm install
    sudo docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
    
    necessary to create the database and the appropriate tables. Run the following SQL:
    
## environment settings
 
    Don't forget to create an .env inside the backend folder with the following settings:
    
    MYSQL_HOST=YOUR_HOST
    MYSQL_USER=YOUR_USER
    MYSQL_PASSWORD=YOUR_PASSWD
    MYSQL_DATABASE=todolist

## Run the app

    npm run dev

# REST API

The API that runs on the backend is described below

## Get list of Users

### Request

`GET /users`

    curl -i -H 'Accept: application/json' http://localhost:7000/users

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 674
    ETag: W/"2a2-IAzIq1Rb0pDOPgYHv/fHYpa7j3E"
    Date: Tue, 25 Oct 2022 03:21:17 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5


## Create a new User

### Request

`POST /users`

    curl -i -H 'Accept: application/json' -d 'name=Foo&status=new' http://localhost:7000/thing

### Response

    HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 44
    ETag: W/"2c-eXS2hUbj3z87Gbv6/fB566B/lOk"
    Date: Tue, 25 Oct 2022 03:23:15 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5


    {
      "nome": "User",
      "sobrenome": "master",
      "email": "user@master.com",
      "status": 1,
      "createdAt": "Sat, 22 Oct 2022 14:14:11 GMT"
	  }


## Update a User

### Request

`PUT /users/:id`

    curl -i -H 'Accept: application/json' -X PUT http://localhost:3333/users/1

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 44
    ETag: W/"2c-eXS2hUbj3z87Gbv6/fB566B/lOk"
    Date: Tue, 25 Oct 2022 03:28:22 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {
      "nome": "User",
      "sobrenome": "master",
      "status": 1
	  }

## Delete a User

### Request

`DELETE /users/:id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:3333/users/1

### Response

    HTTP/1.1 204 No Content
    X-Powered-By: Express
    Date: Tue, 25 Oct 2022 03:31:49 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5




