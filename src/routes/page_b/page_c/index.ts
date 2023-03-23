import { Layout, Page } from "@interval/sdk";

export default new Page({
  name: "Page C",
  handler: async () => {
    return new Layout({
      title: "Page C",
      children: [],
    });
  },
  routes: {
    test: {
      name: "Route B",
      handler: async () => {
        // Usual action code, just nested within a route
      },
    },
  },
});
