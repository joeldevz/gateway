import { Router } from "express"
import { Auth } from "../middlewares"
import { get, GetRouterEmployeer, PostRouterShop, RouterProduct, RouterTicket } from "../controllers/"
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

//ticket
api.post('/ticket/:uri', Auth, RouterTicket)
api.get('/ticket/:uri', Auth, RouterTicket)
api.put('/ticket/:uri', Auth, RouterTicket)
api.delete('/ticket/:uri', Auth, RouterTicket)
export default api