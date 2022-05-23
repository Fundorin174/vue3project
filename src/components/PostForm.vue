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
    <my-button 
      @click="addPost"
      style='align-self: flex-end'
      >Добавить</my-button>
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
</style>