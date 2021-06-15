<template>
  <div id="app">
    <b-nav v-if="loading==false" value=true >
      <b-nav-item active><router-link :to="{ name: 'Profile' }">Profile</router-link></b-nav-item>
      <b-nav-item> <router-link :to="{ name: 'Form' }">Form</router-link></b-nav-item>
      <b-nav-item><router-link :to="{ name: 'List' }">List</router-link></b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>
// // import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     // HelloWorld
//   }
// }
// </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>



<script>
  export default {
    data() {
      return {
        loading: false,
        loadingTime: 0,
        maxLoadingTime: 3
      }
    },
    watch: {
      loading(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.clearLoadingTimeInterval()

          if (newValue) {
            this.$_loadingTimeInterval = setInterval(() => {
              this.loadingTime++
            }, 1000)
          }
        }
      },
      loadingTime(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue === this.maxLoadingTime) {
            this.loading = false
          }
        }
      }
    },
    created() {
      this.$_loadingTimeInterval = null
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.loading = true
        this.loadingTime = 0
      }
    }
  }
</script>