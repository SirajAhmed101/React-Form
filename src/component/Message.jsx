import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState(["a", "b", "v"]);

  return (
    <div>
      {message.length === 0 ? (
        <h1>You'r all caught up</h1>
      ) : (
        <h1>
          You have {message.length} unread{" "}
          {message.length > 1 ? "messages" : "message"}
        </h1>
      )}
    </div>
  );
};

export default Message;
