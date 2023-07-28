import { Box, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <>
      <Box>
        <Typography variant="subtitle2">Dashboard Layout</Typography>
      </Box>
      <Outlet />
    </>
  )
}
