package main

import (
	"flag"
	"html/template"
	"log"
	"fmt"
	"net/http"
	"strings"

	"github.com/gorilla/websocket"
)

var addr = flag.String("addr", "localhost:8000", "http service address")

var upgrader = websocket.Upgrader{}

func echo(w http.ResponseWriter, r *http.Request) {
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade:", err)
		return
	}
	defer c.Close()
	for {
		mt, message, err := c.ReadMessage()
		if err != nil {
			log.Println("read:", err)
			break
		}
		log.Printf("recv: %s", message)
		err = c.WriteMessage(mt, message)
		if err != nil {
			log.Println("write:", err)
			break
		}
	}
}

func main() {
	flag.Parse()
	log.SetFlags(0)
	http.HandleFunc("/echo", echo)
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Setting up the server!")
		template.Must(template.new("").Parse(`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>Test</title>
		<style>
			:root {
				color-scheme: light dark;
			}
			#output {
				border: 1px solid black;
			}
		</style>
		<script type="module">
			document.addEventListener("DOMContentLoaded", ()=>{
				const output = document.querySelector("#output"),
					input = document.querySelector("#input"),
					button = document.querySelector("#send"),
					update = (message) => {
						if (output) {
							output.textContent = output.textContent + "\n" + message;
							output.scroll(0, output.scrollHeight);
						}
						return message;
					};
				let ws = new WebSocket("{{.}}");
				ws.onopen = event => console.log;
				ws.onclose = event => {
					console.log(event);
					ws = undefined;
				}
				ws.onmessage = event => console.log;
				ws.onerror = event => console.log;
				button.addEventListener("click", event => {
					if (!ws) {
						return;
					}
					update("SENT: " + input.value);
					ws.send(input.value);
					input.value = "";
				});
			})
		</script>
	</head>
	<body>
		<h1>Hello World</h1>
		<pre id="output"></pre>
		<input id="input" type="text"/>
		<input id="send" type="button"/>
	</body>
</html>`)).Execute(w, "ws://"+r.Host+"/echo")
	})
	log.Fatal(http.ListenAndServe(*addr, nil))
}

