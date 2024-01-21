
const User = require('../models/user')

const getAllUsers = async (req, res) => {
    const users = await User.find({})
    return res.json({ users, msg: "sucess" })
    // res.render('Users' , {users:users})
}

const getUser = async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ _id: id })
    res.json({ user, msg: "success" })
}

const createUser = async (req, res) => {
    const { name, age, billAmt } = req.body

    if (!name || !age || !billAmt) {
        res.json("All field are required..")
    }

    const result = await User.create({
        name: name,
        age: age,
        billAmt: billAmt
    })

    res.json({ result, msg: "success" })
}

const editUser = async (req, res) => {
    const { name, age, billAmt } = req.body;
    const editUser = await User.updateOne({ _id: req.params.id }, {
        $set: {
            name: name,
            age: age,
            billAmt: billAmt
        }
    })

    res.json({ editUser, msg: "success" })
}

const deleteUser = async (req, res) => {
    const deleteUser = await User.deleteOne({ _id: req.params.id })
    res.json({ deleteUser, msg: "user deleted" })
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    editUser,
    deleteUser
}