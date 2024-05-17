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
exports.insertOrderID = void 0;
const pgConfig_1 = __importDefault(require("./pgConfig"));
function insertOrderID(orderID) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!orderID) {
            throw new Error('Order ID is null or undefined'); // Add this check
        }
        const client = yield pgConfig_1.default.connect();
        try {
            const query = 'INSERT INTO orders(orderid) VALUES($1)';
            yield client.query(query, [orderID]);
        }
        catch (error) {
            console.error('Error inserting data:', error);
            throw error;
        }
        finally {
            client.release();
        }
    });
}
exports.insertOrderID = insertOrderID;
//# sourceMappingURL=service.js.map