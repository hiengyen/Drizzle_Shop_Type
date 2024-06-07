import { Request, Response, Router } from 'express'
import auth from './auth'
const router = Router()

router.use('/auth', auth)

router.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

export default router
