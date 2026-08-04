
const express = require("express")
const app = express()
const sum = require("./sum")
const sub = require("./sum")

app.get('/getsum/:a/:b', function(req, res) {

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const result = sum(a, b);

    res.json({
        ans: result
    });
});

app.listen(3030,()=>{
    console.log(`server is running in port...${3030}`)
})