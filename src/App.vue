<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="openDialog" style='margin-top: 10px; margin-bottom: 10px;'>Создать пост</my-button>
    <my-dialog v-model:show="isDialogVisible" >
      <post-form @create='addPost' />
    </my-dialog>  
    <post-list :posts="posts" @remove='removePost' v-if="!isPostsLoading" /> 
    <h2 v-else>Идет загрузка...</h2>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyButton from './components/UI/MyButton.vue';
import axios from 'axios';
export default {
  components: {
    PostForm, PostList,
    MyButton
  },
    data() {
        return {
            posts: [],
            isDialogVisible: false,
            isPostsLoading: false,
        }
    },
    mounted() {
      this.fetchPosts();
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
      },
      async fetchPosts() {
        try {
          this.isPostsLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
        } catch (e) {
          alert('Error: ' + e.toString())
        } finally {
          this.isPostsLoading = false
        }
      },
    },
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