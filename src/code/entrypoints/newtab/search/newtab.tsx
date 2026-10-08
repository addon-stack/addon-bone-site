import {defineNewtab} from "adnbn";

import SearchForm from "./SearchForm";

export default defineNewtab({
	title: "Search",
	permissions: ["search"],
	render: SearchForm,
});