import {
  MiddlewareArray,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { userSlice } from './user/user.slice';
import { loginApi } from '@/features/Auth/Login/api/loginApi';

const reducers = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
