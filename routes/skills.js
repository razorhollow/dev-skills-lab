import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET skills listing. */
router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new)

//POST -- localhost:3000/skills
router.post('/', skillsCtrl.create)



export {
  router
}
