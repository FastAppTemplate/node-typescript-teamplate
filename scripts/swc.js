const isDev = process.argv.includes("--dev");

import { swcDir } from "@swc/cli";
import fs from "node:fs";
import url from "node:url";
import path from "node:path";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "../dist");
fs.rm(distPath, { recursive: true }, () => {
  swcDir({
    cliOptions: {
      outDir: "./dist",
      filenames: ["./src", "__test__"],
      extensions: [".ts"],
      stripLeadingPaths: true,
      watch: isDev,
    },
    callbacks: {
      onSuccess: (e) => {
        console.log(e);
      },
      onFail: (e) => {
        console.log(e);
      },
      onWatchReady: () => {
        console.log("watch file change...");
      },
    },
  });
});
