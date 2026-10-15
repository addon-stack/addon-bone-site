<!-- codebase-memory-mcp:start -->
# Codebase Knowledge Graph (codebase-memory-mcp)

This project uses codebase-memory-mcp to maintain a knowledge graph of the codebase.
ALWAYS prefer MCP graph tools over grep/glob/file-search for code discovery.

## Priority Order
1. `search_graph` — find functions, classes, routes, variables by pattern
2. `trace_path` — trace who calls a function or what it calls
3. `get_code_snippet` — read specific function/class source code
4. `query_graph` — run Cypher queries for complex patterns
5. `get_architecture` — high-level project summary

## When to fall back to grep/glob
- Searching for string literals, error messages, config values
- Searching non-code files (Dockerfiles, shell scripts, configs)
- When MCP tools return insufficient results

## Examples
- Find a handler: `search_graph(name_pattern=".*OrderHandler.*")`
- Who calls it: `trace_path(function_name="OrderHandler", direction="inbound")`
- Read source: `get_code_snippet(qualified_name="pkg/orders.OrderHandler")`
<!-- codebase-memory-mcp:end -->

# Documentation writing style

Apply these rules to all documentation prose, including introductions, guides,
option descriptions, limitations, examples, and debugging instructions.

Use practical, task-oriented technical prose: explain the framework as one
developer helping another understand a feature, choose an approach, and use it.
Keep the tone calm, direct, and precise.

## Explain through actions and outcomes

- Start with what the reader can do and when the feature is useful.
- Connect behavior to its consequence. When a rule affects implementation,
  explain what the reader should do about it.
- Use active sentences: name what the developer, Addon Bone, or the browser does.
- Address the reader directly when giving instructions. Use short paragraphs
  with one main idea and familiar, concrete words.
- Introduce technical terms with a useful explanation or example. Keep exact API
  identifiers, import paths, and option names wherever they help the reader act.
- Explain framework internals only when they affect usage, behavior, or diagnosis.
- Avoid hype, vague benefits, formal filler, and unexplained chains of technical
  terms. Do not replace precise conditions with broad or reassuring claims.

## Adapt the explanation to the section

- **Introduction:** purpose, when to choose the feature, and the basic way to use
  it. Leave detailed mechanics for the relevant sections.
- **Quick Start:** one small useful task, the required files, how to run it, and
  the observable result. State required permissions, assets, and dependencies.
  Choose a task that shows why the entrypoint is useful: access to an API from
  another context, shared behavior, or work owned by its lifecycle. Make that
  reason explicit. Keep the example self-contained, with no remote assets or
  external services required for the first result.
  For Service, use a content script that requests open-tab titles through a
  service. The service uses `queryTabs` from `adnbn/browser` and declares `tabs`;
  the content script displays the returned strings. Explain the content-script
  match scope separately from the `tabs` permission. Verify which contexts can
  use an API; Tabs API is also available to extension pages.
  In examples that combine entrypoints, use each entrypoint's own lifecycle API.
  For Content Script UI, fetch asynchronous data in `prepare` and return the UI
  value from synchronous `render`. Let the framework create and mount the
  container; choose a container tag declaratively when the output needs it.
- **Behavior and lifecycle:** condition, consequence, and the appropriate action.
  Explain browser concepts only as far as needed to use the feature correctly;
  link to official documentation for the broader platform model.
- **Options:** exact meaning, accepted values or type, default or omission
  behavior, and the effect of changing the option.
- **Limitations:** state the boundary explicitly, explain its practical effect,
  and give a supported approach when one exists.
- **Debugging:** start with the observed symptom, then give a concrete check and
  the corresponding correction or next step.

## Keep prose and examples consistent

- Use one documentation text for developers and agents. Make names, defaults,
  ordering, conditions, and exceptions explicit so both can act on the same text.
- In entrypoint Guides, use the `primary` badge for the main entrypoint option
  that receives a bare `export default` value in the named-export format. Keep
  this mapping explicit beside the declaration examples; do not call the badge
  `target` or `prime`. Do not use `primary` badges in API reference pages.
- In named-export examples with a primary handler or factory, declare options
  with `export const` and export the function directly as an arrow function:
  `export default () => ...` or `export default async () => ...`. Do not add an
  intermediate handler variable or import a handler type just to annotate the
  example. Add inline parameter types only when the example needs them.
- For View-based React entrypoints, pass an existing component directly when
  it already provides the required UI: use `render: SearchForm` with a definition
  helper or `export default SearchForm` with named exports. Do not wrap it in
  `() => <SearchForm />` unless the wrapper supplies props, composes content, or
  adds logic needed by the example.
