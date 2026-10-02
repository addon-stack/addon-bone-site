import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";
import {Persistent} from "@components/docs/entrypoints/options";

export default () => (
	<>
		<EntrypointSpec name="main" type="(options) => void | Promise<void>" target>
			Выполняет действия при каждом запуске background. Получает опции,
			объявленные в этом файле. Можно использовать <code>async</code> /{" "}
			<code>await</code>, например для чтения настроек или получения данных
			через браузерный API. Также можно регистрировать слушателей событий. Если
			не указать, отдельного обработчика запуска не будет.
		</EntrypointSpec>
		<Persistent>
			При <code>true</code> добавляет <code>background.persistent: true</code> в
			манифест Manifest V2. Настройка относится ко всему background, включая
			остальные фоновые точки входа. В текущей версии <code>false</code> и
			отсутствующее значение не записываются в манифест: в Manifest V2 фоновая
			страница остаётся постоянной по умолчанию. В Manifest V3 опция не
			применяется и не предотвращает остановку фонового контекста браузером.
		</Persistent>
	</>
);
