import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";
import {Persistent} from "@components/docs/entrypoints/options";

export default () => (
	<>
		<EntrypointSpec name="name" type="string">
			Задаёт имя, по которому вызывающий код получает сервис через{" "}
			<code>getService(name)</code>. Если не указать, Addon Bone возьмёт имя из
			файла или каталога точки входа. Задайте уникальное имя явно, если оно
			должно сохраниться после переименования файла.
		</EntrypointSpec>
		<EntrypointSpec
			name="init"
			type="(options) => object | function"
			required
			target
		>
			Создаёт API сервиса: верните объект, экземпляр класса или функцию.
			Получает опции точки входа и выполняется синхронно. Если методу нужны
			данные из хранилища или сети, дождитесь их внутри метода. Опция
			обязательна.
		</EntrypointSpec>
		<EntrypointSpec
			name="main"
			type="(instance, options) => void | Promise<void>"
		>
			Выполняет действия при запуске сервиса. Получает созданный экземпляр и
			опции после регистрации. Можно подписаться на события или начать загрузку
			данных. Методы сервиса могут вызываться до завершения асинхронной работы в{" "}
			<code>main</code>, поэтому они должны дожидаться нужных данных сами. Если
			не указать, отдельного обработчика запуска не будет.
		</EntrypointSpec>
	</>
);

export const ServiceBackgroundOptions = () => (
	<>
		<Persistent>
			Определяет, будет ли фоновая страница в Manifest V2 работать постоянно. К
			service worker в Manifest V3 эта настройка не применяется: браузер
			по-прежнему может остановить его при бездействии.
		</Persistent>
	</>
);
