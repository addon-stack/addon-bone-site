import {
	Debug,
	ExcludeApp,
	ExcludeBrowser,
	IncludeApp,
	IncludeBrowser,
	ManifestVersion,
	Mode,
} from "@components/docs/entrypoints/options";

export default () => (
	<>
		<IncludeBrowser>
			Includes the file in builds for the listed browsers. The file is excluded
			for other browsers. An empty or omitted list does not restrict the choice
			of browser.
		</IncludeBrowser>
		<ExcludeBrowser>
			Excludes the file from builds for the listed browsers. If a browser is
			also listed in <code>includeBrowser</code>, the file is still excluded. An
			empty or omitted list excludes nothing.
		</ExcludeBrowser>
		<IncludeApp>
			Includes the file in builds for the listed apps. The file is excluded for
			other apps. An empty or omitted list does not restrict the choice of app.
		</IncludeApp>
		<ExcludeApp>
			Excludes the file from builds for the listed apps. If an app is also
			listed in <code>includeApp</code>, the file is still excluded. An empty or
			omitted list excludes nothing.
		</ExcludeApp>
		<Mode>
			Includes the file only in the specified build mode, such as development or
			production. If omitted, the build mode does not affect whether the file is
			included.
		</Mode>
		<Debug>
			Includes the file only in builds with the same <code>debug</code> value.
			For example, <code>debug: false</code> excludes the file from a build with
			debug enabled. If omitted, this filter is not applied.
		</Debug>
		<ManifestVersion>
			Includes the file only in builds with the specified manifest version. For
			example, <code>3</code> excludes the file from a Manifest V2 build. The
			manifest version for the whole build is configured separately; this option
			selects the appropriate file. If omitted, the manifest version does not
			restrict whether the file is included.
		</ManifestVersion>
	</>
);
