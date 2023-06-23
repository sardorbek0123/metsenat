import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

interface AuthTokens {
    access_token: string
    refresh_token: string
}

export const useAUTHStore = defineStore(('main'), () => {

    const access_token = ref(localStorage.getItem('access_token'))
    const refresh_token = ref(localStorage.getItem('refresh_token'))

    const isAuthenticated = computed(() => {
        return !(!access_token.value && !refresh_token.value)
    })

    const getTokens = computed(() => {
        return {
            access_token: access_token.value,
            refresh_token: refresh_token.value
        }
    })

    const logOut = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        access_token.value = null
        refresh_token.value = null
    }

    const setTokens = (tokens: AuthTokens) => {
        localStorage.setItem('access_token', tokens.access_token)
        localStorage.setItem('refresh_token', tokens.refresh_token)
        access_token.value = tokens.access_token
        refresh_token.value = tokens.refresh_token
    }

    return {useAUTHStore, setTokens, getTokens, logOut, isAuthenticated}
})

export default useAUTHStore
