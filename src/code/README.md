# Documentation examples

Keep shared examples in `entrypoints/<entrypoint>/`: `background`, `command`,
`offscreen`, and `service`. Group related files for a larger scenario in a
subdirectory, such as `entrypoints/service/screenshot/`. The folder follows
the documentation topic; a scenario can contain several entrypoint types.

Reference the same file from every documentation language with a code fence's
`file` attribute. Keep the displayed example filename in `title`; it describes
the reader's project, rather than this repository's snippet layout.

Examples with translated comments or strings belong in the corresponding
locale's documentation directory. The existing English Offscreen examples
are in `src/docs/en/guide/entrypoints/code/offscreen/`.

These files are documentation excerpts. They may depend on generated Addon Bone
contracts, other example files, or a package introduced in the accompanying text.

Keep TypeScript examples as `.ts` files. The local `tsconfig.json` uses `noCheck`
to disable type checking for these excerpts while preserving TypeScript
editing. The site's root configuration still checks application code and excludes
`src/code/`. Do not add mock framework types or install example dependencies just
to suppress editor errors.
