"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const book_1 = __importDefault(require("../controllers/book"));
const router = express_1.default.Router();
router.get('/get/books', book_1.default.getAllBooks);
module.exports = router;
