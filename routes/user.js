
const express = require('express')
const router = express.Router()
const path = require('path')
const { getAllUsers, getUser, createUser, editUser, deleteUser } = require('../controllers/user')


router.route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .patch(editUser)
    .delete(deleteUser)

// router.get('/:id', getUser)
// router.post('/', createUser)
// router.patch('/:id', editUser)
// router.delete('/:id', deleteUser)

module.exports = router