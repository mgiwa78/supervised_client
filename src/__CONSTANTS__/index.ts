const path =
  process.env.NODE_ENV === 'development'
    ? 'https://supervised-api.vercel.app/'
    : process.env.NODE_ENV === 'production'
    ? 'https://supervised-api.vercel.app/'
    : ''

const API_URL = path
const ASSETS_URL = path + 'uploads/'
////
export {API_URL, ASSETS_URL}
