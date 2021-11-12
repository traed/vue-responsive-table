<template>
  <div ref="table" :class="classes">
    <table>
      <thead v-if="showHeader">
        <tr>
          <th v-for="(header, i) in headers" :key="i">
            {{ header || '&nbsp;' }}
          </th>
        </tr>
      </thead>
      <tbody v-if="rows.length" @click="toggleRow">
        <v-responsive-table-row
          v-for="(row, i) in rows"
          :key="i"
          :row="row"
          :headers="headers"
        />
      </tbody>
      <tbody v-else>
        <tr>
          <td :colspan="headers.length" v-html="noDataText" />
        </tr>
      </tbody>
    </table>

    <nav class="responsive-table--pagination">
      <ul v-if="pages > 1">
        <li
          v-if="currentPage > 1"
          aria-label="Previous"
          role="button"
          @click="emitPage(currentPage - 1)"
        >
          <icon-arrow-left :width="12" :height="12" />
        </li>
        <li
          v-for="page in pages"
          :key="page"
          :class="currentPage === page ? 'responsive-table--active' : ''"
          @click="emitPage(page)"
        >
          {{ page }}
        </li>
        <li
          v-if="currentPage < pages"
          aria-label="Next"
          role="button"
          @click="emitPage(currentPage + 1)"
        >
          <icon-arrow-right :width="12" :height="12" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { debounce } from 'vue-debounce'
import IconArrowRight from './IconArrowRight.vue'
import IconArrowLeft from './IconArrowLeft.vue'
import VResponsiveTableRow from './VResponsiveTableRow.vue'

export default {
  name: 'VResponsiveTable',
  components: {
    IconArrowLeft,
    IconArrowRight,
    VResponsiveTableRow,
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
    },
    pages: {
      type: Number,
      default: 0,
    },
    noDataText: {
      type: String,
      default: '<center>No data yet.</center>',
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      collapseTable: false,
      currentPage: 1,
    }
  },
  computed: {
    classes() {
      return {
        'responsive-table': true,
        'responsive-table--collapse': this.collapseTable,
      }
    },
  },
  created() {
    const dFn = this.onResize()

    dFn()

    window.addEventListener('resize', dFn)
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize())
  },
  methods: {
    onResize() {
      return debounce(() => {
        this.collapseTable = false

        setTimeout(() => {
          const { scrollWidth, clientWidth } = this.$refs.table

          this.collapseTable = scrollWidth - 2 > clientWidth
        })
      }, 100)
    },
    toggleRow(e) {
      if (!this.collapseTable) {
        return
      }

      const prevOpen = this.$refs.table.querySelectorAll(
        '.responsive-table--open'
      )
      const element = e.target.closest('tr')

      if (element) {
        element.classList.toggle('responsive-table--open')
      }

      if (prevOpen && prevOpen.length) {
        prevOpen.forEach((tr) => tr.classList.remove('responsive-table--open'))
      }
    },
    emitPage(page) {
      if (page === this.currentPage || page < 1 || page > this.pages) {
        return
      }

      this.currentPage = page

      this.$emit('page', page)
    },
  },
}
</script>
