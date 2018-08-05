import React from 'react'
import filterTypes from '../actions/filterTypes'


class DataListTagFilterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
  	const {setVisibilityFilter, tag} = this.props;
  	setVisibilityFilter(filterTypes.FILTER_BY_TAG, tag);
    this.setState({active: !this.state.active});
  }

  render() {
  	const tag = this.props.tag;

    return (
        <button onClick={this.handleClick}>
          {this.state.active ? tag.toLowerCase() : <strike>{tag.toLowerCase()}</strike>}
        </button>
    );
  }
}


export default DataListTagFilterButton;