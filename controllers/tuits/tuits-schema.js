import mongoose from "mongoose";
const schema = mongoose.Schema(
    {
        tuit: String,
        likes: Number,
        dislikes: Number,
        liked: Boolean,
        disliked: Boolean,
    },
    { collection: "tuits" }
);
export default schema;
