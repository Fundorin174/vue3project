<template>
  <div >
    <h1>Страница с постами</h1>
    <my-input
      :model-value="searchingQuery"
      @update:model-value="setSearchingQuery"
      placeholder='Поиск'
      v-focus />
    <div class="app__buttons">
      <my-button @click="openDialog" >Создать пост        
      </my-button>
      <my-select 
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  components: {
    PostForm, PostList,
    MyButton, MySelect
  },
    data() {
        return {            
            isDialogVisible: false,            
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
      ...mapState({
        posts: state => state.post.posts,
        isPostsLoading: state => state.post.isPostsLoading,
        selectedSort: state => state.post.selectedSort,
        searchingQuery: state => state.post.searchingQuery,
        page: state => state.post.page,
        limit: state => state.post.limit,
        totalPages: state => state.post.totalPages,
        sortOptons: state => state.post.sortOptons
      }),
      ...mapGetters({
        sortedPosts: 'post/sortedPosts',
        sortedFilteredPosts: 'post/sortedFilteredPosts'
      })
    },
    methods: {      
      ...mapMutations({
        setPage: 'post/setPage',
        setPosts: 'post/setPosts',
        setSearchingQuery: 'post/setSearchingQuery',
        setSelectedSort: 'post/setSelectedSort'
      }),
      ...mapActions({
        loadMorePosts: 'post/loadMorePosts',
        fetchPosts: 'post/fetchPosts'
      }),
      addPost(postItem){
         this.setPosts([...this.posts, postItem]);
         this.isDialogVisible = false
      },
      removePost(postItem){
        const newposts = this.posts.filter(p=>p.id !== postItem.id);
        this.setPosts(newposts)
      },
      openDialog() {
        this.isDialogVisible = true
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