import { gql } from 'apollo-server';

const reviewTypeDef = gql`
	type Review {
		id: ID!
		title: String
		text: String
		author: ID
	}
	extend type Query {
        reviews: [Review]
		review(id: ID!): Review
	}
	extend type Mutation {
        addReview(title: String, text: String!): Review
	}
`;

export default reviewTypeDef;
