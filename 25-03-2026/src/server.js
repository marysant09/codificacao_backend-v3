import express from 'express'
import router from './routes/filmes.route.js';
const app = express();
app.use(express.json())
const port = 3000;



app.use(express.json());

// rota principal
app.use('/filmes', router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});