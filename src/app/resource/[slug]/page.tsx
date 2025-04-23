import { notFound } from "next/navigation";
import { resources } from "@/data/resources";
import ResourceLayout from "./ResourceLayout";

type ResourceDetailsProps = {
  params: { 
    slug: string 
  };
};

export default function ResourceDetails({ 
  params 
}: ResourceDetailsProps) {

  const resource = resources.find((resource) => resource.slug === params.slug);

  if (!resource) return notFound();
  
  return (
    <ResourceLayout />
  );
}
