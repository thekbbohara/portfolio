import Image from "next/image";

export const OfflineCard = () => {
  const getTimeBasedActivity = () => {
    const hours = new Date().getHours();

    if (hours >= 0 && hours < 6) return "Sleeping 🛌";
    if (hours >= 11 && hours < 12) return "Eating brunch 🍳";
    if (hours >= 15 && hours < 16) return "Lunching 🍔";
    if (hours >= 18 && hours < 22) return "Dinner time 🍝";
    // return " 🌌"; // Default status for all other times
    // return "It's a secret 🎥"; // Default status for all other times
    return "Wandering between worlds 🌌";
  };

  const activity = getTimeBasedActivity();

  return (
    // <div
    //   className={cn(
    //     "relative max-w-96 max-h-[70vh] flex flex-col items-center",
    //     className,
    //   )}
    // >
    //   {/* Background Highlights */}
    //   <div className="pointer-events-none absolute -z-10 w-[70vw] h-[50vw] max-w-[300px] bg-gray-500 blur-3xl opacity-20 transform -rotate-6 -top-12 -left-16"></div>
    //   <div className="pointer-events-none absolute -z-10 w-[90vw] h-[30vw] max-w-[400px] bg-gray-700 blur-3xl opacity-20 transform rotate-6 -bottom-8 -right-12"></div>

    //   {/* Status Card */}
    <div
      id="status-card"
      className="flex flex-col bg-gray-900 text-white p-4 w-80 rounded-lg shadow-lg mx-auto"
    >
      {/* Header */}
      <header className="text-s3 font-semibold mb-4">
        &gt; Currently Offline
      </header>

      {/* Content */}
      <div className="flex gap-4 items-center">
        {/* Icon */}
        <Image
          src="/assets/offline.png"
          width={48}
          height={48}
          alt="offline-icon"
          className="w-8 h-8"
        />

        {/* Info */}
        <div className="flex flex-col leading-tight">
          <span className="text-s4 font-medium">{activity}</span>
          <span className="text-xs text-gray-400">I{"'"}ll be back soon!</span>
        </div>
      </div>
    </div>
    // </div>
  );
};
