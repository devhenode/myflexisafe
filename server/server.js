import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// ✅ Fix: Point to the correct React build folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// API Routes
let items = [
    { "id": "1", "name": "Item 1" },
    { "id": "2", "name": "Item 2" },
    { "id": "3", "name": "Item 3"
    }
];

app.get('/api/items', (req, res) => {
    res.json(items);
});

app.post('/api/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

app.get('/api/items/:id', (req, res) => {
    const id = req.params.id;
    const item = items.find(i => i.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.delete('/api/items/:id', (req, res) => {
    const id = req.params.id;
    items = items.filter(i => i.id !== id);
    res.status(204).send();
});

// ✅ Fix: Serve React frontend correctly
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
