import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-center p-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          404 - Resource Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn’t find the resource you were looking for.
        </p>
        <Button variant="primary" asChild>
          <Link href="/">
            Back to Home Page
          </Link>
        </Button>
      </div>
    </div>
  );
}
