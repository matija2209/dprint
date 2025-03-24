import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Define supported locales
  locales: ["en", "de", "sl"],

  // Used when no locale matches
  defaultLocale: "sl",
});
