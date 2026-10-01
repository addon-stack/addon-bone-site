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
- Use the `primary` badge for the main entrypoint option that receives a bare
  `export default` value in the named-export format. Keep this mapping explicit
  beside the declaration examples; do not call the badge `target` or `prime`.
- Put a concise explanation next to the code it explains. Show necessary setup
  and the result; do not make the reader infer missing files or resources.
- Keep primary examples and alternative implementations visible. Use tabs for
  related files or alternatives and `Details` for large reused option groups.
- Give source and configuration code fences a file title. Use Addon Bone public
  aliases such as `adnbn/browser` and `adnbn/storage` where wrappers exist.
- Preserve technical facts when simplifying wording: runtime context, async
  behavior, permissions, serialization limits, filters, and generated output.
- Verify framework behavior against the current sibling `addon-bone` source and
  browser constraints against official documentation. Distinguish framework
  behavior, browser requirements, and recommendations.

## Organize the page table of contents

- Keep the right-hand "On this page" navigation mostly linear. Use Markdown H2
  headings for the main topics in reading order, with short labels that describe
  what the reader will find.
- Include nested entries only for substantial, self-contained topics that
  readers may need to find directly, such as integrations with React or Vue
  that have their own setup and usage instructions.
- Keep useful subheadings in the article without adding each option group,
  syntax detail, example variant, or supporting explanation to the navigation.
  Use `DocHeading` from `@components/DocHeading` with the appropriate `level`,
  an explicit `id`, and `toc={false}` for these headings.
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
