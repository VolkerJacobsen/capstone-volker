import React from "react";

const ReplyItem = ({ reply }) => {
  return (
    <div>
      <p>
        <strong>{reply.author}</strong> on{" "}
        {new Date(reply.timestamp).toLocaleString()}
      </p>
      <p>{reply.content}</p>
    </div>
  );
};

export default ReplyItem;
