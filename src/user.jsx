import { use } from "react";

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);
  console.log(users);
  return (
    <div>
      <h2>Users:{users[0].name}</h2>
    </div>
  );
}
