import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";
import {Persistent} from "@components/docs/entrypoints/options";

export default () => (
	<>
		<EntrypointSpec name="name" type="string" manifest>
			Задаёт имя команды в <code>manifest.commands</code>. Если не указать,
			Addon Bone возьмёт имя из файла или каталога точки входа. Задайте его
			явно, если оно должно сохраниться после переименования файла. Совпадение
			имён включённых команд остановит сборку. Для команды кнопки используйте{" "}
			<code>_execute_action</code>: в манифесте Manifest V2 Addon Bone заменит
			его на <code>_execute_browser_action</code>.
		</EntrypointSpec>
		<EntrypointSpec name="description" type="string" manifest>
			Задаёт описание, по которому пользователь узнаёт команду в настройках
			сочетаний клавиш. Можно указать текст или ключ локализации, например{" "}
			<code>@commands.showTab</code>. Если не указать, Addon Bone запишет имя
			обычной команды; для <code>_execute_action</code> описание по умолчанию не
			добавляется.
		</EntrypointSpec>
		<EntrypointSpec name="global" type="boolean" manifest>
			При <code>true</code> позволяет запускать команду из другого приложения в
			Chrome, Chromium, Edge и Opera. При <code>false</code> или без этой опции
			сочетание действует, когда браузер в фокусе. В Firefox и Safari Addon Bone
			выведет предупреждение и продолжит сборку; команда останется обычной.
			Допустимые сочетания и ограничения платформ описаны в разделе{" "}
			<a href="#global-shortcuts">«Глобальные сочетания»</a>.
		</EntrypointSpec>
		<EntrypointSpec name="defaultKey" type="string" manifest>
			Задаёт предложенное сочетание клавиш для платформ без отдельного значения,
			например <code>Ctrl+Shift+Y</code>. Если не указать, начальное сочетание
			будет только на платформах с явно заданной опцией. Для каждой команды
			нужна хотя бы одна опция сочетания; пользователь может изменить назначение
			в браузере.
		</EntrypointSpec>
		<EntrypointSpec name="windowsKey" type="string" manifest>
			Задаёт сочетание для Windows и записывается в{" "}
			<code>suggested_key.windows</code>. На этой платформе используется вместо{" "}
			<code>defaultKey</code>; если не указать, применяется{" "}
			<code>defaultKey</code>, когда он задан.
		</EntrypointSpec>
		<EntrypointSpec name="macKey" type="string" manifest>
			Задаёт сочетание для macOS и записывается в <code>suggested_key.mac</code>
			. Для Chromium здесь также допустимы <code>Command</code>,{" "}
			<code>MacCtrl</code> и <code>Option</code>; Firefox принимает первые два,
			а вместо <code>Option</code> используйте <code>Alt</code>. Если не
			указать, применяется <code>defaultKey</code>, когда он задан; браузер
			трактует <code>Ctrl</code> как <code>Command</code>. Для клавиши Control
			используйте <code>MacCtrl</code>.
		</EntrypointSpec>
		<EntrypointSpec name="chromeosKey" type="string" manifest>
			Задаёт сочетание для Chrome на ChromeOS и записывается в{" "}
			<code>suggested_key.chromeos</code>. На этой платформе используется вместо{" "}
			<code>defaultKey</code>; если не указать, применяется{" "}
			<code>defaultKey</code>, когда он задан. Здесь доступен модификатор{" "}
			<code>Search</code>, например <code>Search+Shift+Y</code>. В сборках
			Chromium допускается не больше двух модификаторов; вместе с{" "}
			<code>global: true</code> эта опция не поддерживается.
		</EntrypointSpec>
		<EntrypointSpec name="linuxKey" type="string" manifest>
			Задаёт сочетание для Linux и записывается в{" "}
			<code>suggested_key.linux</code>. На этой платформе используется вместо{" "}
			<code>defaultKey</code>; если не указать, применяется{" "}
			<code>defaultKey</code>, когда он задан.
		</EntrypointSpec>
		<EntrypointSpec
			name="execute"
			type="(tab, options) => void | Promise<void>"
			required
			target
		>
			Выполняет действие при вызове команды. Получает вкладку, если браузер её
			передал, и опции текущего файла с итоговым именем команды. Можно
			использовать <code>async</code> / <code>await</code>. Обработчик
			обязателен; повторные вызовы не ожидают завершения предыдущих.
		</EntrypointSpec>
	</>
);

export const CommandBackgroundOptions = () => (
	<Persistent>
		При <code>true</code> добавляет <code>background.persistent: true</code> в
		манифест Manifest V2. Настройка относится ко всему background, включая
		другие фоновые точки входа. В текущей версии <code>false</code> и
		отсутствующее значение не записываются в манифест: в Manifest V2 фоновая
		страница остаётся постоянной по умолчанию. В Manifest V3 опция не
		применяется и не предотвращает остановку фонового контекста браузером.
	</Persistent>
);
