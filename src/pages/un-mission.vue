<template>
  <q-page>
    <div class="row">
      <div class="col-xs-10 offset-xs-1  q-mt-xl">
        <div class="text-center q-display-2 text-primary text-bold featured-header uppercase">UN Mission</div>
      </div>
      <div class="col-lg-2 offset-lg-5 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
        <hr>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-lg">
        <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">Women Police in UN Peacekeeping Mission
        </div>
      </div>
      <div class="col-lg-6 offset-lg-3 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
        <hr>
      </div>
      <div class="col-lg-4 offset-lg-4">
        <img class="q-card full-width" src="../statics/bpwn/images/un-pm.jpg" alt="un-pm">
      </div>
      <div class="col-lg-12 q-mt-md">
        <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
        Starting its journey in CIVPOL back in 2000 Bangladesh women police is contributing with exemplary dedication in Peacekeeping Mission including CIVPOL/UNPOL, Secondment & FPU which has placed them as key driving force in promoting social cohesion in different areas of conflict.
        </div>
        <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
          The number of Women Police participating in UN peacekeeping mission is stated below:
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 col-xs-10 offset-xs-1 q-mt-xl">
        <img class="full-width" src="../statics/bpwn/images/chart_current.png" alt="Current UN Participaiton of women">
      </div>
      <div class="col-lg-4 offset-lg-2 col-xs-10 offset-xs-1 q-mt-xl">
        <img class="full-width" src="../statics/bpwn/images/chart_completed.png" alt="Current UN Participaiton of women">
      </div>
      <div class="col-lg-4 offset-lg-1 col-xs-10 offset-xs-1 q-mb-xl">
        <div class="text-center text-tertiary">Figure: Current Statistics of Lady Officers</div>
      </div>
      <div class="col-lg-4 offset-lg-2 col-xs-10 offset-xs-1 q-mb-xl">
        <div class="text-center text-tertiary">Figure: Number of Mission Completed Lady Officers
        </div>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-lg">
        <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">First ever Women Police Officers Joined in UN Mission at East Timore in 2000
        </div>
      </div>
      <div class="col-lg-10 offset-lg-1 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
        <hr>
      </div>
      <div class="col-lg-3 offset-lg-1 col-xs-10 offset-xs-1 q-mt-xl q-mb-xl">
        <img class="q-card full-width" src="../statics/bpwn/images/un-mily.jpg" alt="un-mily" style="height: 500px">
        <div class="text-center text-tertiary q-mt-md q-mb-xl"><span class="text-weight-bold">SP Mily Biswas,</span> Contingent Commander
          (AT present working at PHQ as DIG)</div>
      </div>
      <div class="col-lg-6 offset-lg-1 col-xs-10 offset-xs-1 q-mt-xl q-mt-md q-mb-xl">
        <img class="q-card full-width" src="../statics/bpwn/images/un-four_officer.jpg" alt="un-four_officer" style="height: 500px">
        <div class="text-center text-tertiary q-mt-md">From the left: <br/>
          <span class="text-weight-bold">Inspector Rowsan Ara</span> (At present retired)<br/>
          <span class="text-weight-bold">Inspector Shamim Ara</span> (At Present working at RAB as Sr. ASP)<br/>
          <span class="text-weight-bold">SP Mily Biswas, Contingent Commander</span> (AT present working at PHQ as DIG)<br/>
          <span class="text-weight-bold">Inspector Setara Begum</span> (At present retired)<br/>
          Late <span class="text-weight-bold">Inspector Umin Ara</span>
        </div>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-lg">
        <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">Women BANFPU in HAITI &amp; CONGO
        </div>
      </div>
      <div class="col-lg-6 offset-lg-3 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
        <hr>
      </div>
      <div class="col-12 q-mb-xl">
        <div class="row flex justify-around items-center">
          <div class="col-lg-5 col-xs-10 q-mt-xl">
            <img class="full-width" src="../statics/bpwn/images/un-haiti.png" alt="un-mily" style="height: 500px">
          </div>
          <div class="col-lg-5 col-xs-10 q-mt-xl">
            <img class="full-width" src="../statics/bpwn/images/un-congo.png" alt="un-four_officer" style="height: 500px">
          </div>
        </div>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-lg">
        <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">First Female Police Contingent started its Journey on 16 may 2010
        </div>
      </div>
      <div class="col-lg-8 offset-lg-2 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
        <hr>
      </div>
      <div class="col-12 q-mb-xl q-mt-xl">
        <div class="row justify-around">
          <div class="col-lg-3" v-for="(img, id) in unPaperImg" :key="id">
            <img class="full-width" :src="img" alt="Female Police Contingent started its Journey on 16 may 2010">
          </div>
        </div>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-lg">
        <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">Glimpse of ongoing mission in DR Congo
        </div>
      </div>
      <div class="col-lg-6 offset-lg-3 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
        <hr>
      </div>
      <div class="col-lg-10 offset-lg-1 q-mb-xl q-mt-xl">
        <div class="row justify-around wrap">
          <div class="col-lg-5 q-ma-md" v-for="(img, id) in congoMission" :key="id">
            <img class="q-card full-width " :src="img" alt="Female Police Contingent started its Journey on 16 may 2010">
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageUnMission',
  data () {
    return {
      unPaperImg: [
        '../statics/bpwn/images/un-paper-1.png',
        '../statics/bpwn/images/un-paper-2.png',
        '../statics/bpwn/images/un-paper-3.png'
      ],
      congoMission: [
        '../statics/bpwn/images/un-congo-mission-1.JPG',
        '../statics/bpwn/images/un-congo-mission-2.JPG',
        '../statics/bpwn/images/un-congo-mission-3.JPG',
        '../statics/bpwn/images/un-congo-mission-4.JPG',
        '../statics/bpwn/images/un-congo-mission-5.JPG',
        '../statics/bpwn/images/un-congo-mission-6.JPG',
        '../statics/bpwn/images/un-congo-mission-7.JPG',
        '../statics/bpwn/images/un-congo-mission-8.JPG',
        '../statics/bpwn/images/un-congo-mission-9.JPG',
        '../statics/bpwn/images/un-congo-mission-10.JPG',
        '../statics/bpwn/images/un-congo-mission-11.JPG',
        '../statics/bpwn/images/un-congo-mission-12.JPG',
        '../statics/bpwn/images/un-congo-mission-13.JPG',
        '../statics/bpwn/images/un-congo-mission-14.JPG'
      ]
    }
  }
}
</script>
