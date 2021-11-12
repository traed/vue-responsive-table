<template>
  <button
    v-if="onClick"
    class="responsive-table--cell"
    type="button"
    @click="onClick"
  >
    {{ label }}
  </button>
  <router-link
    v-else-if="typeof link === 'obejct'"
    class="responsive-table--cell"
    :to="link"
  >
    {{ label }}
  </router-link>
  <a v-else-if="link" class="responsive-table--cell" :href="link">
    {{ label }}
  </a>
  <span v-else class="responsive-table--cell" v-html="label"></span>
</template>

<script>
export default {
  name: 'VResponsiveTableCell',
  props: {
    label: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: null,
    },
    link: {
      type: [String, Object],
      default: '',
    },
  },
}
</script>
