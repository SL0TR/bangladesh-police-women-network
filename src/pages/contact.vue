<template>
  <q-page>
    <div class="row">
      <div class="col-12 address-panel">
        <div class="col-lg-4 q-pa-xl address q-card round-borders">
          <div class="q-display-1 text-primary text-weight-bold text-center">Address</div>
          <div class="q-subheading text-white text-center q-mt-md">Room # 303, Facilities Building (3rd floor),</div>
          <div class="q-subheading text-white text-center q-mt-md">Police Headquarters, Dhaka.</div>
          <div class="q-subheading text-white text-center q-mt-md">BPWN Helpline - 01786 000 313</div>
          <div class="q-subheading text-red text-weight-bold text-center q-mt-md">Hotline: 01786000313</div>
        </div>
      </div>
      <div class="col-xs-10 offset-xs-1  q-mt-xl">
      <div class="text-center q-display-1 text-secondary text-bold uppercase">Contact Us</div>
      </div>
      <div class="col-lg-2 offset-lg-5 col-xs-8 offset-xs-2 q-mt-sm q-mb-md">
        <hr>
      </div>
      <div class="col-12 q-mb-xl">
        <div class="row">
          <div class="col-lg-6 col-xs-12 border-right q-mt-xl">
            <div class="row">
              <div class="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 q-mt-xl">
                <form action="https://formspree.io/yomaimsj@gmial.com"
                method="POST" color="secondary">
                  <div class="col-lg-8  col-xs-10 offset-xs-1 q-mb-lg q-mt-xl">
                    <q-input class="full-width" float-label="Name" type="text" name="name" color="secondary"/>
                  </div>
                  <div class="col-lg-8  col-xs-10 offset-xs-1 q-mb-lg">
                    <q-input float-label="Email" suffix="@email.com" type="email" name="_replyto" color="secondary"/>
                  </div>
                  <div class="col-lg-8  col-xs-10 offset-xs-1 q-mb-lg">
                    <q-input float-label="Message" type="textarea" :max-height="500" name="message" color="secondary"/>
                  </div>
                  <div class="col-lg-8  flex items-center justify-center q-mb-xl">
                    <q-btn color="secondary" label="Send" icon="send" size="lg" type="submit" value="Send" outline/>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xs-12 q-mt-xl">
            <div class="row">
              <div class="col-lg-10 offset-lg-1 col-xs-10 offset-xs-1 q-mb-xl">
                <iframe class="full-width gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.526180902818!2d90.40481919498818!3d23.72309072478636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8fbcc7d8b0b%3A0xd38c69e99ca87f67!2sBangladesh+Police+Head+Quarters%2C+Dhaka!5e0!3m2!1sen!2sbd!4v1527531675651" width="800" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageContact'
}
</script>

<style scoped>
  .address-panel {
    background: linear-gradient(180deg, rgba(0,0,0, 0.4), rgba(0,0,0, 0.6)), url('../statics/images/office-image.jpg');
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
  }

  .address {
    width: 500px;
    background: rgba(48, 51, 107, 0.8);
    border-left: 5px solid var(--primary-color);
  }

  .gmap {
    border: 5px solid var(--secondary-color)!important;
    border-radius: .2rem;
  }
</style>
