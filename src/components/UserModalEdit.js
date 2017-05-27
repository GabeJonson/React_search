import React, {Component} from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class UserModalEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserData: [
        {
          data: this.props.login,
          text: 'login'
        }, {
          data: this.props.pass,
          text: 'password'
        }, {
          data: this.props.post,
          text: 'postcode'
        }, {
          data: this.props.state,
          text: 'state'
        }, {
          data: this.props.city,
          text: 'city'
        }, {
          data: this.props.street,
          text: 'street'
        }
      ]
    }
  }


  render() {
    return (
      <Form>
        {this.state.UserData.map((item, key) =>
          <FormGroup key={key}>{
            !item.data ? '' :
              <div>
                <Label for={item.text}>{item.text}</Label>
                <Input
                  type="text"
                  name={item.text}
                  id={item.text}
                  placeholder={item.data}/>
              </div>
            }
          </FormGroup>
        )}
      </Form>
    );
  }
}

export default UserModalEdit;