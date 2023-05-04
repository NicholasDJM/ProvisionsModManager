export function transition() {
	for (const [, element] of document.querySelectorAll("a").entries()) {
		if (!element.dataset.external) {
			element.title = element.href;
			element.addEventListener("click", event => {
				event.preventDefault();
				let target = event.target as HTMLAnchorElement;
				//TODO: Adapt linkExternal.js to a view transition controller.
				if (target?.href) {
					open(target?.href);
				} else {
					target = target.parentNode as HTMLAnchorElement;
					if (target.href) {
						open(target?.href);
					} else {
						throw "Could not find href";
					}
				}
			});
		}
	}
}