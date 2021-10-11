import { NextFunction, Request, Response } from 'express';
import IBook from '../interfaces/book';
import Book from '../models/book';

const getAllBooks = async(req: Request, res: Response) => {
    console.log("hi here is controller");
    // Book.find()
    //     .exec()
    //     .then((results) => {
    //         return res.status(200).json({
    //             books: results,
    //             count: results.length
    //         });
    //     })
    //     .catch((error) => {
    //         return res.status(500).json({
    //             message: error.message,
    //             error
    //         });
    //     });
    try {
        const book: any = await Book.find();
        console.log(book);
        return res.status(200).json(book);
    } catch (err) {
        console.log(err);
        
    }
};

export default { getAllBooks };
