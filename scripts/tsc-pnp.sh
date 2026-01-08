#!/bin/bash
# TypeScript compiler wrapper for Yarn PnP
exec yarn node .yarn/sdks/typescript/lib/tsc.js "$@"

