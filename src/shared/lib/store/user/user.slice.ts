import { IUser } from '@/shared/interfaces/user.interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IUser = { name: '' };

// переписать на {payload}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    lofinUser: (state, action: PayloadAction<IUser>) => {
        state.name = action.payload.name
    }
  },
});
