import { User } from "../models/user.js"

async function index(req, res) {
  const users = await User.find({})
  res.render('users/index', {
    users
  })
}

async function show(req, res) {
  const selectedUser = await User.findById(req.params.userId)
  res.render('users/show', {
    selectedUser
  })
}

export {
  index,
  show
}