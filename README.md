# Grid and Cloud computing. Educational project.
## Three types of connections to database: local, docker and cloud


------------------------------

### Demo

To watch a short demo (6:26 minutes) you can use the following link:

https://youtu.be/WQf3D2zHAdM

------------------------------

### Stack
Server - Node.js + Express

Database - MongoDB

------------------------------

### Business model
Entity: ```User```

Fields:

| field      | type     |
|----------|----------|
| name | *string* |
| patronymic | *string* |
| company | *string* |
| cat_guy | *bool* |
| email | *string* |

------------------------------
### Object generator

A random generator generates objects like that:
```bash
name: "Gosha1",
patronymic: "Olegovich8",
company: "OOO Mouse and Banana 23" + rand3,
cat_guy: 1,
email: `gosha@gmail5.com`,
``` 

-----------------------------

### Docker mongo

First of all, you need to run docker mongo container like that
```bash
docker run -d -p 27018:27017 --name my-mongo mongo:latest
```

------------------------------

### Server

Server starts on port 3000 with the following command:

```bash
node index.js
```

Then it connects to local database (on port 27017), to docker database (on port 27018) and to cloud database

After you see in the console these lines:

```bash
Connected to local MongoDB!!
Connected to docker MongoDB!!
Connected to cloud MongoDB!!
server is up on port: 3000
```
You can open in the browser ```localhost:3000``` and start using this app

-----------------------------


### Endpoints

Server has 3 endpoints, all accepting only GET requests:
- /create - creates randomly generated object and writes it to all three databases and displays in console an object and timings for each database
- /find - finds all objects in all three databases and displays in console timings for each database
- /deleteall - deletes all objects in all three databases and displays  in console timings for each database

