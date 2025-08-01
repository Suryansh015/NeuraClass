"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userschema = new mongoose_1.default.Schema({
    userName: String,
    email: String,
    password: String
});
exports.userModel = mongoose_1.default.model("user", userschema);
