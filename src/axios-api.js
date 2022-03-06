import axios from 'axios'

const api = axios.create({
    baseURL: 'https://malihealavi.pythonanywhere.com',
    timeout :3000,
    headers:{
        
    }
})
export {api}
