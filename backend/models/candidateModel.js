import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';


const candidateSchema = new mongoose.Schema({
    // name: {type: String, default: 'Cliff'},
    // date_commence: { type: Date, required: true, default: Date.now() },
    candidates: [
        {
            cand_id: {type: String, default: uuidv4().toString(), unique: true},
            position: { type: String, required: true },
            name: { type: String, required: true },
            image: { type: String, required: true },
            vote: { type: Number, default: 0 },
        }
    ],

});

const Candidate = mongoose.model('Candidate', candidateSchema);
export default Candidate;