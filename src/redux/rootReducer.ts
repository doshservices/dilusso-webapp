import { combineReducers } from 'redux'
import authSlice from './slice/authSlice'
// import notificationSlice from './slice/notificationSlice'

export const rootReducer = combineReducers({
    auth: authSlice,
    // notification: notificationSlice
})

// export default rootReducer
export type RootState = ReturnType<typeof rootReducer>