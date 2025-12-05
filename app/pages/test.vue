<template>
  <div class="container">
    <h1>Nuxt Frontend</h1>
    <hr>
    
    <h2>Backend Data Status:</h2>
    
    <p v-if="pending">📡 Connecting to backend...</p>
    
    <p v-else-if="error" class="error">
      ❌ Error connecting to http://localhost:5000: {{ error.message }}
    </p>
    
    <div v-else class="success">
      <p>✅ **Username:** {{ data[1].username }}</p>
      <p>🕒 **email:** {{ data[1].email }}</p>
    </div>
    
  </div>
</template>

<script setup>
// The target URL of the Express endpoint
const BACKEND_URL = 'http://localhost:5000/api/users';

// useFetch is a Nuxt composable that handles making the request, 
// managing state (loading/error), and rendering.
const { data, pending, error } = await useFetch(BACKEND_URL);
console.log('the data from the database',data)

// `data` will hold the JSON object: { message: '...', timestamp: '...' }
// `pending` is a boolean (true while loading, false after)
// `error` holds any error object if the connection fails
</script>

<style scoped>
.container {
  padding: 2rem;
  font-family: sans-serif;
  text-align: center;
}
.error {
  color: red;
  font-weight: bold;
}
.success {
  color: green;
  border: 1px solid #ccc;
  padding: 1rem;
  display: inline-block;
  text-align: left;
}
</style>