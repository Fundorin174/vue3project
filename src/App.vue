<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="openDialog" style='margin-top: 10px; margin-bottom: 10px;'>Создать пост</my-button>
    <my-dialog v-model:show="isDialogVisible" >
      <post-form @create='addPost' />
    </my-dialog>  
    <post-list :posts="posts" @remove='removePost' /> 
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
export default {
  components: {
    PostForm, PostList
  },
    data() {
        return {
            posts: [
              {id: 1, title: 'Javascript', body: 'Описание поста'},
              {id: 2, title: 'Vue', body: 'Описание поста 2'},
              {id: 3, title: 'React', body: 'Описание поста 3'},
              {id: 4, title: 'Angular', body: 'Описание поста 4'},
            ],
            isDialogVisible: false,
        }
    },
    methods: {      
      addPost(postItem){
         this.posts = [...this.posts, postItem];
         this.isDialogVisible = false
      },
      removePost(postItem){
        this.posts = this.posts.filter(p=>p.id !== postItem.id);
      },
      openDialog() {
        this.isDialogVisible = true
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

  
  
</style>