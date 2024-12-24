'use client'

import Provider from "@/contexts/providers";
import Home from "./home";

export default function Page() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}
