<template>
	<div ref="table" :class="classes">
		<table>
			<thead>
				<tr>
					<th v-for="(header, index) in headers" :key="index">
						{{ header || '&nbsp;' }}
					</th>
				</tr>
			</thead>
			<tbody v-if="rows.length" @click="toggleRow">
				<tr v-for="(row, i) in rows" :key="i">
					<td v-for="(col, j) in row" :key="j" :data-th="formatHeader(headers[j])" :class="colClasses(col)">
						<icon-chevron v-if="j === 0" :width="16" :height="16" class="collapse-arrow" />

						<template v-if="Array.isArray(col)">
							<v-responsive-table-cell v-for="(cell, k) in col" :key="k" :cell="cell" />
						</template>
						<v-responsive-table-cell v-else :cell="col" />
					</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr>
					<td :colspan="headers.length">
						<center>No data yet.</center>
					</td>
				</tr>
			</tbody>
		</table>

		<nav class="pagination">
			<ul v-if="pages > 1">
				<li v-if="currentPage > 1" aria-label="Previous" role="button" @click="emitPage(currentPage - 1)">
					<icon-arrow-left :width="12" :height="12" />
				</li>
				<li v-for="page in pages" :key="page" :class="currentPage === page ? 'active' : ''" @click="emitPage(page)">
					{{ page }}
				</li>
				<li v-if="currentPage < pages" aria-label="Next" role="button" @click="emitPage(currentPage + 1)">
					<icon-arrow-right :width="12" :height="12" />
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	import {debounce} from 'vue-debounce';
	import IconChevron from './IconChevron.vue';
	import IconArrowRight from './IconArrowRight.vue';
	import IconArrowLeft from './IconArrowLeft.vue';
	import VResponsiveTableCell from './VResponsiveTableCell.vue';

	export default {
		components: {
			IconChevron,
			IconArrowLeft,
			IconArrowRight,
			VResponsiveTableCell
		},
		props: {
			headers: {
				type: Array,
				default: () => []
			},
			rows: {
				type: Array,
				default: () => []
			},
			pages: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				collapseTable: false,
				currentPage: 1
			};
		},
		computed: {
			classes() {
				return 'responsive-table' + (this.collapseTable ? ' collapse' : '');
			}
		},
		created() {
			const dFn = this.onResize();

			dFn();

			window.addEventListener('resize', dFn);
		},
		destroyed() {
			window.removeEventListener('resize', this.onResize());
		},
		methods: {
			onResize() {
				return debounce(() => {
					this.collapseTable = false;

					setTimeout(() => {
						this.collapseTable = this.$refs.table.scrollWidth > this.$refs.table.clientWidth;
					});
				}, 100);
			},
			formatHeader(str) {
				return str.length ? str + ':' : '';
			},
			toggleRow(e) {
				if(!this.collapseTable) {
					return;
				}

				const prevOpen = this.$refs.table.querySelectorAll('.open');
				const element = e.target.closest('tr');

				if(element) {
					element.classList.toggle('open');
				}

				if(prevOpen && prevOpen.length) {
					prevOpen.forEach(tr => tr.classList.remove('open'));
				}
			},
			colClasses(col) {
				if(Array.isArray(col)) {
					for(const cell of col) {
						if(cell.href || cell.onClick) {
							return 'cta';
						}
					}
				}

				return col.href || col.onClick ? 'cta' : '';
			},
			emitPage(page) {
				if(page === this.currentPage || page < 1 || page > this.pages) {
					return;
				}

				this.currentPage = page;

				this.$emit('page', page);
			}
		}
	};
</script>

<style scoped>
	:root {
		--default-padding: 20px;
		--border-color: rgba(11, 13, 34, 0.1);
		--border-radius: 4px;
	}

	.responsive-table {
		max-width: 100%;
		overflow: auto;	
	}

	.collapse-arrow {
		display: none;
	}
	
	.responsive-table .collapse table thead {
		display: none;
	}

	.responsive-table .collapse table .collapse-arrow {
		display: block;
	}

	.responsive-table .collapse table tr td {
		display: none;
		padding-left: calc(var(--default-padding) * 2);
		overflow: hidden;
		border-width: 0 0 1px;
	}

	.responsive-table .collapse table tr td:first-child {
		display: block;
		position: relative;
		background-color: #fff;
		cursor: pointer;
	}

	.responsive-table .collapse table tr td:first-child svg {
		position: absolute;
		top: 50%;
		left: 15px;
		transform: translateY(-50%) rotate(180deg);
		transition: transform .2s ease;
	}

	.responsive-table .collapse table tr td:last-child {
		padding-bottom: .5em;
	}

	.responsive-table .collapse table tr td > span {
		margin-left: 5px;
	}

	.responsive-table .collapse table tr td::before {
		content: attr(data-th);
		font-weight: bold;
		display: inline-block;
	}

	.responsive-table .collapse table tr.open td {
		display: block;
	}

	.responsive-table .collapse table tr.open td.cta {
		display: flex;
	}

	.responsive-table .collapse table tr.open td:first-child svg {
		transform: translateY(-50%);
	}

	table {
		min-width: 300px;
		max-width: none;
		width: 100%;
		height: fit-content;
		border-collapse: collapse;
	}

	table .button > * {
		line-height: 1.75em;
		padding: 0 0.75em;
	}

	th:first-child,
	td:first-child {
		padding-left: calc(var(--default-padding) * 4);
	}

	th:last-child,
	td:last-child {
		padding-right: calc(var(--default-padding) * 4);
	}

	thead {
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: bold;
	}

	thead th,
	thead td {
		background: rgba(255, 255, 255, 0.75);
		border-top: 1px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);
	}

		
	tbody td {
		border-bottom: 1px solid var(--border-color);
		border-right: 1px solid var(--border-color);
		border-left: none;
		border-top: none;
	}

	tbody td::before {
		display: none;
	}

	tbody td:last-child {
		border-right: none;
	}

	tr:nth-child(2n) th,
	tr:nth-child(2n) td {
		background: rgba(255, 255, 255, 0.5);
	}

	.pagination {
		padding: 0 80px;
	}

	.pagination ul {
		display: inline-flex;
		flex-flow: row nowrap;
		justify-content: center;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background-color: #fff;
		padding: 0;
	}

	.pagination li {
		line-height: 2em;
		padding: 0 1em;
	}

	.pagination li.active {
		font-weight: bold;
	}

	.pagination li:not(.active) {
		cursor: pointer;
	}

	.pagination li:not(.active):hover {
		background-color: var(--border-color);
	}
</style>