"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("../models/book"));
const getAllBooks = (req, res, next) => {
    book_1.default.find()
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
exports.default = { getAllBooks };
