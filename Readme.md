## Connect E-Project 

The project is a network for colleagues at Groupomania, to share content an interact with each other. 

### Installation:

Each folder has a package.json with the dependencies need to run the project.

Step 1- Go into the backend directory

`cd backend`

Step 2- Install the dependencies of the project

`npm install`

Step 3- Go into the frontend directory(in another tab)

`cd gofullstack/worknetwork`

Step 4- Install the dependencies of the frontend project

`npm install`

### Running the software

In the backend project 

`nodemon`

For the database I recommend to use Postgres, in the file named `backend/config/database.js` you can change the credentials for the database name and postgres password

```
module.exports = new Sequelize(<your database name>, <username>, <your password>, {
    host: 'localhost',
    dialect: 'postgres',
    
  });
```

In the frontend project 

`npm run serve`



## Technologies used

- Bootstrap vue
- Vue js
- Vuelidate
- Sweetalert
- Express
- Postgres/Sequelize
 