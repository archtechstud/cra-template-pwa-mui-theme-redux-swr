import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isAuthenticated: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true
    },
    doLogin(state) {
      state.isAuthenticated = true
    },
    doLogout(state) {
      state.isAuthenticated = false
    },
  },
})

export const authReducer = slice.reducer

export const { doLogin, doLogout } = slice.actions
