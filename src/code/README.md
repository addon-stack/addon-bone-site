# Documentation examples

Choose a directory by the documentation topic that owns the snippet:

- `entrypoints/<entrypoint>/` contains examples for entrypoint Guides, such as
  `entrypoints/service/screenshot/`.
- `api/adnbn/<topic>/` contains snippets for a topic exported from `adnbn`, such
  as `api/adnbn/sidebar/`.
- `api/<subpath>/` contains snippets for a public subpath, such as
  `api/sandbox/` for `adnbn/sandbox`. This is separate from the Sandbox
  declarations exported from `adnbn` in `api/adnbn/sandbox/`.

Within an API topic, put exact signatures, interfaces, types, enums, and
constants in `contracts/`. Put usage examples and generated artifacts in
`examples/`. Group related source files and their output in a scenario
directory, such as `api/adnbn/csp/examples/image/` with a Page declaration and
its generated Manifest V2 and V3 fragments. A single-file example can live
directly in `examples/`.

The topic takes precedence over the helper used in an example. A CSP example
using `definePage` belongs to `api/adnbn/csp/examples/`; HTML configuration
using `defineConfig` belongs to `api/adnbn/html/examples/`.

Reuse the same example when a Guide and API page explain the same behavior.
Keep it at its owning topic rather than copying it into both directory trees.
Likewise, reuse a scenario's generated output when several sections display it.
Keep only this guide and snippet configuration files at the root of `src/code/`.

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

Biome permits standalone and exact framework declarations only under
`api/**/contracts/`. Executable examples retain the normal lint rules. Snippets
must end at their final code character, without a terminal newline; README and
configuration files keep their normal final newline.

When moving snippets, update their `file` references without changing the
displayed `title`, which belongs to the reader's project. Preserve relative
imports within scenarios. Run `npm run check`, `npm run test:tooling`,
`npm run typecheck`, and `npm run build`; compare generated Markdown and inspect
the affected pages to confirm that their examples still render as before.
