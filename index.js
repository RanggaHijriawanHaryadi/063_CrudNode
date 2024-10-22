import express from "express";
import bodyParser from "body-parser";
import pesananRoute from "./routes/pesanan.js";
import tiketRoute from "./film/tiket.js";

const app = express();
const PORT = 8000;



app.use(bodyParser.json());


app.use("/pesanan", pesananRoute); 
app.use("/tiket", tiketRoute); 


app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("Selamat Pagiiii");
});


app.listen(PORT, () => console.log(
    `Server berjalan di port : http://localhost:${PORT}`
));