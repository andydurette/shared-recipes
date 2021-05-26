import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: {
        required: false,
        type: String,
    },
    twitterId: {
        required: false,
        type: String,
    },
    githubId: {
        required: false,
        type: String,
    },
    username: {
        required: true,
        type: String,
    }
});

const createRecipeSchema = new Schema({
    user_id: {
        required: true,
        type: String,
    },
    cuisine: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
const CreateRecipe = mongoose.model("CreateRecipe", createRecipeSchema);

export { User, CreateRecipe };