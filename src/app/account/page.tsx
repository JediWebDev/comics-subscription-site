import Image from "next/image";

export default function AccountPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Manage Your Account</h2>

      {/* Avatar / Profile Picture */}
      <section className="border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Profile Picture</h3>
        <div className="flex items-center gap-4">
          <Image
            src="/user.jpg"
            alt="User Avatar"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Upload New Image</button>
        </div>
      </section>

      {/* Contact Info */}
      <section className="border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <form className="grid gap-4">
          <div>
            <label className="block font-medium">Name</label>
            <input type="text" className="border rounded p-2 w-full" placeholder="John Doe" />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input type="email" className="border rounded p-2 w-full" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block font-medium">Phone</label>
            <input type="tel" className="border rounded p-2 w-full" placeholder="(555) 555-1234" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-fit">Save</button>
        </form>
      </section>

      {/* Subscription Info */}
      <section className="border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Subscription</h3>
        <p className="mb-2">Plan: <span className="font-bold">Silver</span></p>
        <p className="mb-2">Next Billing Date: <span className="font-bold">08/01/2025</span></p>
        <div className="flex gap-2 mt-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded">Resume Subscription</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">Pause Subscription</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded">Cancel Subscription</button>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Visa •••• 1234</li>
          <li>Mastercard •••• 5678</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Payment Method</button>
      </section>

      {/* Support Section (Placeholder for an AI chatbot, FAQ, or support contact) */}
      <section className="border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
        <p className="mb-2">Contact our support team or try our AI chatbot for quick answers.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Launch Chatbot</button>
      </section>
    </div>
  );
}