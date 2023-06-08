const os = localStorage.getItem("os") || "Windows_NT",
	nt = os === "Windows_NT",
	steamapps = nt ? "C:\\Program Files (x86)\\Steam\\steamapps" : "~/.steam/steam/SteamApps";
export const locations = {
	tf2: steamapps + nt ? "\\common\\Team Fortress 2" : "/common/Team Fortress 2",
	tf2c: steamapps + nt ? "\\sourcemods\\tf2classic" : "/sourcemods/tf2classic",
	of: steamapps + nt ? "\\sourcemods\\open_fortress" : "/sourcemods/open_fortress",
	pf2: steamapps + nt ? "\\sourcemods\\pf2" : "/sourcemods/pf2",
	mtp: steamapps + nt ? "\\common\\Team Fortress 2\\tf\\cfg\\mtp.cfg" : "/common/Team Fortress 2/tf/cfg/mtp.cfg"
};