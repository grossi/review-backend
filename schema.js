import { merge } from 'lodash';
import { gql } from 'apollo-server';
import userTypeDef from './user/userSchema';
import userResolvers from './user/userResolvers';
import reviewTypeDef from './review/reviewSchema';
import reviewResolvers from './review/reviewResolvers';

const queryTypeDef = gql`
	type Query
	type Mutation
`;

module.exports = {
	typeDefs: [ 
		queryTypeDef,
		userTypeDef,
		reviewTypeDef,
	],
	resolvers: merge( 
		userResolvers, 
		reviewResolvers, 
	)
};