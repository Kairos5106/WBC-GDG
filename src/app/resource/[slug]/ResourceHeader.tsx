import { Section, Container } from "@/components/ds";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image"
import { ArrowRight, Download, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge";
import { ResourceCardProps, resourceTypes } from "@/data/resources";
import ComesInGoesOutUnderline from "@/fancy/components/text/underline-comes-in-goes-out";

interface ResourceHeaderProps {
  resource: ResourceCardProps
}

function ResourceHeader({
  resource
}: ResourceHeaderProps) {

  function getTypeColor(resourceType: string) {
    if (resourceType === resourceTypes[0]) {
      return "bg-service-600";
    } else if (resourceType === resourceTypes[1]) {
      return "bg-healthcare-600";
    } else {
      return "bg-event-600";
    }
  }
  
  return (
    <Section>
      <Container
        className={`
          h-fit pt-[4rem]
      `}
      >
        <div className={`
            px-4 pb-8 bg-gray-100 shadow-md grid grid-cols-1 border-b-2 border-b-rich-black
            mobile-lg:px-8 mobile-lg:pt-12
            tablet:-mx-2 tablet:-mt-2
            laptop:mt-6 laptop:mx-4  
        `}>
          <div className="flex flex-col lg:flex-row h-[100%] bg-white">
            {/* Main Content */}
            <div className="flex-1 p-6 lg:p-10">
              {/* Breadcrumb */}
              <nav className={`flex items-left gap-2 text-gray-600 mb-8 mobile-sm:flex-col
                tablet:flex-row
              `}>
                <div className="flex gap-2 items-center">
                  <Link href="/" className="hover:text-gray-900">
                    <ComesInGoesOutUnderline label="Home" />
                  </Link>
                  <span className="text-lg">›</span>
                  <Link href="/resources" className="hover:text-gray-900">
                    <ComesInGoesOutUnderline label="Resources" />
                  </Link>
                  <span className="text-lg">›</span>
                </div>
                <Link href="#" className="bg-brand-primary text-white px-3 py-1 whitespace-nowrap">
                  <ComesInGoesOutUnderline label={resource.title} />
                </Link>
              </nav>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {resource.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                {resource.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Button className={`hover:bg-[#b56b46] text-white flex items-center gap-2 px-6 py-6
                    ${getTypeColor(resource.type)}
                `}>
                  Unit Introduction <ArrowRight className="h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  className="bg-rich-black hover:bg-transparent text-white border-0 flex items-center gap-2 px-6 py-6"
                >
                  Download <Download className="h-5 w-5" />
                </Button>

                <Button
                    variant="outline"
                    size="default"
                    className="text-white border-0 flex items-center gap-2 px-6 py-6 bg-[#2a2723] hover:bg-transparent hover: "
                  >
                    <Share2 className="h-5 w-5" />
                    <span className="">Share</span>
                  </Button>
              </div>

              {/* Key Concepts */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Concepts
                </h2>

                <div className="flex justify-between">
                  <div className="max-w-2xl">
                    <p className="text-gray-600 mb-4">
                      Seeking Help, Accessing Resources, Stress Management,
                      Signs of Struggle, Barriers, Active Listening, Boundaries,
                      Supporting Yourself, Supporting Others, Interpersonal
                      Skills, Healthy Relationships, Self-care
                    </p>

                    {/* Subjects */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {
                        resource.subjects.map((subject, index) => (
                          <Badge 
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-md"
                            key={index}
                          >
                            {subject}
                          </Badge>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Image and Action Bar */}
            <div className="relative lg:w-2/5">
              {/* Background Image */}
              <div className="h-full w-full  bg-[#d88c6a] relative overflow-hidden">
                <Image
                  src="/home-page-header/header-1.jpg"
                  alt="Brain with heart illustration"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Unit Plan Badge */}
              <div className={`absolute top-0 right-0 text-white px-4 py-2 hidden laptop:block ${getTypeColor(resource.type)}`}>
                Unit Plan
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ResourceHeader;
