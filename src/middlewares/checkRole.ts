// import { Request, Response, NextFunction } from 'express'
// import { db } from '../db/index'
// import { users } from '../db/schema'
// import { eq } from 'drizzle-orm'
//
// export const checkRole = (roles: Array<string>) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     // Get the user ID from previous middleware
//     const id = res.locals.jwtPayload.userId
//
//     // Get user role from the database
//     try {
//       const user = await db
//         .select()
//         .from(users)
//         .where(eq(users.id, id))
//         .limit(1)
//         .then(res => res[0])
//
//       if (!user) throw new Error('User not found')
//     } catch (error) {
//       return res.status(401).send()
//     }
//
//     // Check if array of authorized roles includes the user's role
//     if (roles.indexOf(users.role) > -1) next()
//     else res.status(401).send()
//   }
// }
