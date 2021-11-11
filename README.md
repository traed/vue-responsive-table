# Vue Responsive Table

A simple table component that will collapse into an "accordion" when the screen gets too narrow.

Install:
```
npm install @traed/vue-responsive-table
```

Register:
```
import VResponsiveTable from '@traed/vue-responsive-table'
import '@traed/vue-responsive-table/dist/style.css'

Vue.use(VRespnsiveTable)
```

Use:
```
<v-respnsive-table
	:headers="['Header1', 'Header2', 'Header3']"
	:rows="[{label: 'Label1'}, {label: 'Label2'}, [{label: 'Label 3', href: 'https://example.com'}]]"
>
```

Props:
- headers: Array<String>
	- A list of table headers
- rows: Array<Array<{label: String, onClick: Function?, href: String?}>>
	- A list of table rows. Each entry should be an array containing objects. Each object represents a column and should have the following attributes:
		- label (String, required) - The contect of the cell
		- onClick (Function, optional) - A callback function that is called when the content is clicked.
		- href (String, optional) - A URL that should be loaded when the content is clicked.
	Only one of onClick and href should be present at any one object. If both are present, onClick will have precedence.
- pages: Number (optional)
	- If using paged content, set this prop should be the max number of pages. A value greater than 1 will display pagination links below the table. When a pagination link is click the component will emit a "page" event with the new page number.
- noDataText: String (optional)
	- Text (or HTML) to be displayed when there is no data to be shown (when rows is an empty array). Default: `<center>No data yet.</center>`.
- showHeader: Boolean (optional)
	- Where or not to show the headers (the thead element). Default: `true`.