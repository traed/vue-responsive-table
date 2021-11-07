<template>
  <tr class="responsive-table-row">
    <v-responsive-table-column
      v-for="(col, i) in row"
      :key="i"
      :header="header"
      :col="col"
      :is-first="i === 0"
    />
  </tr>
</template>

<script>
import VResponsiveTableColumn from './VResponsiveTableColumn.vue'

export default {
  props: {
    row: {
      type: Array,
      default: () => [],
    },
    header: {
      type: String,
      default: '',
    },
  },
  components: {
    VResponsiveTableColumn,
  },
  computed: {
    colClasses(col) {
      if (Array.isArray(col)) {
        for (const cell of col) {
          if (cell.href || cell.onClick) {
            return 'cta'
          }
        }
      }

      return col.href || col.onClick ? 'cta' : ''
    },
  },
}
</script>
