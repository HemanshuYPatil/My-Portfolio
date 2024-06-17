"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      {/* <br />
      <center><button
        type="submit"
        className="group bg-gray-960 flex items-center justify-center gap-2 h-[3rem] w-[8rem]  text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65"
      >View More{" "}
        <FaArrowRight />
      </button></center> */}
    </section>
  );
}
