import useAUTHStore from "@/stores";

export default (to: any, from: any) => {
    const { isAuthenticated } = useAUTHStore()
    if (!isAuthenticated && to.name !== 'home') return { name: 'home' }
    if (isAuthenticated && to.name === 'home') return { name: 'sponsors' }
    return isAuthenticated || to.name === 'home'
}