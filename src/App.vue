<template>
  <div id="q-app">
    <div class="row justify-center items-center spinner column" v-if="loading">
      <img class="spinner-logo" src="./statics/bpwn-badge-logo.png" alt="bpwn-badge-logo">
      <q-spinner-puff color="primary" :size="300" />
    </div>
    <router-view v-else/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loading = false
      }, 1500)
    })
  }
}
</script>

<style>
  .spinner {
    height: 100vh;
    position: relative;
  }

  .spinner-logo {
    position: absolute;
    top: calc(50% - 1.5rem);
    height: 3rem;
  }

</style>
