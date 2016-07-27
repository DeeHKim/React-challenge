import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchEntry from './SearchEntry'

class Search extends Component {
  constructor(props) {
    super(props);
  }

  truncateDescription(string) {
    let modifiedString;
    if(string.length < 48) {
      return string;
    }
    for(let i = 47; i > -1; i--) {
      if(string[i] === " ") {
        modifiedString = string.substr(0, i);
        modifiedString += "...";
        break;
      }
    }
    return modifiedString;
  }

  searchEntries() {
    return (this.props.searchList).map((entry) => {
      let firstName = (entry.user.first).charAt(0).toUpperCase() + (entry.user.first).slice(1);
      let lastNameInitial = (entry.user.last).charAt(0).toUpperCase();
      let description = this.truncateDescription(entry.description);
      return (<SearchEntry
        key={entry.title}
        title={entry.title}
        description={description}
        firstname={firstName}
        lastnameinitial={lastNameInitial}
        petname={entry.pet.name}
      />);
    });
  }

  render() {
    return (
      <div>
      {this.searchEntries()}
      </div>
    )
  }
}

export default connect(
  (state)=>{
    return {
      searchList: state.searchData.searchList
    }
  }
)(Search);
