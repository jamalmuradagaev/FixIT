export const TokenUtils = {
    storeTokens: (accessToken: string, refreshToken: string) => {
        localStorage.setItem('token', accessToken);
        localStorage.setItem('refresh', refreshToken);
    },
    getAccessToken: () => localStorage.getItem('accessToken'),
    getRefreshToken: () => localStorage.getItem('refreshToken'),
    recoveryToken: async () => {
        const refreshToken = localStorage.getItem('refresh')

        const response = await fetch('http://188.120.240.237:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refresh: refreshToken
            })
        })
        const data = await response.json()
        TokenUtils.storeTokens(data.access, data.refresh)
    }
}