import React from 'react'

const DataListItem = ({dataListItem}) => (<div>
		
		<div><strong>{dataListItem.title}</strong></div>

		<div><i>{dataListItem.content}</i></div>
		<div>{dataListItem.tags.map(tag =>
	      <i  key={dataListItem.title + tag}> [{tag}] </i>
	    )}</div><br />
	</div>)

export default DataListItem;