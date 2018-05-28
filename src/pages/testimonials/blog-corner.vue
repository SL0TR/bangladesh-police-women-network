<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-2 text-primary text-bold featured-header uppercase">Testimonials</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
      <hr>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xs">
      <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">Blog Corner</div>
    </div>
    <div class="col-lg-2 offset-lg-5 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
      <hr>
    </div>
    <div class="col-lg-10 offset-lg-1 q-mt-xl q-mb-md" v-for="(blog, id) in blogs" :key="id">
      <q-card class="full-width" >
        <q-card-title class="text-center">
          <span class="text-weight-bold">{{ blog.name }}</span>
        </q-card-title>
        <q-card-main class="text-center">
          <p v-for="(subT, id) in blog.subTitle" :key="id"><span class="text-weight-bold" >{{ subT }} </span> </p>
          <p class="text-tertiary q-subheading" >{{ blog.details }}</p>
        </q-card-main>
        <q-card-separator />
        <q-card-actions >
          <div class="col-12">
            <div class="row flex justify-center">
              <div class="col-lg-4 col-xs-12">
                <a :href="blog.link" rel="noopener" target="_blank"><q-btn class="full-width" label="Click to See the Video Speech" color="primary" flat/></a>
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
      blogs: [
        {
          name: 'International Women in Law Enforcement Conference',
          details: 'A delegation comprising of senior women officers from Bangladesh Police and the Police Reform Programme ....',
          link: 'http://www.bpwn.org.bd/write_up/Hydrabad_conference.pdf'
        },
        {
          name: 'Workshop on Annual Work Plan 2016 of BPWN',
          details: 'On 21st November, a Day long workshop on Annual Work plan 2016 of BPWN was held at Greentech, Gazipur presided by Ms. Mily Biswas PPM ....',
          link: 'http://www.bpwn.org.bd/write_up/annual_plan_16.pdf'
        },
        {
          name: 'BPWN Report',
          details: 'Several consultation, breifing sessions and Sharing activities hold for last few months .....',
          link: 'http://www.bpwn.org.bd/write_up/bpwn_report.pdf'
        },
        {
          name: 'বাংলাদেশ পুলিশ উইমেন্স নেটওয়ার্ক (বিপিডাব্লিউএন) এর রংপুর বিভাগীয় অঞ্চলের মতবিনিময় সভা',
          details: 'বাংলাদেশ পুলিশের সকল পর্যায়ের নারী সদস্যদের পেশাগত দক্ষতা বৃদ্ধি, পারস্পারিক যোগাযোগ, কর্মক্ষেত্রে নারী বান্ধব পরিবেশ গড়ে তোলার লক্ষ্য সমূহ বাস্তবায়নের লক্ষ্যে বাংলাদেশ পুলিশ উইমেন্স নেটওয়ার্ক এর উদ্যোগে গত ২৫/০৫/২০১৫ খ্রি. তারিখ রংপুর বিভাগীয় অঞ্চলের রংপুর পুলিশ ট্রেনিং সেন্টারে নব্য যোগদানকৃত নারী টিআরসিদের সাথে একটি মতবিনিময় সভা .....',
          link: 'http://www.bpwn.org.bd/write_up/report_rangpur.pdf'
        },
        {
          name: 'Awareness creation Programme in Narsingdi',
          details: 'An Awareness creation programme on Women in Policing was held on 10 May 2015 Narsingdi police line with the initiative of PRP.....',
          subTitle: [
            'Shamima Begum',
            'Victim Support Expert, PRP'
          ],
          link: 'http://www.bpwn.org.bd/write_up/report_narsingdi.pdf'
        },
        {
          name: 'বাংলাদেশ পুলিশ উইমেন্স নেটওয়ার্ক (বিপিডব্লিউএন) এর সিলেট বিভাগীয় অঞ্চলের মতবিনিময় সভা',
          details: '২০০৮ সালের ২১ নভেম্বর প্রতিষ্ঠিত বাংলাদেশ পুলিশ উইমেন্স নেটওয়ার্ক পুলিশের সকল পর্যায়ের নারী সদস্যদের পেশাগত দক্ষতা বৃদ্ধি, পারস্পারিক যোগাযোগ, কর্মক্ষেত্রে নারী বান্ধব পরিবেশ গড়ে তোলার লক্ষ্য সমূহ বাস্তবায়নের ধারবাহিক কার্যক্রমের অংশ হিসেবে গত ১৫ জুন ২০১৫ খ্রিঃ সিলেট রেঞ্জ ও সিলেট মেট্রোপলিটনের বিভিন্ন পদমর্যাদার নারী পুলিশ সদস্যদের .....',
          subTitle: [
            'মোছাঃ শেহেলা পারভীন',
            'অতিরিক্ত পুলিশ সুপার, টিডিএস'
          ],
          link: 'http://www.bpwn.org.bd/write_up/Report-Sylhet-2015.pdf'
        },
        {
          name: 'বাংলাদেশ পুলিশ উইমেন্স নেটওয়ার্ক (বিপিডাব্লিউএন) এর বরিশাল ও খুলনা বিভাগীয় অঞ্চলের মতবিনিময় সভা',
          details: '০০৮ সালের ১৭ নভেম্বর প্রতিষ্ঠিত বাংলাদেধাশ পুলিশ উইমেন্স নেটওয়ার্ক পুলিশের সকল পর্যায়ের নারী সদস্যদের পেশাগত দক্ষতা বৃদ্ধি, পারস্পারিক যোগাযোগ, কর্মক্ষেত্রে নারী বান্ধব পরিবেশ গড়ে তোলার লক্ষ্য সমূহ বাস্তবায়নের ধারবাহিক কার্যক্রমের অংশ হিসেবে .....',
          subTitle: [
            'মোছাঃ শেহেলা পারভীন',
            'অতিরিক্ত পুলিশ সুপার, টিডিএস'
          ],
          link: 'http://www.bpwn.org.bd/write_up/Report_barisal.pdf'
        },
        {
          name: 'বিগত এক বছরে বাংলাদেশ পুলিশ উইমেন্স নেটওয়ার্ক',
          details: 'বাংলাদেশ পুলিশের নারী সদস্যদের সামর্থ ও দক্ষতা বৃদ্ধির মাধ্যমে জাতীয় এবং আন্তর্জাতিকভাবে নারীর উন্নয়নের জন্য গৃহীত লক্ষ্য .....',
          subTitle: [
            'আবিদা সুলতানা'
          ],
          link: 'http://www.bpwn.org.bd/write_up/write_up.pdf'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
