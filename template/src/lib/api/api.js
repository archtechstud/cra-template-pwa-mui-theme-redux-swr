import axios from 'axios'

import {
  filterPayload as filterPayloadData,
  getQueryStringParams,
} from '../../utils'
import { API_TIMEOUT, BASE_API_URL } from './constant'

function requestConfig({
  headers = {
    Authorization: '',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  baseURL = BASE_API_URL,
  timeout = API_TIMEOUT,
  method = 'GET',
  qs = '',
  data,
  url = '',
  file,
  fileName,
  formData,
  filterPayload,
}) {
  try {
    const fileFormData = new FormData()
    const payload = filterPayload ? filterPayloadData(data) : data
    let querystring = qs
    let payloadData = data
    let newURL = url

    if (file) {
      fileFormData.append('file', payload, fileName)
    }

    if (['GET'].indexOf(method) > -1 && payload)
      querystring = `?${getQueryStringParams(payload)}`
    else if (file) payloadData = fileFormData
    else if (formData) payloadData = payload
    else payloadData = JSON.stringify(payload) // POST PUT PATCH DELETE
    newURL += querystring

    return axios({
      method,
      url: newURL,
      headers,
      data: payloadData,
      baseURL,
      timeout,
      withCredentials: true,
    })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('🚀 ~ file: api.js ~ line 59 ~ e', e?.response)
    return e
  }
}

export const doRequest = {
  get: params => requestConfig({ method: 'GET', ...params }),
  post: params => requestConfig({ method: 'POST', ...params }),
  put: params => requestConfig({ method: 'PUT', ...params }),
  patch: params => requestConfig({ method: 'PATCH', ...params }),
  delete: params => requestConfig({ method: 'DELETE', ...params }),
}
