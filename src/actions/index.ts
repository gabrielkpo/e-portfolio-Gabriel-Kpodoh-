import { categories } from "./categories";

// Export actions as a regular object. Avoid exporting `server` which signals
// server-rendered pages and requires an adapter. For a static site we keep
// these as build-time helpers or client-callable actions.
export const actions = { categories };