import { createSlice } from "@reduxjs/toolkit";

interface User {
    avatar: string | null
    birthday: string | null
    first_name: string | null
    last_name: string | null
    sex: number | null
    user_id: string | null
    virified: boolean | null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: {
            user: null,
            avatar: null,
            birthday: null,
            first_name: null,
            last_name: null,
            sex: null,
            user_id: null,
            virified: null
        } as User
    },
    reducers: {
        setUserInfo(state, action) {
            state.userData = action.payload
        }
    }
})

export const { setUserInfo } = userSlice.actions
export default userSlice.reducer