- Use braces for every `if`, `else`, and loop body in executable code examples,
  even for a single `return` or `continue`. Put the statement on its own line
  inside the block; do not write one-line conditional returns or loop bodies.
  Keep `else if` chains without an extra enclosing block.
- Declare local helper functions in executable examples as `const` arrow
  functions, using `async` when needed, such as `const save = async (...) => { ... };`.
  Preserve object-method syntax when showing an API method, and actual
  `declare function` signatures in API reference contracts.
- Put a concise explanation next to the code it explains. Show necessary setup
  and the result; do not make the reader infer missing files or resources.
- Keep primary examples and alternative implementations visible. Use tabs for
  related files or alternatives and `Details` for large reused option groups.
- Label declaration-format tabs by the syntax they show. In Russian, use
  `Через defineBackground` and `Именованные экспорты`; in English, use
  `Using defineBackground` and `Named exports`. Substitute the actual helper
  name, such as `defineService` or `defineCommand`. Do not label these syntax
  alternatives `Recommended` or `Advanced`; explain any recommendation in prose.
- Label file and build-output tabs by their role, so readers can tell which
  files they write and which artifacts Addon Bone generates. In Russian, use
  `Код команды`, `Код сервиса`, `Код content script`, `Файл локализации`, and
  `Сгенерированный манифест`; in English, use `Command source`, `Service source`,
  `Content script source`, `Locale file`, and `Generated manifest`.
  For generated manifests by version, use `Сгенерированный Manifest V3` /
  `Generated Manifest V3` and the corresponding V2 labels. For source-code
  implementations by version, use `Код сервиса: Manifest V3` /
  `Service source: Manifest V3`, substituting the actual entrypoint and version.
  Do not use a bare `Manifest V2` or `Manifest V3` label for either role.
  Briefly introduce what the framework generates beside output examples;
  keep the actual filename in the code-fence title.
- Give source and configuration code fences a file title. Use Addon Bone public
  aliases such as `adnbn/browser` and `adnbn/storage` where wrappers exist.
- Order imports in project code and examples by group: React first, Addon Bone
  and its public aliases next, then other dependencies (including Node.js built-ins),
  styles and assets, and local modules. Separate these groups with one blank line.
  Keep this order synchronized with the Biome import-group configuration.
- Use examples that reflect a useful application task. Show imported components
  or functions doing real work; do not add a separate module just to export a
  constant used as placeholder content.
- Do not leave an empty final line in any displayed code example, in any
  documentation locale. End external snippets at the final code character,
  without a terminal newline that creates an empty rendered line. Do not leave
  blank lines before the closing fence of inline snippets. Recheck the rendered
  final line after formatting examples.
- Keep `trailingNewline: false` for snippet files in Biome. Preserve the normal
  final newline in project source and configuration files. Run `npm run check`
  to validate snippet endings, including formats that Biome does not process.
- Preserve exact framework contracts in API declaration snippets. Scope lint
  exceptions for unused standalone declarations, `any`, `{}`, and callable
  `void` unions to `src/code/api/**/contracts/**`; keep formatting and all other
  rules. Keep executable API examples under the normal lint rules.
  In generated HTML snippets, allow an omitted `lang` attribute when the
  framework output omits it; do not invent generated attributes for the linter.
  Executable examples retain the normal lint rules. Use Biome's `reactClassic`
  JSX runtime for framework React examples; the site uses `react-jsx`.
- Keep `npm run check` and the pre-push hook read-only. Use `npm run check:fix`
  for automatic corrections; the pre-commit hook fixes only staged files.
- Use `transformerNotationHighlight` from `@shikijs/transformers` to highlight
  example lines. Mark only the lines that need emphasis with `[!code highlight]`
  comments in the snippet's language. Do not use the deprecated
  `transformerCompatibleMetaHighlight` or numeric code-fence highlight ranges.
  Keep these annotation comments out of displayed code and generated Markdown,
  including `llms-full.txt`; verify both outputs after changing highlights.
