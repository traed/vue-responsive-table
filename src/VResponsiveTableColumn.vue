<template>
  <td :data-th="formattedHeader" :class="classes">
    <icon-chevron
      v-if="isFirst"
      :width="16"
      :height="16"
      class="responsive-table--collapse-arrow"
    />

    <template v-if="Array.isArray(col)">
      <v-responsive-table-cell v-for="(cell, i) in col" :key="i" :cell="cell" />
    </template>

    <v-responsive-table-cell v-else :cell="col" />
  </td>
</template>

<script>
import IconChevron from './IconChevron.vue'
import VResponsiveTableCell from './VResponsiveTableCell.vue'

export default {
  name: 'VResponsiveTableColumn',
  components: {
    VResponsiveTableCell,
    IconChevron,
  },
  props: {
    header: {
      type: String,
      default: '',
    },
    col: {
      type: [Object, Array],
      default: {},
    },
    isFirst: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      if (Array.isArray(this.col)) {
        for (const cell of this.col) {
          if (cell.href || cell.onClick) {
            return 'responsive-table--cta'
          }
        }
      }

      return this.col.href || this.col.onClick ? 'responsive-table--cta' : ''
    },
    formattedHeader() {
      return this.header.length ? this.header + ':' : ''
    },
  },
}
</script>

<style>
.responsive-table--collapse-arrow {
  display: none;
}
</style>