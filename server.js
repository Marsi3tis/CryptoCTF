const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.render('index');
});
const challenges = [
    {
        id: 1,
        title: 'Caesar Cipher',
            description: 'Iššifruok Cezario šifru užkoduotą tekstą.',
            category: 'Klasikiniai šifrai',
            difficulty: 'Lengvas',
            points: 100
    },
    {
            id: 2,
            title: 'XOR Challenge',
            description: 'Išspręsk uždavinį, naudodamas XOR operaciją.',
            category: 'XOR',
            difficulty: 'Vidutinis',
            points: 200
    },
    {
            id: 3,
            title: 'RSA Challenge',
            description: 'Išbandyk savo žinias apie RSA kriptosistemą.',
            category: 'RSA',
            difficulty: 'Sunkus',
            points: 300
    }
];
// uzdaviniu katalogas
app.get('/challenges', (req, res) =>{
    res.render('challenges', { challenges });
});
app.get('/challenges/:id', (req, res) =>{
    const challenge = challenges.find(
        c => c.id ===Number(req.params.id)
    );
    if(!challenge){
        return res.status(404).send('Challenge not found')
    }
    res.render('challenge', { challenge});
})
app.listen(PORT, () =>{
    console.log(`Server is up: http://localhost:${PORT}`);

})