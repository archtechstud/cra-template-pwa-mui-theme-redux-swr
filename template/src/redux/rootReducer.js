import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { authReducer } from '../features/auth'

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'agent-app-web-ui-redux-',
  whitelist: [],
}

const authPersistConfig = {
  key: 'auth',
  storage,
  keyPrefix: 'agent-app-web-ui-redux-',
  whitelist: ['isAuthenticated'],
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
})

export default rootReducer
