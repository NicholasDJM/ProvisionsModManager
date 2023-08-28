## Windows
**Firefox**: `HKEY_CURRENT_USER\SOFTWARE\Mozilla\NativeMessagingHosts\<name>`
**Chrome** `HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts\<name>`
**Edge** `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\<name>`
**Opera** (Unknown)
**Vivaldi** (Unconfirmed) `HKEY_LOCAL_MACHINE\SOFTWARE\Vivaldi\NativeMessagingHosts\<name>`

## Linux
**Firefox**: `~/.mozilla/native-messaging-hosts/<name>.json`
TODO

## MacOs

**Firefox**: `~/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json`
TODO

References:

- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests
- https://developer.chrome.com/docs/extensions/mv3/nativeMessaging/
- https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/developer-guide/native-messaging?tabs=v3%2Cwindows

