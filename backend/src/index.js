const express = require('express');
const routes = require('./routes')
const cors = require('cors')

const app = express();

app.use(cors());        //cors({origin: 'http://meuapp.com'}) pra quando o app estiver rodando
app.use(express.json());
app.use(routes);
app.listen(3333);