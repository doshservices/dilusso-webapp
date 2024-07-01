import { combineReducers } from 'redux'
import authSlice from './slice/authSlice'
import cartSlice from './slice/cartSlice'
// import notificationSlice from './slice/notificationSlice'

export const rootReducer = combineReducers({
    auth: authSlice,
    cart: cartSlice
})

// export default rootReducer
export type RootState = ReturnType<typeof rootReducer>