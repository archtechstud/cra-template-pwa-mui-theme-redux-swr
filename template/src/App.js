import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import ThemeProvider from './theme'
import Router from './routes'
import { store, persistor } from './redux/store'

function App() {
  const router = Router()
  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate loading="Loading..." persistor={persistor}>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  )
}

export default App
