import express from 'express';
import templatesRouter from './routes/template_routes.js';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(cors({ origin: 'https://assignment-frontend-gamma.vercel.app' }));
app.use(express.json());

app.use('/api/templates', templatesRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));