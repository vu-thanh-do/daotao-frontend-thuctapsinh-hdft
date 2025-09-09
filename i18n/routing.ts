import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "vi"],
  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/contact": {
      en: "/contact-me",
      vi: "/lien-he",
    },
    '/about':{
      en: "/about",
      vi: "/gioi-thieu",
    },
    '/privacy':{
      en: "/privacy",
      vi: "/dieu-khoan-dich-vu",
    },
    '/news':{
      en: "/news",
      vi: "/tin-tuc",
    },
    '/':{
      en: "/home",
      vi: "/trang-chu",
    },
    '/product':{
      en: "/product",
      vi: "/san-pham",
    }
  },
});
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter ,getPathname } =
  createNavigation(routing);
