import React, {Component} from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

import Loading from './Loading';
import UserCard from './UserCard';

import './UserSearch.css';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedUsers: ''
    };

    this.getUsers = this.getUsers.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(res => this.setState({
        displayedUsers: res.results,
        searchUsers: res.results
      }));
  }

  handleChange(e) {
    let inputText = e.target.value.toLowerCase();

    let displayedUsers = this.state.searchUsers.filter(item => {
      let userToFilter = item.name.first + item.name.last.toLowerCase();

      return userToFilter.indexOf(inputText) !== -1;
    });

    this.setState({ displayedUsers: displayedUsers });
  }

  render() {
    if(!this.state.displayedUsers) return <Loading />;

    return (
      <div className="row">
        <Form className="col-xs-12 col-sm-12">
          <FormGroup>
            <Input
              type="text"
              name="search"
              id="search"
              placeholder="Enter a name"
              onChange={this.handleChange} />
          </FormGroup>
        </Form>
        {this.state.displayedUsers.map((item, key) => <UserCard key={key} data={item} /> )}
      </div>
    );
  }
}

export default Users;