import { Board as e, Wrapper as t, isTwoFingerMode as n, useBoard as r, useListRender as i } from "@plait-board/react-board";
import { ACTIVE_STROKE_WIDTH as a, ATTACHED_ELEMENT_CLASS_NAME as o, BoardTransforms as s, CoreTransforms as c, DEFAULT_COLOR as l, IS_APPLE as u, IS_IOS as d, IS_MAC as f, MERGING as p, PlaitBoard as m, PlaitElement as h, PlaitGroupElement as g, PlaitHistoryBoard as _, PlaitPointerType as v, RectangleClient as y, ThemeColorMode as b, Transforms as x, WritableClipboardOperationType as S, WritableClipboardType as ee, addOrCreateClipboardContext as te, deleteFragment as ne, distanceBetweenPointAndPoint as re, duplicateElements as C, getHitElementByPoint as ie, getRectangleByElements as ae, getSelectedElements as w, getViewportOrigination as oe, idCreator as T, isDragging as se, isMainPointer as ce, isMovingElements as le, isNullOrUndefined as ue, isPencilEvent as de, isPointInPolygon as fe, isSelectionMoving as pe, rotateAntiPointsByElement as me, setStrokeLinecap as he, throttleRAF as ge, toHostPoint as _e, toHostPointFromViewBoxPoint as ve, toImage as ye, toScreenPointFromHostPoint as be, toSvgData as xe, toViewBoxPoint as Se } from "@plait/core";
import * as E from "react";
import Ce, { createContext as we, forwardRef as Te, useCallback as Ee, useContext as De, useDeferredValue as Oe, useEffect as D, useMemo as ke, useRef as O, useState as k } from "react";
import { BoardCreationMode as A, CommonElementFlavour as Ae, Generator as je, PropertyTransforms as Me, StrokeStyle as Ne, buildClipboardData as Pe, createActiveGenerator as Fe, getElementOfFocusedImage as Ie, getFirstTextEditor as Le, hasResizeHandle as Re, insertClipboardData as ze, isDrawingMode as Be, isResizing as Ve, setCreationMode as j, withGroup as He } from "@plait/common";
import { ArrowLineShape as Ue, BasicShapes as M, DefaultDrawStyle as We, DrawI18nKey as Ge, DrawTransforms as Ke, FlowchartSymbols as qe, PlaitDrawElement as N, WithDrawPluginKey as Je, getFillByElement as Ye, getHitDrawElement as Xe, getMemorizeKey as Ze, getStrokeColorByElement as Qe, getStrokeStyleByElement as $e, getStrokeWidthByElement as et, isClosedCustomGeometry as tt, isClosedDrawElement as nt, isClosedPoints as rt, isDrawElementsIncludeText as it, isHitPolyLine as at, isRectangleHitRotatedPoints as ot, withDraw as st } from "@plait/draw";
import { MindElement as P, MindI18nKey as ct, MindPointerType as lt, MindThemeColors as ut, MindTransforms as dt, WithMindPluginKey as ft, getFillByElement as pt, getStrokeColorByElement as mt, isHitImage as ht, withMind as gt } from "@plait/mind";
import _t from "mobile-detect";
import { createRoot as vt } from "react-dom/client";
import { Fragment as F, jsx as I, jsxs as L } from "react/jsx-runtime";
import R from "classnames";
import { FloatingFocusManager as yt, FloatingList as bt, FloatingOverlay as xt, FloatingPortal as St, autoUpdate as Ct, flip as wt, offset as Tt, shift as Et, useClick as Dt, useDismiss as Ot, useFloating as kt, useId as At, useInteractions as jt, useListItem as Mt, useListNavigation as Nt, useMergeRefs as Pt, useRole as Ft, useTypeahead as It } from "@floating-ui/react";
import { DEFAULT_FONT_SIZE as Lt, LinkEditor as Rt, TextTransforms as zt, getTextMarksByElement as Bt } from "@plait/text-plugins";
import { ReactEditor as Vt } from "slate-react";
import { drainPoints as Ht, drawLaserPen as Ut, setColor as Wt, setDelay as Gt, setMaxWidth as Kt, setMinWidth as qt, setOpacity as Jt, setRoundCap as Yt } from "laser-pen";
import { Transforms as Xt } from "slate";
//#region \0rolldown/runtime.js
var Zt = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Qt = (e) => /* @__PURE__ */ I("span", {
	className: "mind-node-emoji",
	style: { fontSize: `${e.fontSize}px` },
	children: e.emojiItem.name
}), $t = (e) => {
	let t = e;
	return e.setPluginOptions(ft, {
		emojiPadding: 0,
		spaceBetweenEmojis: 4
	}), t.renderEmoji = (e, t) => {
		let n = document.createElement("span");
		e.appendChild(n);
		let r = vt(n);
		r.render(/* @__PURE__ */ I(Qt, { ...t }));
		let i = { ...t };
		return {
			destroy: () => {
				setTimeout(() => {
					r.unmount();
				}, 0);
			},
			update: (e) => {
				i = {
					...i,
					...e
				}, r.render(/* @__PURE__ */ I(Qt, { ...i }));
			}
		};
	}, t;
}, en = (e) => /* @__PURE__ */ I("div", {
	style: { display: "flex" },
	children: /* @__PURE__ */ I("img", {
		src: e.imageItem.url,
		draggable: !1,
		width: "100%",
		className: R("image-origin", { "image-origin--focus": e.isFocus })
	})
}), tn = /* @__PURE__ */ function(e) {
	return e.COPY = "copy", e.PASTE = "paste", e.CUT = "cut", e.KEYDOWN = "keydown", e.KEYUP = "keyup", e.MOUSE_MOVE = "mousemove", e.RESIZE = "resize", e.UNLOAD = "unload", e.FOCUS = "focus", e.BLUR = "blur", e.DRAG_OVER = "dragover", e.DROP = "drop", e.GESTURE_END = "gestureend", e.BEFORE_UNLOAD = "beforeunload", e.GESTURE_START = "gesturestart", e.GESTURE_CHANGE = "gesturechange", e.POINTER_MOVE = "pointermove", e.POINTER_DOWN = "pointerdown", e.POINTER_UP = "pointerup", e.STATE_CHANGE = "statechange", e.WHEEL = "wheel", e.TOUCH_START = "touchstart", e.TOUCH_END = "touchend", e.HASHCHANGE = "hashchange", e.VISIBILITY_CHANGE = "visibilitychange", e.SCROLL = "scroll", e.MENU_ITEM_SELECT = "menu.itemSelect", e.MESSAGE = "message", e.FULLSCREENCHANGE = "fullscreenchange", e;
}({}), nn = {
	svg: "image/svg+xml",
	png: "image/png",
	jpg: "image/jpeg",
	gif: "image/gif",
	webp: "image/webp",
	bmp: "image/bmp",
	ico: "image/x-icon",
	avif: "image/avif",
	jfif: "image/jfif"
}, rn = {
	json: "application/json",
	drawnix: "application/vnd.drawnix+json",
	...nn
}, an = { drawnix: 1 }, on = (() => {
	if (typeof self > "u") return !1;
	if ("top" in self && self !== top) try {
		top.window.document._ = 0;
	} catch {
		return !1;
	}
	return "showOpenFilePicker" in self;
})(), sn = on ? Promise.resolve().then(function() {
	return fn;
}) : Promise.resolve().then(function() {
	return _n;
});
async function cn(...e) {
	return (await sn).default(...e);
}
on ? Promise.resolve().then(function() {
	return hn;
}) : Promise.resolve().then(function() {
	return vn;
});
var ln = on ? Promise.resolve().then(function() {
	return gn;
}) : Promise.resolve().then(function() {
	return yn;
});
async function un(...e) {
	return (await ln).default(...e);
}
var dn = async (e) => {
	let t = await e.getFile();
	return t.handle = e, t;
}, fn = {
	__proto__: null,
	default: async (e = [{}]) => {
		Array.isArray(e) || (e = [e]);
		let t = [];
		e.forEach((e, n) => {
			t[n] = {
				description: e.description || "Files",
				accept: {}
			}, e.mimeTypes ? e.mimeTypes.map((r) => {
				t[n].accept[r] = e.extensions || [];
			}) : t[n].accept["*/*"] = e.extensions || [];
		});
		let n = await window.showOpenFilePicker({
			id: e[0].id,
			startIn: e[0].startIn,
			types: t,
			multiple: e[0].multiple || !1,
			excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1
		}), r = await Promise.all(n.map(dn));
		return e[0].multiple ? r : r[0];
	}
};
function pn(e) {
	function t(e) {
		if (Object(e) !== e) return Promise.reject(/* @__PURE__ */ TypeError(e + " is not an object."));
		var t = e.done;
		return Promise.resolve(e.value).then(function(e) {
			return {
				value: e,
				done: t
			};
		});
	}
	return pn = function(e) {
		this.s = e, this.n = e.next;
	}, pn.prototype = {
		s: null,
		n: null,
		next: function() {
			return t(this.n.apply(this.s, arguments));
		},
		return: function(e) {
			var n = this.s.return;
			return n === void 0 ? Promise.resolve({
				value: e,
				done: !0
			}) : t(n.apply(this.s, arguments));
		},
		throw: function(e) {
			var n = this.s.return;
			return n === void 0 ? Promise.reject(e) : t(n.apply(this.s, arguments));
		}
	}, new pn(e);
}
var mn = async (e, t, n = e.name, r) => {
	let i = [], a = [];
	var o, s = !1, c = !1;
	try {
		for (var l, u = function(e) {
			var t, n, r, i = 2;
			for (typeof Symbol < "u" && (n = Symbol.asyncIterator, r = Symbol.iterator); i--;) {
				if (n && (t = e[n]) != null) return t.call(e);
				if (r && (t = e[r]) != null) return new pn(t.call(e));
				n = "@@asyncIterator", r = "@@iterator";
			}
			throw TypeError("Object is not async iterable");
		}(e.values()); s = !(l = await u.next()).done; s = !1) {
			let o = l.value, s = `${n}/${o.name}`;
			o.kind === "file" ? a.push(o.getFile().then((t) => (t.directoryHandle = e, t.handle = o, Object.defineProperty(t, "webkitRelativePath", {
				configurable: !0,
				enumerable: !0,
				get: () => s
			})))) : o.kind !== "directory" || !t || r && r(o) || i.push(mn(o, t, s, r));
		}
	} catch (e) {
		c = !0, o = e;
	} finally {
		try {
			s && u.return != null && await u.return();
		} finally {
			if (c) throw o;
		}
	}
	return [...(await Promise.all(i)).flat(), ...await Promise.all(a)];
}, hn = {
	__proto__: null,
	default: async (e = {}) => {
		e.recursive = e.recursive || !1, e.mode = e.mode || "read";
		let t = await window.showDirectoryPicker({
			id: e.id,
			startIn: e.startIn,
			mode: e.mode
		});
		return (await (await t.values()).next()).done ? [t] : mn(t, e.recursive, void 0, e.skipDirectory);
	}
}, gn = {
	__proto__: null,
	default: async (e, t = [{}], n = null, r = !1, i = null) => {
		Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
		let a = [], o = null;
		if (e instanceof Blob && e.type ? o = e.type : e.headers && e.headers.get("content-type") && (o = e.headers.get("content-type")), t.forEach((e, t) => {
			a[t] = {
				description: e.description || "Files",
				accept: {}
			}, e.mimeTypes ? (t === 0 && o && e.mimeTypes.push(o), e.mimeTypes.map((n) => {
				a[t].accept[n] = e.extensions || [];
			})) : o ? a[t].accept[o] = e.extensions || [] : a[t].accept["*/*"] = e.extensions || [];
		}), n) try {
			await n.getFile();
		} catch (e) {
			if (n = null, r) throw e;
		}
		let s = n || await window.showSaveFilePicker({
			suggestedName: t[0].fileName,
			id: t[0].id,
			startIn: t[0].startIn,
			types: a,
			excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
		});
		!n && i && i(s);
		let c = await s.createWritable();
		return "stream" in e ? (await e.stream().pipeTo(c), s) : "body" in e ? (await e.body.pipeTo(c), s) : (await c.write(await e), await c.close(), s);
	}
}, _n = {
	__proto__: null,
	default: async (e = [{}]) => (Array.isArray(e) || (e = [e]), new Promise((t, n) => {
		let r = document.createElement("input");
		r.type = "file";
		let i = [...e.map((e) => e.mimeTypes || []), ...e.map((e) => e.extensions || [])].join();
		r.multiple = e[0].multiple || !1, r.accept = i || "", r.style.display = "none", document.body.append(r), r.addEventListener("cancel", () => {
			r.remove(), n(new DOMException("The user aborted a request.", "AbortError"));
		}), r.addEventListener("change", () => {
			r.remove(), t(r.multiple ? Array.from(r.files) : r.files[0]);
		}), "showPicker" in HTMLInputElement.prototype ? r.showPicker() : r.click();
	}))
}, vn = {
	__proto__: null,
	default: async (e = [{}]) => (Array.isArray(e) || (e = [e]), e[0].recursive = e[0].recursive || !1, new Promise((t, n) => {
		let r = document.createElement("input");
		r.type = "file", r.webkitdirectory = !0, r.style.display = "none", document.body.append(r), r.addEventListener("cancel", () => {
			r.remove(), n(new DOMException("The user aborted a request.", "AbortError"));
		}), r.addEventListener("change", () => {
			r.remove();
			let n = Array.from(r.files);
			e[0].recursive ? e[0].recursive && e[0].skipDirectory && (n = n.filter((t) => t.webkitRelativePath.split("/").every((t) => !e[0].skipDirectory({
				name: t,
				kind: "directory"
			})))) : n = n.filter((e) => e.webkitRelativePath.split("/").length === 2), t(n);
		}), "showPicker" in HTMLInputElement.prototype ? r.showPicker() : r.click();
	}))
}, yn = {
	__proto__: null,
	default: async (e, t = {}) => {
		Array.isArray(t) && (t = t[0]);
		let n = document.createElement("a"), r = e;
		"body" in e && (r = await async function(e, t) {
			let n = e.getReader(), r = new ReadableStream({ start: (e) => async function t() {
				return n.read().then(({ done: n, value: r }) => {
					if (!n) return e.enqueue(r), t();
					e.close();
				});
			}() }), i = await new Response(r).blob();
			return n.releaseLock(), new Blob([i], { type: t });
		}(e.body, e.headers.get("content-type"))), n.download = t.fileName || "Untitled", n.href = URL.createObjectURL(await r);
		let i = () => {
			typeof a == "function" && a();
		}, a = t.legacySetup && t.legacySetup(i, () => a(), n);
		return n.addEventListener("click", () => {
			setTimeout(() => URL.revokeObjectURL(n.href), 3e4), i();
		}), n.click(), null;
	}
}, bn = (e) => {
	let t = e.extensions?.reduce((e, t) => (e.push(rn[t]), e), []), n = e.extensions?.reduce((e, t) => t === "jpg" ? e.concat(".jpg", ".jpeg") : e.concat(`.${t}`), []);
	return cn({
		description: e.description,
		extensions: n,
		mimeTypes: t,
		multiple: e.multiple ?? !1
	});
}, xn = (e, t) => un(e, {
	fileName: `${t.name}.${t.extension}`,
	description: t.description,
	extensions: [`.${t.extension}`]
}, t.fileHandle), Sn = /* @__PURE__ */ function(e) {
	return e.drawnix = "drawnix", e;
}({}), Cn = () => (/* @__PURE__ */ new Date()).getTime().toString(), wn = async (e, t = Cn()) => Tn(e, null, t), Tn = async (e, t = null, n = Cn()) => {
	let r = On(e);
	return { fileHandle: await xn(new Blob([r], { type: rn.drawnix }), {
		name: n,
		extension: "drawnix",
		description: "Drawnix file",
		fileHandle: t
	}) };
}, En = async (e) => {
	let t = await bn({ description: "Drawnix files" }), n = t.handle || null;
	return {
		data: await kn(e, await Mn(t)),
		fileHandle: n
	};
}, Dn = (e) => e && e.type === Sn.drawnix && Array.isArray(e.elements) && typeof e.viewport == "object", On = (e) => {
	let t = {
		type: Sn.drawnix,
		version: an.drawnix,
		source: "web",
		elements: e.children,
		viewport: e.viewport,
		theme: e.theme
	};
	return JSON.stringify(t, null, 2);
}, kn = async (e, t) => {
	let n = await Nn(t);
	try {
		let e = JSON.parse(n);
		if (Dn(e)) return e;
	} catch {}
	throw Error("Error: invalid file");
}, An = (e, t, n) => new File([e], n || "", { type: t }), jn = (e) => "arrayBuffer" in e ? e.arrayBuffer() : new Promise((t, n) => {
	let r = new FileReader();
	r.onload = (e) => {
		if (!e.target?.result) return n(/* @__PURE__ */ Error("Couldn't convert blob to ArrayBuffer"));
		t(e.target.result);
	}, r.readAsArrayBuffer(e);
}), Mn = async (e) => (e.type || e?.name?.endsWith(".drawnix") && (e = An(await jn(e), rn.drawnix, e.name)), e), Nn = async (e) => {
	let t;
	return t = "text" in Blob ? await e.text() : await new Promise((t) => {
		let n = new FileReader();
		n.readAsText(e, "utf8"), n.onloadend = () => {
			n.readyState === FileReader.DONE && t(n.result);
		};
	}), t;
}, Pn = async (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => {
		let e = r.result;
		t(e);
	}, r.onerror = (e) => n(e), r.readAsDataURL(e);
}), Fn = (e) => !!e && Object.values(nn).includes(e), In = (e) => new Promise((t, n) => {
	let r = new Image();
	r.onload = () => {
		t(r);
	}, r.onerror = (e) => {
		n(e);
	}, r.src = e;
}), Ln = (e, t, n) => {
	let r = e.width > n ? n : e.width;
	return {
		url: t,
		width: r,
		height: r / e.width * e.height
	};
}, Rn = async (e, t, n, r) => {
	let i = w(e)[0] || Ie(e), a = i ? 240 : 400, o = await Pn(t), s = Ln(await In(o), o, a), c = n && ie(e, n);
	if (r && c && P.isMindElement(e, c)) {
		dt.setImage(e, c, s);
		return;
	}
	i && P.isMindElement(e, i) && !r ? dt.setImage(e, i, s) : Ke.insertImage(e, s, n);
}, zn = class {
	constructor(e = {}) {
		this.overlay = null, this.imageContainer = null, this.image = null, this.closeButton = null, this.controlsContainer = null, this.delegationHandler = null, this.dragHandler = null, this.mouseUpHandler = null, this.animationFrameId = null, this.pendingUpdate = !1, this.state = {
			zoom: 1,
			x: 0,
			y: 0,
			isDragging: !1,
			dragStartX: 0,
			dragStartY: 0,
			imageStartX: 0,
			imageStartY: 0
		}, this.styleElement = null, this.options = {
			zoomStep: e.zoomStep || .2,
			minZoom: e.minZoom || .1,
			maxZoom: e.maxZoom || 5,
			enableKeyboard: e.enableKeyboard !== !1
		}, this.addStyles(), this.bindEvents();
	}
	open(e, t = "") {
		this.createOverlay(), this.createImage(e, t), this.resetState(), document.body.style.overflow = "hidden";
	}
	close() {
		this.overlay && (this.cleanupDragEvents(), document.removeEventListener("mousemove", this.delegationHandler), document.removeEventListener("mouseup", this.delegationHandler), document.removeEventListener("keydown", this.delegationHandler), document.removeEventListener("wheel", this.delegationHandler), this.animationFrameId &&= (cancelAnimationFrame(this.animationFrameId), null), document.body.removeChild(this.overlay), this.overlay = null, this.image = null, this.imageContainer = null, this.closeButton = null, this.controlsContainer = null, this.delegationHandler = null, this.dragHandler = null, this.mouseUpHandler = null, this.pendingUpdate = !1), document.body.style.overflow = "";
	}
	createOverlay() {
		this.overlay = document.createElement("div"), this.overlay.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(45, 45, 45, 0.95);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 9999;\n      cursor: grab;\n    ", this.overlay.addEventListener("click", (e) => {
			e.target === this.overlay && this.close();
		}), this.createCloseButton(), this.createControls(), document.body.appendChild(this.overlay);
	}
	createCloseButton() {
		this.closeButton = document.createElement("div"), this.closeButton.innerHTML = "×", this.closeButton.className = "image-viewer-close-btn", this.closeButton.addEventListener("click", () => this.close()), this.overlay.appendChild(this.closeButton);
	}
	createControls() {
		this.controlsContainer = document.createElement("div"), this.controlsContainer.style.cssText = "\n      position: absolute;\n      bottom: 30px;\n      left: 50%;\n      transform: translateX(-50%);\n      display: flex;\n      gap: 10px;\n      z-index: 10001;\n    ", this.addStyles();
		let e = document.createElement("button");
		e.innerHTML = "+", e.className = "image-viewer-control-btn", e.addEventListener("click", () => this.zoomIn());
		let t = document.createElement("button");
		t.innerHTML = "-", t.className = "image-viewer-control-btn", t.addEventListener("click", () => this.zoomOut());
		let n = document.createElement("button");
		n.innerHTML = "⌂", n.className = "image-viewer-control-btn", n.addEventListener("click", () => this.resetState()), this.controlsContainer.appendChild(t), this.controlsContainer.appendChild(n), this.controlsContainer.appendChild(e), this.overlay.appendChild(this.controlsContainer);
	}
	createImage(e, t) {
		this.imageContainer = document.createElement("div"), this.imageContainer.style.cssText = "\n      position: relative;\n      cursor: grab;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      max-width: calc(100vw - 80px);\n      max-height: calc(100vh - 160px);\n    ", this.image = document.createElement("img"), this.image.src = e, this.image.alt = t, this.image.style.cssText = "\n      max-width: calc(100vw - 80px);\n      max-height: calc(100vh - 160px);\n      width: auto;\n      height: auto;\n      display: block;\n      user-select: none;\n      pointer-events: none;\n      object-fit: contain;\n    ", this.imageContainer.appendChild(this.image), this.overlay.appendChild(this.imageContainer), this.bindDragEvents();
	}
	bindDragEvents() {
		this.imageContainer && (this.dragHandler = (e) => {
			if (!this.state.isDragging) return;
			let t = e.clientX - this.state.dragStartX, n = e.clientY - this.state.dragStartY;
			this.state.x = this.state.imageStartX + t, this.state.y = this.state.imageStartY + n, this.pendingUpdate || (this.pendingUpdate = !0, this.animationFrameId = requestAnimationFrame(() => {
				this.updateImageTransform(), this.pendingUpdate = !1;
			}));
		}, this.mouseUpHandler = () => {
			this.state.isDragging && (this.state.isDragging = !1, this.imageContainer && (this.imageContainer.style.cursor = "grab"), this.overlay && (this.overlay.style.cursor = "grab"), this.cleanupDragEvents());
		}, this.imageContainer.addEventListener("mousedown", (e) => {
			e.preventDefault(), this.state.isDragging = !0, this.state.dragStartX = e.clientX, this.state.dragStartY = e.clientY, this.state.imageStartX = this.state.x, this.state.imageStartY = this.state.y, this.imageContainer && (this.imageContainer.style.cursor = "grabbing"), this.overlay && (this.overlay.style.cursor = "grabbing"), this.dragHandler && this.mouseUpHandler && (document.addEventListener("mousemove", this.dragHandler, { passive: !0 }), document.addEventListener("mouseup", this.mouseUpHandler, { once: !0 }));
		}));
	}
	cleanupDragEvents() {
		this.dragHandler && document.removeEventListener("mousemove", this.dragHandler), this.mouseUpHandler && document.removeEventListener("mouseup", this.mouseUpHandler);
	}
	bindEvents() {
		this.delegationHandler = (e) => {
			if (this.overlay) {
				if (e.type === "keydown" && this.options.enableKeyboard) {
					let t = e;
					switch (t.key) {
						case "Escape":
							this.close();
							break;
						case "+":
						case "=":
							t.preventDefault(), this.zoomIn();
							break;
						case "-":
							t.preventDefault(), this.zoomOut();
							break;
						case "0":
							t.preventDefault(), this.resetState();
							break;
					}
				} else if (e.type === "wheel") {
					let t = e;
					t.preventDefault(), t.deltaY < 0 ? this.zoomIn() : this.zoomOut();
				}
			}
		}, document.addEventListener("keydown", this.delegationHandler), document.addEventListener("wheel", this.delegationHandler, { passive: !1 });
	}
	zoomIn() {
		this.state.zoom = Math.min(this.state.zoom + this.options.zoomStep, this.options.maxZoom), this.updateImageTransform();
	}
	zoomOut() {
		this.state.zoom = Math.max(this.state.zoom - this.options.zoomStep, this.options.minZoom), this.updateImageTransform();
	}
	resetState() {
		this.state.zoom = 1, this.state.x = 0, this.state.y = 0, this.updateImageTransform();
	}
	updateImageTransform() {
		this.imageContainer && (this.imageContainer.style.transform = `
      translate(${this.state.x}px, ${this.state.y}px) 
      scale(${this.state.zoom})
    `);
	}
	addStyles() {
		this.styleElement || (this.styleElement = document.createElement("style"), this.styleElement.textContent = "\n        .image-viewer-control-btn {\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: none;\n          padding: 8px 14px;\n          border-radius: 4px;\n          cursor: pointer;\n          font-size: 18px;\n          transition: background 0.2s;\n          user-select: none;\n        }\n        \n        .image-viewer-control-btn:hover {\n          background: rgba(0, 0, 0, 0.4);\n        }\n        \n        .image-viewer-close-btn {\n          position: absolute;\n          top: 20px;\n          right: 30px;\n          color: white;\n          font-size: 18px;\n          cursor: pointer;\n          z-index: 10001;\n          user-select: none;\n          width: 36px;\n          height: 34px;\n          display: flex;\n          border-radius: 50%;\n          justify-content: center;\n          background: rgba(0, 0, 0, 0.8);\n          transition: all 0.2s ease;\n          line-height: 34px;\n          padding-bottom:2px;\n        }\n        \n        .image-viewer-close-btn:hover {\n          background: rgba(0, 0, 0, 0.4);\n        }\n      ", document.head.appendChild(this.styleElement));
	}
	removeStyles() {
		this.styleElement &&= (document.head.removeChild(this.styleElement), null);
	}
	destroy() {
		this.close(), this.removeStyles();
	}
}, Bn = (e) => {
	let t = e, { insertFragment: n, drop: r, pointerUp: i } = t, a = new zn({
		zoomStep: .3,
		minZoom: .1,
		maxZoom: 5,
		enableKeyboard: !0
	});
	return t.insertFragment = (t, r, i) => {
		if (t?.files?.length && Fn(t.files[0].type)) {
			let n = t.files[0];
			Rn(e, n, r, !1);
			return;
		}
		n(t, r, i);
	}, t.drop = (t) => {
		if (t.dataTransfer?.files?.length) {
			let n = t.dataTransfer.files[0];
			if (Fn(n.type)) return Rn(e, n, Se(e, _e(e, t.x, t.y)), !0), !0;
		}
		return r(t);
	}, t.pointerUp = (t) => {
		let n = Ie(e);
		if (n && !Ve(e) && !pe(e) && !se(e)) {
			let r = Se(e, _e(e, t.x, t.y)), i = ie(e, r);
			i && P.isMindElement(e, i) && P.hasImage(i) && ht(e, i, r) && n === i && a.open(i.data.image.url);
		}
		i(t);
	}, t;
}, Vn = {
	"toolbar.hand": "手形工具 — H",
	"toolbar.selection": "选择 — V",
	"toolbar.mind": "思维导图 — M",
	"toolbar.text": "文本 — T",
	"toolbar.arrow": "箭头 — A",
	"toolbar.shape": "形状",
	"toolbar.image": "图片 — Cmd+U",
	"toolbar.extraTools": "更多工具",
	"toolbar.pen": "画笔 — P",
	"toolbar.eraser": "橡皮擦 — E",
	"toolbar.arrow.straight": "直线",
	"toolbar.arrow.elbow": "肘线",
	"toolbar.arrow.curve": "曲线",
	"toolbar.shape.rectangle": "长方形 — R",
	"toolbar.shape.ellipse": "圆 — O",
	"toolbar.shape.triangle": "三角形",
	"toolbar.shape.terminal": "开始/结束",
	"toolbar.shape.noteCurlyLeft": "左花括注释",
	"toolbar.shape.noteCurlyRight": "右花括注释",
	"toolbar.shape.diamond": "菱形",
	"toolbar.shape.parallelogram": "平行四边形",
	"toolbar.shape.roundRectangle": "圆角矩形",
	"zoom.in": "放大 — Cmd++",
	"zoom.out": "缩小 — Cmd+-",
	"zoom.fit": "自适应",
	"zoom.100": "缩放至 100%",
	"theme.default": "默认",
	"theme.colorful": "缤纷",
	"theme.soft": "柔和",
	"theme.retro": "复古",
	"theme.dark": "暗夜",
	"theme.starry": "星空",
	"color.none": "主题颜色",
	"color.unknown": "其他颜色",
	"color.default": "黑色",
	"color.white": "白色",
	"color.gray": "灰色",
	"color.deepBlue": "深蓝色",
	"color.red": "红色",
	"color.green": "绿色",
	"color.yellow": "黄色",
	"color.purple": "紫色",
	"color.orange": "橙色",
	"color.pastelPink": "淡粉色",
	"color.cyan": "青色",
	"color.brown": "棕色",
	"color.forestGreen": "森绿色",
	"color.lightGray": "浅灰色",
	"general.undo": "撤销",
	"general.redo": "重做",
	"general.menu": "应用菜单",
	"general.moreOptions": "更多选项",
	"general.duplicate": "重复",
	"general.delete": "删除",
	"general.copyToClipboard": "复制到剪贴板",
	"general.copyToClipboard.svg": "SVG",
	"general.copyToClipboard.png": "PNG",
	"general.copyToClipboard.transparent": "透明背景",
	"toast.copyToClipboard.svg": "已将所选项作为 SVG 复制到剪贴板",
	"toast.copyToClipboard.png": "已将所选项作为 PNG 复制到剪贴板",
	"toast.copyToClipboard.mode.transparent": "（透明背景）",
	"language.switcher": "Language",
	"language.chinese": "中文",
	"language.english": "English",
	"language.russian": "Русский",
	"language.arabic": "عربي",
	"language.vietnamese": "Tiếng Việt",
	"menu.open": "打开",
	"menu.saveFile": "保存到当前文件",
	"menu.saveAsFile": "另存为",
	"menu.exportImage": "导出图片",
	"menu.exportImage.svg": "SVG",
	"menu.exportImage.png": "PNG",
	"menu.exportImage.jpg": "JPG",
	"menu.cleanBoard": "清除画布",
	"menu.github": "GitHub",
	"dialog.mermaid.title": "Mermaid 转 Drawnix",
	"dialog.mermaid.description": "目前仅支持",
	"dialog.mermaid.flowchart": "流程图",
	"dialog.mermaid.sequence": "序列图",
	"dialog.mermaid.class": "类图",
	"dialog.mermaid.otherTypes": "。其他类型在 Drawnix 中将以图片呈现。",
	"dialog.mermaid.syntax": "Mermaid 语法",
	"dialog.mermaid.placeholder": "在此处编写 Mermaid 图表定义…",
	"dialog.mermaid.preview": "预览",
	"dialog.mermaid.insert": "插入",
	"dialog.markdown.description": "支持 Markdown 语法自动转换为思维导图。",
	"dialog.markdown.syntax": "Markdown 语法",
	"dialog.markdown.placeholder": "在此处编写 Markdown 文本定义…",
	"dialog.markdown.preview": "预览",
	"dialog.markdown.insert": "插入",
	"dialog.error.loadMermaid": "加载 Mermaid 库失败",
	"extraTools.mermaidToDrawnix": "Mermaid 到 Drawnix",
	"extraTools.markdownToDrawnix": "Markdown 到 Drawnix",
	"cleanConfirm.title": "清除画布",
	"cleanConfirm.description": "这将会清除整个画布。你是否要继续?",
	"cleanConfirm.cancel": "取消",
	"cleanConfirm.ok": "确认",
	"popupLink.delLink": "移除连结",
	"popupToolbar.fillColor": "填充颜色",
	"popupToolbar.fontSize": "字号",
	"popupToolbar.fontColor": "字体颜色",
	"popupToolbar.link": "链接",
	"popupToolbar.stroke": "边框",
	"popupToolbar.opacity": "不透明度",
	"textPlaceholders.link": "链接",
	"textPlaceholders.text": "文本",
	"line.source": "起点",
	"line.target": "终点",
	"line.arrow": "箭头",
	"line.none": "无",
	"stroke.solid": "实线",
	"stroke.dashed": "虚线",
	"stroke.dotted": "点线",
	"draw.lineText": "文本",
	"draw.geometryText": "文本",
	"mind.centralText": "中心主题",
	"mind.abstractNodeText": "摘要",
	"markdown.example": "# 我开始了\n\n  - 让我看看是谁搞出了这个 bug 🕵️ ♂️ 🔍\n    - 😯 💣\n      - 原来是我 👈 🎯 💘\n\n  - 竟然不可以运行，为什么呢 🚫 ⚙️ ❓\n    - 竟然可以运行了，为什么呢？🎢 ✨\n      - 🤯 ⚡ ➡️ 🎉\n\n  - 能运行起来的 🐞 🚀\n    - 就不要去动它 🛑 ✋\n      - 👾 💥 🏹 🎯\n\n  ## 男孩还是女孩 👶 ❓ 🤷 ♂️ ♀️\n\n  ### Hello world 👋 🌍 ✨ 💻\n\n  #### 哇 是个程序员 🤯 ⌨️ 💡 👩 💻",
	"tutorial.title": "Drawnix",
	"tutorial.description": "All-in-one 白板，包含思维导图、流程图、自由画笔等",
	"tutorial.dataDescription": "所有数据被存在你的浏览器本地",
	"tutorial.appToolbar": "导出，语言设置，...",
	"tutorial.creationToolbar": "选择一个工具开始你的创作",
	"tutorial.themeDescription": "在明亮和黑暗主题之间切换"
}, Hn = {
	"toolbar.hand": "Hand — H",
	"toolbar.selection": "Selection — V",
	"toolbar.mind": "Mind — M",
	"toolbar.text": "Text — T",
	"toolbar.arrow": "Arrow — A",
	"toolbar.shape": "Shape",
	"toolbar.image": "Image — Cmd+U",
	"toolbar.extraTools": "Extra Tools",
	"toolbar.pen": "Pen — P",
	"toolbar.eraser": "Eraser — E",
	"toolbar.arrow.straight": "Straight Arrow Line",
	"toolbar.arrow.elbow": "Elbow Arrow Line",
	"toolbar.arrow.curve": "Curve Arrow Line",
	"toolbar.shape.rectangle": "Rectangle — R",
	"toolbar.shape.ellipse": "Ellipse — O",
	"toolbar.shape.triangle": "Triangle",
	"toolbar.shape.terminal": "Terminal",
	"toolbar.shape.noteCurlyLeft": "Curly Note — Left",
	"toolbar.shape.noteCurlyRight": "Curly Note — Right",
	"toolbar.shape.diamond": "Diamond",
	"toolbar.shape.parallelogram": "Parallelogram",
	"toolbar.shape.roundRectangle": "Round Rectangle",
	"zoom.in": "Zoom In — Cmd++",
	"zoom.out": "Zoom Out — Cmd+-",
	"zoom.fit": "Fit to Screen",
	"zoom.100": "Zoom to 100%",
	"theme.default": "Default",
	"theme.colorful": "Colorful",
	"theme.soft": "Soft",
	"theme.retro": "Retro",
	"theme.dark": "Dark",
	"theme.starry": "Starry",
	"color.none": "Topic Color",
	"color.unknown": "Other Color",
	"color.default": "Basic Black",
	"color.white": "White",
	"color.gray": "Grey",
	"color.deepBlue": "Deep Blue",
	"color.red": "Red",
	"color.green": "Green",
	"color.yellow": "Yellow",
	"color.purple": "Purple",
	"color.orange": "Orange",
	"color.pastelPink": "Paster Pink",
	"color.cyan": "Cyan",
	"color.brown": "Brown",
	"color.forestGreen": "Forest Green",
	"color.lightGray": "Light Grey",
	"general.undo": "Undo",
	"general.redo": "Redo",
	"general.menu": "App Menu",
	"general.moreOptions": "More Options",
	"general.duplicate": "Duplicate",
	"general.delete": "Delete",
	"general.copyToClipboard": "Copy to Clipboard",
	"general.copyToClipboard.svg": "SVG",
	"general.copyToClipboard.png": "PNG",
	"general.copyToClipboard.transparent": "Transparent",
	"toast.copyToClipboard.svg": "Copied selected items as SVG to clipboard",
	"toast.copyToClipboard.png": "Copied selected items as PNG to clipboard",
	"toast.copyToClipboard.mode.transparent": "(Transparent background)",
	"language.switcher": "Language",
	"language.chinese": "中文",
	"language.english": "English",
	"language.russian": "Русский",
	"language.arabic": "عربي",
	"language.vietnamese": "Tiếng Việt",
	"menu.open": "Open",
	"menu.saveFile": "Save to current file",
	"menu.saveAsFile": "Save As",
	"menu.exportImage": "Export Image",
	"menu.exportImage.svg": "SVG",
	"menu.exportImage.png": "PNG",
	"menu.exportImage.jpg": "JPG",
	"menu.cleanBoard": "Clear Board",
	"menu.github": "GitHub",
	"dialog.mermaid.title": "Mermaid to Drawnix",
	"dialog.mermaid.description": "Currently supports",
	"dialog.mermaid.flowchart": "flowcharts",
	"dialog.mermaid.sequence": "sequence diagrams",
	"dialog.mermaid.class": "class diagrams",
	"dialog.mermaid.otherTypes": ", and other diagram types (rendered as images).",
	"dialog.mermaid.syntax": "Mermaid Syntax",
	"dialog.mermaid.placeholder": "Write your Mermaid chart definition here…",
	"dialog.mermaid.preview": "Preview",
	"dialog.mermaid.insert": "Insert",
	"dialog.markdown.description": "Supports automatic conversion of Markdown syntax to mind map.",
	"dialog.markdown.syntax": "Markdown Syntax",
	"dialog.markdown.placeholder": "Write your Markdown text definition here...",
	"dialog.markdown.preview": "Preview",
	"dialog.markdown.insert": "Insert",
	"dialog.error.loadMermaid": "Failed to load Mermaid library",
	"extraTools.mermaidToDrawnix": "Mermaid to Drawnix",
	"extraTools.markdownToDrawnix": "Markdown to Drawnix",
	"cleanConfirm.title": "Clear Board",
	"cleanConfirm.description": "This will clear the entire board. Do you want to continue?",
	"cleanConfirm.cancel": "Cancel",
	"cleanConfirm.ok": "OK",
	"popupLink.delLink": "Delete Link",
	"popupToolbar.fillColor": "Fill Color",
	"popupToolbar.fontSize": "Font Size",
	"popupToolbar.fontColor": "Font Color",
	"popupToolbar.link": "Insert Link",
	"popupToolbar.stroke": "Stroke",
	"popupToolbar.opacity": "Opacity",
	"textPlaceholders.link": "Link",
	"textPlaceholders.text": "Text",
	"line.source": "Start",
	"line.target": "End",
	"line.arrow": "Arrow",
	"line.none": "None",
	"stroke.solid": "Solid",
	"stroke.dashed": "Dashed",
	"stroke.dotted": "Dotted",
	"markdown.example": "# I have started\n\n  - Let me see who made this bug 🕵️ ♂️ 🔍\n    - 😯 💣\n      - Turns out it was me 👈 🎯 💘\n\n  - Unexpectedly, it cannot run; why is that 🚫 ⚙️ ❓\n    - Unexpectedly, it can run now; why is that? 🎢 ✨\n      - 🤯 ⚡ ➡️ 🎉\n\n  - What can run 🐞 🚀\n    - then do not touch it 🛑 ✋\n      - 👾 💥 🏹 🎯\n\n  ## Boy or girl 👶 ❓ 🤷 ♂️ ♀️\n\n  ### Hello world 👋 🌍 ✨ 💻\n\n  #### Wow, a programmer 🤯 ⌨️ 💡 👩 💻",
	"draw.lineText": "Text",
	"draw.geometryText": "Text",
	"mind.centralText": "Central Topic",
	"mind.abstractNodeText": "Summary",
	"tutorial.title": "Drawnix",
	"tutorial.description": "All-in-one whiteboard, including mind maps, flowcharts, free drawing, and more",
	"tutorial.dataDescription": "All data is stored locally in your browser",
	"tutorial.appToolbar": "Export, language settings, ...",
	"tutorial.creationToolbar": "Select a tool to start your creation",
	"tutorial.themeDescription": "Switch between light and dark themes"
}, Un = {
	"toolbar.hand": "Рука — H",
	"toolbar.selection": "Выделение — V",
	"toolbar.mind": "Mind-карта — M",
	"toolbar.text": "Текст — T",
	"toolbar.arrow": "Стрелка — A",
	"toolbar.shape": "Фигуры",
	"toolbar.image": "Изображение — Cmd+U",
	"toolbar.extraTools": "Дополнительно",
	"toolbar.pen": "Карандаш — P",
	"toolbar.eraser": "Ластик — E",
	"toolbar.arrow.straight": "Прямая стрелка",
	"toolbar.arrow.elbow": "Ломаная стрелка",
	"toolbar.arrow.curve": "Кривая стрелка",
	"toolbar.shape.rectangle": "Прямоугольник — R",
	"toolbar.shape.ellipse": "Эллипс — O",
	"toolbar.shape.triangle": "Треугольник",
	"toolbar.shape.terminal": "Останов",
	"toolbar.shape.noteCurlyLeft": "Фигурная заметка — слева",
	"toolbar.shape.noteCurlyRight": "Фигурная заметка — справа",
	"toolbar.shape.diamond": "Ромб",
	"toolbar.shape.parallelogram": "Параллелограмм",
	"toolbar.shape.roundRectangle": "Скруглённый прямоугольник",
	"zoom.in": "Увеличить — Cmd++",
	"zoom.out": "Уменьшить — Cmd+-",
	"zoom.fit": "По размеру экрана",
	"zoom.100": "Сбросить к 100%",
	"theme.default": "Стандартная",
	"theme.colorful": "Красочная",
	"theme.soft": "Мягкая",
	"theme.retro": "Старинная",
	"theme.dark": "Тёмная",
	"theme.starry": "Звёздная",
	"color.none": "Автоматически",
	"color.unknown": "Другой цвет",
	"color.default": "Чёрный",
	"color.white": "Белый",
	"color.gray": "Серый",
	"color.deepBlue": "Голубой",
	"color.red": "Красный",
	"color.green": "Зелёный",
	"color.yellow": "Жёлтый",
	"color.purple": "Фиолетовый",
	"color.orange": "Оранжевый",
	"color.pastelPink": "Розовый",
	"color.cyan": "Лиловый",
	"color.brown": "Коричневый",
	"color.forestGreen": "Сосновный",
	"color.lightGray": "Светло-серый",
	"general.undo": "Отменить",
	"general.redo": "Вернуть",
	"general.menu": "Меню приложения",
	"general.moreOptions": "Дополнительно",
	"general.duplicate": "Дублировать",
	"general.delete": "Удалить",
	"general.copyToClipboard": "Копировать в буфер обмена",
	"general.copyToClipboard.svg": "SVG",
	"general.copyToClipboard.png": "PNG",
	"general.copyToClipboard.transparent": "Прозрачный фон",
	"toast.copyToClipboard.svg": "Выбранные элементы скопированы в буфер обмена как SVG",
	"toast.copyToClipboard.png": "Выбранные элементы скопированы в буфер обмена как PNG",
	"toast.copyToClipboard.mode.transparent": "(Прозрачный фон)",
	"language.switcher": "Language",
	"language.chinese": "中文",
	"language.english": "English",
	"language.russian": "Русский",
	"language.arabic": "عربي",
	"language.vietnamese": "Tiếng Việt",
	"menu.open": "Открыть",
	"menu.saveFile": "Сохранить в текущий файл",
	"menu.saveAsFile": "Сохранить как",
	"menu.exportImage": "Экспортировать",
	"menu.exportImage.svg": "SVG",
	"menu.exportImage.png": "PNG",
	"menu.exportImage.jpg": "JPG",
	"menu.cleanBoard": "Очистить доску",
	"menu.github": "GitHub",
	"dialog.mermaid.title": "Mermaid в Drawnix",
	"dialog.mermaid.description": "Поддерживаются",
	"dialog.mermaid.flowchart": "блок-схемы",
	"dialog.mermaid.sequence": "диаграммы последовательностей",
	"dialog.mermaid.class": "диаграммы классов",
	"dialog.mermaid.otherTypes": " и другие диаграммы (преобразуются в изображения).",
	"dialog.mermaid.syntax": "Синтаксис Mermaid",
	"dialog.mermaid.placeholder": "Введите сюда описание вашей Mermaid-диаграммы…",
	"dialog.mermaid.preview": "Предпросмотр",
	"dialog.mermaid.insert": "Вставить",
	"dialog.markdown.description": "Поддерживается автоматическое преобразование синтаксиса Markdown в mind-карты.",
	"dialog.markdown.syntax": "Синтаксис Markdown",
	"dialog.markdown.placeholder": "Введите сюда описание вашего текста Markdown…",
	"dialog.markdown.preview": "Предпросмотр",
	"dialog.markdown.insert": "Вставить",
	"dialog.error.loadMermaid": "Не удалось загрузить библотеку Mermaid",
	"extraTools.mermaidToDrawnix": "Mermaid в Drawnix",
	"extraTools.markdownToDrawnix": "Markdown в Drawnix",
	"cleanConfirm.title": "Очистить доску",
	"cleanConfirm.description": "Это удалит всё содержимое доски. Вы хотите продолжить?",
	"cleanConfirm.cancel": "Отмена",
	"cleanConfirm.ok": "ОК",
	"popupLink.delLink": "Удалить ссылку",
	"popupToolbar.fillColor": "Цвет заливки",
	"popupToolbar.fontSize": "Размер шрифта",
	"popupToolbar.fontColor": "Цвет текста",
	"popupToolbar.link": "Вставить ссылку",
	"popupToolbar.stroke": "Контур",
	"popupToolbar.opacity": "Прозрачность",
	"textPlaceholders.link": "Ссылка",
	"textPlaceholders.text": "Текст",
	"line.source": "Начало",
	"line.target": "Конец",
	"line.arrow": "Стрелка",
	"line.none": "Нет",
	"stroke.solid": "Сплошной",
	"stroke.dashed": "Штриховой",
	"stroke.dotted": "Пунктирный",
	"markdown.example": "# I have started\n\n  - Let me see who made this bug 🕵️ ♂️ 🔍\n    - 😯 💣\n      - Turns out it was me 👈 🎯 💘\n\n  - Unexpectedly, it cannot run; why is that 🚫 ⚙️ ❓\n    - Unexpectedly, it can run now; why is that? 🎢 ✨\n      - 🤯 ⚡ ➡️ 🎉\n\n  - What can run 🐞 🚀\n    - then do not touch it 🛑 ✋\n      - 👾 💥 🏹 🎯\n\n  ## Boy or girl 👶 ❓ 🤷 ♂️ ♀️\n\n  ### Hello world 👋 🌍 ✨ 💻\n\n  #### Wow, a programmer 🤯 ⌨️ 💡 👩 💻",
	"draw.lineText": "Текст",
	"draw.geometryText": "Текст",
	"mind.centralText": "Центральная тема",
	"mind.abstractNodeText": "Резюме",
	"tutorial.title": "Drawnix",
	"tutorial.description": "Универсальная доска: майнд-карты, блок-схемы, свободное рисование и многое другое",
	"tutorial.dataDescription": "Все данные хранятся локально в вашем браузере",
	"tutorial.appToolbar": "Экспорт, настройки языка, ...",
	"tutorial.creationToolbar": "Выберите инструмент, чтобы начать творить",
	"tutorial.themeDescription": "Переключение между светлой и тёмной темами"
}, Wn = {
	"toolbar.hand": "اليد — H",
	"toolbar.selection": "التحديد — V",
	"toolbar.mind": "خريطة ذهنية — M",
	"toolbar.eraser": "ممحاة — E",
	"toolbar.text": "نص — T",
	"toolbar.pen": "قلم — P",
	"toolbar.arrow": "سهم — A",
	"toolbar.shape": "أشكال",
	"toolbar.image": "صورة — Cmd+U",
	"toolbar.extraTools": "أدوات إضافية",
	"toolbar.arrow.straight": "سهم مستقيم",
	"toolbar.arrow.elbow": "سهم بزوايا",
	"toolbar.arrow.curve": "سهم منحني",
	"toolbar.shape.rectangle": "مستطيل — R",
	"toolbar.shape.ellipse": "بيضاوي — O",
	"toolbar.shape.triangle": "مثلث",
	"toolbar.shape.terminal": "نهائي",
	"toolbar.shape.noteCurlyLeft": "ملاحظة معقوفة — يسار",
	"toolbar.shape.noteCurlyRight": "ملاحظة معقوفة — يمين",
	"toolbar.shape.diamond": "معين",
	"toolbar.shape.parallelogram": "متوازي أضلاع",
	"toolbar.shape.roundRectangle": "مستطيل دائري الحواف",
	"zoom.in": "تكبير — Cmd++",
	"zoom.out": "تصغير — Cmd+-",
	"zoom.fit": "ملاءمة الشاشة",
	"zoom.100": "تكبير إلى 100%",
	"theme.default": "افتراضي",
	"theme.colorful": "ملون",
	"theme.soft": "ناعم",
	"theme.retro": "كلاسيكي",
	"theme.dark": "داكن",
	"theme.starry": "ليلي",
	"color.none": "لون الموضوع",
	"color.unknown": "لون آخر",
	"color.default": "أسود أساسي",
	"color.white": "أبيض",
	"color.gray": "رمادي",
	"color.deepBlue": "أزرق غامق",
	"color.red": "أحمر",
	"color.green": "أخضر",
	"color.yellow": "أصفر",
	"color.purple": "بنفسجي",
	"color.orange": "برتقالي",
	"color.pastelPink": "وردي فاتح",
	"color.cyan": "سماوي",
	"color.brown": "بني",
	"color.forestGreen": "أخضر غامق (غابة)",
	"color.lightGray": "رمادي فاتح",
	"general.undo": "تراجع",
	"general.redo": "إعادة",
	"general.menu": "قائمة التطبيق",
	"general.moreOptions": "خيارات إضافية",
	"general.duplicate": "تكرار",
	"general.delete": "حذف",
	"language.switcher": "اللغة",
	"language.chinese": "中文",
	"language.english": "English",
	"language.russian": "Русский",
	"language.arabic": "عربي",
	"language.vietnamese": "Tiếng Việt",
	"general.copyToClipboard": "نسخ إلى الحافظة",
	"general.copyToClipboard.svg": "SVG",
	"general.copyToClipboard.png": "PNG",
	"general.copyToClipboard.transparent": "خلفية شفافة",
	"toast.copyToClipboard.svg": "تم نسخ العناصر المحددة كـ SVG إلى الحافظة",
	"toast.copyToClipboard.png": "تم نسخ العناصر المحددة كـ PNG إلى الحافظة",
	"toast.copyToClipboard.mode.transparent": "(خلفية شفافة)",
	"menu.open": "فتح",
	"menu.saveFile": "حفظ إلى الملف الحالي",
	"menu.saveAsFile": "حفظ باسم",
	"menu.exportImage": "تصدير صورة",
	"menu.exportImage.svg": "SVG",
	"menu.exportImage.png": "PNG",
	"menu.exportImage.jpg": "JPG",
	"menu.cleanBoard": "مسح اللوحة",
	"menu.github": "غيت هب",
	"dialog.mermaid.title": "من Mermaid إلى Drawnix",
	"dialog.mermaid.description": "يدعم حاليًا",
	"dialog.mermaid.flowchart": "المخططات الانسيابية",
	"dialog.mermaid.sequence": "مخططات التسلسل",
	"dialog.mermaid.class": "مخططات الفئات",
	"dialog.mermaid.otherTypes": "، وأنواع أخرى من المخططات (تُعرض كصور).",
	"dialog.mermaid.syntax": "صيغة Mermaid",
	"dialog.mermaid.placeholder": "اكتب تعريف المخطط هنا...",
	"dialog.mermaid.preview": "معاينة",
	"dialog.mermaid.insert": "إدراج",
	"dialog.markdown.description": "يدعم التحويل التلقائي من Markdown إلى خريطة ذهنية.",
	"dialog.markdown.syntax": "صيغة Markdown",
	"dialog.markdown.placeholder": "اكتب نص Markdown هنا...",
	"dialog.markdown.preview": "معاينة",
	"dialog.markdown.insert": "إدراج",
	"dialog.error.loadMermaid": "فشل في تحميل مكتبة Mermaid",
	"extraTools.mermaidToDrawnix": "من Mermaid إلى Drawnix",
	"extraTools.markdownToDrawnix": "من Markdown إلى Drawnix",
	"cleanConfirm.title": "مسح اللوحة",
	"cleanConfirm.description": "سيؤدي هذا إلى مسح اللوحة بالكامل. هل تريد المتابعة؟",
	"cleanConfirm.cancel": "إلغاء",
	"cleanConfirm.ok": "موافق",
	"popupLink.delLink": "حذف الرابط",
	"popupToolbar.fillColor": "لون التعبئة",
	"popupToolbar.fontSize": "حجم الخط",
	"popupToolbar.fontColor": "لون الخط",
	"popupToolbar.link": "إدراج رابط",
	"popupToolbar.stroke": "الحد",
	"popupToolbar.opacity": "مستوى شفافية",
	"textPlaceholders.link": "رابط",
	"textPlaceholders.text": "نص",
	"line.source": "بداية",
	"line.target": "نهاية",
	"line.arrow": "سهم",
	"line.none": "لا شيء",
	"stroke.solid": "صلب",
	"stroke.dashed": "متقطع",
	"stroke.dotted": "منقط",
	"markdown.example": "# I have started\n\n  - دعني أرى من تسبب بهذا الخطأ  🕵️ ♂️ 🔍\n    - 😯 💣\n      - اتضح أنه أنا 👈 🎯 💘\n\n  - بشكل غير متوقع، لا يعمل؛ لماذا  🚫 ⚙️ ❓\n    - بشكل غير متوقع، أصبح يعمل الآن؛ لماذا؟ 🎢 ✨\n      - 🤯 ⚡ ➡️ 🎉\n\n  - ما الذي يمكن تشغيله 🐞 🚀\n    - إذًا لا تلمسه 🛑 ✋\n      - 👾 💥 🏹 🎯\n\n  ## ولد أم بنت  👶 ❓ 🤷 ♂️ ♀️\n\n  ### Hello world 👋 🌍 ✨ 💻\n\n  #### Wow, a programmer 🤯 ⌨️ 💡 👩 💻",
	"draw.lineText": "نص",
	"draw.geometryText": "نص",
	"mind.centralText": "الموضوع المركزي",
	"mind.abstractNodeText": "ملخص",
	"tutorial.title": "Drawnix",
	"tutorial.description": "سبورة شاملة تتضمن الخرائط الذهنية والمخططات الانسيابية والرسم الحر وغير ذلك",
	"tutorial.dataDescription": "تُحفظ جميع البيانات محليًا في متصفحك",
	"tutorial.appToolbar": "تصدير، إعدادات اللغة، ...",
	"tutorial.creationToolbar": "اختر أداة لبدء الإنشاء",
	"tutorial.themeDescription": "التبديل بين السمة الفاتحة والداكنة"
}, Gn = {
	"toolbar.hand": "Kéo — H",
	"toolbar.selection": "Chọn — V",
	"toolbar.mind": "Mind Map — M",
	"toolbar.text": "Văn bản — T",
	"toolbar.arrow": "Mũi tên — A",
	"toolbar.shape": "Hình dạng",
	"toolbar.image": "Hình ảnh — Cmd+U",
	"toolbar.extraTools": "Công cụ mở rộng",
	"toolbar.pen": "Bút vẽ — P",
	"toolbar.eraser": "Tẩy — E",
	"toolbar.arrow.straight": "Mũi tên thẳng",
	"toolbar.arrow.elbow": "Mũi tên vuông góc",
	"toolbar.arrow.curve": "Mũi tên cong",
	"toolbar.shape.rectangle": "Hình chữ nhật — R",
	"toolbar.shape.ellipse": "Hình elip — O",
	"toolbar.shape.triangle": "Hình tam giác",
	"toolbar.shape.terminal": "Terminal",
	"toolbar.shape.noteCurlyLeft": "Ghi chú ngoặc móc trái",
	"toolbar.shape.noteCurlyRight": "Ghi chú ngoặc móc phải",
	"toolbar.shape.diamond": "Hình thoi",
	"toolbar.shape.parallelogram": "Hình bình hành",
	"toolbar.shape.roundRectangle": "Hình chữ nhật bo tròn",
	"zoom.in": "Phóng to — Cmd++",
	"zoom.out": "Thu nhỏ — Cmd+-",
	"zoom.fit": "Vừa màn hình",
	"zoom.100": "Zoom 100%",
	"theme.default": "Mặc định",
	"theme.colorful": "Đầy màu sắc",
	"theme.soft": "Nhẹ nhàng",
	"theme.retro": "Cổ điển",
	"theme.dark": "Tối",
	"theme.starry": "Bầu trời sao",
	"color.none": "Màu chủ đề",
	"color.unknown": "Màu khác",
	"color.default": "Đen cơ bản",
	"color.white": "Trắng",
	"color.gray": "Xám",
	"color.deepBlue": "Xanh đậm",
	"color.red": "Đỏ",
	"color.green": "Xanh lá",
	"color.yellow": "Vàng",
	"color.purple": "Tím",
	"color.orange": "Cam",
	"color.pastelPink": "Hồng phấn",
	"color.cyan": "Xanh lơ",
	"color.brown": "Nâu",
	"color.forestGreen": "Xanh rừng",
	"color.lightGray": "Xám nhạt",
	"general.undo": "Hoàn tác",
	"general.redo": "Làm lại",
	"general.menu": "Menu ứng dụng",
	"general.moreOptions": "Tùy chọn khác",
	"general.duplicate": "Nhân bản",
	"general.delete": "Xóa",
	"general.copyToClipboard": "Sao chép vào bộ nhớ tạm",
	"general.copyToClipboard.svg": "SVG",
	"general.copyToClipboard.png": "PNG",
	"general.copyToClipboard.transparent": "Nền trong suốt",
	"toast.copyToClipboard.svg": "Đã sao chép các mục đã chọn dưới dạng SVG vào bộ nhớ tạm",
	"toast.copyToClipboard.png": "Đã sao chép các mục đã chọn dưới dạng PNG vào bộ nhớ tạm",
	"toast.copyToClipboard.mode.transparent": "(Nền trong suốt)",
	"language.switcher": "Ngôn ngữ",
	"language.chinese": "中文",
	"language.english": "English",
	"language.russian": "Русский",
	"language.arabic": "عربي",
	"language.vietnamese": "Tiếng Việt",
	"menu.open": "Mở",
	"menu.saveFile": "Lưu vào tệp hiện tại",
	"menu.saveAsFile": "Lưu thành",
	"menu.exportImage": "Xuất hình ảnh",
	"menu.exportImage.svg": "SVG",
	"menu.exportImage.png": "PNG",
	"menu.exportImage.jpg": "JPG",
	"menu.cleanBoard": "Xóa bảng",
	"menu.github": "GitHub",
	"dialog.mermaid.title": "Mermaid sang Drawnix",
	"dialog.mermaid.description": "Hiện hỗ trợ",
	"dialog.mermaid.flowchart": "lưu đồ",
	"dialog.mermaid.sequence": "biểu đồ tuần tự",
	"dialog.mermaid.class": "biểu đồ lớp",
	"dialog.mermaid.otherTypes": ", và các loại biểu đồ khác (hiển thị dưới dạng hình ảnh).",
	"dialog.mermaid.syntax": "Cú pháp Mermaid",
	"dialog.mermaid.placeholder": "Viết định nghĩa biểu đồ Mermaid của bạn ở đây...",
	"dialog.mermaid.preview": "Xem trước",
	"dialog.mermaid.insert": "Chèn",
	"dialog.markdown.description": "Hỗ trợ tự động chuyển đổi cú pháp Markdown sang sơ đồ tư duy.",
	"dialog.markdown.syntax": "Cú pháp Markdown",
	"dialog.markdown.placeholder": "Viết nội dung Markdown của bạn ở đây...",
	"dialog.markdown.preview": "Xem trước",
	"dialog.markdown.insert": "Chèn",
	"dialog.error.loadMermaid": "Không thể tải thư viện Mermaid",
	"extraTools.mermaidToDrawnix": "Mermaid sang Drawnix",
	"extraTools.markdownToDrawnix": "Markdown sang Drawnix",
	"cleanConfirm.title": "Xóa bảng",
	"cleanConfirm.description": "Thao tác này sẽ xóa toàn bộ bảng. Bạn có muốn tiếp tục không?",
	"cleanConfirm.cancel": "Hủy",
	"cleanConfirm.ok": "Đồng ý",
	"popupLink.delLink": "Xóa liên kết",
	"popupToolbar.fillColor": "Màu tô",
	"popupToolbar.fontSize": "Cỡ chữ",
	"popupToolbar.fontColor": "Màu chữ",
	"popupToolbar.link": "Chèn liên kết",
	"popupToolbar.stroke": "Đường viền",
	"popupToolbar.opacity": "Độ trong suốt",
	"textPlaceholders.link": "Liên kết",
	"textPlaceholders.text": "Văn bản",
	"line.source": "Bắt đầu",
	"line.target": "Kết thúc",
	"line.arrow": "Mũi tên",
	"line.none": "Không",
	"stroke.solid": "Nét liền",
	"stroke.dashed": "Nét đứt",
	"stroke.dotted": "Nét chấm",
	"markdown.example": "# Tôi đã bắt đầu\n\n    - Hãy xem ai đã tạo ra lỗi này 🕵️ ♂️ 🔍\n      - 😯 💣\n        - Hóa ra là tôi 👈 🎯 💘\n\n    - Bất ngờ thay, nó không chạy được; tại sao vậy 🚫 ⚙️ ❓\n      - Bất ngờ thay, giờ nó chạy được rồi; tại sao vậy? 🎢 ✨\n        - 🤯 ⚡ ➡️ 🎉\n\n    - Cái gì chạy được 🐞 🚀\n      - thì đừng chạm vào nó 🛑 ✋\n        - 👾 💥 🏹 🎯\n\n    ## Trai hay gái 👶 ❓ 🤷 ♂️ ♀️\n\n    ### Xin chào thế giới 👋 🌍 ✨ 💻\n\n    #### Wow, một lập trình viên 🤯 ⌨️ 💡 👩 💻",
	"draw.lineText": "Văn bản",
	"draw.geometryText": "Văn bản",
	"mind.centralText": "Chủ đề trung tâm",
	"mind.abstractNodeText": "Tóm tắt",
	"tutorial.title": "DPIT Draw MindMap",
	"tutorial.description": "Bảng trắng tất cả trong một, bao gồm sơ đồ tư duy, lưu đồ, vẽ tự do và hơn thế nữa",
	"tutorial.dataDescription": "Tất cả dữ liệu được lưu trữ cục bộ trong trình duyệt của bạn",
	"tutorial.appToolbar": "Xuất, cài đặt ngôn ngữ, ...",
	"tutorial.creationToolbar": "Chọn một công cụ để bắt đầu sáng tạo",
	"tutorial.themeDescription": "Chuyển đổi giữa chế độ sáng và tối"
}, Kn = "zh", qn = /* @__PURE__ */ new WeakMap(), Jn = {
	zh: Vn,
	en: Hn,
	ru: Un,
	ar: Wn,
	vi: Gn
}, Yn = we(void 0), Xn = (e, t) => {
	qn.set(e, t);
}, Zn = ({ children: e, defaultLanguage: t = Kn, initialLanguage: n, onLanguageChange: r }) => {
	let [i, a] = k(() => n ?? t), o = Ee((e) => {
		a(e), r?.(e);
	}, [r]), s = Ee((e) => Jn[i][e] || e, [i]), c = ke(() => ({
		language: i,
		setLanguage: o,
		t: s
	}), [
		i,
		o,
		s
	]);
	return /* @__PURE__ */ I(Yn.Provider, {
		value: c,
		children: e
	});
}, z = () => {
	let e = De(Yn);
	if (!e) throw Error("useI18n must be used within I18nProvider");
	return e;
}, Qn = (e) => {
	let t = () => (e ? qn.get(e) : void 0) ?? Kn;
	return {
		t: (e) => Jn[t()][e] || e,
		get language() {
			return t();
		}
	};
}, $n = (e) => {
	let t = e;
	t.renderImage = (e, t) => {
		let n = vt(e);
		n.render(/* @__PURE__ */ I(en, { ...t }));
		let r = { ...t };
		return {
			destroy: () => {
				setTimeout(() => {
					n.unmount();
				}, 0);
			},
			update: (e) => {
				r = {
					...r,
					...e
				}, n.render(/* @__PURE__ */ I(en, { ...r }));
			}
		};
	};
	let { t: n } = Qn(e);
	return t.getI18nValue = (e) => e === Ge.lineText ? n("draw.lineText") : e === Ge.geometryText ? n("draw.geometryText") : e === ct.mindCentralText ? n("mind.centralText") : e === ct.abstractNodeText ? n("mind.abstractNodeText") : null, Bn(t);
}, B = Ce.forwardRef(({ children: e, padding: t, className: n, style: r, ...i }, a) => /* @__PURE__ */ I("div", {
	className: R("island", n),
	style: {
		"--padding": t,
		...r
	},
	ref: a,
	...i,
	children: e
})), V = {
	Row: Te(({ children: e, gap: t, align: n, justifyContent: r, className: i, style: a }, o) => /* @__PURE__ */ I("div", {
		className: R("stack stack_horizontal", i),
		style: {
			"--gap": t,
			alignItems: n,
			justifyContent: r,
			...a
		},
		ref: o,
		children: e
	})),
	Col: Te(({ children: e, gap: t, align: n, justifyContent: r, className: i, style: a }, o) => /* @__PURE__ */ I("div", {
		className: R("stack stack_vertical", i),
		style: {
			"--gap": t,
			justifyItems: n,
			justifyContent: r,
			...a
		},
		ref: o,
		children: e
	}))
}, er = class extends DOMException {
	constructor(e = "Request Aborted") {
		super(e, "AbortError");
	}
}, tr = (e) => !!e && typeof e == "object" && "then" in e && "catch" in e && "finally" in e, nr = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => function(r) {
	if (e?.(r), !n || !r?.defaultPrevented) return t?.(r);
}, rr = (e) => {
	let t = e.split(","), n = t[0].match(/:(.*?);/)[1], r = atob(t[1]), i = r.length, a = new Uint8Array(i);
	for (; i--;) a[i] = r.charCodeAt(i);
	return new Blob([a], { type: n });
}, ir = (e, t = {}) => ye(e, {
	fillStyle: "transparent",
	inlineStyleClassNames: ".extend,.emojis,.text",
	padding: 20,
	ratio: 4,
	...t
});
function ar(e, t) {
	let n = document.createElement("a"), r = window.URL.createObjectURL(e);
	n.href = r, n.download = t, document.body.append(n), n.click(), window.URL.revokeObjectURL(r), n.remove();
}
var or = (e, t) => {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}, H = (e) => (e = e.replace(/\bAlt\b/i, "Alt").replace(/\bShift\b/i, "Shift").replace(/\b(Enter|Return)\b/i, "Enter"), u || f ? e.replace(/\bCtrlOrCmd\b/gi, "Cmd").replace(/\bAlt\b/i, "Option") : e.replace(/\bCtrlOrCmd\b/gi, "Ctrl")), U = Ce.forwardRef((e, t) => {
	let { id: n } = { id: "drawnix" }, r = Ce.useRef(null);
	Ce.useImperativeHandle(t, () => r.current);
	let i = `tool-icon_size_${e.size || "medium"}`, [a, o] = k(!1), s = O(!0), c = async (t) => {
		let n = "onClick" in e && e.onClick?.(t);
		if (tr(n)) try {
			o(!0), await n;
		} catch (e) {
			if (e instanceof er) console.warn(e);
			else throw e;
		} finally {
			s.current && o(!1);
		}
	};
	D(() => (s.current = !0, () => {
		s.current = !1;
	}), []);
	let l = O(null);
	if (e.type === "button" || e.type === "icon" || e.type === "submit") {
		let t = e.type === "icon" ? "button" : e.type;
		return /* @__PURE__ */ L("button", {
			className: R("tool-icon_type_button", i, e.className, e.visible && !e.hidden ? "tool-icon_type_button--show" : "tool-icon_type_button--hide", {
				"tool-icon": !e.hidden,
				"tool-icon--selected": e.selected
			}),
			style: e.style,
			"data-testid": e["data-testid"],
			hidden: e.hidden,
			title: e.title,
			"aria-label": e["aria-label"],
			type: t,
			onClick: c,
			onPointerDown: (t) => {
				e.onPointerDown?.({
					pointerType: t.pointerType || null,
					event: t
				});
			},
			onPointerUp: (t) => {
				e.onPointerUp?.({ pointerType: t.pointerType || null });
			},
			ref: r,
			disabled: a || !!e.disabled,
			children: [
				(e.icon || e.label) && /* @__PURE__ */ L("div", {
					className: "tool-icon__icon",
					"aria-hidden": "true",
					"aria-disabled": !!e.disabled,
					children: [e.icon || e.label, e.keyBindingLabel && /* @__PURE__ */ I("span", {
						className: "tool-icon__keybinding",
						children: e.keyBindingLabel
					})]
				}),
				e.showAriaLabel && /* @__PURE__ */ I("div", {
					className: "tool-icon__label",
					children: e["aria-label"]
				}),
				e.children && /* @__PURE__ */ I("div", {
					className: "tool-icon__icon",
					children: e.children
				})
			]
		});
	}
	return /* @__PURE__ */ L("label", {
		className: R("tool-icon", e.className),
		title: e.title,
		onPointerDown: (t) => {
			l.current = t.pointerType || null, e.onPointerDown?.({
				pointerType: t.pointerType || null,
				event: t
			});
		},
		onPointerUp: (t) => {
			e.onPointerUp?.({ pointerType: t.pointerType || null }), requestAnimationFrame(() => {
				l.current = null;
			});
		},
		children: [/* @__PURE__ */ I("input", {
			className: `tool-icon_type_radio ${i}`,
			type: "radio",
			name: e.name,
			"aria-label": e["aria-label"],
			"aria-keyshortcuts": e["aria-keyshortcuts"],
			"data-testid": e["data-testid"],
			id: `${n}-${e.id}`,
			onChange: () => {
				e.onChange?.({ pointerType: l.current });
			},
			checked: e.checked,
			ref: r
		}), /* @__PURE__ */ L("div", {
			className: "tool-icon__icon",
			children: [e.icon, e.keyBindingLabel && /* @__PURE__ */ I("span", {
				className: "tool-icon__keybinding",
				children: e.keyBindingLabel
			})]
		})]
	});
});
U.displayName = "ToolButton";
//#endregion
//#region src/components/icons.tsx
var W = (e) => e, sr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		id: "Hand",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M8.44583468,0.500225887 C9.07406934,0.510185679 9.54739531,0.839591366 9.86192311,1.34305279 C9.89696656,1.39914649 9.92878401,1.45492964 9.9576026,1.50991157 L9.9576026,1.50991157 L10.0210033,1.64201027 L10.061978,1.62350755 C10.1972891,1.56834247 10.3444107,1.53218464 10.5027907,1.51755353 L10.5027907,1.51755353 L10.6649031,1.51019133 C11.4883708,1.51019133 12.0208782,1.99343346 12.3023042,2.66393278 C12.3903714,2.87392911 12.4344191,3.10047818 12.4339446,3.3257952 L12.4339446,3.3257952 L12.4360033,3.80501027 L12.5160535,3.78341501 C12.6124478,3.76124046 12.7138812,3.74739854 12.820201,3.74250274 L12.820201,3.74250274 L12.9833264,3.74194533 C13.6121166,3.7657478 14.0645887,4.0801724 14.3087062,4.56112689 C14.4521117,4.8436609 14.4987984,5.11349437 14.4999262,5.33449618 L14.4999262,5.33449618 L14.3922653,12.049414 C14.3784752,12.909177 14.0717787,13.7360948 13.5212406,14.3825228 C13.4055676,14.5183496 13.2843697,14.643961 13.1582361,14.7596335 C12.4634771,15.3967716 11.755103,15.6538706 11.1897396,15.7000055 L11.1897396,15.7000055 L7.4723083,15.6798158 C7.14276373,15.634268 6.81580098,15.5154267 6.49455235,15.3472501 C6.25643701,15.2225944 6.06881706,15.0975452 5.88705731,14.9494308 L5.88705731,14.9494308 L2.55198782,11.500873 C2.39559475,11.3769079 2.17626793,11.1748532 1.9548636,10.9139403 C1.57867502,10.4706225 1.33501976,10.0139923 1.30330257,9.52833025 C1.28093191,9.18578476 1.37200912,8.85641102 1.5826788,8.56872564 C1.82538833,8.23725279 2.12881965,8.02107162 2.47470569,7.92957033 C2.95807982,7.80169771 3.42705723,7.92468989 3.86509644,8.18731167 C4.04431391,8.29475961 4.1816109,8.40304483 4.26225571,8.47866867 L4.26225571,8.47866867 L4.61400328,8.79701027 L4.57247249,3.59275349 L4.57628524,3.46204923 C4.5897691,3.23444442 4.64087578,2.95701848 4.75937106,2.66961597 C5.01017272,2.06131302 5.49670227,1.64692543 6.21363856,1.60818786 C6.44223508,1.59583681 6.65042099,1.62176802 6.83696985,1.68057551 L6.83696985,1.68057551 L6.86400328,1.69001027 C6.88501862,1.63593052 6.90764242,1.58175442 6.9331867,1.52672633 L6.9331867,1.52672633 L7.01883595,1.35955614 C7.31549194,0.832047939 7.79476072,0.48993549 8.44583468,0.500225887 Z M8.42684173,1.70001476 C8.26825412,1.69756905 8.16339456,1.77242008 8.06478367,1.94776814 C8.03967773,1.99241107 8.01831703,2.03811495 8.00083464,2.07855067 L8.00083464,2.07855067 L7.94879157,2.2035905 L7.94354455,2.20731401 L7.943,3.161 L7.97170661,3.16123746 L7.97170661,7.60991883 L6.77170661,7.60991883 L6.771,3.338 L6.74362358,3.33880359 C6.74284189,3.29064626 6.73014163,3.20282206 6.7002616,3.11094408 L6.66446012,3.01903385 C6.58982025,2.85766739 6.49843292,2.79455071 6.27838133,2.80644008 C6.07001018,2.81769881 5.95642108,2.91444507 5.86877664,3.12702089 C5.79792279,3.29887224 5.77228127,3.48655908 5.77246879,3.58977183 L5.77246879,3.58977183 L5.83613619,11.5252021 L3.41863956,9.33477657 L3.31637296,9.25979571 L3.24805011,9.21651224 C3.06096922,9.10434987 2.89279975,9.06024641 2.78159879,9.0896637 C2.71007735,9.10858411 2.63607367,9.1613084 2.55086305,9.27768211 C2.51020424,9.33320478 2.49638061,9.38319687 2.50075171,9.4501283 C2.51206889,9.62341997 2.64503022,9.87260054 2.86983366,10.1375191 C3.03268834,10.3294345 3.19762053,10.4813781 3.35554956,10.6131022 L3.35554956,10.6131022 L6.68454317,14.0569073 C6.71106575,14.0773808 6.74806086,14.1037158 6.79369091,14.1335929 L6.79369091,14.1335929 L6.95464838,14.2315311 L7.05111031,14.2841211 C7.25978123,14.3933622 7.46253523,14.4670573 7.55685495,14.4854708 L7.55685495,14.4854708 L11.1407985,14.5022108 C11.1503576,14.5013899 11.1627905,14.4997539 11.1779002,14.4971772 L11.1779002,14.4971772 L11.2991076,14.4694224 C11.3491682,14.4557375 11.4083624,14.437284 11.4751158,14.4130563 C11.769383,14.3062543 12.066676,14.1324596 12.3471758,13.8752234 C12.4371203,13.7927386 12.5240597,13.7026333 12.607654,13.6044743 C12.9760464,13.1719172 13.183059,12.6137678 13.1924195,12.030173 L13.1924195,12.030173 L13.3000132,5.32832551 C13.2997939,5.29016685 13.2826117,5.19085946 13.2386527,5.10425262 C13.1843838,4.99733326 13.1129774,4.94771265 12.9379578,4.94108739 C12.6814739,4.93138871 12.534132,5.11189595 12.4756792,5.39480062 L12.4768718,7.52734922 L11.2768718,7.52734922 L11.276,5.688 L11.2462883,5.6883208 L11.2339541,3.32771285 C11.2341,3.2560396 11.2209054,3.18817621 11.1957482,3.12818892 C11.0820579,2.85732094 10.9199288,2.71019133 10.6649031,2.71019133 C10.456829,2.71019133 10.3197487,2.87378067 10.2524297,3.11264939 L10.2530225,7.512783 L9.05302254,7.512783 L9.053,3.288 L9.01554331,3.28724203 L8.98800328,2.29901027 L8.9629175,2.22263368 C8.94515567,2.17417174 8.92167756,2.11937748 8.8924232,2.06330056 L8.8924232,2.06330056 L8.84420197,1.9788544 C8.72758855,1.79219249 8.59915015,1.70280728 8.42684173,1.70001476 Z" })
	})
})), cr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		id: "selection",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M1.38232686,2.38218266 L5.4143451,14.2246629 L5.45540179,14.3136477 C5.6738376,14.7029541 6.25143564,14.7273637 6.49230627,14.3232393 L8.11486037,11.5990854 L10.8833927,14.4351257 C11.1162256,14.673686 11.4988798,14.6767204 11.7354668,14.4418826 L14.1933351,12.0021862 L14.263123,11.9192708 C14.4260847,11.6858139 14.4039042,11.3621027 14.1959502,11.1531274 L11.3598604,8.30408543 L14.0003903,6.44278167 C14.4042341,6.15799031 14.3099422,5.5344405 13.8399491,5.38178897 L2.13023795,1.60291226 C1.65322163,1.44797961 1.20794286,1.91192855 1.38232686,2.38218266 Z M2.93689198,3.12556703 L12.3288604,6.15308543 L10.0883903,7.73315528 L10.0121747,7.79676991 C9.78025886,8.02517222 9.77056424,8.40723513 10.0088753,8.64671667 L12.9218604,11.5730854 L11.3198604,13.1630854 L8.42938714,10.2026992 L8.35682877,10.1391916 C8.07802132,9.93187508 7.66955488,10.0042813 7.48460396,10.3145856 L6.10286037,12.6310854 L2.93689198,3.12556703 Z" })
	})
})), lr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		id: "Mind",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M14.5,1.5 C15.3284271,1.5 16,2.17157288 16,3 L16,4.5 C16,5.32842712 15.3284271,6 14.5,6 L10.5,6 C9.70541385,6 9.05512881,5.38217354 9.00332687,4.60070262 L7.75,4.6 C6.70187486,4.6 5.75693372,5.0417832 5.09122946,5.7492967 L5.5,5.75 C6.32842712,5.75 7,6.42157288 7,7.25 L7,8.75 C7,9.57842712 6.32842712,10.25 5.5,10.25 L4.69703093,10.2512226 C5.3493111,11.2442937 6.47308134,11.9 7.75,11.9 L9.004,11.9 L9.00686658,11.85554 C9.07955132,11.0948881 9.72030388,10.5 10.5,10.5 L14.5,10.5 C15.3284271,10.5 16,11.1715729 16,12 L16,13.5 C16,14.3284271 15.3284271,15 14.5,15 L10.5,15 C9.67157288,15 9,14.3284271 9,13.5 L9,13.1 L7.75,13.1 C5.78479628,13.1 4.09258608,11.9311758 3.33061658,10.2507745 L1.5,10.25 C0.671572875,10.25 0,9.57842712 0,8.75 L0,7.25 C0,6.42157288 0.671572875,5.75 1.5,5.75 L3.5932906,5.74973863 C4.44206161,4.34167555 5.98606075,3.4 7.75,3.4 L9,3.4 L9,3 C9,2.17157288 9.67157288,1.5 10.5,1.5 L14.5,1.5 Z M14.5,11.7 L10.5,11.7 C10.3343146,11.7 10.2,11.8343146 10.2,12 L10.2,13.5 C10.2,13.6656854 10.3343146,13.8 10.5,13.8 L14.5,13.8 C14.6656854,13.8 14.8,13.6656854 14.8,13.5 L14.8,12 C14.8,11.8343146 14.6656854,11.7 14.5,11.7 Z M5.5,6.95 L1.5,6.95 C1.33431458,6.95 1.2,7.08431458 1.2,7.25 L1.2,8.75 C1.2,8.91568542 1.33431458,9.05 1.5,9.05 L5.5,9.05 C5.66568542,9.05 5.8,8.91568542 5.8,8.75 L5.8,7.25 C5.8,7.08431458 5.66568542,6.95 5.5,6.95 Z M14.5,2.7 L10.5,2.7 C10.3343146,2.7 10.2,2.83431458 10.2,3 L10.2,4.5 C10.2,4.66568542 10.3343146,4.8 10.5,4.8 L14.5,4.8 C14.6656854,4.8 14.8,4.66568542 14.8,4.5 L14.8,3 C14.8,2.83431458 14.6656854,2.7 14.5,2.7 Z" })
	})
})), ur = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		id: "geometry",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M9.3,6.7 L1.7,6.7 L1.7,14.3 L9.3,14.3 L9.3,6.7 Z M10.5,9.8 C12.8748244,9.8 14.8,7.87482442 14.8,5.5 C14.8,3.12517558 12.8748244,1.2 10.5,1.2 C8.12517558,1.2 6.2,3.12517558 6.2,5.5 L9.5,5.5 C10.0522847,5.5 10.5,5.94771525 10.5,6.5 L10.5,9.8 Z M10.5,14.5 C10.5,15.0522847 10.0522847,15.5 9.5,15.5 L1.5,15.5 C0.94771525,15.5 0.5,15.0522847 0.5,14.5 L0.5,6.5 C0.5,5.94771525 0.94771525,5.5 1.5,5.5 L5,5.5 C5,2.46243388 7.46243388,0 10.5,0 C13.5375661,0 16,2.46243388 16,5.5 C16,8.53756612 13.5375661,11 10.5,11 L10.5,14.5 Z" })
	})
})), dr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		id: "font",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M4.75,14.5069828 C4.41862915,14.5069828 4.15,14.2383536 4.15,13.9069828 C4.15,13.5756119 4.41862915,13.3069828 4.75,13.3069828 L7.3993606,13.306 L7.3993606,2.7 L2.7113606,2.7 L2.7113606,4.10415313 C2.7113606,4.40238689 2.49377099,4.64979988 2.20868371,4.69630014 L2.1113606,4.70415313 C1.77998975,4.70415313 1.5113606,4.43552397 1.5113606,4.10415313 L1.5113606,2.1 C1.5113606,1.76862915 1.77998975,1.5 2.1113606,1.5 L13.8810378,1.5 C14.2124087,1.5 14.4810378,1.76862915 14.4810378,2.1 L14.4810378,4.10415313 C14.4810378,4.43552397 14.2124087,4.70415313 13.8810378,4.70415313 C13.549667,4.70415313 13.2810378,4.43552397 13.2810378,4.10415313 L13.2810378,2.7 L8.5993606,2.7 L8.5993606,13.306 L11.25,13.3069828 C11.5813708,13.3069828 11.85,13.5756119 11.85,13.9069828 C11.85,14.2383536 11.5813708,14.5069828 11.25,14.5069828 L4.75,14.5069828 Z" })
	})
})), fr = W(/* @__PURE__ */ L("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ I("path", {
			stroke: "none",
			d: "M0 0h24v24H0z"
		}),
		/* @__PURE__ */ I("path", { d: "M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" }),
		/* @__PURE__ */ I("path", { d: "M18 13.3l-6.3 -6.3" })
	]
})), pr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ I("g", {
		id: "straight-line",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", {
			d: "M8.55595221,-1.5261864 C8.88741773,-1.5261864 9.15621426,-1.25765205 9.15653772,-0.926186684 L9.16739175,10.3828136 L10.9946787,10.3836977 C11.2708211,10.3836977 11.4946787,10.6075553 11.4946787,10.8836977 C11.4946787,10.9607525 11.4768694,11.0367648 11.4426413,11.1058002 L8.8378495,16.3594519 C8.7642512,16.5078936 8.58425218,16.5685662 8.43581043,16.4949679 C8.37895485,16.4667786 8.33250284,16.4212859 8.30313336,16.3650308 L5.56226325,11.1150985 C5.43446412,10.8703088 5.52930372,10.5682659 5.77409341,10.4404667 C5.84552557,10.4031736 5.92491301,10.3836977 6.0054942,10.3836977 L7.96739175,10.3828136 L7.95653772,-0.926186684 C7.95621467,-1.25723416 8.22431979,-1.52586306 8.55536727,-1.52618611 Z",
			id: "",
			transform: "translate(8.500035, 7.500035) rotate(-135.000000) translate(-8.500035, -7.500035) "
		})
	})
})), mr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ I("path", {
		d: "M3 3h18v18H3z",
		stroke: "currentColor",
		strokeWidth: "2",
		fill: "none"
	})
})), hr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ I("g", {
		id: "terminal",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M11,3 C13.7614237,3 16,5.23857625 16,8 C16,10.7614237 13.7614237,13 11,13 L5,13 C2.23857625,13 0,10.7614237 0,8 C0,5.23857625 2.23857625,3 5,3 L11,3 Z M11,4.2 L5,4.2 C2.90131795,4.2 1.2,5.90131795 1.2,8 C1.2,10.0330982 2.79664702,11.6932796 4.8044525,11.7950555 L5,11.8 L11,11.8 C13.098682,11.8 14.8,10.098682 14.8,8 C14.8,5.96690176 13.203353,4.30672042 11.1955475,4.20494454 L11,4.2 Z" })
	})
})), gr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ I("g", {
		id: "ellipse",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2.2 C4.79674845,2.2 2.2,4.79674845 2.2,8 C2.2,11.2032515 4.79674845,13.8 8,13.8 C11.2032515,13.8 13.8,11.2032515 13.8,8 C13.8,4.79674845 11.2032515,2.2 8,2.2 Z" })
	})
})), _r = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ I("g", {
		id: "triangle",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M8.23125547,1.21366135 C8.3114266,1.25857939 8.37766784,1.32472334 8.42270367,1.40482837 L15.6471754,14.2549655 C15.7825042,14.4956743 15.6970768,14.800513 15.456368,14.9358418 C15.3815505,14.977905 15.2971646,15 15.2113335,15 L0.787227066,15 C0.511084691,15 0.287227066,14.7761424 0.287227066,14.5 C0.287227066,14.414418 0.309194147,14.3302684 0.351025556,14.2556064 L7.55066033,1.40546924 C7.6856352,1.1645618 7.99034802,1.07868648 8.23125547,1.21366135 Z M7.98695902,3.07926294 L1.98095902,13.7992629 L14.014959,13.7992629 L7.98695902,3.07926294 Z" })
	})
})), vr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", {
			d: "M13.7636471,2.6449804 C13.7716713,2.69552516 13.7718878,2.74700226 13.7642892,2.79761274 L12.3875778,11.9671885 C12.3550099,12.1841069 12.184864,12.3544698 11.9679874,12.3873141 L2.78433018,13.7781116 C2.511301,13.8194599 2.25644773,13.6316454 2.21509947,13.3586162 C2.20737253,13.307594 2.20759072,13.2556831 2.21574631,13.2047277 L3.67471119,4.08923146 C3.70888725,3.87570215 3.87646006,3.70834166 4.09003253,3.67443635 L13.1914362,2.22955927 C13.4641633,2.18626298 13.7203508,2.37225335 13.7636471,2.6449804 Z M12.4355704,3.5645263 L4.77957044,4.7795263 L3.55157044,12.4485263 L11.2775704,11.2775263 L12.4355704,3.5645263 Z",
			transform: "translate(7.989647, 8.003560) rotate(-315.000000) translate(-7.989647, -8.003560) "
		})
	})
})), yr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M15.3062871,3.5 C15.5824294,3.5 15.8062871,3.72385763 15.8062871,4 C15.8062871,4.05374105 15.7976231,4.10713065 15.7806287,4.15811388 L13.113962,12.1581139 C13.045905,12.362285 12.8548356,12.5 12.6396204,12.5 L0.693712943,12.5 C0.417570568,12.5 0.193712943,12.2761424 0.193712943,12 C0.193712943,11.946259 0.202376883,11.8928694 0.219371294,11.8418861 L2.88603796,3.84188612 C2.95409498,3.63771505 3.14516441,3.5 3.36037961,3.5 L15.3062871,3.5 Z M14.335,4.7 L3.864,4.7 L1.664,11.3 L12.134,11.3 L14.335,4.7 Z" })
	})
})), br = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3,3 L13,3 C14.1045695,3 15,3.8954305 15,5 L15,11 C15,12.1045695 14.1045695,13 13,13 L3,13 C1.8954305,13 1,12.1045695 1,11 L1,5 C1,3.8954305 1.8954305,3 3,3 Z M3,4.2 C2.5581722,4.2 2.2,4.5581722 2.2,5 L2.2,11 C2.2,11.4418278 2.5581722,11.8 3,11.8 L13,11.8 C13.4418278,11.8 13.8,11.4418278 13.8,11 L13.8,5 C13.8,4.5581722 13.4418278,4.2 13,4.2 L3,4.2 Z"
		})
	})
})), xr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", {
			d: "M8.55595221,-1.5261864 C8.88741773,-1.5261864 9.15621426,-1.25765205 9.15653772,-0.926186684 L9.16739175,10.3828136 L10.9946787,10.3836977 C11.2708211,10.3836977 11.4946787,10.6075553 11.4946787,10.8836977 C11.4946787,10.9607525 11.4768694,11.0367648 11.4426413,11.1058002 L8.8378495,16.3594519 C8.7642512,16.5078936 8.58425218,16.5685662 8.43581043,16.4949679 C8.37895485,16.4667786 8.33250284,16.4212859 8.30313336,16.3650308 L5.56226325,11.1150985 C5.43446412,10.8703088 5.52930372,10.5682659 5.77409341,10.4404667 C5.84552557,10.4031736 5.92491301,10.3836977 6.0054942,10.3836977 L7.96739175,10.3828136 L7.95653772,-0.926186684 C7.95621467,-1.25723416 8.22431979,-1.52586306 8.55536727,-1.52618611 Z",
			transform: "translate(8.500035, 7.500035) rotate(-135.000000) translate(-8.500035, -7.500035) "
		})
	})
})), Sr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M10.0153197,2.75391207 C10.0923746,2.75391207 10.1683869,2.77172133 10.2374222,2.80594949 L15.4910739,5.41074126 C15.6395156,5.48433956 15.7001882,5.66433859 15.6265899,5.81278033 C15.5984006,5.86963592 15.5529079,5.91608792 15.4966529,5.9454574 L10.2467205,8.68632752 C10.0019308,8.81412664 9.69988791,8.71928704 9.57208878,8.47449735 C9.53479568,8.40306519 9.51531974,8.32367776 9.51531974,8.24309656 L9.51458753,6.62591207 L6.16858753,6.62651279 L6.16914066,12.0061269 C6.16914066,12.3043606 5.95155104,12.5517736 5.66646377,12.5982739 L5.56914066,12.6061269 L0.534587532,12.6061269 C0.203216682,12.6061269 -0.0654124678,12.3374977 -0.0654124678,12.0061269 C-0.0654124678,11.674756 0.203216682,11.4061269 0.534587532,11.4061269 L4.96858753,11.4055128 L4.96914066,6.02651279 C4.96914066,5.72827903 5.18673027,5.48086604 5.47181754,5.43436578 L5.56914066,5.42651279 L9.51458753,5.42591207 L9.51531974,3.25391207 C9.51531974,2.9777697 9.73917736,2.75391207 10.0153197,2.75391207 Z" })
	})
})), Cr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M10.0153197,2.75391207 C10.0923746,2.75391207 10.1683869,2.77172133 10.2374222,2.80594949 L15.4910739,5.41074126 C15.6395156,5.48433956 15.7001882,5.66433859 15.6265899,5.81278033 C15.5984006,5.86963592 15.5529079,5.91608792 15.4966529,5.9454574 L10.2467205,8.68632752 C10.0019308,8.81412664 9.69988791,8.71928704 9.57208878,8.47449735 C9.53479568,8.40306519 9.51531974,8.32367776 9.51531974,8.24309656 L9.51423005,6.39035523 C5.97984781,6.85936966 3.21691607,9.08498364 1.18879108,13.1285821 C1.04022695,13.4247836 0.679673152,13.5444674 0.383471635,13.3959033 C0.0872701176,13.2473391 -0.0324136308,12.8867853 0.116150501,12.5905838 C2.34388813,8.14900524 5.48945543,5.65776043 9.51468497,5.18078677 L9.51531974,3.25391207 C9.51531974,2.9777697 9.73917736,2.75391207 10.0153197,2.75391207 Z" })
	})
})), wr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	children: /* @__PURE__ */ L("g", {
		strokeWidth: "1.5",
		children: [
			/* @__PURE__ */ I("path", {
				stroke: "none",
				d: "M0 0h24v24H0z"
			}),
			/* @__PURE__ */ I("line", {
				x1: "4",
				y1: "6",
				x2: "20",
				y2: "6"
			}),
			/* @__PURE__ */ I("line", {
				x1: "4",
				y1: "12",
				x2: "20",
				y2: "12"
			}),
			/* @__PURE__ */ I("line", {
				x1: "4",
				y1: "18",
				x2: "20",
				y2: "18"
			})
		]
	})
})), Tr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	children: /* @__PURE__ */ I("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		fill: "none",
		d: "M7.5 15.833c-3.583 1.167-3.583-2.083-5-2.5m10 4.167v-2.917c0-.833.083-1.166-.417-1.666 2.334-.25 4.584-1.167 4.584-5a3.833 3.833 0 0 0-1.084-2.667 3.5 3.5 0 0 0-.083-2.667s-.917-.25-2.917 1.084a10.25 10.25 0 0 0-5.166 0C5.417 2.333 4.5 2.583 4.5 2.583a3.5 3.5 0 0 0-.083 2.667 3.833 3.833 0 0 0-1.084 2.667c0 3.833 2.25 4.75 4.584 5-.5.5-.5 1-.417 1.666V17.5",
		strokeWidth: "1.25"
	})
})), Er = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ L("g", {
		strokeWidth: "1.25",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		fill: "none",
		children: [
			/* @__PURE__ */ I("path", {
				stroke: "none",
				d: "M0 0h24v24H0z"
			}),
			/* @__PURE__ */ I("path", { d: "M15 8h.01" }),
			/* @__PURE__ */ I("path", { d: "M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5" }),
			/* @__PURE__ */ I("path", { d: "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" }),
			/* @__PURE__ */ I("path", { d: "M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598" }),
			/* @__PURE__ */ I("path", { d: "M19 16v6" }),
			/* @__PURE__ */ I("path", { d: "M22 19l-3 3l-3 -3" })
		]
	})
})), Dr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		id: "zoom-out",
		stroke: "none",
		fill: "currentColor",
		strokeWidth: "1",
		children: /* @__PURE__ */ I("path", {
			fillRule: "nonzero",
			d: "M6.85,2.73225886e-13 C10.6331505,2.73225886e-13 13.7,3.06684946 13.7,6.85 C13.7,8.54194045 13.0865836,10.0906098 12.0700142,11.2857448 L15.4201976,14.5717081 C15.6567367,14.8037768 15.6603607,15.1836585 15.4282919,15.4201976 C15.1962232,15.6567367 14.8163415,15.6603607 14.5798024,15.4282919 L14.5798024,15.4282919 L11.2163456,12.128262 C10.0309427,13.1099691 8.50937591,13.7 6.85,13.7 C3.06684946,13.7 4.58522109e-14,10.6331505 4.58522109e-14,6.85 C4.58522109e-14,3.06684946 3.06684946,2.73225886e-13 6.85,2.73225886e-13 Z M6.85,1.2 C3.72959116,1.2 1.2,3.72959116 1.2,6.85 C1.2,9.97040884 3.72959116,12.5 6.85,12.5 C8.31753357,12.5 9.65438791,11.9404957 10.6588859,11.0231643 C10.6855412,10.9625408 10.7245275,10.9050898 10.7743982,10.8542584 C10.8288931,10.7987137 10.8915387,10.7560124 10.9585649,10.7261903 C11.9144009,9.71595758 12.5,8.35136579 12.5,6.85 C12.5,3.72959116 9.97040884,1.2 6.85,1.2 Z M4.6,6.2 L9.12944565,6.2 C9.4608165,6.2 9.72944565,6.46862915 9.72944565,6.8 C9.72944565,7.09823376 9.51185604,7.34564675 9.22676876,7.39214701 L9.12944565,7.4 L4.6,7.4 C4.26862915,7.4 4,7.13137085 4,6.8 C4,6.50176624 4.21758961,6.25435325 4.50267688,6.20785299 L4.6,6.2 L9.12944565,6.2 Z"
		})
	})
})), Or = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		id: "zoom-in",
		stroke: "none",
		fill: "currentColor",
		strokeWidth: "1",
		children: /* @__PURE__ */ I("path", {
			fillRule: "nonzero",
			d: "M6.85,-1.81188398e-13 C10.6331505,-1.81188398e-13 13.7,3.06684946 13.7,6.85 C13.7,8.54194045 13.0865836,10.0906098 12.0700142,11.2857448 L15.4201976,14.5717081 C15.6567367,14.8037768 15.6603607,15.1836585 15.4282919,15.4201976 C15.1962232,15.6567367 14.8163415,15.6603607 14.5798024,15.4282919 L14.5798024,15.4282919 L11.2163456,12.128262 C10.0309427,13.1099691 8.50937591,13.7 6.85,13.7 C3.06684946,13.7 4.61852778e-14,10.6331505 4.61852778e-14,6.85 C4.61852778e-14,3.06684946 3.06684946,-1.81188398e-13 6.85,-1.81188398e-13 Z M6.85,1.2 C3.72959116,1.2 1.2,3.72959116 1.2,6.85 C1.2,9.97040884 3.72959116,12.5 6.85,12.5 C8.31753357,12.5 9.65438791,11.9404957 10.6588859,11.0231643 C10.6855412,10.9625408 10.7245275,10.9050898 10.7743982,10.8542584 C10.8288931,10.7987137 10.8915387,10.7560124 10.9585649,10.7261903 C11.9144009,9.71595758 12.5,8.35136579 12.5,6.85 C12.5,3.72959116 9.97040884,1.2 6.85,1.2 Z M6.86472282,3.93527718 C7.16295659,3.93527718 7.41036958,4.15286679 7.45686984,4.43795406 L7.46472282,4.53527718 L7.464,6.19927718 L9.12944565,6.2 C9.42767941,6.2 9.6750924,6.41758961 9.72159266,6.70267688 L9.72944565,6.8 C9.72944565,7.09823376 9.51185604,7.34564675 9.22676876,7.39214701 L9.12944565,7.4 L7.464,7.39927718 L7.46472282,9.06472282 C7.46472282,9.36295659 7.24713321,9.61036958 6.96204594,9.65686984 L6.86472282,9.66472282 C6.56648906,9.66472282 6.31907607,9.44713321 6.27257581,9.16204594 L6.26472282,9.06472282 L6.264,7.39927718 L4.6,7.4 C4.30176624,7.4 4.05435325,7.18241039 4.00785299,6.89732312 L4,6.8 C4,6.50176624 4.21758961,6.25435325 4.50267688,6.20785299 L4.6,6.2 L6.264,6.19927718 L6.26472282,4.53527718 C6.26472282,4.2701805 6.43664548,4.0452385 6.67507642,3.96586557 L6.76739971,3.94313016 L6.86472282,3.93527718 Z"
		})
	})
})), kr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 18 18",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		id: "save-file",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", {
			fillRule: "nonzero",
			d: "M11.064 9.1l2.645 2.595.03-.029.848.849-3.523 3.323-.848-.848 1.994-1.883H7.5v-1.2h4.712l-1.996-1.958.848-.849zM9.356.3L13.7 3.71V7.9h-1.2l-.001-2.633H8.5V1.5L3.1 1.5a.4.4 0 0 0-.392.32L2.7 1.9v12a.4.4 0 0 0 .32.392l.08.008h3.418v1.2H3.1a1.6 1.6 0 0 1-1.593-1.454L1.5 13.9v-12A1.6 1.6 0 0 1 2.954.307L3.1.3h6.256zM9.7 2.095v1.973l2.51-.001L9.7 2.095z"
		})
	})
})), Ar = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 18 18",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		id: "save-file",
		stroke: "currentColor",
		fill: "none",
		children: /* @__PURE__ */ I("path", {
			d: "m9.257 6.351.183.183H15.819c.34 0 .727.182 1.051.506.323.323.505.708.505 1.05v5.819c0 .316-.183.7-.52 1.035-.337.338-.723.522-1.037.522H4.182c-.352 0-.74-.181-1.058-.5-.318-.318-.499-.705-.499-1.057V5.182c0-.351.181-.736.5-1.054.32-.321.71-.503 1.057-.503H6.53l2.726 2.726Z",
			strokeWidth: "1.25"
		})
	})
})), jr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	className: "background-color-icon",
	children: /* @__PURE__ */ L("g", {
		transform: "translate(1 1)",
		fillRule: "evenodd",
		fill: "#000",
		stroke: "none",
		children: [/* @__PURE__ */ I("circle", {
			fillOpacity: ".04",
			r: "11",
			cy: "11",
			cx: "11"
		}), /* @__PURE__ */ I("path", {
			d: "M17 20.221V17h3.221A11.06 11.06 0 0 1 17 20.221zm-12 0A11.06 11.06 0 0 1 1.779 17H5v3.221zM20.221 5H17V1.779A11.06 11.06 0 0 1 20.221 5zM9 .181V1H6.411A10.919 10.919 0 0 1 9 .181zM15.589 1H13V.181c.907.167 1.775.445 2.589.819zM13 21.819V21h2.589c-.814.374-1.682.652-2.589.819zm-4 0A10.919 10.919 0 0 1 6.411 21H9v.819zm-8-6.23A10.919 10.919 0 0 1 .181 13H1v2.589zm0-9.178V9H.181C.348 8.093.626 7.225 1 6.411zM21.819 9H21V6.411c.374.814.652 1.682.819 2.589zM21 15.589V13h.819A10.919 10.919 0 0 1 21 15.589zM5 1.779V5H1.779A11.06 11.06 0 0 1 5 1.779zM5 13h4v4H5v-4zm8 0h4v4h-4v-4zM5 5h4v4H5V5zm8 0h4v4h-4V5zm0 12v4H9v-4h4zm8-8v4h-4V9h4zm-8 0v4H9V9h4zM5 9v4H1V9h4zm8-8v4H9V1h4z",
			fillOpacity: ".12"
		})]
	})
})), Mr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 32 32",
	className: "no-color-icon",
	children: /* @__PURE__ */ L("g", {
		xmlns: "http://www.w3.org/2000/svg",
		fillRule: "nonzero",
		fill: "currentColor",
		stroke: "none",
		children: [/* @__PURE__ */ I("path", { d: "M2 16c0 7.733 6.267 14 14 14s14-6.267 14-14S23.733 2 16 2 2 8.267 2 16zm-1 0C1 7.716 7.714 1 16 1c8.284 0 15 6.714 15 15 0 8.284-6.714 15-15 15-8.284 0-15-6.714-15-15z" }), /* @__PURE__ */ I("path", { d: "M6.354 26.354l-.708-.708 20-20 .708.708z" })]
	})
})), Nr = W(/* @__PURE__ */ I("svg", {
	className: "selected-icon",
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ I("polyline", { points: "20 6 9 17 4 12" })
})), Pr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 24 24",
	className: "stroke-icon",
	children: /* @__PURE__ */ L("g", {
		xmlns: "http://www.w3.org/2000/svg",
		stroke: "none",
		fillRule: "evenodd",
		fill: "#000",
		children: [/* @__PURE__ */ I("path", {
			d: "M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0-4c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z",
			fillRule: "nonzero",
			fillOpacity: ".04"
		}), /* @__PURE__ */ I("path", {
			d: "M12 5V1c1.491 0 2.914.297 4.21.835L14.68 5.53A6.979 6.979 0 0 0 12 5zm4.95 2.048l2.828-2.828a11.016 11.016 0 0 1 2.388 3.568l-3.697 1.53a7.01 7.01 0 0 0-1.519-2.27zM19 12h4c0 1.491-.297 2.914-.835 4.21l-3.696-1.53c.342-.826.531-1.73.531-2.68zm-2.05 4.95l2.828 2.828a11.016 11.016 0 0 1-3.567 2.387l-1.532-3.696a7.01 7.01 0 0 0 2.27-1.52zM12 19v4c-1.491 0-2.914-.297-4.21-.835l1.53-3.696c.826.342 1.73.531 2.68.531zm-4.95-2.05l-2.828 2.828a11.016 11.016 0 0 1-2.387-3.567l3.696-1.532a7.01 7.01 0 0 0 1.52 2.27zM5 12H1c0-1.491.297-2.914.835-4.21L5.53 9.32A6.979 6.979 0 0 0 5 12zm2.05-4.95L4.222 4.222a11.016 11.016 0 0 1 3.567-2.387L9.321 5.53a7.01 7.01 0 0 0-2.27 1.52z",
			fillOpacity: ".12"
		})]
	})
})), Fr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ I("g", {
		xmlns: "http://www.w3.org/2000/svg",
		id: "icon-border-white",
		stroke: "none",
		strokeWidth: "1",
		fill: "none",
		fillRule: "evenodd",
		opacity: "0.1",
		children: /* @__PURE__ */ L("g", {
			id: "Group",
			children: [/* @__PURE__ */ I("path", {
				d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z",
				fill: "#000000",
				fillRule: "nonzero"
			}), /* @__PURE__ */ I("path", {
				d: "M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z M12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z",
				fill: "#000000",
				fillRule: "nonzero"
			})]
		})
	})
})), Ir = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 24 32",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ L("g", {
		transform: "translate(0 14)",
		fillRule: "evenodd",
		fill: "none",
		children: [/* @__PURE__ */ I("path", { d: "M-18-19h60v40h-60z" }), /* @__PURE__ */ I("path", {
			d: "M0 0h24v2H0z",
			fill: "currentColor"
		})]
	})
})), Lr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 24 32",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		transform: "translate(0 14)",
		fillRule: "evenodd",
		fill: "none",
		children: /* @__PURE__ */ I("g", {
			fill: "currentColor",
			children: /* @__PURE__ */ I("path", { d: "M0 0h6v2H0zM9 0h6v2H9zM18 0h6v2h-6z" })
		})
	})
})), Rr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 24 32",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		transform: "translate(0 14)",
		fillRule: "evenodd",
		fill: "none",
		children: /* @__PURE__ */ L("g", {
			fill: "currentColor",
			children: [
				/* @__PURE__ */ I("rect", {
					rx: "1",
					height: "2",
					width: "2"
				}),
				/* @__PURE__ */ I("rect", {
					rx: "1",
					x: "4",
					height: "2",
					width: "2"
				}),
				/* @__PURE__ */ I("rect", {
					rx: "1",
					x: "8",
					height: "2",
					width: "2"
				}),
				/* @__PURE__ */ I("rect", {
					rx: "1",
					x: "12",
					height: "2",
					width: "2"
				}),
				/* @__PURE__ */ I("rect", {
					rx: "1",
					x: "16",
					height: "2",
					width: "2"
				}),
				/* @__PURE__ */ I("rect", {
					rx: "1",
					x: "20",
					height: "2",
					width: "2"
				})
			]
		})
	})
})), zr = ({ currentColor: e }) => /* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	className: "font-color-icon",
	children: /* @__PURE__ */ L("g", {
		id: "font-color",
		strokeWidth: "1",
		fillRule: "evenodd",
		stroke: "none",
		fill: "currentColor",
		children: [/* @__PURE__ */ I("path", {
			id: "secondary-color",
			d: "M1.999 15.011h11.998V13.81H1.999z",
			fill: e || "#333333"
		}), /* @__PURE__ */ I("path", {
			d: "M6.034 7.59h4.104L8.086 2.297 6.034 7.59zm-.465 1.2l-1.437 3.707H2.845L7.301 1h1.287l-.001.004h.286l4.454 11.492h-1.288L10.603 8.79H5.569z",
			id: "A"
		})]
	})
}), Br = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("g", {
			id: "undo-cion",
			transform: "translate(1 1)",
			children: /* @__PURE__ */ I("path", {
				d: "M3.84 5.825a.6.6 0 0 1 .063.774l-.064.075a.6.6 0 0 1-.774.063l-.074-.063L.176 3.859a.6.6 0 0 1-.064-.775l.064-.074L3.01.176a.6.6 0 0 1 .912.774l-.063.074-1.795 1.794h6.851a5.1 5.1 0 0 1 .216 10.196l-.216.004h-4a.6.6 0 0 1-.097-1.192l.097-.008h4a3.9 3.9 0 0 0 .201-7.795l-.2-.005H2.033l1.805 1.807z",
				id: "undo-icon-path"
			})
		})
	})
})), Vr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("g", {
			id: "redo-cion",
			transform: "matrix(-1 0 0 1 15.015 1)",
			children: /* @__PURE__ */ I("path", {
				d: "M3.84 5.825a.6.6 0 0 1 .063.774l-.064.075a.6.6 0 0 1-.774.063l-.074-.063L.176 3.859a.6.6 0 0 1-.064-.775l.064-.074L3.01.176a.6.6 0 0 1 .912.774l-.063.074-1.795 1.794h6.851a5.1 5.1 0 0 1 .216 10.196l-.216.004h-4a.6.6 0 0 1-.097-1.192l.097-.008h4a3.9 3.9 0 0 0 .201-7.795l-.2-.005H2.033l1.805 1.807z",
				id: "redo-icon-path"
			})
		})
	})
})), Hr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 20 20",
	fill: "none",
	stroke: "currentColor",
	children: /* @__PURE__ */ I("path", {
		strokeWidth: "1.25",
		d: "M3.333 5.833h13.334M8.333 9.167v5M11.667 9.167v5M4.167 5.833l.833 10c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.746 1.667-1.667l.833-10M7.5 5.833v-2.5c0-.46.373-.833.833-.833h3.334c.46 0 .833.373.833.833v2.5"
	})
})), Ur = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 20 20",
	fill: "none",
	stroke: "currentColor",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ L("g", {
		strokeWidth: "1.25",
		children: [/* @__PURE__ */ I("path", { d: "M14.375 6.458H8.958a2.5 2.5 0 0 0-2.5 2.5v5.417a2.5 2.5 0 0 0 2.5 2.5h5.417a2.5 2.5 0 0 0 2.5-2.5V8.958a2.5 2.5 0 0 0-2.5-2.5Z" }), /* @__PURE__ */ I("path", { d: "M11.667 3.125c.517 0 .986.21 1.325.55.34.338.55.807.55 1.325v1.458H8.333c-.485 0-.927.185-1.26.487-.343.312-.57.75-.609 1.24l-.005 5.357H5a1.87 1.87 0 0 1-1.326-.55 1.87 1.87 0 0 1-.549-1.325V5c0-.518.21-.987.55-1.326.338-.34.807-.549 1.325-.549h6.667Z" })]
	})
})), Wr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 1024 1024",
	fill: "currentColor",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("path", { d: "M170.794667 896c3.456 0 6.912-0.426667 10.325333-1.28l170.666667-42.666667c7.509333-1.877333 14.378667-5.76 19.84-11.221333L896.128 316.330667c16.128-16.128 25.002667-37.546667 25.002667-60.330667s-8.874667-44.202667-25.002667-60.330667L828.458667 128c-32.256-32.256-88.405333-32.256-120.661334 0L183.296 652.501333a42.794667 42.794667 0 0 0-11.221333 19.797334l-42.666667 170.666666A42.666667 42.666667 0 0 0 170.794667 896z m597.333333-707.669333L835.797333 256l-67.669333 67.669333L700.458667 256l67.669333-67.669333zM251.989333 704.469333l388.138667-388.138666L707.797333 384l-388.181333 388.138667-90.197333 22.528 22.570666-90.197334z" })
})), Gr = W(/* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("g", {
		id: "image",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M10.496 7c-.824 0-1.572-.675-1.498-1.5 0-.825.674-1.5 1.498-1.5.823 0 1.497.675 1.497 1.5S11.319 7 10.496 7zM13.8 9.476V2.2H2.2v5.432l.1-.078C3.132 6.904 4.029 6.5 5 6.5c.823 0 1.552.27 2.342.778.226.145.449.304.735.518.06.045.546.413.69.52 1.634 1.21 2.833 1.6 4.798 1.207l.235-.047zm0 1.523V10.7c-5 1-6.3-3-8.8-3-1.5 0-2.8 1.6-2.8 1.6v4.6h11.6V11zM14 1c.6 0 1 .536 1 1.071v11.784c0 .642-.4 1.071-1 1.071H2c-.6 0-1-.429-1-1.07V2.07c0-.535.4-1.07 1-1.07h12z" })
	})
})), Kr = W(/* @__PURE__ */ I("svg", {
	stroke: "currentColor",
	viewBox: "0 0 24 24",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ L("g", {
		strokeWidth: 1.8,
		fill: "none",
		children: [
			/* @__PURE__ */ I("path", {
				stroke: "none",
				d: "M0 0h24v24H0z",
				fill: "none"
			}),
			/* @__PURE__ */ I("path", { d: "M12 3l-4 7h8z" }),
			/* @__PURE__ */ I("path", { d: "M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }),
			/* @__PURE__ */ I("path", { d: "M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" })
		]
	})
})), qr = W(/* @__PURE__ */ I("svg", {
	stroke: "currentColor",
	viewBox: "0 0 512 512",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("path", {
		stroke: "none",
		fill: "currentColor",
		d: "M407.48,111.18C335.587,108.103 269.573,152.338 245.08,220C220.587,152.338 154.573,108.103 82.68,111.18C80.285,168.229 107.577,222.632 154.74,254.82C178.908,271.419 193.35,298.951 193.27,328.27L193.27,379.13L296.9,379.13L296.9,328.27C296.816,298.953 311.255,271.42 335.42,254.82C382.596,222.644 409.892,168.233 407.48,111.18Z"
	})
})), Jr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", { d: "M14.85,2.5 C15.4851275,2.5 16,3.01487254 16,3.65 L16,12.35 C16,12.9851275 15.4851275,13.5 14.85,13.5 L1.15,13.5 C0.514872538,13.5 0,12.9851275 0,12.35 L0,3.65 C0,3.01487254 0.514872538,2.5 1.15,2.5 L14.85,2.5 Z M14.85,3.7 L1.15,3.7 C1.17735931,3.7 1.2,3.72264069 1.2,3.75 L1.2,12.25 C1.2,12.2773593 1.17735931,12.3 1.15,12.3 L14.85,12.3 C14.8226407,12.3 14.8,12.2773593 14.8,12.25 L14.8,3.75 C14.8,3.72264069 14.8226407,3.7 14.85,3.7 Z M3.5,10.5 L3.5,5.5 L5.25,5.5 L7,7.8 L8.75,5.5 L10.5,5.5 L10.5,10.5 L8.75,10.5 L8.75,7.5 L7,9.8 L5.25,7.5 L5.25,10.5 L3.5,10.5 Z M12.5,10.5 L11,8.5 L12.5,8.5 L12.5,5.5 L11,5.5 L12.5,5.5 L12.5,8.5 L14,8.5 L12.5,10.5 Z" })
	})
})), Yr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ I("path", {
			d: "M12.253 4.13h-1.2v-1a2.8 2.8 0 0 0-5.6 0v4a2.8 2.8 0 0 0 2.8 2.8v1.2a4 4 0 0 1-4-4v-4a4 4 0 0 1 8 0v1zm-8 8h1.2v1a2.8 2.8 0 0 0 5.6 0v-4a2.8 2.8 0 0 0-2.8-2.8v-1.2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0v-1z",
			transform: "rotate(46 8.253 8.13)"
		})
	})
})), Xr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ L("g", {
		stroke: "none",
		fill: "currentColor",
		children: [
			/* @__PURE__ */ I("circle", {
				cx: "3",
				cy: "8",
				r: "1.2"
			}),
			/* @__PURE__ */ I("circle", {
				cx: "8",
				cy: "8",
				r: "1.2"
			}),
			/* @__PURE__ */ I("circle", {
				cx: "13",
				cy: "8",
				r: "1.2"
			})
		]
	})
})), Zr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		children: /* @__PURE__ */ I("path", { d: "M8.44521878,4.21103025 C8.58299906,3.97171622 8.8886944,3.88940684 9.12800843,4.02718711 L15.242109,7.54725833 C15.3194119,7.59176394 15.3834015,7.65613893 15.4274422,7.73370766 C15.5637831,7.97384463 15.4796398,8.27904026 15.2395028,8.41538118 L9.12748155,11.8855614 C9.0176214,11.947936 8.88822223,11.9664118 8.76529593,11.9372749 C8.4965984,11.8735862 8.33040588,11.604134 8.39409456,11.3354364 L9.018,8.69941945 L1.5,8.7 C1.22385763,8.7 1,8.47614237 1,8.2 L1,8 C1,7.72385763 1.22385763,7.5 1.5,7.5 L9.075,7.49941945 L8.39165922,4.57430951 C8.3700078,4.48168206 8.37536432,4.38547957 8.40609313,4.29679626 Z" })
	})
})), Qr = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		children: /* @__PURE__ */ I("rect", {
			x: "1",
			y: "7.5",
			width: "14",
			height: "1.2",
			rx: ".5"
		})
	})
})), $r = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		fillRule: "evenodd",
		children: /* @__PURE__ */ I("path", { d: "M13,4 L13,5.2 L6,5.2 L6,4 L13,4 Z M14,7.4 L14,8.6 L6,8.6 L6,7.4 L14,7.4 Z M10,10.8 L10,12 L6,12 L6,10.8 L10,10.8 Z M1,15.0041595 L1,13.8041595 L2.79468336,13.8041595 L2.79468336,9.78041534 C2.79468336,9.50369117 2.86643344,9.23268025 3.0016431,8.99336795 L3.09031773,8.85379228 L3.67068336,8.03815953 L3.05107199,7.08070632 C2.91160731,6.86500725 2.82653611,6.61956432 2.80205305,6.36536742 L2.79468336,6.21196672 L2.79468336,2.20015953 L1,2.2 L1,1 L3.39468336,1 C3.72605421,1 3.99468365,1.26862915 3.99468365,1.6 L3.99468365,6.21196672 C3.99468365,6.28902439 4.01694112,6.3644419 4.05878052,6.42915162 L4.89853762,7.72793804 C5.03190909,7.93421321 5.02607838,8.20094898 4.88382047,8.40119903 L4.06859195,9.54875958 C4.02051339,9.61643761 3.99468365,9.69739809 3.99468365,9.78041534 L3.99468365,14.4041595 C3.99468365,14.7355304 3.72605421,15.0041595 3.39468336,15.0041595 L1,15.0041595 Z" })
	})
})), ei = W(/* @__PURE__ */ I("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ I("g", {
		stroke: "none",
		fill: "currentColor",
		fillRule: "evenodd",
		children: /* @__PURE__ */ I("path", { d: "M9,4 L9,5.2 L2,5.2 L2,4 L9,4 Z M10,7.4 L10,8.6 L2,8.6 L2,7.4 L10,7.4 Z M6,10.8 L6,12 L2,12 L2,10.8 L6,10.8 Z M15.0155409,1 L15.0155409,2.2 L13.2208576,2.2 L13.2208576,6.22374419 C13.2208576,6.50046836 13.1491075,6.77147928 13.0138978,7.01079158 L12.9252232,7.15036725 L12.3448576,7.966 L12.9644689,8.92345321 C13.1039336,9.13915228 13.1890048,9.38459521 13.2134879,9.63879211 L13.2208576,9.79219281 L13.2208576,13.804 L15.0155409,13.8041595 L15.0155409,15.0041595 L12.6208576,15.0041595 C12.2894867,15.0041595 12.0208573,14.7355304 12.0208573,14.4041595 L12.0208573,9.79219281 C12.0208573,9.71513514 11.9985998,9.63971763 11.9567604,9.57500791 L11.1170033,8.2762215 C10.9836318,8.06994632 10.9894625,7.80321055 11.1317204,7.6029605 L11.946949,6.45539995 C11.9950275,6.38772192 12.0208573,6.30676144 12.0208573,6.22374419 L12.0208573,1.6 C12.0208573,1.26862915 12.2894867,1 12.6208576,1 L15.0155409,1 Z" })
	})
})), ti = W(/* @__PURE__ */ I("svg", {
	width: "15",
	height: "15",
	viewBox: "0 0 15 15",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("path", {
		d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
		fill: "currentColor",
		fillRule: "evenodd",
		clipRule: "evenodd"
	})
})), ni = W(/* @__PURE__ */ I("svg", {
	width: "15",
	height: "15",
	viewBox: "0 0 15 15",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("path", {
		d: "M6.15803 11.8648C5.95657 11.6759 5.94637 11.3595 6.13523 11.158L9.56464 7.5L6.13523 3.84197C5.94637 3.64052 5.95657 3.3241 6.15803 3.13523C6.35949 2.94637 6.67591 2.95657 6.86477 3.15803L10.6148 7.15803C10.7951 7.35036 10.7951 7.64964 10.6148 7.84197L6.86477 11.842C6.67591 12.0434 6.35949 12.0536 6.15803 11.8648Z",
		fill: "currentColor",
		fillRule: "evenodd",
		clipRule: "evenodd"
	})
})), ri = W(/* @__PURE__ */ I("svg", {
	width: "15",
	height: "15",
	viewBox: "0 0 15 15",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ I("path", {
		d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
		fill: "currentColor",
		fillRule: "evenodd",
		clipRule: "evenodd"
	})
})), ii = (e) => /* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	...e,
	children: /* @__PURE__ */ I("path", {
		d: "M4 10L8 6L12 10",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), ai = (e) => /* @__PURE__ */ I("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	...e,
	children: /* @__PURE__ */ I("path", {
		d: "M4 6L8 10L12 6",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), oi = "TRANSPARENT", si = "NO_COLOR", ci = "#FFFFFF", li = [
	{
		name: "color.none",
		value: si
	},
	{
		name: "color.default",
		value: l
	},
	{
		name: "color.white",
		value: ci
	},
	{
		name: "color.gray",
		value: "#808080"
	},
	{
		name: "color.deepBlue",
		value: "#1E90FF"
	},
	{
		name: "color.red",
		value: "#FF4500"
	},
	{
		name: "color.green",
		value: "#2ECC71"
	},
	{
		name: "color.yellow",
		value: "#FFD700"
	},
	{
		name: "color.purple",
		value: "#8A2BE2"
	},
	{
		name: "color.orange",
		value: "#FFA500"
	},
	{
		name: "color.pastelPink",
		value: "#FFB3BA"
	},
	{
		name: "color.cyan",
		value: "#00CED1"
	},
	{
		name: "color.brown",
		value: "#8B4513"
	},
	{
		name: "color.forestGreen",
		value: "#228B22"
	},
	{
		name: "color.lightGray",
		value: "#D3D3D3"
	}
], ui = .25, di = (e) => li.find((t) => t.name === e)?.value, fi = [
	{ strokeWidth: 2 },
	{
		strokeColor: di("color.red") || li[5].value,
		strokeWidth: 6
	},
	{
		strokeColor: di("color.green") || li[6].value,
		strokeWidth: 10
	}
], pi = (e = {}) => {
	let t = {};
	return typeof e.strokeColor == "string" && e.strokeColor && (t.strokeColor = e.strokeColor), typeof e.strokeWidth == "number" && (t.strokeWidth = e.strokeWidth), t;
}, mi = {
	[b.default]: {
		strokeColor: l,
		fill: "none"
	},
	[b.colorful]: {
		strokeColor: "#06ADBF",
		fill: "none"
	},
	[b.soft]: {
		strokeColor: "#6D89C1",
		fill: "none"
	},
	[b.retro]: {
		strokeColor: "#E9C358",
		fill: "none"
	},
	[b.dark]: {
		strokeColor: "#FFFFFF",
		fill: "none"
	},
	[b.starry]: {
		strokeColor: "#42ABE5",
		fill: "none"
	}
}, G = /* @__PURE__ */ function(e) {
	return e.eraser = "eraser", e.nibPen = "nibPen", e.feltTipPen = "feltTipPen", e.artisticBrush = "artisticBrush", e.markerHighlight = "markerHighlight", e;
}({}), hi = "freehand", K = { isFreehand: (e) => typeof e == "object" && !!e && "type" in e && e.type === "freehand" }, gi = [
	"preset-1",
	"preset-2",
	"preset-3"
], _i = [{
	icon: Wr,
	pointer: G.feltTipPen,
	titleKey: "toolbar.pen"
}, {
	icon: fr,
	pointer: G.eraser,
	titleKey: "toolbar.eraser"
}];
//#endregion
//#region src/components/popover/popover.tsx
function vi({ initialOpen: e = !1, placement: t = "bottom", modal: n, sideOffset: r, open: i, onOpenChange: a } = {}) {
	let [o, s] = E.useState(e), [c, l] = E.useState(), [u, d] = E.useState(), f = i ?? o, p = a ?? s, m = kt({
		placement: t,
		open: f,
		onOpenChange: p,
		whileElementsMounted: Ct,
		middleware: [
			Tt(r || 4),
			wt({
				crossAxis: t.includes("-"),
				fallbackAxisSideDirection: "end",
				padding: 5
			}),
			Et({ padding: 5 })
		]
	}), h = m.context, g = jt([
		Dt(h, { enabled: i == null }),
		Ot(h),
		Ft(h)
	]);
	return E.useMemo(() => ({
		open: f,
		setOpen: p,
		...g,
		...m,
		modal: n,
		labelId: c,
		descriptionId: u,
		setLabelId: l,
		setDescriptionId: d
	}), [
		f,
		p,
		g,
		m,
		n,
		c,
		u
	]);
}
var yi = E.createContext(null), bi = () => {
	let e = E.useContext(yi);
	if (e == null) throw Error("Popover components must be wrapped in <Popover />");
	return e;
};
function q({ children: e, modal: t = !1, ...n }) {
	let r = vi({
		modal: t,
		...n
	});
	return /* @__PURE__ */ I(yi.Provider, {
		value: r,
		children: e
	});
}
var J = E.forwardRef(function({ children: e, asChild: t = !1, ...n }, r) {
	let i = bi(), a = e.ref, o = Pt([
		i.refs.setReference,
		r,
		a
	]);
	return t && E.isValidElement(e) ? E.cloneElement(e, i.getReferenceProps({
		ref: o,
		...n,
		...e.props,
		"data-state": i.open ? "open" : "closed"
	})) : /* @__PURE__ */ I("button", {
		ref: o,
		type: "button",
		"data-state": i.open ? "open" : "closed",
		...i.getReferenceProps(n),
		children: e
	});
}), Y = E.forwardRef(function({ container: e, initialFocus: t, style: n, ...r }, i) {
	let { context: a, ...o } = bi(), s = Pt([o.refs.setFloating, i]);
	return a.open ? /* @__PURE__ */ I(St, {
		root: e,
		children: /* @__PURE__ */ I(yt, {
			context: a,
			modal: o.modal,
			initialFocus: t,
			children: /* @__PURE__ */ I("div", {
				ref: s,
				style: {
					...o.floatingStyles,
					...n
				},
				"aria-labelledby": o.labelId,
				"aria-describedby": o.descriptionId,
				...o.getFloatingProps(r),
				children: r.children
			})
		})
	}) : null;
}), xi = (e, t, n) => Math.min(n, Math.max(t, e)), Si = (e) => {
	let t = e.toString(), n = t.indexOf(".");
	return n === -1 ? 0 : t.length - n - 1;
}, Ci = ({ min: e = 0, max: t = 100, step: n = 1, defaultValue: r = 100, disabled: i = !1, onChange: a, beforeStart: o, afterEnd: s, title: c, variant: l = "default", compact: u = !1 }) => {
	let [d, f] = k(!1), [p, m] = k(r), h = O(null), g = Si(n), _ = (p - e) / (t - e) * 100;
	D(() => {
		m(r);
	}, [r]);
	let v = (r) => {
		let i = xi(Number((Math.round((r - e) / n) * n + e).toFixed(g)), e, t);
		m(i), a?.(i);
	}, y = (n) => {
		if (!h.current) return;
		let r = h.current.getBoundingClientRect();
		v(e + xi((n - r.left) / r.width, 0, 1) * (t - e));
	}, b = (e, t) => {
		e.hasPointerCapture(t) && e.releasePointerCapture(t), f(!1), s?.();
	};
	return /* @__PURE__ */ I("div", {
		"data-tooltip": !0,
		title: c,
		className: R("slider-container", {
			disabled: i,
			"slider-container--neutral": l === "neutral",
			"slider-container--compact": u
		}),
		children: /* @__PURE__ */ L("div", {
			ref: h,
			className: "slider-track",
			role: "slider",
			tabIndex: i ? -1 : 0,
			"aria-valuemin": e,
			"aria-valuemax": t,
			"aria-valuenow": p,
			"aria-valuetext": c || String(p),
			onPointerDown: (e) => {
				e.preventDefault(), !i && (o?.(), e.currentTarget.setPointerCapture(e.pointerId), f(!0), y(e.clientX));
			},
			onPointerMove: (e) => {
				!d || i || (e.preventDefault(), y(e.clientX));
			},
			onPointerUp: (e) => {
				b(e.currentTarget, e.pointerId);
			},
			onPointerCancel: (e) => {
				b(e.currentTarget, e.pointerId);
			},
			onKeyDown: (r) => {
				if (i || !(r.key === "ArrowLeft" || r.key === "ArrowDown" || r.key === "ArrowRight" || r.key === "ArrowUp" || r.key === "Home" || r.key === "End")) return;
				r.preventDefault(), r.stopPropagation();
				let a = p;
				(r.key === "ArrowLeft" || r.key === "ArrowDown") && (a = p - n), (r.key === "ArrowRight" || r.key === "ArrowUp") && (a = p + n), r.key === "Home" && (a = e), r.key === "End" && (a = t), a !== p && v(a);
			},
			children: [/* @__PURE__ */ I("div", {
				className: "slider-range",
				style: { width: `${_}%` }
			}), /* @__PURE__ */ I("div", {
				className: "slider-thumb",
				style: { left: `${_}%` }
			})]
		})
	});
};
//#endregion
//#region src/utils/color.ts
function wi(e) {
	return Math.round((100 - e) / 100 * 255);
}
function Ti(e) {
	return Math.round((1 - e / 255) * 100);
}
function Ei(e, t) {
	return `${e}${wi(100 - t).toString(16).padStart(2, "0")}`;
}
function Di(e) {
	e = e.replace(/^#/, "");
	let t;
	if (e.length === 8) t = parseInt(e.slice(6, 8), 16);
	else if (e.length === 4) t = parseInt(e.slice(3, 4).repeat(2), 16);
	else return 100;
	return 100 - Ti(t);
}
function Oi(e) {
	return e !== "none";
}
function ki(e) {
	let t = e.replace(/^#/, "").toUpperCase();
	return t.length === 8 ? "#" + t.slice(0, 6) : t.length === 4 ? "#" + t.slice(0, 3) : t.length === 6 || t.length === 3 ? "#" + t : e;
}
function Ai(e) {
	return e === oi;
}
function ji(e) {
	return e === "#FFFFFF" || e === "#FFFFFF".toLocaleLowerCase();
}
function Mi(e) {
	return e === 0;
}
function Ni(e) {
	return e === 100;
}
function Pi(e) {
	return e === si;
}
function Fi(e) {
	return !e || e === l;
}
function Ii(e) {
	return m.getThemeColors(e).find((t) => t.mode === e.theme.themeColorMode)?.boardBackground;
}
//#endregion
//#region src/components/color-picker.tsx
var Li = or(li, 4), Ri = Ce.forwardRef((e, t) => {
	let n = r(), { t: i } = z(), { currentColor: a, onColorChange: o, onOpacityChange: s, hideOpacitySlider: c = !1 } = e, [u, d] = k(a && ki(a) || Li[0][0].value), [f, m] = k(() => {
		let e = a && Di(a);
		return ue(e) ? 100 : e;
	});
	return /* @__PURE__ */ L(V.Col, {
		gap: 3,
		children: [!c && /* @__PURE__ */ I(Ci, {
			title: i("popupToolbar.opacity"),
			step: 5,
			defaultValue: f,
			onChange: (e) => {
				m(e), s(e);
			},
			beforeStart: () => {
				p.set(n, !0), _.setSplittingOnce(n, !0);
			},
			afterEnd: () => {
				p.set(n, !1);
			},
			disabled: u === li[0].value
		}), /* @__PURE__ */ I(V.Col, {
			gap: 2,
			children: Li.map((e, t) => /* @__PURE__ */ I(V.Row, {
				gap: 2,
				children: e.map((e) => /* @__PURE__ */ L("button", {
					className: `color-select-item ${u === e.value ? "active" : ""} ${Pi(e.value) ? "no-color" : ""}`,
					style: {
						backgroundColor: Pi(e.value) ? oi : e.value,
						color: Fi(e.value) ? ci : l
					},
					onClick: () => {
						d(e.value), e.value === "NO_COLOR" && m(100), o(e.value);
					},
					title: i(e.name || "color.unknown"),
					"aria-label": i(e.name || "color.unknown"),
					children: [Pi(e.value) && Mr, u === e.value && Nr]
				}, e.value))
			}, t))
		})]
	});
});
//#endregion
//#region src/plugins/freehand/utils.ts
function zi() {
	return [G.feltTipPen, G.eraser];
}
var Bi = (e) => {
	let t = e.appState, n = t?.toolState?.activeFreehandPresetIndex || 0;
	return pi(t?.toolState?.freehandPresets?.[n] || fi[n] || fi[0]);
}, Vi = (e, t, n = {}) => ({
	id: T(),
	type: "freehand",
	shape: e,
	points: t,
	...pi(n)
}), Hi = (e, t, n) => {
	let r = me(e, n, t) || n, i = t.points, a = Ji(e, t);
	return rt(t.points) && a && a !== "none" && fe(r, i) || at(i, r);
}, Ui = (e, t, n) => ot(y.getRectangleByPoints([n.anchor, n.focus]), t.points, t.angle), Wi = (e) => w(e).filter((e) => K.isFreehand(e)), Gi = (e) => mi[e].strokeColor, Ki = (e) => mi[e].fill, qi = (e, t) => {
	let n = Gi(e.theme.themeColorMode);
	return t.strokeColor || n;
}, Ji = (e, t) => {
	let n = K.isFreehand(t) && tt(e, t) ? Ki(e.theme.themeColorMode) : We.fill;
	return t.fill || n;
};
function Yi(e, t) {
	return Math.exp(-(e * e) / (2 * t * t));
}
function Xi(e, t, n) {
	if (e.length < 2) return e;
	let r = Math.floor(n / 2), i = [];
	function a(t) {
		if (t < 0) {
			let n = -t - 1;
			if (n < e.length) return [2 * e[0][0] - e[n][0], 2 * e[0][1] - e[n][1]];
		} else if (t >= e.length) {
			let n = 2 * e.length - t - 1;
			if (n >= 0) return [2 * e[e.length - 1][0] - e[n][0], 2 * e[e.length - 1][1] - e[n][1]];
		}
		return e[t];
	}
	function o(t) {
		let n = Math.min(t, e.length - 1 - t);
		return Math.min(r, n + Math.floor(r / 2));
	}
	for (let n = 0; n < e.length; n++) {
		let s = 0, c = 0, l = 0, u = o(n);
		for (let i = -u; i <= u; i++) {
			let o = a(n + i), d = Yi(i, t);
			if (n < r || n >= e.length - r) {
				let e = 1 + .5 * (1 - Math.abs(i) / u);
				d *= i === 0 ? e : 1;
			}
			s += o[0] * d, c += o[1] * d, l += d;
		}
		n === 0 || n === e.length - 1 ? i.push([e[n][0], e[n][1]]) : i.push([s / l, c / l]);
	}
	return i;
}
//#endregion
//#region src/components/toolbar/freehand-panel/freehand-style-preset-item.tsx
var Zi = (e) => e.toFixed(2).replace(/\.?0+$/, ""), Qi = 16, X = Qi / 2, $i = 7, ea = 2, ta = 5.5, na = "var(--color-gray-30)", ra = (e) => ea + (Math.min(Math.max(e, 1), 24) - 1) / 23 * (ta - ea), ia = ({ preset: e, selected: t, container: n, onSelect: i, onColorChange: a, onSizeChange: o }) => {
	let { t: s } = z(), c = r(), [l, u] = Ce.useState(!1), d = e.color || Gi(c.theme.themeColorMode), f = ji(d), p = ra(e.size), m = t || l;
	return Ce.useEffect(() => {
		t || u(!1);
	}, [t]), /* @__PURE__ */ L(q, {
		open: l,
		sideOffset: 12,
		onOpenChange: (e) => {
			if (e) {
				i(), u(!0);
				return;
			}
			u(!1);
		},
		children: [/* @__PURE__ */ I(J, {
			asChild: !0,
			children: /* @__PURE__ */ I(U, {
				className: R("freehand-style-preset"),
				selected: m,
				type: "button",
				size: "small",
				visible: !0,
				"aria-label": `${s("toolbar.pen")} ${e.id}`,
				onPointerUp: () => {
					if (t) {
						u(!l);
						return;
					}
					i(), u(!1);
				},
				children: /* @__PURE__ */ I("span", {
					className: "freehand-style-preset__preview",
					children: /* @__PURE__ */ L("svg", {
						className: "freehand-style-preset__preview-svg",
						viewBox: `0 0 ${Qi} ${Qi}`,
						"aria-hidden": "true",
						focusable: "false",
						children: [/* @__PURE__ */ I("circle", {
							className: "freehand-style-preset__preview-base",
							cx: X,
							cy: X,
							r: 7.5,
							stroke: "none"
						}), f ? /* @__PURE__ */ L(F, { children: [/* @__PURE__ */ I("circle", {
							className: "freehand-style-preset__preview-ring-contrast",
							cx: X,
							cy: X,
							r: $i,
							fill: "none",
							stroke: na,
							strokeWidth: 1
						}), /* @__PURE__ */ I("circle", {
							className: "freehand-style-preset__preview-fill-contrast",
							cx: X,
							cy: X,
							r: p,
							fill: d,
							stroke: na,
							strokeWidth: 1
						})] }) : /* @__PURE__ */ L(F, { children: [/* @__PURE__ */ I("circle", {
							className: "freehand-style-preset__preview-ring",
							cx: X,
							cy: X,
							r: $i,
							fill: "none",
							stroke: d,
							strokeWidth: 1
						}), /* @__PURE__ */ I("circle", {
							className: "freehand-style-preset__preview-fill",
							cx: X,
							cy: X,
							r: p,
							fill: d,
							stroke: "none"
						})] })]
					})
				})
			})
		}), /* @__PURE__ */ I(Y, {
			container: n,
			children: /* @__PURE__ */ I(B, {
				padding: 4,
				className: "freehand-style-setting",
				children: /* @__PURE__ */ L(V.Col, {
					gap: 3,
					children: [/* @__PURE__ */ I(Ci, {
						title: Zi(e.size),
						min: 1,
						max: 24,
						step: ui,
						defaultValue: e.size,
						variant: "neutral",
						compact: !0,
						onChange: (e) => {
							o(e);
						}
					}), /* @__PURE__ */ I(Ri, {
						currentColor: e.color,
						hideOpacitySlider: !0,
						onColorChange: (e) => {
							a(Pi(e) ? void 0 : e);
						},
						onOpacityChange: () => {}
					})]
				})
			})
		})]
	});
}, aa = () => /* @__PURE__ */ I("span", {
	className: "freehand-style-divider",
	"aria-hidden": "true"
});
aa.displayName = "FreehandStyleDivider";
var oa = (e) => gi[e] || `preset-${e + 1}`, sa = (e, t) => ({
	id: oa(e),
	color: t.strokeColor,
	size: t.strokeWidth
}), ca = ({ freehandPresets: e, activePresetIndex: t, onPresetSelect: n, onStrokeColorSelect: i, onStrokeWidthSelect: a, onPointerUp: o }) => {
	let { t: c } = z(), l = r(), u = m.getBoardContainer(l), d = e.length ? e : fi, f = l.pointer !== G.eraser, p = (e) => {
		n(e), j(l, A.drawing), s.updatePointerType(l, G.feltTipPen), o(G.feltTipPen);
	};
	return /* @__PURE__ */ I(B, {
		padding: 1,
		children: /* @__PURE__ */ L(V.Row, {
			gap: 1,
			align: "start",
			className: "freehand-style-list",
			children: [
				_i.map((e, t) => /* @__PURE__ */ I(U, {
					className: R({ fillable: !1 }),
					selected: l.pointer === e.pointer,
					type: "icon",
					size: "small",
					visible: !0,
					icon: e.icon,
					title: c(e.titleKey),
					"aria-label": c(e.titleKey),
					onPointerDown: () => {
						j(l, A.dnd), s.updatePointerType(l, e.pointer);
					},
					onPointerUp: () => {
						j(l, A.drawing), o(e.pointer);
					}
				}, t)),
				f && _i.length > 0 && d.length > 0 && /* @__PURE__ */ I(aa, {}),
				f && d.map((e, n) => /* @__PURE__ */ I(ia, {
					preset: sa(n, e),
					selected: t === n,
					container: u,
					onSelect: () => {
						p(n);
					},
					onColorChange: (e) => {
						i(n, e);
					},
					onSizeChange: (e) => {
						a(n, e);
					}
				}, oa(n)))
			]
		})
	});
}, la = [
	{
		icon: mr,
		title: "toolbar.shape.rectangle",
		pointer: M.rectangle
	},
	{
		icon: gr,
		title: "toolbar.shape.ellipse",
		pointer: M.ellipse
	},
	{
		icon: _r,
		title: "toolbar.shape.triangle",
		pointer: M.triangle
	},
	{
		icon: br,
		title: "toolbar.shape.roundRectangle",
		pointer: M.roundRectangle
	},
	{
		icon: $r,
		title: "toolbar.shape.noteCurlyRight",
		pointer: qe.noteCurlyRight
	},
	{
		icon: ei,
		title: "toolbar.shape.noteCurlyLeft",
		pointer: qe.noteCurlyLeft
	},
	{
		icon: vr,
		title: "toolbar.shape.diamond",
		pointer: M.diamond
	},
	{
		icon: yr,
		title: "toolbar.shape.parallelogram",
		pointer: M.parallelogram
	},
	{
		icon: hr,
		title: "toolbar.shape.terminal",
		pointer: qe.terminal
	}
], ua = or(la, 5), da = ({ onPointerUp: e }) => {
	let t = r(), { t: n } = z();
	return /* @__PURE__ */ I(B, {
		padding: 1,
		children: /* @__PURE__ */ I(V.Col, {
			gap: 1,
			children: ua.map((r, i) => /* @__PURE__ */ I(V.Row, {
				gap: 1,
				children: r.map((r, i) => /* @__PURE__ */ I(U, {
					className: R({ fillable: !1 }),
					type: "icon",
					size: "small",
					visible: !0,
					selected: m.isPointer(t, r.pointer),
					icon: r.icon,
					title: n(r.title || "toolbar.shape"),
					"aria-label": n(r.title || "toolbar.shape"),
					onPointerDown: () => {
						j(t, A.dnd), s.updatePointerType(t, r.pointer);
					},
					onPointerUp: () => {
						j(t, A.drawing), e(r.pointer);
					}
				}, i))
			}, i))
		})
	});
}, fa = [
	{
		icon: xr,
		title: "toolbar.arrow.straight",
		pointer: Ue.straight
	},
	{
		icon: Sr,
		title: "toolbar.arrow.elbow",
		pointer: Ue.elbow
	},
	{
		icon: Cr,
		title: "toolbar.arrow.curve",
		pointer: Ue.curve
	}
], pa = ({ onPointerUp: e }) => {
	let t = r(), { t: n } = z();
	return /* @__PURE__ */ I(B, {
		padding: 1,
		children: /* @__PURE__ */ I(V.Row, {
			gap: 1,
			children: fa.map((r, i) => /* @__PURE__ */ I(U, {
				className: R({ fillable: !1 }),
				type: "icon",
				size: "small",
				visible: !0,
				selected: m.isPointer(t, r.pointer),
				icon: r.icon,
				title: n(r.title),
				"aria-label": n(r.title),
				onPointerDown: () => {
					j(t, A.drawing), s.updatePointerType(t, r.pointer);
				},
				onPointerUp: () => {
					e(r.pointer);
				}
			}, i))
		})
	});
}, ma = /* @__PURE__ */ function(e) {
	return e.mermaidToDrawnix = "mermaidToDrawnix", e.markdownToDrawnix = "markdownToDrawnix", e;
}({}), ha = () => ({
	pointer: v.hand,
	lastShapePointer: M.rectangle,
	lastArrowPointer: Ue.straight,
	lastFreehandPointer: G.feltTipPen,
	activeFreehandPresetIndex: 0,
	freehandPresets: fi.map((e) => ({ ...e }))
}), ga = (e) => {
	let t = ha(), n = e?.freehandPresets?.length ? e.freehandPresets : t.freehandPresets;
	return {
		...t,
		...e,
		freehandPresets: n.map((e) => ({ ...e }))
	};
}, _a = we(null), Z = () => {
	let e = De(_a);
	if (!e) throw Error("The `useDrawnix` hook must be used inside the <Drawnix> component's context.");
	return e;
}, va = Ce.createContext({}), ya = (e = "", t = !1) => `menu-item menu-item-base ${e} ${t ? "menu-item--active" : ""}`.trim(), ba = (e, t) => {
	let n = De(va);
	return nr(e, (e) => {
		let r = new CustomEvent(tn.MENU_ITEM_SELECT, {
			bubbles: !0,
			cancelable: !0
		});
		t?.(r), r.defaultPrevented || n.onSelect?.(r);
	});
}, xa = ({ children: e, className: t = "", onSelect: n, style: r, containerStyle: i }) => {
	let a = R(`menu ${t}`).trim();
	return /* @__PURE__ */ I(va.Provider, {
		value: { onSelect: n },
		children: /* @__PURE__ */ I("div", {
			className: a,
			style: r,
			"data-testid": "menu",
			children: /* @__PURE__ */ I(B, {
				className: "menu-container",
				padding: 2,
				style: i,
				children: e
			})
		})
	});
};
xa.displayName = "Menu";
//#endregion
//#region src/components/menu/menu-item-content.tsx
var Sa = ({ icon: e, shortcut: t, children: n, hasSubmenu: r }) => /* @__PURE__ */ L(F, { children: [
	e && /* @__PURE__ */ I("div", {
		className: "menu-item__left",
		children: e
	}),
	/* @__PURE__ */ I("div", {
		className: "menu-item__text",
		children: n
	}),
	(t || r) && /* @__PURE__ */ L("div", {
		className: "menu-item__right",
		children: [t && /* @__PURE__ */ I("div", {
			className: "menu-item__shortcut",
			children: t
		}), r && /* @__PURE__ */ I("div", {
			className: "menu-item__submenu-indicator",
			children: ni
		})]
	})
] }), Ca = (e) => Ce.isValidElement(e) && e.type?.__DRAWNIX_MENU_ITEM_CONTENT === !0, Q = ({ icon: e, onSelect: t, children: n, shortcut: r, className: i, selected: a, submenu: o, ...s }) => {
	let [c, l] = k(!1), u = O(), d = ba(s.onClick, t), f = !!o, p = n && Ca(n) ? n : n ? /* @__PURE__ */ I(Sa, {
		icon: e,
		shortcut: r,
		hasSubmenu: f,
		children: n
	}) : null, m = () => {
		u.current && window.clearTimeout(u.current), l(!0);
	}, h = () => {
		u.current = window.setTimeout(() => {
			l(!1);
		}, 100);
	}, g = (e) => {
		o ? (l(!c), s.onClick?.(e)) : d(e);
	};
	return o ? /* @__PURE__ */ L(q, {
		open: c,
		onOpenChange: l,
		placement: "right-start",
		children: [/* @__PURE__ */ I(J, {
			asChild: !0,
			children: /* @__PURE__ */ I("button", {
				...s,
				type: "button",
				className: ya(i, a || c),
				title: s.title ?? s["aria-label"],
				onClick: g,
				onMouseEnter: m,
				onMouseLeave: h,
				children: p
			})
		}), /* @__PURE__ */ I(Y, {
			onMouseEnter: m,
			onMouseLeave: h,
			children: o
		})]
	}) : /* @__PURE__ */ I("button", {
		...s,
		onClick: d,
		type: "button",
		className: ya(i, a),
		title: s.title ?? s["aria-label"],
		children: p
	});
};
Q.displayName = "MenuItem";
var wa = ({ children: e }) => /* @__PURE__ */ I("div", {
	style: {
		display: "inline-flex",
		marginLeft: "auto",
		padding: "2px 4px",
		background: "var(--color-promo)",
		color: "var(--color-surface-lowest)",
		borderRadius: 6,
		fontSize: 9,
		fontFamily: "Cascadia, monospace"
	},
	children: e
});
wa.displayName = "MenuItemBadge", Q.Badge = wa;
//#endregion
//#region src/components/toolbar/extra-tools/menu-items.tsx
var Ta = () => {
	let { appState: e, setAppState: t } = Z(), { t: n } = z();
	return /* @__PURE__ */ I(Q, {
		"data-testid": "marmaid-to-drawnix-button",
		onSelect: () => {
			t({
				...e,
				openDialogType: ma.mermaidToDrawnix
			});
		},
		icon: qr,
		"aria-label": n("extraTools.mermaidToDrawnix"),
		children: n("extraTools.mermaidToDrawnix")
	});
};
Ta.displayName = "MermaidToDrawnix";
var Ea = () => {
	let { appState: e, setAppState: t } = Z(), { t: n } = z();
	return /* @__PURE__ */ I(Q, {
		"data-testid": "markdown-to-drawnix-button",
		onSelect: () => {
			t({
				...e,
				openDialogType: ma.markdownToDrawnix
			});
		},
		icon: Jr,
		"aria-label": n("extraTools.markdownToDrawnix"),
		children: n("extraTools.markdownToDrawnix")
	});
};
Ea.displayName = "MarkdownToDrawnix";
//#endregion
//#region src/components/toolbar/extra-tools/extra-tools-button.tsx
var Da = () => {
	let e = r(), { t } = z(), n = m.getBoardContainer(e), [i, a] = k(!1);
	return /* @__PURE__ */ L(q, {
		sideOffset: 12,
		open: i,
		onOpenChange: (e) => {
			a(e);
		},
		placement: "bottom-start",
		children: [/* @__PURE__ */ I(J, {
			asChild: !0,
			children: /* @__PURE__ */ I(U, {
				type: "icon",
				visible: !0,
				selected: i,
				icon: Kr,
				title: t("toolbar.extraTools"),
				"aria-label": t("toolbar.extraTools"),
				onPointerDown: () => {
					a(!i);
				}
			})
		}), /* @__PURE__ */ I(Y, {
			container: n,
			children: /* @__PURE__ */ L(xa, {
				onSelect: () => {
					a(!1);
				},
				children: [/* @__PURE__ */ I(Ta, {}), /* @__PURE__ */ I(Ea, {})]
			})
		})]
	}, 0);
}, Oa = {
	svg: "image/svg+xml",
	png: "image/png"
}, ka = {
	svg: "toast.copyToClipboard.svg",
	png: "toast.copyToClipboard.png"
}, Aa = () => typeof navigator < "u" && !!navigator.clipboard?.write && typeof ClipboardItem < "u", ja = () => ClipboardItem.supports, Ma = (e) => {
	if (!Aa()) return !1;
	let t = ja();
	return typeof t == "function" ? t(Oa[e]) : e === "png";
}, Na = async (e, t, n) => {
	if (!t || !Aa()) return;
	let r = { [Oa[e]]: t };
	n && (r[Oa.png] = n), await navigator.clipboard.write([new ClipboardItem(r)]);
}, Pa = (e, t, n) => {
	let { t: r } = Qn(e);
	e.showToast?.({
		type: "success",
		message: r(ka[t]),
		description: n ? r("toast.copyToClipboard.mode.transparent") : void 0
	});
}, Fa = async (e, t, n) => {
	let r = Ii(e) || "white", i = await xe(e, {
		fillStyle: t ? oi : r,
		padding: 20,
		ratio: 4,
		elements: n,
		inlineStyleClassNames: ".plait-text-container",
		styleNames: ["position"]
	});
	return new Blob([i], { type: Oa.svg });
}, Ia = async (e, t, n) => {
	let r = Ii(e) || "white", i = await ir(e, {
		elements: n,
		fillStyle: t ? "transparent" : r
	});
	return i ? rr(i) : null;
}, La = (e) => {
	let t = !!e.appState?.exportTransparent, n = w(e);
	return Fa(e, t, n.length > 0 ? n : void 0).then((e) => {
		ar(e, `drawnix-${(/* @__PURE__ */ new Date()).getTime()}.svg`);
	});
}, Ra = (e) => {
	let t = !!e.appState?.exportTransparent, n = w(e);
	Ia(e, t, n.length > 0 ? n : void 0).then((e) => {
		e && ar(e, `drawnix-${(/* @__PURE__ */ new Date()).getTime()}.png`);
	});
}, za = async (e) => {
	let t = !!e.appState?.copyTransparent, n = w(e);
	if (n.length === 0) return;
	let [r, i] = await Promise.all([Fa(e, t, n), Ia(e, t, n)]);
	await Na("svg", r, i), Pa(e, "svg", t);
}, Ba = async (e) => {
	let t = !!e.appState?.copyTransparent, n = w(e);
	if (n.length === 0) return;
	let r = await Ia(e, t, n);
	r && (await Na("png", r), Pa(e, "png", t));
}, Va = async (e) => {
	Rn(e, await bn({
		description: "Image",
		extensions: Object.keys(nn)
	}));
}, Ha = (e) => e === v.hand || e === v.selection, Ua = [
	{
		icon: sr,
		pointer: v.hand,
		titleKey: "toolbar.hand"
	},
	{
		icon: cr,
		pointer: v.selection,
		titleKey: "toolbar.selection"
	},
	{
		icon: lr,
		pointer: lt.mind,
		titleKey: "toolbar.mind"
	},
	{
		icon: dr,
		pointer: M.text,
		titleKey: "toolbar.text"
	},
	{
		icon: Wr,
		pointer: G.feltTipPen,
		titleKey: "toolbar.pen",
		key: "freehand"
	},
	{
		icon: pr,
		titleKey: "toolbar.arrow",
		key: "arrow",
		pointer: Ue.straight
	},
	{
		icon: ur,
		titleKey: "toolbar.shape",
		key: "shape",
		pointer: M.rectangle
	},
	{
		icon: Gr,
		titleKey: "toolbar.image",
		key: "image"
	},
	{
		icon: Kr,
		titleKey: "toolbar.extraTools",
		key: "extra-tools"
	}
], Wa = (e) => Ka(e.pointer), Ga = (e) => qa(e.pointer), Ka = (e) => Object.values(Ue).includes(e), qa = (e) => Object.values(M).includes(e) || Object.values(qe).includes(e), Ja = (e) => e !== M.text && qa(e), Ya = (e) => e === G.feltTipPen || e === G.eraser, Xa = () => {
	let e = r(), { appState: t, setAppState: n } = Z(), i = t.toolState, { t: a } = z(), c = m.getBoardContainer(e) ?? null, [l, u] = k(!1), [d, f] = k(!1), [p, h] = k(!1), g = _i.find((e) => e.pointer === i.lastFreehandPointer) || Ua.find((e) => e.key === "freehand") || Ua[4], _ = Ja(i.pointer) ? i.pointer : i.lastShapePointer, y = Ka(i.pointer) ? i.pointer : i.lastArrowPointer, b = la.find((e) => e.pointer === _), x = fa.find((e) => e.pointer === y), S = (e) => {
		n((t) => ({
			...t,
			toolState: {
				...t.toolState,
				...e
			}
		}));
	};
	D(() => {
		if (c) {
			if (Ya(i.pointer)) {
				u(!0), f(!1), h(!1);
				return;
			}
			u(!1), Ka(i.pointer) || f(!1), Ja(i.pointer) || h(!1);
		}
	}, [c, i.pointer]);
	let ee = (t) => {
		j(e, A.dnd), s.updatePointerType(e, t), S({ pointer: t });
	}, te = () => {
		j(e, A.drawing);
	}, ne = (t) => m.isPointer(e, t.pointer) && !d && !p && !l, re = (e) => Ya(e.pointer), C = (e, t) => {
		n((n) => ({
			...n,
			toolState: {
				...n.toolState,
				freehandPresets: n.toolState.freehandPresets.map((n, r) => r === e ? {
					...n,
					...t
				} : n)
			}
		}));
	};
	return /* @__PURE__ */ I(B, {
		padding: 1,
		className: R("draw-toolbar", o),
		children: /* @__PURE__ */ I(V.Row, {
			gap: 1,
			children: Ua.map((n, r) => t.isMobile && n.pointer === v.hand ? null : n.key === "freehand" ? /* @__PURE__ */ L(q, {
				open: l || re(e),
				sideOffset: 12,
				onOpenChange: (e) => {
					u(e);
				},
				children: [/* @__PURE__ */ I(J, {
					asChild: !0,
					children: /* @__PURE__ */ I(U, {
						type: "icon",
						visible: !0,
						selected: l || re(e),
						icon: g.icon,
						title: g.titleKey ? a(g.titleKey) : "Freehand",
						"aria-label": g.titleKey ? a(g.titleKey) : "Freehand",
						onPointerDown: () => {
							u(!l), g.pointer && ee(g.pointer);
						},
						onPointerUp: () => {
							te();
						}
					})
				}), /* @__PURE__ */ I(Y, {
					container: c,
					initialFocus: -1,
					children: /* @__PURE__ */ I(ca, {
						freehandPresets: i.freehandPresets,
						activePresetIndex: i.activeFreehandPresetIndex,
						onPresetSelect: (e) => {
							S({ activeFreehandPresetIndex: e });
						},
						onStrokeColorSelect: (e, t) => {
							C(e, { strokeColor: t });
						},
						onStrokeWidthSelect: (e, t) => {
							C(e, { strokeWidth: t });
						},
						onPointerUp: (e) => {
							S({
								pointer: e,
								lastFreehandPointer: e
							});
						}
					})
				})]
			}, r) : n.key === "shape" ? /* @__PURE__ */ L(q, {
				open: p,
				sideOffset: 12,
				onOpenChange: (e) => {
					h(e);
				},
				children: [/* @__PURE__ */ I(J, {
					asChild: !0,
					children: /* @__PURE__ */ I(U, {
						type: "icon",
						visible: !0,
						selected: p || Ga(e) && !m.isPointer(e, M.text),
						icon: b?.icon || n.icon,
						title: n.titleKey ? a(n.titleKey) : "Shape",
						"aria-label": n.titleKey ? a(n.titleKey) : "Shape",
						onPointerDown: () => {
							h(!p), Ga(e) ? s.updatePointerType(e, e.pointer) : (S({ pointer: i.lastShapePointer }), j(e, A.drawing), s.updatePointerType(e, i.lastShapePointer));
						}
					})
				}), /* @__PURE__ */ I(Y, {
					container: c,
					initialFocus: -1,
					children: /* @__PURE__ */ I(da, { onPointerUp: (e) => {
						h(!1), S({
							pointer: e,
							lastShapePointer: e
						});
					} })
				})]
			}, r) : n.key === "arrow" ? /* @__PURE__ */ L(q, {
				open: d,
				sideOffset: 12,
				onOpenChange: (e) => {
					f(e);
				},
				children: [/* @__PURE__ */ I(J, {
					asChild: !0,
					children: /* @__PURE__ */ I(U, {
						type: "icon",
						visible: !0,
						selected: d || Wa(e),
						icon: x?.icon || n.icon,
						title: n.titleKey ? a(n.titleKey) : "",
						"aria-label": n.titleKey ? a(n.titleKey) : "",
						onPointerDown: () => {
							f(!d), Wa(e) ? s.updatePointerType(e, e.pointer) : (j(e, A.drawing), s.updatePointerType(e, i.lastArrowPointer), S({ pointer: i.lastArrowPointer }));
						}
					})
				}), /* @__PURE__ */ I(Y, {
					container: c,
					initialFocus: -1,
					children: /* @__PURE__ */ I(pa, { onPointerUp: (e) => {
						f(!1), S({
							pointer: e,
							lastArrowPointer: e
						});
					} })
				})]
			}, r) : n.key === "extra-tools" ? /* @__PURE__ */ I(Da, {}, r) : /* @__PURE__ */ I(U, {
				type: "radio",
				icon: n.icon,
				checked: ne(n),
				title: n.titleKey ? a(n.titleKey) : "",
				"aria-label": n.titleKey ? a(n.titleKey) : "",
				onPointerDown: () => {
					n.pointer && !Ha(n.pointer) && ee(n.pointer);
				},
				onPointerUp: () => {
					n.pointer && !Ha(n.pointer) ? te() : n.pointer && Ha(n.pointer) && (s.updatePointerType(e, n.pointer), S({ pointer: n.pointer })), n.key === "image" && Va(e);
				}
			}, r))
		})
	});
}, Za = () => {
	let e = r(), { t } = z(), n = m.getBoardContainer(e), [i, a] = k(!1);
	return /* @__PURE__ */ I(B, {
		padding: 1,
		className: R("zoom-toolbar", o),
		children: /* @__PURE__ */ L(V.Row, {
			gap: 1,
			children: [
				/* @__PURE__ */ I(U, {
					type: "button",
					icon: Dr,
					visible: !0,
					title: t("zoom.out"),
					"aria-label": t("zoom.out"),
					onPointerUp: () => {
						s.updateZoom(e, e.viewport.zoom - .1);
					},
					className: "zoom-out-button"
				}, 0),
				/* @__PURE__ */ L(q, {
					sideOffset: 12,
					open: i,
					onOpenChange: (e) => {
						a(e);
					},
					placement: "bottom-end",
					children: [/* @__PURE__ */ I(J, {
						asChild: !0,
						children: /* @__PURE__ */ L("div", {
							title: t("zoom.fit"),
							"aria-label": t("zoom.fit"),
							className: R("zoom-menu-trigger", { active: i }),
							onPointerUp: () => {
								a(!i);
							},
							children: [Number(((e?.viewport?.zoom || 1) * 100).toFixed(0)), "%"]
						}, 1)
					}), /* @__PURE__ */ I(Y, {
						container: n,
						children: /* @__PURE__ */ L(xa, {
							onSelect: () => {
								a(!1);
							},
							children: [/* @__PURE__ */ I(Q, {
								"data-testid": "open-button",
								onSelect: () => {
									s.fitViewport(e);
								},
								"aria-label": t("zoom.fit"),
								shortcut: "Cmd+Shift+=",
								children: t("zoom.fit")
							}), /* @__PURE__ */ I(Q, {
								"data-testid": "open-button",
								onSelect: () => {
									s.updateZoom(e, 1);
								},
								"aria-label": t("zoom.100"),
								shortcut: "Cmd+0",
								children: t("zoom.100")
							})]
						})
					})]
				}),
				/* @__PURE__ */ I(U, {
					type: "button",
					icon: Or,
					visible: !0,
					title: t("zoom.in"),
					"aria-label": t("zoom.in"),
					onPointerUp: () => {
						s.updateZoom(e, e.viewport.zoom + .1);
					},
					className: "zoom-in-button"
				}, 2)
			]
		})
	});
}, Qa = (e, t) => P.isMindElement(e, t) || N.isDrawElement(t) && nt(t) || tt(e, t), $a = (e, t) => {
	let n = t.fill;
	return n || (P.isMindElement(e, t) && (n = pt(e, t)), (N.isDrawElement(t) || N.isCustomGeometryElement(e, t)) && (n = Ye(e, t))), n;
}, eo = (e, t) => {
	let n = t.strokeColor;
	return n || (P.isMindElement(e, t) && (n = mt(e, t)), (N.isDrawElement(t) || N.isCustomGeometryElement(e, t)) && (n = Qe(e, t))), n;
}, to = (e, t) => Bt(t).color, no = (e, t) => {
	Me.setFillColor(e, null, {
		getMemorizeKey: Ze,
		callback: (n, r) => {
			if (!Qa(e, n)) return;
			let i = $a(e, n);
			if (!Oi(i)) return;
			let a = ki(i), o = Ni(t) ? a : Ei(a, t);
			x.setNode(e, { fill: o }, r);
		}
	});
}, ro = (e, t) => {
	Me.setFillColor(e, null, {
		getMemorizeKey: Ze,
		callback: (n, r) => {
			if (!Qa(e, n)) return;
			let i = Di($a(e, n));
			Pi(t) ? x.setNode(e, { fill: null }, r) : ue(i) || Ni(i) ? x.setNode(e, { fill: t }, r) : x.setNode(e, { fill: Ei(t, i) }, r);
		}
	});
}, io = (e, t) => {
	Me.setStrokeColor(e, null, {
		getMemorizeKey: Ze,
		callback: (n, r) => {
			let i = ki(eo(e, n)), a = Ni(t) ? i : Ei(i, t);
			x.setNode(e, { strokeColor: a }, r);
		}
	});
}, ao = (e, t) => {
	Me.setStrokeColor(e, null, {
		getMemorizeKey: Ze,
		callback: (n, r) => {
			let i = Di(eo(e, n));
			Pi(t) ? x.setNode(e, { strokeColor: null }, r) : ue(i) || Ni(i) ? x.setNode(e, { strokeColor: t }, r) : x.setNode(e, { strokeColor: Ei(t, i) }, r);
		}
	});
}, oo = (e, t, n) => {
	let r = Di(t);
	Pi(n) ? zt.setTextColor(e, null) : zt.setTextColor(e, Ei(n, r));
}, so = (e, t, n) => {
	let r = ki(t), i = Ni(n) ? r : Ei(r, n);
	zt.setTextColor(e, i);
}, co = (e, t) => {
	!Number.isFinite(t) || t <= 0 || zt.setFontSize(e, String(t), Lt);
}, lo = ({ board: e, currentColor: t, fontColorIcon: n, title: r }) => {
	let [i, a] = k(!1), s = m.getBoardContainer(e);
	return /* @__PURE__ */ L(q, {
		sideOffset: 12,
		open: i,
		onOpenChange: (e) => {
			a(e);
		},
		placement: "top",
		children: [/* @__PURE__ */ I(J, {
			asChild: !0,
			children: /* @__PURE__ */ I(U, {
				className: R("property-button"),
				selected: i,
				visible: !0,
				icon: n,
				type: "button",
				title: r,
				"aria-label": r,
				onPointerUp: () => {
					a(!i);
				}
			})
		}), /* @__PURE__ */ I(Y, {
			container: s,
			children: /* @__PURE__ */ I(B, {
				padding: 4,
				className: R(`${o}`),
				children: /* @__PURE__ */ I(Ri, {
					onColorChange: (n) => {
						oo(e, t || n, n);
					},
					onOpacityChange: (n) => {
						t && so(e, t, n);
					},
					currentColor: t
				})
			})
		})]
	});
}, uo = E.createContext(null), fo = () => {
	let e = E.useContext(uo);
	if (!e) throw Error("Select components must be wrapped in <Select.Root />");
	return e;
}, po = ({ children: e, value: t, defaultValue: n, onValueChange: r, open: i, defaultOpen: a = !1, onOpenChange: o, size: s = "2", disabled: c = !1, placement: l = "bottom-start", sideOffset: u = 4, hideSelectedIndicator: d = !1, disableItemHoverHighlight: f = !1, disableInitialHighlight: p = !1, disableTypeahead: m = !1 }) => {
	let [h, g] = E.useState(a), _ = i ?? h, v = o ?? g, [y, b] = E.useState(n), x = t ?? y, S = E.useCallback((e) => {
		t === void 0 && b(e), r?.(e);
	}, [t, r]), ee = E.useRef([]), te = E.useRef([]), ne = E.useRef([]), [re, C] = E.useState(null), ie = E.useMemo(() => {
		if (x == null) return null;
		let e = ne.current.findIndex((e) => e === x);
		return e >= 0 ? e : null;
	}, [x]), ae = p ? null : ie;
	E.useEffect(() => {
		if (_) {
			if (p) {
				C(null);
				return;
			}
			C(ie ?? 0);
		}
	}, [
		_,
		ie,
		p
	]);
	let { refs: w, floatingStyles: oe, context: T } = kt({
		placement: l,
		open: _,
		onOpenChange: v,
		whileElementsMounted: Ct,
		middleware: [
			Tt(u),
			wt({ padding: 5 }),
			Et({ padding: 5 })
		]
	}), se = Dt(T, { enabled: !c && i === void 0 }), ce = Ot(T), le = Ft(T, { role: "listbox" }), ue = Nt(T, {
		listRef: ee,
		activeIndex: re,
		selectedIndex: ae,
		onNavigate: C,
		loop: !0,
		focusItemOnHover: !f
	}), de = It(T, {
		listRef: te,
		activeIndex: re,
		selectedIndex: ae,
		onMatch: C
	}), { getReferenceProps: fe, getFloatingProps: pe, getItemProps: me } = jt([
		se,
		ce,
		le,
		ue,
		m ? {} : de
	]), he = E.useMemo(() => ({
		open: _,
		setOpen: v,
		value: x,
		setValue: S,
		activeIndex: re,
		setActiveIndex: C,
		selectedIndex: ie,
		elementsRef: ee,
		labelsRef: te,
		valuesRef: ne,
		getReferenceProps: fe,
		getFloatingProps: pe,
		getItemProps: me,
		refs: w,
		floatingStyles: oe,
		floatingContext: T,
		size: s,
		hideSelectedIndicator: d,
		disableItemHoverHighlight: f
	}), [
		_,
		v,
		x,
		S,
		re,
		ie,
		fe,
		pe,
		me,
		w,
		oe,
		T,
		s,
		d,
		f
	]);
	return /* @__PURE__ */ I(uo.Provider, {
		value: he,
		children: e
	});
};
po.displayName = "Select.Root";
var mo = E.forwardRef(({ children: e, className: t, variant: n = "surface", color: r, radius: i, placeholder: a, asChild: o, ...s }, c) => {
	let l = fo(), u = Pt([l.refs.setReference, c]);
	if (o && E.isValidElement(e)) return E.cloneElement(e, {
		ref: u,
		...l.getReferenceProps(s),
		"data-state": l.open ? "open" : "closed"
	});
	let d = e;
	if (!d && l.value) {
		let e = l.valuesRef.current.indexOf(l.value);
		d = e === -1 ? l.value : l.labelsRef.current[e];
	}
	let f = !d && a, p = f ? a : d;
	return /* @__PURE__ */ L("button", {
		type: "button",
		ref: u,
		className: R("dx-reset", "dx-SelectTrigger", `dx-r-size-${l.size}`, `dx-variant-${n}`, t),
		"data-state": l.open ? "open" : "closed",
		"data-placeholder": f ? "" : void 0,
		...l.getReferenceProps(s),
		children: [/* @__PURE__ */ I("span", {
			className: "dx-SelectTriggerInner",
			children: p
		}), /* @__PURE__ */ I("span", {
			className: "dx-SelectIcon",
			children: ti
		})]
	});
});
mo.displayName = "Select.Trigger";
var ho = E.forwardRef(({ children: e, className: t, variant: n = "solid", color: r, highContrast: i, container: a, style: o, ...s }, c) => {
	let l = fo(), u = Pt([l.refs.setFloating, c]);
	return l.open ? /* @__PURE__ */ I(St, {
		root: a,
		children: /* @__PURE__ */ I(yt, {
			context: l.floatingContext,
			initialFocus: -1,
			children: /* @__PURE__ */ I("div", {
				ref: u,
				className: R("dx-SelectContent", `dx-r-size-${l.size}`, `dx-variant-${n}`, t),
				"data-hide-selected-indicator": l.hideSelectedIndicator ? "" : void 0,
				style: {
					...l.floatingStyles,
					...o
				},
				...l.getFloatingProps(s),
				children: /* @__PURE__ */ I(bt, {
					elementsRef: l.elementsRef,
					labelsRef: l.labelsRef,
					children: /* @__PURE__ */ I("div", {
						className: "dx-SelectViewport",
						children: e
					})
				})
			})
		})
	}) : null;
});
ho.displayName = "Select.Content";
var go = E.forwardRef(({ children: e, className: t, value: n, textValue: r, disabled: i, ...a }, o) => {
	let s = fo(), { ref: c, index: l } = Mt({ label: r ?? (typeof e == "string" ? e : n) }), u = Pt([c, o]), d = s.activeIndex === l, f = s.value === n;
	E.useEffect(() => {
		l !== null && (s.valuesRef.current[l] = n, s.labelsRef.current[l] = r ?? (typeof e == "string" ? e : n));
	}, [
		l,
		n,
		r,
		e,
		s.valuesRef,
		s.labelsRef
	]);
	let p = () => {
		s.setValue(n), s.setOpen(!1);
	}, { onPointerMove: m, onMouseMove: h, onMouseEnter: g, onMouseLeave: _, ...v } = s.getItemProps({
		...a,
		onClick: (e) => {
			a.onClick?.(e), p();
		},
		onKeyDown: (e) => {
			a.onKeyDown?.(e), e.key === "Enter" && (e.preventDefault(), p());
		}
	});
	return /* @__PURE__ */ L("button", {
		ref: u,
		type: "button",
		role: "option",
		"aria-selected": f,
		"data-highlighted": d ? "" : void 0,
		"data-state": f ? "checked" : "unchecked",
		"data-disabled": i ? "" : void 0,
		tabIndex: d ? 0 : -1,
		className: R("dx-SelectItem", t),
		disabled: i,
		...v,
		...s.disableItemHoverHighlight ? {} : {
			onPointerMove: m,
			onMouseMove: h,
			onMouseEnter: g,
			onMouseLeave: _
		},
		children: [!s.hideSelectedIndicator && /* @__PURE__ */ I("span", {
			className: "dx-SelectItemIndicator",
			children: f && ri
		}), /* @__PURE__ */ I("span", {
			className: "dx-SelectItemText",
			children: e
		})]
	});
});
go.displayName = "Select.Item";
var _o = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ I("div", {
	ref: n,
	className: R("dx-SelectGroup", e),
	...t
}));
_o.displayName = "Select.Group";
var vo = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ I("div", {
	ref: n,
	className: R("dx-SelectLabel", e),
	...t
}));
vo.displayName = "Select.Label";
var yo = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ I("div", {
	ref: n,
	className: R("dx-SelectSeparator", e),
	...t
}));
yo.displayName = "Select.Separator";
var bo = {
	Root: po,
	Trigger: mo,
	Content: ho,
	Item: go,
	Group: _o,
	Label: vo,
	Separator: yo
}, xo = [
	10,
	12,
	14,
	18,
	24,
	36,
	48
], So = 8, Co = 78, wo = ({ board: e, currentFontSize: t, title: n, options: r = xo }) => {
	let [i, a] = k(!1), o = O(null), s = ke(() => Number.isFinite(t) && t > 0 ? t : void 0, [t]), [c, l] = k(String(s || Lt));
	D(() => {
		l(String(s || Lt));
	}, [s]);
	let u = (t) => {
		if (!t) {
			l("");
			return;
		}
		let n = Number(t);
		if (!Number.isFinite(n)) return;
		let r = Math.min(Co, Math.max(So, Math.round(n)));
		l(String(r)), co(e, r);
	}, d = () => {
		let e = Number(c);
		return Number.isFinite(e) ? Math.min(Co, Math.max(So, Math.round(e))) : typeof s == "number" && s > 0 ? Math.min(Co, Math.max(So, Math.round(s))) : Lt;
	}, f = (e) => {
		let t = d(), n = Math.min(Co, Math.max(So, Math.round(t + e))), r = String(n);
		l(r), u(r);
	}, p = m.getBoardContainer(e);
	return /* @__PURE__ */ L(bo.Root, {
		open: i,
		onOpenChange: a,
		placement: "top-start",
		sideOffset: 12,
		hideSelectedIndicator: !0,
		disableInitialHighlight: !0,
		disableItemHoverHighlight: !0,
		disableTypeahead: !0,
		children: [/* @__PURE__ */ I(bo.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ L("div", {
				className: "popup-font-size",
				title: n,
				"aria-label": n,
				onPointerDown: (e) => {
					e.stopPropagation();
				},
				onPointerUp: (e) => {
					e.stopPropagation();
				},
				children: [/* @__PURE__ */ I("input", {
					ref: o,
					className: "popup-font-size__input",
					type: "number",
					inputMode: "numeric",
					min: So,
					max: Co,
					step: 1,
					value: c,
					placeholder: "",
					onChange: (e) => l(e.target.value),
					onBlur: (e) => u(e.target.value),
					onPointerUp: (e) => {
						e.stopPropagation(), a(!0);
					},
					onKeyDown: (e) => {
						e.key === "Enter" && u(c);
					}
				}), /* @__PURE__ */ L("div", {
					className: "popup-font-size__stepper",
					"aria-hidden": "false",
					children: [/* @__PURE__ */ I("button", {
						type: "button",
						className: "popup-font-size__stepper-button",
						"aria-label": `${n} +`,
						onPointerDown: (e) => {
							e.preventDefault(), e.stopPropagation();
						},
						onPointerUp: (e) => {
							e.stopPropagation(), f(1), o.current?.focus();
						},
						children: /* @__PURE__ */ I(ii, {
							className: "popup-font-size__stepper-icon",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ I("button", {
						type: "button",
						className: "popup-font-size__stepper-button",
						"aria-label": `${n} -`,
						onPointerDown: (e) => {
							e.preventDefault(), e.stopPropagation();
						},
						onPointerUp: (e) => {
							e.stopPropagation(), f(-1), o.current?.focus();
						},
						children: /* @__PURE__ */ I(ai, {
							className: "popup-font-size__stepper-icon",
							"aria-hidden": "true"
						})
					})]
				})]
			})
		}), /* @__PURE__ */ I(bo.Content, {
			container: p,
			style: { minWidth: "4.5rem" },
			onPointerDown: (e) => {
				e.preventDefault(), e.stopPropagation();
			},
			onPointerUp: (e) => {
				e.stopPropagation();
			},
			children: r.map((e) => {
				let t = String(e);
				return /* @__PURE__ */ I(bo.Item, {
					value: t,
					textValue: t,
					onPointerUp: () => {
						l(t), u(t);
					},
					children: e
				}, t);
			})
		})]
	});
}, To = ({ board: e, currentColor: t, currentStyle: n, title: r, hasStrokeStyle: i, children: a }) => {
	let [s, c] = k(!1), l = t && ki(t), u = t ? Di(t) : 100, d = m.getBoardContainer(e), { t: f } = z(), p = Mi(u) ? Pr : ji(l) ? Fr : void 0, h = (t) => {
		Me.setStrokeStyle(e, t, { getMemorizeKey: Ze });
	};
	return /* @__PURE__ */ L(q, {
		sideOffset: 12,
		open: s,
		onOpenChange: (e) => {
			c(e);
		},
		placement: "top",
		children: [/* @__PURE__ */ I(J, {
			asChild: !0,
			children: /* @__PURE__ */ I(U, {
				className: R("property-button"),
				visible: !0,
				selected: s,
				icon: p,
				type: "button",
				title: r,
				"aria-label": r,
				onPointerUp: () => {
					c(!s);
				},
				children: !p && a
			})
		}), /* @__PURE__ */ I(Y, {
			container: d,
			children: /* @__PURE__ */ I(B, {
				padding: 4,
				className: R(`${o}`, "stroke-setting", { "has-stroke-style": i }),
				children: /* @__PURE__ */ L(V.Col, { children: [i && /* @__PURE__ */ L(V.Row, {
					className: R("stroke-style-picker"),
					children: [
						/* @__PURE__ */ I(U, {
							visible: !0,
							selected: !n || n === Ne.solid,
							icon: Ir,
							type: "button",
							title: `${r} — ${f("stroke.solid")}`,
							"aria-label": `${r} — ${f("stroke.solid")}`,
							onPointerUp: () => {
								h(Ne.solid);
							}
						}),
						/* @__PURE__ */ I(U, {
							visible: !0,
							selected: n === Ne.dashed,
							icon: Lr,
							type: "button",
							title: `${r} — ${f("stroke.dashed")}`,
							"aria-label": `${r} — ${f("stroke.dashed")}`,
							onPointerUp: () => {
								h(Ne.dashed);
							}
						}),
						/* @__PURE__ */ I(U, {
							visible: !0,
							selected: n === Ne.dotted,
							icon: Rr,
							type: "button",
							title: `${r} — ${f("stroke.dotted")}`,
							"aria-label": `${r} — ${f("stroke.dotted")}`,
							onPointerUp: () => {
								h(Ne.dotted);
							}
						})
					]
				}), /* @__PURE__ */ I(Ri, {
					onColorChange: (t) => {
						ao(e, t);
					},
					onOpacityChange: (t) => {
						io(e, t);
					},
					currentColor: t
				})] })
			})
		})]
	});
}, Eo = ({ board: e, currentColor: t, title: n, children: r }) => {
	let [i, a] = k(!1), s = t && ki(t), c = t ? Di(t) : 100, l = m.getBoardContainer(e), u = !s || Mi(c) ? jr : void 0;
	return /* @__PURE__ */ L(q, {
		sideOffset: 12,
		open: i,
		onOpenChange: (e) => {
			a(e);
		},
		placement: "top",
		children: [/* @__PURE__ */ I(J, {
			asChild: !0,
			children: /* @__PURE__ */ I(U, {
				className: R("property-button"),
				visible: !0,
				selected: i,
				icon: u,
				type: "button",
				title: n,
				"aria-label": n,
				onPointerUp: () => {
					a(!i);
				},
				children: !u && r
			})
		}), /* @__PURE__ */ I(Y, {
			container: l,
			children: /* @__PURE__ */ I(B, {
				padding: 4,
				className: R(`${o}`),
				children: /* @__PURE__ */ I(Ri, {
					onColorChange: (t) => {
						ro(e, t);
					},
					onOpacityChange: (t) => {
						no(e, t);
					},
					currentColor: t
				})
			})
		})]
	});
}, Do = ({ board: e, title: t }) => {
	let { t: n } = z(), { appState: r, setAppState: i } = Z();
	return /* @__PURE__ */ I(U, {
		className: R("property-button"),
		visible: !0,
		selected: r.linkState?.isEditing || r.linkState?.isHovering || r.linkState?.isHoveringOrigin,
		icon: Yr,
		type: "button",
		title: t,
		"aria-label": t,
		onPointerUp: () => {
			let t = w(e)[0], a = Le(t);
			Rt.getLinkElement(a) || Rt.wrapLink(a, n("textPlaceholders.link"), ""), setTimeout(() => {
				let e = Rt.getLinkElement(a)[0], t = Vt.toDOMNode(a, e);
				i({
					...r,
					linkState: {
						editor: a,
						targetDom: t,
						targetElement: e,
						isEditing: !0,
						isHovering: !1,
						isHoveringOrigin: !1
					}
				});
			}, 0);
		}
	});
}, Oo = ({ end: e, property: t }) => {
	let n = r(), { marker: i } = t, { t: a } = z(), s = (r) => {
		Me.setProperty(n, { [e]: {
			...t,
			marker: r
		} });
	};
	return /* @__PURE__ */ I(B, {
		padding: 2,
		className: R(`${o} ${e === "source" ? "source-arrow-island" : ""} `),
		children: /* @__PURE__ */ L(V.Row, {
			gap: 1,
			children: [/* @__PURE__ */ I(U, {
				className: R("property-button"),
				visible: !0,
				icon: Qr,
				type: "button",
				title: a("line.none"),
				"aria-label": a("line.none"),
				selected: i === "none",
				onPointerUp: () => {
					s("none");
				}
			}), /* @__PURE__ */ I(U, {
				className: R("property-button"),
				visible: !0,
				icon: Zr,
				type: "button",
				title: a("line.arrow"),
				"aria-label": a("line.arrow"),
				selected: i === "arrow",
				onPointerUp: () => {
					s("arrow");
				}
			})]
		})
	});
}, ko = ({ board: e, end: t, endProperty: n }) => {
	let [r, i] = k(!1), a = m.getBoardContainer(e), { t: o } = z();
	if (!n) return null;
	let s = n.marker ?? "none", c = t === "source" ? "line.source" : "line.target", l = s === "none" ? "line.none" : "line.arrow", u = `${o(c)} — ${o(l)}`;
	return /* @__PURE__ */ L(q, {
		sideOffset: 12,
		open: r,
		onOpenChange: (e) => {
			i(e);
		},
		placement: "top",
		children: [/* @__PURE__ */ I(J, {
			asChild: !0,
			children: /* @__PURE__ */ I(U, {
				className: R(`property-button  ${t === "source" ? "source-arrow-button" : ""}`),
				visible: !0,
				icon: s === "none" ? Qr : Zr,
				type: "button",
				title: u,
				"aria-label": u,
				selected: r,
				onPointerUp: () => {
					i(!r);
				}
			})
		}), /* @__PURE__ */ I(Y, {
			container: a,
			children: /* @__PURE__ */ I(Oo, {
				end: t,
				property: n
			})
		})]
	});
}, Ao = ({ checked: e }) => /* @__PURE__ */ I("span", {
	className: `menu-item-switch ${e ? "menu-item-switch--checked" : ""}`.trim(),
	"aria-hidden": "true",
	children: /* @__PURE__ */ I("span", { className: "menu-item-switch__thumb" })
});
Ao.displayName = "MenuItemSwitch";
//#endregion
//#region src/components/menu/menu-item-content-switch.tsx
var jo = ({ checked: e, children: t }) => /* @__PURE__ */ L(F, { children: [/* @__PURE__ */ I("div", {
	className: "menu-item__left",
	"aria-hidden": "true",
	children: /* @__PURE__ */ I(Ao, { checked: e })
}), /* @__PURE__ */ I("div", {
	className: "menu-item__right",
	children: /* @__PURE__ */ I("div", {
		className: "menu-item__label",
		children: t
	})
})] });
jo.displayName = "MenuItemContentSwitch", jo.__DRAWNIX_MENU_ITEM_CONTENT = !0;
//#endregion
//#region src/components/toolbar/popup-toolbar/more-options-button.tsx
var Mo = ({ board: e }) => {
	let { t } = z(), { appState: n, setAppState: r } = Z(), i = m.getBoardContainer(e), [a, o] = k(!1), s = Ma("svg"), c = Ma("png"), l = s || c;
	return /* @__PURE__ */ L(q, {
		sideOffset: 12,
		open: a,
		onOpenChange: (e) => {
			o(e);
		},
		placement: "bottom-start",
		children: [/* @__PURE__ */ I(J, {
			asChild: !0,
			children: /* @__PURE__ */ I(U, {
				className: R("property-button"),
				visible: !0,
				selected: a,
				icon: Xr,
				type: "icon",
				title: t("general.moreOptions"),
				"aria-label": t("general.moreOptions"),
				onPointerDown: () => {
					o(!a);
				}
			})
		}), /* @__PURE__ */ I(Y, {
			container: i,
			children: /* @__PURE__ */ L(xa, {
				className: R("popup-toolbar-more-options-menu"),
				onSelect: () => {
					o(!1);
				},
				children: [
					/* @__PURE__ */ I(Q, {
						onSelect: () => {
							C(e);
						},
						shortcut: H("CtrlOrCmd+D"),
						"aria-label": t("general.duplicate"),
						children: t("general.duplicate")
					}),
					/* @__PURE__ */ I(Q, {
						onSelect: () => {
							ne(e);
						},
						shortcut: H("Backspace"),
						"aria-label": t("general.delete"),
						children: t("general.delete")
					}),
					/* @__PURE__ */ I(Q, {
						onSelect: () => void 0,
						"aria-label": t("general.copyToClipboard"),
						disabled: !l,
						submenu: /* @__PURE__ */ L(xa, {
							onSelect: () => {
								o(!1);
							},
							children: [
								/* @__PURE__ */ I(Q, {
									onSelect: () => {
										za(e).catch(() => void 0);
									},
									disabled: !s,
									shortcut: H("Shift+Alt+C"),
									"aria-label": t("general.copyToClipboard.svg"),
									children: t("general.copyToClipboard.svg")
								}),
								/* @__PURE__ */ I(Q, {
									onSelect: () => {
										Ba(e).catch(() => void 0);
									},
									disabled: !c,
									"aria-label": t("general.copyToClipboard.png"),
									children: t("general.copyToClipboard.png")
								}),
								/* @__PURE__ */ I(Q, {
									onSelect: (e) => {
										e.preventDefault(), r((e) => ({
											...e,
											copyTransparent: !e.copyTransparent
										}));
									},
									className: "menu-item--setting",
									role: "menuitemcheckbox",
									"aria-checked": n.copyTransparent,
									"aria-label": t("general.copyToClipboard.transparent"),
									children: /* @__PURE__ */ I(jo, {
										checked: n.copyTransparent,
										children: t("general.copyToClipboard.transparent")
									})
								})
							]
						}),
						children: t("general.copyToClipboard")
					})
				]
			})
		})]
	});
}, No = () => {
	let e = r(), { t } = z(), n = w(e), [i, a] = k(!1), s = O(i), c = n.some(N.isImage), l = n.length > 0 && !pe(e), { viewport: u, selection: d, children: f } = e, { refs: p, floatingStyles: h } = kt({
		placement: "right-start",
		middleware: [Tt(32), wt()]
	}), g = { fill: "red" };
	if (l && !i && !c) {
		let t = n.some((t) => Lo(e, t)) && !m.hasBeenTextEditing(e), r = n.some((t) => Bo(e, t)), i = n.some((t) => Ro(e, t)) && !m.hasBeenTextEditing(e), a = n.some((t) => zo(e, t)) && !m.hasBeenTextEditing(e), o = n.every((e) => N.isArrowLine(e));
		g = {
			...Io(e),
			hasFill: t,
			hasFontColor: r,
			hasStroke: i,
			hasStrokeStyle: a,
			hasText: r,
			isLine: o
		};
	}
	return D(() => {
		if (l) {
			let t = n.length > 0;
			if (!i && t) {
				let t = ae(e, w(e), !1), [n, r] = y.getPoints(t), i = be(e, ve(e, n)), a = be(e, ve(e, r)), o = a[0] - i[0], s = a[1] - i[1];
				p.setPositionReference({ getBoundingClientRect() {
					return {
						width: o,
						height: s,
						x: i[0],
						y: i[1],
						top: i[1],
						left: i[0],
						right: i[0] + o,
						bottom: i[1] + s
					};
				} });
			}
		}
	}, [
		u,
		d,
		f,
		i
	]), D(() => {
		s.current = i;
	}, [i]), D(() => {
		let { pointerUp: t, pointerMove: n } = e;
		return e.pointerMove = (t) => {
			(le(e) || se(e)) && !s.current && a(!0), n(t);
		}, e.pointerUp = (n) => {
			s.current && (le(e) || se(e)) && a(!1), t(n);
		}, () => {
			e.pointerUp = t, e.pointerMove = n;
		};
	}, [e]), /* @__PURE__ */ I(F, { children: l && !i && /* @__PURE__ */ I(B, {
		padding: 1,
		className: R("popup-toolbar", o),
		ref: p.setFloating,
		style: h,
		children: /* @__PURE__ */ L(V.Row, {
			gap: 1,
			children: [
				g.hasText && /* @__PURE__ */ I(wo, {
					board: e,
					currentFontSize: Vo(g.marks),
					title: t("popupToolbar.fontSize")
				}, "font-size"),
				g.hasFontColor && /* @__PURE__ */ I(lo, {
					board: e,
					currentColor: g.marks?.color,
					title: t("popupToolbar.fontColor"),
					fontColorIcon: /* @__PURE__ */ I(zr, { currentColor: g.marks?.color })
				}, 0),
				g.hasStroke && /* @__PURE__ */ I(To, {
					board: e,
					currentColor: g.strokeColor,
					currentStyle: g.strokeStyle,
					title: t("popupToolbar.stroke"),
					hasStrokeStyle: g.hasStrokeStyle || !1,
					children: /* @__PURE__ */ I("label", {
						className: R("stroke-label", "color-label"),
						style: { borderColor: g.strokeColor }
					})
				}, 1),
				g.hasFill && /* @__PURE__ */ I(Eo, {
					board: e,
					currentColor: g.fill,
					title: t("popupToolbar.fillColor"),
					children: /* @__PURE__ */ I("label", {
						className: R("fill-label", "color-label", { "color-white": g.fill && ji(ki(g.fill)) }),
						style: { backgroundColor: g.fill }
					})
				}, 2),
				g.hasText && /* @__PURE__ */ I(Do, {
					board: e,
					title: t("popupToolbar.link")
				}, 3),
				g.isLine && /* @__PURE__ */ L(F, { children: [/* @__PURE__ */ I(ko, {
					board: e,
					end: "source",
					endProperty: g.source
				}, 4), /* @__PURE__ */ I(ko, {
					board: e,
					end: "target",
					endProperty: g.target
				}, 5)] }),
				/* @__PURE__ */ I(Mo, { board: e }, 6)
			]
		})
	}) });
}, Po = (e, t) => {
	let n = Bt(t);
	return {
		fill: t.fill,
		strokeColor: mt(e, t),
		strokeStyle: $e(e, t),
		marks: n
	};
}, Fo = (e, t) => {
	let n = Bt(t);
	return {
		fill: t.fill,
		strokeColor: Qe(e, t),
		strokeStyle: $e(e, t),
		marks: n,
		source: t?.source || {},
		target: t?.target || {}
	};
}, Io = (e) => {
	let t = w(e)[0];
	return P.isMindElement(e, t) ? Po(e, t) : Fo(e, t);
}, Lo = (e, t) => P.isMindElement(e, t) || tt(e, t) ? !0 : N.isDrawElement(t) ? N.isShapeElement(t) && !N.isImage(t) && !N.isText(t) && nt(t) : !1, Ro = (e, t) => P.isMindElement(e, t) || K.isFreehand(t) ? !0 : N.isDrawElement(t) ? N.isShapeElement(t) && !N.isImage(t) && !N.isText(t) || N.isArrowLine(t) || N.isVectorLine(t) || N.isTable(t) : !1, zo = (e, t) => Ro(e, t), Bo = (e, t) => P.isMindElement(e, t) ? !0 : N.isDrawElement(t) ? it([t]) : !1, Vo = (e) => {
	let t = e?.["font-size"], n = typeof t == "number" ? t : Number(t);
	return Number.isFinite(n) && n > 0 ? n : void 0;
}, Ho = ({ icon: e, shortcut: t, href: n, children: r, onSelect: i, className: a = "", selected: o, ...s }) => {
	let c = ba(s.onClick, i);
	return /* @__PURE__ */ I("a", {
		...s,
		href: n,
		target: "_blank",
		rel: "noreferrer",
		className: ya(a, o),
		title: s.title ?? s["aria-label"],
		onClick: c,
		children: /* @__PURE__ */ I(Sa, {
			icon: e,
			shortcut: t,
			children: r
		})
	});
};
Ho.displayName = "MenuItemLink";
//#endregion
//#region src/components/toolbar/app-toolbar/app-menu-items.tsx
var Uo = () => {
	let e = r(), { appState: t, setAppState: n } = Z(), { t: i } = z();
	return t.fileHandle ? /* @__PURE__ */ I(Q, {
		"data-testid": "save-button",
		onSelect: () => {
			Tn(e, t.fileHandle).then(({ fileHandle: e }) => {
				n((t) => ({
					...t,
					fileHandle: e
				}));
			});
		},
		icon: kr,
		"aria-label": i("menu.saveFile"),
		shortcut: H("CtrlOrCmd+S"),
		children: i("menu.saveFile")
	}) : null;
};
Uo.displayName = "SaveToFile";
var Wo = () => {
	let e = r(), { setAppState: t } = Z(), { t: n } = z();
	return /* @__PURE__ */ I(Q, {
		"data-testid": "save-as-button",
		onSelect: () => {
			wn(e).then(({ fileHandle: e }) => {
				t((t) => ({
					...t,
					fileHandle: e
				}));
			});
		},
		icon: kr,
		"aria-label": n("menu.saveAsFile"),
		shortcut: H("CtrlOrCmd+Shift+S"),
		children: n("menu.saveAsFile")
	});
};
Wo.displayName = "SaveAsFile";
var Go = () => {
	let e = r(), t = i(), { setAppState: n } = Z(), { t: a } = z(), o = (n, r, i) => {
		e.children = n, e.viewport = r || { zoom: 1 }, i && (e.theme = i), t.update(e.children, {
			board: e,
			parent: e,
			parentG: m.getElementHost(e)
		}), s.fitViewport(e);
	};
	return /* @__PURE__ */ I(Q, {
		"data-testid": "open-button",
		onSelect: () => {
			En(e).then(({ data: e, fileHandle: t }) => {
				o(e.elements, e.viewport, e.theme), n((e) => ({
					...e,
					fileHandle: t
				}));
			});
		},
		icon: Ar,
		"aria-label": a("menu.open"),
		children: a("menu.open")
	});
};
Go.displayName = "OpenFile";
var Ko = () => {
	let e = r(), { appState: t, setAppState: n } = Z(), i = De(va), { t: a } = z();
	return /* @__PURE__ */ I(Q, {
		icon: Er,
		"data-testid": "image-export-button",
		onSelect: () => void 0,
		submenu: /* @__PURE__ */ L(xa, {
			onSelect: () => {
				let e = new CustomEvent(tn.MENU_ITEM_SELECT, {
					bubbles: !0,
					cancelable: !0
				});
				i.onSelect?.(e);
			},
			children: [
				/* @__PURE__ */ I(Q, {
					onSelect: () => {
						La(e);
					},
					"aria-label": a("menu.exportImage.svg"),
					shortcut: H("CtrlOrCmd+Shift+E"),
					children: a("menu.exportImage.svg")
				}),
				/* @__PURE__ */ I(Q, {
					onSelect: () => {
						Ra(e);
					},
					"aria-label": a("menu.exportImage.png"),
					children: a("menu.exportImage.png")
				}),
				/* @__PURE__ */ I(Q, {
					onSelect: (e) => {
						e.preventDefault(), n((e) => ({
							...e,
							exportTransparent: !e.exportTransparent
						}));
					},
					className: "menu-item--setting",
					role: "menuitemcheckbox",
					"aria-checked": t.exportTransparent,
					"aria-label": a("general.copyToClipboard.transparent"),
					children: /* @__PURE__ */ I(jo, {
						checked: t.exportTransparent,
						children: a("general.copyToClipboard.transparent")
					})
				})
			]
		}),
		"aria-label": a("menu.exportImage"),
		children: a("menu.exportImage")
	});
};
Ko.displayName = "SaveAsImage";
var qo = () => {
	let { appState: e, setAppState: t } = Z(), { t: n } = z();
	return /* @__PURE__ */ I(Q, {
		icon: Hr,
		"data-testid": "reset-button",
		onSelect: () => {
			t({
				...e,
				openCleanConfirm: !0
			});
		},
		shortcut: H("CtrlOrCmd+Backspace"),
		"aria-label": n("menu.cleanBoard"),
		children: n("menu.cleanBoard")
	});
};
qo.displayName = "CleanBoard";
var Jo = () => /* @__PURE__ */ I(Ho, {
	icon: Tr,
	href: "https://github.com/plait-board/drawnix",
	"aria-label": "GitHub",
	children: "GitHub"
});
Jo.displayName = "Socials";
//#endregion
//#region src/components/toolbar/app-toolbar/language-switcher-menu.tsx
var Yo = () => {
	let { language: e, setLanguage: t, t: n } = z(), r = De(va);
	return /* @__PURE__ */ I(Q, {
		icon: wr,
		"data-testid": "language-switcher-button",
		onSelect: () => {},
		submenu: /* @__PURE__ */ L(xa, {
			onSelect: () => {
				let e = new CustomEvent(tn.MENU_ITEM_SELECT, {
					bubbles: !0,
					cancelable: !0
				});
				r.onSelect?.(e);
			},
			children: [
				/* @__PURE__ */ I(Q, {
					onSelect: () => {
						t("zh");
					},
					"aria-label": n("language.chinese"),
					selected: e === "zh",
					children: n("language.chinese")
				}),
				/* @__PURE__ */ I(Q, {
					onSelect: () => {
						t("en");
					},
					"aria-label": n("language.english"),
					selected: e === "en",
					children: n("language.english")
				}),
				/* @__PURE__ */ I(Q, {
					onSelect: () => {
						t("ru");
					},
					"aria-label": n("language.russian"),
					selected: e === "ru",
					children: n("language.russian")
				}),
				/* @__PURE__ */ I(Q, {
					onSelect: () => {
						t("ar");
					},
					"aria-label": n("language.arabic"),
					selected: e === "ar",
					children: n("language.arabic")
				}),
				/* @__PURE__ */ I(Q, {
					onSelect: () => {
						t("vi");
					},
					"aria-label": n("language.vietnamese"),
					selected: e === "vi",
					children: n("language.vietnamese")
				})
			]
		}),
		"aria-label": n("language.switcher"),
		children: n("language.switcher")
	});
};
Yo.displayName = "LanguageSwitcherMenu";
//#endregion
//#region src/components/menu/menu-separator.tsx
var Xo = () => /* @__PURE__ */ I("div", { style: {
	height: "1px",
	backgroundColor: "var(--color-gray-10)",
	margin: ".5rem 0"
} });
Xo.displayName = "MenuSeparator";
//#endregion
//#region src/components/toolbar/app-toolbar/app-toolbar.tsx
var Zo = () => {
	let e = r(), { t } = z(), n = m.getBoardContainer(e), i = w(e), [a, s] = k(!1), c = e.history.undos.length <= 0, l = e.history.redos.length <= 0;
	return /* @__PURE__ */ I(B, {
		padding: 1,
		className: R("app-toolbar", o),
		children: /* @__PURE__ */ L(V.Row, {
			gap: 1,
			children: [
				/* @__PURE__ */ L(q, {
					sideOffset: 12,
					open: a,
					onOpenChange: (e) => {
						s(e);
					},
					placement: "bottom-start",
					children: [/* @__PURE__ */ I(J, {
						asChild: !0,
						children: /* @__PURE__ */ I(U, {
							type: "icon",
							visible: !0,
							selected: a,
							icon: wr,
							title: t("general.menu"),
							"aria-label": t("general.menu"),
							onPointerDown: () => {
								s(!a);
							}
						})
					}), /* @__PURE__ */ I(Y, {
						container: n,
						children: /* @__PURE__ */ L(xa, {
							onSelect: () => {
								s(!1);
							},
							children: [
								/* @__PURE__ */ I(Go, {}),
								/* @__PURE__ */ I(Uo, {}),
								/* @__PURE__ */ I(Wo, {}),
								/* @__PURE__ */ I(Ko, {}),
								/* @__PURE__ */ I(qo, {}),
								/* @__PURE__ */ I(Xo, {}),
								/* @__PURE__ */ I(Yo, {}),
								/* @__PURE__ */ I(Jo, {})
							]
						})
					})]
				}, 0),
				/* @__PURE__ */ I(U, {
					type: "icon",
					icon: Br,
					visible: !0,
					title: t("general.undo"),
					"aria-label": t("general.undo"),
					onPointerUp: () => {
						e.undo();
					},
					disabled: c
				}, 1),
				/* @__PURE__ */ I(U, {
					type: "icon",
					icon: Vr,
					visible: !0,
					title: t("general.redo"),
					"aria-label": t("general.redo"),
					onPointerUp: () => {
						e.redo();
					},
					disabled: l
				}, 2),
				i.length > 0 && /* @__PURE__ */ I(U, {
					className: "duplicate",
					type: "icon",
					icon: Ur,
					visible: !0,
					title: t("general.duplicate"),
					"aria-label": t("general.duplicate"),
					onPointerUp: () => {
						C(e);
					}
				}, 3),
				i.length > 0 && /* @__PURE__ */ I(U, {
					className: "trash",
					type: "icon",
					icon: Hr,
					visible: !0,
					title: t("general.delete"),
					"aria-label": t("general.delete"),
					onPointerUp: () => {
						ne(e);
					}
				}, 4)
			]
		})
	});
}, $ = (/* @__PURE__ */ Zt(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	for (var t = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), n = {
		alt: "altKey",
		control: "ctrlKey",
		meta: "metaKey",
		shift: "shiftKey"
	}, r = {
		add: "+",
		break: "pause",
		cmd: "meta",
		command: "meta",
		ctl: "control",
		ctrl: "control",
		del: "delete",
		down: "arrowdown",
		esc: "escape",
		ins: "insert",
		left: "arrowleft",
		mod: t ? "meta" : "control",
		opt: "alt",
		option: "alt",
		return: "enter",
		right: "arrowright",
		space: " ",
		spacebar: " ",
		up: "arrowup",
		win: "meta",
		windows: "meta"
	}, i = {
		backspace: 8,
		tab: 9,
		enter: 13,
		shift: 16,
		control: 17,
		alt: 18,
		pause: 19,
		capslock: 20,
		escape: 27,
		" ": 32,
		pageup: 33,
		pagedown: 34,
		end: 35,
		home: 36,
		arrowleft: 37,
		arrowup: 38,
		arrowright: 39,
		arrowdown: 40,
		insert: 45,
		delete: 46,
		meta: 91,
		numlock: 144,
		scrolllock: 145,
		";": 186,
		"=": 187,
		",": 188,
		"-": 189,
		".": 190,
		"/": 191,
		"`": 192,
		"[": 219,
		"\\": 220,
		"]": 221,
		"'": 222
	}, a = 1; a < 20; a++) i["f" + a] = 111 + a;
	function o(e, t, n) {
		t && !("byKey" in t) && (n = t, t = null), Array.isArray(e) || (e = [e]);
		var r = e.map(function(e) {
			return s(e, t);
		}), i = function(e) {
			return r.some(function(t) {
				return c(t, e);
			});
		};
		return n == null ? i : i(n);
	}
	function s(e, t) {
		var a = t && t.byKey, o = {};
		e = e.replace("++", "+add");
		var s = e.split("+"), c = s.length;
		for (var d in n) o[n[d]] = !1;
		var f = !0, p = !1, m = void 0;
		try {
			for (var h = s[Symbol.iterator](), g; !(f = (g = h.next()).done); f = !0) {
				var _ = g.value, v = _.endsWith("?") && _.length > 1;
				v && (_ = _.slice(0, -1));
				var y = u(_), b = n[y];
				if (_.length > 1 && !b && !r[_] && !i[y]) throw TypeError("Unknown modifier: \"" + _ + "\"");
				(c === 1 || !b) && (a ? o.key = y : o.which = l(_)), b && (o[b] = v ? null : !0);
			}
		} catch (e) {
			p = !0, m = e;
		} finally {
			try {
				!f && h.return && h.return();
			} finally {
				if (p) throw m;
			}
		}
		return o;
	}
	function c(e, t) {
		for (var n in e) {
			var r = e[n], i = void 0;
			if (r != null && (i = n === "key" && t.key != null ? t.key.toLowerCase() : n === "which" ? r === 91 && t.which === 93 ? 91 : t.which : t[n], !(i == null && r === !1) && i !== r)) return !1;
		}
		return !0;
	}
	function l(e) {
		return e = u(e), i[e] || e.toUpperCase().charCodeAt(0);
	}
	function u(e) {
		return e = e.toLowerCase(), e = r[e] || e, e;
	}
	e.isHotkey = o;
})))(), Qo = (e) => (t) => {
	let { globalKeyDown: n, keyDown: r } = t, i = (n, r = {}) => {
		e({ toolState: {
			...t.appState.toolState,
			pointer: n,
			...r
		} });
	};
	return t.globalKeyDown = (r) => {
		if (!(r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement) && (m.getMovingPointInBoard(t) || m.isMovingPointInBoard(t)) && !m.hasBeenTextEditing(t)) {
			if ((0, $.isHotkey)(["mod+shift+e"], { byKey: !0 })(r)) {
				La(t), r.preventDefault();
				return;
			}
			if ((0, $.isHotkey)(["mod+shift+s"], { byKey: !0 })(r)) {
				wn(t).then(({ fileHandle: t }) => {
					e({ fileHandle: t });
				}), r.preventDefault();
				return;
			}
			if ((0, $.isHotkey)(["mod+s"], { byKey: !0 })(r)) {
				Tn(t, t.appState.fileHandle).then(({ fileHandle: t }) => {
					e({ fileHandle: t });
				}), r.preventDefault();
				return;
			}
			if ((0, $.isHotkey)(["mod+backspace"])(r) || (0, $.isHotkey)(["mod+delete"])(r)) {
				e({ openCleanConfirm: !0 }), r.preventDefault();
				return;
			}
			if ((0, $.isHotkey)(["mod+u"])(r)) {
				Va(t), r.preventDefault();
				return;
			}
			if (!r.altKey && !r.metaKey && !r.ctrlKey) {
				if (r.key === "h") {
					s.updatePointerType(t, v.hand), i(v.hand), r.preventDefault();
					return;
				}
				if (r.key === "v") {
					s.updatePointerType(t, v.selection), i(v.selection), r.preventDefault();
					return;
				}
				if (r.key === "m") {
					j(t, A.dnd), s.updatePointerType(t, lt.mind), i(lt.mind), r.preventDefault();
					return;
				}
				if (r.key === "e") {
					j(t, A.drawing), s.updatePointerType(t, G.eraser), i(G.eraser, { lastFreehandPointer: G.eraser }), r.preventDefault();
					return;
				}
				if (r.key === "p") {
					j(t, A.drawing), s.updatePointerType(t, G.feltTipPen), i(G.feltTipPen, { lastFreehandPointer: G.feltTipPen }), r.preventDefault();
					return;
				}
				if (r.key === "a" && !(0, $.isHotkey)(["mod+a"])(r) && w(t).length === 0) {
					j(t, A.drawing), s.updatePointerType(t, Ue.straight), i(Ue.straight, { lastArrowPointer: Ue.straight }), r.preventDefault();
					return;
				}
				if (r.key === "r" || r.key === "o" || r.key === "t") {
					let e = {
						r: M.rectangle,
						o: M.ellipse,
						t: M.text
					};
					e[r.key] === M.text ? j(t, A.dnd) : j(t, A.drawing), s.updatePointerType(t, e[r.key]), e[r.key] === M.text ? i(e[r.key]) : i(e[r.key], { lastShapePointer: e[r.key] }), r.preventDefault();
					return;
				}
			}
			if ((0, $.isHotkey)("shift+alt+c")(r)) {
				Ma("svg") && (za(t).catch(() => void 0), r.preventDefault());
				return;
			}
		}
		n(r);
	}, t.keyDown = (e) => {
		if ((0, $.isHotkey)(["mod+z"], { byKey: !0 })(e)) {
			t.undo(), e.preventDefault();
			return;
		}
		if ((0, $.isHotkey)(["mod+shift+z"], { byKey: !0 })(e)) {
			t.redo(), e.preventDefault();
			return;
		}
		r(e);
	}, t;
}, $o = (e, t) => {
	let n = e.appState?.toolState;
	!n || n.pointer === e.pointer || t(e.pointer);
}, es = (e) => (t) => {
	let { pointerUp: n, globalPointerUp: r } = t;
	return t.pointerUp = (r) => {
		n(r), $o(t, e);
	}, t.globalPointerUp = (n) => {
		r(n), $o(t, e);
	}, t;
}, ts = class extends je {
	draw(e) {
		let t = {
			strokeWidth: et(e),
			stroke: qi(this.board, e),
			fill: Ji(this.board, e),
			fillStyle: "solid"
		}, n = m.getRoughSVG(this.board).curve(Xi(e.points, 1, 3), t);
		return he(n, "round"), n;
	}
	canDraw(e) {
		return !0;
	}
}, ns = class extends Ae {
	constructor() {
		super();
	}
	initializeGenerator() {
		this.activeGenerator = Fe(this.board, {
			getRectangle: (e) => y.getRectangleByPoints(e.points),
			getStrokeWidth: () => a,
			getStrokeOpacity: () => 1,
			hasResizeHandle: () => Re(this.board, this.element)
		}), this.generator = new ts(this.board), this.getRef().updateActiveSection = () => {
			this.activeGenerator.processDrawing(this.element, m.getActiveHost(this.board), { selected: this.selected });
		};
	}
	initialize() {
		super.initialize(), this.initializeGenerator(), this.generator.processDrawing(this.element, this.getElementG());
	}
	onContextChanged(e, t) {
		e.element !== t.element || e.hasThemeChanged ? (this.generator.processDrawing(this.element, this.getElementG()), this.activeGenerator.processDrawing(this.element, m.getActiveHost(this.board), { selected: this.selected })) : (e.selected !== t.selected || e.selected) && this.activeGenerator.processDrawing(this.element, m.getActiveHost(this.board), { selected: this.selected });
	}
	destroy() {
		super.destroy(), this.activeGenerator?.destroy();
	}
}, rs = class {
	constructor(e = {}) {
		this.defaultOptions = {
			smoothing: .65,
			velocityWeight: .2,
			curvatureWeight: .3,
			minDistance: .2,
			maxPoints: 8,
			pressureSensitivity: .5,
			tiltSensitivity: .3,
			velocityThreshold: 800,
			samplingRate: 5
		}, this.points = [], this.lastProcessedTime = 0, this.movingAverageVelocity = [], this.velocityWindowSize = 3, this.options = {
			...this.defaultOptions,
			...e
		};
	}
	process(e, t = {}) {
		let n = t.timestamp ?? Date.now();
		if (this.points.length === 0) {
			let r = {
				point: e,
				timestamp: n,
				...t
			};
			return this.points.push(r), this.lastProcessedTime = n, e;
		}
		if (n - this.lastProcessedTime < this.options.samplingRate && n - this.lastProcessedTime < 2) return null;
		let r = {
			point: e,
			timestamp: n,
			...t
		};
		if (!this.checkDistance(e) && this.points.length > 1 && n - this.lastProcessedTime < 32) return null;
		this.updatePoints(r);
		let i = this.calculateDynamicParameters(r), a = this.smooth(e, i);
		return this.lastProcessedTime = n, a;
	}
	reset() {
		this.points = [], this.lastProcessedTime = 0, this.movingAverageVelocity = [];
	}
	updatePoints(e) {
		this.points.push(e), this.points.length > this.options.maxPoints && this.points.shift();
	}
	checkDistance(e) {
		if (this.points.length === 0) return !0;
		let t = this.points[this.points.length - 1].point, n = this.getDistance(t, e), r = this.options.minDistance;
		if (this.movingAverageVelocity.length > 0) {
			let e = this.getAverageVelocity();
			r *= Math.max(.5, Math.min(1.5, e / 200));
		}
		return n >= r;
	}
	calculateDynamicParameters(e) {
		let t = this.calculateVelocity(e);
		this.updateMovingAverage(t);
		let n = this.getAverageVelocity(), r = { ...this.options };
		if (e.pressure !== void 0) {
			let t = e.pressure ** 1.2;
			r.smoothing *= 1 - t * r.pressureSensitivity * .8;
		}
		let i = Math.min(n / r.velocityThreshold, 1);
		if (r.velocityWeight = .2 + i * .3, r.smoothing *= 1 + i * .2, e.tiltX !== void 0 && e.tiltY !== void 0) {
			let t = Math.sqrt(e.tiltX ** 2 + e.tiltY ** 2) / 90;
			r.smoothing *= 1 + t * r.tiltSensitivity * .7;
		}
		return r;
	}
	smooth(e, t) {
		if (this.points.length < 2) return e;
		let n = this.calculateWeights(t), r = n.reduce((e, t) => e + t, 0);
		if (r === 0) return e;
		let i = [0, 0];
		for (let e = 0; e < this.points.length; e++) {
			let t = n[e] / r;
			i[0] += this.points[e].point[0] * t, i[1] += this.points[e].point[1] * t;
		}
		return i;
	}
	calculateWeights(e) {
		let t = [], n = this.points.length - 1;
		for (let r = 0; r < this.points.length; r++) {
			let i = e.smoothing ** ((n - r) * .8);
			if (r < n) {
				let t = this.getPointVelocity(r);
				i *= 1 + t * e.velocityWeight * .8;
			}
			if (r > 0 && r < n) {
				let t = this.getPointCurvature(r);
				i *= 1 + t * e.curvatureWeight * .7;
			}
			t.push(i);
		}
		return t;
	}
	getDistance(e, t) {
		return re(e[0], e[1], t[0], t[1]);
	}
	calculateVelocity(e) {
		if (this.points.length < 2) return 0;
		let t = this.points[this.points.length - 1], n = this.getDistance(t.point, e.point), r = e.timestamp - t.timestamp;
		return r > 0 ? n / r : 0;
	}
	updateMovingAverage(e) {
		this.movingAverageVelocity.push(e), this.movingAverageVelocity.length > this.velocityWindowSize && this.movingAverageVelocity.shift();
	}
	getAverageVelocity() {
		return this.movingAverageVelocity.length === 0 ? 0 : this.movingAverageVelocity.reduce((e, t) => e + t) / this.movingAverageVelocity.length;
	}
	getPointVelocity(e) {
		if (e >= this.points.length - 1) return 0;
		let t = this.points[e], n = this.points[e + 1], r = this.getDistance(t.point, n.point), i = n.timestamp - t.timestamp;
		return i > 0 ? r / i : 0;
	}
	getPointCurvature(e) {
		if (e <= 0 || e >= this.points.length - 1) return 0;
		let t = this.points[e - 1].point, n = this.points[e].point, r = this.points[e + 1].point, i = this.getDistance(t, n), a = this.getDistance(n, r), o = this.getDistance(t, r), s = (i + a + o) / 2;
		return 4 * Math.sqrt(Math.max(0, s * (s - i) * (s - a) * (s - o))) / (i * a * o + 1e-4);
	}
}, is = (e) => {
	let { pointerDown: t, pointerMove: r, pointerUp: i, globalPointerUp: a, touchStart: o } = e, s = !1, c = !1, l = [], u = null, d = new ts(e), f = new rs({
		smoothing: .7,
		pressureSensitivity: .6
	}), p = null, h = (t) => {
		if (s) {
			let t = m.getPointer(e), n = Bi(e);
			c && l.push(l[0]), p = Vi(t, l, n);
		}
		p && !t && x.insertNode(e, p, [e.children.length]), d?.destroy(), p = null, s = !1, l = [], f.reset();
	};
	return e.touchStart = (t) => {
		let n = zi();
		if (m.isInPointer(e, n) && Be(e)) return t.preventDefault();
		o(t);
	}, e.pointerDown = (n) => {
		let r = zi();
		if (m.isInPointer(e, r) && Be(e) && ce(n)) {
			s = !0, u = [n.x, n.y];
			let t = f.process(u), r = Se(e, _e(e, t[0], t[1]));
			l.push(r);
		}
		t(n);
	}, e.pointerMove = (t) => {
		if (s && !n(e)) {
			let n = [t.x, t.y];
			c = !!(u && re(u[0], u[1], n[0], n[1]) < 8);
			let r = f.process(n);
			if (r) {
				d?.destroy();
				let t = Se(e, _e(e, r[0], r[1]));
				l.push(t), p = Vi(m.getPointer(e), l, Bi(e)), d.processDrawing(p, m.getElementTopHost(e));
			}
			return;
		}
		if (n(e) && s) {
			h(!0);
			return;
		}
		r(t);
	}, e.pointerUp = (e) => {
		h(), i(e);
	}, e.globalPointerUp = (e) => {
		h(!0), a(e);
	}, e;
}, as = (e) => {
	let t = e, { getDeletedFragment: n, buildFragment: r, insertFragment: i } = t;
	return t.getDeletedFragment = (e) => {
		let r = Wi(t);
		return r.length && e.push(...r), n(e);
	}, t.buildFragment = (e, n, i, a) => {
		let o = Wi(t);
		if (o.length) {
			let r = Pe(t, o, n ? [n.x, n.y] : [0, 0]);
			e = te(e, {
				text: "",
				type: ee.elements,
				elements: r
			});
		}
		return r(e, n, i, a);
	}, t.insertFragment = (e, n, r) => {
		let a = e?.elements?.filter((e) => K.isFreehand(e));
		a && a.length > 0 && ze(t, a, n), i(e, n, r);
	}, t;
}, os = "laser-pointer", ss = (e) => {
	let t = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
	return (window.devicePixelRatio || 1) / t;
}, cs = class {
	constructor() {
		this.mouseTrack = [], this.mouseMoveHandler = null, this.resizeHandler = null, this.cvsDom = null, this.ctx = null, this.canvasPos = null, this.drawing = !1, this.container = null;
	}
	init(e) {
		this.container = m.getBoardContainer(e).closest(".drawnix"), this.cvsDom = this.container.querySelector(`.${os}`), this.ctx = this.cvsDom.getContext("2d"), this.canvasPos = this.cvsDom.getBoundingClientRect(), this.mouseMoveHandler = (e) => {
			if (!this.canvasPos) return;
			let t = e.clientX - this.canvasPos.x, n = e.clientY - this.canvasPos.y;
			this.mouseTrack.push({
				x: t,
				y: n,
				time: Date.now()
			}), this.ctx && this.startDraw();
		}, this.resizeHandler = () => this.setCanvasSize(), this.container.addEventListener("pointermove", this.mouseMoveHandler), window.addEventListener("resize", this.resizeHandler), this.setCanvasSize();
	}
	destroy() {
		this.mouseMoveHandler && this.container && (this.container.removeEventListener("pointermove", this.mouseMoveHandler), this.mouseMoveHandler = null), this.resizeHandler &&= (window.removeEventListener("resize", this.resizeHandler), null), this.ctx && this.cvsDom && this.ctx.clearRect(0, 0, this.cvsDom.width, this.cvsDom.height), this.cvsDom = null, this.ctx = null, this.canvasPos = null, this.drawing = !1;
	}
	startDraw() {
		this.drawing || (this.drawing = !0, this.draw());
	}
	draw() {
		if (!this.ctx || !this.cvsDom) return;
		this.ctx.clearRect(0, 0, this.cvsDom.width, this.cvsDom.height);
		let e = !1;
		if (this.mouseTrack = Ht(this.mouseTrack), this.mouseTrack.length >= 3) Wt(211, 211, 211), Gt(180), Yt(!0), Kt(10), qt(0), Jt(.6), Ut(this.ctx, this.mouseTrack), e = !0;
		else {
			let e = this.mouseTrack[this.mouseTrack.length - 1];
			if (!e) return;
			this.ctx.save(), this.ctx.beginPath(), this.ctx.fillStyle = "rgba(211, 211, 211)", this.ctx.arc(e.x, e.y, 5, 0, Math.PI * 2, !1), this.ctx.closePath(), this.ctx.fill(), this.ctx.restore();
		}
		e ? requestAnimationFrame(() => this.draw()) : this.drawing = !1;
	}
	setCanvasSize() {
		if (!this.cvsDom || !this.ctx) return;
		let e = this.cvsDom.getBoundingClientRect(), t = ss(this.ctx);
		this.cvsDom.setAttribute("width", `${e.width * t}px`), this.cvsDom.setAttribute("height", `${e.height * t}px`), this.ctx.scale(t, t), this.canvasPos = this.cvsDom.getBoundingClientRect();
	}
}, ls = (e) => {
	let { pointerDown: t, pointerMove: r, pointerUp: i, globalPointerUp: a, touchStart: o } = e, s = new cs(), l = !1, u = /* @__PURE__ */ new Set(), d = (t) => {
		let n = Se(e, _e(e, t[0], t[1]));
		e.children.filter((e) => K.isFreehand(e)).forEach((t) => {
			!u.has(t.id) && Hi(e, t, n) && (h.getElementG(t).style.opacity = "0.2", u.add(t.id));
		});
	}, f = () => {
		if (u.size > 0) {
			let t = e.children.filter((e) => u.has(e.id));
			t.length > 0 && c.removeElements(e, t);
		}
	}, p = () => {
		l && (f(), l = !1, u.clear(), s.destroy());
	};
	return e.touchStart = (t) => {
		if (m.isInPointer(e, [G.eraser]) && Be(e)) return t.preventDefault();
		o(t);
	}, e.pointerDown = (n) => {
		if (m.isInPointer(e, [G.eraser]) && Be(e) && ce(n)) {
			l = !0, u.clear(), d([n.x, n.y]), s.init(e);
			return;
		}
		t(n);
	}, e.pointerMove = (t) => {
		if (l && !n(e)) {
			ge(e, "with-freehand-erase", () => {
				d([t.x, t.y]);
			});
			return;
		}
		if (l && n(e)) {
			p();
			return;
		}
		r(t);
	}, e.pointerUp = (e) => {
		if (l) {
			p();
			return;
		}
		i(e);
	}, e.globalPointerUp = (e) => {
		if (l) {
			p();
			return;
		}
		a(e);
	}, e;
}, us = (e) => {
	let { getRectangle: t, drawElement: n, isHit: r, isRectangleHit: i, getOneHitElement: a, isMovable: o, isAlign: s } = e;
	return e.drawElement = (e) => K.isFreehand(e.element) ? ns : n(e), e.getRectangle = (e) => K.isFreehand(e) ? y.getRectangleByPoints(e.points) : t(e), e.isRectangleHit = (t, n) => K.isFreehand(t) ? Ui(e, t, n) : i(t, n), e.isHit = (t, n, i) => K.isFreehand(t) ? Hi(e, t, n) : r(t, n, i), e.getOneHitElement = (t, n) => t.every((e) => K.isFreehand(e)) ? Xe(e, t, n) : a(t, n), e.isMovable = (e) => K.isFreehand(e) ? !0 : o(e), e.isAlign = (e) => K.isFreehand(e) ? !0 : s(e), e.setPluginOptions(Je, { customGeometryTypes: [hi] }), ls(as(is(e)));
}, ds = () => {
	let e = r(), { t } = z(), n = e.theme;
	return /* @__PURE__ */ I(B, {
		padding: 1,
		className: R("theme-toolbar", o),
		children: /* @__PURE__ */ L("select", {
			onChange: (t) => {
				let n = t.target.value;
				s.updateThemeColor(e, n);
			},
			value: n.themeColorMode,
			children: [
				/* @__PURE__ */ I("option", {
					value: "default",
					children: t("theme.default")
				}),
				/* @__PURE__ */ I("option", {
					value: "colorful",
					children: t("theme.colorful")
				}),
				/* @__PURE__ */ I("option", {
					value: "soft",
					children: t("theme.soft")
				}),
				/* @__PURE__ */ I("option", {
					value: "retro",
					children: t("theme.retro")
				}),
				/* @__PURE__ */ I("option", {
					value: "dark",
					children: t("theme.dark")
				}),
				/* @__PURE__ */ I("option", {
					value: "starry",
					children: t("theme.starry")
				})
			]
		})
	});
}, fs = /* @__PURE__ */ new WeakMap(), ps = (e) => !!fs.get(e), ms = (e, t) => {
	fs.set(e, t);
}, hs = (e) => (t) => {
	let { pointerDown: n } = t;
	return t.pointerDown = (r) => {
		de(r) && !ps(t) && (ms(t, !0), e({ isPencilMode: !0 })), !(ps(t) && !de(r)) && n(r);
	}, t;
}, gs = () => {
	let e = r(), { appState: t, setAppState: n } = Z();
	return /* @__PURE__ */ I(F, { children: t.isPencilMode && /* @__PURE__ */ I("div", {
		className: "pencil-mode-toolbar",
		children: /* @__PURE__ */ I(U, {
			type: "button",
			visible: !0,
			title: "X Pencil",
			"aria-label": "Arrow",
			label: "Pencil X",
			onPointerDown: () => {
				n({
					...t,
					isPencilMode: !1
				}), ms(e, !1);
			}
		})
	}) });
};
//#endregion
//#region src/components/dialog/dialog.tsx
function _s({ initialOpen: e = !1, open: t, onOpenChange: n } = {}) {
	let [r, i] = E.useState(e), [a, o] = E.useState(), [s, c] = E.useState(), l = t ?? r, u = n ?? i, d = kt({
		open: l,
		onOpenChange: u
	}), f = d.context, p = jt([
		Dt(f, { enabled: t == null }),
		Ot(f, { outsidePressEvent: "mousedown" }),
		Ft(f)
	]);
	return E.useMemo(() => ({
		open: l,
		setOpen: u,
		...p,
		...d,
		labelId: a,
		descriptionId: s,
		setLabelId: o,
		setDescriptionId: c
	}), [
		l,
		u,
		p,
		d,
		a,
		s
	]);
}
var vs = E.createContext(null), ys = () => {
	let e = E.useContext(vs);
	if (e == null) throw Error("Dialog components must be wrapped in <Dialog />");
	return e;
};
function bs({ children: e, ...t }) {
	let n = _s(t);
	return /* @__PURE__ */ I(vs.Provider, {
		value: n,
		children: e
	});
}
E.forwardRef(function({ children: e, asChild: t = !1, ...n }, r) {
	let i = ys(), a = e.ref, o = Pt([
		i.refs.setReference,
		r,
		a
	]);
	return t && E.isValidElement(e) ? E.cloneElement(e, i.getReferenceProps({
		ref: o,
		...n,
		...e.props,
		"data-state": i.open ? "open" : "closed"
	})) : /* @__PURE__ */ I("button", {
		ref: o,
		"data-state": i.open ? "open" : "closed",
		...i.getReferenceProps(n),
		children: e
	});
});
var xs = E.forwardRef(function(e, t) {
	let { context: n, ...r } = ys(), i = Pt([r.refs.setFloating, t]);
	return n.open ? /* @__PURE__ */ I(St, {
		root: e.container,
		children: /* @__PURE__ */ I(xt, {
			className: "Dialog-overlay",
			lockScroll: !0,
			children: /* @__PURE__ */ I(yt, {
				context: n,
				children: /* @__PURE__ */ I("div", {
					ref: i,
					"aria-labelledby": r.labelId,
					"aria-describedby": r.descriptionId,
					...r.getFloatingProps(e),
					children: e.children
				})
			})
		})
	}) : null;
});
E.forwardRef(function({ children: e, ...t }, n) {
	let { setLabelId: r } = ys(), i = At();
	return E.useLayoutEffect(() => (r(i), () => r(void 0)), [i, r]), /* @__PURE__ */ I("h2", {
		...t,
		ref: n,
		id: i,
		children: e
	});
}), E.forwardRef(function({ children: e, ...t }, n) {
	let { setDescriptionId: r } = ys(), i = At();
	return E.useLayoutEffect(() => (r(i), () => r(void 0)), [i, r]), /* @__PURE__ */ I("p", {
		...t,
		ref: n,
		id: i,
		children: e
	});
}), E.forwardRef(function(e, t) {
	let { setOpen: n } = ys();
	return /* @__PURE__ */ I("button", {
		type: "button",
		...e,
		ref: t,
		onClick: () => n(!1)
	});
});
//#endregion
//#region src/components/ttd-dialog/ttd-dialog-panels.tsx
var Ss = ({ children: e }) => /* @__PURE__ */ I("div", {
	className: "ttd-dialog-panels",
	children: e
}), Cs = ({ label: e, children: t, panelAction: n, panelActionDisabled: r = !1, onTextSubmitInProgress: i, renderTopRight: a, renderSubmitShortcut: o, renderBottomRight: s }) => /* @__PURE__ */ L("div", {
	className: "ttd-dialog-panel",
	children: [
		/* @__PURE__ */ L("div", {
			className: "ttd-dialog-panel__header",
			children: [/* @__PURE__ */ I("label", { children: e }), a?.()]
		}),
		t,
		/* @__PURE__ */ L("div", {
			className: R("ttd-dialog-panel-button-container", { invisible: !n }),
			style: {
				display: "flex",
				alignItems: "center"
			},
			children: [
				/* @__PURE__ */ I("button", {
					className: "ttd-dialog-panel-button drawnix-button ",
					onClick: n && n.action,
					disabled: r || i,
					children: /* @__PURE__ */ L("div", {
						className: R({ invisible: i }),
						children: [n?.label, n?.icon && /* @__PURE__ */ I("span", { children: n.icon })]
					})
				}),
				!r && !i && o?.(),
				s?.()
			]
		})
	]
}), ws = {
	ARROW_DOWN: "ArrowDown",
	ARROW_LEFT: "ArrowLeft",
	ARROW_RIGHT: "ArrowRight",
	ARROW_UP: "ArrowUp",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	BACKSPACE: "Backspace",
	ALT: "Alt",
	CTRL_OR_CMD: d || u ? "metaKey" : "ctrlKey",
	DELETE: "Delete",
	ENTER: "Enter",
	ESCAPE: "Escape",
	QUESTION_MARK: "?",
	SPACE: " ",
	TAB: "Tab",
	CHEVRON_LEFT: "<",
	CHEVRON_RIGHT: ">",
	PERIOD: ".",
	COMMA: ",",
	SUBTRACT: "-",
	SLASH: "/",
	A: "a",
	C: "c",
	D: "d",
	E: "e",
	F: "f",
	G: "g",
	H: "h",
	I: "i",
	L: "l",
	O: "o",
	P: "p",
	Q: "q",
	R: "r",
	S: "s",
	T: "t",
	V: "v",
	X: "x",
	Y: "y",
	Z: "z",
	K: "k",
	W: "w",
	0: "0",
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
	9: "9"
}, Ts = ({ input: e, placeholder: t, onChange: n, onKeyboardSubmit: r }) => {
	let i = O(null), a = O(r);
	return a.current = r, D(() => {
		if (!a.current) return;
		let e = i.current;
		if (e) {
			let t = (e) => {
				e[ws.CTRL_OR_CMD] && e.key === ws.ENTER && (e.preventDefault(), a.current?.());
			};
			return e.addEventListener(tn.KEYDOWN, t), () => {
				e.removeEventListener(tn.KEYDOWN, t);
			};
		}
	}, []), /* @__PURE__ */ I("textarea", {
		className: "ttd-dialog-input",
		onChange: n,
		value: e,
		placeholder: t,
		autoFocus: !0,
		ref: i
	});
}, Es = ({ error: e }) => /* @__PURE__ */ L("div", {
	"data-testid": "ttd-dialog-output-error",
	className: "ttd-dialog-output-error",
	children: ["Error! ", /* @__PURE__ */ I("p", { children: e })]
}), Ds = ({ error: n, value: r, loaded: i }) => {
	let a = [
		st,
		gt,
		He,
		$n
	], o = {
		readonly: !0,
		hideScrollbar: !1,
		disabledScrollOnNonFocus: !0,
		themeColors: ut
	};
	return /* @__PURE__ */ L("div", {
		className: "ttd-dialog-output-wrapper",
		children: [n && /* @__PURE__ */ I(Es, { error: n.message }), /* @__PURE__ */ I("div", {
			style: { opacity: n ? "0.15" : 1 },
			className: "ttd-dialog-output-canvas-container",
			children: /* @__PURE__ */ I(t, {
				value: r,
				options: o,
				plugins: a,
				children: /* @__PURE__ */ I(e, {})
			})
		})]
	});
}, Os = () => /* @__PURE__ */ L("div", {
	className: "ttd-dialog-submit-shortcut",
	children: [/* @__PURE__ */ I("div", {
		className: "ttd-dialog-submit-shortcut__key",
		children: H("CtrlOrCmd")
	}), /* @__PURE__ */ I("div", {
		className: "ttd-dialog-submit-shortcut__key",
		children: H("Enter")
	})]
}), ks = "flowchart TD\n A[Christmas] -->|Get money| B(Go shopping)\n B --> C{Let me think}\n C -->|One| D[Laptop]\n C -->|Two| E[iPhone]\n C -->|Three| F[Car]", As = () => {
	let { appState: e, setAppState: t } = Z(), { t: n, language: i } = z(), [a, o] = k({
		loaded: !1,
		api: Promise.resolve({ parseMermaidToDrawnix: async () => ({ elements: [] }) })
	});
	D(() => {
		(async () => {
			try {
				let e = await import("@plait-board/mermaid-to-drawnix");
				o({
					loaded: !0,
					api: Promise.resolve(e)
				});
			} catch (e) {
				console.error("Failed to load mermaid library:", e), p(Error(n("dialog.error.loadMermaid")));
			}
		})();
	}, []);
	let [s, c] = k(() => ks), [l, u] = k(() => []), d = Oe(s.trim()), [f, p] = k(null), h = r();
	D(() => {
		(async () => {
			try {
				let e = await a.api, t;
				try {
					t = await e.parseMermaidToDrawnix(d);
				} catch {
					t = await e.parseMermaidToDrawnix(d.replace(/"/g, "'"));
				}
				let { elements: n } = t;
				u(n), p(null);
			} catch (e) {
				p(e);
			}
		})();
	}, [d, a]);
	let _ = () => {
		if (!l.length) return;
		let n = m.getBoardContainer(h).getBoundingClientRect(), r = [n.width / 2, n.height / 2], i = h.viewport.zoom, a = oe(h), o = a[0] + r[0] / i, s = a[1] + r[1] / i, c = l, u = y.getBoundingRectangle(c.filter((e) => !g.isGroup(e)).map((e) => y.getRectangleByPoints(e.points))), d = [o - u.width / 2, s - u.height / 2];
		h.insertFragment({ elements: JSON.parse(JSON.stringify(c)) }, d, S.paste), t({
			...e,
			openDialogType: null
		});
	};
	return /* @__PURE__ */ L(F, { children: [/* @__PURE__ */ I("div", {
		className: "ttd-dialog-desc",
		children: i === "zh" ? /* @__PURE__ */ L(F, { children: [
			n("dialog.mermaid.description"),
			" ",
			/* @__PURE__ */ I("a", {
				href: "https://mermaid.js.org/syntax/flowchart.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.flowchart")
			}),
			"、",
			/* @__PURE__ */ I("a", {
				href: "https://mermaid.js.org/syntax/sequenceDiagram.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.sequence")
			}),
			" ",
			"和",
			" ",
			/* @__PURE__ */ I("a", {
				href: "https://mermaid.js.org/syntax/classDiagram.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.class")
			}),
			n("dialog.mermaid.otherTypes")
		] }) : /* @__PURE__ */ L(F, { children: [
			n("dialog.mermaid.description"),
			" ",
			/* @__PURE__ */ I("a", {
				href: "https://mermaid.js.org/syntax/flowchart.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.flowchart")
			}),
			",",
			" ",
			/* @__PURE__ */ I("a", {
				href: "https://mermaid.js.org/syntax/sequenceDiagram.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.sequence")
			}),
			",",
			" ",
			/* @__PURE__ */ I("a", {
				href: "https://mermaid.js.org/syntax/classDiagram.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.class")
			}),
			n("dialog.mermaid.otherTypes")
		] })
	}), /* @__PURE__ */ L(Ss, { children: [/* @__PURE__ */ I(Cs, {
		label: n("dialog.mermaid.syntax"),
		children: /* @__PURE__ */ I(Ts, {
			input: s,
			placeholder: n("dialog.mermaid.placeholder"),
			onChange: (e) => c(e.target.value),
			onKeyboardSubmit: () => {
				_();
			}
		})
	}), /* @__PURE__ */ I(Cs, {
		label: n("dialog.mermaid.preview"),
		panelAction: {
			action: () => {
				_();
			},
			label: n("dialog.mermaid.insert")
		},
		renderSubmitShortcut: () => /* @__PURE__ */ I(Os, {}),
		children: /* @__PURE__ */ I(Ds, {
			value: l,
			loaded: a.loaded,
			error: f
		})
	})] })] });
}, js = () => {
	let { appState: e, setAppState: t } = Z(), { t: n, language: i } = z(), [a, o] = k({
		loaded: !1,
		api: Promise.resolve({ parseMarkdownToDrawnix: (e, t) => null })
	});
	D(() => {
		(async () => {
			try {
				let e = await import("@plait-board/markdown-to-drawnix");
				o({
					loaded: !0,
					api: Promise.resolve(e)
				});
			} catch (e) {
				console.error("Failed to load mermaid library:", e), p(Error(n("dialog.error.loadMermaid")));
			}
		})();
	}, []);
	let [s, c] = k(() => n("markdown.example")), [l, u] = k(() => []), d = Oe(s.trim()), [f, p] = k(null), h = r();
	D(() => {
		c(n("markdown.example"));
	}, [i]), D(() => {
		(async () => {
			try {
				let e = await a.api, t;
				try {
					t = await e.parseMarkdownToDrawnix(d);
				} catch {
					t = await e.parseMarkdownToDrawnix(d.replace(/"/g, "'"));
				}
				let n = t;
				n.points = [[0, 0]], n && (u([n]), p(null));
			} catch (e) {
				p(e);
			}
		})();
	}, [d, a]);
	let g = () => {
		if (!l.length) return;
		let n = m.getBoardContainer(h).getBoundingClientRect(), r = [n.width / 4, n.height / 2 - 20], i = h.viewport.zoom, a = oe(h), o = a[0] + r[0] / i, s = a[1] + r[1] / i, c = l;
		h.insertFragment({ elements: JSON.parse(JSON.stringify(c)) }, [o, s], S.paste), t({
			...e,
			openDialogType: null
		});
	};
	return /* @__PURE__ */ L(F, { children: [/* @__PURE__ */ I("div", {
		className: "ttd-dialog-desc",
		children: n("dialog.markdown.description")
	}), /* @__PURE__ */ L(Ss, { children: [/* @__PURE__ */ I(Cs, {
		label: n("dialog.markdown.syntax"),
		children: /* @__PURE__ */ I(Ts, {
			input: s,
			placeholder: n("dialog.markdown.placeholder"),
			onChange: (e) => c(e.target.value),
			onKeyboardSubmit: () => {
				g();
			}
		})
	}), /* @__PURE__ */ I(Cs, {
		label: n("dialog.markdown.preview"),
		panelAction: {
			action: () => {
				g();
			},
			label: n("dialog.markdown.insert")
		},
		renderSubmitShortcut: () => /* @__PURE__ */ I(Os, {}),
		children: /* @__PURE__ */ I(Ds, {
			value: l,
			loaded: a.loaded,
			error: f
		})
	})] })] });
}, Ms = ({ container: e }) => {
	let { appState: t, setAppState: n } = Z();
	return /* @__PURE__ */ L(F, { children: [/* @__PURE__ */ I(bs, {
		open: t.openDialogType === ma.mermaidToDrawnix,
		onOpenChange: (e) => {
			n({
				...t,
				openDialogType: e ? ma.mermaidToDrawnix : null
			});
		},
		children: /* @__PURE__ */ I(xs, {
			className: "Dialog ttd-dialog",
			container: e,
			children: /* @__PURE__ */ I(As, {})
		})
	}), /* @__PURE__ */ I(bs, {
		open: t.openDialogType === ma.markdownToDrawnix,
		onOpenChange: (e) => {
			n({
				...t,
				openDialogType: e ? ma.markdownToDrawnix : null
			});
		},
		children: /* @__PURE__ */ I(xs, {
			className: "Dialog ttd-dialog",
			container: e,
			children: /* @__PURE__ */ I(js, {})
		})
	})] });
}, Ns = ({ container: e }) => {
	let { appState: t, setAppState: n } = Z(), { t: i } = z(), a = r();
	return /* @__PURE__ */ I(bs, {
		open: t.openCleanConfirm,
		onOpenChange: (e) => {
			n({
				...t,
				openCleanConfirm: e
			});
		},
		children: /* @__PURE__ */ L(xs, {
			className: "clean-confirm",
			container: e,
			children: [
				/* @__PURE__ */ I("h2", {
					className: "clean-confirm__title",
					children: i("cleanConfirm.title")
				}),
				/* @__PURE__ */ I("p", {
					className: "clean-confirm__description",
					children: i("cleanConfirm.description")
				}),
				/* @__PURE__ */ L("div", {
					className: "clean-confirm__actions",
					children: [/* @__PURE__ */ I("button", {
						className: "clean-confirm__button clean-confirm__button--cancel",
						onClick: () => {
							n({
								...t,
								openCleanConfirm: !1
							});
						},
						children: i("cleanConfirm.cancel")
					}), /* @__PURE__ */ I("button", {
						className: "clean-confirm__button clean-confirm__button--ok",
						autoFocus: !0,
						onClick: () => {
							a.deleteFragment(a.children), n({
								...t,
								openCleanConfirm: !1
							});
						},
						children: i("cleanConfirm.ok")
					})]
				})
			]
		})
	});
}, Ps = (e) => {
	let { appState: t } = e;
	return t && t.linkState && t.linkState.isHovering;
}, Fs = (e) => {
	let { appState: t } = e;
	return t && t.linkState && t.linkState.isEditing;
}, Is = (e) => (t) => {
	let { pointerMove: n } = t, r = null, i = null;
	return t.pointerMove = (a) => {
		(m.isPointer(t, v.selection) || m.isPointer(t, v.hand)) && !le(t) && !Ve(t) && !Ps(t) && !Fs(t) && ge(t, "with-text-link", () => {
			let n = a.target.closest(".plait-board-link");
			if (n && n !== r) {
				let t = n.closest(".plait-text-container"), a = Vt.toSlateNode(void 0, t), o = Vt.toSlateNode(void 0, n);
				r = n, e({ linkState: {
					targetDom: n,
					targetElement: o,
					editor: a,
					isEditing: !1,
					isHovering: !1,
					isHoveringOrigin: !0
				} }), clearTimeout(i);
			} else !n && r && (i = setTimeout(() => {
				!Ps(t) && !Fs(t) && e({ linkState: null });
			}, 300), r = null);
		}), n(a);
	}, t;
}, Ls = () => {
	let { t: e } = z(), [t, n] = k(""), { appState: i, setAppState: a } = Z(), o = r(), { refs: s, floatingStyles: c } = kt({
		placement: "top",
		middleware: [Tt(20), wt()]
	}), l = i.linkState, u = i.linkState?.targetDom || null, d = i.linkState?.isEditing || !1, f = i.linkState?.isHoveringOrigin || !1, p = i.linkState?.isHovering || !1, m = d || f || p, h = O(i.linkState);
	D(() => {
		h.current = i.linkState, i.linkState ? n(i.linkState.targetElement.url) : n("");
	}, [i.linkState]), D(() => {
		if (u) {
			let e = u.getBoundingClientRect();
			s.setPositionReference({ getBoundingClientRect() {
				return {
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height,
					top: e.y,
					left: e.x,
					right: e.x + e.width,
					bottom: e.y + e.height
				};
			} });
		}
	}, [o.viewport, u]), D(() => {
		let e = (e) => {
			if (s.floating.current && !s.floating.current.contains(e.target)) {
				if (h.current) {
					let e = Rt.getLinkElement(h.current.editor);
					e && !e[0].url.trim() && Rt.unwrapLink(h.current.editor);
				}
				a({
					...i,
					linkState: null
				});
			}
		};
		return document.addEventListener("mousedown", e), () => {
			document.removeEventListener("mousedown", e);
		};
	}, []);
	let g = () => {
		if (t !== l.targetElement.url) {
			let e = l.editor, n = l.targetElement, r = Vt.findPath(e, n);
			Xt.setNodes(e, { url: t }, { at: r });
		}
		let e = Rt.getLinkElement(l.editor);
		a({
			...i,
			linkState: {
				...i.linkState,
				targetElement: e[0],
				isEditing: !1,
				isHoveringOrigin: !0
			}
		});
	};
	return m && /* @__PURE__ */ I(B, {
		ref: s.setFloating,
		style: c,
		padding: 1,
		className: R("link-popup"),
		onPointerEnter: () => {
			p || a({
				...i,
				linkState: {
					...i.linkState,
					isHovering: !0
				}
			});
		},
		onPointerLeave: () => {
			d || a({
				...i,
				linkState: {
					...i.linkState,
					isHovering: !1
				}
			});
		},
		children: /* @__PURE__ */ I(V.Row, {
			gap: 1,
			align: "center",
			children: d ? /* @__PURE__ */ L(F, { children: [/* @__PURE__ */ I("input", {
				type: "text",
				value: t,
				onChange: (e) => {
					n(e.target.value);
				},
				onKeyDown: (e) => {
					e.key === "Enter" && g();
				},
				className: "link-popup__input",
				autoFocus: !0
			}), /* @__PURE__ */ I(U, {
				type: "icon",
				visible: !0,
				icon: Hr,
				title: e("popupLink.delLink"),
				"aria-label": e("popupLink.delLink"),
				onPointerDown: () => {
					let e = l.editor, t = l.targetElement, n = Vt.findPath(e, t);
					Xt.unwrapNodes(e, { at: n }), a({
						...i,
						linkState: null
					});
				}
			})] }) : /* @__PURE__ */ L(F, { children: [
				/* @__PURE__ */ I("a", {
					href: t,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "link-popup__link",
					children: t
				}),
				/* @__PURE__ */ I(U, {
					className: "link-popup__edit",
					type: "icon",
					visible: !0,
					icon: Wr,
					title: "Edit link",
					"aria-label": "Edit link",
					onPointerDown: ({ event: e }) => {
						e.preventDefault(), a({
							...i,
							linkState: {
								...i.linkState,
								isEditing: !0
							}
						});
					}
				}),
				/* @__PURE__ */ I(U, {
					type: "icon",
					visible: !0,
					icon: Hr,
					title: e("popupLink.delLink"),
					"aria-label": e("popupLink.delLink"),
					onPointerDown: () => {
						let e = l.editor, t = l.targetElement, n = Vt.findPath(e, t);
						Xt.unwrapNodes(e, { at: n }), a({
							...i,
							linkState: null
						});
					}
				})
			] })
		})
	});
}, Rs = () => {
	let { t: e } = z();
	return /* @__PURE__ */ I("div", {
		className: "drawnix-tutorial",
		children: /* @__PURE__ */ I("div", {
			className: "tutorial-overlay",
			children: /* @__PURE__ */ L("div", {
				className: "tutorial-content",
				children: [
					/* @__PURE__ */ I("h1", {
						className: "brand-title",
						children: e("tutorial.title")
					}),
					/* @__PURE__ */ I("p", {
						className: "brand-description",
						children: e("tutorial.description")
					}),
					/* @__PURE__ */ I("p", {
						className: "brand-tooltip",
						children: e("tutorial.dataDescription")
					}),
					/* @__PURE__ */ L("div", {
						className: "feature-pointer top-left",
						children: [/* @__PURE__ */ L("svg", {
							className: "pointer-arrow-svg",
							width: "130",
							height: "100",
							viewBox: "0 0 130 100",
							children: [/* @__PURE__ */ I("defs", { children: /* @__PURE__ */ I("marker", {
								id: "arrow-left",
								markerWidth: "10",
								markerHeight: "10",
								refX: "0",
								refY: "3",
								orient: "auto",
								markerUnits: "strokeWidth",
								children: /* @__PURE__ */ I("path", {
									d: "M0,0 L0,6 L6,3 z",
									fill: "#888"
								})
							}) }), /* @__PURE__ */ I("path", {
								d: "M 80,70 Q 35,60 15,15",
								fill: "none",
								stroke: "#aaa",
								strokeWidth: "1.5",
								markerEnd: "url(#arrow-left)"
							})]
						}), /* @__PURE__ */ I("div", {
							className: "pointer-content",
							children: /* @__PURE__ */ I("p", { children: e("tutorial.appToolbar") })
						})]
					}),
					/* @__PURE__ */ L("div", {
						className: "feature-pointer top-center",
						children: [/* @__PURE__ */ L("svg", {
							className: "pointer-arrow-svg",
							width: "100",
							height: "130",
							viewBox: "0 0 100 130",
							children: [/* @__PURE__ */ I("defs", { children: /* @__PURE__ */ I("marker", {
								id: "arrow-top",
								markerWidth: "10",
								markerHeight: "10",
								refX: "0",
								refY: "3",
								orient: "auto",
								markerUnits: "strokeWidth",
								children: /* @__PURE__ */ I("path", {
									d: "M0,0 L0,6 L6,3 z",
									fill: "#888"
								})
							}) }), /* @__PURE__ */ I("path", {
								d: "M 45,90 Q 20,50 45,10",
								fill: "none",
								stroke: "#aaa",
								strokeWidth: "1.5",
								markerEnd: "url(#arrow-top)"
							})]
						}), /* @__PURE__ */ I("div", {
							className: "pointer-content",
							children: /* @__PURE__ */ I("p", { children: e("tutorial.creationToolbar") })
						})]
					}),
					/* @__PURE__ */ L("div", {
						className: "feature-pointer bottom-right",
						children: [/* @__PURE__ */ L("svg", {
							className: "pointer-arrow-svg",
							width: "180",
							height: "100",
							viewBox: "0 0 180 100",
							children: [/* @__PURE__ */ I("defs", { children: /* @__PURE__ */ I("marker", {
								id: "arrow-right",
								markerWidth: "10",
								markerHeight: "10",
								refX: "0",
								refY: "3",
								orient: "auto",
								markerUnits: "strokeWidth",
								children: /* @__PURE__ */ I("path", {
									d: "M0,0 L0,6 L6,3 z",
									fill: "#888"
								})
							}) }), /* @__PURE__ */ I("path", {
								d: "M 20,25 Q 75,20 105,70",
								fill: "none",
								stroke: "#aaa",
								strokeWidth: "1.5",
								markerEnd: "url(#arrow-right)"
							})]
						}), /* @__PURE__ */ I("div", {
							className: "pointer-content",
							children: /* @__PURE__ */ I("p", { children: e("tutorial.themeDescription") })
						})]
					})
				]
			})
		})
	});
}, zs = () => {
	let [e, t] = k(null), n = O(0), r = O(null), i = Ee((e) => {
		n.current += 1;
		let i = n.current, a = e.duration ?? 4e3;
		r.current &&= (window.clearTimeout(r.current), null), t({
			id: i,
			message: e.message,
			description: e.description,
			type: e.type || "info"
		}), a > 0 && (r.current = window.setTimeout(() => {
			t((e) => e?.id === i ? null : e), r.current = null;
		}, a));
	}, []);
	return D(() => () => {
		r.current && window.clearTimeout(r.current);
	}, []), {
		toast: e,
		showToast: i
	};
}, Bs = ({ toast: e, container: t }) => /* @__PURE__ */ I(St, {
	root: t,
	preserveTabOrder: !1,
	children: e && /* @__PURE__ */ I("div", {
		className: "drawnix-toast-wrapper",
		"aria-live": "polite",
		"aria-atomic": "true",
		children: /* @__PURE__ */ L("div", {
			role: "status",
			className: R("drawnix-toast", `drawnix-toast--${e.type}`),
			children: [/* @__PURE__ */ I("div", {
				className: "drawnix-toast__message",
				children: e.message
			}), e.description && /* @__PURE__ */ I("div", {
				className: "drawnix-toast__description",
				children: e.description
			})]
		})
	})
}), Vs = (e, t) => {
	s.updatePointerType(e, t.pointer), t.pointer !== v.hand && t.pointer !== v.selection && j(e, A.drawing);
}, Hs = ({ value: n, viewport: r, theme: i, initialToolState: a, initialPreference: o, initialLanguage: s, onChange: c, onSelectionChange: l, onViewportChange: u, onThemeChange: d, onValueChange: f, onToolStateChange: p, onPreferenceChange: m, onLanguageChange: h, afterInit: g, tutorial: _ = !1 }) => {
	let v = {
		readonly: !1,
		hideScrollbar: !0,
		disabledScrollOnNonFocus: !1,
		themeColors: ut
	}, [y, x] = k(() => {
		let e = new _t(window.navigator.userAgent);
		return {
			toolState: ga(a),
			isMobile: e.mobile() !== null,
			isPencilMode: !1,
			fileHandle: null,
			openDialogType: null,
			openCleanConfirm: !1,
			copyTransparent: o?.copyTransparent ?? !1,
			exportTransparent: o?.exportTransparent ?? !1
		};
	}), [S, ee] = k(null), [te, ne] = k(i?.themeColorMode || b.default), { toast: re, showToast: C } = zs(), ie = O(s ?? "zh");
	S && (S.appState = y, S.showToast = C), D(() => {
		S && Xn(S, ie.current);
	}, [S]);
	let ae = O(!1), w = O(p);
	w.current = p, D(() => {
		if (!ae.current) {
			ae.current = !0;
			return;
		}
		w.current?.(y.toolState);
	}, [y.toolState]);
	let oe = O(!1), T = O(m);
	T.current = m, D(() => {
		if (!oe.current) {
			oe.current = !0;
			return;
		}
		T.current?.({
			copyTransparent: y.copyTransparent,
			exportTransparent: y.exportTransparent
		});
	}, [y.copyTransparent, y.exportTransparent]), D(() => {
		i?.themeColorMode && ne(i.themeColorMode);
	}, [i?.themeColorMode]);
	let se = (e) => {
		x((t) => ({
			...t,
			...e
		}));
	}, ce = [
		st,
		He,
		gt,
		$t,
		$n,
		Qo(se),
		us,
		hs(se),
		Is(se),
		es((e) => {
			x((t) => t.toolState.pointer === e ? t : {
				...t,
				toolState: {
					...t.toolState,
					pointer: e
				}
			});
		})
	], le = O(null);
	return /* @__PURE__ */ I(Zn, {
		initialLanguage: s,
		onLanguageChange: (e) => {
			ie.current = e, S && Xn(S, e), h?.(e);
		},
		children: /* @__PURE__ */ I(_a.Provider, {
			value: {
				appState: y,
				setAppState: x,
				showToast: C
			},
			children: /* @__PURE__ */ L("div", {
				className: R("drawnix", {
					"drawnix--mobile": y.isMobile,
					[`theme--${te}`]: te
				}),
				ref: le,
				children: [/* @__PURE__ */ L(t, {
					value: n,
					viewport: r,
					theme: i,
					options: v,
					plugins: ce,
					onChange: (e) => {
						c?.(e);
					},
					onSelectionChange: l,
					onViewportChange: u,
					onThemeChange: (e) => {
						ne(e), d?.(e);
					},
					onValueChange: f,
					children: [
						/* @__PURE__ */ I(e, {
							afterInit: (e) => {
								let t = e;
								Vs(t, y.toolState), ee(t), g?.(e);
							},
							children: _ && S && /* @__PURE__ */ I(Rs, {})
						}),
						/* @__PURE__ */ I(Zo, {}),
						/* @__PURE__ */ I(Xa, {}),
						/* @__PURE__ */ I(Za, {}),
						/* @__PURE__ */ I(ds, {}),
						/* @__PURE__ */ I(No, {}),
						/* @__PURE__ */ I(Ls, {}),
						/* @__PURE__ */ I(gs, {}),
						/* @__PURE__ */ I(Ms, { container: le.current }),
						/* @__PURE__ */ I(Ns, { container: le.current }),
						/* @__PURE__ */ I(Bs, {
							toast: re,
							container: le.current
						})
					]
				}), /* @__PURE__ */ I("canvas", { className: `${os} mouse-course-hidden` })]
			})
		})
	});
};
//#endregion
export { Hs as Drawnix, Zn as I18nProvider, Va as addImage, Ei as applyOpacityToHex, rr as base64ToBlob, ir as boardToImage, Ma as canCopySelectionAs, nr as composeEventHandlers, Ba as copySelectionAsPng, za as copySelectionAsSvg, ar as download, Ii as getBackgroundColor, $a as getCurrentFill, to as getCurrentFontColor, eo as getCurrentStrokeColor, H as getShortcutKey, Di as hexAlphaToOpacity, Qn as i18nInsidePlaitHook, Qa as isClosedElement, Fi as isDefaultStroke, Ni as isFullyOpaque, Mi as isFullyTransparent, Pi as isNoColor, tr as isPromiseLike, Ai as isTransparent, Oi as isValidColor, ji as isWhite, ki as removeHexAlpha, Ra as saveAsPng, La as saveAsSvg, Xn as setBoardLanguage, or as splitRows, z as useI18n };
