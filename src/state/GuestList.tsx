import { useState } from "react";

const GuestList: React.FunctionComponent = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClickHandler = () => {
    setGuests((prevState) => [...prevState, name]);
    setName("");
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClickHandler}> Add Guest </button>
    </div>
  );
};

export default GuestList;
