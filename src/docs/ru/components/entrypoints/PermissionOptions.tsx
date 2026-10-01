import {
	HostPermissions,
	OptionalHostPermissions,
	OptionalPermissions,
	Permissions,
} from "@components/docs/entrypoints/options";

export default () => (
	<>
		<Permissions>
			Укажите разрешения браузерных API, которые использует ваш код. Например,{" "}
			<code>tabs</code> нужен для чтения названий вкладок. Addon Bone объединит
			разрешения включённых точек входа в <code>manifest.permissions</code> и
			удалит повторы. Если список пуст или опция не задана, эта точка входа не
			добавит API-разрешений.
		</Permissions>
		<OptionalPermissions>
			Укажите разрешения для дополнительных возможностей, которые пользователь
			может включить во время работы расширения. Addon Bone добавит их в{" "}
			<code>manifest.optional_permissions</code>. Когда пользователь включит
			такую возможность, запросите нужные разрешения через API браузера и
			используйте их после согласия. Если список пуст или опция не задана, эта
			точка входа не добавит необязательных API-разрешений.
		</OptionalPermissions>
		<HostPermissions>
			Укажите шаблоны адресов сайтов, к которым вашему коду нужен доступ,
			например <code>https://api.example.com/*</code>. Addon Bone запишет их в{" "}
			<code>manifest.host_permissions</code> для Manifest V3 или в{" "}
			<code>manifest.permissions</code> для Manifest V2. Если список пуст или
			опция не задана, эта точка входа не добавит доступа к сайтам.
		</HostPermissions>
		<OptionalHostPermissions>
			Укажите шаблоны сайтов, доступ к которым пользователь сможет разрешить
			позже. Addon Bone добавит их в{" "}
			<code>manifest.optional_host_permissions</code> для Manifest V3 или в{" "}
			<code>manifest.optional_permissions</code> для Manifest V2. Запросите
			доступ через API браузера, когда пользователь включит соответствующую
			возможность, и продолжайте работу с сайтом после согласия. Если список
			пуст или опция не задана, эта точка входа не добавит необязательного
			доступа к сайтам.
		</OptionalHostPermissions>
	</>
);
