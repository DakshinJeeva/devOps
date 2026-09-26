import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! from local server');
});

app.get('/contactContainer', async (req, res) => {
  const data = await fetch('http://10.201.150.195:8080/');
  res.send(await data.text());
});

app.listen(port, "10.201.150.195", () => {
  console.log(`Server running on port ${port}`);
});
