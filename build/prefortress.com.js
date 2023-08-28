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

  // src/prefortress.com.ts
  var { log, error, debug: debug2, get, set } = common("Pre-Fortress");
  log("Loading...");
  log("Done.");
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvbm9kZV9tb2R1bGVzLy5wbnBtL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbEAwLjEwLjAvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCAiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvc3JjL2xpYi9jb21tb24udHMiLCAiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvc3JjL2xpYi9kZWZhdWx0cy50cyIsICIuLi9URk1PRF9FWFRFTlNJT05fRklSRUZPWC9zcmMvcHJlZm9ydHJlc3MuY29tLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMC4wIC0gRnJpIEF1ZyAxMiAyMDIyIDE5OjQyOjQ0ICovXG4vKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4vKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pZiAoIWdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lPy5pZCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG59XG5cbmlmICh0eXBlb2YgZ2xvYmFsVGhpcy5icm93c2VyID09PSBcInVuZGVmaW5lZFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWxUaGlzLmJyb3dzZXIpICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgIC8vIEpTT04gZmlsZS5cbiAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkbGVcIjoge1xuICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRhYnNcIjoge1xuICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICB9XG5cbiAgICAgIGdldChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAqL1xuICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAqXG4gICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHxcbiAgICAgICAgICAgICAgICAgICAoY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gKG51bUFyZ3MpID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICBtYXhBcmdzOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gKHByb21pc2UpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe3JlamVjdCwgcmVzb2x2ZX0sIHJlcGx5KSA9PiB7XG4gICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtyZXNvbHZlLCByZWplY3R9KTtcbiAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgICB0YWJzOiB7XG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAyLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgY2xlYXI6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIGdldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgc2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgfTtcbiAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgbmV0d29yazoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgc2VydmljZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHdlYnNpdGVzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gIH07XG5cbiAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xufVxuIiwgImltcG9ydCBicm93c2VyIGZyb20gXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIjsgLy8gTm90IG5lZWRlZCBpbiBGaXJlZm94IG9ubHkgYnVpbGQuXHJcbmltcG9ydCB7IGRlYnVnIGFzIGRlYnVnXywgc2V0dGluZ3MsIHRlbXBsYXRlIGFzIHRlbXBsYXRlXyB9IGZyb20gXCIuL2RlZmF1bHRzLmpzXCI7XHJcbmZ1bmN0aW9uIGxlbmd0aChvYmplY3Q6IG9iamVjdCk6IG51bWJlciB7XHJcblx0cmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoO1xyXG59XHJcbmZ1bmN0aW9uIHRlbXBsYXRlKG5hbWU6IHN0cmluZykge1xyXG5cdHJldHVybiBgJHt0ZW1wbGF0ZV99IFske25hbWV9XTpgO1xyXG59XHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBrZXkncyB0cmFuc2xhdGVkIHZhbHVlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gS2V5IG5hbWUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IHZhbHVlcyAtIFBsYWNlaG9sZGVyc1xyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkIHwgc3RyaW5nfSBUcmFuc2xhdGVkIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGxvY2FsZShrZXk/OiBzdHJpbmcsIC4uLnZhbHVlczogc3RyaW5nW10pOiB1bmRlZmluZWQgfCBzdHJpbmcge1xyXG5cdGlmIChrZXkpIHtcclxuXHRcdHJldHVybiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShrZXksIC4uLnZhbHVlcyk7XHJcblx0fVxyXG5cdGZvciAoY29uc3QgWywgZWxlbWVudF0gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJbZGF0YS1zdHJpbmddXCIpLmVudHJpZXMoKSkge1xyXG5cdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGVsZW1lbnQuZGF0YXNldC5zdHJpbmcgfHwgXCJcIik7XHJcblx0fVxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmNvbnN0IHN0b3JhZ2VBcmVhID0gZGVidWdfID8gXCJsb2NhbFwiIDogXCJzeW5jXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tbW9uKG5hbWU6IHN0cmluZywgcHJlZml4Xz86IHN0cmluZykge1xyXG5cdGlmIChwcmVmaXhfICYmIGRlYnVnXykgY29uc29sZS5sb2coYFByZWZpeCBmb3IgJHtuYW1lfSBpcyBzZXQgdG8gJHtwcmVmaXhffWApO1xyXG5cdHJldHVybiB7bG9nOiAoLi4udGV4dDogdW5rbm93bltdKSA9PiBjb25zb2xlLmxvZyh0ZW1wbGF0ZShuYW1lKSwgLi4udGV4dCksXHJcblx0XHRlcnJvcjogKC4uLnRleHQ6IHVua25vd25bXSkgPT4gY29uc29sZS5lcnJvcih0ZW1wbGF0ZShuYW1lKSwgLi4udGV4dCksXHJcblx0XHR3YXJuOiAoLi4udGV4dDogdW5rbm93bltdKSA9PiBjb25zb2xlLndhcm4odGVtcGxhdGUobmFtZSksIC4uLnRleHQpLFxyXG5cdFx0ZGVidWc6ICh2YXJpYWJsZU5hbWU6IHN0cmluZywgdmFyaWFibGU6IHVua25vd24pID0+IGRlYnVnXyAmJiBjb25zb2xlLmxvZyhgJHt2YXJpYWJsZU5hbWV9OiAke3ZhcmlhYmxlfSBUWVBFT0YgJHt0eXBlb2YgdmFyaWFibGV9IFske25hbWV9XWApLFxyXG5cdFx0Z2V0OiBhc3luYyAobmFtZTogc3RyaW5nLCBwcmVmaXggPSBwcmVmaXhfIHx8IFwiXCIpOiBQcm9taXNlPHVua25vd24+ID0+IHtcclxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tYXdhaXQtZXhwcmVzc2lvbi1tZW1iZXIsIHNlY3VyaXR5L2RldGVjdC1vYmplY3QtaW5qZWN0aW9uIC0tIDEuIEFsbG93cyBhIHNpbmdsZSBjb25zdCB2YXJpYWJsZSB0byBiZSBkZWNsYXJlZC4gT3RoZXJ3aXNlLCBJJ2QgbmVlZCBhIGxldCB2YXJpYWJsZS4gMi4gTm90IHBvc3NpYmxlLCBvbmx5IHR3byB2YWx1ZXMsIGxvY2FsLCBhbmQgc3luYy5cclxuXHRcdFx0Y29uc3QgZGF0YSA9IChhd2FpdCBicm93c2VyLnN0b3JhZ2Vbc3RvcmFnZUFyZWFdLmdldChbcHJlZml4ICsgbmFtZV0pKVtwcmVmaXggKyBuYW1lXTtcclxuXHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZCkgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcblx0XHRcdHJldHVybiBzZXR0aW5nc1twcmVmaXggKyBuYW1lXTtcclxuXHRcdH0sXHJcblx0XHRzZXQ6IChuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwgcHJlZml4ID0gcHJlZml4XyB8fCBcIlwiKTogdm9pZCA9PiB7XHJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWN1cml0eS9kZXRlY3Qtb2JqZWN0LWluamVjdGlvbiAtLSBOb3QgcG9zc2libGUsIG9ubHkgdHdvIHZhbHVlcywgbG9jYWwsIGFuZCBzeW5jLlxyXG5cdFx0XHRicm93c2VyLnN0b3JhZ2Vbc3RvcmFnZUFyZWFdLnNldCh7W3ByZWZpeCArIG5hbWVdOiBKU09OLnN0cmluZ2lmeShkYXRhKX0pO1xyXG5cdFx0fSxcclxuXHRcdGxvY2FsZVxyXG5cdH07XHJcbn0iLCAiZXhwb3J0IGNvbnN0IGRlYnVnID0gdHJ1ZSxcclxuXHRzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZz4gPSB7XHJcblx0XHRcInBvcnRcIjogNDIwMCxcclxuXHRcdFwiZ2FtZWJhbmFuYVwiOiB0cnVlLFxyXG5cdFx0XCJtb2RzX3RmXCI6IHRydWUsXHJcblx0XHRcIm1vZGJveVwiOiB0cnVlXHJcblx0fSxcclxuXHR0ZW1wbGF0ZSA9IFwiUHJvdmlzaW9ucyBPbmUtQ2xpY2sgSW5zdGFsbGVyXCI7IiwgImltcG9ydCB7IGNvbW1vbiB9IGZyb20gXCIuL2xpYi9jb21tb25cIjtcclxuY29uc3QgeyBsb2csIGVycm9yLCBkZWJ1ZywgZ2V0LCBzZXQgfSA9IGNvbW1vbihcIlByZS1Gb3J0cmVzc1wiKTtcclxubG9nKFwiTG9hZGluZy4uLlwiKTtcclxubG9nKFwiRG9uZS5cIik7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUVBLFlBQUksQ0FBQ0EsV0FBV0MsUUFBUUMsU0FBU0MsSUFBSTtBQUNuQyxnQkFBTSxJQUFJQyxNQUFNLDJEQUFWO1FBQ1A7QUFFRCxZQUFJLE9BQU9KLFdBQVdLLFlBQVksZUFBZUMsT0FBT0MsZUFBZVAsV0FBV0ssT0FBakMsTUFBOENDLE9BQU9FLFdBQVc7QUFDL0csZ0JBQU1DLG1EQUFtRDtBQU96RCxnQkFBTUMsV0FBV0MsbUJBQWlCO0FBSWhDLGtCQUFNQyxjQUFjO2NBQ2xCLFVBQVU7Z0JBQ1IsU0FBUztrQkFDUCxXQUFXO2tCQUNYLFdBQVc7Z0JBRko7Z0JBSVQsWUFBWTtrQkFDVixXQUFXO2tCQUNYLFdBQVc7Z0JBRkQ7Z0JBSVosT0FBTztrQkFDTCxXQUFXO2tCQUNYLFdBQVc7Z0JBRk47Z0JBSVAsVUFBVTtrQkFDUixXQUFXO2tCQUNYLFdBQVc7Z0JBRkg7Y0FiRjtjQWtCVixhQUFhO2dCQUNYLFVBQVU7a0JBQ1IsV0FBVztrQkFDWCxXQUFXO2dCQUZIO2dCQUlWLE9BQU87a0JBQ0wsV0FBVztrQkFDWCxXQUFXO2dCQUZOO2dCQUlQLGVBQWU7a0JBQ2IsV0FBVztrQkFDWCxXQUFXO2dCQUZFO2dCQUlmLGFBQWE7a0JBQ1gsV0FBVztrQkFDWCxXQUFXO2dCQUZBO2dCQUliLGNBQWM7a0JBQ1osV0FBVztrQkFDWCxXQUFXO2dC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QUFvQixRQUFRLE1BQU1BLFVBQVMsSUFBSSxHQUFHLEdBQUcsSUFBSTtBQUFBLE1BQ3BFLE1BQU0sSUFBSSxTQUFvQixRQUFRLEtBQUtBLFVBQVMsSUFBSSxHQUFHLEdBQUcsSUFBSTtBQUFBLE1BQ2xFLE9BQU8sQ0FBQyxjQUFzQixhQUFzQixTQUFVLFFBQVEsSUFBSSxHQUFHLFlBQVksS0FBSyxRQUFRLFdBQVcsT0FBTyxRQUFRLEtBQUssSUFBSSxHQUFHO0FBQUEsTUFDNUksS0FBSyxPQUFPRSxPQUFjLFNBQVMsV0FBVyxPQUF5QjtBQUV0RSxjQUFNLFFBQVEsTUFBTSw2QkFBQUQsUUFBUSxRQUFRLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBU0MsS0FBSSxDQUFDLEdBQUcsU0FBU0EsS0FBSTtBQUNwRixZQUFJLFNBQVM7QUFBVyxpQkFBTyxLQUFLLE1BQU0sSUFBSTtBQUM5QyxlQUFPLFNBQVMsU0FBU0EsS0FBSTtBQUFBLE1BQzlCO0FBQUEsTUFDQSxLQUFLLENBQUNBLE9BQWMsTUFBVyxTQUFTLFdBQVcsT0FBYTtBQUUvRCxxQ0FBQUQsUUFBUSxRQUFRLFdBQVcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxTQUFTQyxLQUFJLEdBQUcsS0FBSyxVQUFVLElBQUksRUFBQyxDQUFDO0FBQUEsTUFDekU7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7OztBRTNDQSxNQUFNLEVBQUUsS0FBSyxPQUFPLE9BQUFDLFFBQU8sS0FBSyxJQUFJLElBQUksT0FBTyxjQUFjO0FBQzdELE1BQUksWUFBWTtBQUNoQixNQUFJLE9BQU87IiwKICAibmFtZXMiOiBbImdsb2JhbFRoaXMiLCAiY2hyb21lIiwgInJ1bnRpbWUiLCAiaWQiLCAiRXJyb3IiLCAiYnJvd3NlciIsICJPYmplY3QiLCAiZ2V0UHJvdG90eXBlT2YiLCAicHJvdG90eXBlIiwgIkNIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSIsICJ3cmFwQVBJcyIsICJleHRlbnNpb25BUElzIiwgImFwaU1ldGFkYXRhIiwgImtleXMiLCAibGVuZ3RoIiwgIkRlZmF1bHRXZWFrTWFwIiwgIldlYWtNYXAiLCAiY29uc3RydWN0b3IiLCAiY3JlYXRlSXRlbSIsICJpdGVtcyIsICJ1bmRlZmluZWQiLCAiZ2V0IiwgImtleSIsICJoYXMiLCAic2V0IiwgImlzVGhlbmFibGUiLCAidmFsdWUiLCAidGhlbiIsICJtYWtlQ2FsbGJhY2siLCAicHJvbWlzZSIsICJtZXRhZGF0YSIsICJjYWxsYmFja0FyZ3MiLCAibGFzdEVycm9yIiwgInJlamVjdCIsICJtZXNzYWdlIiwgInNpbmdsZUNhbGxiYWNrQXJnIiwgInJlc29sdmUiLCAicGx1cmFsaXplQXJndW1lbnRzIiwgIm51bUFyZ3MiLCAid3JhcEFzeW5jRnVuY3Rpb24iLCAibmFtZSIsICJhc3luY0Z1bmN0aW9uV3JhcHBlciIsICJ0YXJnZXQiLCAiYXJncyIsICJtaW5BcmdzIiwgIm1heEFyZ3MiLCAiUHJvbWlzZSIsICJmYWxsYmFja1RvTm9DYWxsYmFjayIsICJjYkVycm9yIiwgImNvbnNvbGUiLCAid2FybiIsICJub0NhbGxiYWNrIiwgIndyYXBNZXRob2QiLCAibWV0aG9kIiwgIndyYXBwZXIiLCAiUHJveHkiLCAiYXBwbHkiLCAidGFyZ2V0TWV0aG9kIiwgInRoaXNPYmoiLCAiY2FsbCIsICJoYXNPd25Qcm9wZXJ0eSIsICJGdW5jdGlvbiIsICJiaW5kIiwgIndyYXBPYmplY3QiLCAid3JhcHBlcnMiLCAiY2FjaGUiLCAiY3JlYXRlIiwgImhhbmRsZXJzIiwgInByb3h5VGFyZ2V0IiwgInByb3AiLCAicmVjZWl2ZXIiLCAiZGVmaW5lUHJvcGVydHkiLCAiY29uZmlndXJhYmxlIiwgImVudW1lcmFibGUiLCAiZGVzYyIsICJSZWZsZWN0IiwgImRlbGV0ZVByb3BlcnR5IiwgIndyYXBFdmVudCIsICJ3cmFwcGVyTWFwIiwgImFkZExpc3RlbmVyIiwgImxpc3RlbmVyIiwgImhhc0xpc3RlbmVyIiwgInJlbW92ZUxpc3RlbmVyIiwgIm9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMiLCAib25SZXF1ZXN0RmluaXNoZWQiLCAicmVxIiwgIndyYXBwZWRSZXEiLCAiZ2V0Q29udGVudCIsICJvbk1lc3NhZ2VXcmFwcGVycyIsICJvbk1lc3NhZ2UiLCAic2VuZGVyIiwgInNlbmRSZXNwb25zZSIsICJkaWRDYWxsU2VuZFJlc3BvbnNlIiwgIndyYXBwZWRTZW5kUmVzcG9uc2UiLCAic2VuZFJlc3BvbnNlUHJvbWlzZSIsICJyZXNwb25zZSIsICJyZXN1bHQiLCAiZXJyIiwgImlzUmVzdWx0VGhlbmFibGUiLCAic2VuZFByb21pc2VkUmVzdWx0IiwgIm1zZyIsICJlcnJvciIsICJfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18iLCAiY2F0Y2giLCAid3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2siLCAicmVwbHkiLCAid3JhcHBlZFNlbmRNZXNzYWdlIiwgImFwaU5hbWVzcGFjZU9iaiIsICJ3cmFwcGVkQ2IiLCAicHVzaCIsICJzZW5kTWVzc2FnZSIsICJzdGF0aWNXcmFwcGVycyIsICJkZXZ0b29scyIsICJuZXR3b3JrIiwgIm9uTWVzc2FnZUV4dGVybmFsIiwgInRhYnMiLCAic2V0dGluZ01ldGFkYXRhIiwgImNsZWFyIiwgInByaXZhY3kiLCAic2VydmljZXMiLCAid2Vic2l0ZXMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAidGVtcGxhdGUiLCAiYnJvd3NlciIsICJuYW1lIiwgImRlYnVnIl0KfQo=
