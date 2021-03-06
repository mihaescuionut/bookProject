import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import Book from '../models/books.js';

dotenv.config(); 
 
const configDB=()=>{

    console.log(process.env.HOST);
    console.log(process.env.DIALECT);
    
    try{
        let sequelize = new Sequelize(process.env.DATABASE, "root", process.env.USER_PASSWORD,
            {
                host: process.env.HOST,
                dialect: process.env.DIALECT
            }
        );

        
        let db={
            models: {} 
        }
 
        db.sequelize = sequelize;
        db.Sequelize = Sequelize;

        db.models.Book=Book(sequelize);


        return db;

    }catch(e){


        throw new Error(e);
    }
}


let db = configDB();


export  default db;