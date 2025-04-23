import slugify from "@/components/utils/slugify";

export const resourceTypes = [
    "Government Service",
    "Healthcare",
    "Event"
] as const;
  
export type ResourceType = typeof resourceTypes[number];
  
export type ResourceCardProps = {
    title: string,
    slug?: string
    type: ResourceType,
    subjects: string[],
    description: string,
};

const rawResources: ResourceCardProps[] = [
    {
        title: "Test",
        type: "Healthcare",
        subjects: ["Elderly Care", "Subsidies"],
        description: "Subsidized medical plans for senior citizens.",
    },
    {
        title: "MyCare Seniors Program",
        type: "Healthcare",
        subjects: ["Elderly Care", "Subsidies"],
        description: "Subsidized medical plans for senior citizens.",
    },
    {
        title: "Apply for Senior Citizen ID",
        type: "Government Service",
        subjects: ["Welfare"],
        description: "Get discounts and priority access to services by registering for a senior citizen ID.",
    },
    {
        title: "Free Health Checkup for Seniors",
        type: "Healthcare",
        subjects: ["Mental Health"],
        description: "Quarterly free health screening for senior citizens, including blood pressure, cholesterol, and diabetes checks.",
    },
    {
        title: "Low-Cost Mental Health Support",
        type: "Healthcare",
        subjects: ["Mental Health"],
        description: "Get access to affordable therapy and counseling with certified mental health professionals.",
    },
    {
        title: "Senior Fitness & Wellness Workshop",
        type: "Event",
        subjects: ["Workshop"],
        description: "Join a free fitness session followed by wellness tips for staying active and healthy.",
    },
]

export const resources: ResourceCardProps[] = rawResources.map((resource) => ({
    ...resource,
    slug: slugify(resource.title),
}));