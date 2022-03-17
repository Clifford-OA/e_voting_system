import express from 'express';

const app = express();

const candidates = [
    {
        position1: [
            {
                _id: '12345',
                name: 'Osei Clifford',
                image: 'images/1.jpg',
            },
            {
                _id: '23451',
                name: 'Osei Prince',
                image: 'images/2.jpg',
            },
            {
                _id: '34512',
                name: 'Osei Hayford',
                image: 'images/3.jpg',
            },
            {
                _id: '45123',
                name: 'Osei Henry',
                image: 'images/4.jpg',
            }
        ],
        position2: [
            {
                _id: 'qwerty',
                name: 'Osei Rose',
                image: 'images/4.jpg',
            },
            {
                _id: 'wertyq',
                name: 'Osei Linda',
                image: 'images/3.jpg',
            },
            {
                _id: 'ertyqw',
                name: 'Osei Ellen',
                image: 'images/2.jpg',
            },
            {
                _id: 'rtyqwe',
                name: 'Osei Mavis',
                image: 'images/1.jpg',
            }
        ],
        position3: [
            {
                _id: '12345',
                name: 'Osei Clifford',
                image: 'images/1.jpg',
            },
            {
                _id: '23451',
                name: 'Osei Prince',
                image: 'images/2.jpg',
            },
            {
                _id: '34512',
                name: 'Osei Hayford',
                image: 'images/3.jpg',
            },
            {
                _id: '45123',
                name: 'Osei Henry',
                image: 'images/4.jpg',
            }
        ],
    }
];


app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/candidates', (req, res) => {
    res.send(candidates[0]);
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

