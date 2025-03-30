import PlanCard from "@/components/PlanCard";

const plans = [
  { name: "Bronze", price: "$5/mo", features: ["3 images/month"] },
  { name: "Silver", price: "$15/mo", features: ["7 images/month"] },
  { name: "Gold", price: "$30/mo", features: ["Unlimited images"] },
];

export function SubscribePage() {
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

export default SubscribePage;