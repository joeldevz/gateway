import axios from "axios"
const URI = 'http://185.239.200.188:6060'
const singin = async (params: Object) => {
    try {
        const query = await axios.post(`${URI}/singin`, params)
        return query.data
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
const singup = async (params: Object) => {
    try {
        const query = await axios.post(`${URI}/singup`, params)
        return query.data
    } catch (error) {
        if (!error.response) {
            return { error: true, statusCode: 502 }
        }
        return { error: error.response.data.error, statusCode: error.response.data.statusCode, data: error.response.data.data }
    }
}
export const diccionaryUser = {
    singin: {
        rol: [],
        action: singin
    },
    singup: { rol: [], action: singup },
}