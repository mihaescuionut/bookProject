import express from 'express';
import cors from 'cors';
import db from './config/config.js';
import dotenv from 'dotenv';
import bookRoute from './routes/bookroute.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', bookRoute);


db.sequelize.sync().then(()=>{
app.listen(3000, ()=>{
    console.log('ceva');
})
})