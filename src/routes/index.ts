import express from 'express'
import { Express, Request, Response } from 'express'

const router = express.Router()

router.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))
// router.post('/auth/register', register)
// router.post('/auth/login', login)
// router.get('/users', isAuthenticated, getAllUsers)
//

export default router
