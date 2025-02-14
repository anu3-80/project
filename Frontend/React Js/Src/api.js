import axios from 'axios';
const url = "http://localhost:8080/institutes/";
export async function getData() {
    return await axios.get(`${url+"get"}`);
}

export async function postData(data) {
    return await axios.post(url+"store",data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function putData(id, data) {
    return await axios.put(`${url+"update"}/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function deleteData(id) {
    return await axios.delete(`${url+"delete"}/${id}`);
}
