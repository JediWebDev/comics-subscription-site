"use client";

// Placeholder membership check.
// In real usage, fetch membership info from your authentication/DB.
function getUserMembership() {
  // For demonstration:
  // return "bronze"; // won't have access
  // return "silver"; // has access
  return "silver"; // Modify this or make dynamic
}

export default function GamesPage() {
  const membership = getUserMembership();

  // Only silver & gold can access
  if (membership !== "silver" && membership !== "gold") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Games</h2>
        <p>You do not have access to this page. Please upgrade to Silver or Gold!</p>
      </div>
    );
  }

  // If silver or gold, render the RPG Maker game.
  // This example uses an iframe pointing to a local folder under /public/games/
  // where your index.html for RPG Maker MV is located.

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Play Our RPG Maker MV Game</h2>
      <p className="mb-4">
        Thanks for subscribing! As a {membership.toUpperCase()} member, you can play this game directly in your browser.
      </p>
      <div className="w-full h-[800px] border-2 border-gray-300 rounded">
        <iframe
          src="/games/index.html"
          width="100%"
          height="100%"
          title="RPG Maker MV Game"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
