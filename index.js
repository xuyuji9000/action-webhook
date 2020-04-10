const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


app.post('/', function(request, response){
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
