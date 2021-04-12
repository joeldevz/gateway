
export interface ReqParams {
    uri: string, body: Object, query?: any, user?: {
        _idUser: string,
        rol: string
    }
}
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}
declare module 'axios' {

    interface AxiosRequestConfig {
        user?: any
    }

}
