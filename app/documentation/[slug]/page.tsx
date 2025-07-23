import React from "react";

import DocsSidebar from "@/components/docsSidebar";

// @ts-expect-error - Disables types checking for props of this component
function Documentation({ params }) {
  const { slug } = params;
  return <DocsSidebar slug={slug} />;
}

export default Documentation;
