import React, {Component} from 'react';
import { Card, CardImg, CardBlock,
  CardTitle, CardSubtitle } from 'reactstrap';

import UserModal from './UserModal';

import './UserCard.css';

class UserCard extends Component {
  render() {
    const userData = this.props.data;

    return (
      <div className="col-xs-12 col-sm-4">
        <Card>
          <CardImg
            top
            width="100%"
            src={userData.picture.large}
            alt="Card image cap" />
          <CardBlock>
            <CardTitle>{`${userData.name.first} ${userData.name.last}`}</CardTitle>
            <CardSubtitle>{userData.email}</CardSubtitle>
            <UserModal
              buttonLabel="Details"
              userLocation={userData.location}
              userLogin={userData.login} />
          </CardBlock>
        </Card>
      </div>
    );
  }
}

export default UserCard;