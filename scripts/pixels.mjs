// Keeps a capture only when its decoded pixels changed, so a re-run that renders the same picture leaves the
// committed file (and the screenshot commit) alone even if the encoder produced different bytes.
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, rmSync } from "node:fs";

// Size, frame timing and an MD5 of every decoded RGBA frame (ffmpeg's framemd5 muxer), for PNG and GIF alike.
function pixels(file) {
  return execFileSync("ffmpeg", ["-loglevel", "error", "-i", file, "-map", "0:v", "-pix_fmt", "rgba", "-f", "framemd5", "-"], {
    encoding: "utf8",
  })
    .split("\n")
    .filter((line) => line && (!line.startsWith("#") || line.startsWith("#dimensions")))
    .join("\n");
}

// Moves `tmp` to `out` unless `out` already holds the same pixels (then `tmp` is dropped). Returns true if written.
export function writeIfChanged(tmp, out) {
  if (existsSync(out) && pixels(out) === pixels(tmp)) {
    rmSync(tmp);
    return false;
  }
  // Copy, not rename: the temporary file may sit on another file system.
  copyFileSync(tmp, out);
  rmSync(tmp);
  return true;
}
