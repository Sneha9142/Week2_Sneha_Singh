"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const arrayService_1 = require("./arrayService");
const app = (0, express_1.default)();
const port = 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
app.post('/api/array-operations', (req, res) => {
    const array = req.body.array;
    if (!Array.isArray(array)) {
        return res.status(400).send({ error: 'Invalid input. Expected an array of numbers.' });
    }
    const results = (0, arrayService_1.performArrayOperations)(array);
    res.json(results);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=app2.js.map