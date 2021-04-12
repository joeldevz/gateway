import axios from "axios"
import { ReqParams } from "../../interface"
const URI = 'http://185.239.200.188:6062'
const singin = async (params: ReqParams) => {
    try {
        const query = await axios.post(`${URI}/employee/singin`, params)
        return query.data
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
const singup = async (params: ReqParams) => {
    try {
        const query = await axios.post(`${URI}/employee/singup`, params)
        return query.data
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
const getAllEmployeer = async (params: ReqParams) => {
    try {
        const query = await axios.get(`${URI}/employee/all`, {
            headers: { 'Authorization': params.user._idUser }
        })
        return query.data
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
const getEmployeer = async (params: { user: string }) => {
    try {
        const { user } = params
        const query = await axios.get(`${URI}/employee/${user}`)
        return query.data
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
export const diccionaryEmployeer = {
    singin: {
        rol: ['login'],
        action: singin
    },
    singup: {
        rol: ['admin', 'login'],
        action: singup
    },
    all: {
        rol: ['login'],
        action: getAllEmployeer
    },
    search: {
        rol: ['admin', 'employee'],
        action: getEmployeer
    }
}