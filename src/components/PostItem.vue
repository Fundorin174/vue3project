<template >
  <div class="post" >
    <div>
      {{post.id}}
      <div><strong>Пост о</strong>{{' '+ post.title}}</div>
      <div><strong>Описание</strong>{{' '+ post.body}}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`) " style="align-self: flex-end">
       Открыть
    </my-button>   
    <my-button @click="onRemove" style="align-self: flex-end">
       Удалить
    </my-button>   
    </div>    
  </div>
</template>
<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    onRemove(){
      this.$emit('remove', this.post)
    }
    }
}
</script>
<style >
    .post {
    padding: 15px;
    border: 2px solid teal;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post__btns {
    display: flex;
  }

</style>