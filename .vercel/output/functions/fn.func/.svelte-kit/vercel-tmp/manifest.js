export const manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: new Set(["favicon.png", "models/bust.gltf"]),
  mimeTypes: { ".png": "image/png", ".gltf": "model/gltf+json" },
  _: {
    client: {
      start: {
        file: "_app/immutable/entry/start.e647ceee.js",
        imports: [
          "_app/immutable/entry/start.e647ceee.js",
          "_app/immutable/chunks/index.7ab02cb4.js",
          "_app/immutable/chunks/singletons.1c3b3aa0.js",
          "_app/immutable/chunks/index.debdc600.js",
        ],
        stylesheets: [],
        fonts: [],
      },
      app: {
        file: "_app/immutable/entry/app.cd2863a9.js",
        imports: [
          "_app/immutable/entry/app.cd2863a9.js",
          "_app/immutable/chunks/index.7ab02cb4.js",
        ],
        stylesheets: [],
        fonts: [],
      },
    },
    nodes: [
      () => import("../output/server/nodes/0.js"),
      () => import("../output/server/nodes/1.js"),
      () => import("../output/server/nodes/2.js"),
    ],
    routes: [
      {
        id: "/",
        pattern: /^\/$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null,
      },
    ],
    matchers: async () => {
      return {};
    },
  },
};
