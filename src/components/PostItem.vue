<template >
  <div class="post" >
    <div><strong>Пост о</strong>{{' '+ post.title}}</div>
    <div><strong>Описание</strong>{{' '+ post.body}}</div>
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
  
</style>