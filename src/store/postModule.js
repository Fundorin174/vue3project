import axios from 'axios';
export const postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    selectedSort: '',
    searchingQuery: '',
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptons: [
      {value: 'title', name: 'По названию'},
      {value: 'body', name: 'По описанию'},
      {value: 'id', name: 'По Id'},
    ]
  }),
  getters: {
    sortedPosts(state){
      return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.toString()
      .localeCompare((post2[state.selectedSort]).toString()));
    },
    sortedFilteredPosts(state, getters){
      return getters.sortedPosts.filter(post => post.title.toLowerCase()
      .includes(state.searchingQuery.toLowerCase()))
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchingQuery(state, searchingQuery) {
      state.searchingQuery = searchingQuery;
    },
  },
  actions: {
    async fetchPosts({state, commit}) {
      try {
        commit('setLoading', true)
        const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        });
        commit('setPosts', response.data)
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit)) 
      } catch (e) {
        console.log('Error: ' + e.toString())
      } finally {
        commit('setLoading', false)
      }
    },
    async loadMorePosts({state, commit}) {
      try {
        commit('setPage', state.page +=1);
        const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        });
        commit('setPosts', [...state.posts, ...response.data]) ;
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit)) 
      } catch (e) {
        console.log('Error: ' + e.toString())
      } finally {
      }
    },
  },
  namespaced: true
}