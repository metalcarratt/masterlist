<template>
  <h1>A Master List</h1>
  <div class="container">
    <div class="right">
      <ShoppingList />
    </div>
    <div class="left">
      <MasterList />
      <LeafList />
    </div>
  </div>
</template>

<script setup>
import MasterList from './components/MasterList.vue';
import LeafList from './components/LeafList.vue';
import ShoppingList from './components/ShoppingList.vue';
</script>

<style scoped>
h1 {
  width: 1000px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  color: #ec7a01;
  font-family: 'Nunito Sans', sans-serif;
}
.container {
  display: flex;
  flex-direction: row-reverse;
  width: 1000px;
  margin: 0 auto;
}

.left {
  display: flex;
  flex-direction: column;
  width: 500px;
  border-right: 6px solid #ff6e26;
}

.right {
  width: 500px;
}

@media only screen and (max-width: 1000px) {

  h1 {
    width: 100%;
  }
  .container {
    flex-direction: column;
    width: 100%;
  }
  .left, .right {
      width: 100%;
  }
  
  .left {
    border-right: none;
    border-top: 6px solid #ff6e26;
  }
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;600&family=Nunito+Sans:wght@700&display=swap');

h2 {
  background-color: #eee;
  padding: 10px 20px;
  margin: 0;
}

body {
  font-family: 'Ibarra Real Nova', serif;
}
</style>
