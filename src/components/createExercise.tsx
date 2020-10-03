import React from "react";

export class createExercise extends React.Component<
  {},
  {
    username: string;
    description: string;
    duration: number;
    date: Date;
    users: string[];
  }
> {
  constructor(props: object) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }
  componentDidMount() {
    this.setState({ users: ["test user"], username: "test user" });
  }
  onChangeUsername(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ username: e.target.value });
  }
  onChangeDescription(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ description: e.target.value });
  }
  onChangeDuration(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ duration: +e.target.value });
  }

  onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    // window.location = "/";
  }
  render() {
    return (
      <div>
        <h3>Create New Exercise</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Username:</label>
            <select
              ref="userInput"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={this.state.description}
              onChange={this.onChangeDescription}
            ></input>
          </div>
          <div>
            <label>Duration:</label>
            <input
              type="text"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            ></input>
          </div>
          <div>
            <input type="submit" value="create log"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default createExercise;
