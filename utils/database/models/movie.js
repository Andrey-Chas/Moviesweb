import { Schema, model, models } from 'mongoose';

const MovieSchema = new Schema({
    name: { type: String, required: true },
    yearOfRelease: { type: Date, required: true },
    genre: { type: String, required: true },
    artist: { type: [Schema.Types.ObjectId], ref: "Artist" },
    director: { type: [Schema.Types.ObjectId], ref: "Director" },
    description: { type: String },
    imageMain: { type: Buffer },
    image: { type: [Buffer] },
    comment: { type: [Schema.Types.ObjectId], ref: "Comment" },
    postedBy: { type: Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true
})

const Movie = models.Movie || model('Movie', MovieSchema);

export default Movie;