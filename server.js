const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
secret:"kira",
resave:false,
saveUninitialized:false
}));

app.get("/",(req,res)=>{
res.send("Website Running");
});

app.listen(3000);