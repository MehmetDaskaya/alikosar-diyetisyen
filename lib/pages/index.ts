import type { LandingData } from "../landing-types";
import { sporcuBeslenmesi, atletikPerformans, sporcuSakatligi } from "./sporcu";
import { zayiflamaIgnesi, glp1KasKaybi, glp1Safra, mounjaroProgram } from "./glp1";
import { biohacking, peptitler } from "./biohacking";
import { onlineDiyet } from "./online-diyet";

export {
  sporcuBeslenmesi, atletikPerformans, sporcuSakatligi,
  zayiflamaIgnesi, glp1KasKaybi, glp1Safra, mounjaroProgram,
  biohacking, peptitler, onlineDiyet,
};

/** Sitemap ve llms.txt bu listeden üretilir — yeni sayfa eklerken tek yer. */
export const landingPages: LandingData[] = [
  sporcuBeslenmesi,
  atletikPerformans,
  sporcuSakatligi,
  zayiflamaIgnesi,
  glp1KasKaybi,
  glp1Safra,
  mounjaroProgram,
  biohacking,
  peptitler,
  onlineDiyet,
];
