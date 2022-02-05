import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@wallace/navbar",
  app: () => System.import("@wallace/navbar"),
  activeWhen: () => true
});

registerApplication({
  name: "@wallace/app",
  app: () => System.import("@wallace/app"),
  activeWhen: ["/app"]
});

registerApplication({
  name: "@wallace/app2",
  app: () => System.import("@wallace/app2"),
  activeWhen: ["/app2"]
});

start({
  urlRerouteOnly: true,
});
