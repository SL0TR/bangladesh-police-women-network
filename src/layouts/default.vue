<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <nav-bar/>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-comp/>
  </q-layout>
</template>

<script>
import navBar from '../components/navBar'
import footerComp from '../components/footerComp'

export default {
  name: 'PageLayout',
  data () {
    return {
    }
  },
  components: {
    navBar,
    footerComp
  }
}
</script>

<style>
  :root {
    --primary-color: #67B247;
    --secondary-color: #30336b;
  }

  /* GLOBAL STYLES */
  .q-layout-page-container {
    min-height: calc(100vh - 50px) !important;
    overflow: hidden;
  }

  .border {
    border: 5px solid var(--secondary-color);
  }

  .border-prim {
    border: 5px solid var(--primary-color);
  }

  .full-width-height {
    width: 100%;
    height: calc(100vh - 58px);
  }

</style>
