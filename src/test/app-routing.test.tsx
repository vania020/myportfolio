import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each([
    ["/about", "/about"],
    ["/projects", "/projects/"],
    ["/projects/seekerbot", "/projects/$slug"],
    ["/projects/hydroponics", "/projects/$slug"],
    ["/communities/quantumhub", "/communities/$slug"],
  ])("matches %s with %s", (url, routeId) => {
    const router = createRouter({ routeTree });
    expect(router.matchRoutes(url).at(-1)?.routeId).toBe(routeId);
  });

  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
