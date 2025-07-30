"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const JWT_SECRET = "BISON";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/check", (req, res) => {
    res.send("working properly ");
});
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = req.body.userName;
    const password = req.body.password;
    const email = req.body.email;
    const existingUser = yield db_1.userModel.findOne({ email: email });
    if (existingUser) {
        res.status(401).json({
            message: "User Already  Exists "
        });
        return;
    }
    db_1.userModel.create({
        userName,
        password,
        email
    });
    res.status(200).json({
        message: "User Registered Susscefully "
    });
}));
app.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield db_1.userModel.findOne({ email });
    if (!user) {
        res.status(401).json({
            message: "User Does Not exists Create New Account "
        });
    }
    if ((user === null || user === void 0 ? void 0 : user.password) == password) {
        const token = jsonwebtoken_1.default.sign({ userId: user === null || user === void 0 ? void 0 : user._id }, JWT_SECRET);
        res.status(200).json({
            message: "logged in sucessfulle ",
            token
        });
        return;
    }
    else {
        res.status(401).json({
            message: "INCORRECT PASSWORD "
        });
    }
}));
const main = () => {
    app.listen(3001, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("listing to port 3001");
        yield mongoose_1.default.connect("mongodb+srv://satyamsinghu123123:SatyamSingh1@cluster0.z5w55.mongodb.net/techno");
        console.log("connected to mongoo db");
    }));
};
main();
