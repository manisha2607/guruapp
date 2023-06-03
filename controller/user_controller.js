const User = require('../model/user');
const jwt = require('jsonwebtoken');

module.exports.register_user = async (req, res) => {
    try {
        // handeling if user already exist
        const user = await User.findOne({email : req.query.email});
        if(user) {
            return res.status(401).json({
                success: false,
                messaage: 'User already exist! Just go and sign-in!'
            })
        } else {
            const user = await User.create(req.body);
            return res.status(200).json({
               messaage: 'User signed-up successfuly!',
               data: user
            })
        }
    } catch (error) {
        return res.status(500).json({
            messaage: 'Internal Server Error!'
        })
    }
}




module.exports.signIn_user = async (req, res ) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(401).json({
                success: false,
                messaage: 'user not found!!!'
            })
        }else{
            if(user.password != password){
                return res.status(401).json({
                    success: false,
                    messaage: 'Invalid username/password!!!'
                })
            }
            let token = jwt.sign(user.toJSON(), "secret_key", {expiresIn: '24h'})
            return res.status(200).json({
                success: true,
                messaage: 'login successfully',
                data: user,
                token: token
            })
        }
    } catch (error) {
        return res.status(500).json({
            messaage: 'Internal Server Error!'
        })
    }
}