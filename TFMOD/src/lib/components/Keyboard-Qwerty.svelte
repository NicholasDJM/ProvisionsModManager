<script lang="ts">
	import Key from "./Key.svelte";
	import { keySize, keySizeH, keySizeW } from "../js/KeySize.js";
	import MSWindows from "svelte-material-icons/MicrosoftWindows.svelte";
	keySize.set("16px");
	keySizeH.set("40px");
	keySizeW.set("40px");
	const defaultX = 8;
	let x = defaultX,
		y = 0,
		y_ = [y + 8 + "px"],
		scale = 40,
		gap = 5,
		size = scale + gap,
		half = size / 2,
		double = size * 2 - gap,
		almostDouble = size + half - gap,
		halfAlmost = almostDouble - size + gap,
		space = size * 7;
	function repeat(nextLine = false, add = 0): string {
		x += size + add;
		if (nextLine) {
			x = defaultX;
			y += size; // Vertical gap + key size
			y_[y_.length] = y + defaultX + "px";
		}
		return x + "px";
	}
	let index: number;
	function top(last = false) {
		if (last) {
			repeat(true);
		}
		index = y_.length - 1;
		return y_[index];
	}
	let caps = false,
		scroll = false,
		number_ = false;
	const status = (event: KeyboardEvent) => {
		caps = event.getModifierState("CapsLock");
		number_ = event.getModifierState("NumLock");
		scroll = event.getModifierState("ScrollLock") || event.getModifierState("Scroll");
		console.log(event.getModifierState("ScrollLock"));	/* What fresh hell is this? Windows 10 22H2, MS Edge 112,
															// Scroll Lock LED is decoupled from Scroll Lock State!
															// Try "Shift or Alt + Scroll Lock", this changes lock state, but not "Scroll Lock" alone.
															// LED can be toggled on and off independently of lock state.*/
	};
