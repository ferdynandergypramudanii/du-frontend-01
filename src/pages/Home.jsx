import React from "react";
import Hero from "../components/Hero";
import UserLayout from "../components/layout/UserLayout";

export default function Home() {
  return (
    <>
      <UserLayout>
        <Hero />
      </UserLayout>
    </>
  );
}
