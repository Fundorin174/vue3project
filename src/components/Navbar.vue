<template>
  <div class='navbar'>
    <div  @click="$router.push('/')" >VUE 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px">О приложении</my-button>
      <my-button @click="$router.push('/store')" style="margin-left: 20px">Посты из стора</my-button>
      <my-button @click="$router.push('/composition')" style="margin-left: 20px">Composition API</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
  export default {
  components: { MyButton },
    
  }
</script>

<style scoped>
  .navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 15px;

    }
    .navbar__btns {
    margin-left: auto;
    }
</style>