import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.25) {
  const { ref, inView } = useInView({ threshold, triggerOnce: false }); // Detecta en ambas direcciones
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(
    function () {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
      }
    },
    [inView, setActiveSection, timeOfLastClick, sectionName]
  );

  return { ref };
}
