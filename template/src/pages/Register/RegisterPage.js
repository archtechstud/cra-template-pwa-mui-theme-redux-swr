import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Register } from '../../features/auth'
import { PATH_AUTH } from '../../routes'

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Register | Agent App</title>
      </Helmet>
      <Link to={PATH_AUTH.login}>Login</Link>
      <Register />
    </>
  )
}
