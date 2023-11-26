export interface Documentation {
	name: string,
	arguments: {
		name: string,
		description: string,
		type: string,
		required: boolean
	}[],
	description: string | string[],
	block?: boolean,
	example?: string
}
export function doc(data: Documentation, element: HTMLElement): {id: string, name: string} {
	const header = document.createElement("a")
	let argString = "";
	header.classList.add("function");
	header.id = data.name;
	header.href = "#"+data.name;
	const fragment = document.createDocumentFragment();
	for (const arg of data.arguments) {
		const paragraph = document.createElement("p"),
			codeEl = document.createElement("code"),
			typeEl = document.createElement("code");
		codeEl.append(document.createTextNode(arg.name));
		codeEl.classList.add("argument")
		if (arg.required) {
			const gt = document.createElement("span"),
				lt = document.createElement("span");
			gt.innerHTML = "&GT;";
			lt.innerHTML = "&LT";
			typeEl.append(lt, document.createTextNode(arg.type), gt);
		} else {
			typeEl.append(document.createTextNode(`[${arg.type}]`));
		}
		typeEl.classList.add("type")
		paragraph.append(codeEl, typeEl, document.createTextNode(arg.description));
		fragment.append(paragraph);
		if (argString.length !== 0) {
			argString = `${argString}, ${arg.name}`;
		} else {
			argString = arg.name;
		}
	}
	const block = document.createElement("p");
	block.classList.add("block");
	if (data.block) {
		block.append(document.createTextNode("Function expects a block to follow."));
	}
	const example = document.createElement("pre");
	example.classList.add("example")
	if (data.example) {
		example.append(document.createTextNode(data.example));
	}
	let useBlock = "";
	if (data.block) {
		useBlock = " {}"
	}
	const headerText = `@${data.name}(${argString})${useBlock}`;
	header.append(document.createTextNode(headerText));
	const descriptionFragment = document.createDocumentFragment();
	if (Array.isArray(data.description)) {
		for (const line of data.description) {
			const paragraph = document.createElement("p");
			paragraph.append(document.createTextNode(line));
			descriptionFragment.append(paragraph);
		}
	} else {
		const paragraph = document.createElement("p");
		paragraph.append(document.createTextNode(data.description));
		descriptionFragment.append(paragraph);
	}
	element.append(header, block, fragment, descriptionFragment, example);
	return {id: data.name, name: `@${data.name}`};
}