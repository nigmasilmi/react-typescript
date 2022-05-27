import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearchClass from "./classes/UserSearch";
import { default as USRef } from "./refs/UserSearch";

const users = [
  { name: "Jane", age: 20 },
  { name: "John", age: 30 },
  { name: "Sarah", age: 27 },
];

const App = () => {
  return (
    <div>
      <h2>Guest List</h2>
      <GuestList />
      <h2>User Search</h2>
      <UserSearch />
      <h2>User Search with Refs</h2>
      <USRef />
      <h2>Event</h2>
      <EventComponent />
      <h2>
        <i>User Search Class based Component</i>
      </h2>
      <UserSearchClass users={users} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
