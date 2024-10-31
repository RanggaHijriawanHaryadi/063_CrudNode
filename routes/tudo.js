const express = require('express');
const router = express.Router();

// Variabel untuk menyimpan daftar todo
const todos = [
    {
        id: 1,
        task: "Belajar JavaScript",
        completed: false
    },
    {
        id: 2,
        task: "Membaca buku",
        completed: false
    },
    {
        id: 3,
        task: "Mengembangkan aplikasi",
        completed: true
    }
];

// Endpoint untuk mendapatkan semua tugas
router.get('/', (req, res) => { res.json(todos); });
// Endpoint untuk menambahkan tugas baru
router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
})
module.exports = router;
// Endpoint untuk menghapus tugas berdasarkan ID
router.delete('/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({ message: 'Tugas tidak ditemukan' });

    const deleteTodo = todos.splice(todoIndex, 1)[0]; //Menghapus dan menyimpan todo yang dihapus
    res.status(200).json({ message: `Tugas '${deleteTodo.task}'telah dihapus` });
});
// Endpoint untuk memperbarui tugas berdasarkan ID
router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Tugas tidak ditemukan' });
    todo.task = req.body.task || todo.task;

    res.status(200).json({
        message: `Tugas dengan ID ${todo.id} telah diperbarui`,
        updatedTudo: todo
    })
})
module.exports = router;