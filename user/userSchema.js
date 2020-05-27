import { gql } from 'apollo-server';

const userTypeDef = gql`
	type User {
		id: ID!
		name: String!
		password: String!
		passwordSalt: String!
		email: String!
		lastLogin: String
	}
	extend type Query {
		user(id: ID!): User
	}
	extend type Mutation {
        addUser(name: String!, password: String!, passwordSalt: String!, email: String!): User
		authUser(email: String!, password: String!): String!
	}
`;

export default userTypeDef;
