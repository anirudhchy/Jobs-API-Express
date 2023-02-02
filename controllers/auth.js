const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')
const { UnauthenticatedError } = require('../errors')

const register = async (req,res) => {

    // const { name, email, password } = req.body
    // if(!name || !email || !password){
    //     throw new BadRequestError('Please provide name, email and password')
    // }
            // const { name, email, password } = req.body

            // const salt = await bcrypt.genSalt(10)
            // const hashedPassword = await bcrypt.hash(password,salt)

            // // es6 syntax: name=name, email=email, password=hashedPassword
            // const tempUser = {name,email,password:hashedPassword}

    const user = await User.create({...req.body})
    const token = user.createJWT()
            // const token = jwt.sign({userId:user._id,name:user.name}, 'jwtSecret', {
            //     expiresIn: '30d',
            // })

    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })  
}

const login = async (req,res) => {
    const { email, password } = req.body

    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({email})

     
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    //compare password 
    const isPasswordCorrect = await user.comparePassword(password)
    
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

module.exports = {
    register,
    login, 
}