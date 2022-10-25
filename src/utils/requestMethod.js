import axios from 'axios'

const BASE_URL ='https://randomuser.me/api'

export const PublicRequest = axios.create({
baseURL: BASE_URL

})

