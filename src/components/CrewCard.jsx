import React from "react";

const CrewCard = ({ role, name, bio }) => {
  return (
    <section>
      <h3>{role}</h3>
      <h1>{name}</h1>
      <p>{bio}</p>
    </section>
  );
};

export default CrewCard;
