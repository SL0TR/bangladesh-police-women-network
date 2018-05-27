<template>
  <q-page class="home-page">
    <div class="row">
      <div class="col-lg-12">
        <q-carousel
          arrows
          height="calc(100vh - 61px)"
          infinite
          autoplay
          quick-nav
          handle-arrow-keys
          :easing="overshoot"
          class="slider round-borders shadow-1"
          color="secondary"
        >
          <q-carousel-slide img-src="../statics/images/home-page-slider-1.jpg"></q-carousel-slide>
          <q-carousel-slide img-src="../statics/images/home-page-slider-2.jpg"></q-carousel-slide>
          <q-carousel-slide img-src="../statics/images/home-page-slider-3.jpg"></q-carousel-slide>
          <q-carousel-slide img-src="../statics/images/home-page-slider-4.png"></q-carousel-slide>
          <q-carousel-slide img-src="../statics/images/home-page-slider-5.jpg"></q-carousel-slide>
          <q-carousel-slide img-src="../statics/images/home-page-slider-6.jpg"></q-carousel-slide>
          <q-carousel-slide img-src="../statics/images/home-page-slider-7.jpg"></q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-xs-10 offset-xs-1 q-mt-xl">
        <div class="text-center q-display-4 text-secondary text-bold featured-header uppercase">BPWN</div>
      </div>
      <badge-hr/>
      <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 q-mt-lg">
        <div class="text-center text-tertiary q-headline q-mt-lg text-weight-regular q-mb-xl">Bangladesh Police Women Network an organization dedicated to expanding the prospect for women police in profession through networking and leadership. With the employment of 14 women in Bangladesh Police, women police commenced its activities in 1974. At present they are working with enthusiasm in all police units in different capacities including operational and administrative role.</div>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-xl">
        <div class="text-center q-display-2 text-secondary text-bold featured-header uppercase">Journey of BPWN</div>
      </div>
      <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm q-mb-xl">
        <hr>
      </div>
      <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 text-tertiary">
        <div class="text-center q-title q-mt-lg text-weight-light">Honorable Prime Minister Sheikh Hasina is the glaring symbol of women empowerment in Bangladesh and the leading light for women police to overcome challenges with commitment and dedication both nationally and internationally.</div>
        <div class="text-center q-title q-mt-lg text-weight-light">Endeavour of Bangladesh Police paved the way of BPWN to start it's journey back in 2008 in assistance with Police Reform Program. BPWN aims to provide leadership for achieving national and global objective for women’s development through capacity building and professional skill development of women police.</div>
        <div class="text-center q-title q-mt-lg text-weight-light">An executive committee consisting of 33 members of different ranks of Bangladesh is working to execute the activities of BPWN. Inspector General of Bangladesh Police is the chief patron of BPWN</div>
        <div class="text-center q-title q-mt-lg text-weight-light q-mb-xl">Since BPWN believes that every voice counts, all women police working in Bangladesh police at present as well as the retired women officers are considered as member of BWPN.</div>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-xl">
        <div class="text-center q-display-2 text-secondary text-bold featured-header uppercase">Speech from Mily Biswas</div>
      </div>
      <div class="col-lg-4 offset-lg-4 col-xs-8 offset-xs-2 q-mt-sm">
        <hr>
      </div>
      <div class="col-lg-8 offset-lg-2 q-mt-xl q-mb-xl">
        <iframe class="border round-borders" width="100%" height="700" src="https://www.youtube.com/embed/R9slb_yo1jE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <badge-hr/>
      <div class="col-lg-10 offset-lg-1 flex wrap items-center justify-around q-mb-xl">
        <q-card class="q-ma-lg" v-for="(card, id) in cards" inline :key="id">
          <q-card-media>
            <img :src="card.img">
          </q-card-media>
          <q-card-title>
            <div class="text-secondary text-weight-bold"> {{ card.title }} </div>
          </q-card-title>
          <q-card-main>
            <p class="text-tertiary text-weight-light">{{ card.details }}</p>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-lg-12 q-mt-xl text-slider q-mb-xl">
        <p class="item-1 text-tertiary text-center text-bold q-headline">International Women in Law Enforcement Conference</p>
        <p class="item-2 text-tertiary text-center text-bold q-headline">Sensitization Workshop with Women Law Enforcers on HIV/AIDS</p>
        <p class="item-3 text-tertiary text-center text-bold q-headline">Successful participation in CIVPOL/UNPOL mission of UN peacekeeping mission</p>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  .q-carousel-slide {
    background-size: 100% 100% !important;
  }

  .text-slider {
    position: relative;
    margin: 3rem 0;
  }

  .q-card {
    width: 510px;
    height: 480px;
  }

  .item-1,
  .item-2,
  .item-3 {
    position: absolute;
    display: block;
    top: -1em;
    width: 50%;
    font-size: 2em;
    animation-duration: 20s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .item-1{
    animation-name: anim-1;
  }

  .item-2{
    animation-name: anim-2;
  }

  .item-3{
    animation-name: anim-3;
  }

  @keyframes anim-1 {
    0%, 8.3% { left: -100%; opacity: 0; }
    8.3%,25% { left: 25%; opacity: 1; }
    33.33%, 100% { left: 110%; opacity: 0; }
  }

  @keyframes anim-2 {
    0%, 33.33% { left: -100%; opacity: 0; }
    41.63%, 58.29% { left: 25%; opacity: 1; }
    66.66%, 100% { left: 110%; opacity: 0; }
  }

  @keyframes anim-3 {
    0%, 66.66% { left: -100%; opacity: 0; }
    74.96%, 91.62% { left: 25%; opacity: 1; }
    100% { left: 110%; opacity: 0; }
  }

  @media (max-width: 700px) {
    .q-card {
      height: auto;
    }
  }

</style>

<script>
import badgeHr from '../components/badge-hr'

export default {
  name: 'PageHome',
  data () {
    return {
      cards: [
        {
          img: '../statics/images/home-card-img-1.jpg',
          title: 'IAWP Conference',
          details: 'Leadership For Police Women Asia - 1st Asia Region Women Police Conference on Women in Law Enforcement on 2012 organized by BPWN'
        },
        {
          img: '../statics/images/home-card-img-2.jpg',
          title: 'Sensitization Workshop',
          details: 'Bangladesh Law Enforcement and HIV Network (LEAHN) and UNAIDS Bangladesh organized Sensitization Workshop with Women Law Enforcers on HIV/AIDS at Telecom Auditorium Rajarbagh, Dhaka'
        },
        {
          img: '../statics/images/home-card-img-3.jpg',
          title: 'UN Peacekeeping Mission',
          details: 'Bangladesh Women Police began its participation in CIVPOL/UNPOL mission of UN peacekeeping mission for the first time in 2002. Already Un mission completed by 1109 women police from Bangladesh.'
        },
        {
          img: '../statics/images/home-card-img-4.jpg',
          title: 'View Exchange Program',
          details: '105 Girl students from different colleges of Narsingdi and Teachers, Officer in Charges of police stations, female members of Narsingdi district police, media partners along with civil society 45 members also joined in the programmes.'
        }
      ]
    }
  },
  components: {
    badgeHr
  }
}
</script>
