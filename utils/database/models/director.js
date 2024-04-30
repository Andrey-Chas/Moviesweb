import { Schema, model, models } from 'mongoose';

const DirectorSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    biography: { type: String },
    image: { data: Buffer },
    postedBy: { type: Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true
})

const Director = models.Director || model('Director', DirectorSchema);

export default Director;