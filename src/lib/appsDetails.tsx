
export interface appsDetailsType {
  title: string;
  link: string;
  target?: string;
  rel?: string;
  description?: string;
}
export const appsDetails: appsDetailsType[] = [
  {
    title: "Prescribtion Analyzer",
    link: "https://huggingface.co/spaces/Maksudul/prescribtion-reader",
    target: "_blank",
    rel: "noreferrer",
    description: "Upload a prescription image to see if the medicines are right or not with a help of Ai."
  },
  {
    title: "Hadith Chat",
    link: "https://huggingface.co/spaces/Maksudul/hadith-strmlit",
    target: "_blank",
    rel: "noreferrer",
    description: "Ask islamic questions & an Ai trained in Hadith will answer with references."
  },
  // {title : "Google", link:"https://google.com", target:"_blank",rel:"noreferrer"},
  {
    title: "Blog",
    link: "/docs",
    description: "Sharing my experiences, Solutions to problems I face, and  more"
  },

]