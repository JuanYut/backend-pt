const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router(); // * Permite separar peticiones por cabeceras, metodos, url, etc.
const response = require('./network/response');

let PORT = 666;

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// * RES ---------------------------------------------------------------------------------

// * GET
router.get('/message', (req, res) => {
  console.log(req.headers);
  res.header({ 'custom-header': 'Nuestro valor' });
  response.success(req, res, 'List of messages!');
});

// * POST
router.post('/message', (req, res) => {
  console.log(req.query);

  req.query.error == 'ok'
    ? response.error(req, res, 'Error...', 500, 'Es solo una simulacion.')
    : response.success(req, res, 'Added correctly!', 201);
});

// * DELETE

// * PUT

// * RES ---------------------------------------------------------------------------------

app.use('/app', express.static('public'));

app.listen(PORT);
console.log(`App Listening in port ${PORT}`);
