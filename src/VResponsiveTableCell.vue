<template>
  <button
    v-if="cell && cell.onClick"
    class="responsive-table--button"
    type="button"
    @click="cell.onClick"
  >
    {{ cell.label }}
  </button>
  <button
    v-else-if="cell && cell.href"
    class="responsive-table--button"
    type="button"
    :href="cell.href"
  >
    {{ cell.label }}
  </button>
  <span v-else-if="cell" v-html="cell.label"></span>
</template>

<script>
export default {
  name: 'VResponsiveTableCell',
  props: {
    cell: {
      type: Object,
      default: {},
    },
  },
}
</script>

<style lang="scss">
.responsive-table--button {
  &:not(:first-child) {
    margin-left: 10px;
  }

  & > * {
    line-height: 1.75em;
    padding: 0 0.75em;
  }
}
</style>