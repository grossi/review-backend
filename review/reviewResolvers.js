const reviewResolvers = {
	Query: {
        reviews: async (_, {}, { model }) => {
            return model.Review.find();
        },
		review: async (_, { id }, { model }) => {
            const targetReview = await model.Review.findById(id);
            if( !targetReview )
                throw new Error(`Review Not Found.`);
            return targetReview;
        }
	},
	Mutation: {
        addReview: async (_, { title, text }, { model }) => {
            let newReview = new model.Review({
                title,
                text
            });
            return newReview.save();
        },
	},
};

module.exports = reviewResolvers;