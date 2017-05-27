<template>
<svg :style='svgStyle'>
  <text x='50%' y='50%' text-anchor='middle' dominant-baseline='central' :style='textStyle'>
    {{ avatarLetter }}
  </text>
</svg>
</template>
<style>
</style>
<script>
export default {
  props: {
    size: {
      type: String,
      default: '50'
    },

    rounded: {
      type: Boolean,
      default: false
    },

    name: {
      type: String,
      required: true
    }
  },

  data() {
    // use hsl to define the background color.
    const avatarLetter = this.name[0].toUpperCase();
    const letterIndex = avatarLetter.charCodeAt() - 64;

    const hue = (360 / 26) * letterIndex;
    const backgroundColor = `hsl(${hue}, 68%, 48%)`;

    return {
      svgStyle: {
        width: `${this.size}px`,
        height: `${this.size}px`,
        borderRadius: this.rounded ? '100%' : '0',
        background: backgroundColor
      },

      textStyle: {
        fill: 'rgba(255, 255, 255, .6)',
        fontFamily: "'Lucida Console', Monaco, monospace",
        fontSize: `${this.size * 0.65}px`
      },
      avatarLetter
    };
  }
};
</script>
