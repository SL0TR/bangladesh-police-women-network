<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
        <div class="text-center q-display-2 text-primary text-bold featured-header uppercase">Annual Plan</div>
      </div>
      <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
        <hr>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-xl">
        <div class="text-center q-display-1 text-secondary text-bold uppercase">Future Plan for 2018</div>
      </div>
      <div class="col-lg-4 offset-lg-4 col-xs-10 offset-xs-1 q-mt-sm q-mb-md">
        <hr>
      </div>
      <div class="col-lg-10 offset-lg-1 q-mb-xl" >
        <div class="q-title text-center text-tertiary q-mt-xl" v-for="(plan, id) in plans2018" :key="id"><q-icon color="secondary" size="25px" name="navigate next" /> {{ plan }}</div>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-xl">
        <div class="text-center q-display-1 text-secondary text-bold uppercase">Planning of 2016-17</div>
      </div>
      <div class="col-lg-4 offset-lg-4 col-xs-10 offset-xs-1 q-mt-sm q-mb-md">
        <hr>
      </div>
      <div class="col-lg-10 offset-lg-1 q-mb-xl" >
        <div class="q-title text-center text-tertiary q-mt-xl" v-for="(plan, id) in plans2016" :key="id"><q-icon color="secondary" size="25px" name="navigate next" /> {{ plan }}</div>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-xl">
        <div class="text-center q-display-1 text-secondary text-bold uppercase">Planning of 2014-15</div>
      </div>
      <div class="col-lg-4 offset-lg-4 col-xs-10 offset-xs-1 q-mt-sm q-mb-md">
        <hr>
      </div>
      <div class="col-lg-10 offset-lg-1 q-mb-xl" >
        <div class="q-title text-center text-tertiary q-mt-xl" v-for="(plan, id) in plans2014" :key="id"><q-icon color="secondary" size="25px" name="navigate next" /> {{ plan }}</div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      plans2018: [
        'By arrangement of proper training and inspirational directives, development of working skill of women police and increase of their number with regard to partake in decision making.',
        'Attending of more female police officers to various international trainings, conferences and seminars and thereby retain creditworthy representation of our country and achieve leadership capability.',
        'Planning of an international conference with the participation of countries incorporated in Region 22 of IAWP.',
        'Contributing to social service by preparing a massive network by coordination with different corporate, social and non-profit service providing organizations.'
      ],
      plans2016: [
        'To conduct Divisional consultations with women Police and Unit Heads at seven range.',
        'To conduct National Conference at Dhaka with the participation of women police from different unit of Bangladesh Police.',
        'To send proposal and coordination at SB, CID and WSID to establish Day care centre.',
        'To coordinate with Women Affairs department to make more effective Rajarbag Day Care Centre and to extend the service time.',
        'Plan to Computer, language and driving training for BPWN members.',
        'To lobby and coordinate for more operational posting of women. To ensure women in PS to work in outside other duties.',
        'Conduct Awareness programmes in schools and colleges.',
        'Media consultation and participatory programmes to inspire girls in policing.',
        'To brief newly recruited constable for professional and health awareness.',
        'Strengthen Networking and partnership with NGO’s and other networking.',
        'Completion of women police database.',
        'BPWN Permanent office establishment.',
        'To conduct more community awareness programme on VAW.'
      ],
      plans2014: [
        'Formation of Range and Divisional coordination committee and arrangement of views-sharing meeting.',
        'Completion of registration process of BPWN, selection of membership fees and creation of Standard Operational Procedure (SOP).',
        'In case of sensational incident of violence against women and children to pave the path of essential legal aid through proper coordination.',
        'Establishment of a Database of women police of Bangladesh.',
        'Organize 2nd National Conference.',
        'Awareness building program will be initiated in school and colleges against drugs, dowry, early marriage and torture against women and children.',
        'Commemoration of National and International women and child related days.',
        'To augment capacity of women police of Bangladesh impart special training program on driving , computer and English language skill.',
        'Proposal for pre gender budget creation.',
        'On the basis of pragmatic need, to increase the number of women police recommendation will be sent to policy makers of Bangladesh police to implement the proposal.',
        'Members of Executive committee and regional coordination committee of BPWN will visit existing victim support centre and day care centre.'
      ]
    }
  }
}
</script>

<style scoped>

</style>
