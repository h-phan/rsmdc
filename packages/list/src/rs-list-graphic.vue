<template>
  <span class="rs-list-item__graphic" :class="{ '-rs-drawer': isDrawer }" ref="slotContainer">
    <slot></slot>
  </span>
</template>
<script>
export default {
  data() {
    return {
      el: '',
      host: '',
      drawerHost: '',
      isDrawer: false,
    }
  },
  watch: {
    el() {
      this.host = this.el.parentNode.host
      this.drawerHost = this.host.parentNode.parentNode.parentNode
    },
    drawerHost() {
      if(!this.drawerHost) { return }
      if(this.drawerHost.shadowRoot) {
        this.isDrawer = this.drawerHost.shadowRoot.querySelector('.rs-drawer__content') ? true : false
      }
    }
  },
  mounted() {
    this.el = this.$el
    this.$nextTick().then(this.fixSlot.bind(this))
  },
  methods: {
    fixSlot() {
      this.$refs.slotContainer.innerHTML = ''
      this.$refs.slotContainer.append(document.createElement('slot'))
    }
  }
}
</script>

<style lang="scss">
@import '@rsmdc/theme/functions';
@import '@rsmdc/theme/variables';

:host {
  position: var(--rs-menu-list-item-graphic--position);
  left: var(--rs-menu-list-item-graphic--left);
  right: var(--rs-menu-list-item-graphic--right);
}

.rs-list-item__graphic {
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  fill: currentColor;

  color: var(--rs-menu-list-item-graphic--color, var(--rs-list-item-graphic--color, rs-theme-ink-color-for-fill_(icon, $rs-theme-background)));
  background-color: var(--rs-list-item-graphic--background-color, transparent);
  margin-left: var(--rs-list-item-graphic--margin-left, 0);
  margin-right: var(--rs-list-item-graphic--margin-right, 32px);
  width: var(--rs-list-item-graphic--width);
  height: var(--rs-list-item-graphic--height);
  border-radius: var(--rs-list-item-graphic--border-radius);
  display: var(--rs-menu-list-item-graphic--display, inline-flex);

  background-image: var(--rs-list-item-graphic--background-image);
  background-size: var(--rs-list-item-graphic--background-size);
  background-repeat: no-repeat;
  background-position: center;
}

// .-rs-drawer {
//   pointer-events: none;
// }

</style>

