import { Router } from "express"
import { Auth } from "../middlewares"
import { get, GetRouterEmployeer, PostRouterShop, RouterProduct } from "../controllers/"
const api = Router()

api.post('/:uri', get)
//employer
api.post('/employee/:uri', Auth, GetRouterEmployeer)
api.get('/employee/:uri', Auth, GetRouterEmployeer)
//shop
api.post('/shop/:uri', Auth, PostRouterShop)
api.delete('/shop/:uri', Auth, PostRouterShop)
api.get('/shop/:uri', Auth, PostRouterShop)
api.put('/shop/:uri', Auth, PostRouterShop)

//Product
api.get("/product/:uri", Auth, RouterProduct)
api.put("/product/:uri", Auth, RouterProduct)
api.post('/product/:uri', Auth, RouterProduct)
api.delete('/product/:uri', Auth, RouterProduct)
export default api