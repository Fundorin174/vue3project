<template>
<div>
    <p>Количество лайков <strong>{{likes}}</strong></p>
    <p>Количество дизлайков <strong>{{dislikes}}</strong></p>
</div>
<div>
    <button @click="addLike" >Like</button>
    <button @click="addDislike">Dislike</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            likes: 0,
            dislikes: 0,
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

</style>