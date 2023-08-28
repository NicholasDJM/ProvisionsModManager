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

  // src/tf2classic.com.ts
  var { log, error, debug: debug2, get, set } = common("TF2 Classic");
  log("Loading...");
  log("Done.");
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvbm9kZV9tb2R1bGVzLy5wbnBtL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbEAwLjEwLjAvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCAiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvc3JjL2xpYi9jb21tb24udHMiLCAiLi4vVEZNT0RfRVhURU5TSU9OX0ZJUkVGT1gvc3JjL2xpYi9kZWZhdWx0cy50cyIsICIuLi9URk1PRF9FWFRFTlNJT05fRklSRUZPWC9zcmMvdGYyY2xhc3NpYy5jb20udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEwLjAgLSBGcmkgQXVnIDEyIDIwMjIgMTk6NDI6NDQgKi9cbi8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbi8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4vKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghZ2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU/LmlkKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbn1cblxuaWYgKHR5cGVvZiBnbG9iYWxUaGlzLmJyb3dzZXIgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbFRoaXMuYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXCI7XG5cbiAgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgLy8gSlNPTiBmaWxlLlxuICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGFic1wiOiB7XG4gICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgIH1cblxuICAgICAgZ2V0KGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICovXG4gICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICpcbiAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fFxuICAgICAgICAgICAgICAgICAgIChjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSkge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSAobnVtQXJncykgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe3Jlc29sdmUsIHJlamVjdH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcblxuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe3Jlc29sdmUsIHJlamVjdH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICovXG4gICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgKlxuICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgfSxcblxuICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgIG1heEFyZ3M6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcblxuICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgIC8vIHByb21pc2UpLlxuICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSAocHJvbWlzZSkgPT4ge1xuICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7cmVqZWN0LCByZXNvbHZlfSwgcmVwbHkpID0+IHtcbiAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge3Jlc29sdmUsIHJlamVjdH0pO1xuICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcnVudGltZToge1xuICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMSwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICAgIHRhYnM6IHtcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDIsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICBjbGVhcjoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgZ2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBzZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICB9O1xuICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICBuZXR3b3JrOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICBzZXJ2aWNlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgd2Vic2l0ZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgfTtcblxuICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cbiAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG59XG4iLCAiaW1wb3J0IGJyb3dzZXIgZnJvbSBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiOyAvLyBOb3QgbmVlZGVkIGluIEZpcmVmb3ggb25seSBidWlsZC5cclxuaW1wb3J0IHsgZGVidWcgYXMgZGVidWdfLCBzZXR0aW5ncywgdGVtcGxhdGUgYXMgdGVtcGxhdGVfIH0gZnJvbSBcIi4vZGVmYXVsdHMuanNcIjtcclxuZnVuY3Rpb24gbGVuZ3RoKG9iamVjdDogb2JqZWN0KTogbnVtYmVyIHtcclxuXHRyZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGg7XHJcbn1cclxuZnVuY3Rpb24gdGVtcGxhdGUobmFtZTogc3RyaW5nKSB7XHJcblx0cmV0dXJuIGAke3RlbXBsYXRlX30gWyR7bmFtZX1dOmA7XHJcbn1cclxuLyoqXHJcbiAqIEdldHMgdGhlIGtleSdzIHRyYW5zbGF0ZWQgdmFsdWUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBLZXkgbmFtZS5cclxuICogQHBhcmFtIHtzdHJpbmdbXX0gdmFsdWVzIC0gUGxhY2Vob2xkZXJzXHJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWQgfCBzdHJpbmd9IFRyYW5zbGF0ZWQgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gbG9jYWxlKGtleT86IHN0cmluZywgLi4udmFsdWVzOiBzdHJpbmdbXSk6IHVuZGVmaW5lZCB8IHN0cmluZyB7XHJcblx0aWYgKGtleSkge1xyXG5cdFx0cmV0dXJuIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGtleSwgLi4udmFsdWVzKTtcclxuXHR9XHJcblx0Zm9yIChjb25zdCBbLCBlbGVtZW50XSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIltkYXRhLXN0cmluZ11cIikuZW50cmllcygpKSB7XHJcblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoZWxlbWVudC5kYXRhc2V0LnN0cmluZyB8fCBcIlwiKTtcclxuXHR9XHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuY29uc3Qgc3RvcmFnZUFyZWEgPSBkZWJ1Z18gPyBcImxvY2FsXCIgOiBcInN5bmNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21tb24obmFtZTogc3RyaW5nLCBwcmVmaXhfPzogc3RyaW5nKSB7XHJcblx0aWYgKHByZWZpeF8gJiYgZGVidWdfKSBjb25zb2xlLmxvZyhgUHJlZml4IGZvciAke25hbWV9IGlzIHNldCB0byAke3ByZWZpeF99YCk7XHJcblx0cmV0dXJuIHtsb2c6ICguLi50ZXh0OiB1bmtub3duW10pID0+IGNvbnNvbGUubG9nKHRlbXBsYXRlKG5hbWUpLCAuLi50ZXh0KSxcclxuXHRcdGVycm9yOiAoLi4udGV4dDogdW5rbm93bltdKSA9PiBjb25zb2xlLmVycm9yKHRlbXBsYXRlKG5hbWUpLCAuLi50ZXh0KSxcclxuXHRcdHdhcm46ICguLi50ZXh0OiB1bmtub3duW10pID0+IGNvbnNvbGUud2Fybih0ZW1wbGF0ZShuYW1lKSwgLi4udGV4dCksXHJcblx0XHRkZWJ1ZzogKHZhcmlhYmxlTmFtZTogc3RyaW5nLCB2YXJpYWJsZTogdW5rbm93bikgPT4gZGVidWdfICYmIGNvbnNvbGUubG9nKGAke3ZhcmlhYmxlTmFtZX06ICR7dmFyaWFibGV9IFRZUEVPRiAke3R5cGVvZiB2YXJpYWJsZX0gWyR7bmFtZX1dYCksXHJcblx0XHRnZXQ6IGFzeW5jIChuYW1lOiBzdHJpbmcsIHByZWZpeCA9IHByZWZpeF8gfHwgXCJcIik6IFByb21pc2U8dW5rbm93bj4gPT4ge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1hd2FpdC1leHByZXNzaW9uLW1lbWJlciwgc2VjdXJpdHkvZGV0ZWN0LW9iamVjdC1pbmplY3Rpb24gLS0gMS4gQWxsb3dzIGEgc2luZ2xlIGNvbnN0IHZhcmlhYmxlIHRvIGJlIGRlY2xhcmVkLiBPdGhlcndpc2UsIEknZCBuZWVkIGEgbGV0IHZhcmlhYmxlLiAyLiBOb3QgcG9zc2libGUsIG9ubHkgdHdvIHZhbHVlcywgbG9jYWwsIGFuZCBzeW5jLlxyXG5cdFx0XHRjb25zdCBkYXRhID0gKGF3YWl0IGJyb3dzZXIuc3RvcmFnZVtzdG9yYWdlQXJlYV0uZ2V0KFtwcmVmaXggKyBuYW1lXSkpW3ByZWZpeCArIG5hbWVdO1xyXG5cdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuXHRcdFx0cmV0dXJuIHNldHRpbmdzW3ByZWZpeCArIG5hbWVdO1xyXG5cdFx0fSxcclxuXHRcdHNldDogKG5hbWU6IHN0cmluZywgZGF0YTogYW55LCBwcmVmaXggPSBwcmVmaXhfIHx8IFwiXCIpOiB2b2lkID0+IHtcclxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlY3VyaXR5L2RldGVjdC1vYmplY3QtaW5qZWN0aW9uIC0tIE5vdCBwb3NzaWJsZSwgb25seSB0d28gdmFsdWVzLCBsb2NhbCwgYW5kIHN5bmMuXHJcblx0XHRcdGJyb3dzZXIuc3RvcmFnZVtzdG9yYWdlQXJlYV0uc2V0KHtbcHJlZml4ICsgbmFtZV06IEpTT04uc3RyaW5naWZ5KGRhdGEpfSk7XHJcblx0XHR9LFxyXG5cdFx0bG9jYWxlXHJcblx0fTtcclxufSIsICJleHBvcnQgY29uc3QgZGVidWcgPSB0cnVlLFxyXG5cdHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nPiA9IHtcclxuXHRcdFwicG9ydFwiOiA0MjAwLFxyXG5cdFx0XCJnYW1lYmFuYW5hXCI6IHRydWUsXHJcblx0XHRcIm1vZHNfdGZcIjogdHJ1ZSxcclxuXHRcdFwibW9kYm95XCI6IHRydWVcclxuXHR9LFxyXG5cdHRlbXBsYXRlID0gXCJQcm92aXNpb25zIE9uZS1DbGljayBJbnN0YWxsZXJcIjsiLCAiaW1wb3J0IHsgY29tbW9uIH0gZnJvbSBcIi4vbGliL2NvbW1vblwiO1xyXG5jb25zdCB7IGxvZywgZXJyb3IsIGRlYnVnLCBnZXQsIHNldCB9ID0gY29tbW9uKFwiVEYyIENsYXNzaWNcIik7XHJcbmxvZyhcIkxvYWRpbmcuLi5cIik7XHJcbmxvZyhcIkRvbmUuXCIpOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFFQSxZQUFJLENBQUNBLFdBQVdDLFFBQVFDLFNBQVNDLElBQUk7QUFDbkMsZ0JBQU0sSUFBSUMsTUFBTSwyREFBVjtRQUNQO0FBRUQsWUFBSSxPQUFPSixXQUFXSyxZQUFZLGVBQWVDLE9BQU9DLGVBQWVQLFdBQVdLLE9BQWpDLE1BQThDQyxPQUFPRSxXQUFXO0FBQy9HLGdCQUFNQyxtREFBbUQ7QUFPekQsZ0JBQU1DLFdBQVdDLG1CQUFpQjtBQUloQyxrQkFBTUMsY0FBYztjQUNsQixVQUFVO2dCQUNSLFNBQVM7a0JBQ1AsV0FBVztrQkFDWCxXQUFXO2dCQUZKO2dCQUlULFlBQVk7a0JBQ1YsV0FBVztrQkFDWCxXQUFXO2dCQUZEO2dCQUlaLE9BQU87a0JBQ0wsV0FBVztrQkFDWCxXQUFXO2dCQUZOO2dCQUlQLFVBQVU7a0JBQ1IsV0FBVztrQkFDWCxXQUFXO2dCQUZIO2NBYkY7Y0FrQlYsYUFBYTtnQkFDWCxVQUFVO2tCQUNSLFdBQVc7a0JBQ1gsV0FBVztnQkFGSDtnQkFJVixPQUFPO2tCQUNMLFdBQVc7a0JBQ1gsV0FBVztnQkFGTjtnQkFJUCxlQUFlO2tCQUNiLFdBQVc7a0JBQ1gsV0FBVztnQkFGRTtnQkFJZixhQUFhO2tCQUNYLFdBQVc7a0JBQ1gsV0FBVztnQkFGQTtnQkFJYixjQUFjO2tCQUNaLFdBQVc7a0JBQ1gsV0FBVztnQkFG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b0IsUUFBUSxNQUFNQSxVQUFTLElBQUksR0FBRyxHQUFHLElBQUk7QUFBQSxNQUNwRSxNQUFNLElBQUksU0FBb0IsUUFBUSxLQUFLQSxVQUFTLElBQUksR0FBRyxHQUFHLElBQUk7QUFBQSxNQUNsRSxPQUFPLENBQUMsY0FBc0IsYUFBc0IsU0FBVSxRQUFRLElBQUksR0FBRyxZQUFZLEtBQUssUUFBUSxXQUFXLE9BQU8sUUFBUSxLQUFLLElBQUksR0FBRztBQUFBLE1BQzVJLEtBQUssT0FBT0UsT0FBYyxTQUFTLFdBQVcsT0FBeUI7QUFFdEUsY0FBTSxRQUFRLE1BQU0sNkJBQUFELFFBQVEsUUFBUSxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVNDLEtBQUksQ0FBQyxHQUFHLFNBQVNBLEtBQUk7QUFDcEYsWUFBSSxTQUFTO0FBQVcsaUJBQU8sS0FBSyxNQUFNLElBQUk7QUFDOUMsZUFBTyxTQUFTLFNBQVNBLEtBQUk7QUFBQSxNQUM5QjtBQUFBLE1BQ0EsS0FBSyxDQUFDQSxPQUFjLE1BQVcsU0FBUyxXQUFXLE9BQWE7QUFFL0QscUNBQUFELFFBQVEsUUFBUSxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUMsU0FBU0MsS0FBSSxHQUFHLEtBQUssVUFBVSxJQUFJLEVBQUMsQ0FBQztBQUFBLE1BQ3pFO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNEOzs7QUUzQ0EsTUFBTSxFQUFFLEtBQUssT0FBTyxPQUFBQyxRQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sYUFBYTtBQUM1RCxNQUFJLFlBQVk7QUFDaEIsTUFBSSxPQUFPOyIsCiAgIm5hbWVzIjogWyJnbG9iYWxUaGlzIiwgImNocm9tZSIsICJydW50aW1lIiwgImlkIiwgIkVycm9yIiwgImJyb3dzZXIiLCAiT2JqZWN0IiwgImdldFByb3RvdHlwZU9mIiwgInByb3RvdHlwZSIsICJDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UiLCAid3JhcEFQSXMiLCAiZXh0ZW5zaW9uQVBJcyIsICJhcGlNZXRhZGF0YSIsICJrZXlzIiwgImxlbmd0aCIsICJEZWZhdWx0V2Vha01hcCIsICJXZWFrTWFwIiwgImNvbnN0cnVjdG9yIiwgImNyZWF0ZUl0ZW0iLCAiaXRlbXMiLCAidW5kZWZpbmVkIiwgImdldCIsICJrZXkiLCAiaGFzIiwgInNldCIsICJpc1RoZW5hYmxlIiwgInZhbHVlIiwgInRoZW4iLCAibWFrZUNhbGxiYWNrIiwgInByb21pc2UiLCAibWV0YWRhdGEiLCAiY2FsbGJhY2tBcmdzIiwgImxhc3RFcnJvciIsICJyZWplY3QiLCAibWVzc2FnZSIsICJzaW5nbGVDYWxsYmFja0FyZyIsICJyZXNvbHZlIiwgInBsdXJhbGl6ZUFyZ3VtZW50cyIsICJudW1BcmdzIiwgIndyYXBBc3luY0Z1bmN0aW9uIiwgIm5hbWUiLCAiYXN5bmNGdW5jdGlvbldyYXBwZXIiLCAidGFyZ2V0IiwgImFyZ3MiLCAibWluQXJncyIsICJtYXhBcmdzIiwgIlByb21pc2UiLCAiZmFsbGJhY2tUb05vQ2FsbGJhY2siLCAiY2JFcnJvciIsICJjb25zb2xlIiwgIndhcm4iLCAibm9DYWxsYmFjayIsICJ3cmFwTWV0aG9kIiwgIm1ldGhvZCIsICJ3cmFwcGVyIiwgIlByb3h5IiwgImFwcGx5IiwgInRhcmdldE1ldGhvZCIsICJ0aGlzT2JqIiwgImNhbGwiLCAiaGFzT3duUHJvcGVydHkiLCAiRnVuY3Rpb24iLCAiYmluZCIsICJ3cmFwT2JqZWN0IiwgIndyYXBwZXJzIiwgImNhY2hlIiwgImNyZWF0ZSIsICJoYW5kbGVycyIsICJwcm94eVRhcmdldCIsICJwcm9wIiwgInJlY2VpdmVyIiwgImRlZmluZVByb3BlcnR5IiwgImNvbmZpZ3VyYWJsZSIsICJlbnVtZXJhYmxlIiwgImRlc2MiLCAiUmVmbGVjdCIsICJkZWxldGVQcm9wZXJ0eSIsICJ3cmFwRXZlbnQiLCAid3JhcHBlck1hcCIsICJhZGRMaXN0ZW5lciIsICJsaXN0ZW5lciIsICJoYXNMaXN0ZW5lciIsICJyZW1vdmVMaXN0ZW5lciIsICJvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzIiwgIm9uUmVxdWVzdEZpbmlzaGVkIiwgInJlcSIsICJ3cmFwcGVkUmVxIiwgImdldENvbnRlbnQiLCAib25NZXNzYWdlV3JhcHBlcnMiLCAib25NZXNzYWdlIiwgInNlbmRlciIsICJzZW5kUmVzcG9uc2UiLCAiZGlkQ2FsbFNlbmRSZXNwb25zZSIsICJ3cmFwcGVkU2VuZFJlc3BvbnNlIiwgInNlbmRSZXNwb25zZVByb21pc2UiLCAicmVzcG9uc2UiLCAicmVzdWx0IiwgImVyciIsICJpc1Jlc3VsdFRoZW5hYmxlIiwgInNlbmRQcm9taXNlZFJlc3VsdCIsICJtc2ciLCAiZXJyb3IiLCAiX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fIiwgImNhdGNoIiwgIndyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrIiwgInJlcGx5IiwgIndyYXBwZWRTZW5kTWVzc2FnZSIsICJhcGlOYW1lc3BhY2VPYmoiLCAid3JhcHBlZENiIiwgInB1c2giLCAic2VuZE1lc3NhZ2UiLCAic3RhdGljV3JhcHBlcnMiLCAiZGV2dG9vbHMiLCAibmV0d29yayIsICJvbk1lc3NhZ2VFeHRlcm5hbCIsICJ0YWJzIiwgInNldHRpbmdNZXRhZGF0YSIsICJjbGVhciIsICJwcml2YWN5IiwgInNlcnZpY2VzIiwgIndlYnNpdGVzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgInRlbXBsYXRlIiwgImJyb3dzZXIiLCAibmFtZSIsICJkZWJ1ZyJdCn0K
