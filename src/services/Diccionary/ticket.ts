import axios from "axios"
import fetch from "node-fetch"
import { ReqParams } from "../../interface"

const URI = 'http://185.239.200.188:6005'

const create = async (params: ReqParams) => {
    try {
        return fetch(`${URI}/ticket/create`, {
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
        return fetch(`${URI}/ticket/remove`, {
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
        return fetch(`${URI}/ticket/allByShop/${params.query.id}`, {
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
        return fetch(`${URI}/ticket/allByUser`, {
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
        return fetch(`${URI}/ticket/${params.query.id}`, {
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
        return fetch(`${URI}/ticket/update`, {
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
export const diccionaryTicket = {
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
    }
}