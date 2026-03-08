import { Router } from 'express'
import * as teamController from '../controllers/teamController'
import { validate } from '../middleware/validate'
import { teamMemberSchema } from '../validations'

const router = Router()

router.get('/', teamController.getAllTeamMembers)
router.get('/:id', teamController.getTeamMemberById)
router.post('/', validate(teamMemberSchema), teamController.createTeamMember)
router.put('/:id', validate(teamMemberSchema.partial()), teamController.updateTeamMember)
router.delete('/:id', teamController.deleteTeamMember)

export default router
