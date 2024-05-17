import pool from './pgConfig';

export async function insertOrderID(orderID: string): Promise<void> {
  if (!orderID) {
    throw new Error('Order ID is null or undefined'); // Add this check
  }

  const client = await pool.connect();
  try {
    const query = 'INSERT INTO orders(orderid) VALUES($1)';
    await client.query(query, [orderID]);
  } catch (error) {
    console.error('Error inserting data:', error);
    throw error;
  } finally {
    client.release();
  }
}

