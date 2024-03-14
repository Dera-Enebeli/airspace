import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center text-sm md:text-base text-slate-400 p-4">
      &copy{new Date().getFullYear()}Airspace. All rights reserved
    </footer>
  );
}
