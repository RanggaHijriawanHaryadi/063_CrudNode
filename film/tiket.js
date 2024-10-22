import express  from "express";

const router =  express.Router();

const tiket = [
    {
        judul: "Tomorrowland",
        jamTayang: "12:50 PM",
        studio: "Studio 2",
        nomorKursi: "G5",
    },
    {
        judul: "The Dark Knight",
        jamTayang: "15:00 PM",
        studio: "Studio 1",
        nomorKursi: "B7",
    }
];

router.get("/", (req, res) => {
    res.send(tiket);
});

export default router