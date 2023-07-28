import { doRequest } from '../lib/api/'

const swrFetcher = async url => {
  const response = await doRequest.get(url)
  return response.data
}

export default swrFetcher
