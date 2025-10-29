import { useEffect, useState } from "react";

export default function Body({ children }) {
  return (
    <>
      <div className="m-4 mb-10 p-2 mx-auto w-full sm:w-3/4 flex justify-center">
        {children}
      </div>
    </>
  );
}
