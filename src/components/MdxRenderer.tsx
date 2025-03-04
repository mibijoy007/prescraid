"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

interface MdxRendererProps {
  source: MDXRemoteSerializeResult;
}

const MdxRenderer: React.FC<MdxRendererProps> = ({ source }) => {
  return (
    <div className="prose max-w-2xl mx-auto">
      <MDXRemote {...source} />
    </div>
  );
};

export default MdxRenderer;


// =========================================================================

// import { MDXRemote } from "next-mdx-remote";
// import type { MDXRemoteSerializeResult } from "next-mdx-remote";
// import React from "react";

// // Props type definition
// interface MdxRendererProps {
//   source: MDXRemoteSerializeResult;
// }

// // The MDX Renderer component
// const MdxRenderer: React.FC<MdxRendererProps> = ({ source }) => {
//   return (
//     <div className="prose max-w-2xl mx-auto">
//       <MDXRemote {...source} />
//     </div>
//   );
// };

// export default MdxRenderer;
