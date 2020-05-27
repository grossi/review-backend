import config from '../config.json';
import jwt from 'jsonwebtoken'; 

const userResolvers = {
	Query: {
		user: async (_, { id }, { model }) => {
            const targetUser = await model.User.findById(id);
            if( !targetUser )
                throw new Error(`User Not Found.`);
            return targetUser;
        }
	},
	Mutation: {
        addUser: async (_, { name, password, passwordSalt, email }, { test, model }) => {
            console.log(" test ", test );
            let existingUser = await model.User.findOne({ email });
            if ( existingUser )
                throw new Error(`Email Already Registered.`);
            let newUser = new model.User({
                name,
                password,
                passwordSalt,
                email: String(email).toLowerCase()
            });
            return newUser.save();
        },
		authUser: async (_, { email, password }, { model }) => {
            email = String(email).toLowerCase();
            let user = await model.User.findOne({ email, password }).catch(e => { throw e });
            if( user ) {
                const token = jwt.sign(
                    { userId: user._id },
                    config.secret,
                    { "algorithm": "HS256", expiresIn: '24h' }
                );
                user.lastLogin = Date.now();
                user.save();
                return token;
            } else {
                throw Error("User not found while trying to authenticate");
            }
        },
	},
};

module.exports = userResolvers;