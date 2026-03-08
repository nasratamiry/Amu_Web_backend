import { Router } from 'express'
import * as blogController from '../controllers/blogController'
import { validate } from '../middleware/validate'
import { blogPostSchema } from '../validations'

const router = Router()

router.get('/', blogController.getAllBlogPosts)
router.get('/slug/:slug', blogController.getBlogPostBySlug)
router.get('/:id', blogController.getBlogPostById)
router.post('/', validate(blogPostSchema), blogController.createBlogPost)
router.put('/:id', validate(blogPostSchema.partial()), blogController.updateBlogPost)
router.delete('/:id', blogController.deleteBlogPost)

export default router
