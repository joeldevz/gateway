import axios from 'axios';
import { CODE_HTTP } from "../type/index"
const URI = 'http://185.239.200.188:6061'
export const jwtencode = async (payload: object) => {
    try {
        const token = await axios.post(`${URI}/token`,
            payload
        )
        if (token.request.res.statusCode !== CODE_HTTP.SUCCESS) return { error: true, statusCode: CODE_HTTP.ERROR_SERVER, data: '' }
        return { error: false, statusCode: CODE_HTTP.SUCCESS, data: token.data }
    } catch (error) {
        return { error: true, statusCode: CODE_HTTP.BAD_GATEWAY, data: '' }
    }
}
export const jwtdecode = async (payload: string) => {
    try {
        const token = await axios.post(`${URI}/detoken`,
            { token: payload }
        )
        if (token.request.res.statusCode !== CODE_HTTP.SUCCESS) return { error: true, statusCode: CODE_HTTP.ERROR_SERVER, data: '' }
        return token.data
    } catch (error) {
        return { error: true, statusCode: CODE_HTTP.BAD_GATEWAY, data: '' }
    }
}