<template>
  <div ref="table" :class="classes">
    <table>
      <thead>
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
          :header="headers[i]"
        />
      </tbody>
      <tbody v-else>
        <tr>
          <td :colspan="headers.length" v-html="noDataText" />
        </tr>
      </tbody>
    </table>

    <nav class="pagination">
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
          this.collapseTable =
            this.$refs.table.scrollWidth > this.$refs.table.clientWidth
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

<style lang="scss">
.responsive-table {
  max-width: 100%;
  overflow: auto;

  &.responsive-table--collapse {
    table {
      thead {
        display: none;
      }

      .responsive-table--collapse-arrow {
        display: block;
      }

      tr {
        td {
          display: none;
          padding-left: 40px;
          overflow: hidden;
          border-width: 0 0 1px;

          &:first-child {
            display: block;
            position: relative;
            background-color: #fff;
            cursor: pointer;

            svg {
              position: absolute;
              top: 50%;
              left: 15px;
              transform: translateY(-50%) rotate(180deg);
              transition: transform 0.2s ease;
            }
          }

          &:last-child {
            padding-bottom: 0.5em;
          }

          & > span {
            margin-left: 5px;
          }

          &::before {
            content: attr(data-th);
            font-weight: bold;
            display: inline-block;
          }
        }

        &.responsive-table--open {
          td {
            display: block;

            &.responsive-table--cta {
              display: flex;
            }

            &:first-child svg {
              transform: translateY(-50%);
            }
          }
        }
      }
    }
  }

  table {
    min-width: 300px;
    max-width: none;
    width: 100%;
    height: fit-content;
    border-collapse: collapse;
  }

  tr {
    &:nth-child(2n) {
      th,
      td {
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }

  th,
  td {
    &:first-child {
      padding-left: 80px;
    }

    &:last-child {
      padding-right: 80px;
    }
  }

  thead {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: bold;

    th,
    td {
      background: rgba(255, 255, 255, 0.75);
      border-top: 1px solid rgba(11, 13, 34, 0.1);
      border-bottom: 1px solid rgba(11, 13, 34, 0.1);
    }
  }

  tbody {
    td {
      border-bottom: 1px solid rgba(11, 13, 34, 0.1);
      border-right: 1px solid rgba(11, 13, 34, 0.1);
      border-left: none;
      border-top: none;

      &::before {
        display: none;
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  .responsive-table--pagination {
    padding: 0 80px;

    ul {
      display: inline-flex;
      flex-flow: row nowrap;
      justify-content: center;
      border-radius: 4px;
      border: 1px solid rgba(11, 13, 34, 0.1);
      background-color: #fff;
      padding: 0;
    }

    li {
      line-height: 2em;
      padding: 0 1em;

      &.responsive-table--active {
        font-weight: bold;
      }

      &:not(.responsive-table--active) {
        cursor: pointer;

        &:hover {
          background-color: rgba(11, 13, 34, 0.1);
        }
      }
    }
  }
}
</style>