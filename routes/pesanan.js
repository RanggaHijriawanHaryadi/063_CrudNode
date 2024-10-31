import express from 'express';
const router = express.Router();
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

router.get('/', (req, res) => {
    res.send('Pesanan route!');
});
module.exports = router;
router.post('/',(req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    app.use(express.json());
    todos.push(newTodo);
    res.status(201).json(newTodo);
}) 
module.exports = router;
// Endpoint untuk menghapus tugas
router.delete('/:id', (req,  res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({message: 'Tugas tidak ditemukan'});

    const deleteTodo = todos.splice(todoIndex, 1)[0]; //Menghapus dan menyimpan todo yang dihapus
    res.status(200).json({message: `Tugas '${deleteTodo.task}'telah dihapus` });
});

router.put('/:id', (req, res) =>{
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Tugas tidak ditemukan'});
    todo.task = req.body.task;

    res.status(200).json({
        message: `Tugas dengan ID ${todo.id} telah diperbarui` ,
        updatedTudo:todo
    })


})

export default router