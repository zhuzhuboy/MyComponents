// {<template>
//   <div class="el-col" :class="classList">
//     <slot />
//     {{gutter}}
//   </div>
// </template>

// <script>
// export default {
//   name: 'Col',
//   props: {
//     span: {
//       type: Number,
//       default() {
//         return 24;
//       },
//     },
//     offset: {
//       type: Number,
//       default() {
//         return 0;
//       },
//     },
//     push: {
//       type: Number,
//       default() {
//         return 0;
//       },
//     },
//     pull: {
//       type: Number,
//       default() {
//         return 0;
//       },
//     },
//   },
//   computed: {
//     gutter() {
//       let parent = this.$parent;

//       while (parent.$options.name !== 'Rol') {
//         parent = parent.$parent;
//       }
//       if (parent.gutter) {
//         return parent.gutter;
//       }
//       return 0;
//     },
//     classList() {
//       const classList = [];

//       ['span', 'offset', 'gutter', 'push', 'pull'].forEach((props) => {
//         /* classList.push(props === 'span' ? `el-col-${this.span}` : this[props] ?
//           `el-col-${props}-${this[props]}` : ''); */
//         if (props === 'span') {
//           classList.push(`el-col-${this.span}`);
//         } else if (this[props]) {
//           classList.push(`el-col-${props}-${this[props]}`);
//         }
//       });

//       return classList;
//     },
//   },
//   created() {

//   },
// };
// </script>}

export default {
  name: 'el-col',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default() {
        return 24;
      },
    },
    offset: {
      type: Number,
      default() {
        return 0;
      },
    },
    push: {
      type: Number,
      default() {
        return 0;
      },
    },
    pull: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  computed: {
    gutter() {
      let parent = this.$parent;

      while (parent.$options && parent.$options.name !== 'el-row') {
        parent = parent.$parent;
      }
      if (parent.gutter) {
        return parent.gutter;
      }
      return 0;
    },
    classList() {
      const classList = [];

      ['span', 'offset', 'gutter', 'push', 'pull'].forEach((props) => {
        /* classList.push(props === 'span' ? `el-col-${this.span}` : this[props] ?
          `el-col-${props}-${this[props]}` : ''); */
        if (props === 'span') {
          classList.push(`el-col-${this.span}`);
        } else if (this[props]) {
          classList.push(`el-col-${props}-${this[props]}`);
        }
      });

      return classList;
    },
  },
  created() {

  },
  render(h) {
    return h(this.tag, {
      class: ['el-col', this.classList],
    }, this.$slots.default);
  },
};
