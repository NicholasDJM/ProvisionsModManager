/* global ace */
ace.define("ace/mode/source-cfg", ["require", "exports", "ace/lib/oop", "ace/mode/text", "ace/mode/source-cfg-highlight"], (acequire, exports) => {
	const oop = acequire("ace/mode/text"),
		TextMode = acequire("ace/mode/text").Mode,
		cfgHighlightRules = acequire("ace/mode/source-cfg-highlight").cfgHighlightRules;

	oop.inherits(Mode, TextMode);

	exports.Mode = Mode;
});
ace.define("ace/mode/source-cfg-highlight", ["require", "exports", "ace/lib/oop", "ace/mode/source-cfg-text-highlight"], (acequire, exports) => {
	const oop = acequire("ace/mode/text"),
		TextHighlightRules = acequire("ace/mode/text_highlight_rules").TextHighlightRules,
		cfgHighlightRules = () => {
			this.$rules = new TextHighlightRules().getRules();
		};
	oop.inherits(cfgHighlightRules, TextHighlightRules);
	exports.cfgHighlightRules = cfgHighlightRules;
});