import { computed, ref } from "vue";

export function useSortedPosts(posts) {
  const selectedSort = ref('')

  const sortedPosts =  computed(()=>{
    return [...posts.value].sort((post1, post2) => post1[selectedSort.value]?.toString()
    .localeCompare((post2[selectedSort.value]).toString()))
  })
  
  return ({
    sortedPosts, selectedSort
  })
}