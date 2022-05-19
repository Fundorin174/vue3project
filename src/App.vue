<template>
<div>
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
            ]
        }
    },
    methods: {
      addLike(){
        this.likes +=1;
      },
      addDislike(){
        this.dislikes +=1;
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

  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-bottom: 10px;
  }
</style>