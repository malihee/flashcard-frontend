import axios from 'axios'

const api = axios.create({
    baseURL: 'malihealavi.pythonanywhere.com',
    timeout :1000,
    headers:{
        
    }
})
export {api}
