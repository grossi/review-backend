import { merge } from 'lodash';
import { gql } from 'apollo-server';
import userTypeDef from './user/userSchema';
import userResolvers from './user/userResolvers';

const queryTypeDef = gql`
	type Query
	type Mutation
`;

module.exports = {
	typeDefs: [ 
		queryTypeDef,
		userTypeDef,
	],
	resolvers: merge( 
		userResolvers, 
	)
};