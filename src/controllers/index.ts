import { Request, Response } from "express"
import { gatewayUser, gatewayEmployee, gatewayShop, gatewayProduct } from "../services"
import { ReqParams } from "../interface"
export const get = async (req: Request, res: Response) => {
    const params: ReqParams = {
        uri: `${req.params.uri}`,
        body: req.body
    }
    const query = await gatewayUser(params)
    return res.status(query.statusCode).json(query)
}
export const GetRouterEmployeer = async (req: Request, res: Response) => {
    const params: ReqParams = {
        uri: `${req.params.uri}`,
        body: req.body,
        user: req.user
    }
    const query = await gatewayEmployee(params)
    return res.status(query.statusCode).json(query)
}
export const PostRouterShop = async (req: Request, res: Response) => {
    const params: ReqParams = {
        uri: `${req.params.uri}`,
        body: req.body,
        query: req.query,
        user: req.user
    }
    const query = await gatewayShop(params)
    return res.status(query.statusCode).json(query)
}
export const RouterProduct = async (req: Request, res: Response) => {
    const params: ReqParams = {
        uri: `${req.params.uri}`,
        body: req.body,
        query: req.query,
        user: req.user
    }
    const query = await gatewayProduct(params)
    return res.status(query.statusCode).json(query)
}