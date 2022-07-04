import { useState, useEffect } from "react";

export const StarWarsPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people");
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
      <h2>StarWarsPage</h2>
      <ul>
        {users.map((user) => {
          return <li key={user.url}>{user.name}</li>;
        })}
      </ul>
    </>
  );
};
