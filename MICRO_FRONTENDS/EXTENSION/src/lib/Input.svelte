<svelte:options customElement="Check-box"/>
<script lang="ts">
	export let type = "checkbox",
		value: string | undefined = "",
		checked: boolean | undefined = true,
		id: string,
		text: string;
</script>
<div class="row">
	<label for={id}>{text}</label>
	<input {id} {type} {value} {checked}/>
</div>
<!-- <input {id} type="number" data-key="port" data-default="4200"> -->
<style>
	.row {
		font-size: 15px;
		display: flex;
		justify-content: space-between;
		padding-block: 5px;
		&>label {
			font-size: 15px;
			padding-block: 2px;
		}
	}
</style>