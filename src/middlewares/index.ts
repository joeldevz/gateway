import { jwtdecode } from "../services/jwt"
import { Request, Response, NextFunction } from "express"
import { CODE_HTTP, MESSAGE } from "../type/index"
export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization === '' || req.headers.authorization === undefined) return res.status(CODE_HTTP.FORBIDDEN).json({ error: true, statusCode: CODE_HTTP.FORBIDDEN, data: MESSAGE.NOT_FOUND_TOKEN })

    let token: string = req.headers.authorization.split(" ")[1]
    const payload = await jwtdecode(token)
    console.log(payload)
    if (payload.statusCode !== CODE_HTTP.SUCCESS) { return res.status(CODE_HTTP.FORBIDDEN).json({ error: true, statusCode: CODE_HTTP.FORBIDDEN, data: MESSAGE.FORBIDDEN }) }
    if (payload.data.exp <= Date.now()) {
        return res.status(CODE_HTTP.UNAUTHORIZED).json({ error: true, statusCode: CODE_HTTP.UNAUTHORIZED, data: MESSAGE.EXP_TOKEN })
    }
    req.user = payload.data
    next()
}
export const AuthAdmin = async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization === '' || req.headers.authorization === undefined) return res.status(CODE_HTTP.FORBIDDEN).json({ error: true, statusCode: CODE_HTTP.FORBIDDEN, data: MESSAGE.NOT_FOUND_TOKEN })
    let token: string = req.headers.authorization.split(" ")[1]
    const payload = await jwtdecode(token)
    if (payload.statusCode !== CODE_HTTP.SUCCESS) { return res.status(CODE_HTTP.FORBIDDEN).json({ error: true, statusCode: CODE_HTTP.FORBIDDEN, data: MESSAGE.FORBIDDEN }) }
    if (payload.data.exp <= Date.now()) {
        return res.status(CODE_HTTP.UNAUTHORIZED).json({ error: true, statusCode: CODE_HTTP.UNAUTHORIZED, data: MESSAGE.EXP_TOKEN })
    }
    if (payload.data.rol !== 'admin') {
        return res.status(CODE_HTTP.FORBIDDEN).json({ error: true, statusCode: CODE_HTTP.FORBIDDEN, data: MESSAGE.FORBIDDEN })
    }
    req.user = payload.data
    next()
}
export const AuthLogin = async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization === '' || req.headers.authorization === undefined) return res.status(CODE_HTTP.FORBIDDEN).json({ error: true, statusCode: CODE_HTTP.FORBIDDEN, data: MESSAGE.NOT_FOUND_TOKEN })
    let token: string = req.headers.authorization.split(" ")[1]
    const payload = await jwtdecode(token)
    if (payload.statusCode !== CODE_HTTP.SUCCESS) { return res.status(CODE_HTTP.FORBIDDEN).json({ error: true, statusCode: CODE_HTTP.FORBIDDEN, data: MESSAGE.FORBIDDEN }) }
    if (payload.data.exp <= Date.now()) {
        return res.status(CODE_HTTP.UNAUTHORIZED).json({ error: true, statusCode: CODE_HTTP.UNAUTHORIZED, data: MESSAGE.EXP_TOKEN })
    }
    if (payload.data.rol !== 'login') {
        return res.status(CODE_HTTP.FORBIDDEN).json({ error: true, statusCode: CODE_HTTP.FORBIDDEN, data: MESSAGE.FORBIDDEN })
    }
    req.user = payload.data
    next()
}