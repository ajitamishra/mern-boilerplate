import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export class createUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
    };
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };
    console.log(user);
    axios
      .post("/users/add", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    axios
      .get("/users/", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    this.setState({ username: "" });
    // window.location = "/";
  }
  render() {
    return (
      <div>
        <h3 className="">Create New Exercise</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div>
            <input type="submit" value="create user"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default createUser;
