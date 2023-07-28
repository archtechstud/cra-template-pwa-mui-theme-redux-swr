import { Typography, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Logo from '../../components/logo'
import Image from '../../components/image'
import illustration_dashboard from '../../assets/illustrations/illustration_dashboard.png'
import {
  StyledRoot,
  StyledSectionBg,
  StyledSection,
  StyledContent,
} from './styles'

export default function AuthLayout() {
  return (
    <>
      <StyledRoot>
        <Logo
          sx={{
            zIndex: 9,
            position: 'absolute',
            mt: { xs: 1.5, md: 5 },
            ml: { xs: 2, md: 5 },
          }}
        />

        <StyledSection>
          <Typography
            variant="h3"
            sx={{ mb: 10, maxWidth: 480, textAlign: 'center' }}
          >
            {'Hi, Welcome back'}
          </Typography>

          <Image
            disabledEffect
            visibleByDefault
            alt="auth"
            src={illustration_dashboard}
            sx={{ maxWidth: 720 }}
          />

          <StyledSectionBg />
        </StyledSection>

        <StyledContent>
          <Stack sx={{ width: 1 }}>
            <Outlet />
          </Stack>
        </StyledContent>
      </StyledRoot>
    </>
  )
}
