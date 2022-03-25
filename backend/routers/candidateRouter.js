import express from "express";
import Candidate from '../models/candidateModel.js';


const candidateRouter = express.Router();


candidateRouter.post('/seed', async (req, res) => {
    const _candidates = [
        {
            position: ' position1',
            name: 'Osei Clifford',
            image: 'images/1.jpg',
        },
        {
            position: ' position1',
            name: 'Osei Prince',
            image: 'images/2.jpg',
        },
        {
            position: ' position1',
            name: 'Osei Hayford',
            image: 'images/3.jpg',
        },
        {
            position: ' position1',
            name: 'Osei Henry',
            image: 'images/4.jpg',
        },


        {
            position: 'position2',
            name: 'Osei Rose',
            image: 'images/4.jpg',
        },
        {
            position: 'position2',
            name: 'Osei Linda',
            image: 'images/3.jpg',
        },
        {
            position: 'position2',
            name: 'Osei Ellen',
            image: 'images/2.jpg',
        },
        {
            position: 'position2',
            name: 'Osei Mavis',
            image: 'images/1.jpg',
        },

        {
            position: 'position3',
            name: 'Osei Clifford',
            image: 'images/1.jpg',
        },
        {
            position: 'position3',
            name: 'Osei Prince',
            image: 'images/2.jpg',
        },
        {
            position: 'position3',
            name: 'Osei Hayford',
            image: 'images/3.jpg',
        },
        {
            position: 'position3',
            name: 'Osei Henry',
            image: 'images/4.jpg',
        }
    ];
    const candidate = new Candidate({
        candidates: _candidates
    });
    const createdCandidates = await candidate.save();
    res.status(201).send({ message: createdCandidates });
});

candidateRouter.get('/:id', async (req, res) => {
    const candidates = await Candidate.findById(req.params.id);
    if (candidates) return res.send(candidates);
    return res.status(404).send({ message: 'Product Not Found' });
});

candidateRouter.put('/:id', async (req, res) => {
    const candidates = await Candidate.findById(req.params.id);
    if (candidates) {
        const votesIds = req.body.voteIds;
        candidates.candidates.forEach(element => {
            if (votesIds.includes(element._id.toString())) {
                element.vote++;
            }
        });
        const updatedCandidates = await candidates.save();
        res.send({ message: updatedCandidates });
    } else {
        res.status(404).send({ message: 'Candidates not found' });
    }
});

export default candidateRouter;