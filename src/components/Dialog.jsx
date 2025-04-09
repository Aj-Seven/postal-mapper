import React from "react";

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-6 md:px-8 bg-black/50 backdrop-blur-sm"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 p-4 shadow-xl transition-all">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-0.5 right-1 inline-flex justify-center items-center rounded bg-none p-2.5 text-sm font-semibold border border-gray-300 dark:border-gray-700 text-red-500 hover:text-red-600 hover:bg-gray-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={onClose}
          aria-label="Close"
        >
          X
        </button>

        {/* Dialog Content */}
        <div className="w-full mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
