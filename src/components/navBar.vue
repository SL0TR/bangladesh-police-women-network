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
      <q-btn-dropdown class="text-primary" label="Int. Affiliation" >
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width" label="Association with IAWP" flat @click="$router.push('/int-affiliation/association-with-iawp')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width" label="1st Asia Conference" flat @click="$router.push('/int-affiliation/first-asia-conference')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width" label="Networking With Other Org." flat @click="$router.push('/int-affiliation/networking-with-other-org')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="Higher Study &amp; Fellowhsip" flat @click="$router.push('/int-affiliation/higher-study-and-fellowship')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="Achievements" flat @click="$router.push('/int-affiliation/achievements')"/>
          </div>
        </div>
      </q-btn-dropdown>
      <q-btn class=" nav-btn" label="UN MISSION" flat @click="$router.push('/un-mission')"/>
      <q-btn-dropdown class="text-primary" label="Testimonials" >
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width" label="Speech Of Mily Biswas" flat @click="$router.push('/testimonials/speech-of-mily-biswas')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width" label="2nd National Conference" flat @click="$router.push('/testimonials/second-national-conference')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width" label="Blog Corner" flat @click="$router.push('/testimonials/blog-corner')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="News Coverage" flat @click="$router.push('/testimonials/news-coverage')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width" label="National Event" flat @click="$router.push('/testimonials/national-event')"/>
          </div>
        </div>
      </q-btn-dropdown>
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
