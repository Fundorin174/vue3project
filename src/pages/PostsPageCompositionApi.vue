<template>
  <div >
    <my-input
     v-model="searchingQuery"
      placeholder='Поиск'
      v-focus />
    <div class="app__buttons">
      <my-select 
        v-model="selectedSort"
        :options='sortOptons'
      />
    </div>
    <post-list :posts="sortedAndFilteredPosts" v-if="!isPostsLoading" /> 
    <h2 v-else>Идет загрузка...</h2>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
import { usePosts } from '@/hooks/usePosts';
import { useSortedAndFilteredPosts } from '@/hooks/useSortedAndFilteredPosts';
import { useSortedPosts } from '@/hooks/useSortedPosts';

export default {
  components: {
    PostForm, PostList,
    MyButton, MySelect
  },
    data() {
        return {            
            isDialogVisible: false,            
            sortOptons: [
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'},
              {value: 'id', name: 'По Id'},
            ]
        }
    },
    setup(props) {
      const {posts , isPostsLoading, totalPosts} = usePosts(10)
      const { sortedPosts, selectedSort } = useSortedPosts(posts)
      const {sortedAndFilteredPosts, searchingQuery} = useSortedAndFilteredPosts(sortedPosts)

      return {
        posts , isPostsLoading, totalPosts,
        sortedPosts, selectedSort,
        sortedAndFilteredPosts, searchingQuery
      }
    }
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