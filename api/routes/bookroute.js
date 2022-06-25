import express, { response } from 'express';
import db from '../config/config.js';

const router = express.Router();


//GET ALL BOOKS FROM DB

router.get('/books', async(req,res,next)=>{
    try{
        let allBooks = await db.models.Book.findAll();
        res.status(200).json(allBooks);
    }catch(e){
        throw new Error(e);
    }
})


// DELETE A BOOK FROM DB

router.delete('/delete/:id', async(req, res, next)=>{
    try{
        const id = req.params.id;
        let obj = await db.models.Book.findByPk(id);
        if(obj){
            await obj.destroy();
            res.status(200).json(id);
        }
    }catch(err){
        next(err);
    }
})

// EDIT A BOOK FROM DB

router.put('/edit/:id', async(req, res, next)=>{
    try{
        const id = req.params.id;
        let book = req.body;
        let obj = await db.models.Book.findByPk(id);
        if(obj){
            if(book.title){
                obj.title = book.title;
            }
            if(book.author){
                obj.author = book.author;
            }
            if(book.genre){
                obj.genre = book.genre;
            }
            if(book.year){
                obj.year = book.year;
            }
            if(book.stock){
                obj.stock = book.stock;
            }
            await obj.save();
            res.status(200).json(id);
        }
    }catch(err){
            next(err);
        }
    
})

export default router;