</script>
<svelte:document on:keydown={status}></svelte:document>
<div class="keyboard" style={`--totalSize:${top(true)}`}>
	<Key keycode="ESCAPE">ESC</Key>
	<Key keycode="F1" left={repeat(false, size)}>F1</Key>
	<Key keycode="F2" left={repeat()}>F2</Key>
	<Key keycode="F3" left={repeat()}>F3</Key>
	<Key keycode="F4" left={repeat()}>F4</Key>
	<Key keycode="F5" left={repeat(false, half)}>F5</Key>
	<Key keycode="F6" left={repeat()}>F6</Key>
	<Key keycode="F7" left={repeat()}>F7</Key>
	<Key keycode="F8" left={repeat()}>F8</Key>
	<Key keycode="F9" left={repeat(false, half)}>F9</Key>
	<Key keycode="F10" left={repeat()}>F10</Key>
	<Key keycode="F11" left={repeat()}>F11</Key>
	<Key keycode="F12" left={repeat()}>F12</Key>
	<Key keycode="Cannot be bound" error={true} left={repeat(false, half)} width={almostDouble + "px"} fontSize="14px">Print<br/>Screen</Key>
	<Key keycode="SCROLLLOCK" left={repeat(false, halfAlmost)} width={almostDouble + "px"}>Scroll<br/>Lock</Key>
	<Key keycode="PAUSE" left={repeat(false, halfAlmost)} width={almostDouble + "px"}>Pause<br/>Break</Key>
	<Key keycode="Num Lock" left={repeat(false, size + half + gap)} {number_}>1</Key>
	<Key keycode="Caps Lock" left={repeat()} caps={caps}>🄰</Key>
	<Key keycode="Scroll Lock" left={repeat()} {scroll}>⤓</Key>
	<Key keycode="`" left={repeat(true)} top={top()}>`</Key>
	<Key keycode="1" left={repeat()} top={top()}>1</Key>
	<Key keycode="2" left={repeat()} top={top()}>2</Key>
	<Key keycode="3" left={repeat()} top={top()}>3</Key>
	<Key keycode="4" left={repeat()} top={top()}>4</Key>
	<Key keycode="5" left={repeat()} top={top()}>5</Key>
	<Key keycode="6" left={repeat()} top={top()}>6</Key>
	<Key keycode="7" left={repeat()} top={top()}>7</Key>
	<Key keycode="8" left={repeat()} top={top()}>8</Key>
	<Key keycode="9" left={repeat()} top={top()}>9</Key>
	<Key keycode="0" left={repeat()} top={top()}>0</Key>
	<Key keycode="-" left={repeat()} top={top()}>-</Key>
	<Key keycode="=" left={repeat()} top={top()}>=</Key>
	<Key keycode="BACKSPACE" left={repeat()} top={top()} width={double + "px"} fontSize="14px">Backspace<br/>⟵</Key>
	<Key keycode="INS" left={repeat(false, size + half)} top={top()} width={almostDouble + "px"} fontSize="14px">Insert</Key>
	<Key keycode="HOME" left={repeat(false, halfAlmost)} top={top()} width={almostDouble + "px"}>Home</Key>
	<Key keycode="PGDN" left={repeat(false, halfAlmost)} top={top()} width={almostDouble + "px"}>Page<br/>Down</Key>
	<Key keycode="NUMLOCK" left={repeat(false, size)} top={top()} fontSize="13px">Num<br/>Lock</Key>
	<Key keycode="KP_SLASH" left={repeat()} top={top()}>/</Key>
	<Key keycode="KP_MULTIPLY" left={repeat()} top={top()}>*</Key>
	<Key keycode="KP_MINUS" left={repeat()} top={top()}>-</Key>
	<Key keycode="TAB" left={repeat(true)} top={top()} width={almostDouble + "px"}>⭾ Tab</Key>
	<Key keycode="Q" left={repeat(false, halfAlmost)} top={top()}>Q</Key>
	<Key keycode="W" left={repeat()} top={top()}>W</Key>
	<Key keycode="E" left={repeat()} top={top()}>E</Key>
	<Key keycode="R" left={repeat()} top={top()}>R</Key>
	<Key keycode="T" left={repeat()} top={top()}>T</Key>
	<Key keycode="Y" left={repeat()} top={top()}>Y</Key>
	<Key keycode="U" left={repeat()} top={top()}>U</Key>
	<Key keycode="I" left={repeat()} top={top()}>I</Key>
	<Key keycode="O" left={repeat()} top={top()}>O</Key>
	<Key keycode="P" left={repeat()} top={top()}>P</Key>
	<Key keycode="[" left={repeat()} top={top()}>[</Key>
	<Key keycode="]" left={repeat()} top={top()}>]</Key>
	<Key keycode="BACKSLASH" left={repeat()} top={top()} width={almostDouble + "px"}>\</Key>
	<Key keycode="DEL" left={repeat(false, size)} top={top()} width={almostDouble + "px"} fontSize="14px">Delete</Key>
	<Key keycode="END" left={repeat(false, halfAlmost)} top={top()} width={almostDouble + "px"}>End</Key>
	<Key keycode="PGDN" left={repeat(false, halfAlmost)} top={top()} width={almostDouble + "px"}>Page<br/>Down</Key>
	<Key keycode="KP_HOME" left={repeat(false, size)} top={top()} fontSize="14px">7<br/>HOME</Key>
	<Key keycode="KP_UPARROW" left={repeat()} top={top()} fontSize="14px">▲<br/>8</Key>
	<Key keycode="KP_PGUP" left={repeat()} top={top()} fontSize="14px">9<br/>PGUP</Key>
	<Key keycode="KP_PLUS" left={repeat()} top={top()} height={double + "px"}>+</Key>
	<Key keycode="CAPSLOCK" left={repeat(true)} top={top()} width={double - gap - gap + "px"}>⇪ Caps</Key>
	<Key keycode="A" left={repeat(false, size - gap - gap)} top={top()}>A</Key>
	<Key keycode="S" left={repeat()} top={top()}>S</Key>
	<Key keycode="D" left={repeat()} top={top()}>D</Key>
	<Key keycode="F" left={repeat()} top={top()}>F</Key>
	<Key keycode="G" left={repeat()} top={top()}>G</Key>
	<Key keycode="H" left={repeat()} top={top()}>H</Key>
	<Key keycode="J" left={repeat()} top={top()}>J</Key>
	<Key keycode="K" left={repeat()} top={top()}>K</Key>
	<Key keycode="L" left={repeat()} top={top()}>L</Key>
	<Key keycode="SEMICOLON" left={repeat()} top={top()}>;</Key>
	<Key keycode="'" left={repeat()} top={top()}>'</Key>
	<Key keycode="ENTER" left={repeat()} top={top()} width={double + gap + gap + "px"}>↵ Enter</Key>
	<Key keycode="KP_LEFTARROW" left={repeat(false, (size + gap + gap) + half + ((almostDouble + gap) * 3) + half)} top={top()} fontSize="14px">◀ 4</Key>
	<Key keycode="KP_5" left={repeat()} top={top()}>5</Key>
	<Key keycode="KP_RIGHTARROW" left={repeat()} top={top()} fontSize="14px">6 ▶</Key>
	<Key keycode="SHIFT" left={repeat(true)} top={top()} width={double + "px"}>⇧ Shift</Key>
	<Key keycode="Z" left={repeat(false, size)} top={top()}>Z</Key>
	<Key keycode="X" left={repeat()} top={top()}>X</Key>
	<Key keycode="C" left={repeat()} top={top()}>C</Key>
	<Key keycode="V" left={repeat()} top={top()}>V</Key>
	<Key keycode="B" left={repeat()} top={top()}>B</Key>
	<Key keycode="N" left={repeat()} top={top()}>N</Key>
	<Key keycode="M" left={repeat()} top={top()}>M</Key>
	<Key keycode="," left={repeat()} top={top()}>,</Key>
	<Key keycode="." left={repeat()} top={top()}>.</Key>
	<Key keycode="/" left={repeat()} top={top()}>/</Key>
	<Key keycode="RSHIFT" left={repeat()} top={top()} width={double + size + "px"}>⇧ Shift</Key>
	<Key keycode="UPARROW" left={repeat(false, almostDouble + size + gap + gap + gap + gap + almostDouble)} top={top()} fontSize="24px">▲</Key>
	<Key keycode="KP_END" left={repeat(false, almostDouble + size - gap)} top={top()} fontSize="14px">1<br/>END</Key>
	<Key keycode="KP_DOWNARROW" left={repeat()} top={top()}>2<br/>▼</Key>
	<Key keycode="KP_PGDN" left={repeat()} top={top()} fontSize="14px">3<br/>PGDN</Key>
	<Key keycode="KP_ENTER" left={repeat()} top={top()} height={double + "px"}>↲</Key>
	<Key keycode="CTRL" left={repeat(true)} top={top()} width={size + gap + "px"}>CTRL</Key>
	<Key keycode="WIN" left={repeat(false, gap + gap)} top={top()} width={size + "px"}><MSWindows/></Key>
	<Key keycode="ALT" left={repeat(false, gap)} top={top()} width={size + "px"}>ALT</Key>
	<Key keycode="SPACE" left={repeat(false, gap)} top={top()} width={space + "px"}></Key>
	<Key keycode="RALT" left={repeat(false, space - size + gap)} top={top()} width={size + "px"}>ALT</Key>
	<Key keycode="RWIN" left={repeat(false, gap)} top={top()} width={size + "px"}><MSWindows/></Key>
	<Key keycode="APP (Bindable, but not usable)" left={repeat(false, gap)} top={top()} error={true} width={size + "px"}>𝌆</Key>
	<Key keycode="RCTRL" left={repeat(false, gap)} top={top()} width={size + "px"}>CTRL</Key>
	<Key keycode="LEFTARROW" left={repeat(false, size + gap + gap + gap)} top={top()}>◀</Key>
	<Key keycode="DOWNARROW" left={repeat()} top={top()} fontSize="24px">▼</Key>
	<Key keycode="RIGHTARROW" left={repeat()} top={top()}>▶</Key>
	<Key keycode="KP_INS" left={repeat(false, almostDouble - gap)} top={top()} width={double + "px"}>0<br/>INS</Key>
	<Key keycode="KP_DEL" left={repeat(false, size)} top={top()}>.<br/>DEL</Key>
</div>
<!-- <label style="position: relative">
	<span style={`top:${repeat(true) && top()};position:absolute`}>
		Scale {scale}
		<input type="range" min="30" max="60" value={scale} on:change={reset}/>
	</span>
</label> -->
<style>
	.keyboard {
		--padding: 8px;

		direction: ltr; /* Keyboards don't start right to left */
		position: relative;
		border: 3px solid grey;
		overflow: auto;
		block-size: calc(var(--totalSize) + (var(--padding)));
		inline-size: calc(var(--totalInlineSize, 1111px) + (var(--padding)));
	}
</style>
