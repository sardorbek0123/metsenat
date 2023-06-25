import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getItem, removeItem } from '@/service/localstorage'

interface ITokens {
  access_token: string
  refresh_token: string
}

export const useAuthStore = defineStore('main', () => {
  const accessToken = getItem('access_token')
  const refresh_token = getItem('refresh_token')

  const isAuthenticated = computed(() => {
    return !(!accessToken.value && !refresh_token.value)
  })

  const getTokens = computed(() => {
    return {
      access_token: accessToken.value,
      refresh_token: refresh_token.value
    }
  })

  const logOut = () => {
    removeItem('access_token')
    removeItem('refresh_token')
    accessToken.value = null
    refresh_token.value = null
  }

  const login = (tokens: ITokens) => {
    setItem('access_token', tokens.access_token)
    setItem('refresh_token', tokens.refresh_token)
    accessToken.value = tokens.access_token
    refresh_token.value = tokens.refresh_token
  }

  return { login, getTokens, logOut, isAuthenticated }
})

export default useAUTHStore
