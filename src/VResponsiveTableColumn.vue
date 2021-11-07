<template>
  <td :data-th="formattedHeader" :class="classes">
    <icon-chevron
      v-if="isFirst"
      :width="16"
      :height="16"
      class="collapse-arrow"
    />

    <template v-if="Array.isArray(col)">
      <v-responsive-table-cell v-for="(cell, i) in col" :key="i" :cell="cell" />
    </template>

    <v-responsive-table-cell v-else :cell="col" />
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
      type: Array | Object,
      default: {},
    },
    isFirst: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      if (Array.isArray(col)) {
        for (const cell of col) {
          if (cell.href || cell.onClick) {
            return 'cta'
          }
        }
      }

      return cell.href || cell.onClick ? 'cta' : ''
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