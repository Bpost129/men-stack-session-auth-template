import { Router } from 'express'

const router = Router()

// GET localhost:3000/
router.get('/', function(req, res) {
  console.log(req.session, '<- in index route')
  res.render('index')
})

export { router }
