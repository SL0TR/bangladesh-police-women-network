<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-2 text-primary text-bold featured-header uppercase">Achievements</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
      <hr>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-1 text-secondary text-bold uppercase">Achievements and Initiatives of 2017</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-10 offset-xs-1 q-mt-sm q-mb-md">
      <hr>
    </div>
    <div class="col-lg-10 offset-lg-1 q-mb-xl" >
      <div class="q-title text-center text-tertiary q-mt-xl" v-for="(achievement, id) in achievments" :key="id"><q-icon color="primary" size="25px" name="navigate next" /> {{ achievement }}</div>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-1 text-secondary text-bold uppercase">Previous Achievements and Initiatives</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-10 offset-xs-1 q-mt-sm q-mb-md">
      <hr>
    </div>
    <div class="col-lg-10 offset-lg-1 q-mb-xl" >
      <div class="q-title text-center text-tertiary q-mt-xl" v-for="(achievement, id) in prevAchievment" :key="id"><q-icon color="primary" size="25px" name="navigate next" /> {{ achievement }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      achievments: [
        'Head of Regional Committee along with other women police of police Training centre, Rangpur Range distributed winter cloths and blanket sent from Dhaka among poor people in Rangpur Tista Chor areas.',
        'On 27th November, 2017 BPWN members of Dhaka range and Dhaka Metropolitan police went to Shariatpur district for day long discussion in a school in presence of inspector General of Bangladesh police.',
        'Members of BPWN got engaged in help of Rohingya refugees in Cox’sbazar.',
        'Opinion sharing with the regional committees of Dhaka, Chittagong, Sylhet, Rajshahi. Rangpur, Barishal and Khulna division and formation of coordination committee.',
        'Each year arrangement of inspirational briefing to the trainee recruit female constables about their scopes to serve the homeland and people.',
        'In the Official Publication of International Association of Women Police, Women Police Issue Nov-Dec, 2017 region update of AIG Shamima Begum ppm , PHQ & vice president BPWN, coordinator of region 22 has been published',
        'All-out cooperation of BPWN to organize successfully "Bangladesh Women Police Award-2017" program introduced by Bangladesh Police for celebrating the "International Women\'s Day"',
        'A team of five police women have successfully completed their seminar on Counter terrorism in China.',
        'BPWN consultation held in Police Training Centre, Rangpur on 6th-7th November, 2017. Discussion included sharing on BPWN mission, vision and achievements of Women Police as well as problem sharing of women police in open discussion encouraging women police to work with professionalism.'
      ],
      prevAchievment: [
        'Range and divisional coordination committee has been formed and a strong communication has been established among different units for identifying problems and challenges of women police. Regular consultation and workshop is being arranged for addressing issues affecting their job.',
        'At the initiative of Inspector General "Bangladesh Police Women Award" has been introduced to dignify the role of women police to uphold the spirit of International Women’s day on 8th March every year. BPWN, in collaboration with Bangladesh Police has organized the first award giving ceremony successfully. For exemplary services 33 women officers of different ranks have been awarded in 5 categories.',
        'Sensitization workshops on HIV/AIDS has been organized in association with UNAIDS for women law enforcers from different police units.',
        'BPWN assisted Common wealth Human rights initiatives (CHRI ) to complete the report “Rough Roads to Equality” Women police in South Asia, 2015',
        'Highlighting the role of women police in ensuring social justice, awareness building programs are being conducted in police training centers.',
        'BPWN is arranging rally and discussion for observing different international days including women\'s day. Activities of the network of women police is being disseminated through electronic and print media, BPWN website and other social networks.',
        'BPWN has initiated different welfare activities such as blood donation, distribution of aid among flood affected community and regular campaign program on violence against women, drug and ICT based crime.',
        'BPWN helpline number (01786000313) is actively strengthening the network by providing assistance to women police in particular needs.',
        'BPWN is inspiring women police to enhance required ability for participating in UN mission to uphold the image of Bangladesh in international arena.',
        'BPWN constitution has been amended to facilitate its activities. Other administrative works including collection of membership fee, creating database of women police are going on recurrently.',
        'BPWN has completed the process of affiliation with IAWP in board meeting held in Cardiff, United Kingdom in the year 2015 and has participated in Early Board Meeting and conference in Abu Dhabi, 2016. Member states in region-22 have also been communicated to introduce IAWP.',
        'BPWN is creating a platform for women police to excel their professional skill and to represent Bangladesh police through different training program and participation in conference.'
      ]
    }
  }
}
</script>

<style scoped>

</style>
