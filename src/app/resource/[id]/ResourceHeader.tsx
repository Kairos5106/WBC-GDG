import { Section, Container } from "@/components/ds";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image"
import { ArrowRight, Download, Video, VideoIcon, FileText, ThumbsUp, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge";

function ResourceHeader() {
  return (
    <Section>
      <Container
        className={`
          h-fit pt-[4rem]
      `}
      >
        <div className="flex flex-col lg:flex-row min-h-screen bg-white">
          {/* Main Content */}
          <div className="flex-1 p-6 lg:p-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-gray-600 mb-8">
              <Link href="#" className="hover:text-gray-900">
                Home
              </Link>
              <span className="text-lg">›</span>
              <Link href="#" className="hover:text-gray-900">
                Resources
              </Link>
            </nav>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Be There for Others Unit Plan</h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">
              In this 6-lesson unit, students will learn to recognize signs of mental health struggle and how to be there
              for others.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button className="bg-[#c97c54] hover:bg-[#b56b46] text-white flex items-center gap-2 px-6 py-6">
                Unit Introduction <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="bg-[#2a2723] hover:bg-[#1a1714] text-white border-0 flex items-center gap-2 px-6 py-6"
              >
                Download <Download className="h-5 w-5" />
              </Button>
            </div>

            {/* Key Concepts */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Concepts</h2>

              <div className="flex justify-between">
                <div className="max-w-2xl">
                  <p className="text-gray-600 mb-4">
                    Seeking Help, Accessing Resources, Stress Management, Signs of Struggle, Barriers, Active Listening,
                    Boundaries, Supporting Yourself, Supporting Others, Interpersonal Skills, Healthy Relationships,
                    Self-care
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-md">Grade 9-10</Badge>
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-md">6 Lessons</Badge>
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-md">1-2 Weeks</Badge>
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-md">
                      Healthy Living
                    </Badge>
                  </div>
                </div>

                {/* Media Icons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-gray-300">
                    <Video className="h-6 w-6 text-gray-700" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-gray-300">
                    <VideoIcon className="h-6 w-6 text-gray-700" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-gray-300">
                    <FileText className="h-6 w-6 text-gray-700" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image and Action Bar */}
          <div className="relative lg:w-2/5">
            {/* Background Image */}
            <div className="h-full w-full bg-[#d88c6a] relative overflow-hidden">
              <Image
                src="/header-1.jpg"
                alt="Brain with heart illustration"
                fill
                className="object-cover"
              />

              {/* Action Bar */}
              <div className="absolute right-0 top-1/3 flex flex-col gap-2">
                <Button variant="outline" size="icon" className="bg-[#1a1714] text-white border-0 h-16 w-16">
                  <Download className="h-6 w-6" />
                  <span className="text-xs mt-1">Download</span>
                </Button>
                <Button variant="outline" size="icon" className="bg-[#1a1714] text-white border-0 h-16 w-16">
                  <ThumbsUp className="h-6 w-6" />
                  <span className="text-xs mt-1">Like</span>
                </Button>
                <Button variant="outline" size="icon" className="bg-[#1a1714] text-white border-0 h-16 w-16">
                  <Share2 className="h-6 w-6" />
                  <span className="text-xs mt-1">Share</span>
                </Button>
              </div>
            </div>

            {/* Unit Plan Badge */}
            <div className="absolute top-0 right-0 bg-[#c97c54] text-white px-4 py-2">Unit Plan</div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ResourceHeader;
