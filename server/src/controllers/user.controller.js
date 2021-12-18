const User = require("../models/User")

const createUser = async (req, res, next) => {
    const {
        username,
        password,
        email
    } = req.body;
    const newUser = new User({
        username,
        password,
        email
    })
    const savedUser = await newUser.save();
    req.session.user = savedUser;
    next()
}

const getAllUsers = async (req, res, next) => {
    const users = await User.find().then(user=>user).catch(err=>undefined)
    req.session.users = users
    next()
}

const getUserById = async(req, res, next) => {
    const id = req.params.id
    const user = await User.findById(id).then(user=>user).catch(err=>undefined)
    req.session.user = user
    next()
}

const deleteUserById = async(req, res, next) => {
    const id = req.params.id;
    const message = await User.findByIdAndRemove(id).then(user=>"ok").catch(err=>err)
    req.session.user = message
    next()
}

module.exports = {
    createUser, getAllUsers, getUserById, deleteUserById,
}