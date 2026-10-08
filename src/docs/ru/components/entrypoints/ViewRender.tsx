import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";

export default ({
	primary = false,
	containerExamplesHref,
}: {
	primary?: boolean;
	containerExamplesHref?: string;
}) => (
	<>
		<EntrypointSpec
			name="render"
			type="ViewRenderValue | ViewRenderHandler"
			target={primary}
		>
			Задаёт содержимое контейнера: готовое значение или функцию, которая
			возвращает его синхронно, без Promise. Функция получает опции текущего
			файла без <code>render</code> и <code>container</code>. В React она
			выполняется как компонент и может использовать hooks. Если не указать,
			Addon Bone не создаёт контейнер для интерфейса; разметка шаблона остаётся
			в документе.
		</EntrypointSpec>
		<EntrypointSpec
			name="container"
			type="ViewContainerTag | ViewContainerOptions | ViewContainerFactory"
		>
			Задаёт контейнер для результата <code>render</code>. Передайте имя тега,
			объект с <code>tagName</code> и свойствами элемента или функцию,
			возвращающую элемент, тег или такой объект. Функция получает те же опции и
			может быть асинхронной. По умолчанию используется новый <code>div</code>.
			Addon Bone помещает контейнер в начало <code>document.body</code> перед
			монтированием содержимого.
			{containerExamplesHref && (
				<>
					{" "}
					Примеры свойств и функции контейнера показаны в{" "}
					<a href={containerExamplesHref}>разделе о контейнере</a>.
				</>
			)}
		</EntrypointSpec>
	</>
);
