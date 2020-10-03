import React from "react";
import api from "../services/api";

export class createUser extends React.Component<{}, { username: string }> {
  constructor(props = {} as Object) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
    };
  }

  onChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: e.target.value });
  }

  async onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };
    console.log(user);
    await api
      .post("/users/add", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    await api
      .get("/users/")
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
