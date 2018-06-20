<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-2 text-primary text-bold featured-header uppercase">Networking With Other Organizations</div>
    </div>
    <div class="col-lg-6 offset-lg-3 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
      <hr>
    </div>
    <div class="col-12 q-mt-xl" v-for="(events, id) in allOcations" :key="id">
      <div class="row">
        <div class="col-xs-10 offset-xs-1  q-mt-lg">
          <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">{{ events.name }}
          </div>
        </div>
        <div class="col-lg-6 offset-lg-3 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
          <hr>
        </div>
        <div class="col-lg-10 offset-lg-1" v-for="(ocation, id) in events.ocations" :key="id">
          <q-card class="full-width" >
            <q-card-title>
              <span class="text-weight-bold">Place: </span> {{ ocation.place }}
            </q-card-title>
            <q-card-main>
              <p><span class="text-weight-bold">Date: </span> {{ ocation.date }}</p>
              <p class="text-tertiary q-subheading" v-for="(detail, id) in ocation.details" :key="id" >{{ detail }}</p>
            </q-card-main>
            <q-card-separator />
            <q-card-actions >
              <div class="col-12">
                <div class="row flex justify-center wrap items-center">
                  <div class="col-lg-3 q-ma-lg" v-for="(img,id) in ocation.images" :key="id">
                    <img class="full-width q-card" :src="img" alt="netwroking-programs" style="min-height: 300px">
                  </div>
                </div>
              </div>
            </q-card-actions>
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
      allOcations: [
        {
          name: 'Annual Memorial Service to honour the UN personnel',
          ocations: [
            {
              place: 'UN Headquarter',
              date: 'October 26 2016',
              details: [
                'Taptun Zaman, AIG, Bangladesh Police presently working as Police officer in UN Headquarter at Annual Memorial Service to honour the United Nations personnel who lost their lives in the line of duty.'
              ],
              images: [
                '../../statics/bpwn/images/netwroking-programs-1-img-1.jpg'
              ]
            }
          ]
        },
        {
          name: 'International Women in Law Enforcement Conference',
          ocations: [
            {
              place: 'Hyderabad, India',
              date: 'October 06 2016 to October 08 2016',
              details: [
                'SP Shamima Begum PPM, AIG Rebeka and SP Shahina and Fawzia Khandawkar, Gender Specialist,PRP, in the August Gathering of "International Women in Law Enforcement Conference - Leadership,Collaboration and Security" 6-8 October at Hyderabad National Training Academy. ',
                '132 Senior Women police, Academicians and Researchers from 15 different countries joined in the conference. They were invited there to represent Bangladesh Women Police performances in different Arena. Organizers and Participants took interest and appreciated the PRP initiatives to promote women in policing, Gender sensitive policing initiatives, BPWN Platform, UN Mission contribution, IAWP Networking, Victim support centers and service delivery by women Help desk'
              ],
              images: [
                '../../statics/bpwn/images/netwroking-programs-2-img-1.jpg',
                '../../statics/bpwn/images/netwroking-programs-2-img-2.jpg',
                '../../statics/bpwn/images/netwroking-programs-2-img-3.jpg',
                '../../statics/bpwn/images/netwroking-programs-2-img-4.jpg',
                '../../statics/bpwn/images/netwroking-programs-2-img-5.jpg'
              ]
            }
          ]
        },
        {
          name: 'Daniel K. Inouye Asia-Pacific Center for Security Studies (DKI APCSS)',
          ocations: [
            {
              place: 'Ulaanbaatar, Mongolia',
              date: 'August 23 2016 to August 25 2016',
              details: [
                'The Daniel K. Inouye Asia-Pacific Center for Security Studies (DKI APCSS), in partnership with the Mongolianinstitute for strategic studies (ISS) conducted a three-day workshop on August 23-25, 2016 in Ulaanbaatar, Mongolia.',
                'From Bangladesh Rebeka Sultana, Assistant Inspector General, Police Headquarter, Bangladesh Police & Ukhing May, ASP joined the program in Mongolia.',
                'It was focused on addressing institutional impediments to inclusion in the security sector. The workshop featured presentations from recognized Asia-Pacific practitioners and experts on inclusion in the security sector.',
                'In addition to the DKI APCSS team, 54 persons (32 women,22 men) participated in the workshop, including senior leaders capable of driving change in military, police, maritime, foreign affairs, public security and law enforcement agencies. fourteen countries and regions were represented: Bangladesh, Srilanka, Nepal, Burma, Indonesia, Philippines, Vietnam, Taiwan, Japan, Mongolia, the Federated states of Micronesia, Palau, Papua New Guinea, and United States (Guam). By professional, the attendees were 43% civilian, 31% military and 26% police.'
              ],
              images: [
                '../../statics/bpwn/images/netwroking-programs-3-img-1.jpg',
                '../../statics/bpwn/images/netwroking-programs-3-img-2.jpg',
                '../../statics/bpwn/images/netwroking-programs-3-img-3.jpg'
              ]
            }
          ]
        },
        {
          name: '2nd Asia Region Women Police Conference',
          ocations: [
            {
              place: 'Samarang, Indonesia',
              date: 'April 19 2014 to April 24 2014',
              details: [
                'Signing the declaration of 2nd Asia Region Women police conference held in Samarang Indonesia in 2014.'
              ],
              images: [
                '../../statics/bpwn/images/netwroking-programs-4-img-1.jpg',
                '../../statics/bpwn/images/netwroking-programs-4-img-2.jpg',
                '../../statics/bpwn/images/netwroking-programs-4-img-3.jpg'
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
