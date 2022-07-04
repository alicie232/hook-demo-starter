import { useState, useEffect } from "react";

export const RandomUserPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        if (response.ok) {
          const data = await response.json();
          setUsers(data.results);
        } else {
          throw new Error(`API returned ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadUsers();
  }, []);
  return (
    <>
      <h2>RandomUserPage</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.email}>
              {user.name.first} {user.name.last}
            </li>
          );
        })}
      </ul>
    </>
  );
};
