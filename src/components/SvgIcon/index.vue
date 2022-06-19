<template>
  <svg
    :class="computedClass"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use
      :xlink:href="iconPath"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    }
  },

  computed: {
    iconPath () {
      let icon = require(`@/assets/icons/${this.name}.svg`)

      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default
      }
      return icon
    },
    computedClass () {
      return this.className ? this.className : 'icon-cards'
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-cards {
    width: 24px;
    height: 16px;
  }
  .icon-back {
    width: 48px;
    height: 48px;
  }
</style>
