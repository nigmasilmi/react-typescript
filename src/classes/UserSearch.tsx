import { Component } from "react";
interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

export default class UserSearchClass extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClickHandler = (userName: string) => {
    const targetUser = this.props.users.find((user) => user.name === userName);
    this.setState({ user: targetUser });
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h1>
          <i>Users Search</i>
        </h1>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClickHandler.bind(null, name)}>
          Look for it
        </button>
        <div>{user && user.name}</div>
        <div>{user && user.age}</div>
      </div>
    );
  }
}
