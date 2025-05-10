import { createSlice } from "@reduxjs/toolkit";
import { TokenUtils } from "../utils/TokenUtils";

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
        isAuthorized: localStorage.getItem('accessToken') !== null ? true : false,
        userData: {
            user: null,
            avatar: null,
            birthday: null,
            first_name: null,
            last_name: null,
            sex: null,
            user_id: null,
            virified: null
        } as User,
        accessToken: TokenUtils.getAccessToken(),
        refreshToken: TokenUtils.getRefreshToken(),
    },
    reducers: {
        setIsAuthorized(state, action) {
            state.isAuthorized = action.payload
            localStorage.setItem('isAuthorized', state.isAuthorized.toString())
        },
        setUserInfo(state, action) {
            state.userData = action.payload
        },
        setAccessToken(state, action) {
            state.accessToken = action.payload
        },
        setRefreshToken(state, action) {
            state.refreshToken = action.payload
        }
    }
})

export const { setUserInfo, setAccessToken, setRefreshToken, setIsAuthorized } = userSlice.actions
export default userSlice.reducer