-----------------------------
### Example
The examples of console outputs with the timings for different operations (creating, getting and deleting) you can see below:


    CREATING
    Creating an user object:  {
        name: 'Gosha9',
        patronymic: 'Olegovich7',
        company: 'OOO Mouse and Banana 41',
        cat_guy: 0,
        email: 'gosha@gmail1.com'
    }
    Time of creating an object in docker database: 53 ms
    Time of creating an object in cloud database: 77 ms
    Time of creating an object in local database: 164 ms
    ---------------------------------------
    CREATING
    Creating an user object:  {
        name: 'Gosha3',
        patronymic: 'Olegovich9',
        company: 'OOO Mouse and Banana 93',
        cat_guy: 0,
        email: 'gosha@gmail0.com'
    }
    Time of creating an object in local database: 29 ms
    Time of creating an object in docker database: 71 ms
    Time of creating an object in cloud database: 73 ms
    ---------------------------------------
    CREATING
    Creating an user object:  {
        name: 'Gosha7',
        patronymic: 'Olegovich8',
        company: 'OOO Mouse and Banana 32',
        cat_guy: 0,
        email: 'gosha@gmail8.com'
    }
    Time of creating an object in local database: 55 ms
    Time of creating an object in docker database: 55 ms
    Time of creating an object in cloud database: 109 ms
    ---------------------------------------
    CREATING
    Creating an user object:  {
        name: 'Gosha9',
        patronymic: 'Olegovich2',
        company: 'OOO Mouse and Banana 46',
        cat_guy: 0,
        email: 'gosha@gmail8.com'
    }
    Time of creating an object in local database: 20 ms
    Time of creating an object in docker database: 23 ms
    Time of creating an object in cloud database: 105 ms
    ---------------------------------------
    CREATING
    Creating an user object:  {
        name: 'Gosha0',
        patronymic: 'Olegovich7',
        company: 'OOO Mouse and Banana 53',
        cat_guy: 0,
        email: 'gosha@gmail3.com'
    }
    Time of creating an object in local database: 19 ms
    Time of creating an object in docker database: 26 ms
    Time of creating an object in cloud database: 65 ms
    ---------------------------------------
    CREATING
    Creating an user object:  {
        name: 'Gosha4',
        patronymic: 'Olegovich6',
        company: 'OOO Mouse and Banana 2',
        cat_guy: 1,
        email: 'gosha@gmail2.com'
    }
    Time of creating an object in local database: 17 ms
    Time of creating an object in docker database: 24 ms
    Time of creating an object in cloud database: 64 ms
    ---------------------------------------
    GETTING
    Time of finding 6 objects in local database: 23 ms
    Time of finding 6 objects in docker database: 43 ms
    Time of finding 6 objects in cloud database: 62 ms
    ---------------------------------------
    GETTING
    Time of finding 6 objects in local database: 18 ms
    Time of finding 6 objects in docker database: 33 ms
    Time of finding 6 objects in cloud database: 61 ms
    ---------------------------------------
    GETTING
    Time of finding 6 objects in local database: 19 ms
    Time of finding 6 objects in docker database: 38 ms
    Time of finding 6 objects in cloud database: 65 ms
    ---------------------------------------
    GETTING
    Time of finding 6 objects in local database: 41 ms
    Time of finding 6 objects in docker database: 44 ms
    Time of finding 6 objects in cloud database: 59 ms
    ---------------------------------------
    GETTING
    Time of finding 6 objects in local database: 16 ms
    Time of finding 6 objects in docker database: 25 ms
    Time of finding 6 objects in cloud database: 77 ms
    ---------------------------------------
    DELETING
    Time of deleting 6 objects in docker database: 17 ms
    Time of deleting 6 objects in local database: 43 ms
    Time of deleting 6 objects in cloud database: 69 ms
    ---------------------------------------
    DELETING
    Time of deleting 0 objects in docker database: 18 ms
    Time of deleting 0 objects in local database: 23 ms
    Time of deleting 0 objects in cloud database: 51 ms
    ---------------------------------------
    DELETING
    Time of deleting 0 objects in local database: 12 ms
    Time of deleting 0 objects in docker database: 17 ms
    Time of deleting 0 objects in cloud database: 59 ms
    ---------------------------------------
    GETTING
    Time of finding 0 objects in local database: 15 ms
    Time of finding 0 objects in docker database: 20 ms
    Time of finding 0 objects in cloud database: 62 ms
    ---------------------------------------
    GETTING
    Time of finding 0 objects in local database: 11 ms
    Time of finding 0 objects in docker database: 14 ms
    Time of finding 0 objects in cloud database: 59 ms
    ---------------------------------------
    CREATING
    Creating an user object:  {
        name: 'Gosha4',
        patronymic: 'Olegovich4',
        company: 'OOO Mouse and Banana 84',
        cat_guy: 1,
        email: 'gosha@gmail2.com'
    }
    Time of creating an object in local database: 20 ms
    Time of creating an object in docker database: 20 ms
    Time of creating an object in cloud database: 74 ms
    ---------------------------------------
    CREATING
    Creating an user object:  {
        name: 'Gosha6',
        patronymic: 'Olegovich8',
        company: 'OOO Mouse and Banana 26',
        cat_guy: 1,
        email: 'gosha@gmail0.com'
    }
    Time of creating an object in local database: 21 ms
    Time of creating an object in docker database: 24 ms
    Time of creating an object in cloud database: 68 ms
    ---------------------------------------
    CREATING
    Creating an user object:  {
        name: 'Gosha5',
        patronymic: 'Olegovich9',
        company: 'OOO Mouse and Banana 22',
        cat_guy: 1,
        email: 'gosha@gmail2.com'
    }
    Time of creating an object in local database: 30 ms
    Time of creating an object in docker database: 40 ms
    Time of creating an object in cloud database: 84 ms
    ---------------------------------------
    GETTING
    Time of finding 3 objects in local database: 13 ms
    Time of finding 3 objects in docker database: 19 ms
    Time of finding 3 objects in cloud database: 61 ms
    ---------------------------------------
    GETTING
    Time of finding 3 objects in local database: 13 ms
    Time of finding 3 objects in docker database: 20 ms
    Time of finding 3 objects in cloud database: 65 ms
    ---------------------------------------
    GETTING
    Time of finding 3 objects in local database: 9 ms
    Time of finding 3 objects in docker database: 16 ms
    Time of finding 3 objects in cloud database: 69 ms
    ---------------------------------------
    DELETING
    Time of deleting 3 objects in local database: 10 ms
    Time of deleting 3 objects in docker database: 20 ms
    Time of deleting 3 objects in cloud database: 55 ms
    ---------------------------------------
    DELETING
    Time of deleting 0 objects in local database: 14 ms
    Time of deleting 0 objects in docker database: 19 ms
    Time of deleting 0 objects in cloud database: 57 ms
    ---------------------------------------
    GETTING
    Time of finding 0 objects in local database: 12 ms
    Time of finding 0 objects in docker database: 20 ms
    Time of finding 0 objects in cloud database: 55 ms

---------------------------------------

### Сonclusion

As you can see from the example above, in all three types of operations the local database takes first placе, the docker database takes the second and on the last place goes slowly the cloud database. Although, sometimes local and docker databases are going nose to nose, e.g. in creating a nice fellow named Gosha4 Olegovich4 working in 'OOO Mouse and Banana 84', who is a cat-guy:

    ---------------------------------------
    CREATING
    Creating an user object:  {
        name: 'Gosha4',
        patronymic: 'Olegovich4',
        company: 'OOO Mouse and Banana 84',
        cat_guy: 1,
        email: 'gosha@gmail2.com'
    }
    Time of creating an object in local database: 20 ms
    Time of creating an object in docker database: 20 ms
    Time of creating an object in cloud database: 74 ms
    ---------------------------------------