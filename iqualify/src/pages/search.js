import React, { Component } from "react";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";

export default class search extends Component {
  state = {
    userState: "Texas",
    isCitizen: false,
    isUnemployed: false,
    highestSalary: 0,
  };

  onSubmit = () => {
    if(this.state.isCitizen == false || this.state.isUnemployed == false){
      this.props.history.push(`/result?eligible=no`) 
    } else {
      this.props.history.push(`/result?eligible=yes&userState=${this.state.userState}&salary=${this.state.highestSalary}`) 
    }
  };

  render() {
    const {
      userState,
      isCitizen,
      isUnemployed,
      highestSalary,
    } = this.state;
    return (
      <div
        style={{
          width: "80%",
          marginLeft: "10%",
          height: "300px",
          marginTop: "30px",
        }}
      >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <h2>What State Are You From?</h2>
            </Form.Label>
            <Form.Control
              as="select"
              onChange={(event) =>
                this.setState({ userState: event.target.value })
              }
            >
              <option>Texas</option>
              <option>California</option>
              <option>New York</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h3>
                {" "}
                Are you a U.S. Citizen or are legally authorized to live/work in
                the U.S.?
              </h3>
            </Form.Label>
            <Form.Control
              as="select"
              onChange={(event) =>
                this.setState({ isCitizen: event.target.value === "Yes" ? true : false })
              }
            >
              <option>No</option>

              <option>Yes</option>
            </Form.Control>
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            onChange={(event) =>
              this.setState({ isUnemployed: event.target.value === "Yes" ? true : false })
            }
          >
            <Form.Label>
              <h3>
                Are you currently unemployed (unwillingly) and actively seeking work?
              </h3>
            </Form.Label>
            <Form.Control as="select">
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>


          <Form.Group
            controlId="formGroupEmail"
            onChange={(event) =>
              this.setState({ highestSalary: event.target.value })
            }
          >
            <Form.Label>
              <h2>What is your highest hourly salary over the past year?</h2>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter max hourly salary" />
          </Form.Group>

          <Button variant="primary" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
