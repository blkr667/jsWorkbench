import React from 'react'
import DataListItem from './DataListItem'
import DataListFilter from './DataListFilter'

const DataListView = ({ model, setVisibilityFilter }) => {
	return <div>
		<DataListFilter setVisibilityFilter={setVisibilityFilter} />
		<hr />

	    {model.dataList && model.dataList.map(dataListItem =>
	      <DataListItem key={dataListItem.title} dataListItem={dataListItem} />
	    )}
	 </div>
}

export default DataListView;