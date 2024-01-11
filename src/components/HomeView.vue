<template>
  <div class="home">
    <h1>Star Wars Character Explorer</h1>
    <router-link to="/characters" class="explore-btn">Explore Characters</router-link>
  </div>
</template>
  
<script>
export default {
  name: 'HomeView'
};
</script>
  
<style>
.home {
  text-align: center;
  margin-top: 50px;
}

.home h1 {
  font-size: 2.5em;
  color: #dcdcdc;
}

.home p {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 20px;
}

.explore-btn {
  display: inline-block;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2em;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.explore-btn:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}
</style>
  