import React from "react";
import Card from "../ui/Card";

const ProjectContainer = () => {
  return (
    <section className="grow">
      <Card
        img="https://images.unsplash.com/photo-1627843240043-aa499ed215e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        href={"https:youtube.com"}
        alt="alt"
      >
        <p>Duis aute irure dolor in velit esse cillum dolore.</p>
      </Card>
    </section>
  );
};

export default ProjectContainer;
