<template>
  <td :data-th="formattedHeader" :class="classes">
    <icon-chevron
      v-if="isFirst"
      :width="16"
      :height="16"
      class="responsive-table--collapse-arrow"
    />

    <div class="responsive-table--column-content">
      <template v-if="Array.isArray(col)">
        <v-responsive-table-cell
          v-for="(cell, i) in col"
          :key="i"
          :label="cell.label"
          :on-click="cell.onClick"
          :link="cell.href"
        />
      </template>

      <v-responsive-table-cell
        v-else
        :label="col.label"
        :on-click="col.onClick"
        :link="col.href"
      />
    </div>
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
      default: () => {},
    },
    isFirst: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const col = Array.isArray(this.col) ? this.col : [this.col]

      return {
        'responsive-table--column': true,
        'responsive-table--cta': col.some((cell) => cell.href || cell.onClick),
      }
    },
    formattedHeader() {
      return this.header.length ? this.header + ':' : ''
    },
  },
}
</script>
