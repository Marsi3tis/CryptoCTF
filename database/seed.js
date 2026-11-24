
const db = require('./db');
const crypto = require('crypto');

// Flag maisos funkcija
function hashFlag(flag) {
    return crypto
        .createHash('sha256')
        .update(flag)
        .digest('hex');
}

// Kategorijos
const categories = [
    'Klasikiniai šifrai',
    'XOR',
    'RSA'
];

const insertCategory = db.prepare(`
    INSERT OR IGNORE INTO categories (name)
    VALUES (?)
`);

for (const category of categories) {
    insertCategory.run(category);
}

// Demonstraciniai uzdaviniai
const challenges = [
    {
        title: 'Caesar Cipher',
        description: 'Iššifruok Cezario šifru užkoduotą tekstą.',
        category: 'Klasikiniai šifrai',
        difficulty: 'Lengvas',
        points: 100,
        flag: 'CTF{caesar_demo}'
    },
    {
        title: 'XOR Challenge',
        description: 'Išspręsk demonstracinį XOR uždavinį.',
        category: 'XOR',
        difficulty: 'Vidutinis',
        points: 200,
        flag: 'CTF{xor_demo}'
    },
    {
        title: 'RSA Challenge',
        description: 'Išbandyk savo žinias apie RSA kriptosistemą.',
        category: 'RSA',
        difficulty: 'Sunkus',
        points: 300,
        flag: 'CTF{rsa_demo}'
    }
];

const getCategory = db.prepare(`
    SELECT id FROM categories WHERE name = ?
`);

const getChallenge = db.prepare(`
    SELECT id FROM challenges WHERE title = ?
`);

const insertChallenge = db.prepare(`
    INSERT INTO challenges (
        category_id,
        title,
        description,
        difficulty,
        points,
        flag_hash
    )
    VALUES (?, ?, ?, ?, ?, ?)
`);

for (const challenge of challenges) {
    const category = getCategory.get(challenge.category);

    if (!getChallenge.get(challenge.title)) {
        insertChallenge.run(
            category.id,
            challenge.title,
            challenge.description,
            challenge.difficulty,
            challenge.points,
            hashFlag(challenge.flag)
        );
    }
}

console.log('Database seeded successfully!');

console.table(db.prepare(`
    SELECT id, title, difficulty, points
    FROM challenges
`).all());

db.close();
