import React, { ReactNode } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface ClickableCardProps {
  href: string,
  title: string,
  description: string
  icon: ReactNode
}

function ClickableCard({ 
  href,
  title,
  description,
  icon 
}: ClickableCardProps) {
  return (
    <Link href={href}>
      <Card className="shadow-lg border-0 hover:bg-gray-300">
        <CardHeader>

          <div className="flex gap-2 items-center justify-left">

            { icon }

            <CardTitle className={`
              font-bold text-lg text-brand-primary-700
              tablet:text-2xl
            `}>{title}</CardTitle>

            <ArrowRightIcon width={14} />

          </div>

          <CardDescription className={`
              tablet:text-lg
          `}>{description}</CardDescription>

        </CardHeader>
      </Card>
    </Link>
  );
}

export default ClickableCard;
