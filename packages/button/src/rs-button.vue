<template>
  <button
    class="rs-button"
    :class="{ '-rs-icon': hasIcon, '-rs-fab': isFab, '-rs-no-text': !hasText }"
    :disabled="disabled" :exited="isExited">
    <span class="rs-button__label" ref="slotContainer">
      <slot></slot>
    </span>
    <span class="rs-button__ripple" />
  </button>
</template>
<script>
import { RSRipple } from '@rsmdc/ripple'

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    exited: {
      type: String,
      default: 'initial'
    }
  },
  data() {
    return {
      el: '',
      host: '',
      ripple: '',
      hasText: true,
      hasIcon: false,
      isFab: false,
      isExited: false,
    }
  },
  watch: {
    el() {
      this.host = this.el.parentNode.host
    },
    host() {
      this.isFab = this.getElementProperty(this.host, '--rs-button__fab') ? true : false
      this.hasIcon = this.getElementProperty(this.host, '--rs-button__icon') ? true : false
      this.isExited = this.exited === 'initial' ? false : true
    },
    exited() {
      this.isExited = this.exited === 'initial' ? false : true
    },
    hasText() {
      if(!this.hasText && !this.isFab) {
        this.ripple.unbounded = true
      }
    }
  },
  mounted() {
    this.$nextTick()
      .then(this.fixSlot.bind(this))
      .then(() => {
        const texts = Array.from(this.$el.querySelector('slot').assignedNodes())
        this.hasText = texts.length > 0 ? true : false
      })
    this.ripple = new RSRipple(this.$el.querySelector('.rs-button__ripple'))
    this.el = this.$el
  },
  methods: {
    fixSlot() {
      this.$refs.slotContainer.innerHTML = ''
      this.$refs.slotContainer.append(document.createElement('slot'))
    },
    getElementProperty(el, prop) {
      const style = window.getComputedStyle(el)
      const value = String(style.getPropertyValue(prop)).trim()
      return value
    }
  }
}
</script>
<style lang="scss">
@import '@rsmdc/ripple/mixins';
@import '@rsmdc/typography/mixins';
@import '@rsmdc/theme/mixins';
@import '@rsmdc/shape/functions';
@import '../variables';
@import '../icon-button/rs-icon-button';

@include rs-ripple-common;

