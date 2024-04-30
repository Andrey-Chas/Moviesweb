import { Schema, model, models } from 'mongoose';

const ArtistSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    biography: { type: String },
    image: { data: Buffer },
    postedBy: { type: Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true
})

const Artist = models.Artist || model('Artist', ArtistSchema);

export default Artist;