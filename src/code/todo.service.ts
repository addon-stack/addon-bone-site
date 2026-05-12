import {defineService} from "adnbn";

type Todo = {
	id: string;
	title: string;
	completed: boolean;
};

class TodoService {
	constructor(private readonly endpoint: string) {}

	async list(): Promise<Todo[]> {
		const response = await fetch(`${this.endpoint}/todos`);

		return response.json();
	}

	async create(title: string): Promise<Todo> {
		const response = await fetch(`${this.endpoint}/todos`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({title}),
		});

		return response.json();
	}

	async complete(id: string): Promise<Todo> {
		const response = await fetch(`${this.endpoint}/todos/${id}`, {
			method: "PATCH",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({completed: true}),
		});

		return response.json();
	}
}

export default defineService({
	hostPermissions: ["https://api.example.com/*"],

	init() {
		return new TodoService("https://api.example.com");
	},
});
