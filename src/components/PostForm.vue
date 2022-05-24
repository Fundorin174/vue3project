<template >
  <form @submit.prevent>
    <h2 class="header">Новый пост</h2>
    <my-input 
      v-model='post.title'      
      placeholder="Название" />
    <my-input 
      v-model='post.body' 
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
  .header {
    margin-bottom: 10px;
  }

</style>