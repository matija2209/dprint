import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Define supported locales
  locales: ["sl"], //"en", "de",

  // Used when no locale matches
  defaultLocale: "sl",
});
