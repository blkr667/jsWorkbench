import model from '../model'
import actionTypes from '../actions/actionTypes'
import filterTypes from '../actions/filterTypes'

const filterReducer = (state = model, action) => {
	console.log("filterReducer " + action.type.toString());
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
    	console.log("case actionTypes.SET_VISIBILITY_FILTER");
      	if(action.filterType === filterTypes.FILTER_BY_VALUE)
      		return { 
      			filterTags: state.filterTags,
      			dataList: model.dataList.filter((dataEntry) => dataEntry.title.includes(action.value) || dataEntry.content.includes(action.value))
      		}

      	if(action.filterType === filterTypes.FILTER_BY_TAG) {
      		state.filterTags[action.value] = !state.filterTags[action.value];
      		console.log(state.filterTags);
      		return { 
      			filterTags: state.filterTags,
      			dataList: model.dataList.filter((dataEntry) => dataEntry.tags.some(tag=> !state.filterTags[tag]))
      		}
      	}
			

      	return model;
    default:
      return model
  }
}

export default filterReducer