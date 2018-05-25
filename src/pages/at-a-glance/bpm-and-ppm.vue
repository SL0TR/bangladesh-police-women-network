<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-2 text-primary  text-bold featured-header uppercase">BPM &amp; PPM</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
      <hr>
    </div>
    <div class="col-12 q-mb-xl q-mt-xl" v-for="(week, id) in allWeeks" inline :key="id">
      <div class="row">
        <div class="col-xs-10 offset-xs-1  q-mt-xs">
          <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">{{  week.title }}</div>
        </div>
        <div class="col-lg-2 offset-lg-5 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
          <hr>
        </div>
        <div class="col-lg-10 offset-lg-1 flex wrap items-center justify-around q-mb-xl">
          <q-card class="q-ma-lg" v-for="(card, id) in week.policeWeek" :key="id">
            <q-card-media>
              <img :src="card.img">
            </q-card-media>
            <q-card-title>
              <div class="text-tertiary text-weight-bold"> {{ card.title }} </div>
            </q-card-title>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allWeeks: [
        {
          title: 'POLICE WEEK 2018 BPM/PPM',
          policeWeek: [
            {
              img: '../../statics/images/police-week-2018-1.JPG',
              title: 'DIG Rowshan Ara PPM'
            },
            {
              img: '../../statics/images/police-week-2018-2.JPG',
              title: 'DC Hamida Parvin PPM'
            },
            {
              img: '../../statics/images/police-week-2018-3.JPG',
              title: 'SP Asma Siddique Mili BPM'
            },
            {
              img: '../../statics/images/police-week-2018-4.JPG',
              title: 'Addl. SP Jesmin Keka PPM'
            },
            {
              img: '../../statics/images/police-week-2018-5.JPG',
              title: 'Addl. SP Bina PPM'
            }
          ]
        },
        {
          title: 'POLICE WEEK 2017 BPM/PPM',
          policeWeek: [
            {
              img: '../../statics/images/police-week-2017-1.JPG',
              title: 'SP Shamsunnahar PPM'
            },
            {
              img: '../../statics/images/police-week-2017-2.JPG',
              title: 'Snr. ASP Shawon Shyla PPM'
            },
            {
              img: '../../statics/images/police-week-2017-3.JPG',
              title: 'Snr. ASP Shaheda Sultana PPM'
            }
          ]
        },
        {
          title: 'POLICE WEEK 2016 BPM/PPM',
          policeWeek: [
            {
              img: '../../statics/images/police-week-2016-1.JPG',
              title: 'Addl. SP Mukta Dhar PPM'
            },
            {
              img: '../../statics/images/police-week-2016-2.JPG',
              title: 'Addl. SP Maksuda Akhter Khanam PPM'
            },
            {
              img: '../../statics/images/police-week-2016-3.JPG',
              title: 'Snr. ASP Shahanaz Parvin PPM'
            }
          ]
        },
        {
          title: 'POLICE WEEK 2015 BPM/PPM',
          policeWeek: [
            {
              img: '../../statics/images/police-week-2015-1.JPG',
              title: 'Addl. DIG Amena Begum BPM'
            },
            {
              img: '../../statics/images/police-week-2015-2.JPG',
              title: 'Addl. SP Mahmuda Afroz Lucky PPM'
            },
            {
              img: '../../statics/images/police-week-2015-3.JPG',
              title: 'SP Salma Begum PPM'
            }
          ]
        },
        {
          title: 'POLICE WEEK 2014 BPM/PPM',
          policeWeek: [
            {
              img: '../../statics/images/police-week-2014-1.JPG',
              title: 'SS Farida Yesmin BPM'
            },
            {
              img: '../../statics/images/police-week-2014-2.JPG',
              title: 'SP Shamima Begum PPM'
            },
            {
              img: '../../statics/images/police-week-2014-3.JPG',
              title: 'SP Nasian Wazed PPM'
            }
          ]
        },
        {
          title: 'POLICE WEEK 2013 BPM/PPM',
          policeWeek: [
            {
              img: '../../statics/images/police-week-2013-1.JPG',
              title: 'DIG Mily Biswas PPM'
            },
            {
              img: '../../statics/images/police-week-2013-2.JPG',
              title: 'Addl. DIG Rokhfar Sultana Khanam PPM'
            },
            {
              img: '../../statics/images/police-week-2013-3.JPG',
              title: 'SP Abida Sultana PPM'
            },
            {
              img: '../../statics/images/police-week-2013-4.JPG',
              title: 'SP Ayesha Siddiqa PPM'
            }
          ]
        },
        {
          title: 'POLICE WEEK 2011 BPM/PPM',
          policeWeek: [
            {
              img: '../../statics/images/police-week-2011-1.JPG',
              title: 'Addl. SP Afrida Rubai PPM'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

  .q-card {
    width: 410px;
  }

</style>
