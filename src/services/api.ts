import axios from 'axios'
import md5 from 'js-md5'

const apiKey = (): { ts: number; apikey: string; hash: string } => {
  const PUBLIC_KEY = 'be40780c1854261ee900fa2c17b576a9'
  const PRIVATE_KEY = 'cc97a9b583ff905769ae44e03bb61a23022a5d13'
  const timestamp = Number(new Date())
  const hash = md5.create()
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
  return { apikey: PUBLIC_KEY, ts: timestamp, hash: hash.hex() }
}

const params = apiKey()

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params,
})

export default api
