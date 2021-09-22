import http from './httpService';
import { apiUrl } from '../config/config.json';

export function uniqueCounter(productID) {
    return http.put(`${apiUrl}/stats/${productID}`)
}

export function regularCounter(productID, quantity) {
    return http.put(`${apiUrl}/stats/${productID}/${quantity}`)
}

export function getTopSellers() {
    return http.get(`${apiUrl}/stats/`)
}

export function getUniqueSellers() {
    return http.get(`${apiUrl}/stats/unique`)
}

export function sells(sells) {
    return http.post(`${apiUrl}/stats/sells/${sells}`)
}

export function getSells() {
    return http.get(`${apiUrl}/stats/sells/`)

}


const ex = {
    uniqueCounter,
    regularCounter,
    getTopSellers,
    getUniqueSellers,
    sells,
    getSells
}

export default ex;