import { useState, useRef, useEffect } from "react";
const users = [
  { name: "Jane", age: 20 },
  { name: "John", age: 30 },
  { name: "Sarah", age: 27 },
];

const UserSearch: React.FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [foundUser, setFoundUser] = useState<
    { name: string; age: number } | undefined
  >();

  useEffect(() => {
    // type guard
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);
  const onClickHandler = (userToSearch: string) => {
    const targetUser = users.find((user) => user.name === userToSearch);
    setFoundUser(targetUser);
  };

  return (
    <div>
      <h1>Users Search</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <button onClick={onClickHandler.bind(null, name)}>Look for it</button>
      <div>{foundUser && foundUser.name}</div>
      <div>{foundUser && foundUser.age}</div>
    </div>
  );
};

export default UserSearch;
