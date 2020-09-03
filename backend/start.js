const express = require('express');//framework pt comm
const morgan = require('morgan'); //middleware de logare
const helmet = require('helmet'); //middleware de securitate
const cors = require('cors');//necesar ca sa mearga https

const routes = require('./routes');//creaza legaturi cu tabelele

const app = express();

app.use(helmet());//security
app.use(cors());
app.options("*", cors());
app.use(morgan(':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//documentez un pic

app.use('/', routes);

// handler de erori declarat ca middleware
app.use((err, req, res, next) => {
    console.trace(err);
    let status = 500;
    let message = 'Something Bad Happened';
    if (err.httpStatus) {
        status = err.httpStatus;
        message = err.message;
    }
    res.status(status).json({
        error: message,
    });
});


app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${process.env.PORT}`);
});