- Extract examples shared across documentation languages into separate files
  under `src/code/`, regardless of their length, and reuse the same file through
  the code fence's `file` attribute in every locale. For entrypoint Guide
  examples, use `src/code/entrypoints/<entrypoint>/`. For API reference snippets,
  mirror the reference page under `src/code/api/`: root `adnbn` topics belong in
  `api/adnbn/<topic>/`, and public subpaths in `api/<subpath>/`. Keep exact API
  declarations in `contracts/` and usage or generated-output examples in
  `examples/`. Choose the topic being explained, even when an example uses
  another API: CSP examples using `definePage` belong to `api/adnbn/csp/`.
  This includes source code, configuration, generated manifests, locale-file
  examples, and file trees. Keep the root of `src/code/` for guidance and snippet
  configuration. Group related source files and their generated output in one
  scenario directory, such as `entrypoints/service/screenshot/` or
  `api/adnbn/csp/examples/image/`. Reuse an existing Guide example from an API
  page when it already explains the same behavior; do not duplicate it for the
  directory layout. Remove obsolete examples after verifying that no
  documentation page or source file references them.
- Create separate versions only when the example itself contains localized
  content that differs between documentation languages, such as comments,
  user-facing strings, or translation values. Translated surrounding prose,
  tab labels, and code-fence titles do not justify duplicating an example.
- Keep shared TypeScript examples as `.ts` or `.tsx` files in the `src/code/tsconfig.json`
  project, which uses `noCheck` for documentation excerpts. Keep `src/code/`
  excluded from the site's typecheck. Do not add mock framework types, install
  example dependencies, or add suppression comments to displayed code just to
  remove editor diagnostics. Preserve existing localized `.ts.txt` snippets.
- Reuse common page-rendering and HTML explanations for Page, Popup, Sidebar,
  Offscreen, Sandbox, History, New Tab, and Options. Use `Опции страницы` for
  the Russian View option group. Keep each entrypoint's own lifecycle and
  primary-option mapping explicit; do not apply these shared lifecycle blocks
  to Content Script, which has its own context and mounting API.
- Write each entrypoint Guide as a self-contained instruction. Describe shared
  functionality directly for the current entrypoint; do not explain it through
  comparisons such as "the same as Page" or "as in another entrypoint". Reuse
  shared components and snippets without adding these comparisons to the prose.
  Do not send readers to Page for shared View features such as rendering,
  containers, styles, HTML templates, or CSP merely because their implementation
  is shared. Explain the features and show the needed examples in the current
  Guide, reusing shared fragments where appropriate. Keep links to other
  entrypoints for choosing or combining distinct features. When the current
  Guide already covers a topic, link to its local section. Check the complete
  rendered text, including reused option components, for these references.
- In every View-based entrypoint Guide with HTML-template support, add a short
  tip callout after the custom-template explanation recommending that related
  files stay in one directory. Show a supported entrypoint directory containing
  `index.ts` (or `index.tsx` for React), `template.html`, `styles.scss`, and any
  related modules or assets. Explain the relative `template` path beside the
  tree. Present this as optional organization advice, not a required layout.
  Keep the callout focused on file organization; do not add `?asis` or global
  selector instructions there.
- Use SCSS with CSS Modules as the default for page UI style examples. Explain
  other styling modes only when the documented task needs them.
- Show Vanilla and React examples for page UI. Explain the current file-extension
  mapping and required dependencies; add plugin-provided adapters only after
  their implementation is verified in the framework.
- Preserve technical facts when simplifying wording: runtime context, async
  behavior, permissions, serialization limits, filters, and generated output.
- Verify framework behavior against the current sibling `addon-bone` source and
  browser constraints against official documentation. Distinguish framework
  behavior, browser requirements, and recommendations.

## Write API reference pages

These rules apply to the API reference and refine the general documentation
and table-of-contents guidance in this file.

- Use one page per public module or agreed group of closely related APIs.
  Follow the framework's public export boundaries, including `src/main` for
  the root `adnbn` export. Keep related functions, interfaces, and types on the
  same page; do not create a separate page for every symbol.
- Start with an H1 naming the subject, such as `Background API` or the natural
  localized equivalent of `Environment API`. Add a concise purpose and the
  public import path. When a corresponding Guide exists, link to it in this
  introduction and explain what it covers, such as usage examples and lifecycle.
  For example, Background API links to the Background Guide. Shared-contract
  pages without a relevant Guide do not need an unrelated Guide link.
- Follow the introduction with a table of symbols, their kinds, and purposes.
  Link each symbol to its section. Use an Export column only for symbols
  publicly available from the stated import path. A page for an internal shared
  contract may use a Type column instead; explicitly state that the contract
  cannot be imported directly from that public path.
- Give each independent symbol a code-formatted H2 and a `PropertyBadge` for
  its kind, such as `function`, `interface`, `type`, or `enum`. Keep related
  symbols together and match the section order to the introductory table.
  Do not introduce umbrella Functions, Types, or Interfaces sections.
