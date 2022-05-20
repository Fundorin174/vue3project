<template >
  <form @submit.prevent>
    <input 
      v-model='post.title'
      class="input" 
      type="text" 
      placeholder="Название" />
    <input 
      v-model='post.body' 
      class="input" 
      type='text' 
      placeholder="Описание" />
    <button class="btn" @click="addPost">Добавить</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    addPost(){
      this.post.id = Date.now() + Math.random()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
      
    }
  },  
}
</script>
<style scoped>
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 400px;
  }
  .input {
    width: 100%;
    border: 2px solid teal;
    margin-bottom: 10px;
  }
  .btn {
    margin: 20px 0;
    align-self: flex-end;
  }
</style>