require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes');
const { errorsHandler } = require('./errors/errorsHandler');

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 5 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const { PORT = 3000, DB_URL = 'mongodb://localhost:27017/bitfilmsdb' } = process.env;

const app = express();

app.use(helmet());

mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log('Подключение к базе данных успешно'))
  .catch((err) => {
    console.log('Ошибка подключения к базе данных', err);
    process.exit(1);
  });

app.use(express.json());
app.use(requestLogger);
app.use(limiter);
app.use(cors());

app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
