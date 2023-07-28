import { Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

export default function DashboardPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: App | Agent App</title>
      </Helmet>
      <Typography variant="h4">Dashboard Page</Typography>
    </>
  )
}
