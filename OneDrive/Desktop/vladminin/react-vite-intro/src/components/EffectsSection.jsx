import useInput from "../hooks/useInput";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useEffect, useState, useCallback } from "react";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  // async function fetchUsers() {
  //   setLoading(true);
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const users = await response.json();
  //   setUsers(users);
  //   setLoading(false);
  // }

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={() => setModal(true)}>Open information</Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          consequuntur inventore odio illo porro assumenda provident ducimus
          suscipit voluptates accusamus nemo perferendis officiis voluptatum ex
          similique eos eveniet quia beatae.
        </p>

        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>

      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <h6>{input.value}</h6>
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
