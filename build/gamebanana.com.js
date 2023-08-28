"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/.pnpm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
      (function(global, factory) {
        if (typeof define === "function" && define.amd) {
          define("webextension-polyfill", ["module"], factory);
        } else if (typeof exports !== "undefined") {
          factory(module);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod);
          global.browser = mod.exports;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(module2) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(
                  req,
                  {},
                  {
                    getContent: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  }
                );
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error2) => {
                    let message2;
                    if (error2 && (error2 instanceof Error || typeof error2.message === "string")) {
                      message2 = error2.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = globalThis.browser;
        }
      });
    }
  });

  // src/lib/common.ts
  var import_webextension_polyfill = __toESM(require_browser_polyfill(), 1);

  // src/lib/defaults.ts
  var debug = true;
  var settings = {
    "port": 4200,
    "gamebanana": true,
    "mods_tf": true,
    "modboy": true
  };
  var template = "Provisions One-Click Installer";

  // src/lib/common.ts
  function template2(name) {
    return `${template} [${name}]:`;
  }
  function locale(key, ...values) {
    if (key) {
      return import_webextension_polyfill.default.i18n.getMessage(key, ...values);
    }
    for (const [, element] of document.querySelectorAll("[data-string]").entries()) {
      element.textContent = import_webextension_polyfill.default.i18n.getMessage(element.dataset.string || "");
    }
    return void 0;
  }
  var storageArea = debug ? "local" : "sync";
  function common(name, prefix_) {
    if (prefix_ && debug)
      console.log(`Prefix for ${name} is set to ${prefix_}`);
    return {
      log: (...text) => console.log(template2(name), ...text),
      error: (...text) => console.error(template2(name), ...text),
      warn: (...text) => console.warn(template2(name), ...text),
      debug: (variableName, variable) => debug && console.log(`${variableName}: ${variable} TYPEOF ${typeof variable} [${name}]`),
      get: async (name2, prefix = prefix_ || "") => {
        const data = (await import_webextension_polyfill.default.storage[storageArea].get([prefix + name2]))[prefix + name2];
        if (data !== void 0)
          return JSON.parse(data);
        return settings[prefix + name2];
      },
      set: (name2, data, prefix = prefix_ || "") => {
        import_webextension_polyfill.default.storage[storageArea].set({ [prefix + name2]: JSON.stringify(data) });
      },
      locale
    };
  }

  // src/gamebanana.com.ts
  var { log, error, debug: debug2, get, set } = common("GameBanana");
  log("Loading...");
  var ids = [];
  function getIds() {
    for (const [index, element] of document.querySelectorAll(".DownloadOptions").entries()) {
      for (let index_ = 0; index_ < element.children.length; index_++) {
        const element_ = element.children[index_];
        if (element_.getAttribute("href") && element_.dataset.provisions === void 0) {
          ids[ids.length] = element_;
          element_.dataset.provisions = true;
        }
      }
    }
    log(ids);
    for (const [index, element] of ids.entries()) {
      if (element.getAttribute("href").includes("https://")) {
        const anchor = document.createElement("a"), span = document.createElement("span"), small = document.createElement("small");
        span.append(document.createTextNode("Provisions Mod Manager"));
        small.append(document.createTextNode("1-Click Install"));
        span.append(small);
        anchor.append(span);
        anchor.addEventListener("click", (event) => {
          event.preventDefault();
          const downloadId = element.getAttribute("href").split("https://gamebanana.com/mods/download/")[1].split("#FileInfo_")[1], modificationId = element.getAttribute("href").split("https://gamebanana.com/mods/download/")[1].split("#FileInfo_")[0];
          console.log("Download ID:", downloadId);
          console.log("Mod Page ID:", modificationId);
          set("message", { type: "install", id: downloadId, modId: modificationId });
        });
        anchor.dataset.provisions = true;
        element.parentNode.insertBefore(anchor, element);
      }
      if (element.getAttribute("href").includes("modboy://")) {
        element.remove();
      }
    }
  }
  var path = window.location.pathname.split("/")[1];
  var p = (text) => path === text;
  var oneSecond = 1e3;
  if (p("mods") || p("sprays") || p("sounds") || p("scripts")) {
    const interval = setInterval(async () => {
      log(document.readyState);
      if (document.readyState === "complete") {
        clearInterval(interval);
        let pageType = document.querySelector("#Breadcrumb").children[0].getAttribute("href").split("https://gamebanana.com/games/")[1], websites = await get("websites") ?? [["gamebanana", true], ["mods_tf", true]];
        log(pageType);
        switch (pageType) {
          case "297": {
            console.log(websites[0][1]);
            if (websites[0][1]) {
              getIds();
            }
            break;
          }
          default: {
            error("Not a TF2 Mod page");
          }
        }
      }
    }, oneSecond);
  }
  log("Done...");
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvbm9kZV9tb2R1bGVzLy5wbnBtL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbEAwLjEwLjAvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCAiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvc3JjL2xpYi9jb21tb24udHMiLCAiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvc3JjL2xpYi9kZWZhdWx0cy50cyIsICIuLi9URk1PRF9FWFRFTlNJT05fRklSRUZPWC9zcmMvZ2FtZWJhbmFuYS5jb20udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEwLjAgLSBGcmkgQXVnIDEyIDIwMjIgMTk6NDI6NDQgKi9cbi8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbi8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4vKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghZ2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU/LmlkKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbn1cblxuaWYgKHR5cGVvZiBnbG9iYWxUaGlzLmJyb3dzZXIgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbFRoaXMuYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXCI7XG5cbiAgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgLy8gSlNPTiBmaWxlLlxuICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGFic1wiOiB7XG4gICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgIH1cblxuICAgICAgZ2V0KGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICovXG4gICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICpcbiAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fFxuICAgICAgICAgICAgICAgICAgIChjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSkge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSAobnVtQXJncykgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe3Jlc29sdmUsIHJlamVjdH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcblxuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe3Jlc29sdmUsIHJlamVjdH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICovXG4gICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgKlxuICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgfSxcblxuICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgIG1heEFyZ3M6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcblxuICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgIC8vIHByb21pc2UpLlxuICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSAocHJvbWlzZSkgPT4ge1xuICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7cmVqZWN0LCByZXNvbHZlfSwgcmVwbHkpID0+IHtcbiAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge3Jlc29sdmUsIHJlamVjdH0pO1xuICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcnVudGltZToge1xuICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMSwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICAgIHRhYnM6IHtcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDIsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICBjbGVhcjoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgZ2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBzZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICB9O1xuICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICBuZXR3b3JrOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICBzZXJ2aWNlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgd2Vic2l0ZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgfTtcblxuICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cbiAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG59XG4iLCAiaW1wb3J0IGJyb3dzZXIgZnJvbSBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiOyAvLyBOb3QgbmVlZGVkIGluIEZpcmVmb3ggb25seSBidWlsZC5cclxuaW1wb3J0IHsgZGVidWcgYXMgZGVidWdfLCBzZXR0aW5ncywgdGVtcGxhdGUgYXMgdGVtcGxhdGVfIH0gZnJvbSBcIi4vZGVmYXVsdHMuanNcIjtcclxuZnVuY3Rpb24gbGVuZ3RoKG9iamVjdDogb2JqZWN0KTogbnVtYmVyIHtcclxuXHRyZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGg7XHJcbn1cclxuZnVuY3Rpb24gdGVtcGxhdGUobmFtZTogc3RyaW5nKSB7XHJcblx0cmV0dXJuIGAke3RlbXBsYXRlX30gWyR7bmFtZX1dOmA7XHJcbn1cclxuLyoqXHJcbiAqIEdldHMgdGhlIGtleSdzIHRyYW5zbGF0ZWQgdmFsdWUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBLZXkgbmFtZS5cclxuICogQHBhcmFtIHtzdHJpbmdbXX0gdmFsdWVzIC0gUGxhY2Vob2xkZXJzXHJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWQgfCBzdHJpbmd9IFRyYW5zbGF0ZWQgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gbG9jYWxlKGtleT86IHN0cmluZywgLi4udmFsdWVzOiBzdHJpbmdbXSk6IHVuZGVmaW5lZCB8IHN0cmluZyB7XHJcblx0aWYgKGtleSkge1xyXG5cdFx0cmV0dXJuIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGtleSwgLi4udmFsdWVzKTtcclxuXHR9XHJcblx0Zm9yIChjb25zdCBbLCBlbGVtZW50XSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIltkYXRhLXN0cmluZ11cIikuZW50cmllcygpKSB7XHJcblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZWxlbWVudC5kYXRhc2V0LnN0cmluZyB8fCBcIlwiKTtcclxuXHR9XHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuY29uc3Qgc3RvcmFnZUFyZWEgPSBkZWJ1Z18gPyBcImxvY2FsXCIgOiBcInN5bmNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21tb24obmFtZTogc3RyaW5nLCBwcmVmaXhfPzogc3RyaW5nKSB7XHJcblx0aWYgKHByZWZpeF8gJiYgZGVidWdfKSBjb25zb2xlLmxvZyhgUHJlZml4IGZvciAke25hbWV9IGlzIHNldCB0byAke3ByZWZpeF99YCk7XHJcblx0cmV0dXJuIHtsb2c6ICguLi50ZXh0OiB1bmtub3duW10pID0+IGNvbnNvbGUubG9nKHRlbXBsYXRlKG5hbWUpLCAuLi50ZXh0KSxcclxuXHRcdGVycm9yOiAoLi4udGV4dDogdW5rbm93bltdKSA9PiBjb25zb2xlLmVycm9yKHRlbXBsYXRlKG5hbWUpLCAuLi50ZXh0KSxcclxuXHRcdHdhcm46ICguLi50ZXh0OiB1bmtub3duW10pID0+IGNvbnNvbGUud2Fybih0ZW1wbGF0ZShuYW1lKSwgLi4udGV4dCksXHJcblx0XHRkZWJ1ZzogKHZhcmlhYmxlTmFtZTogc3RyaW5nLCB2YXJpYWJsZTogdW5rbm93bikgPT4gZGVidWdfICYmIGNvbnNvbGUubG9nKGAke3ZhcmlhYmxlTmFtZX06ICR7dmFyaWFibGV9IFRZUEVPRiAke3R5cGVvZiB2YXJpYWJsZX0gWyR7bmFtZX1dYCksXHJcblx0XHRnZXQ6IGFzeW5jIChuYW1lOiBzdHJpbmcsIHByZWZpeCA9IHByZWZpeF8gfHwgXCJcIik6IFByb21pc2U8dW5rbm93bj4gPT4ge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1hd2FpdC1leHByZXNzaW9uLW1lbWJlciwgc2VjdXJpdHkvZGV0ZWN0LW9iamVjdC1pbmplY3Rpb24gLS0gMS4gQWxsb3dzIGEgc2luZ2xlIGNvbnN0IHZhcmlhYmxlIHRvIGJlIGRlY2xhcmVkLiBPdGhlcndpc2UsIEknZCBuZWVkIGEgbGV0IHZhcmlhYmxlLiAyLiBOb3QgcG9zc2libGUsIG9ubHkgdHdvIHZhbHVlcywgbG9jYWwsIGFuZCBzeW5jLlxyXG5cdFx0XHRjb25zdCBkYXRhID0gKGF3YWl0IGJyb3dzZXIuc3RvcmFnZVtzdG9yYWdlQXJlYV0uZ2V0KFtwcmVmaXggKyBuYW1lXSkpW3ByZWZpeCArIG5hbWVdO1xyXG5cdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuXHRcdFx0cmV0dXJuIHNldHRpbmdzW3ByZWZpeCArIG5hbWVdO1xyXG5cdFx0fSxcclxuXHRcdHNldDogKG5hbWU6IHN0cmluZywgZGF0YTogYW55LCBwcmVmaXggPSBwcmVmaXhfIHx8IFwiXCIpOiB2b2lkID0+IHtcclxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlY3VyaXR5L2RldGVjdC1vYmplY3QtaW5qZWN0aW9uIC0tIE5vdCBwb3NzaWJsZSwgb25seSB0d28gdmFsdWVzLCBsb2NhbCwgYW5kIHN5bmMuXHJcblx0XHRcdGJyb3dzZXIuc3RvcmFnZVtzdG9yYWdlQXJlYV0uc2V0KHtbcHJlZml4ICsgbmFtZV06IEpTT04uc3RyaW5naWZ5KGRhdGEpfSk7XHJcblx0XHR9LFxyXG5cdFx0bG9jYWxlXHJcblx0fTtcclxufSIsICJleHBvcnQgY29uc3QgZGVidWcgPSB0cnVlLFxyXG5cdHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nPiA9IHtcclxuXHRcdFwicG9ydFwiOiA0MjAwLFxyXG5cdFx0XCJnYW1lYmFuYW5hXCI6IHRydWUsXHJcblx0XHRcIm1vZHNfdGZcIjogdHJ1ZSxcclxuXHRcdFwibW9kYm95XCI6IHRydWVcclxuXHR9LFxyXG5cdHRlbXBsYXRlID0gXCJQcm92aXNpb25zIE9uZS1DbGljayBJbnN0YWxsZXJcIjsiLCAiaW1wb3J0IHsgY29tbW9uIH0gZnJvbSBcIi4vbGliL2NvbW1vbi5qc1wiO1xyXG5jb25zdCB7IGxvZywgZXJyb3IsIGRlYnVnLCBnZXQsIHNldCB9ID0gY29tbW9uKFwiR2FtZUJhbmFuYVwiKTtcclxubG9nKFwiTG9hZGluZy4uLlwiKTtcclxuXHJcbmxldCBpZHMgPSBbXTtcclxuZnVuY3Rpb24gZ2V0SWRzKCkge1xyXG5cdGZvciAoY29uc3QgW2luZGV4LCBlbGVtZW50XSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLkRvd25sb2FkT3B0aW9uc1wiKS5lbnRyaWVzKCkpIHtcclxuXHRcdGZvciAobGV0IGluZGV4XyA9IDA7IGluZGV4XyA8IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpbmRleF8rKykge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50XyA9IGVsZW1lbnQuY2hpbGRyZW5baW5kZXhfXTtcclxuXHRcdFx0aWYgKGVsZW1lbnRfLmdldEF0dHJpYnV0ZShcImhyZWZcIikgJiYgZWxlbWVudF8uZGF0YXNldC5wcm92aXNpb25zID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRpZHNbaWRzLmxlbmd0aF0gPSBlbGVtZW50XztcclxuXHRcdFx0XHRlbGVtZW50Xy5kYXRhc2V0LnByb3Zpc2lvbnMgPSB0cnVlO1xyXG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgYWxyZWFkeSBhZGRlZCBhIGJ1dHRvbiwgZG9uJ3QgYWRkIGl0IGFnYWluLCB0aHVzIHdlIGFkZCBwcm92aXNpb25zID0gdHJ1ZSB0byBlYWNoIG1hdGNoaW5nIGVsZW1lbnQncyBkYXRhc2V0LlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGxvZyhpZHMpO1xyXG5cdGZvciAoY29uc3QgW2luZGV4LCBlbGVtZW50XSBvZiBpZHMuZW50cmllcygpKSB7XHJcblx0XHRpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLmluY2x1ZGVzKFwiaHR0cHM6Ly9cIikpIHtcclxuXHRcdFx0Ly8gY3JlYXRlIGFuIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHN0eWxlIG9mIG90aGVyIGJ1dHRvbnMgb24gR2FtZUJhbmFuYVxyXG5cdFx0XHRjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcclxuXHRcdFx0XHRzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksXHJcblx0XHRcdFx0c21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic21hbGxcIik7XHJcblx0XHRcdHNwYW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUHJvdmlzaW9ucyBNb2QgTWFuYWdlclwiKSk7XHJcblx0XHRcdHNtYWxsLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjEtQ2xpY2sgSW5zdGFsbFwiKSk7XHJcblx0XHRcdHNwYW4uYXBwZW5kKHNtYWxsKTtcclxuXHRcdFx0YW5jaG9yLmFwcGVuZChzcGFuKTtcclxuXHRcdFx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGNvbnN0IGRvd25sb2FkSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCJodHRwczovL2dhbWViYW5hbmEuY29tL21vZHMvZG93bmxvYWQvXCIpWzFdLnNwbGl0KFwiI0ZpbGVJbmZvX1wiKVsxXSxcclxuXHRcdFx0XHRcdG1vZGlmaWNhdGlvbklkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiaHR0cHM6Ly9nYW1lYmFuYW5hLmNvbS9tb2RzL2Rvd25sb2FkL1wiKVsxXS5zcGxpdChcIiNGaWxlSW5mb19cIilbMF07XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJEb3dubG9hZCBJRDpcIiwgZG93bmxvYWRJZCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJNb2QgUGFnZSBJRDpcIiwgbW9kaWZpY2F0aW9uSWQpO1xyXG5cdFx0XHRcdHNldChcIm1lc3NhZ2VcIiwge3R5cGU6XCJpbnN0YWxsXCIsIGlkOmRvd25sb2FkSWQsIG1vZElkOm1vZGlmaWNhdGlvbklkfSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRhbmNob3IuZGF0YXNldC5wcm92aXNpb25zID0gdHJ1ZTtcclxuXHRcdFx0ZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhbmNob3IsIGVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5pbmNsdWRlcyhcIm1vZGJveTovL1wiKSkge1xyXG5cdFx0XHRlbGVtZW50LnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5jb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSxcclxuXHRwID0gdGV4dCA9PiBwYXRoID09PSB0ZXh0LFxyXG5cdG9uZVNlY29uZCA9IDEwMDA7XHJcbmlmIChwKFwibW9kc1wiKSB8fCBwKFwic3ByYXlzXCIpIHx8IHAoXCJzb3VuZHNcIikgfHwgcChcInNjcmlwdHNcIikpIHtcclxuXHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuXHRcdGxvZyhkb2N1bWVudC5yZWFkeVN0YXRlKTtcclxuXHRcdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblx0XHRcdGxldCBwYWdlVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQnJlYWRjcnVtYlwiKS5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiaHR0cHM6Ly9nYW1lYmFuYW5hLmNvbS9nYW1lcy9cIilbMV0sXHJcblx0XHRcdFx0d2Vic2l0ZXMgPSBhd2FpdCBnZXQoXCJ3ZWJzaXRlc1wiKSA/PyBbW1wiZ2FtZWJhbmFuYVwiLCB0cnVlXSwgW1wibW9kc190ZlwiLCB0cnVlXV07XHJcblx0XHRcdC8vIFRPRE86IEFkZCBtb3JlIGNhc2VzXHJcblx0XHRcdGxvZyhwYWdlVHlwZSk7XHJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzb25hcmpzL25vLXNtYWxsLXN3aXRjaCAtLSBXaWxsIGFkZCBtb3JlIGluIHRoZSBmdXR1cmVcclxuXHRcdFx0c3dpdGNoKHBhZ2VUeXBlKSB7XHJcblx0XHRcdFx0Y2FzZSBcIjI5N1wiOiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh3ZWJzaXRlc1swXVsxXSk7XHJcblx0XHRcdFx0XHRpZiAod2Vic2l0ZXNbMF1bMV0pIHtcclxuXHRcdFx0XHRcdFx0Z2V0SWRzKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRcdFx0ZXJyb3IoXCJOb3QgYSBURjIgTW9kIHBhZ2VcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwgb25lU2Vjb25kKTtcclxufVxyXG5sb2coXCJEb25lLi4uXCIpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBRUEsWUFBSSxDQUFDQSxXQUFXQyxRQUFRQyxTQUFTQyxJQUFJO0FBQ25DLGdCQUFNLElBQUlDLE1BQU0sMkRBQVY7UUFDUDtBQUVELFlBQUksT0FBT0osV0FBV0ssWUFBWSxlQUFlQyxPQUFPQyxlQUFlUCxXQUFXSyxPQUFqQyxNQUE4Q0MsT0FBT0UsV0FBVztBQUMvRyxnQkFBTUMsbURBQW1EO0FBT3pELGdCQUFNQyxXQUFXQyxtQkFBaUI7QUFJaEMsa0JBQU1DLGNBQWM7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QyxHQUFHO0FBQ25CLHFCQUFPO0FBQUEsWUFDUjtBQUNBO0FBQUEsVUFDRDtBQUFBLFVBQ0EsU0FBUztBQUNSLGtCQUFNLG9CQUFvQjtBQUFBLFVBQzNCO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNELEdBQUcsU0FBUztBQUFBLEVBQ2I7QUFDQSxNQUFJLFNBQVM7IiwKICAibmFtZXMiOiBbImdsb2JhbFRoaXMiLCAiY2hyb21lIiwgInJ1bnRpbWUiLCAiaWQiLCAiRXJyb3IiLCAiYnJvd3NlciIsICJPYmplY3QiLCAiZ2V0UHJvdG90eXBlT2YiLCAicHJvdG90eXBlIiwgIkNIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSIsICJ3cmFwQVBJcyIsICJleHRlbnNpb25BUElzIiwgImFwaU1ldGFkYXRhIiwgImtleXMiLCAibGVuZ3RoIiwgIkRlZmF1bHRXZWFrTWFwIiwgIldlYWtNYXAiLCAiY29uc3RydWN0b3IiLCAiY3JlYXRlSXRlbSIsICJpdGVtcyIsICJ1bmRlZmluZWQiLCAiZ2V0IiwgImtleSIsICJoYXMiLCAic2V0IiwgImlzVGhlbmFibGUiLCAidmFsdWUiLCAidGhlbiIsICJtYWtlQ2FsbGJhY2siLCAicHJvbWlzZSIsICJtZXRhZGF0YSIsICJjYWxsYmFja0FyZ3MiLCAibGFzdEVycm9yIiwgInJlamVjdCIsICJtZXNzYWdlIiwgInNpbmdsZUNhbGxiYWNrQXJnIiwgInJlc29sdmUiLCAicGx1cmFsaXplQXJndW1lbnRzIiwgIm51bUFyZ3MiLCAid3JhcEFzeW5jRnVuY3Rpb24iLCAibmFtZSIsICJhc3luY0Z1bmN0aW9uV3JhcHBlciIsICJ0YXJnZXQiLCAiYXJncyIsICJtaW5BcmdzIiwgIm1heEFyZ3MiLCAiUHJvbWlzZSIsICJmYWxsYmFja1RvTm9DYWxsYmFjayIsICJjYkVycm9yIiwgImNvbnNvbGUiLCAid2FybiIsICJub0NhbGxiYWNrIiwgIndyYXBNZXRob2QiLCAibWV0aG9kIiwgIndyYXBwZXIiLCAiUHJveHkiLCAiYXBwbHkiLCAidGFyZ2V0TWV0aG9kIiwgInRoaXNPYmoiLCAiY2FsbCIsICJoYXNPd25Qcm9wZXJ0eSIsICJGdW5jdGlvbiIsICJiaW5kIiwgIndyYXBPYmplY3QiLCAid3JhcHBlcnMiLCAiY2FjaGUiLCAiY3JlYXRlIiwgImhhbmRsZXJzIiwgInByb3h5VGFyZ2V0IiwgInByb3AiLCAicmVjZWl2ZXIiLCAiZGVmaW5lUHJvcGVydHkiLCAiY29uZmlndXJhYmxlIiwgImVudW1lcmFibGUiLCAiZGVzYyIsICJSZWZsZWN0IiwgImRlbGV0ZVByb3BlcnR5IiwgIndyYXBFdmVudCIsICJ3cmFwcGVyTWFwIiwgImFkZExpc3RlbmVyIiwgImxpc3RlbmVyIiwgImhhc0xpc3RlbmVyIiwgInJlbW92ZUxpc3RlbmVyIiwgIm9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMiLCAib25SZXF1ZXN0RmluaXNoZWQiLCAicmVxIiwgIndyYXBwZWRSZXEiLCAiZ2V0Q29udGVudCIsICJvbk1lc3NhZ2VXcmFwcGVycyIsICJvbk1lc3NhZ2UiLCAic2VuZGVyIiwgInNlbmRSZXNwb25zZSIsICJkaWRDYWxsU2VuZFJlc3BvbnNlIiwgIndyYXBwZWRTZW5kUmVzcG9uc2UiLCAic2VuZFJlc3BvbnNlUHJvbWlzZSIsICJyZXNwb25zZSIsICJyZXN1bHQiLCAiZXJyIiwgImlzUmVzdWx0VGhlbmFibGUiLCAic2VuZFByb21pc2VkUmVzdWx0IiwgIm1zZyIsICJlcnJvciIsICJfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18iLCAiY2F0Y2giLCAid3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2siLCAicmVwbHkiLCAid3JhcHBlZFNlbmRNZXNzYWdlIiwgImFwaU5hbWVzcGFjZU9iaiIsICJ3cmFwcGVkQ2IiLCAicHVzaCIsICJzZW5kTWVzc2FnZSIsICJzdGF0aWNXcmFwcGVycyIsICJkZXZ0b29scyIsICJuZXR3b3JrIiwgIm9uTWVzc2FnZUV4dGVybmFsIiwgInRhYnMiLCAic2V0dGluZ01ldGFkYXRhIiwgImNsZWFyIiwgInByaXZhY3kiLCAic2VydmljZXMiLCAid2Vic2l0ZXMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAidGVtcGxhdGUiLCAiYnJvd3NlciIsICJuYW1lIiwgImRlYnVnIl0KfQo=
