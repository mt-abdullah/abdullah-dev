// 1. We'll use a cleaner, more professional spinner.
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    // 2. The background is now semi-transparent with a modern blur effect.
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center 
                 bg-soft-white/80 backdrop-blur-sm`}
    >
      <ClipLoader
        // 3. The color now uses your professional theme's primary blue.
        color={"#163853"} // This is your --color-picto-primary
        speedMultiplier={1}
        size={60} // A slightly more refined size
      />
      
      {/* 4. Added text to improve the user experience. */}
      <p className="mt-4 text-lg font-semibold text-picto-primary">
        Loading Portfolio...
      </p>
    </div>
  );
};

export default Loading;