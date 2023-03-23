import { Layout, Page } from "@interval/sdk";

export default new Page({
  name: "Page A",
  handler: async () => {
    return new Layout({
      title: "Page A",
      children: [],
    });
  },
  routes: {
    test: {
      name: "Route A",
      handler: async () => {
        // Usual action code, just nested within a route
      },
    },
  },
});
