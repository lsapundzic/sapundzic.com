"use client";

import Serbian from "./components/serbian";
import German from "./components/german";
import Slovenian from "./components/slovenian";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState(0);

  let langComponent;
  let langButton;

  if (lang % 3 === 0) {
    langComponent = <Serbian />;
    langButton = "Deutsch";
  } else if (lang % 3 === 1) {
    langComponent = <German />;
    langButton = "Slovenščina";
  } else {
    langComponent = <Slovenian />;
    langButton = "Srpski";
  }

  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            {langComponent}
            <button
              className="btn btn-primary"
              onClick={() => setLang(lang + 1)}
            >
              {langButton}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
