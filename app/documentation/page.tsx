import { redirect } from "next/navigation";
import React from "react";

function Documentation() {
  redirect("/documentation/why");
  return <>Redirecting to documentation page...</>;
}

export default Documentation;
