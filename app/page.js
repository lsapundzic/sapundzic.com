"use client";

import Serbian from "./components/serbian";
import German from "./components/german";
import Slovenian from "./components/slovenian";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState(0);

  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <button
              className="btn btn-primary"
              onClick={() => setLang(lang + 1)}
            >
              {lang}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
