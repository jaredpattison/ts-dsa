import express, { Application } from 'express';
import cors from 'cors';
import { handleNotFound } from './views/404';
import { handleServerError } from './views/500';

const app: Application = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h2> Hey day2?<h2>');
});
app.post('/save', (req, res) => {
    res.json(req.body);
});

app.use(handleNotFound);
app.use(handleServerError);

app.listen(port, () => {
    console.log(`Server up at http://localhost:${port}`);
});
