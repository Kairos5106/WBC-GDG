export type ResourceCardProps = {
    title: string
    type: "Government Service" | "Healthcare" | "Event"
    subjects: string[]
    description: string
  }

export const resources: ResourceCardProps[] = [
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