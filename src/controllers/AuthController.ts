import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { eq } from 'drizzle-orm'
import { db } from '../db/index'
import { users } from '../db/schema' // Make sure this path is correct based on your project structure
import config from '../config/config'

class AuthController {
  static login = async (req: Request, res: Response) => {
    //Check if username and password are set
    let { email, password } = req.body
    if (!(email && password)) {
      return res.status(400).send()
    }

    //Get user from database
    let user
    try {
      user = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1)
    } catch (error) {
      return res.status(401).send('Bug here')
    }

    //Check if encrypted password match

    //Sign JWT, valid for 2 hour
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      config.jwtSecret,
      { expiresIn: '2h' },
    ) //Send the jwt in the response
    res.send(token)
  }
}

export default AuthController
