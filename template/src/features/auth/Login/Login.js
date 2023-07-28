import { Link as RouterLink } from 'react-router-dom'
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material'

import { PATH_AUTH } from '../../../routes'
import jwt_icon from '../../../assets/icons/auth/ic_jwt.png'

import LoginForm from './LoginForm'

export default function Login() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Sign in to Agent App</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link
            component={RouterLink}
            to={PATH_AUTH.register}
            variant="subtitle2"
          >
            Create an account
          </Link>
        </Stack>

        <Tooltip title="jwt" placement="left">
          <Box
            component="img"
            alt="jwt"
            src={jwt_icon}
            sx={{ width: 32, height: 32, position: 'absolute', right: 0 }}
          />
        </Tooltip>
      </Stack>

      <LoginForm />
    </>
  )
}
