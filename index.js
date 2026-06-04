const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = {
  id: "community.hindi.addon",
  version: "1.0.0",
  name: "Hindi Streamer",
  resources: ["stream"],
  types: ["movie", "series"],
  idPrefixes: ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler((args) => {
  return Promise.resolve({ streams: [] });
});

serveHTTP(builder.getInterface(), { port: process.env.PORT || 3000 });
