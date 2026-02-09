import React, { Suspense } from "react";
import ErrorBoundary from "../../utils/ErrorBoundary";

const SafeCanvasWrapper = ({ children, className }) => {
  return (
    <div className={`w-full h-full ${className || ""}`}>
      <ErrorBoundary
        fallback={(error) => (
          <div className="w-full h-full flex flex-col justify-center items-center text-white/20 p-4 text-center">
            <p className="font-bold">3D Content Disabled</p>
            <p className="text-xs mt-2 text-red-400">{error?.message || "Unknown Error"}</p>
          </div>
        )}
      >
        <Suspense
          fallback={
            <div className="w-full h-full flex justify-center items-center">
              Loading 3D...
            </div>
          }
        >
          {children}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default SafeCanvasWrapper;
