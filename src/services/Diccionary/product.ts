import axios from "axios"
import fetch from "node-fetch"
import { ReqParams } from "../../interface"

const URI = process.env.URI_PRODUCT

const create = async (params: ReqParams) => {
    try {
        return fetch(`${URI}/product/create`, {
            method: 'POST',
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
const remove = async (params: ReqParams) => {
    try {
        console.log(params)
        return fetch(`${URI}/product/remove`, {
            method: 'delete',
            body: JSON.stringify(params.body),
            headers: { 'Content-Type': 'application/json', 'Authorization': params.user._idUser, "user": JSON.stringify(params.user) },
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
const allByShop = async (params: ReqParams) => {
    try {
        return fetch(`${URI}/product/allByShop/${params.query.id}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'Authorization': params.user._idUser, "user": JSON.stringify(params.user) },
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
const allByUser = async (params: ReqParams) => {
    try {
        return fetch(`${URI}/product/allByUser`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'Authorization': params.user._idUser, "user": JSON.stringify(params.user) },
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
const code = async (params: ReqParams) => {
    try {
        return fetch(`${URI}/product/${params.query.id}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'Authorization': params.user._idUser, "user": JSON.stringify(params.user) },
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
        return fetch(`${URI}/product/searchName/${query.name}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'Authorization': params.user._idUser, "user": JSON.stringify(params.user) },
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
        return fetch(`${URI}/product/update`, {
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
export const diccionaryProduct = {
    create: {
        rol: ['admin', 'employee'],
        action: create
    },
    remove: {
        rol: ['admin', 'employee'],
        action: remove
    },
    allByShop: {
        rol: ['admin', 'employee'],
        action: allByShop
    },
    allByUser: {
        rol: ['admin', 'employee'],
        action: allByUser
    },
    code: {
        rol: ['admin', 'employee'],
        action: code
    },
    update: {
        rol: ['admin', 'employee'],
        action: update
    },
    search: {
        rol: ['admin', 'employee'],
        action: search
    }
}
