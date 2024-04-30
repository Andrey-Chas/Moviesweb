import { Schema, model, models } from 'mongoose';

const CommentSchema = new Schema({
    comment: { type: String, required: true },
    postedBy: { type: Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true
})

const Comment = models.Comment || model('Comment', CommentSchema);

export default Comment;