/* <template>
  <div class="el-row" :style="margin">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Rol',
  props: {
    gutter: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  computed: {
    margin() {
      const style = {};

      style.marginLeft = `${-this.gutter / 2}px`;
      style.marginRight = `${-this.gutter / 2}px`;

      return style;
    },
  },
};
</script>

<style lang="scss">
.el-row {
  &::after,
  &::before {
    display: block;
    content: " ";
  }
  &::after {
    clear: both;
  }
}
</style> */

export default {
  name: 'el-row',

  props: {
    gutter: {
      type: Number,
      default() {
        return 0;
      },
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    margin() {
      const style = {};

      style.marginLeft = `${-this.gutter / 2}px`;
      style.marginRight = `${-this.gutter / 2}px`;

      return style;
    },
  },
  render(h) {
    return h(this.tag, {
      style: this.margin,
      class: ['el-row'],
    }, this.$slots.default);
  },
};
