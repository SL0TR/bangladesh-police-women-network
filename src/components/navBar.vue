<template>
  <q-toolbar
    color="white"
    class="text-black"
  >
    <q-toolbar-title class="flex">
      <img class="bpwn-logo" src="../statics/bpwn/bpwn-logo.png" alt="BPWN Logo">
    </q-toolbar-title>
    <q-btn-group class="text-primary nav-btns" v-if="this.$q.platform.is.desktop" flat>
      <q-btn class=" nav-btn" label="HOME" flat @click="$router.push('/')"/>
      <q-btn-dropdown class="text-primary nav-btn" label="At a glance" >
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width nav-btn" label="About BPN" flat @click="$router.push('/at-a-glance/about-bpwn')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width nav-btn" label="Vision &amp; Formation" flat @click="$router.push('/at-a-glance/vision-and-formation')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width nav-btn" label="Objectives" flat @click="$router.push('/at-a-glance/objectives')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width nav-btn" label="Executive Committee" flat @click="$router.push('/at-a-glance/executive-commitee')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width nav-btn" label="Achievements" flat @click="$router.push('/at-a-glance/achievements')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width nav-btn" label="Annual Plan" flat @click="$router.push('/at-a-glance/annual-plan')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width nav-btn" label="BPM &amp; PPM" flat @click="$router.push('/at-a-glance/bpm-and-ppm')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width nav-btn" label="Biography Of Sr. Officers" flat @click="$router.push('/at-a-glance/biography-of-sr-officers')"/>
          </div>
        </div>
      </q-btn-dropdown>
      <q-btn-dropdown class="text-primary nav-btn" label="Int. Affiliation" >
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width nav-btn" label="Association with IAWP" flat @click="$router.push('/int-affiliation/association-with-iawp')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width nav-btn" label="1st Asia Conference" flat @click="$router.push('/int-affiliation/first-asia-conference')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width nav-btn" label="Networking With Other Org." flat @click="$router.push('/int-affiliation/networking-with-other-org')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width nav-btn" label="Higher Study &amp; Fellowhsip" flat @click="$router.push('/int-affiliation/higher-study-and-fellowship')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width nav-btn" label="Achievements" flat @click="$router.push('/int-affiliation/achievements')"/>
          </div>
        </div>
      </q-btn-dropdown>
      <q-btn class=" nav-btn" label="UN MISSION" flat @click="$router.push('/un-mission')"/>
      <q-btn-dropdown class="text-primary nav-btn" label="Testimonials" >
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width nav-btn" label="Speech Of Mily Biswas" flat @click="$router.push('/testimonials/speech-of-mily-biswas')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width nav-btn" label="2nd National Conference" flat @click="$router.push('/testimonials/second-national-conference')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <q-btn class="text-primary full-width nav-btn" label="Blog Corner" flat @click="$router.push('/testimonials/blog-corner')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width nav-btn" label="News Coverage" flat @click="$router.push('/testimonials/news-coverage')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
          <q-btn class="text-primary full-width nav-btn" label="National Event" flat @click="$router.push('/testimonials/national-event')"/>
          </div>
        </div>
      </q-btn-dropdown>
      <q-btn class=" nav-btn" label="gallery" flat @click="$router.push('/gallery')"/>
      <q-btn class=" nav-btn" label="contact" flat @click="$router.push('/contact')"/>
    </q-btn-group>
    <q-btn class="nav-menu-btn" icon="menu" color="primary" outline @click="drawer = !drawer"/>
    <q-layout-drawer class="text-primary" side="left" v-model="drawer">
      <div class="row">
        <div class="col-10 offset-1 q-mt-xl">
          <q-btn class=" nav-btn full-width" label="HOME" outline @click="$router.push('/')"/>
        </div>
        <div class="col-10 offset-1 q-mt-lg">
          <q-btn-dropdown class="text-primary full-width" outline label="At a glance" >
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
        </div>
        <div class="col-10 offset-1 q-mt-lg">
          <q-btn-dropdown class="text-primaryf full-width" outline label="Int. Affiliation" >
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
        </div>
        <div class="col-10 offset-1 q-mt-lg">
          <q-btn-dropdown class="text-primary full-width" outline label="Testimonials" >
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
        </div>
        <div class="col-10 offset-1 q-mt-lg">
          <q-btn class="nav-btn  full-width" label="UN MISSION" outline @click="$router.push('/un-mission')"/>
        </div>
        <div class="col-10 offset-1 q-mt-lg">
          <q-btn-dropdown class="text-primary full-width" outline label="Testimonials" >
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
        </div>
        <div class="col-10 offset-1 q-mt-lg">
          <q-btn class=" nav-btn full-width" label="gallery" outline @click="$router.push('/gallery')"/>
        </div>
        <div class="col-10 offset-1 q-mt-lg">
          <q-btn class=" nav-btn full-width" label="contact" outline @click="$router.push('/contact')"/>
        </div>
      </div>
    </q-layout-drawer>
  </q-toolbar>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped>
  .nav-menu-btn {
    display: none;
  }

  .bpwn-logo {
    height: 50px;
    width: 140px;
  }

  .nav-btn {
    transition: all .3s ease-in-out;
  }

  body.desktop .q-focusable:focus .q-focus-helper, body.desktop .q-hoverable:hover .q-focus-helper {
    background: var(--secondary-color) !important;
  }

  .nav-btn:hover {
    background: var(--secondary-color);
    color: #eee !important;
  }

  @media (max-width: 770px) {
    .nav-btns {
      display: none;
    }

    .bpwn-logo {
      height: 40px;
      width: 120px;
    }

    .nav-menu-btn {
      display: block;
    }
  }

</style>
