import axios from "axios"
import fetch from "node-fetch"
import { ReqParams } from "../../interface"

const URI = process.env.URI_SHOP

const create = async (params: Object) => {
    try {
        const query = await axios.post(`${URI}/shop/create`, params)
        return query.data
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
const remove = async (params: Object) => {
    try {
        console.log(params)
        return fetch(`${URI}/shop`, {
            method: 'delete',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => json);
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
const all = async (params: ReqParams) => {
    try {
        console.log(params)
        return fetch(`${URI}/shop/all`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'Authorization': params.user._idUser, "user": JSON.stringify(params) },
        })
            .then(res => res.json())
            .then(json => json);
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
const search = async (params: ReqParams) => {
    try {
        const { query } = params
        return fetch(`${URI}/shop/${query.id}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'Authorization': params.user._idUser, "user": JSON.stringify(params) },
        })
            .then(res => res.json())
            .then(json => json);
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
const update = async (params: ReqParams) => {
    try {
        const { query } = params
        return fetch(`${URI}/shop/update`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': params.user._idUser, "user": JSON.stringify(params.user) },
            body: JSON.stringify(params.body),

        })
            .then(res => res.json())
            .then(json => json);
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
export const diccionaryShop = {
    create: {
        rol: ['admin', 'login'],
        action: create
    },
    remove: {
        rol: ['admin'],
        action: remove
    },
    'all': {
        rol: ['admin', 'employee', 'login'],
        action: all
    },
    search: {
        rol: ['admin', 'employee'],
        action: search
    },
    update: {
        rol: ['admin', 'employee'],
        action: update
    }
}