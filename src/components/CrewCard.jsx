import React from "react";

const CrewCard = ({ role, name, bio }) => {
  return (
    <section className="mb-8">
      <h3 className="crew-role mb-3">{role}</h3>
      <h1 className="crew-name mb-6">{name}</h1>
      <p className="font-barlow text-white/70 leading-relaxed text-base sm:text-lg lg:text-[18px] max-w-md">
        {bio}
      </p>
    </section>
  );
};

export default CrewCard;
