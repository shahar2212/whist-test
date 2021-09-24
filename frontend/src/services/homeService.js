import http from './httpService';
import { apiUrl } from '../config/config.json';

export function getProduct(productID) {//get product
    localStorage.setItem('productID', productID);
    return http.get(`${apiUrl}/home/${productID}`)
}

export function getAllProducts() {//get product
    return http.get(`${apiUrl}/home`)
}

export function sold(productsID) {
    return http.put(`${apiUrl}/stats/${productsID.map(productID => productID + '/')}`)
}

const ex = {
    getProduct,
    getAllProducts,
    sold
}
export default ex;