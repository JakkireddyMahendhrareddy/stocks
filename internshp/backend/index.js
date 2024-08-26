import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// server.js or app.js (Express backend)
app.get('/api/stocks', (req, res) => {
    // Example response
    res.json([{ symbol: 'AAPL', name: 'Apple Inc.' }, { symbol: 'GOOGL', name: 'Alphabet Inc.' }]);
  });
  

// Example route to handle buying stocks
app.post('/api/buy', (req, res) => {
  const { symbol, quantity } = req.body;
  // Implement your buying logic here
  res.json({ message: `Bought ${quantity} shares of ${symbol}` });
});

// Example route to handle selling stocks
app.post('/api/sell', (req, res) => {
  const { symbol, quantity } = req.body;
  // Implement your selling logic here
  res.json({ message: `Sold ${quantity} shares of ${symbol}` });
});
