import actionTypes from './actionTypes'


const setVisibilityFilter = (filterType, value) => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filterType,
  value
})

export default setVisibilityFilter;