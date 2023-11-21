# Native Messaging Hosts Manifest Locations
## Windows
Note: Locations listed are for 64bit installations. 32bit installations may have different locations.
Per User: `HKEY_CURRENT_USER`
System Wide: `HKEY_LOCAL_MACHINE`
**Firefox**: `HKEY_CURRENT_USER\SOFTWARE\Mozilla\NativeMessagingHosts\<name>`
**Chrome** `HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts\<name>`
**Edge** `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\<name>`
**Opera** Uses Chrome Manifest Location
**Vivaldi** (Unconfirmed) `HKEY_CURRENT_USER\SOFTWARE\Vivaldi\NativeMessagingHosts\<name>`
For Windows, set the default key to the full path of the manifest.json.

## Linux
Per User: `~/`
System Wide: `/etc/opt/`
**Firefox**: `~/.mozilla/native-messaging-hosts/<name>.json`
**Chrome**: `~/.config/google-chrome/NativeMessagingHosts/<name>.json`
**Chromium**: `~/.config/chromium/NativeMessagingHosts/<name>.json`
**Opera** Uses Chrome Manifest Location
**Edge**: `~/.config/microsoft-edge/NativeMessagingHosts/<name>.json`
**Vivaldi**: (Unconfirmed) `~/.config/vivaldi/NativeMessagingHosts/<name>.json`

## MacOs
Per User: `~/Library/Application Support/`
System Wide: `/Library/Application Support/`
**Firefox**: `~/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json`
**Chrome**: `~/Library/Application Support/Google/Chrome/NativeMessagingHosts/<name>.json`
**Chromium**: `~/Library/Application Support/Chromium/NativeMessagingHosts/<name>.json`
**Opera** Uses Chrome Manifest Location
**Edge**: `~/Library/Application Support/Microsoft Edge/NativeMessagingHosts/<name>.json`
**Vivaldi**: (Unconfirmed) `~/Library/Application Support/Vivaldi/NativeMessagingHosts/<name>.json`

Note about Edge:
Edge has a list of locations that it searchs for on Windows, in order:
```
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\
HKEY_CURRENT_USER\SOFTWARE\Chromium\NativeMessagingHosts\
HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts\

HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Edge\NativeMessagingHosts\
HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Chromium\NativeMessagingHosts\
HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Google\Chrome\NativeMessagingHosts\

HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\
HKEY_LOCAL_MACHINE\SOFTWARE\Chromium\NativeMessagingHosts\
HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\NativeMessagingHosts\
```

References:

- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests
- https://developer.chrome.com/docs/extensions/mv3/nativeMessaging/
- https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/developer-guide/native-messaging?tabs=v3%2Cwindows
- https://dev.opera.com/extensions/message-passing/

Forum Post about Vivaldi Native Messaging (Not confirmation):
- https://forum.vivaldi.net/topic/48659/location-of-native-messaging-hosts-on-linux?lang=en-US