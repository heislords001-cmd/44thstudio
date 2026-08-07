import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "44th Studio",
  legalName: "Uchechukwu Emmanuel Chibueze",
  title: "Front-End Developer • Web Designer • Graphic Designer",
  description:
    "Uchechukwu Emmanuel Chibueze (44th Studio) codes and designs modern, responsive websites and compelling digital experiences, hand-built, customized, and shipped to production.",
  url: "https://44thstudio.my.id",
  location: "Nigeria",
  email: "contact.44thstudio@gmail.com",
  github: "https://github.com/heislords001-cmd",
  phone: "+2349030907173",
  phoneDisplay: "+234 903 090 7173",
  whatsapp: "https://wa.me/2349030907173",
  resumeUrl: "/resume.pdf",
  // Formspree endpoint (connected and live)
  formspreeEndpoint: "https://formspree.io/f/mkodwoov",
};
