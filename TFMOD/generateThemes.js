import fs from "node:fs";
// Theme generator assumes access to reasonableColors
/**
 * Generates text for a CSS theme file.
 * @param {string} theme - Name of theme
 * @param {string} accent - Accent colour
 * @param {string} accentAlt - Alternative accent colour
 * @param {string} background - Background colour
 * @param {string} text - Text colour
 * @param {string} textInverse - Opposite of text colour
 * @param {string} textAccent - Given accent colour, what colour should text be?
 * @param {string} accentDark - Dark mode accent colour
 * @param {string} accentAltDark - Alternative dark mode accent colour
 * @param {string} backgroundDark - Dark mode background colour
 * @param {string} textDark - Dark mode text colour
 * @param {string} textAccentDark - Given accent colour in dark mode, what colour should text be?
 * @param {string} textInverseDark - Opposite of dark mode text colour
 * @param {string} BackgroundAlt - A lighter background color
 * @param {string} BackgroundAltDark - A lighter background color, but dark
 * @returns Text ready to be written to a CSS file.
 */
function generate(
	theme,
	accent,
	accentAlt,
	background,
	text,
	textInverse,
	textAccent,
	accentDark,
	accentAltDark,
	backgroundDark,
	textDark,
	textAccentDark,
	textInverseDark,
	backgroundAlt,
	backgroundAltDark) {
	return `.theme-${theme} {
	--accentColor: var(--color-${accent});
	--accentColorAlt: var(--color-${accentAlt});
	--backgroundColor: var(--color-${background});

	/* textColor: Given backgroundColor, what colour should text be? */
	--textColor: var(--color-${text});

	/* textColorInverse: Always opposite of textColor */
	--textColorInverse: var(--color-${textInverse});

	/* textColorOptimal: Given accentColor, what colour should text be? */
	--textColorOptimal: var(--color-${textAccent});

	/* textColorOptimal: Given backgroundColor, give a lighter colour. */
	--backgroundColorAlt: var(--color-${backgroundAlt});
}
@media (prefers-color-scheme: dark) {
	.theme-${theme} {
		--accentColor: var(--color-${accentDark});
		--accentColorAlt: var(--color-${accentAltDark});
		--backgroundColor: var(--color-${backgroundDark});

		/* textColor: Given backgroundColor, what colour should text be? */
		--textColor: var(--color-${textDark});

		/* textColorInverse: Always opposite of textColor */
		--textColorInverse: var(--color-${textInverseDark});

		/* textColorOptimal: Given accentColor, what colour should text be? */
		--textColorOptimal: var(--color-${textAccentDark});

		/* textColorOptimal: Given backgroundColor, give a lighter colour. */
		--backgroundColorAlt: var(--color-${backgroundAltDark});
	}
}
.theme-${theme}.light, .theme-${theme}.palette.light {
	--accentColor: var(--color-${accent});
	--accentColorAlt: var(--color-${accentAlt});
	--backgroundColor: var(--color-${background});

	/* textColor: Given backgroundColor, what colour should text be? */
	--textColor: var(--color-${text});

	/* textColorInverse: Always opposite of textColor */
	--textColorInverse: var(--color-${textInverse});

	/* textColorOptimal: Given accentColor, what colour should text be? */
	--textColorOptimal: var(--color-${textAccent});

	/* textColorOptimal: Given backgroundColor, give a lighter colour. */
	--backgroundColorAlt: var(--color-${backgroundAlt});
}
.theme-${theme}.dark, .theme-${theme}.palette.dark {
	--accentColor: var(--color-${accentDark});
	--accentColorAlt: var(--color-${accentAltDark});
	--backgroundColor: var(--color-${backgroundDark});

	/* textColor: Given backgroundColor, what colour should text be? */
	--textColor: var(--color-${textDark});

	/* textColorInverse: Always opposite of textColor */
	--textColorInverse: var(--color-${textInverseDark});

	/* textColorOptimal: Given accentColor, what colour should text be? */
	--textColorOptimal: var(--color-${textAccentDark});

	/* textColorOptimal: Given backgroundColor, give a lighter colour. */
	--backgroundColorAlt: var(--color-${backgroundAltDark});
}`;
}
/**
 * Create CSS file.
 * @param {string} theme - Name of theme
 * @param  {...any} data - String: colours.
 */
function create(theme, ...data) {
	fs.writeFile("./src/lib/css/theme-" + theme + ".css", generate(theme, ...data), error => {
		if (error) console.error(error);
	});
}

create(
	"blue", // Name
	"blue-3", // Accent Colour
	"azure-2", // Accent Alt Colour
	"gray-2", // Background Colour
	"gray-6", // Text Colour
	"gray-1", // Inverse Text Colour
	"gray-1", // Optimal Text Colour on Accent Colour
	"blue-4", // Dark Accent Colour
	"blue-5", // Dark Accent Alt Colour
	"gray-6", // Dark Background Colour
	"gray-1", // Dark Text Colour
	"gray-1", // Optimal Text Colour on Dark Accent Colour
	"gray-6", // Inverse Dark Text Colour
	"gray-1",
	"gray-5"
);
create(
	"green", // Name
	"green-3", // Accent Colour
	"chartreuse-2", // Accent Alt Colour
	"gray-2", // Background Colour
	"gray-6", // Text Colour
	"gray-1", // Inverse Text Colour
	"gray-1", // Optimal Text Colour on Accent Colour
	"green-4", // Dark Accent Colour
	"green-5", // Dark Accent Alt Colour
	"gray-6", // Dark Background Colour
	"gray-1", // Dark Text Colour
	"gray-1", // Optimal Text Colour on Dark Accent Colour
	"gray-6", // Inverse Dark Text Colour
	"gray-1",
	"gray-5"
);
create(
	"purple", // Name
	"purple-3", // Accent Colour
	"violet-2", // Accent Alt Colour
	"gray-2", // Background Colour
	"gray-6", // Text Colour
	"gray-1", // Inverse Text Colour
	"gray-1", // Optimal Text Colour on Accent Colour
	"purple-4", // Dark Accent Colour
	"purple-5", // Dark Accent Alt Colour
	"gray-6", // Dark Background Colour
	"gray-1", // Dark Text Colour
	"gray-1", // Optimal Text Colour on Dark Accent Colour
	"gray-6", // Inverse Dark Text Colour
	"gray-1",
	"gray-5"
);
create(
	"red", // Name
	"red-3", // Accent Colour
	"raspberry-2", // Accent Alt Colour
	"gray-2", // Background Colour
	"gray-6", // Text Colour
	"gray-1", // Inverse Text Colour
	"gray-1", // Optimal Text Colour on Accent Colour
	"red-5", // Dark Accent Colour
	"red-4", // Dark Accent Alt Colour
	"gray-6", // Dark Background Colour
	"gray-1", // Dark Text Colour
	"gray-1", // Optimal Text Colour on Dark Accent Colour
	"gray-6", // Inverse Dark Text Colour
	"gray-1",
	"gray-5"
);
create(
	"yellow", // Name
	"yellow-2", // Accent Colour
	"amber-1", // Accent Alt Colour
	"gray-2", // Background Colour
	"gray-6", // Text Colour
	"gray-1", // Inverse Text Colour
	"gray-5", // Optimal Text Colour on Accent Colour
	"yellow-2", // Dark Accent Colour
	"yellow-1", // Dark Accent Alt Colour
	"gray-6", // Dark Background Colour
	"gray-1", // Dark Text Colour
	"gray-5", // Optimal Text Colour on Dark Accent Colour
	"gray-1", // Inverse Dark Text Colour
	"gray-1",
	"gray-5"
);