// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('ultimate','root','',{

//     host:'localhost',
//     dialect :'mysql' ,
//     operatorsAliases: false,

//     pool: {

//         max: 5,
        
//         min: 0,
        
//         acquire: 30000,
        
//         idle: 10000
        
//         }

// })

// const db = {};


// db.Sequelize = Sequelize;
// db.sequelize = sequelize;



// db.users = require("../common/models/user")(sequelize, Sequelize);



const admin=require('firebase-admin');

const serviceAccount = require('./test-fa6dd-firebase-adminsdk-mw104-0f601d0b6e.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // authDomain: "test-fa6dd.firebaseapp.com",
    databaseURL: "https://test-fa6dd-default-rtdb.firebaseio.com/",
    
});

const db = admin.firestore()




module.exports = db;


