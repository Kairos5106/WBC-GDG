"use client"

import { Section } from "@/components/ds";
import { notFound } from "next/navigation";
import ResourceHeader from "./ResourceHeader";
import ResourceTOC from "./ResourceTOC";
import ResourceChapters from "./ResourceChapters";
import { useState } from "react";
import { resources } from "@/data/resources";

const dummyData = [
  {
    id: "1",
    title: "Free Community WiFi",
    description: "Free WiFi access at all city libraries.",
    category: "Technology",
    contact: "info@citywifi.org",
    location: "123 Library Lane",
  }
]

// Data for testing purposes
const chapters = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <div className="bg-white p-6 rounded-md shadow-sm">
        <p className="text-gray-700">
          This is the overview section content. It provides a general introduction to the unit.
        </p>
      </div>
    ),
  },
  {
    id: "considerations",
    title: "Before You Teach: Considerations",
    content: (
      <div className="bg-white p-6 rounded-md shadow-sm">
        <p className="text-gray-700">Important considerations for teachers before beginning this unit.</p>
      </div>
    ),
  },
  {
    id: "curriculum",
    title: "Curriculum Connections",
    badge: "Updated",
    content: (
      <div className="bg-white p-6 rounded-md shadow-sm">
        <p className="text-gray-700 mb-4">This unit connects to curriculum standards across multiple provinces:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>British Columbia</li>
          <li>Manitoba</li>
          <li>New Brunswick</li>
          <li>Nova Scotia</li>
          <li>Ontario</li>
          <li>Yukon</li>
        </ul>
      </div>
    ),
  },
  {
    id: "lessons",
    title: "Lessons in this Unit",
    content: (
      <div className="bg-white p-6 rounded-md shadow-sm">
        <p className="text-gray-700">Overview of the lessons included in this educational unit.</p>
      </div>
    ),
  },
  {
    id: "assessments",
    title: "Assessments",
    content: (
      <div className="bg-white p-6 rounded-md shadow-sm">
        <p className="text-gray-700">Assessment strategies and resources for this unit.</p>
      </div>
    ),
  },
  {
    id: "appendix",
    title: "Appendix",
    content: (
      <div className="bg-white p-6 rounded-md shadow-sm">
        <p className="text-gray-700">Additional materials and references for this unit.</p>
      </div>
    ),
  },
];

type ResourceDetailsProps = {
  params: { 
    slug: string 
  };
};

export default function ResourceDetails({ 
  params 
}: ResourceDetailsProps) {

  const resource = resources.find((resource) => resource.slug === params.slug);
  const [activeSection, setActiveSection] = useState<string>("overview")

  console.log(params.slug)
  console.log(resources[0].slug === params.slug)

  if (!resource) return notFound();
  
  function handleSectionClick(section: string) {
    setActiveSection(section)
    // Find the matching chapter and open it
    const matchingChapter = chapters.find((chapter) => chapter.id === section)
    if (matchingChapter) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Section>
      <div className="bg-black">
        <ResourceHeader />
      </div>
      <Section>
        <div className="flex flex-col md:flex-row min-h-screen">
          <div className="md:w-1/4 border-r border-gray-200">
            <ResourceTOC
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
            />
          </div>
          <div className="md:w-3/4">
            <ResourceChapters chapters={chapters} />
          </div>
        </div>
      </Section>
    </Section>
  );
}
