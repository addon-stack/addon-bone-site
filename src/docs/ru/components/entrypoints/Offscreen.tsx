import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";

export default () => (
	<>
		<EntrypointSpec name="name" type="string">
			Задаёт имя API для <code>getOffscreen(name)</code>. Если не указать, Addon
			Bone возьмёт имя из файла или каталога точки входа. Задайте имя явно, если
			вызовы должны продолжать работать после переименования файла.
		</EntrypointSpec>
		<EntrypointSpec
			name="init"
			type="(options) => object | function"
			required
			target
		>
			Создаёт API в скрытом документе: верните объект, экземпляр класса или
			функцию. Получает опции точки входа и выполняется синхронно при каждом
			создании документа. Асинхронные операции выполняйте внутри методов API.
			Опция обязательна.
		</EntrypointSpec>
		<EntrypointSpec
			name="main"
			type="(instance, options) => void | Promise<void>"
		>
			Выполняет действия после регистрации API. Получает созданный экземпляр и
			опции точки входа. Используйте для подготовки ресурсов, которой уже нужен
			экземпляр. При новом создании документа обработчик выполняется заново.
			Addon Bone дожидается завершения <code>main</code> перед запуском{" "}
			<code>render</code>. Если не указать, отдельного обработчика запуска не
			будет.
		</EntrypointSpec>
		<EntrypointSpec name="reasons" type="OffscreenReason | OffscreenReason[]">
			Указывает, для какой задачи нужен Offscreen-документ в Chrome с Manifest
			V3. Можно передать одно значение <code>OffscreenReason</code>, массив или
			соответствующие строки enum, например <code>"BLOBS"</code>. Если не
			указать, Addon Bone передаст <code>DOM_PARSER</code>. Для другой задачи
			выберите подходящую причину явно:
			<ul>
				<li>
					<code>Blobs</code> — работа с Blob, включая{" "}
					<code>URL.createObjectURL()</code>.
				</li>
				<li>
					<code>DOMParser</code> — разбор HTML или XML через DOMParser.
				</li>
				<li>
					<code>Clipboard</code> — работа с буфером обмена.
				</li>
				<li>
					<code>Workers</code> — создание Web Workers.
				</li>
				<li>
					<code>AudioPlayback</code> — воспроизведение аудио.
				</li>
				<li>
					<code>IframeScripting</code> — изменение содержимого встроенного
					iframe.
				</li>
				<li>
					<code>DOMScraping</code> — чтение DOM встроенного iframe.
				</li>
				<li>
					<code>UserMedia</code> — работа с потоками getUserMedia.
				</li>
				<li>
					<code>DisplayMedia</code> — работа с потоками getDisplayMedia.
				</li>
				<li>
					<code>WebRTC</code> — работа с WebRTC.
				</li>
				<li>
					<code>LocalStorage</code> — доступ к window.localStorage.
				</li>
				<li>
					<code>MatchMedia</code> — использование window.matchMedia.
				</li>
				<li>
					<code>Geolocation</code> — использование navigator.geolocation.
				</li>
				<li>
					<code>BatteryStatus</code> — использование navigator.getBattery.
				</li>
				<li>
					<code>Testing</code> — только для тестирования.
				</li>
			</ul>
			Можно объединить причины для нескольких задач. Значение{" "}
			<code>AudioPlayback</code> позволяет Chrome закрыть документ после 30
			секунд без воспроизведения аудио. В Manifest V2 и Firefox причины не
			управляют созданием скрытого документа. Они также не добавляют разрешения
			и не обеспечивают поддержку выбранного Web API браузером.
		</EntrypointSpec>
		<EntrypointSpec name="justification" type="string">
			Объясняет браузеру, зачем нужен Offscreen-документ в Chrome с Manifest V3.
			Напишите, что документ будет делать, например уменьшать изображения через
			canvas. Если не указать, Addon Bone передаст строку{" "}
			<code>"Just for testing"</code>; для рабочего расширения задайте своё
			объяснение. В Manifest V2 и Firefox эта строка не используется для
			создания документа.
		</EntrypointSpec>
	</>
);
