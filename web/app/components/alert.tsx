import { useEffect, useState } from 'react';

function Alert({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start the animation when the component mounts
    setIsVisible(true);

    // Automatically close the alert after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 1000); // Wait for the animation to finish before calling onClose
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [onClose]);

  return (
    <div className={`relative z-50 ${isVisible ? 'animate-alert-in' : 'animate-alert-out'}`}>
      <div className="absolute top-0 left-0 w-full">
        <div className="min-w-40 max-w-40 min-h-9 max-h-9 px-4 bg-brandAccent2 text-white rounded-2xl flex flex-row gap-2 items-center">
          {message}
        </div>
      </div>
    </div>
  );
}

export default Alert;