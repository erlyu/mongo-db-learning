import { NextFunction, Request, Response } from 'express';
import Book from '../models/book';

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    Book.find()
        .exec()
        .then((results) => {
            return res.status(200).json({
                books: results,
                count: results.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { getAllBooks };
