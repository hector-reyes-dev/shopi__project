import { Partytown } from "@builder.io/partytown/react";

export const Head = () => {
  return <Partytown debug={true} forward={["dataLayer.push"]} />;
};
