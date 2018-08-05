import React from 'react'
import { connect } from 'react-redux'
import DataListView from '../components/DataListView'
import setVisibilityFilter from '../actions/visibilityFilterAction'

const mapStateToProps = (state) => ({
  model: state.filterReducer
})

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: (filterType, value) => dispatch(setVisibilityFilter(filterType, value))
})

const DataListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataListView)

export default DataListContainer;