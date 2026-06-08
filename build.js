const fs = require("fs");
const path = require("path");

const root = __dirname;
const outDir = path.join(root, "build");

function copyRecursive(source, destination) {
  const stats = fs.statSync(source);

  if (stats.isDirectory()) {
    fs.mkdirSync(destination, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(destination, entry));
    }
    return;
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

fs.rmSync(outDir, { recursive: true, force: true });
copyRecursive(path.join(root, "index.html"), path.join(outDir, "index.html"));
copyRecursive(path.join(root, "styles.css"), path.join(outDir, "styles.css"));
copyRecursive(path.join(root, "assets"), path.join(outDir, "assets"));

console.log("Static portfolio built to build/");
