<template>
  <div class="row">
    <div class="col-12">
      <div class="at-a-glance-header"></div>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-2 text-primary  text-bold featured-header uppercase">About BPN</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
      <hr>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xs">
      <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">Journey of BPWN</div>
    </div>
    <div class="col-lg-2 offset-lg-5 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
      <hr>
    </div>
    <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 text-tertiary">
      <div class="text-center q-title q-mt-lg q-headline">Endeavour of Bangladesh Police paved the way of BPWN to start it's journey back in 2008 in assistance with Police Reform Program. With the employment of 14 women in Bangladesh Police, Women Police started it's journey in 1974.</div>
    </div>
    <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 q-mt-xl q-mb-xl">
      <table class="q-mt-lg q-mb-lg bg-secondary full-width rank-table">
        <thead class="bg-secondary shadow-4">
          <tr>
            <th class="text-left q-pa-md"><div class="q-subheading text-bold text-white"> SL </div></th>
            <th class="text-left "><div class="q-subheading text-bold text-white">Rank</div></th>
            <th class="text-center "><div class="q-subheading text-bold text-white">Person</div></th>
          </tr>
        </thead>
        <tbody class="shadow-1 bg-white">
          <tr v-for="(item, id) in rankTable" :key="id">
            <td class="text-left q-pa-xs" width="15%" >
              <div class="q-subheading  q-mb-md"> {{ item.sl }}  </div>
            </td>
            <td class="q-pa-xs"  width="30%">
              <div class="q-subheading  q-mb-lg"  >
                {{ item.rank }}  </div>
            </td>
            <td class="text-center" width="20%" >
              <div class="q-subheading  q-mb-md"> {{ item.person }}  </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 q-mt-xl">
      <table class="q-mt-lg q-mb-lg bg-secondary full-width rank-table-2">
        <thead class="bg-secondary shadow-4">
          <tr>
            <th class="text-left q-pa-md"><div class="q-subheading text-bold text-white"> Year </div></th>
            <th class="text-left "><div class="q-subheading text-bold text-white">Number Of Female Officers</div></th>
            <th class="text-center "><div class="q-subheading text-bold text-white"> Percent Age</div></th>
          </tr>
        </thead>
        <tbody class="shadow-1 bg-white">
          <tr v-for="(item, id) in ladyOfficerTable" :key="id">
            <td class="text-left q-pa-xs" width="35%" >
              <div class="q-subheading  q-mb-md"> {{ item.year }}  </div>
            </td>
            <td class="q-pa-xs"  width="35%">
              <div class="q-subheading  q-mb-lg"  >
                {{ item.number}}  </div>
            </td>
            <td class="text-center" width="30%" >
              <div class="q-subheading  q-mb-md"> {{ item.percent }}  </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-10 offset-1 q-mt-md">
      <div class="text-tertiary q-title text-center text-weight-light">At present the percentage of women police among all working police personnel is 6.66% and the percentage of cadre officials is 10.26%.</div>
    </div>
    <div class="col-lg-8 offset-lg-2 q-mt-xl">
      <img class="full-width" src="../../statics/images/first_women_officer.png" alt="Firs Women Officer">
    </div>
    <div class="col-10 offset-1 q-mt-md">
      <div class="text-tertiary q-title text-center text-weight-light">Figure: 1st recruited Women Police Back in 1974
    </div>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">Women Police in UN Peacekeeping Mission</div>
    </div>
    <div class="col-lg-2 offset-lg-5 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
      <hr>
    </div>
    <div class="col-10 offset-1 q-mt-lg">
      <div class="text-tertiary q-title text-center text-weight-normal">Starting its journey in CIVPOL back in 2000 Bangladesh women police is contributing with exemplary dedication in Peacekeeping Mission including CIVPOL/UNPOL, Secondment & FPU which has placed them as key driving force in promoting social cohesion in different areas of conflict.</div>
    </div>
    <div class="col-10 offset-1 q-mt-lg q-mb-lg">
      <div class="text-tertiary q-title text-center">The number of Women Police participating in UN peacekeeping mission is stated below:</div>
    </div>
    <div class="col-lg-4 offset-lg-1 col-xs-10 offset-xs-1 q-mt-xl">
      <img class="full-width" src="../../statics/images/chart_current.png" alt="Current UN Participaiton of women">
      <div class="col-lg-4 col-xs-10 q-mb-xl q-mt-lg">
        <div class="text-center text-tertiary">Figure: Current Statistics of Lady Officers</div>
      </div>
    </div>
    <div class="col-lg-4 offset-lg-2 col-xs-10 offset-xs-1 q-mt-xl">
      <img class="full-width" src="../../statics/images/chart_completed.png" alt="Current UN Participaiton of women">
      <div class="col-lg-4  col-xs-10 q-mb-xl q-mt-lg">
        <div class="text-center text-tertiary">Figure: Number of Mission Completed Lady Officers
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rankTable: [
        {
          sl: 1,
          rank: 'Deputy Inspector General Police (DIG)',
          person: '02'
        },
        {
          sl: 2,
          rank: 'Additional DIG',
          person: '04'
        },
        {
          sl: 3,
          rank: 'Superintendent of Police (SP)',
          person: '37'
        },
        {
          sl: 4,
          rank: 'Additional SP',
          person: '93'
        },
        {
          sl: 5,
          rank: 'Sr.ASP/ASP',
          person: '126'
        },
        {
          sl: 6,
          rank: 'Inspector',
          person: '110'
        },
        {
          sl: 7,
          rank: 'Sergant',
          person: '55'
        },
        {
          sl: 8,
          rank: 'Sub-Inspector(SI)',
          person: '646'
        },
        {
          sl: 9,
          rank: 'ASI',
          person: '928'
        },
        {
          sl: 10,
          rank: 'Naik',
          person: '28'
        },
        {
          sl: 11,
          rank: 'Constable',
          person: '9138'
        }
      ],
      ladyOfficerTable: [
        {
          year: 'Till February, 2018',
          number: '11,767',
          percent: '6.66%'
        },
        {
          year: 'Till September, 2008',
          number: '2,520',
          percent: '2.21%'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .at-a-glance-header {
    background: linear-gradient(180deg, rgba(103, 178, 71, 0.3), rgba(48, 51, 107, 0.7)), url('../../statics/images/about-bpn-journey.jpg');
    height: calc(100vh - 58px);
    width: 100%;
    background-size: 100% 100%;
    background-attachment: fixed;
    position: relative;
  }

  .at-a-glance-header::after {
    content: "Endeavour of Bangladesh Police paved the way of BPWN to start it's journey back in 2008";
    position: absolute;
    bottom: 2rem;
    font-size: 2.2rem;
    font-style: italic;
    color: #eee;
    width: 100%;
    text-align: center;
  }

  .rank-table,
  .rank-table-2 {
    position: relative;
  }

  .rank-table::after {
    content: "Total (till 2018) 11,767";
    position: absolute;
    bottom: -1.5rem;
    right: 0;
    font-weight: bold;
    font-size: 1.2rem;
    width: 30%;
    text-align: center;
  }

  .rank-table-2::after {
    content: "Percentage of Lady Officers";
    position: absolute;
    top: -2.5rem;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
  }

  @media (max-width: 700px) {
    .rank-table::after {
      width: 100%;
    }
  }

</style>
