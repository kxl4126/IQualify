import React, { Component } from "react";
import {
  Form,
  Button,
  DropdownButton,
  Dropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import scooter from "../assets/bank.png";

export default class search extends Component {
  state = {
    userState: "Texas",
    isCitizen: false,
    isUnemployed: false,
    highestSalary: 0,
  };

  onSubmit = () => {
    if (this.state.isCitizen == false || this.state.isUnemployed == false) {
      this.props.history.push(`/result?eligible=no`);
    } else {
      this.props.history.push(
        `/result?eligible=yes&userState=${this.state.userState}&salary=${this.state.highestSalary}`
      );
    }
  };

  render() {
    const { userState, isCitizen, isUnemployed, highestSalary } = this.state;
    return (
      <div style={{ marginTop: "8%" }}>
        <Container>
          <Row>
            <Col>
              <div
                style={{
                  height: "80%",
                }}
              >
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      <h3 style={{ fontWeight: "800" }}>
                        What State Are You From?
                      </h3>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      size="lg"
                      onChange={(event) =>
                        this.setState({ userState: event.target.value })
                      }
                    >
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      <h3 style={{ fontWeight: "800" }}>
                        {" "}
                        Are you legally authorized to live/work in the U.S.?
                      </h3>
                    </Form.Label>
                    <Form.Control
                      size="lg"
                      as="select"
                      onChange={(event) =>
                        this.setState({
                          isCitizen:
                            event.target.value === "Yes" ? true : false,
                        })
                      }
                    >
                      <option>No</option>

                      <option>Yes</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicPassword"
                    onChange={(event) =>
                      this.setState({
                        isUnemployed:
                          event.target.value === "Yes" ? true : false,
                      })
                    }
                  >
                    <Form.Label>
                      <h3 style={{ fontWeight: "800" }}>
                        Are you currently unemployed and actively seeking work?
                      </h3>
                    </Form.Label>
                    <Form.Control size="lg" as="select">
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
                      <h3 style={{ fontWeight: "800" }}>
                        What was your highest hourly salary over the past year?
                      </h3>
                    </Form.Label>
                    <Form.Control
                      size="lg"
                      type="email"
                      placeholder="Enter max hourly salary"
                    />
                  </Form.Group>
                  <div
                    class="button instagram"
                    style={{ maxWidth: "30%", marginBottom: "5%" }}
                  >
                    <Button
                      variant="primary"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        width: "150px",
                        height: "10vh",
                        marginTop: "30px !important",
                        position: "absolute",
                        outline: "none",
                        bottom: "-25px",
                        left: "10px",
                      }}
                      onClick={this.onSubmit}
                      disabled={this.state.highestSalary == 0? true: false}
                    ></Button>
                    <span className="gradient"></span>Submit
                  </div>
                </Form>
              </div>
            </Col>
            <Col>
              <img
                src={scooter}
                alt="oidf"
                class="scooter"
                style={{
                  width: "30vw",
                  marginTop: "22.5%",
                }}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
