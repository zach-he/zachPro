<template>
  <div class="container">
    <nav-menu/>
    Admin
    <my-footer/>
  </div>
</template>
<script>
import MyFooter from '../../common-component/Footer'
import NavMenu from '../../common-component/NavMenu'
export default {
  name: 'Admin',
  components: {
    MyFooter,
    NavMenu
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variables.scss';
  .container{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $color-bg;
  }
</style>
