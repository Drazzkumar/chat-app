import React from "react";

export default ({ user, you }) => {
  console.log("membets", user);
  return (
    <div className="list">
      <h3>Member List</h3>
      {user &&
        user.map((d, i) => (
          <div
            className={d.userName === you ? "you list-item" : "list-item"}
            key={d.userName + i}
          >
            <i className="fa fa-user" /> &nbsp;
            {d.userName}ffasfsd
          </div>
        ))}
    </div>
  );
};