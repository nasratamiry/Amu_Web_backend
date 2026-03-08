import { Router } from 'express'
import * as projectController from '../controllers/projectController'
import { validate } from '../middleware/validate'
import { projectSchema } from '../validations'

const router = Router()

router.get('/', projectController.getAllProjects)
router.get('/:id', projectController.getProjectById)
router.post('/', validate(projectSchema), projectController.createProject)
router.put('/:id', validate(projectSchema.partial()), projectController.updateProject)
router.delete('/:id', projectController.deleteProject)

export default router
