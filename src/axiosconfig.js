import axios from 'axios'

const Http = axios.create({baseUrl:'http://localhost:3006/'})

export default Http