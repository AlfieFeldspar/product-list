import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log("search term: " + event.target.value);
    this.setState({ search: event.target.value });
    console.log("this.state.search: " + this.state.search);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchProducts(this.state.search, '', '');
    this.setState({ search: '' });
  }

  render() {
    return (
          <form
            onSubmit={this.onFormSubmit}
            className='input-group form-inline search'>
            <span className='input-group-btn'>
              <button type='submit' className='btn btn-secondary btn-sm'>
                Submit
              </button>
            </span>
            <input
              className='form-control-sm'
              placeholder='Search for products'
              value={this.state.search}
              onChange={this.onInputChange}
            />
          </form>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
