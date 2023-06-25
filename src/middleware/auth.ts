import { useAuthStore } from '@/stores'

export default (to: any, from: any) => {
  const { isAuthenticated } = useAuthStore()
  if (!isAuthenticated && to.name !== 'PHomeView') return { name: 'PHomeView' }
  if (isAuthenticated && to.name === 'PHomeView') return { name: 'PSponsors' }
  return isAuthenticated || to.name === 'PHomeView'
}
