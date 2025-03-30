import PlanCard from "@/components/PlanCard";

const plans = [
  { name: "Bronze", price: "$5/mo", features: ["3 images/month"] },
  { name: "Silver", price: "$15/mo", features: ["7 images/month"] },
  { name: "Gold", price: "$30/mo", features: ["Unlimited images"] },
];

export default function SubscribePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Choose Your Plan</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
        ))}
      </div>
    </div>
  );
}

// components/Navbar.tsx
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-4 border-b">
      <Link href="/" className="text-xl font-bold">MyGallery</Link>
      <div className="flex gap-4 items-center">
        <Link href="/gallery">Gallery</Link>
        <Link href="/subscribe">Subscribe</Link>
        <Link href="/account">
          <Avatar>
            <AvatarImage src="/user.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </nav>
  );
}