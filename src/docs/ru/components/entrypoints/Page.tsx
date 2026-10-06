import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";

export default () => (
	<>
		<EntrypointSpec name="name" type="string">
			Задаёт имя страницы для <code>getPageUrl(name)</code>. Если не указать,
			Addon Bone возьмёт имя из файла или каталога точки входа. Задайте
			уникальное имя явно, если ссылки должны сохраниться после переименования
			файла. Имя HTML-файла задаётся отдельно через <code>as</code>.
		</EntrypointSpec>
		<EntrypointSpec name="matches" type="string[]" manifest>
			Открывает доступ к HTML-файлу со страниц сайтов и добавляет его в{" "}
			<code>web_accessible_resources</code>. В Manifest V3 доступ ограничен
			перечисленными шаблонами сайтов. В Manifest V2 поле хранит только пути
			ресурсов, поэтому эти шаблоны доступ не ограничивают. Если не указать,
			Page не добавляет свой HTML в доступные сайтам ресурсы. Для открытия из
			самого расширения опция не нужна.
		</EntrypointSpec>
	</>
);
