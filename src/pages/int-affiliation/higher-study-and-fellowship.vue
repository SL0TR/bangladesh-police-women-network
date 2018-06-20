<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-2 text-primary text-bold featured-header uppercase">Higher Studies &amp; Fellowship</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
      <hr>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xs">
      <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">International Affairs, Activities &amp; Network of BPWN</div>
    </div>
    <div class="col-lg-6 offset-lg-3 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
      <hr>
    </div>
    <div class="col-lg-12 q-mt-md">
      <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
      Eisenhower Fellowship 2012 South Asia Region program visit in Philadelphia, USA.
      </div>
    </div>
    <div class="col-12">
      <div class="row justify-around wrap">
        <div class="col-lg-5 q-ma-lg" v-for="(img, id) in higherStudyImg" :key="id">
          <img class="q-card full-width" :src="img" alt="int-aff-img-1">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      higherStudyImg: [
        '../../statics/bpwn/images/higher-study-1.jpg',
        '../../statics/bpwn/images/higher-study-2.jpg',
        '../../statics/bpwn/images/higher-study-3.jpg',
        '../../statics/bpwn/images/higher-study-4.jpg',
        '../../statics/bpwn/images/higher-study-5.jpg',
        '../../statics/bpwn/images/higher-study-6.jpg',
        '../../statics/bpwn/images/higher-study-7.jpg',
        '../../statics/bpwn/images/higher-study-8.jpg'
      ]
    }
  }
}
</script>

<style scoped>

</style>
