<template>
  <div class="row">
    <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-2 text-primary text-bold featured-header uppercase">Association with IAWP</div>
    </div>
    <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
      <hr>
    </div>
    <div class="col-xs-10 offset-xs-1  q-mt-xs">
      <div class="text-center q-display-1 text-secondary text-bold featured-header uppercase">The International Association of Police (IAWP)</div>
    </div>
    <div class="col-lg-6 offset-lg-3 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
      <hr>
    </div>
    <div class="col-lg-10 offset-lg-1">
      <q-tabs color="secondary">
        <q-tab default slot="title" name="tab-1" label="History" />
        <q-tab slot="title" name="tab-2" label="Conference"/>
        <q-tab slot="title" name="tab-3" label="Award"/>
        <q-tab slot="title" name="tab-4" label="Blog"/>
        <q-tab slot="title" name="tab-5" label="Board Meeting"/>
        <q-tab slot="title" name="tab-6" label="2018 Award Program"/>
        <q-tab-pane name="tab-1">
          <div class="row">
            <div class="col-10 offset-1 q-mt-md">
              <div class="text-center text-tertiary q-title q-mt-xl q-mb-lg">
                Being a member of IAWP, Bangladesh Police Women Network is playing a leading role for betterment of women in policing. BPWN is a proud affiliated member of IAWP.
              </div>
              <div class="text-center text-tertiary q-title q-mt-xl q-mb-lg">
                <span class="text-weight-bolder">Mily Biswas,</span> Deputy Inspector General, Police Headquarters and President BPWN is now acting as regional coordinator of region 22 for the period 2015-2017. Previously Superintendent of Police <span class="text-weight-bolder">Amena Begum</span> has acted as regional coordinator in 2012-2014 for region 15 of IAWP.
              </div>
            </div>
          </div>
        </q-tab-pane>
        <q-tab-pane name="tab-2">
          <div class="row">
            <div class="col-xs-12 q-mt-xs">
              <div class="text-center q-headline text-secondary text-bold featured-header uppercase">54th IAWP Barcelona Training Conference, 9th-13th October, 2016</div>
            </div>
            <div class="col-10 offset-1 q-mt-lg">
              <div class="text-center text-tertiary q-title q-mt-xl q-mb-lg">
                As a continuation of proud saying of Sheikh Hasina,Honorable Prime Minister of Bangladesh, to heads of states and governments at the #UNGA that her country is leading by example on women's political leadership, 54th IAWP Barcelona Training Conference EQUALITY & SECURITY from 9th-13th October 2016 was participated under the prudent leadership of Mily Biswas ppm ,DIG, PHQ, Bangladesh Police in Barcelona, Spain this year.
              </div>
              <div class="text-center text-tertiary q-title q-mt-xl q-mb-lg">
                She along with other 7 female Police officers joined the program this year. BPWN is grateful to Honorable IGP of Bangladesh Police, US department of justice /ICITAP to support financially to attend the Conference. Since 1915, IAWP has continuously organized an annual training conference to provide professional development, mentoring, training, networking and recognition for women law enforcement officers and civilian support staff, as well as increase the numbers of women in policing. The Training conference theme for this year was Equality and Security. Events participated by Bangladeshi Women police includes the following segments.
              </div>
              <div class="col-lg-12 q-mb-xl" >
                <div class="q-subheading text-center text-tertiary q-mt-xl " v-for="(segment, id) in segments" :key="id"> <span class="text-secondary text-weight-bolder"> {{ id + 1 }}.</span> {{ segment }}</div>
              </div>
            </div>
          </div>
        </q-tab-pane>
        <q-tab-pane name="tab-3">
          <div class="row">
            <div class="col-xs-12 q-mt-xl">
              <div class="text-center q-headline text-secondary text-bold uppercase">International Recognition & Scholarship Award-2012 received by SP Abida Sultana, Bangladesh Police</div>
            </div>
            <div class="col-10 offset-1 q-mt-xl">
              <img class="q-card full-width" src="../../statics/images/int-aff-award-1.png" alt="int-aff-award-1">
            </div>
            <div class="col-xs-12 q-mt-xl">
              <div class="text-center q-headline text-secondary text-bold uppercase">International Recognition & Scholarship Award-2012 received by SP Abida Sultana, Bangladesh Police</div>
            </div>
            <div class="col-lg-8 offset-lg-2 q-mt-xl">
              <img class="q-card full-width" src="../../statics/images/int-aff-award-2.png" alt="int-aff-award" style="height: 450px">
            </div>
            <div class="col-xs-12 q-mt-xl">
              <div class="text-center q-headline text-secondary text-bold uppercase">International Recognition & Scholarship Award-2012 received by SP Abida Sultana, Bangladesh Police</div>
            </div>
            <div class="col-lg-8 offset-lg-2 q-mt-xl">
              <img class="q-card full-width" src="../../statics/images/int-aff-award-3.png" alt="int-aff-award" style="height: 450px">
            </div>
          </div>
        </q-tab-pane>
        <q-tab-pane name="tab-4">
          <div class="row items-center justify-center">
            <div class="col-12 q-mt-lg">
              <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
                There are a total of 9847 female police officers in the country. The recruitment of female officers in the police department began in 1974.At present, female officers hold various positions in the force, from additional inspector general to constable. Female officers now play a key role in the force.
              </div>
            </div>
            <div class="col-lg-4 col-xs-12">
              <a href="http://iawpregion22.blogspot.com/" rel="noopener" target="_blank"><q-btn class="full-width" label="IAWP Region 22: Bangladesh Chapter" color="primary" flat/></a>
            </div>
            <div class="col-lg-10 q-mt-xl">
              <img class="q-card full-width" src="../../statics/images/iawp_blog.png" alt="iawp_blog">
            </div>
            <div class="col-lg-10 q-mt-xl">
              <img class="q-card full-width" src="../../statics/images/iawp_blog-2-v2.png" alt="iawp_blog">
            </div>
          </div>
        </q-tab-pane>
        <q-tab-pane name="tab-5">
          <div class="row">
            <div class="col-12 q-mt-lg">
              <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
                The early board meeting this year was hosted by Region 16 and took place in the city of Abu Dhabi in the United Arab Emirates at the Grand Millennium Hotel. officers now play a key role in the force.
              </div>
              <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
                At the early board meeting, the Regional Coordinator, Mily Biswas ppm, DIG, PHQ, Bangladesh Police took on the challenge of writing an article about experience at the early board meeting.
              </div>
              <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
                Regional Coordinator, Mily Biswas ppm, DIG, PHQ, Bangladesh Police also reflected on the experience:
              </div>
            </div>
              <div class="col-8 offset-2">
                <div class="text-tertiary q-mt-md text-center q-mt-md">
                  "Since 1996 Bangladesh women Police have been engaged with the International Women Police Network (IAWP) as a representative of Bangladesh Police. Having the opportunity to be affiliated as a member of IAWP, Bangladesh Police Women Network feels greatly proud. As the coordinator of region 22 of IAWP, I always eagerly cherish the desire for my contributive participation in EBM as well as in Annual conferences.
                </div>
                <div class="text-tertiary q-mt-md text-center">
                  I inspire and persuade the junior women police officers of Bangladesh to take part in such type of International conferences every year. Because I believe that in this era of globalization women police throughout the world should all time keep direct attachment with the IAWP. We should be pledge-bound to encourage women empowerment, development, and partnership policing and best practices through the global correspondences.
                </div>
                <div class="text-tertiary q-mt-md text-center">
                  I along with the co-chairperson of BPWN Shamima Begum have come to this EBM for achieving experiences about IAWP next conference functions and work procedures. I express gratitude and thanks from my core heart for nominating Ms Shamima Begum as the Co-coordinator of region 22 according to my proposal.
                </div>
                <div class="text-tertiary q-mt-md text-center">
                  Experiences of the two-day-long Early Board Meeting, the acquired knowledge and best practices have incited us a lot and we would apply these apprehensions for the development, empowerment and in the ongoing leadership building practice of our women police in Bangladesh.
                </div>
                <div class="text-tertiary q-mt-md text-center">
                  During these EBM Four young women police officers of Bangladesh have been enrolled as the new members of IAWP and also the process of increasing the membership would be a continued approach.
                </div>
                <div class="text-tertiary q-mt-md text-center">
                  The discourse regarding SWOT analysis and strategic plan of EBM would be strongly supportive for the capacity building activities of BPWN. Bangladesh women police is more committed to attend and contribute in a group in the next conference and to enrich their perception and realization for its further implementation in their practical field."
                </div>
              </div>
              <div class="col-lg-10 offset-lg-1 q-mt-xl">
                <img class="q-card full-width" src="../../statics/images/iawp_board.png" alt="iawp_board">
              </div>
          </div>
        </q-tab-pane>
        <q-tab-pane name="tab-6">
          <div class="row">
            <div class="col-lg-12 q-mt-md">
              <div class="text-center q-headline text-secondary text-bold uppercase">2018 Annual Recognition and Award Program</div>
              <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
              The NEW IAWP Annual Award Program is open for nominations. Entries will be accepted from the candidate's supervisor, employer or an IAWP Board member, but not by the candidate themselves. If some one apply she needs the official approval from BPWN President.Candidates can only be entered for one category.
            </div>
            <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
              <span class="text-weight-bold">Categories:</span> Officer of the Year, Civilian of the Year, Bravery, Leadership, Community Service, Excellence in Performance, Mentoring and Coaching, Male Award in Support of the UN “HEforSHE” Campaign, and, Prevention and Detection of Violence Against Women.
            </div>
            <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
              Deadline for nominations: <span class="text-weight-bold text-red">March 31, 2018</span>
            </div>
            <div class="row">
              <div class="col-lg-3 col-xs-12">
                <div class="text-center text-tertiary q-title q-mt-md q-mb-xl">
                  Important Links:
                </div>
              </div>
              <div class="col-lg-3 col-xs-12">
                <a href="https://www.iawp.org/awards/annualawards.htm" rel="noopener" target="_blank"><q-btn class="full-width" label="Application Criteria" color="primary" flat/></a>
              </div>
              <div class="col-lg-3 col-xs-12">
                <a href="https://www.iawp.org/awardform.htm" rel="noopener" target="_blank"><q-btn class="full-width" label="Program Details" color="primary" flat/></a>
              </div>
              <div class="col-lg-3 col-xs-12">
                <a href="https://www.iawp.org/awardform2.htm" rel="noopener" target="_blank"><q-btn class="full-width" label="Nomination form" color="primary" flat/></a>
              </div>
            </div>
            </div>
          </div>
        </q-tab-pane>
      </q-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      segments: [
        'Participation in board meeting, Annual general meeting, Region coordination meeting by Region 22 coordinator Mily Biswas ppm ,DIG, PHQ, Bangladesh Police and co-coordinator Shamima Begum ppm, AIG, PHQ, Bangladesh Police',
        'All participants attended in opening ceremony and nation parade. 70 country participated in the parade. Bangladesh police is proud to attend the parade under Country flag and 2 participants under UN flag',
        'Attended 5 days conference with these topics: Restorative responses to sexual violence: CHALLENGING PERCEPTIONS, Role of women police in combating violence against women, Violence against women and new technologies, Human smuggling, radicalization: women in the caliphate of ISIS. UN Panel: Sexual Gender based violence, Human trafficking: The global monster, UNMISS- training local police in a hostile environment US Department of justice / ICITAP, European human trafficking panel, Incorporation of a gender perspective into police force. Interpol ,Police diversity for a safer world UN Panel : Police women and leadership in a multicultural and challenging environment.',
        'SP Taslima participated in 3 days UN workshop based on Gender tools',
        'Movie show: A journey of thousand miles: peacekeepers. Focused on women police FPU in Haiti, commitment, sacrifice and dedication as female peacekeepers. One main character SI Mousumi Sultana invited by UN HQ and was highly honored with the UN Delegate and IAWP. Her interview was also appreciated by audience.',
        'During the conference women police of Bangladesh shared views and experience of UN Mission, Participation of IAWP and future plan of BPWN. They distributed the brochure of Network and souvenir to the delegates of IAWP and other participants.'
      ]
    }
  }
}
</script>

<style scoped>

</style>
