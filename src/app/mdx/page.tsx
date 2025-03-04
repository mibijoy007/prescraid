

import { serialize } from "next-mdx-remote/serialize";
import MdxRenderer from "@/components/MdxRenderer";
import remarkGfm from "remark-gfm";

// const mdxContent = `
// # Hello, MDX!

// **This is bold text**

// - List item 1
// - List item 2

// [Click here](https://example.com)
// `;

export default async function MdxPage() {
  const mdxSource = await serialize(mdxContent2, {
    mdxOptions: {
      remarkPlugins: [remarkGfm], // Enable GitHub-flavored Markdown
    },
  });

  return (
    <div>
      <h1>MDX Parser Example</h1>
      <MdxRenderer source={mdxSource} />
    </div>
  );
}

// const mdxContent2=```mdx
const mdxContent2=`mdx
---
**title:** Outpatient Ticket
---

**Hospital/Center:** (Blank)

**Registration Number:** (Blank)

**Date:** (Blank)

**Name:** Rahim

**Address:** (Blank)

**Date of Birth:** (Blank)

**Age:** (Blank)

**Sex:** (Blank) (Male/Female options available)

**Disease:** (Blank)

**Treatment:**  (Blank)

**Signature (Right):** RK (Possibly the doctor's initials) and "MaPa"

**Bottom Section (Untranslated):**  The bottom section contains phrases that likely relate to administrative details like serial numbers, copy numbers, and print order numbers, but require further context or language expertise to translate accurately.  It does not appear to contain direct medical information related to the patient.
`