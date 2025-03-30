export default function PlanCard({ name, price, features }: { name: string, price: string, features: string[] }) {
    return (
      <div className="border p-6 rounded-lg shadow-sm text-center">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-lg font-semibold text-blue-600">{price}</p>
        <ul className="mt-4 space-y-1 text-sm">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
      </div>
    );
  }