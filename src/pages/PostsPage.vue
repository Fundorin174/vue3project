<template>
  <div >
    <h1>Страница с постами</h1>
    <my-input
     v-model="searchingQuery"
      placeholder='Поиск'
      v-focus />
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
    <post-list :posts="sortedFilteredPosts" @remove='removePost' v-if="!isPostsLoading" /> 
    <h2 v-else>Идет загрузка...</h2>
    <div v-intersection="loadMorePosts" class="observer"></div>    
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
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
            searchingQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
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
      // page(){
      //   this.fetchPosts();
      // }
    },
    computed: {
      sortedPosts(){
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.toString()
        .localeCompare((post2[this.selectedSort]).toString()));
      },
      sortedFilteredPosts(){
        return this.sortedPosts.filter(post => post.title.toLowerCase()
        .includes(this.searchingQuery.toLowerCase()))
      },
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
          const response = await axios
          .get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.posts = response.data;
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        } catch (e) {
          alert('Error: ' + e.toString())
        } finally {
          this.isPostsLoading = false
        }
      },
      async loadMorePosts() {
        try {
          this.page +=1;
          const response = await axios
          .get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.posts = [...this.posts, ...response.data];
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        } catch (e) {
          alert('Error: ' + e.toString())
        } finally {
        }
      },
      // changePage(pageNumber){
      //   this.page=pageNumber
      // }
    },
}
</script>

<style>
  
  .app__buttons{
    margin-top: 10px; 
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .pagination__wrapper{
    display: flex;
    margin-top: 15px;
  }

  .pagination__item {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
  }
  .current-page {
    border: 2px solid teal
  }
  .observer{
    height:30px;
    background-color:aqua;
  }
  
</style>