import React, {Component} from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';

import UserModalEdit from './UserModalEdit';

class UserModalList extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <UserModalEdit
            login={this.props.userLogin.username}
            pass={this.props.userLogin.password} />
        </ListGroupItem>
        <ListGroupItem>
          <UserModalEdit
            post={this.props.userLive.postcode}
            state={this.props.userLive.state}
            city={this.props.userLive.city}
            street={this.props.userLive.street} />
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default UserModalList;