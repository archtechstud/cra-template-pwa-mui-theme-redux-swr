import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material'

import { Login, doLogin, doLogout } from '../../features/auth'
import { PATH_AUTH } from '../../routes'

export default function LoginPage() {
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <>
      <Helmet>
        <title> Login | Agent App</title>
      </Helmet>
      <Login />
    </>
  )
}
