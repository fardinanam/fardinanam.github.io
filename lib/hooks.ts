import { ActiveSectionContext } from "@/context/activeSectionContext";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider")
  }

  return context
}

function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const {ref, inView} = useInView({
    threshold: threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref
  }
}

export { useActiveSectionContext, useSectionInView }