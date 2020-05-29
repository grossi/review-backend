import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const reviewSchema = new Schema({
	title: String,
	text: String,
	author: ObjectId
});

module.exports = mongoose.model('Review', reviewSchema);
