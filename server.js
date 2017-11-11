const PORT = 3000 || PROCESS.ENV.PORT;

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/', function (){
  console.log('hi');
})

app.listen(PORT, function () {
  console.log('listening on port ' + PORT);
});
