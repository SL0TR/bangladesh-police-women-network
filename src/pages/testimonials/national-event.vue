<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-2 text-primary text-bold featured-header uppercase">Testimonials</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
      <hr>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xs">
      <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">National Event</div>
    </div>
    <div class="col-lg-2 offset-lg-5 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
      <hr>
    </div>
    <div class="col-lg-10 offset-lg-1 q-mt-xl q-mb-md" v-for="(event, id) in events" :key="id">
      <q-card class="full-width" >
        <q-card-title class="text-center">
          <span class="text-weight-bold">{{ event.title }}</span>
        </q-card-title>
        <q-card-main class="text-center">
          <p><span class="text-weight-bold" >Place: &nbsp; </span> {{ event.place }} </p>
          <p><span class="text-weight-bold" >Date: &nbsp; </span> {{ event.date }} </p>
          <p class="text-tertiary q-subheading" >{{ event.details }}</p>
        </q-card-main>
        <q-card-separator />
        <q-card-actions >
          <div class="col-12" v-if="id <=3">
            <div class="row flex justify-center">
              <div class="col-lg-4 col-xs-12 q-ma-md">
                <a :href="event.link" rel="noopener" target="_blank"><q-btn class="full-width" :label="event.label" color="primary" flat/></a>
              </div>
            </div>
          </div>
          <div class="col-12" v-else>
            <div class="row flex justify-around wrap">
              <div class="col-lg-5" v-for="(img, id) in event.images" :key="id" >
                <img class="q-card q-ma-md full-width" :src="img" alt="One Stop crisis"  style="height: 500px">
              </div>
            </div>
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      events: [
        {
          title: 'আন্তর্জাতিক নারী দিবস ২০১৮| সাহসিকতা সম্মাননা',
          place: 'ভি আই পি লাউঞ্জ, ভোরের কাগজ',
          date: 'March 10 2018',
          details: 'আন্তর্জাতিক নারী দিবস ২০১৮ ভোরের কাগজ কতৃক আয়োজিত সাহসিকতা সম্মাননা',
          subtitle: '০৮ মার্চ ২০১৮, চ্যানেল আই',
          label: 'Click to see details from Facebook Page',
          link: 'https://www.facebook.com/permalink.php?story_fbid=1637773179647331&id=629471567144169'
        },
        {
          title: 'আন্তর্জাতিক নারী দিবস/১৮ উপলক্ষে বরিশাল ভিকটিম সাপোর্ট সেন্টার এক বর্নাঢ্য অনুষ্ঠানের আয়োজন',
          place: 'বরিশাল',
          date: 'March 09 2018',
          details: 'উক্ত অনুষ্ঠানে উপস্থিত ছিলেন বরিশাল মেট্রোপলিটন পুলিশের পুলিশ কমিশনার জনাব এসএম রুহুল আমিন সহ অন্যান্য উর্ধ্বতন কর্মকর্তাবৃন্দ । এছাড়াও সহযোগী এনজিও, স্কুল কলেজের ছাত্রী ও বিভিন্ন শ্রেনী পেশার মানুষ। শতশত মানুষের উপস্থিতি র‌্যালিকে সাফল্যমন্ডিত করে।...',
          label: 'Click to see details from Facebook Page',
          link: 'https://www.facebook.com/permalink.php?story_fbid=1636687319755917&id=629471567144169'
        },
        {
          title: 'নারী দিবসে পুলিশ উইমেন নেটওয়ার্কের বর্ণাঢ্য র‌্যালি',
          place: 'পুলিশ হেডকোয়ার্টার্স->কার্জন হল-> দোয়েল চত্বর',
          date: 'March 08 2018',
          details: 'আজ ৮ মার্চ, আন্তর্জাতিক নারী দিবস। বিশ্বের বিভিন্ন দেশের ন্যায় বাংলাদেশেও বর্ণাঢ্য আয়োজন ও নানা অনুষ্ঠানের মধ্য দিয়ে পালিত হচ্ছে দিবসটি। জাতিসংঘ এ বছর দিবসটির প্রতিপাদ্য নির্ধারণ করেছে- ‘সময় এখন নারীর: উন্নয়নে তারা বদলে যাচ্ছে গ্রাম-শহরের কর্ম-জীবনধার’ ...',
          label: 'Click to see details from Facebook Page',
          link: 'https://www.facebook.com/permalink.php?story_fbid=1635693903188592&id=629471567144169'
        },
        {
          title: 'Winter Blanket Distribution',
          place: 'Rangpur Tista chor areas',
          date: 'January 28 2018',
          details: 'Head of BPWN Regional Committee Addl SP Shamima Parvin along with other women police of Police Training Centre, Rangpur range distributed winter blanket and other winter cloths sent from Dhaka among poor people in Rangpur Tista chor areas...',
          label: 'Click to see details from Facebook Page',
          link: 'https://www.facebook.com/permalink.php?story_fbid=1595736330517683&id=629471567144169'
        },
        {
          title: 'Women and Child Repression Cell visited One Stop Crisis Center (OCC)',
          place: 'One Stop Crisis Center',
          date: 'November 07 2016',
          details: 'BPWN members & representative of Women and Child Repression Cell, Police headquarters visited One Stop Crisis Center (OCC) on 7th November,2016 to extend the their empathy & legal support for Women and Children victims of violence. BPWN members coordinated with OCC doctors, cordially attended the five-year-old rape victim from Dinajpur, listened their problems and took necessary steps to provide services regarding proper case investigation and judgments to the victim without delay. They also followed up the cases of the victims and ensured the medical services of the victims as well as the psychological counseling of the victims. The five-year-old rape Victim?s family from Dinajpur and another victim of domestic violence received some financial support from BPWN representatives.',
          label: 'Click here to know details about this Event',
          link: 'http://www.bpwn.org.bd/eventDetails.php?t=n&page=5',
          images: [
            '../../statics/bpwn/images/national-event-one-stop-1.jpg',
            '../../statics/bpwn/images/national-event-one-stop-2.jpg'
          ]
        },
        {
          title: 'The National Mourning Day',
          place: 'Dhanmondi, Dhaka',
          date: 'August 15 2016',
          details: 'The National Mourning Day was observed with due reverence and solemnity, marking the 41st anniversary of assassination of Father of the Nation Bangabandhu Sheikh Mujibur Rahman by Bangladesh Police Women Network(BPWN). Mili Biswas, ppm, Deputy Inspector General of Police, Police Headquarters and President of Bangladesh Police Women Network along with other members of BPWN paid homage to Bangabandhu.',
          images: [
            '../../statics/bpwn/images/national-event-dhanmondi-1.jpg'
          ]
        },
        {
          title: 'Bangladesh Women Police Award 2016',
          place: 'Bashundhara Convention Centre',
          date: 'March 31 2016',
          details: 'The police department has launched the Women Police Award for the first time in the country to recognise exemplary achievement of female police officers. Mr. A K M Shahidul Haque, BPM, PPM, Inspector General of Police, introduced the award, and this year the accolade has been given to 33 policewomen in six categories. The prize includes a crest, a certificate and a cash reward of Tk 10,000. The six categories are Bangladesh Police Women Leadership Award, Excellence in Action, Medal of Courage, Community Service, Peace-keeping Mission Special Honour Award and Entrepreneur Women Organiser of the Year Award. Mili Biswas, Deputy Inspector General of Police, Police Headquarters and President of Bangladesh Police Women Network, made the announcement of the award at a press conference before this award. The awards presented at a programme at Bashundhara Convention Centre on March 31. House Speaker Shirin Sharmin Chaudhury attended the event as the chief guest, while the home minister and the state minister for women and children affairs were the special guests. There are a total of 8,824 female police officers in the country.The recruitment of female officers in the police department began in 1974. At present, female officers hold various positions in the force, from additional inspector general to constable. Female officers now play a key role in the force. Elija Sarmin, Additional Superintendent of Police led a parade of officers at Sardah Police Academy while Shamsunnahar, superintendent of police of Chandpur, led the guard of honour parade during this year?s Police Week. Female police officers from the country also join United Nations missions. The first group of female officers were sent to East Timor in 2000, while a full contingent was sent in 2010.',
          images: [
            '../../statics/bpwn/images/national-event-bashundhara-1.jpg',
            '../../statics/bpwn/images/national-event-bashundhara-2.jpg',
            '../../statics/bpwn/images/national-event-bashundhara-3.jpg'
          ]
        },
        {
          title: 'Receiving award from Inner Wheel club',
          place: 'Rangamati & Narsingdi',
          date: 'September 04 2013',
          details: 'With Architect Iqbal Habib on HPM VISIT in Rangamati, different activities in Rangamati, Narsingdi. Receiving award from Inner Wheel club.',
          images: [
            '../../statics/bpwn/images/national-event-R-and-N-1.jpg',
            '../../statics/bpwn/images/national-event-R-and-N-2.jpg',
            '../../statics/bpwn/images/national-event-R-and-N-3.jpg',
            '../../statics/bpwn/images/national-event-R-and-N-4.jpg',
            '../../statics/bpwn/images/national-event-R-and-N-5.jpg'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
