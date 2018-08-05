import React from 'react'
import filterTypes from '../actions/filterTypes'
import itemTags from '../constants/itemTags'
import DataListTagFilterButton from './DataListTagFilterButton'

class DataListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const currentValue = event.target.value;
    this.setState({value: currentValue});
    this.props.setVisibilityFilter(currentValue ? filterTypes.FILTER_BY_VALUE : filterTypes.SHOW_ALL, currentValue);
  }

  render() {
   const setVisibilityFilter = this.props.setVisibilityFilter;
    return (
      <div>
        <label>
          Szukej:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <hr/>
        <div>
          {Object.keys(itemTags).map(tag=>
            <DataListTagFilterButton tag={tag} key={tag} setVisibilityFilter={setVisibilityFilter}/>
          )}
        </div>
      </div>
    );
  }
}


export default DataListFilter;