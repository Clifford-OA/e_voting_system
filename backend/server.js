import express from 'express';
import mongoose from 'mongoose';
import candidateRouter from './routers/candidateRouter.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/e_voting_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/candidates', candidateRouter);


// const candidates = [
//     {
//         position1: [
//             {
//                 _id: '12345',
//                 name: 'Osei Clifford',
//                 image: 'images/1.jpg',
//                 votes: 0,
//             },
//             {
//                 _id: '23451',
//                 name: 'Osei Prince',
//                 image: 'images/2.jpg',
//                 votes: 0,
//             },
//             {
//                 _id: '34512',
//                 name: 'Osei Hayford',
//                 image: 'images/3.jpg',
//                 votes: 0,
//             },
//             {
//                 _id: '45123',
//                 name: 'Osei Henry',
//                 image: 'images/4.jpg',
//                 votes: 0,
//             }
//         ],
//         position2: [
//             {
//                 _id: 'qwerty',
//                 name: 'Osei Rose',
//                 image: 'images/4.jpg',
//                 votes: 0,
//             },
//             {
//                 _id: 'wertyq',
//                 name: 'Osei Linda',
//                 image: 'images/3.jpg',
//                 votes: 0,
//             },
//             {
//                 _id: 'ertyqw',
//                 name: 'Osei Ellen',
//                 image: 'images/2.jpg',
//                 votes: 0,
//             },
//             {
//                 _id: 'rtyqwe',
//                 name: 'Osei Mavis',
//                 image: 'images/1.jpg',
//                 votes: 0,
//             }
//         ],
//         position3: [
//             {
//                 _id: '12345',
//                 name: 'Osei Clifford',
//                 image: 'images/1.jpg',
//                 votes: 0,
//             },
//             {
//                 _id: '23451',
//                 name: 'Osei Prince',
//                 image: 'images/2.jpg',
//                 votes: 0,
//             },
//             {
//                 _id: '34512',
//                 name: 'Osei Hayford',
//                 image: 'images/3.jpg',
//                 votes: 0,
//             },
//             {
//                 _id: '45123',
//                 name: 'Osei Henry',
//                 image: 'images/4.jpg',
//                 votes: 0,
//             }
//         ],
//     }
// ];


app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res,) => {
    res.status(500).send({ message: err.message });
})


// app.get('/api/candidates', (req, res) => {
//     res.send(candidates);
// });

// app.put('/api/candidates', (req, res) => {
//     const voted_ids = ['12345', 'qwerty', '34512'];
//     const keys = ['position1', 'position2', 'position3'];
//     for (let index = 0; index < keys.length; index++) {
//         candidates[0][keys[index]].forEach(element => {
//             if (voted_ids[index] === element._id) {
//                return element.votes++;
//             }else return;
//         });
//     }
//     res.send(candidates)
// });
// console.log(candidates[0])
// const cand = candidates[0];
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

