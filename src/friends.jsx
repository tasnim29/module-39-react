import { use } from "react";

export default function Friends({ fetchFriends }) {
  const friends = use(fetchFriends);
  console.log(friends);

  return (
    <div>
      <h2>Friends:{friends[0].name}</h2>
    </div>
  );
}
