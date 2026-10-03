import {queryTabs} from "adnbn/browser";

export const permissions = ["tabs"];

export default async () => {
	const tabs = await queryTabs();
	console.log(tabs.map((tab) => tab.title ?? "Untitled tab"));
};
