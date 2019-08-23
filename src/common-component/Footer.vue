<template>
  <div class="footerbox">
    <div class="footer">
      CargoSmart ©{{currentYear}} Powered by zach.he
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  },
  methods: {},
  computed: {
    currentYear: {
      get: function () {
        let d = new Date()
        return d.getFullYear()
      }
    }
  }
}

</script>

<style>
  .footerbox {
    color: #fff;
    height: 30px;
    line-height: 20px !important;
    margin: 0;
    padding: 0;
    clear: both;
    position: fixed;
    bottom: 0px;
  }

  .footer {
    position: fixed;
    left: calc(50%);
    transform: translateX(-50%);
    color: #626569;
    height: 30px;
    line-height: 30px !important;
    margin: 0 auto;
    padding: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
  }
</style>
