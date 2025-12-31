<script setup>
const user = useUserStore()
await user.init()
const router = useRouter()

// Catch router navigations
router.beforeEach((to, from) => {
  if (to.path === '/null' || to.path.includes('null')) {
    console.error('❌ Router trying to navigate to:', to.path)
    console.trace()
    return '/'
  }
})

// Catch fetch requests
if (process.client) {
  const originalFetch = window.fetch
  window.fetch = function(...args) {
    const url = args[0]
    if (url && (url === 'null' || url.includes('/null'))) {
      console.error('❌ Found the fetch with null!')
      console.error('URL:', url)
      console.trace('Stack trace:')
    }
    return originalFetch.apply(this, args)
  } // <- This closing brace was missing
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>