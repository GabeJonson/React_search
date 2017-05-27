import React, {Component} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import UserModalList from './UserModalList';

class UserModal extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: !1 };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>User details</ModalHeader>
          <ModalBody>
            <UserModalList
              userLogin={this.props.userLogin}
              userLive={this.props.userLocation} />
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              onClick={this.toggle}>Save</Button>
            <Button
              color="danger"
              onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UserModal;