import { ReqParams } from "../interface"
import { diccionaryUser } from "./Diccionary/user"
import { diccionaryEmployeer } from "./Diccionary/employeer"
import { diccionaryShop } from "./Diccionary/shop"
import { diccionaryProduct } from "./Diccionary/product"
import { diccionaryTicket } from "./Diccionary/ticket"
import { CODE_HTTP, MESSAGE } from "../type"
export const gatewayUser = async (params: ReqParams) => {
    const { uri, body } = params
    try {
        const query = await diccionaryUser[uri]['action'](body)
        return query
    } catch (error) {
        return { statusCode: 404, data: "URI NOT FOUND" }
    }
}
export const gatewayEmployee = async (params: ReqParams) => {
    const { uri, body, user } = params

    try {
        const rols: Array<string> = diccionaryEmployeer[uri]['rol']
        if (!CheckpermitsRols(user.rol, rols)) {
            return { statusCode: CODE_HTTP.UNAUTHORIZED, data: MESSAGE.UNAUTHORIZED }
        }
        const query = await diccionaryEmployeer[uri]['action'](params)
        return query
    } catch (error) {
        return { statusCode: 404, data: "URI NOT FOUND" }
    }
}

export const gatewayShop = async (params: ReqParams) => {
    const { uri, user } = params

    try {
        const rols: Array<string> = diccionaryShop[uri]['rol']
        if (!CheckpermitsRols(user.rol, rols)) {
            return { statusCode: CODE_HTTP.UNAUTHORIZED, data: MESSAGE.UNAUTHORIZED }
        }
        const query = await diccionaryShop[uri]['action'](params)
        return query
    } catch (error) {
        return { statusCode: 404, data: "URI NOT FOUND" }
    }
}
export const gatewayProduct = async (params: ReqParams) => {
    const { uri, user } = params
    console.log(uri)

    try {
        const rols: Array<string> = diccionaryProduct[uri]['rol']
        if (!CheckpermitsRols(user.rol, rols)) {
            return { statusCode: CODE_HTTP.UNAUTHORIZED, data: MESSAGE.UNAUTHORIZED }
        }
        const query = await diccionaryProduct[uri]['action'](params)
        return query
    } catch (error) {
        console.log(error)
        return { statusCode: 404, data: "URI NOT FOUND" }
    }
}
export const gatewayTicket = async (params: ReqParams) => {
    const { uri, user } = params

    try {
        const rols: Array<string> = diccionaryTicket[uri]['rol']
        if (!CheckpermitsRols(user.rol, rols)) {
            return { statusCode: CODE_HTTP.UNAUTHORIZED, data: MESSAGE.UNAUTHORIZED }
        }
        const query = await diccionaryTicket[uri]['action'](params)
        return query
    } catch (error) {
        console.log(error)
        return { statusCode: 404, data: "URI NOT FOUND" }
    }
}
const CheckpermitsRols = (userRol: string, rols: Array<string>) => {
    for (const rol of rols) {
        if (rol === userRol) {
            return true
        }
    }
    return false

}