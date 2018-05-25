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
      <q-btn-dropdown class="text-primary" label="At a glance" >
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width" label="About BPN" flat @click="$router.push('/at-a-glance/about-bpwn')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width" label="Vision &amp; Formation" flat @click="$router.push('/at-a-glance/vision-and-formation')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width" label="Objectives" flat @click="$router.push('/at-a-glance/objectives')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="Executive Committee" flat @click="$router.push('/at-a-glance/executive-commitee')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="Achievements" flat @click="$router.push('/at-a-glance/achievements')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="Annual Plan" flat @click="$router.push('/at-a-glance/annual-plan')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="BPM &amp; PPM" flat @click="$router.push('/at-a-glance/bpm-and-ppm')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="Biography Of Sr. Officers" flat @click="$router.push('/at-a-glance/biography-of-sr-officers')"/>
          </div>
        </div>
      </q-btn-dropdown>
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
