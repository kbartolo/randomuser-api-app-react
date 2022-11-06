import * as React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement: HTMLElement | null = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(<App />);
