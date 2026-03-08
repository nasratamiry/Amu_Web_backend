import { Router } from 'express'
import projectRoutes from './projectRoutes'
import teamRoutes from './teamRoutes'
import blogRoutes from './blogRoutes'
import contactRoutes from './contactRoutes'

const router = Router()

router.use('/projects', projectRoutes)
router.use('/team', teamRoutes)
router.use('/blog', blogRoutes)
router.use('/contact', contactRoutes)

router.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  })
})

export default router
