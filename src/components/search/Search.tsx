import React from 'react';
import './Search.scss';
import { SearchProps } from '../../interfaces/props/SearchProps';
import { SearchInterface } from '../../interfaces/search/SearchInterface';

class Search extends React.Component<SearchProps, SearchInterface>{

  constructor(props: SearchProps) {
    super(props);
    this.state = {
      query: '',
      pageNo: 1
    }
  }

  componentDidMount = () => {
    if (this.props.defaultSearch && this.props.defaultSearch.length > 0) {
      this.setState({
        query: this.props.defaultSearch
      })
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: e.target.value
    })
  }

  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Enter":
        this.search();
        break;
    }
  }

  search = () => {
    if (typeof this.props.onSearch === 'function') {
      const search: SearchInterface = this.state;
      this.props.onSearch(search)
    }
  }

  render() {
    return (
      <div>
        <div className="search-container">
          <input type="text"
            placeholder="Search for Movies..."
            value={this.state.query || ''}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress} />
          <button onClick={(e) => this.search()}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
