<template>
  <td :data-th="formattedHeader" :class="classes">
    <icon-chevron
      v-if="isFirst"
      :width="16"
      :height="16"
      class="collapse-arrow"
    />

    <v-responsive-table-cell v-for="(cell, i) in col" :key="i" :cell="cell" />
  </td>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: '',
    },
    col: {
      type: Array,
      default: () => [],
    },
    isFirst: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      for (const cell of col) {
        if (cell.href || cell.onClick) {
          return 'cta'
        }
      }

      return ''
    },
    formattedHeader() {
      return this.header.length ? this.header + ':' : ''
    },
  },
}
</script>

<style scoped>
.collapse-arrow {
  display: none;
}
</style>