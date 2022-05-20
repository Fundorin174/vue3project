<template>
  <div>
  <post-form @create='addPost' />
  <post-list :posts="posts" /> 
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
        }
    },
    methods: {      
      addPost(postItem){
         this.posts = [...this.posts, postItem];
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