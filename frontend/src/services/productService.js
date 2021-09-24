import http from './httpService';
import { apiUrl } from '../config/config.json';

export function getAllProducts() {//get all products
    return http.get(`${apiUrl}/admin/`);
}

export function addProducts(data) {//add product
    return http.post(`${apiUrl}/admin/`, data);
}

export function deleteProduct(productID) {//delete product
    window.location = '/admin'
    return http.delete(`${apiUrl}/admin/delete/${productID}`)
}

export function getProduct(productID) {//get product id
    localStorage.setItem('productID', productID);
    return http.get(`${apiUrl}/admin/${productID}`)
}

export function editProduct(product) {//edit the product
    const productID = product._id;
    delete product._id;
    return http.put(`${apiUrl}/admin/${productID}`, product)
}

const ex = {
    getAllProducts,
    addProducts,
    deleteProduct,
    getProduct,
    editProduct,
}
export default ex;