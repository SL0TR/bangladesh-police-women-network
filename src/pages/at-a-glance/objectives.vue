<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-2 text-primary text-bold featured-header uppercase">Objectives of BPWN</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
      <hr>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-1 text-secondary text-bold uppercase">Objectives of BPWN</div>
    </div>
    <div class="col-lg-2 offset-lg-5 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
      <hr>
    </div>
    <div class="col-lg-10 offset-lg-1 q-mb-xl" >
      <div class="q-title text-center text-tertiary q-mt-xl" v-for="(object, id) in objecttives" :key="id"> <span class="text-secondary text-weight-bolder"> {{ id + 1 }}.</span> {{ object }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      objecttives: [
        'To strengthen women’s position in Bangladesh police.',
        'To improve professionalism through the affiliation with international network and exchanging derived knowledge and co-relating ideas.',
        'To increase representation of women in Bangladesh police, their empowerment and participation in policy formulation process.',
        'To increase participation of women police in different work areas in national and international milieu.',
        'To create an appropriate working environment for police women through implementation of welfare programmes covering the areas of education, health, social status and economic empowerment.',
        'Taking all necessary measures to establish and facilitate the job of police women as far as there legal & justified rights are concerned.',
        'Books, booklets, journals & papers are to publish in facilitating, the training, meeting, seminar, symposium for improving professional capability of police women.',
        'Proactive role preserve the rights of police women in employment, posting, promotion & overall development',
        'To identify the way of cooperation and opportunity through augmentation of inter exchange of views and thoughts of members and to take steps accordingly.',
        'Through establishment of proper communication with other aiding organizations and agencies to take into account a holistic approach for women development.'
      ]
    }
  }
}
</script>

<style scoped>

</style>
