<template>
  <q-toolbar
    color="white"
    class="text-black"
  >
    <q-toolbar-title class="flex">
      <img class="bpwn-logo" src="../statics/bpwn-logo.png" alt="BPWN Logo">
    </q-toolbar-title>
    <q-btn-group class="text-primary nav-btns" v-if="this.$q.platform.is.desktop" flat>
      <q-btn class=" nav-btn" label="HOME" flat @click="$router.push('/')"/>
      <q-btn class=" nav-btn" label="At a glance" flat @click="$router.push('/at-a-glance')"/>
      <q-btn class=" nav-btn" label="Int.Affliation" flat @click="$router.push('/int-affliation')"/>
      <q-btn class=" nav-btn" label="UN MISSION" flat @click="$router.push('/un-mission')"/>
      <q-btn class=" nav-btn" label="Testimonials" flat @click="$router.push('/testimonials')"/>
      <q-btn class=" nav-btn" label="gallery" flat @click="$router.push('/gallery')"/>
      <q-btn class=" nav-btn" label="contact" flat @click="$router.push('/contact')"/>
    </q-btn-group>
  </q-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
