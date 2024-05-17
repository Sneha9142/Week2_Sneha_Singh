import express from 'express';
import { insertOrderID } from './service';

const app = express();
const port = 3000;

app.use(express.json());

interface OrderBlock {
  lineNo: number | number[];
  ProductCode: string;
}

interface Order {
  orderID: string;
  orderInvoiceNo: string;
  OrderBlocks: OrderBlock[];
}

interface RequestBody {
  items: Order[];
}

function containsDivisibleBy3(lineNos: number | number[]): boolean {
  if (Array.isArray(lineNos)) {
    return lineNos.some(lineNo => lineNo % 3 === 0);
  }
  return lineNos % 3 === 0;
}

app.post('/api/orders', async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { items } = req.body as RequestBody;

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
        await insertOrderID(orderID);
      }
      res.status(200).json({ message: 'Orders processed and stored successfully' });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error('Processing error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
