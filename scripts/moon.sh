#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
version=$(cat .moon-version)

if [[ -n "${MOON_BIN:-}" ]]; then
  moon_bin=$(command -v "$MOON_BIN")
elif command -v moon >/dev/null && "$(dirname "$(command -v moon)")/moonc" -v 2>/dev/null | grep -Fq "v$version "; then
  moon_bin=$(command -v moon)
else
  export MOON_HOME="$PWD/.cache/moon/$version"
  # The installer finds moon on PATH after installation and skips shell edits.
  export PATH="$MOON_HOME/bin:$PATH"
  if [[ ! -f "$MOON_HOME/.ready" ]]; then
    mkdir -p "$MOON_HOME"
    installer=$(mktemp "$MOON_HOME/install.XXXXXX")
    trap 'rm -f "$installer"' EXIT
    curl -fsSL https://cli.moonbitlang.com/install/unix.sh -o "$installer"
    bash "$installer" "$version"
    touch "$MOON_HOME/.ready"
    rm -f "$installer"
    trap - EXIT
  fi
  moon_bin="$MOON_HOME/bin/moon"
fi

export MOON_BIN="$(cd "$(dirname "$moon_bin")" && pwd)/$(basename "$moon_bin")"
export MOON_HOME="$(dirname "$(dirname "$MOON_BIN")")"
export PATH="$MOON_HOME/bin:$PATH"
if ! "$MOON_HOME/bin/moonc" -v | grep -Fq "v$version "; then
  echo "Expected MoonBit $version; check MOON_BIN or .moon-version." >&2
  exit 1
fi
exec "$MOON_BIN" "$@"
