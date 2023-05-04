#![cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
	format!("Hello, {}! You've been greeted from Rust!", name)
}

use tauri::Manager;
#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
	if let Some(splashscreen) = window.get_window("splashscreen") {
		splashscreen.close().unwrap();
	}
	window.get_window("main").unwrap().show().unwrap();
}

// use registry::{Hive, Security};
// #[tauri::command]
// fn get_color() -> String {
// 	Hive::CurrentUser.open(r"SOFTWARE\Microsoft\Windows\DWM\AccentColor", Security::Read)?.to_string()
// }
// use async_trait::async_trait;
// use ezsockets::ClientConfig;
// use std::io::BufRead;
// use url::Url;

// struct Client {}

// #[async_trait]
// impl ezsockets::ClientExt for Client {
// 	type Call = ();

// 	async fn on_text(&mut self, text: String) -> Result<(), ezsockets::Error> {
// 		tracing::info!("recieved message: {text}");
// 		Ok(())
// 	}

// 	async fn on_binary(&mut self, bytes: Vec<u8>) -> Result<(), ezsockets::Error> {
// 		tracing::info!("recieved message: {bytes:?}");
// 		Ok(())
// 	}

// 	async fn on_call(&mut self, call: Self::Call) -> Result<(), ezsockets::Error> {
// 		let () = call;
// 		Ok(())
// 	}
// }

// #[tokio::main]
fn main() {
// async fn main() {
	// tracing_subscriber::fmt::init();
	// let config = ClientConfig::new("ws://localhost:4200");
	// let (handle, future) = ezsockets::connect(|_client| Client {}, config).await;
	// tokio::spawn(async move {
	// 	future.await.unwrap();
	// });
	// let stdin = stdin::io::stdin();
	// let lines = stdin.lock().lines();
	// for line in lines {
	// 	let line = line.unwrap();
	// 	tracing::info!("sending {line}");
	// 	handle.text(line);
	// }
	tauri::Builder::default()
		.invoke_handler(tauri::generate_handler![greet, close_splashscreen])
		.setup(|app| {
			#[cfg(debug_assertions)]
			{
				let window = app.get_window("main").unwrap();
				window.open_devtools();
			}
			Ok(())
		})
		.run(tauri::generate_context!())
		.expect("error while building tauri application");
}
