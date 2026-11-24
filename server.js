
const express = require('express');
const path = require('path');
const db = require('./database/db');

const app = express();
const PORT = process.env.PORT || 3000;

// EJS sablonu variklis
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Statiniai failai
app.use(express.static(path.join(__dirname, 'public')));

// Pradzios puslapis
app.get('/', (req, res) => {
    res.render('index');
});

// Uzdaviniu katalogas
app.get('/challenges', (req, res) => {
    const challenges = db.prepare(`
        SELECT
            challenges.id,
            challenges.title,
            challenges.description,
            challenges.difficulty,
            challenges.points,
            categories.name AS category
        FROM challenges
        INNER JOIN categories
            ON challenges.category_id = categories.id
        ORDER BY challenges.id
    `).all();

    res.render('challenges', { challenges });
});

// Atskiro uzdavinio puslapis
app.get('/challenges/:id', (req, res) => {
    const challenge = db.prepare(`
        SELECT
            challenges.id,
            challenges.title,
            challenges.description,
            challenges.difficulty,
            challenges.points,
            categories.name AS category
        FROM challenges
        INNER JOIN categories
            ON challenges.category_id = categories.id
        WHERE challenges.id = ?
    `).get(req.params.id);

    if (!challenge) {
        return res.status(404).send('Uždavinys nerastas');
    }

    res.render('challenge', { challenge });
});

// Serverio paleidimas
app.listen(PORT, () => {
    console.log(`Server is up: http://localhost:${PORT}`);
});
