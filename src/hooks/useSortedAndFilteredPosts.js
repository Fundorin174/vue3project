import { computed, ref } from "vue"

export function useSortedAndFilteredPosts(sortedPosts) {
  const searchingQuery = ref('')

  const sortedAndFilteredPosts = computed(()=>{
    return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchingQuery.value.toLowerCase()))
  })  
  
  return ({
    sortedAndFilteredPosts, searchingQuery
  })
}