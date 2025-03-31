import PlanCard from "@/components/PlanCard";

const plans = [
  { name: "Bronze", price: "$5/mo", features: ["unlocks 3 comics/month, unlimited gallery and demos to games"] },
  { name: "Silver", price: "$15/mo", features: ["unlocks 7 comics/month, unlimited gallery and limited games"] },
  { name: "Gold", price: "$30/mo", features: ["unlocks unlimited comics, gallery and games"] },
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