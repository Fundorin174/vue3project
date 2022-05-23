<template >
  <div class="post" >
    <div>
      <div><strong>Пост о</strong>{{' '+ post.title}}</div>
      <div><strong>Описание</strong>{{' '+ post.body}}</div>
    </div>
    <my-button style='align-self: flex-end'>
       Удалить
    </my-button>    
  </div>
</template>
<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
<style >
    .post {
    padding: 15px;
    border: 2px solid teal;
    margin-bottom: 10px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

</style>