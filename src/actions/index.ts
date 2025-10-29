import { categories } from "./categories";

// Export actions as a regular object. Avoid exporting `server` which signals
// server-rendered pages and requires an adapter. For a static site we keep
// these as build-time helpers or client-callable actions.
export const actions = { categories };

// Some parts of Astro (virtual entrypoints) expect a `server` export. Re-export
// `actions` as `server` to satisfy those imports while keeping the logic
// unchanged.
export const server = actions;