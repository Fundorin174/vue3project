<template>
<div>
  <form @submit.prevent>
    <input 
      @input='title=$event.target.value' 
      v-bind:value="title" 
      class="input" 
      type="text" 
      placeholder="Название" />
    <input 
      @input='description=$event.target.value'
      v-bind:value="description" 
      class="input" 
      type='text' 
      placeholder="Описание" />
    <button class="btn" @click="addPost">Добавить</button>
  </form>
  <div class="post" v-for="post in posts" v-bind:key="post.id" >
    <div><strong>Пост о</strong>{{' '+ post.title}}</div>
    <div><strong>Описание</strong>{{post.body}}</div>
  </div>
  
  </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
              {id: 1, title: 'Javascript', body: 'Описание поста'},
              {id: 2, title: 'Vue', body: 'Описание поста 2'},
              {id: 3, title: 'React', body: 'Описание поста 3'},
              {id: 4, title: 'Angular', body: 'Описание поста 4'},
            ],
            title: '',
            description: '',
        }
    },
    methods: {      
      addPost(){
        let postItem = {id: this.posts.length + Math.random(), title: this.title, body: this.description}
        this.posts = [...this.posts, postItem]
      }
    }

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 20px;
  }

  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-bottom: 10px;
    width: 400px;
  }
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