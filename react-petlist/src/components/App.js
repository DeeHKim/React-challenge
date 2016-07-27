import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { searchList, searchSitting, searchBoarding } from '../actions/searchActions'

import {Link} from 'react-router'

const styles = {
  header: {
    marginLeft: "25%",
    fontSize: 30,
    color: "red",
  },
  linkButton: {
    width: 110,
    height: 40,
    margin: 10,
  },
  nav: {
    border: "ridge",
    borderColor: "orange",
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      option: null
    };
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount () {
    let param = this.props.params.searchtype;
    if(param === "search") {
      this.props.searchList();
    }
    else if(param === "search-sitting") {
      this.props.searchSitting();
      this.setState({
        option: "optionA"
      });
    }
    else if(param === "search-boarding") {
      this.props.searchBoarding();
      this.setState({
        option: "optionB"
      });
    }
    else {
      this.props.searchList();
      this.context.router.push('/search')
    }
  }

  componentDidUpdate () {
    let param = this.props.params.searchtype;
    if(param === "search-sitting") {
      this.props.searchSitting();
    }
    if(param === "search-boarding") {
      this.props.searchBoarding();
    }
  }

  _onOptionChange(option) {
    this.setState({
        option: option
    });
  }

  render() {
    return (
      <div>
      <nav style={styles.nav} className="navbar">
        <div style={styles.header} className="col-md-6 col-md-offset-3">
          Looking for:
          <ButtonGroup>
          <Link to={`/search-sitting`}>
          <Button style={styles.linkButton} bsStyle="primary" onClick={this._onOptionChange.bind(this, "optionA")} active={this.state.option === 'optionA'}>Sitting</Button>
          </Link>
          <Link to={`/search-boarding`}>
          <Button style={styles.linkButton} bsStyle="primary" onClick={this._onOptionChange.bind(this, "optionB")} active={this.state.option === 'optionB'}>Boarding</Button>
          </Link>
          </ButtonGroup>
          </div>
      </nav>
      <div>
          {this.props.children}
      </div>
      </div>
    );
  }
}

export default connect(
  (state)=>{
    return {}
  },
  {
    searchList,
    searchSitting,
    searchBoarding
  }
)(App);
