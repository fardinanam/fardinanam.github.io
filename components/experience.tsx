"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView, useTheme } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
              visible={true}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
              {
                Object.keys(item.others).length > 0 && (
                  <ul className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                    {Object.entries(item.others).map(([key, value]) => (
                      <li key={key}>
                        <span className='font-semibold'>{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                )
              }
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
