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

  // src/openfortress.fun.ts
  var { log, error, debug: debug2, get, set } = common("Open Fortress");
  log("Loading...");
  log("Done.");
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvbm9kZV9tb2R1bGVzLy5wbnBtL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbEAwLjEwLjAvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCAiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvc3JjL2xpYi9jb21tb24udHMiLCAiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvc3JjL2xpYi9kZWZhdWx0cy50cyIsICIuLi9URk1PRF9FWFRFTlNJT05fRklSRUZPWC9zcmMvb3BlbmZvcnRyZXNzLmZ1bi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTAuMCAtIEZyaSBBdWcgMTIgMjAyMiAxOTo0Mjo0NCAqL1xuLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cbi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKCFnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZT8uaWQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xufVxuXG5pZiAodHlwZW9mIGdsb2JhbFRoaXMuYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpcy5icm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAvLyBKU09OIGZpbGUuXG4gICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImkxOG5cIjoge1xuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgfVxuXG4gICAgICBnZXQoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgKi9cbiAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgKlxuICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICogICAgICAgIHByb21pc2UuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8XG4gICAgICAgICAgICAgICAgICAgKGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IChudW1BcmdzKSA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAqXG4gICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICB9LFxuXG4gICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgbWF4QXJnczogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IChwcm9taXNlKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtyZWplY3QsIHJlc29sdmV9LCByZXBseSkgPT4ge1xuICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7cmVzb2x2ZSwgcmVqZWN0fSk7XG4gICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICBkZXZ0b29sczoge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBydW50aW1lOiB7XG4gICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAxLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgICAgdGFiczoge1xuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMiwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgIGNsZWFyOiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBnZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIHNldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgIH07XG4gICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgIG5ldHdvcms6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHNlcnZpY2VzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICB3ZWJzaXRlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgIH07XG5cbiAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICB9O1xuXG4gIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3Nlcjtcbn1cbiIsICJpbXBvcnQgYnJvd3NlciBmcm9tIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI7IC8vIE5vdCBuZWVkZWQgaW4gRmlyZWZveCBvbmx5IGJ1aWxkLlxyXG5pbXBvcnQgeyBkZWJ1ZyBhcyBkZWJ1Z18sIHNldHRpbmdzLCB0ZW1wbGF0ZSBhcyB0ZW1wbGF0ZV8gfSBmcm9tIFwiLi9kZWZhdWx0cy5qc1wiO1xyXG5mdW5jdGlvbiBsZW5ndGgob2JqZWN0OiBvYmplY3QpOiBudW1iZXIge1xyXG5cdHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aDtcclxufVxyXG5mdW5jdGlvbiB0ZW1wbGF0ZShuYW1lOiBzdHJpbmcpIHtcclxuXHRyZXR1cm4gYCR7dGVtcGxhdGVffSBbJHtuYW1lfV06YDtcclxufVxyXG4vKipcclxuICogR2V0cyB0aGUga2V5J3MgdHJhbnNsYXRlZCB2YWx1ZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIEtleSBuYW1lLlxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB2YWx1ZXMgLSBQbGFjZWhvbGRlcnNcclxuICogQHJldHVybnMge3VuZGVmaW5lZCB8IHN0cmluZ30gVHJhbnNsYXRlZCBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBsb2NhbGUoa2V5Pzogc3RyaW5nLCAuLi52YWx1ZXM6IHN0cmluZ1tdKTogdW5kZWZpbmVkIHwgc3RyaW5nIHtcclxuXHRpZiAoa2V5KSB7XHJcblx0XHRyZXR1cm4gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2Uoa2V5LCAuLi52YWx1ZXMpO1xyXG5cdH1cclxuXHRmb3IgKGNvbnN0IFssIGVsZW1lbnRdIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiW2RhdGEtc3RyaW5nXVwiKS5lbnRyaWVzKCkpIHtcclxuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShlbGVtZW50LmRhdGFzZXQuc3RyaW5nIHx8IFwiXCIpO1xyXG5cdH1cclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5jb25zdCBzdG9yYWdlQXJlYSA9IGRlYnVnXyA/IFwibG9jYWxcIiA6IFwic3luY1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1vbihuYW1lOiBzdHJpbmcsIHByZWZpeF8/OiBzdHJpbmcpIHtcclxuXHRpZiAocHJlZml4XyAmJiBkZWJ1Z18pIGNvbnNvbGUubG9nKGBQcmVmaXggZm9yICR7bmFtZX0gaXMgc2V0IHRvICR7cHJlZml4X31gKTtcclxuXHRyZXR1cm4ge2xvZzogKC4uLnRleHQ6IHVua25vd25bXSkgPT4gY29uc29sZS5sb2codGVtcGxhdGUobmFtZSksIC4uLnRleHQpLFxyXG5cdFx0ZXJyb3I6ICguLi50ZXh0OiB1bmtub3duW10pID0+IGNvbnNvbGUuZXJyb3IodGVtcGxhdGUobmFtZSksIC4uLnRleHQpLFxyXG5cdFx0d2FybjogKC4uLnRleHQ6IHVua25vd25bXSkgPT4gY29uc29sZS53YXJuKHRlbXBsYXRlKG5hbWUpLCAuLi50ZXh0KSxcclxuXHRcdGRlYnVnOiAodmFyaWFibGVOYW1lOiBzdHJpbmcsIHZhcmlhYmxlOiB1bmtub3duKSA9PiBkZWJ1Z18gJiYgY29uc29sZS5sb2coYCR7dmFyaWFibGVOYW1lfTogJHt2YXJpYWJsZX0gVFlQRU9GICR7dHlwZW9mIHZhcmlhYmxlfSBbJHtuYW1lfV1gKSxcclxuXHRcdGdldDogYXN5bmMgKG5hbWU6IHN0cmluZywgcHJlZml4ID0gcHJlZml4XyB8fCBcIlwiKTogUHJvbWlzZTx1bmtub3duPiA9PiB7XHJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWF3YWl0LWV4cHJlc3Npb24tbWVtYmVyLCBzZWN1cml0eS9kZXRlY3Qtb2JqZWN0LWluamVjdGlvbiAtLSAxLiBBbGxvd3MgYSBzaW5nbGUgY29uc3QgdmFyaWFibGUgdG8gYmUgZGVjbGFyZWQuIE90aGVyd2lzZSwgSSdkIG5lZWQgYSBsZXQgdmFyaWFibGUuIDIuIE5vdCBwb3NzaWJsZSwgb25seSB0d28gdmFsdWVzLCBsb2NhbCwgYW5kIHN5bmMuXHJcblx0XHRcdGNvbnN0IGRhdGEgPSAoYXdhaXQgYnJvd3Nlci5zdG9yYWdlW3N0b3JhZ2VBcmVhXS5nZXQoW3ByZWZpeCArIG5hbWVdKSlbcHJlZml4ICsgbmFtZV07XHJcblx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3NbcHJlZml4ICsgbmFtZV07XHJcblx0XHR9LFxyXG5cdFx0c2V0OiAobmFtZTogc3RyaW5nLCBkYXRhOiBhbnksIHByZWZpeCA9IHByZWZpeF8gfHwgXCJcIik6IHZvaWQgPT4ge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VjdXJpdHkvZGV0ZWN0LW9iamVjdC1pbmplY3Rpb24gLS0gTm90IHBvc3NpYmxlLCBvbmx5IHR3byB2YWx1ZXMsIGxvY2FsLCBhbmQgc3luYy5cclxuXHRcdFx0YnJvd3Nlci5zdG9yYWdlW3N0b3JhZ2VBcmVhXS5zZXQoe1twcmVmaXggKyBuYW1lXTogSlNPTi5zdHJpbmdpZnkoZGF0YSl9KTtcclxuXHRcdH0sXHJcblx0XHRsb2NhbGVcclxuXHR9O1xyXG59IiwgImV4cG9ydCBjb25zdCBkZWJ1ZyA9IHRydWUsXHJcblx0c2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmc+ID0ge1xyXG5cdFx0XCJwb3J0XCI6IDQyMDAsXHJcblx0XHRcImdhbWViYW5hbmFcIjogdHJ1ZSxcclxuXHRcdFwibW9kc190ZlwiOiB0cnVlLFxyXG5cdFx0XCJtb2Rib3lcIjogdHJ1ZVxyXG5cdH0sXHJcblx0dGVtcGxhdGUgPSBcIlByb3Zpc2lvbnMgT25lLUNsaWNrIEluc3RhbGxlclwiOyIsICJpbXBvcnQgeyBjb21tb24gfSBmcm9tIFwiLi9saWIvY29tbW9uLmpzXCI7XHJcbmNvbnN0IHsgbG9nLCBlcnJvciwgZGVidWcsIGdldCwgc2V0IH0gPSBjb21tb24oXCJPcGVuIEZvcnRyZXNzXCIpO1xyXG5sb2coXCJMb2FkaW5nLi4uXCIpO1xyXG5sb2coXCJEb25lLlwiKTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBRUEsWUFBSSxDQUFDQSxXQUFXQyxRQUFRQyxTQUFTQyxJQUFJO0FBQ25DLGdCQUFNLElBQUlDLE1BQU0sMkRBQVY7UUFDUDtBQUVELFlBQUksT0FBT0osV0FBV0ssWUFBWSxlQUFlQyxPQUFPQyxlQUFlUCxXQUFXSyxPQUFqQyxNQUE4Q0MsT0FBT0UsV0FBVztBQUMvRyxnQkFBTUMsbURBQW1EO0FBT3pELGdCQUFNQyxXQUFXQyxtQkFBaUI7QUFJaEMsa0JBQU1DLGNBQWM7Y0FDbEIsVUFBVTtnQkFDUixTQUFTO2tCQUNQLFdBQVc7a0JBQ1gsV0FBVztnQkFGSjtnQkFJVCxZQUFZO2tCQUNWLFdBQVc7a0JBQ1gsV0FBVztnQkFGRDtnQkFJWixPQUFPO2tCQUNMLFdBQVc7a0JBQ1gsV0FBVztnQkFGTjtnQkFJUCxVQUFVO2tCQUNSLFdBQVc7a0JBQ1gsV0FBVztnQkFGSDtjQWJGO2NBa0JWLGFBQWE7Z0JBQ1gsVUFBVTtrQkFDUixXQUFXO2tCQUNYLFdBQVc7Z0JBRkg7Z0JBSVYsT0FBTztrQkFDTCxXQUFXO2tCQUNYLFdBQVc7Z0JBRk47Z0JBSVAsZUFBZTtrQkFDYixXQUFXO2tCQUNYLFdBQVc7Z0JBRkU7Z0JBSWYsYUFBYTtrQkFDWCxXQUFXO2tCQUNYLFdBQVc7Z0JBRkE7Z0JBSWIsY0FBYztrQkFDWixXQUFXO2tCQUNYLFdB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QUFJLFNBQW9CLFFBQVEsTUFBTUEsVUFBUyxJQUFJLEdBQUcsR0FBRyxJQUFJO0FBQUEsTUFDcEUsTUFBTSxJQUFJLFNBQW9CLFFBQVEsS0FBS0EsVUFBUyxJQUFJLEdBQUcsR0FBRyxJQUFJO0FBQUEsTUFDbEUsT0FBTyxDQUFDLGNBQXNCLGFBQXNCLFNBQVUsUUFBUSxJQUFJLEdBQUcsWUFBWSxLQUFLLFFBQVEsV0FBVyxPQUFPLFFBQVEsS0FBSyxJQUFJLEdBQUc7QUFBQSxNQUM1SSxLQUFLLE9BQU9FLE9BQWMsU0FBUyxXQUFXLE9BQXlCO0FBRXRFLGNBQU0sUUFBUSxNQUFNLDZCQUFBRCxRQUFRLFFBQVEsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTQyxLQUFJLENBQUMsR0FBRyxTQUFTQSxLQUFJO0FBQ3BGLFlBQUksU0FBUztBQUFXLGlCQUFPLEtBQUssTUFBTSxJQUFJO0FBQzlDLGVBQU8sU0FBUyxTQUFTQSxLQUFJO0FBQUEsTUFDOUI7QUFBQSxNQUNBLEtBQUssQ0FBQ0EsT0FBYyxNQUFXLFNBQVMsV0FBVyxPQUFhO0FBRS9ELHFDQUFBRCxRQUFRLFFBQVEsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDLFNBQVNDLEtBQUksR0FBRyxLQUFLLFVBQVUsSUFBSSxFQUFDLENBQUM7QUFBQSxNQUN6RTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRDs7O0FFM0NBLE1BQU0sRUFBRSxLQUFLLE9BQU8sT0FBQUMsUUFBTyxLQUFLLElBQUksSUFBSSxPQUFPLGVBQWU7QUFDOUQsTUFBSSxZQUFZO0FBQ2hCLE1BQUksT0FBTzsiLAogICJuYW1lcyI6IFsiZ2xvYmFsVGhpcyIsICJjaHJvbWUiLCAicnVudGltZSIsICJpZCIsICJFcnJvciIsICJicm93c2VyIiwgIk9iamVjdCIsICJnZXRQcm90b3R5cGVPZiIsICJwcm90b3R5cGUiLCAiQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFIiwgIndyYXBBUElzIiwgImV4dGVuc2lvbkFQSXMiLCAiYXBpTWV0YWRhdGEiLCAia2V5cyIsICJsZW5ndGgiLCAiRGVmYXVsdFdlYWtNYXAiLCAiV2Vha01hcCIsICJjb25zdHJ1Y3RvciIsICJjcmVhdGVJdGVtIiwgIml0ZW1zIiwgInVuZGVmaW5lZCIsICJnZXQiLCAia2V5IiwgImhhcyIsICJzZXQiLCAiaXNUaGVuYWJsZSIsICJ2YWx1ZSIsICJ0aGVuIiwgIm1ha2VDYWxsYmFjayIsICJwcm9taXNlIiwgIm1ldGFkYXRhIiwgImNhbGxiYWNrQXJncyIsICJsYXN0RXJyb3IiLCAicmVqZWN0IiwgIm1lc3NhZ2UiLCAic2luZ2xlQ2FsbGJhY2tBcmciLCAicmVzb2x2ZSIsICJwbHVyYWxpemVBcmd1bWVudHMiLCAibnVtQXJncyIsICJ3cmFwQXN5bmNGdW5jdGlvbiIsICJuYW1lIiwgImFzeW5jRnVuY3Rpb25XcmFwcGVyIiwgInRhcmdldCIsICJhcmdzIiwgIm1pbkFyZ3MiLCAibWF4QXJncyIsICJQcm9taXNlIiwgImZhbGxiYWNrVG9Ob0NhbGxiYWNrIiwgImNiRXJyb3IiLCAiY29uc29sZSIsICJ3YXJuIiwgIm5vQ2FsbGJhY2siLCAid3JhcE1ldGhvZCIsICJtZXRob2QiLCAid3JhcHBlciIsICJQcm94eSIsICJhcHBseSIsICJ0YXJnZXRNZXRob2QiLCAidGhpc09iaiIsICJjYWxsIiwgImhhc093blByb3BlcnR5IiwgIkZ1bmN0aW9uIiwgImJpbmQiLCAid3JhcE9iamVjdCIsICJ3cmFwcGVycyIsICJjYWNoZSIsICJjcmVhdGUiLCAiaGFuZGxlcnMiLCAicHJveHlUYXJnZXQiLCAicHJvcCIsICJyZWNlaXZlciIsICJkZWZpbmVQcm9wZXJ0eSIsICJjb25maWd1cmFibGUiLCAiZW51bWVyYWJsZSIsICJkZXNjIiwgIlJlZmxlY3QiLCAiZGVsZXRlUHJvcGVydHkiLCAid3JhcEV2ZW50IiwgIndyYXBwZXJNYXAiLCAiYWRkTGlzdGVuZXIiLCAibGlzdGVuZXIiLCAiaGFzTGlzdGVuZXIiLCAicmVtb3ZlTGlzdGVuZXIiLCAib25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyIsICJvblJlcXVlc3RGaW5pc2hlZCIsICJyZXEiLCAid3JhcHBlZFJlcSIsICJnZXRDb250ZW50IiwgIm9uTWVzc2FnZVdyYXBwZXJzIiwgIm9uTWVzc2FnZSIsICJzZW5kZXIiLCAic2VuZFJlc3BvbnNlIiwgImRpZENhbGxTZW5kUmVzcG9uc2UiLCAid3JhcHBlZFNlbmRSZXNwb25zZSIsICJzZW5kUmVzcG9uc2VQcm9taXNlIiwgInJlc3BvbnNlIiwgInJlc3VsdCIsICJlcnIiLCAiaXNSZXN1bHRUaGVuYWJsZSIsICJzZW5kUHJvbWlzZWRSZXN1bHQiLCAibXNnIiwgImVycm9yIiwgIl9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXyIsICJjYXRjaCIsICJ3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayIsICJyZXBseSIsICJ3cmFwcGVkU2VuZE1lc3NhZ2UiLCAiYXBpTmFtZXNwYWNlT2JqIiwgIndyYXBwZWRDYiIsICJwdXNoIiwgInNlbmRNZXNzYWdlIiwgInN0YXRpY1dyYXBwZXJzIiwgImRldnRvb2xzIiwgIm5ldHdvcmsiLCAib25NZXNzYWdlRXh0ZXJuYWwiLCAidGFicyIsICJzZXR0aW5nTWV0YWRhdGEiLCAiY2xlYXIiLCAicHJpdmFjeSIsICJzZXJ2aWNlcyIsICJ3ZWJzaXRlcyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJ0ZW1wbGF0ZSIsICJicm93c2VyIiwgIm5hbWUiLCAiZGVidWciXQp9Cg==
