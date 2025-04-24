import { notFound } from "next/navigation";
import { resources } from "@/data/resources";
import ResourceLayout from "./ResourceLayout";

type Params = Promise<{ slug: string }>

export default async function ResourceDetails(
  props
: { params: Params }) {

  const params = await props.params;
  const slug = decodeURIComponent(params.slug);
  const resource = resources.find((resource) => resource.slug === slug);

  if (!resource) return notFound();
  
  return (
    <ResourceLayout resource={resource}/>
  );
}