.rs-button {
  @include rs-typography(button);

// base
  position: relative;
  align-items: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  /* @alternate */
  line-height: inherit;
  user-select: none;
  -webkit-appearance: none;
  overflow: hidden;
  vertical-align: middle;
  border-radius: var(--rs-button--border-radius, 4px);
  font-size: var(--rs-button--font-size, 0.875rem);
  box-shadow: var(--rs-button--box-shadow, none);
  height: var(--rs-button--height, $rs-button-height);
  padding: var(--rs-button--padding);
  padding-right: var(--rs-button--padding-right, $rs-button-horizontal-padding);
  padding-left: var(--rs-button--padding-left, $rs-button-horizontal-padding);
  padding-top: var(--rs-button--padding-top, 0);
  padding-bottom: var(--rs-button--padding-bottom, 0);

  // button type
  justify-content: var(--rs-button--justify-content, center);
  display: var(--rs-button--display, inline-flex);
  border-width: var(--rs-button--border-width);
  border-style: var(--rs-button--border-style);
  transition: var(--rs-button--transition);
  opacity: var(--rs-button--opacity);
  fill: var(--rs-button--fill);
  cursor: var(--rs-button--cursor);
  -moz-appearance: var(--rs-button--moz-appearance);
  color: var(--rs-button--color);
  background-color: var(--rs-button--background-color);
  width: var(--rs-button--width);
  min-width: var(--rs-button--min-width, 64px);
  max-width: var(--rs-button--max-width);
  text-decoration: var(--rs-button--text-decoration);
  text-overflow: var(--rs-button--text-overflow);
  white-space: var(--rs-button--white-space);

  &[exited] {
    transform: scale(0);
    transition:
      opacity 15ms linear 150ms,
      rs-animation-exit-permanent(transform, 180ms);
    opacity: 0;
  }

  &.-rs-icon.-rs-no-text:not(.-rs-fab) {
    @include rs-ripple-radius-unbounded;
    @include rs-button-icon_;

    &::before {
      width: 24px;
      height: 24px;
    }
  }

  [dir="rtl"] &,
  &[dir="rtl"] {
    border-radius: var(--rs-button_rtl--border-radius, rs-shape-rtl-radius(medium, false));
  }

  &::-moz-focus-inner {
    padding: var(--rs-button_moz-focus-inner--padding, 0);
    border: var(-rs-button_moz-focus-inner--border, 0);
  }

  &:hover {
    box-shadow: var(--rs-button_hover--box-shadow, none);
    cursor: pointer;
  }

  &:focus {
    box-shadow: var(--rs-button_focus--box-shadow);
    outline: var(--rs-button_focus--outline);
  }

  &:active {
    box-shadow: var(--rs-button_active--box-shadow);
    outline: none;
  }

  &:not(:disabled) {
    background-color: var(--rs-button_not_disabled--background-color, transparent);
    color: var(--rs-button_not_disabled--color, $rs-theme-primary);
    border-color: var(--rs-button_not_disabled--border-color, none);
  }

  &:disabled {
    cursor: default;
    pointer-events: none;    
    box-shadow: var(--rs-button_disabled--box-shadow);
    background-color: var(--rs-button_disabled--background-color, transparent);
    color: var(--rs-button_disabled--color, $rs-button-disabled-ink-color);
    border-color: var(--rs-button_disabled--border-color);
    opacity: var(--rs-button_disabled--opacity);
  }

  &::before {
    background-repeat: no-repeat;
    background-position: center;

    background-image: var(--rs-button_before--background-image);
    content: var(--rs-button_before--content);
  }

  &.-rs-no-text::before,
  &:not(.-rs-no-text).-rs-fab::before {
    width: 24px;
    height: 24px;
    background-size: 24px;
  }

  &:not(.-rs-no-text)::before {
    width: 18px;
    height: 18px;
    background-size: 18px;
  }

  &::after {
    background-repeat: no-repeat;
    background-position: center;

    background-image: var(--rs-button_after--background-image);
    content: var(--rs-button_after--content);
  }

  &.-rs-no-text::after,
  &:not(.-rs-no-text).-rs-fab::after {
    width: 24px;
    height: 24px;
    background-size: 24px;
  }

  &:not(.-rs-no-text)::after {
    width: 18px;
    height: 18px;
    background-size: 18px;
  }
}

.rs-button__label {
  padding-right: var(--rs-button-label--padding-right);
  padding-left: var(--rs-button-label--padding-left);

  .-rs-no-text & {
    padding-right: 0;
    padding-left: 0;
  }
}

.rs-button__ripple {
  @include rs-ripple-surface;
  @include rs-ripple-radius-bounded;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .-rs-icon.-rs-no-text:not(.-rs-fab) & {
    border-radius: 50%;
  }

  &::before{
    background-color: var(--rs-ripple_before--background-color, $rs-theme-primary);
    content: var(--rs-ripple_before--content, '');
  }

  &::after {
    background-color: var(--rs-ripple_after--background-color, $rs-theme-primary);
    content: var(--rs-ripple_after--content, '');
  }

  &:hover::before {
    opacity: var(--rs-ripple_hover_before--opacity, rs-states-opacity(primary, hover));
  }

  &:not(.rs-ripple-upgraded):focus::before { // @mixin rs-states-focus-opacityのfalse
    transition-duration: var(--rs-ripple_not-upgraded_focus_before--transition-duration, 75ms);
    opacity: var(--rs-ripple_not-upgraded_focus_before--opacity, rs-states-opacity(primary, focus));
  }

  :focus &  {
    &:hover::before,
    &::before {
      background-color: var(--rs-ripple_before--background-color, $rs-theme-primary);
      transition-duration: var(--rs-upgraded_-background-focused_before--transition-duration, 75ms);
      opacity: var(--rs-upgraded_-background-focused_before--opacity, rs-states-opacity(primary, focus));
    }
  }

  &:not(.rs-ripple-upgraded) {
    &::after {
      transition: var(--rs-ripple_not-upgraded_after--transition, opacity $rs-ripple-fade-out-duration linear);
    }

    &:active::after {
      transition-duration: var(--rs-ripple_not-upgraded_active_after--transition-duration, $rs-ripple-fade-in-duration);
      opacity: var(--rs-ripple_not-upgraded_active_after--opacity, rs-states-opacity(primary, press));
    }
  }

  &.rs-ripple-upgraded {
    --rs-ripple-fg-opacity: var(--rs-ripple-upgraded--rs-ripple-fg-opacity, #{rs-states-opacity(primary, press)});
  }
}
</style>

