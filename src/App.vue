<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__buttons">
      <my-button @click="openDialog" >Создать пост        
      </my-button>
      <my-select 
        v-model="selectedSort"
        :options='sortOptons'
      />
    </div>
    <my-dialog v-model:show="isDialogVisible" >
      <post-form @create='addPost' />
    </my-dialog>  
    <post-list :posts="sortedPosts" @remove='removePost' v-if="!isPostsLoading" /> 
    <h2 v-else>Идет загрузка...</h2>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyButton from './components/UI/MyButton.vue';
import MySelect from './components/UI/MySelect.vue';
import axios from 'axios';
export default {
  components: {
    PostForm, PostList,
    MyButton, MySelect
  },
    data() {
        return {
            posts: [],
            isDialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            sortOptons: [
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'},
              {value: 'id', name: 'По Id'},
            ]
        }
    },
    mounted() {
      this.fetchPosts();
    },
    watch: {

    },
    computed: {
      sortedPosts(){
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
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

  .app__buttons{
    margin-top: 10px; 
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  
</style>