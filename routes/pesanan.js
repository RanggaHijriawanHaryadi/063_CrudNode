import express, { Router } from "express";

const router =  express.Router();

const pesan = [
    {
        namaPemesan: "Siti",
        jumlahTiket: 3,
    },
    {
        namaPemesan: "Rizky",
        jumlahTiket: 2,
    }

];

router.get("/", (req, res) => {
    res.send(pesan);
});

export default router