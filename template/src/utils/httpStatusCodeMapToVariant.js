const httpStatusCodeMapToVariant = ({ statusCode }) => {
  if (statusCode && statusCode >= 200 && statusCode < 300) {
    return 'success'
  }
  if (statusCode && statusCode >= 300 && statusCode < 400) {
    return 'info'
  }
  if (statusCode && statusCode >= 400 && statusCode < 500) {
    return 'error'
  }
  if (statusCode && statusCode >= 500) {
    return 'warning'
  }
  return 'success'
}

export default httpStatusCodeMapToVariant
