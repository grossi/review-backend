import mongoose from 'mongoose';

let db = mongoose.connect('mongodb://localhost/review', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

export default db;
