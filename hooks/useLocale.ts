import { useRouter } from "next/router";

import * as en from "../data/locales/en";
import * as ja from "../data/locales/ja";
import * as zh from "../data/locales/zh";

export const useLocale = () => {
  const router = useRouter();
  const { locale } = router;

  switch (locale) {
    case "en":
      return { ...en, locale };
    case "ja":
      return { ...ja, locale };
    case "zh":
      return { ...zh, locale };
    default:
      return { ...zh, locale: "zh" };
  }
};
