import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";

export default ({omitTitle = false}: {omitTitle?: boolean}) => (
	<>
		<EntrypointSpec name="as" type="string">
			Задаёт имя сгенерированного HTML-файла и его точки сборки. Если не
			указать, Addon Bone возьмёт имя из файла или каталога точки входа. Форма
			итогового имени зависит от точки входа; смотрите её раздел «Результат
			сборки».
		</EntrypointSpec>
		{!omitTitle && (
			<EntrypointSpec name="title" type="string">
				Задаёт заголовок HTML-документа. Если не указать, Addon Bone использует
				имя текущего приложения с заглавными буквами и пробелами, например{" "}
				<code>My App</code> для <code>my-app</code>.
			</EntrypointSpec>
		)}
		<EntrypointSpec name="template" type="string">
			Задаёт путь к HTML-шаблону относительно файла точки входа. Используйте,
			когда документу нужна собственная разметка. Если не указать, Addon Bone
			создаст HTML с подключённым скриптом точки входа.
		</EntrypointSpec>
		<EntrypointSpec name="tags" type="string | object | array">
			Добавляет теги script или link в HTML. Строка задаёт путь к ресурсу;
			объект с <code>path</code> и <code>attributes</code> позволяет настроить
			тег; массив добавляет несколько ресурсов. Для обычных путей вид тега
			определяется по расширению .js или .css. Если не указать, дополнительные
			теги не добавляются.
		</EntrypointSpec>
		<EntrypointSpec name="links" type="string | object | array">
			Добавляет теги link, например для таблицы стилей. Передайте путь строкой,
			объект с <code>path</code> и необязательными <code>attributes</code> или
			массив таких записей. Если не указать, дополнительные link не добавляются.
		</EntrypointSpec>
		<EntrypointSpec name="scripts" type="string | object | array">
			Добавляет теги script для дополнительных ресурсов. Передайте путь строкой,
			объект с <code>path</code> и необязательными <code>attributes</code> или
			массив таких записей. Если не указать, Addon Bone подключит только скрипты
			самой точки входа и её зависимостей.
		</EntrypointSpec>
		<EntrypointSpec
			name="metas"
			type="HtmlMetaTagOptions | HtmlMetaTagOptions[]"
		>
			Добавляет метатеги в <code>head</code> сгенерированного HTML, например
			описание страницы. Передайте объект с непустым <code>attributes</code>: в
			нём задайте атрибуты метатега, например <code>name</code> и{" "}
			<code>content</code>. Для нескольких тегов используйте массив таких
			объектов. Если не указать, дополнительные метатеги не добавляются.
		</EntrypointSpec>
		<EntrypointSpec name="csp" type="object" manifest>
			Добавляет настройки Content Security Policy для страниц расширения:{" "}
			<code>wasm</code> разрешает WebAssembly, а <code>sources</code> задаёт
			источники изображений, соединений и других ресурсов. Если не указать, этот
			файл не добавляет собственные настройки CSP. Addon Bone объединяет
			настройки включённых документов в общую политику манифеста; она
			распространяется на все страницы расширения.
		</EntrypointSpec>
	</>
);
