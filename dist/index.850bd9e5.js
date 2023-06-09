// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kubwF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "af599da5850bd9e5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1GgH0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _searchViewJs = require("./Views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _bookmarksViewJs = require("./Views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _hourlyForecastViewJs = require("./Views/hourlyForecastView.js");
var _hourlyForecastViewJsDefault = parcelHelpers.interopDefault(_hourlyForecastViewJs);
var _imageConditionJs = require("./Views/imageCondition.js");
var _imageConditionJsDefault = parcelHelpers.interopDefault(_imageConditionJs);
var _daysForecastViewJs = require("./Views/daysForecastView.js");
var _daysForecastViewJsDefault = parcelHelpers.interopDefault(_daysForecastViewJs);
var _searchResultsViewJs = require("./Views/searchResultsView.js");
var _searchResultsViewJsDefault = parcelHelpers.interopDefault(_searchResultsViewJs);
var _locationViewJs = require("./Views/locationView.js");
var _locationViewJsDefault = parcelHelpers.interopDefault(_locationViewJs);
var _dateViewJs = require("./Views/dateView.js");
var _dateViewJsDefault = parcelHelpers.interopDefault(_dateViewJs);
var _conditionsTopViewJs = require("./Views/conditionsTopView.js");
var _conditionsTopViewJsDefault = parcelHelpers.interopDefault(_conditionsTopViewJs);
var _conditionsBottomViewJs = require("./Views/conditionsBottomView.js");
var _conditionsBottomViewJsDefault = parcelHelpers.interopDefault(_conditionsBottomViewJs);
var _modelJs = require("./model.js");
const controlWeather = async ()=>{
    try {
        // Rendering current location condition
        (0, _imageConditionJsDefault.default).render();
        // Rendering current location city name and temperature
        (0, _locationViewJsDefault.default).render();
        // Rendering current date
        (0, _dateViewJsDefault.default).render();
        // Rendering curent location conditions
        (0, _conditionsTopViewJsDefault.default).render();
        // Rendering hourly forecast
        (0, _hourlyForecastViewJsDefault.default).render();
        // Rendering current location conditions
        (0, _conditionsBottomViewJsDefault.default).render();
        // Rendering weather forecast for 3 following days
        (0, _daysForecastViewJsDefault.default).render();
        _modelJs.spinnerF();
    } catch (err) {
        console.error(err);
    }
};
const controlSearch = async ()=>{
    try {
        // Getting search value
        const searchInput = await (0, _searchViewJsDefault.default).getSearchValue();
        // API search request and creating search Array from the search value
        await _modelJs.loadSearchResults(searchInput);
        // Rendering search values
        (0, _searchViewJsDefault.default).render();
        // Activating closing modal function
        (0, _searchViewJsDefault.default).closeModals();
    } catch (err) {
        console.error(err);
    }
};
const controlBookmark = ()=>{
    // Rendering bookmarks
    (0, _bookmarksViewJsDefault.default).render();
    // Activating closing modal function
    (0, _bookmarksViewJsDefault.default).closeModals();
};
const init = async function() {
    await _modelJs.getPosition();
    console.log("START");
    // Render current weather for current location
    console.log("CONTROL WEATHER");
    await controlWeather();
    console.log("BOOKMARKS");
    (0, _bookmarksViewJsDefault.default).addHandlerBookmarks(controlBookmark, controlWeather);
    console.log("SEARCH VIEW");
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearch);
    console.log("SEARCH RESULTS");
    (0, _searchResultsViewJsDefault.default).addHandlerSearchResult(controlWeather);
};
init();

},{"./Views/searchView.js":"kwNuX","./Views/bookmarksView.js":"lV33X","./Views/hourlyForecastView.js":"fumKw","./Views/imageCondition.js":"3TRed","./Views/daysForecastView.js":"gXx9d","./Views/searchResultsView.js":"8EH03","./Views/locationView.js":"bmcVE","./Views/dateView.js":"gcCiO","./Views/conditionsTopView.js":"5jHq4","./Views/conditionsBottomView.js":"aGV48","./model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"kwNuX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weatherJs = require("./weather.js");
var _weatherJsDefault = parcelHelpers.interopDefault(_weatherJs);
var _modelJs = require("../model.js");
class SearchView extends (0, _weatherJsDefault.default) {
    _parentElement = document.getElementById("search-results");
    _searchForm = document.getElementById("search-form");
    _searchInput = document.querySelector(".search-input");
    // Handler - handling search input
    addHandlerSearch(handler) {
        this._searchForm.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
    // Returning searching value from the form
    getSearchValue = async ()=>{
        const searchValue = this._searchInput.value;
        this._clearInput();
        return searchValue;
    };
    // Clearing search input
    _clearInput = ()=>{
        this._searchInput.value = "";
        this._searchInput.blur();
    };
    // Generating HTML code od search results
    _generateMarkup = ()=>{
        if (_modelJs.search.length === 0) return `
      <div class="result-container">
        <div class="result">
          <h1>No results found</h1>
          <h2>Please try again</h2>
        </div>
      </div>`;
        else return _modelJs.search.map((value)=>{
            return `
        <div class="result-container">
          <div class="result">
            <h1>${value.name}</h1>
            <h2>${value.region}${value.region ? "," : ""} ${value.country}</h2>
          </div>
          <div class="result-bookmark">
            <button class="${value.bookmarked.found ? "remove" : "add"}-bookmark" data-lat="${value.lat}" data-lon="${value.lon}" id="${value.bookmarked.id}">
              ${value.bookmarked.found ? "REMOVE" : "ADD"}
            </button>
          </div>
        </div>`;
        }).join("");
    };
}
exports.default = new SearchView();

},{"./weather.js":"dP2Qc","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"dP2Qc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Weather {
    _appContainer = document.querySelector(".app");
    // Rendering App content for each container
    render = ()=>{
        this._clear();
        const markup = this._generateMarkup();
        this._parentElement.insertAdjacentHTML("beforeend", markup);
    };
    // Clearing containers content
    _clear = ()=>{
        this._parentElement.innerHTML = "";
    };
    // Closing modals
    closeModals = ()=>{
        document.addEventListener("click", (event)=>{
            if (!event.target.classList.contains("result") && !event.target.classList.contains("bookmark-result") && !event.target.classList.contains("bookmark") && event.target !== this._parentElement) {
                this._appContainer.style.opacity = 1;
                this._parentElement.innerHTML = "";
            }
        });
    };
}
exports.default = Weather;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"60M8e":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Py0LO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "weekDays", ()=>weekDays);
parcelHelpers.export(exports, "weather", ()=>weather);
parcelHelpers.export(exports, "search", ()=>search);
parcelHelpers.export(exports, "bookmarks", ()=>bookmarks);
parcelHelpers.export(exports, "closeModals", ()=>closeModals);
parcelHelpers.export(exports, "updateWeather", ()=>updateWeather);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "handleClick", ()=>handleClick);
parcelHelpers.export(exports, "getPosition", ()=>getPosition);
parcelHelpers.export(exports, "spinnerF", ()=>spinnerF);
var _configJs = require("./config.js");
const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let weather = {};
let search = [];
let bookmarks = [];
const createWeatherObject = function(data) {
    const weather = data;
    const weeklyForecast = weather.forecast.forecastday.map((day)=>{
        const date = new Date(day.date);
        return {
            dayOfTheWeek: weekDays[date.getDay()],
            image: day.day.condition.icon,
            minTemp: day.day.mintemp_c,
            maxTemp: day.day.maxtemp_c
        };
    });
    return {
        date: weather.forecast.forecastday[0].date,
        name: weather.location.name,
        region: weather.location.region,
        country: weather.location.country,
        lat: weather.location.lat,
        lon: weather.location.lon,
        coords: weather.location.lat.toString().concat(",", weather.location.lon.toString()),
        localtime: weather.location.localtime,
        daysForecast: weather.forecast.forecastday,
        currentImage: weather.current.condition.icon,
        currentCondition: weather.current.condition.text,
        feelslike: weather.current.feelslike_c + "℃",
        humidity: weather.current.humidity + " %",
        temp: weather.current.temp_c + "℃",
        sunrise: weather.forecast.forecastday[0].astro.sunrise,
        sunset: weather.forecast.forecastday[0].astro.sunset,
        moonrise: weather.forecast.forecastday[0].astro.moonrise,
        moonset: weather.forecast.forecastday[0].astro.moonset,
        mintemp: weather.forecast.forecastday[0].day.mintemp_c + "℃",
        maxtemp: weather.forecast.forecastday[0].day.maxtemp_c + "℃",
        wind: weather.current.wind_kph + " km/h",
        pressure: weather.current.pressure_mb + " hPa",
        visibility: weather.current.vis_km + " km",
        weeklyForecast: weeklyForecast
    };
};
const createSearchArray = function(data) {
    const search = data;
    console.log(search);
    return search.map((value)=>{
        return {
            country: value.country,
            lat: value.lat,
            lon: value.lon,
            coords: value.lat.toString().concat(",", value.lon.toString()),
            name: value.name,
            region: value.region,
            bookmarked: isBookmark(value.lat, value.lon)
        };
    });
};
const init = async ()=>{
    const data = await (JSON.parse(localStorage.getItem("Locations")) || []);
    localStorage.clear();
    data.forEach(async (bookmark)=>{
        const updatedBookmark = await (0, _configJs.API_CALL)(bookmark.coords, "forecast");
        addBookmark(createWeatherObject(updatedBookmark));
    });
};
const updateBookmarks = ()=>{
    localStorage.setItem("Locations", JSON.stringify(bookmarks));
};
const addBookmark = (data)=>{
    bookmarks.push(data);
    updateBookmarks();
};
const removeBookmark = (index)=>{
    bookmarks.splice(index, 1);
    updateBookmarks();
};
const isBookmark = (lat, lon)=>{
    const index = bookmarks.findIndex((city)=>city.lat === lat && city.lon === lon);
    const coords = lat + lon;
    if (index !== -1) return {
        found: true,
        index,
        id: coords
    };
    return {
        found: false,
        index: -1,
        id: coords
    };
};
const resultsArray = async (target, array)=>{
    console.log(array);
    const selectedResult = await array.find((value)=>value.name === target.querySelector("h1").textContent.trim());
    console.log(selectedResult);
    return selectedResult;
};
const closeModals = ()=>{
    document.addEventListener("click", (event)=>{
        if (!event.target.classList.contains("result") && !event.target.classList.contains("bookmark-result") && !event.target.classList.contains("bookmark") && event.target !== undefined._parentElement) {
            undefined._appContainer.style.opacity = 1;
            undefined._parentElement.innerHTML = "";
        }
    });
};
const renderMap = (lat, long)=>{
    const mapContainer = document.getElementById("mapContainer");
    mapContainer.innerHTML = "";
    const mapDiv = document.createElement("div");
    mapDiv.id = "map";
    mapContainer.appendChild(mapDiv);
    mapDiv.style.height = "250px";
    const latitude = Number(lat);
    const longitude = Number(long);
    let map = L.map("map").setView([
        latitude,
        longitude
    ], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    L.marker([
        latitude,
        longitude
    ]).addTo(map);
};
const updateWeather = async function(coords, handler) {
    try {
        const data = await (0, _configJs.API_CALL)(coords, "forecast");
        weather = createWeatherObject(data);
        renderMap(weather.lat, weather.lon);
        console.log(weather);
        if (handler) handler();
    } catch (err) {
        throw err;
    }
};
const loadSearchResults = async (searchInput)=>{
    const data = await (0, _configJs.API_CALL)(searchInput, "search");
    search = createSearchArray(data);
    console.log(search);
    return data;
};
const handleClick = async function(event, handler) {
    const target = event.target.closest(".result, .add-bookmark, .remove-bookmark, .bookmark-result");
    if (!target) return;
    if (target.classList.contains("result")) {
        const data = await resultsArray(target, search);
        spinnerF();
        await updateWeather(data.coords, handler);
    }
    if (target.classList.contains("bookmark-result")) {
        const data = await resultsArray(target, bookmarks);
        console.log("target", target);
        console.log("data", data);
        spinnerF();
        await updateWeather(data.coords, handler);
    }
    if (target.classList.contains("add-bookmark")) {
        if (!isBookmark(target.dataset.lat, target.dataset.lon).found) {
            const coords = target.dataset.lat.toString().concat(",", target.dataset.lon.toString());
            const data = await (0, _configJs.API_CALL)(coords, "forecast");
            addBookmark(createWeatherObject(data));
        }
    }
    if (target.classList.contains("remove-bookmark")) {
        const index = bookmarks.findIndex((el)=>+target.dataset.lat === el.lat && +target.dataset.lon === el.lon);
        removeBookmark(index);
    }
};
const userLocation = async (position)=>{
    const coords = position.coords.latitude.toString().concat(",", position.coords.longitude.toString());
    await updateWeather(coords);
};
const blockedLocation = async ()=>{
    console.log("error");
};
const getPosition = ()=>{
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            userLocation(position).then(resolve).catch(reject);
        }, (error)=>{
            blockedLocation().then(resolve).catch(reject);
        });
    });
};
const spinnerF = ()=>{
    const spinner = document.querySelector(".spinner");
    spinner.classList.toggle("spinner-hidden");
};
init();

},{"./config.js":"4Wc5b","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"4Wc5b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API", ()=>API);
parcelHelpers.export(exports, "API_CALL", ()=>API_CALL);
parcelHelpers.export(exports, "appContainer", ()=>appContainer);
const API = "f69871db34ac42019b8170127231205";
const API_CALL = async (input, call)=>{
    const response = await fetch(`http://api.weatherapi.com/v1/${call}.json?key=${API}&q=${input}&days=3`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data;
};
const appContainer = document.querySelector(".app");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"lV33X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weatherJs = require("./weather.js");
var _weatherJsDefault = parcelHelpers.interopDefault(_weatherJs);
var _modelJs = require("../model.js");
class BookmarksView extends (0, _weatherJsDefault.default) {
    _parentElement = document.querySelector(".bookmark-modal");
    _bookmarkButton = document.querySelector(".bookmark");
    // Handler - openning bookmarks modal and controlling rendered bookmarks
    addHandlerBookmarks = async (handler, weather)=>{
        this._bookmarkButton.addEventListener("click", async ()=>{
            handler();
            this._parentElement.addEventListener("click", (event)=>{
                _modelJs.handleClick(event, weather);
            });
        });
    };
    // Returning HTML code for bookmarks
    _generateMarkup = ()=>{
        if (_modelJs.bookmarks.length === 0) return `
      <div class="bookmark-container">
    <div class="bookmark-result">
      <h1>No Bookmarks yet</h1>
      <h2>Search for places and add them to bookmarks</h2>
    </div>
    
    </div>`;
        else return _modelJs.bookmarks.map((value)=>{
            return `<div class="bookmark-container">
<div class="bookmark-result">
    <h1>${value.name}</h1>
    <h2>${value.region}${value.region ? "," : ""} ${value.country}</h2>
  </div>
  <div class="result-bookmark"><button class="contol-bookmark remove-bookmark" data-lat="${value.lat}" data-lon ="${value.lon}" id="${value.lat + value.lon}">REMOVE</button></div>
  
  </div>`;
        }).join("");
    };
}
exports.default = new BookmarksView();

},{"./weather.js":"dP2Qc","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"fumKw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weatherJs = require("./weather.js");
var _weatherJsDefault = parcelHelpers.interopDefault(_weatherJs);
var _modelJs = require("../model.js");
class HourlyForecastView extends (0, _weatherJsDefault.default) {
    _parentElement = document.getElementById("hourly-forecast");
    // Returning HTML code of weather hourly conditions for the current day
    _generateMarkup() {
        return _modelJs.weather.daysForecast[0].hour.map((hour)=>{
            const date = new Date(hour.time);
            const hourDate = date.getHours();
            return `<div class="weather-data">
        <p>${hourDate}:00</p>
        <p><img src="${hour.condition.icon}"/></p>
        <p>${hour.temp_c}℃</p>
      </div>`;
        }).join("");
    }
}
exports.default = new HourlyForecastView();

},{"./weather.js":"dP2Qc","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"3TRed":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weatherJs = require("./weather.js");
var _weatherJsDefault = parcelHelpers.interopDefault(_weatherJs);
var _modelJs = require("../model.js");
class ImageConditionView extends (0, _weatherJsDefault.default) {
    _parentElement = document.getElementById("location-image");
    // Returning HTML code of current lcoation condition
    _generateMarkup() {
        return `<img src="${_modelJs.weather.currentImage}"/>`;
    }
}
exports.default = new ImageConditionView();

},{"./weather.js":"dP2Qc","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"gXx9d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weatherJs = require("./weather.js");
var _weatherJsDefault = parcelHelpers.interopDefault(_weatherJs);
var _modelJs = require("../model.js");
class DaysForecastView extends (0, _weatherJsDefault.default) {
    _parentElement = document.getElementById("forecast-days");
    // Returning HTML code of weather forecast for 3 following days
    _generateMarkup() {
        return _modelJs.weather.weeklyForecast.map((day)=>{
            return `
    <div class="forecast-day">
    <img src="${day.image}"/>
    <div class="forecast-day-container">
    <div><p>${day.dayOfTheWeek}</p></div><div class="forecast-day-temperature">${day.minTemp}℃ <div class="temperature-bar"></div>${day.maxTemp}℃</div></div></div>
  `;
        }).join("");
    }
}
exports.default = new DaysForecastView();

},{"./weather.js":"dP2Qc","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"8EH03":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weatherJs = require("./weather.js");
var _weatherJsDefault = parcelHelpers.interopDefault(_weatherJs);
var _modelJs = require("../model.js");
class SearchResultsView extends (0, _weatherJsDefault.default) {
    _parentElement = document.getElementById("search-results");
    // Handler - controlling clicks on the search results
    addHandlerSearchResult = (handler)=>{
        this._parentElement.addEventListener("click", (event)=>{
            _modelJs.handleClick(event, handler);
        });
    };
}
exports.default = new SearchResultsView();

},{"./weather.js":"dP2Qc","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"bmcVE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weatherJs = require("./weather.js");
var _weatherJsDefault = parcelHelpers.interopDefault(_weatherJs);
var _modelJs = require("../model.js");
class LocationView extends (0, _weatherJsDefault.default) {
    _parentElement = document.getElementById("location-name");
    // Returning HTML code of location name and current temperature
    _generateMarkup() {
        return `<div><h1>${_modelJs.weather.name}</h1></div>
    <div><h1>${_modelJs.weather.temp}</h1></div>`;
    }
}
exports.default = new LocationView();

},{"./weather.js":"dP2Qc","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"gcCiO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weatherJs = require("./weather.js");
var _weatherJsDefault = parcelHelpers.interopDefault(_weatherJs);
var _modelJs = require("../model.js");
class DateView extends (0, _weatherJsDefault.default) {
    _parentElement = document.getElementById("location-date");
    // Returning HTML code of the location date
    _generateMarkup() {
        return `<h1>${_modelJs.weather.date}</h1>`;
    }
}
exports.default = new DateView();

},{"./weather.js":"dP2Qc","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"5jHq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weatherJs = require("./weather.js");
var _weatherJsDefault = parcelHelpers.interopDefault(_weatherJs);
var _modelJs = require("../model.js");
class ConditionsTopView extends (0, _weatherJsDefault.default) {
    _parentElement = document.getElementById("conditions-top");
    // Returning HTML code of weather conditions on the top half of the screen
    _generateMarkup() {
        return ` <div class="half-container single"><h3 id="sunrise">Sunrise:</h3><h1>${_modelJs.weather.sunrise}</h1></div>
    <div class="half-container single"><h3 id="sunset">Sunset:</h3><h1>${_modelJs.weather.sunset}</h1></div>
    <div class="half-container single">
      <h3 id="moonrise">Moonrise:</h3><h1>${_modelJs.weather.moonrise}</h1>
    </div>
    <div class="half-container single"><h3 id="moonset">Moonset:</h3><h1>${_modelJs.weather.moonset}</h1></div>
    <div class="half-container single"><h3 id="minTemp">Min Temp:</h3><h1>${_modelJs.weather.mintemp}</h1></div>
    <div class="half-container single"><h3 id="maxTemp">Max Temp:</h3><h1>${_modelJs.weather.maxtemp}</h1></div>`;
    }
}
exports.default = new ConditionsTopView();

},{"./weather.js":"dP2Qc","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}],"aGV48":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weatherJs = require("./weather.js");
var _weatherJsDefault = parcelHelpers.interopDefault(_weatherJs);
var _modelJs = require("../model.js");
class ConditionsBottomView extends (0, _weatherJsDefault.default) {
    _parentElement = document.getElementById("conditions-bottom");
    // Returning HTML code of weather conditions on the bottom half of the screen
    _generateMarkup() {
        return ` <div class="half-container single">
    <h3 id="feelsLike">Feels like:</h3><h1>${_modelJs.weather.feelslike}</h1>
  </div>
  <div class="half-container single">
    <h3 id="condition">Condition:</h3><h1>${_modelJs.weather.currentCondition}</h1>
  </div>
  <div class="half-container single"><h3 id="wind">Wind:</h3><h1>${_modelJs.weather.wind}</h1></div>
  <div class="half-container single">
    <h3 id="pressure">Pressure:</h3><h1>${_modelJs.weather.pressure}</h1>
  </div>
  <div class="half-container single">
    <h3 id="humidity">Humidity:</h3><h1>${_modelJs.weather.humidity}</h1>
  </div>
  <div class="half-container single">
    <h3 id="visibility">Visibility:</h3><h1>${_modelJs.weather.visibility}</h1>
  </div>`;
    }
}
exports.default = new ConditionsBottomView();

},{"./weather.js":"dP2Qc","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"60M8e"}]},["kubwF","1GgH0"], "1GgH0", "parcelRequire13b7")

//# sourceMappingURL=index.850bd9e5.js.map
