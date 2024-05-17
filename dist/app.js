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
const service_1 = require("./service");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
function containsDivisibleBy3(lineNos) {
    if (Array.isArray(lineNos)) {
        return lineNos.some(lineNo => lineNo % 3 === 0);
    }
    return lineNos % 3 === 0;
}
app.post('/api/orders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Request Body:', req.body);
        const { items } = req.body;
        if (!Array.isArray(items)) {
            return res.status(400).json({ error: 'Invalid payload format' });
        }
        const filteredOrderIDs = items.filter(order => {
            return !order.OrderBlocks.some(block => containsDivisibleBy3(block.lineNo));
        }).map(order => order.orderID);
        console.log('Filtered Order IDs:', filteredOrderIDs);
        try {
            for (const orderID of filteredOrderIDs) {
                console.log('Inserting Order ID:', orderID); // Add this log
                yield (0, service_1.insertOrderID)(orderID);
            }
            res.status(200).json({ message: 'Orders processed and stored successfully' });
        }
        catch (error) {
            console.error('Database error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    catch (error) {
        console.error('Processing error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map