- Document functions through their purpose, signature, parameters, and return
  value. Add invocation conditions, asynchronous behavior, errors, and other
  details when they affect usage. Show callable exports as `declare function`,
  preserving the actual generic parameters, parameter types, optionality, and
  return type rather than copying an implementation's `const` arrow syntax.
- Preserve real interface inheritance and type composition. Describe own
  fields beside the interface and link inherited shared fields to their owning
  contract page. Do not flatten inherited fields into an invented declaration.
  Show internal aliases only when they clarify the contract, identify them as
  non-public, and exclude them from public-export tables.
- Give each documented field a code-formatted H3 with a stable explicit anchor.
  State its type, accepted values, omission behavior, and effect. Explicitly
  label required fields or parameters only; do not repeat an Optional field
  label. Explain meaningful differences between omission, empty values, `false`,
  and defaults, including precedence or merging when applicable.
- For type aliases, show the declaration and meaning; for callable types, also
  explain parameters and results. For enums, preserve exact member names and
  values and explain their purposes and significant distinctions. Keep `extends`
  on the interface declaration's first line. Compound type expressions may
  span multiple lines for readability.
- Include symbol H2s and field H3s in the page navigation and search index.
  Use `DocHeading` with `level={3}`, an explicit `id`, and `toc={true}` for field
  headings. Supporting subsections, such as Inherited options, may use
  `toc={false}`; they must remain searchable. Preserve existing anchor IDs.
- Link framework types and enums mentioned in parameter, result, and field
  descriptions to their existing reference sections. Use code formatting for
  linked identifiers. Keep standard syntax highlighting in code blocks; do not
  add type-preview popups, Twoslash, or generated TypeDoc reference output.
- Keep API pages compact and focused on contracts. Put complete scenarios,
  step-by-step instructions, and lifecycle walkthroughs in Guides. Exact
  contracts may appear in both sections. Add an API example only when it
  clarifies a contract detail; do not repeat a Guide's full example by default.
- Apply the shared-snippet, source-verification, known-bug, and validation rules
  in this file to API pages as well. Verify reference links, anchors, search
  entries, rendered navigation, and generated Markdown after composition changes.

## Document current behavior, including bugs

- Describe verified behavior in the current local framework, including known
  bugs. Do not replace an observed defect with the intended behavior or omit it
  to make the documentation look complete.
- When a bug affects usage, add a visible warning beside the affected feature.
  Identify it as a framework bug, state when it occurs and what the reader will
  observe, and give a verified workaround when one exists. Keep browser
  restrictions and intentional framework limitations distinct from bugs.
- Report the affected source and reproduction evidence to the documentation
  author so the issue can be found and fixed in the framework. Confirm a defect
  before labeling it as a bug; investigate uncertain behavior first.
- After a local framework fix, verify the implementation and affected examples
  or generated output, then update the prose and option descriptions to the
  corrected behavior. Remove warnings and workarounds that no longer apply.
  Document the current result without retaining the history of the fixed bug
  unless that history is needed for migration.

## Organize the page table of contents

- Keep the right-hand "On this page" navigation mostly linear. Use Markdown H2
  headings for the main topics in reading order, with short labels that describe
  what the reader will find.
- Include nested entries only for substantial, self-contained topics that
  readers may need to find directly, such as integrations with React or Vue
  that have their own setup and usage instructions. API reference fields are
  an explicit exception: include their H3 headings beneath the owning symbol.
- Keep useful subheadings in the article without adding each option group,
  syntax detail, example variant, or supporting explanation to the navigation.
  Use `DocHeading` from `@components/DocHeading` with the appropriate `level`,
  an explicit `id`, and `toc={false}` for these headings. For API field headings,
  follow the API reference rules above and use `toc={true}`.
- Preserve the semantic heading hierarchy. Promote a subsection to H2 only
  when it is a main topic in its own right; do not change heading levels just
  to flatten the menu. Leave selected Markdown H3 headings in the navigation
  when the substantial-topic exception above applies.
- Preserve existing anchor IDs when replacing Markdown headings with
  `DocHeading`, so links to those sections continue to work. Excluding a
  heading from the navigation must keep it visible in the article and in the
  generated Markdown.
- Check the rendered table of contents after changing headings: verify labels,
  reading order, selected nested entries, and links to the corresponding sections.
  Apply the same navigation principles to every documentation locale.

For documentation changes, run `npm run typecheck` and `npm run build`. Inspect
the affected rendered page and generated Markdown when changing MDX composition.
