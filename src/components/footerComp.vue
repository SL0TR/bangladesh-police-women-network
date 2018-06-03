<template>
  <q-toolbar class="footer flex justify-between" color="primary">
    <div class="text-grey-1">
      All Rights Reserved &copy; BPWN 2018.
    </div>
      <div class="flex row items-center ">
        <div class="q-body-1 text-grey-1">Developed by &nbsp; </div>
        <a class="myprofile" href="https://sl0tr.github.io/" target="_blank" rel="noopener">
          <q-btn
          outline
          size="sm"
          rounded
          label="Mohaimin Islam"
          class="text-grey-1"
        />
        </a>
      </div>
  </q-toolbar>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>

  @media (max-width: 700px) {
    .footer {
      flex-direction: column;
      justify-content: space-around;
      padding: .5rem 0;
    }

    .footer div {
      margin: .1rem 0;
    }

  }

</style>
