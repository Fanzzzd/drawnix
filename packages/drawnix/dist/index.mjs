import { ACTIVE_STROKE_WIDTH as e, ATTACHED_ELEMENT_CLASS_NAME as t, BOARD_TO_AFTER_CHANGE as n, BOARD_TO_CONTEXT as r, BOARD_TO_ELEMENT_HOST as i, BOARD_TO_HOST as a, BOARD_TO_MOVING_POINT as o, BOARD_TO_MOVING_POINT_IN_BOARD as s, BOARD_TO_ON_CHANGE as c, BOARD_TO_ROUGH_SVG as l, BoardTransforms as u, CoreTransforms as d, DEFAULT_COLOR as f, FLUSHING as p, HOST_CLASS_NAME as m, IS_APPLE as h, IS_BOARD_ALIVE as g, IS_CHROME as _, IS_FIREFOX as v, IS_IOS as y, IS_MAC as b, IS_SAFARI as x, KEY_TO_ELEMENT_MAP as S, ListRender as ee, MAX_ZOOM as te, MERGING as ne, MIN_ZOOM as re, PlaitBoard as C, PlaitBoardContext as ie, PlaitElement as ae, PlaitGroupElement as oe, PlaitHistoryBoard as se, PlaitOperation as w, PlaitPointerType as T, RectangleClient as ce, ThemeColorMode as le, Transforms as ue, WritableClipboardOperationType as de, WritableClipboardType as fe, ZOOM_STEP as pe, addOrCreateClipboardContext as me, createBoard as he, deleteFragment as ge, distanceBetweenPointAndPoint as _e, duplicateElements as ve, getClipboardData as ye, getHitElementByPoint as be, getPointBetween as xe, getRectangleByElements as Se, getSelectedElements as Ce, getViewportOrigination as we, hasInputOrTextareaTarget as Te, idCreator as Ee, initializeViewBox as De, initializeViewportContainer as Oe, initializeViewportOffset as ke, isDragging as Ae, isFromScrolling as je, isFromViewportChange as Me, isMainPointer as Ne, isMovingElements as Pe, isNullOrUndefined as Fe, isPencilEvent as Ie, isPointInPolygon as Le, isSelectionMoving as Re, rotateAntiPointsByElement as ze, setFragment as Be, setIsFromScrolling as Ve, setIsFromViewportChange as He, setStrokeLinecap as Ue, throttleRAF as We, toHostPoint as Ge, toHostPointFromViewBoxPoint as Ke, toImage as qe, toScreenPointFromHostPoint as Je, toSvgData as Ye, toViewBoxPoint as Xe, updateViewBox as Ze, updateViewportByScrolling as Qe, updateViewportOffset as $e, withBoard as et, withHandPointer as tt, withHistory as nt, withHotkey as rt, withI18n as it, withMoving as at, withOptions as ot, withRelatedFragment as st, withSelection as ct } from "@plait/core";
import * as E from "react";
import lt, { createContext as ut, forwardRef as dt, useCallback as ft, useContext as pt, useDeferredValue as mt, useEffect as D, useMemo as ht, useRef as O, useState as k } from "react";
import A from "classnames";
import { Fragment as j, jsx as M, jsxs as N } from "react/jsx-runtime";
import { createRoot as gt } from "react-dom/client";
import { Range as _t, Transforms as vt, createEditor as yt } from "slate";
import { Editable as bt, ReactEditor as xt, Slate as St, withReact as Ct } from "slate-react";
import { withHistory as wt } from "slate-history";
import { DEFAULT_FONT_SIZE as Tt, LinkEditor as Et, TextTransforms as Dt, getTextMarksByElement as Ot, isUrl as kt } from "@plait/text-plugins";
import { BoardCreationMode as P, CommonElementFlavour as At, Generator as jt, PropertyTransforms as Mt, StrokeStyle as Nt, buildClipboardData as Pt, createActiveGenerator as Ft, getElementOfFocusedImage as It, getFirstTextEditor as Lt, hasResizeHandle as Rt, insertClipboardData as zt, isDrawingMode as Bt, isResizing as Vt, setCreationMode as F, withGroup as Ht, withImage as Ut, withText as Wt } from "@plait/common";
import { ArrowLineShape as Gt, BasicShapes as I, DefaultDrawStyle as Kt, DrawI18nKey as qt, DrawTransforms as Jt, FlowchartSymbols as Yt, PlaitDrawElement as L, WithDrawPluginKey as Xt, getFillByElement as Zt, getHitDrawElement as Qt, getMemorizeKey as $t, getStrokeColorByElement as en, getStrokeStyleByElement as tn, getStrokeWidthByElement as nn, isClosedCustomGeometry as rn, isClosedDrawElement as an, isClosedPoints as on, isDrawElementsIncludeText as sn, isHitPolyLine as cn, isRectangleHitRotatedPoints as ln, withDraw as un } from "@plait/draw";
import { MindElement as dn, MindI18nKey as fn, MindPointerType as pn, MindThemeColors as mn, MindTransforms as hn, WithMindPluginKey as gn, getFillByElement as _n, getStrokeColorByElement as vn, isHitImage as yn, withMind as bn } from "@plait/mind";
import xn from "mobile-detect";
import { FloatingFocusManager as Sn, FloatingList as Cn, FloatingOverlay as wn, FloatingPortal as Tn, autoUpdate as En, flip as Dn, offset as On, shift as kn, useClick as An, useDismiss as jn, useFloating as Mn, useId as Nn, useInteractions as Pn, useListItem as Fn, useListNavigation as In, useMergeRefs as Ln, useRole as Rn, useTypeahead as zn } from "@floating-ui/react";
import { drainPoints as Bn, drawLaserPen as Vn, setColor as Hn, setDelay as Un, setMaxWidth as Wn, setMinWidth as Gn, setOpacity as Kn, setRoundCap as qn } from "laser-pen";
//#region \0rolldown/runtime.js
var Jn = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports);
//#endregion
//#region ../../node_modules/hachure-fill/bin/hachure.js
function Yn(e, t, n) {
	if (e && e.length) {
		let [r, i] = t, a = Math.PI / 180 * n, o = Math.cos(a), s = Math.sin(a);
		for (let t of e) {
			let [e, n] = t;
			t[0] = (e - r) * o - (n - i) * s + r, t[1] = (e - r) * s + (n - i) * o + i;
		}
	}
}
function Xn(e, t, n) {
	let r = [];
	e.forEach((e) => r.push(...e)), Yn(r, t, n);
}
function Zn(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
function Qn(e, t, n, r = 1) {
	let i = n, a = Math.max(t, .1), o = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, s = [0, 0];
	if (i) for (let e of o) Yn(e, s, i);
	let c = $n(o, a, r);
	if (i) {
		for (let e of o) Yn(e, s, -i);
		Xn(c, s, -i);
	}
	return c;
}
function $n(e, t, n) {
	let r = [];
	for (let t of e) {
		let e = [...t];
		Zn(e[0], e[e.length - 1]) || e.push([e[0][0], e[0][1]]), e.length > 2 && r.push(e);
	}
	let i = [];
	t = Math.max(t, .1);
	let a = [];
	for (let e of r) for (let t = 0; t < e.length - 1; t++) {
		let n = e[t], r = e[t + 1];
		if (n[1] !== r[1]) {
			let e = Math.min(n[1], r[1]);
			a.push({
				ymin: e,
				ymax: Math.max(n[1], r[1]),
				x: e === n[1] ? n[0] : r[0],
				islope: (r[0] - n[0]) / (r[1] - n[1])
			});
		}
	}
	if (a.sort((e, t) => e.ymin < t.ymin ? -1 : e.ymin > t.ymin ? 1 : e.x < t.x ? -1 : e.x > t.x ? 1 : e.ymax === t.ymax ? 0 : (e.ymax - t.ymax) / Math.abs(e.ymax - t.ymax)), !a.length) return i;
	let o = [], s = a[0].ymin, c = 0;
	for (; o.length || a.length;) {
		if (a.length) {
			let e = -1;
			for (let t = 0; t < a.length && !(a[t].ymin > s); t++) e = t;
			a.splice(0, e + 1).forEach((e) => {
				o.push({
					s,
					edge: e
				});
			});
		}
		if (o = o.filter((e) => !(e.edge.ymax <= s)), o.sort((e, t) => e.edge.x === t.edge.x ? 0 : (e.edge.x - t.edge.x) / Math.abs(e.edge.x - t.edge.x)), (n !== 1 || c % t === 0) && o.length > 1) for (let e = 0; e < o.length; e += 2) {
			let t = e + 1;
			if (t >= o.length) break;
			let n = o[e].edge, r = o[t].edge;
			i.push([[Math.round(n.x), s], [Math.round(r.x), s]]);
		}
		s += n, o.forEach((e) => {
			e.edge.x = e.edge.x + n * e.edge.islope;
		}), c++;
	}
	return i;
}
//#endregion
//#region ../../node_modules/roughjs/bin/fillers/scan-line-hachure.js
function er(e, t) {
	let n = t.hachureAngle + 90, r = t.hachureGap;
	r < 0 && (r = t.strokeWidth * 4), r = Math.round(Math.max(r, .1));
	let i = 1;
	return t.roughness >= 1 && (t.randomizer?.next() || Math.random()) > .7 && (i = r), Qn(e, r, n, i || 1);
}
//#endregion
//#region ../../node_modules/roughjs/bin/fillers/hachure-filler.js
var tr = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		return this._fillPolygons(e, t);
	}
	_fillPolygons(e, t) {
		let n = er(e, t);
		return {
			type: "fillSketch",
			ops: this.renderLines(n, t)
		};
	}
	renderLines(e, t) {
		let n = [];
		for (let r of e) n.push(...this.helper.doubleLineOps(r[0][0], r[0][1], r[1][0], r[1][1], t));
		return n;
	}
};
//#endregion
//#region ../../node_modules/roughjs/bin/geometry.js
function nr(e) {
	let t = e[0], n = e[1];
	return Math.sqrt((t[0] - n[0]) ** 2 + (t[1] - n[1]) ** 2);
}
//#endregion
//#region ../../node_modules/roughjs/bin/fillers/zigzag-filler.js
var rr = class extends tr {
	fillPolygons(e, t) {
		let n = t.hachureGap;
		n < 0 && (n = t.strokeWidth * 4), n = Math.max(n, .1);
		let r = er(e, Object.assign({}, t, { hachureGap: n })), i = Math.PI / 180 * t.hachureAngle, a = [], o = n * .5 * Math.cos(i), s = n * .5 * Math.sin(i);
		for (let [e, t] of r) nr([e, t]) && a.push([[e[0] - o, e[1] + s], [...t]], [[e[0] + o, e[1] - s], [...t]]);
		return {
			type: "fillSketch",
			ops: this.renderLines(a, t)
		};
	}
}, ir = class extends tr {
	fillPolygons(e, t) {
		let n = this._fillPolygons(e, t), r = Object.assign({}, t, { hachureAngle: t.hachureAngle + 90 }), i = this._fillPolygons(e, r);
		return n.ops = n.ops.concat(i.ops), n;
	}
}, ar = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		t = Object.assign({}, t, { hachureAngle: 0 });
		let n = er(e, t);
		return this.dotsOnLines(n, t);
	}
	dotsOnLines(e, t) {
		let n = [], r = t.hachureGap;
		r < 0 && (r = t.strokeWidth * 4), r = Math.max(r, .1);
		let i = t.fillWeight;
		i < 0 && (i = t.strokeWidth / 2);
		let a = r / 4;
		for (let o of e) {
			let e = nr(o), s = e / r, c = Math.ceil(s) - 1, l = e - c * r, u = (o[0][0] + o[1][0]) / 2 - r / 4, d = Math.min(o[0][1], o[1][1]);
			for (let e = 0; e < c; e++) {
				let o = d + l + e * r, s = u - a + Math.random() * 2 * a, c = o - a + Math.random() * 2 * a, f = this.helper.ellipse(s, c, i, i, t);
				n.push(...f.ops);
			}
		}
		return {
			type: "fillSketch",
			ops: n
		};
	}
}, or = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		let n = er(e, t);
		return {
			type: "fillSketch",
			ops: this.dashedLine(n, t)
		};
	}
	dashedLine(e, t) {
		let n = t.dashOffset < 0 ? t.hachureGap < 0 ? t.strokeWidth * 4 : t.hachureGap : t.dashOffset, r = t.dashGap < 0 ? t.hachureGap < 0 ? t.strokeWidth * 4 : t.hachureGap : t.dashGap, i = [];
		return e.forEach((e) => {
			let a = nr(e), o = Math.floor(a / (n + r)), s = (a + r - o * (n + r)) / 2, c = e[0], l = e[1];
			c[0] > l[0] && (c = e[1], l = e[0]);
			let u = Math.atan((l[1] - c[1]) / (l[0] - c[0]));
			for (let e = 0; e < o; e++) {
				let a = e * (n + r), o = a + n, l = [c[0] + a * Math.cos(u) + s * Math.cos(u), c[1] + a * Math.sin(u) + s * Math.sin(u)], d = [c[0] + o * Math.cos(u) + s * Math.cos(u), c[1] + o * Math.sin(u) + s * Math.sin(u)];
				i.push(...this.helper.doubleLineOps(l[0], l[1], d[0], d[1], t));
			}
		}), i;
	}
}, sr = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		let n = t.hachureGap < 0 ? t.strokeWidth * 4 : t.hachureGap, r = t.zigzagOffset < 0 ? n : t.zigzagOffset;
		t = Object.assign({}, t, { hachureGap: n + r });
		let i = er(e, t);
		return {
			type: "fillSketch",
			ops: this.zigzagLines(i, r, t)
		};
	}
	zigzagLines(e, t, n) {
		let r = [];
		return e.forEach((e) => {
			let i = nr(e), a = Math.round(i / (2 * t)), o = e[0], s = e[1];
			o[0] > s[0] && (o = e[1], s = e[0]);
			let c = Math.atan((s[1] - o[1]) / (s[0] - o[0]));
			for (let e = 0; e < a; e++) {
				let i = e * 2 * t, a = (e + 1) * 2 * t, s = Math.sqrt(2 * t ** 2), l = [o[0] + i * Math.cos(c), o[1] + i * Math.sin(c)], u = [o[0] + a * Math.cos(c), o[1] + a * Math.sin(c)], d = [l[0] + s * Math.cos(c + Math.PI / 4), l[1] + s * Math.sin(c + Math.PI / 4)];
				r.push(...this.helper.doubleLineOps(l[0], l[1], d[0], d[1], n), ...this.helper.doubleLineOps(d[0], d[1], u[0], u[1], n));
			}
		}), r;
	}
}, R = {};
function cr(e, t) {
	let n = e.fillStyle || "hachure";
	if (!R[n]) switch (n) {
		case "zigzag":
			R[n] || (R[n] = new rr(t));
			break;
		case "cross-hatch":
			R[n] || (R[n] = new ir(t));
			break;
		case "dots":
			R[n] || (R[n] = new ar(t));
			break;
		case "dashed":
			R[n] || (R[n] = new or(t));
			break;
		case "zigzag-line":
			R[n] || (R[n] = new sr(t));
			break;
		default:
			n = "hachure", R[n] || (R[n] = new tr(t));
			break;
	}
	return R[n];
}
//#endregion
//#region ../../node_modules/roughjs/bin/math.js
function lr() {
	return Math.floor(Math.random() * 2 ** 31);
}
var ur = class {
	constructor(e) {
		this.seed = e;
	}
	next() {
		return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
	}
}, dr = 0, fr = 1, pr = 2, mr = {
	A: 7,
	a: 7,
	C: 6,
	c: 6,
	H: 1,
	h: 1,
	L: 2,
	l: 2,
	M: 2,
	m: 2,
	Q: 4,
	q: 4,
	S: 4,
	s: 4,
	T: 2,
	t: 2,
	V: 1,
	v: 1,
	Z: 0,
	z: 0
};
function hr(e) {
	let t = [];
	for (; e !== "";) if (e.match(/^([ \t\r\n,]+)/)) e = e.substr(RegExp.$1.length);
	else if (e.match(/^([aAcChHlLmMqQsStTvVzZ])/)) t[t.length] = {
		type: dr,
		text: RegExp.$1
	}, e = e.substr(RegExp.$1.length);
	else if (e.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) t[t.length] = {
		type: fr,
		text: `${parseFloat(RegExp.$1)}`
	}, e = e.substr(RegExp.$1.length);
	else return [];
	return t[t.length] = {
		type: pr,
		text: ""
	}, t;
}
function gr(e, t) {
	return e.type === t;
}
function _r(e) {
	let t = [], n = hr(e), r = "BOD", i = 0, a = n[i];
	for (; !gr(a, pr);) {
		let o = 0, s = [];
		if (r === "BOD") if (a.text === "M" || a.text === "m") i++, o = mr[a.text], r = a.text;
		else return _r("M0,0" + e);
		else gr(a, fr) ? o = mr[r] : (i++, o = mr[a.text], r = a.text);
		if (i + o < n.length) {
			for (let e = i; e < i + o; e++) {
				let t = n[e];
				if (gr(t, fr)) s[s.length] = +t.text;
				else throw Error("Param not a number: " + r + "," + t.text);
			}
			if (typeof mr[r] == "number") {
				let e = {
					key: r,
					data: s
				};
				t.push(e), i += o, a = n[i], r === "M" && (r = "L"), r === "m" && (r = "l");
			} else throw Error("Bad segment: " + r);
		} else throw Error("Path data ended short");
	}
	return t;
}
//#endregion
//#region ../../node_modules/path-data-parser/lib/absolutize.js
function vr(e) {
	let t = 0, n = 0, r = 0, i = 0, a = [];
	for (let { key: o, data: s } of e) switch (o) {
		case "M":
			a.push({
				key: "M",
				data: [...s]
			}), [t, n] = s, [r, i] = s;
			break;
		case "m":
			t += s[0], n += s[1], a.push({
				key: "M",
				data: [t, n]
			}), r = t, i = n;
			break;
		case "L":
			a.push({
				key: "L",
				data: [...s]
			}), [t, n] = s;
			break;
		case "l":
			t += s[0], n += s[1], a.push({
				key: "L",
				data: [t, n]
			});
			break;
		case "C":
			a.push({
				key: "C",
				data: [...s]
			}), t = s[4], n = s[5];
			break;
		case "c": {
			let e = s.map((e, r) => r % 2 ? e + n : e + t);
			a.push({
				key: "C",
				data: e
			}), t = e[4], n = e[5];
			break;
		}
		case "Q":
			a.push({
				key: "Q",
				data: [...s]
			}), t = s[2], n = s[3];
			break;
		case "q": {
			let e = s.map((e, r) => r % 2 ? e + n : e + t);
			a.push({
				key: "Q",
				data: e
			}), t = e[2], n = e[3];
			break;
		}
		case "A":
			a.push({
				key: "A",
				data: [...s]
			}), t = s[5], n = s[6];
			break;
		case "a":
			t += s[5], n += s[6], a.push({
				key: "A",
				data: [
					s[0],
					s[1],
					s[2],
					s[3],
					s[4],
					t,
					n
				]
			});
			break;
		case "H":
			a.push({
				key: "H",
				data: [...s]
			}), t = s[0];
			break;
		case "h":
			t += s[0], a.push({
				key: "H",
				data: [t]
			});
			break;
		case "V":
			a.push({
				key: "V",
				data: [...s]
			}), n = s[0];
			break;
		case "v":
			n += s[0], a.push({
				key: "V",
				data: [n]
			});
			break;
		case "S":
			a.push({
				key: "S",
				data: [...s]
			}), t = s[2], n = s[3];
			break;
		case "s": {
			let e = s.map((e, r) => r % 2 ? e + n : e + t);
			a.push({
				key: "S",
				data: e
			}), t = e[2], n = e[3];
			break;
		}
		case "T":
			a.push({
				key: "T",
				data: [...s]
			}), t = s[0], n = s[1];
			break;
		case "t":
			t += s[0], n += s[1], a.push({
				key: "T",
				data: [t, n]
			});
			break;
		case "Z":
		case "z":
			a.push({
				key: "Z",
				data: []
			}), t = r, n = i;
			break;
	}
	return a;
}
//#endregion
//#region ../../node_modules/path-data-parser/lib/normalize.js
function yr(e) {
	let t = [], n = "", r = 0, i = 0, a = 0, o = 0, s = 0, c = 0;
	for (let { key: l, data: u } of e) {
		switch (l) {
			case "M":
				t.push({
					key: "M",
					data: [...u]
				}), [r, i] = u, [a, o] = u;
				break;
			case "C":
				t.push({
					key: "C",
					data: [...u]
				}), r = u[4], i = u[5], s = u[2], c = u[3];
				break;
			case "L":
				t.push({
					key: "L",
					data: [...u]
				}), [r, i] = u;
				break;
			case "H":
				r = u[0], t.push({
					key: "L",
					data: [r, i]
				});
				break;
			case "V":
				i = u[0], t.push({
					key: "L",
					data: [r, i]
				});
				break;
			case "S": {
				let e = 0, a = 0;
				n === "C" || n === "S" ? (e = r + (r - s), a = i + (i - c)) : (e = r, a = i), t.push({
					key: "C",
					data: [
						e,
						a,
						...u
					]
				}), s = u[0], c = u[1], r = u[2], i = u[3];
				break;
			}
			case "T": {
				let [e, a] = u, o = 0, l = 0;
				n === "Q" || n === "T" ? (o = r + (r - s), l = i + (i - c)) : (o = r, l = i);
				let d = r + 2 * (o - r) / 3, f = i + 2 * (l - i) / 3, p = e + 2 * (o - e) / 3, m = a + 2 * (l - a) / 3;
				t.push({
					key: "C",
					data: [
						d,
						f,
						p,
						m,
						e,
						a
					]
				}), s = o, c = l, r = e, i = a;
				break;
			}
			case "Q": {
				let [e, n, a, o] = u, l = r + 2 * (e - r) / 3, d = i + 2 * (n - i) / 3, f = a + 2 * (e - a) / 3, p = o + 2 * (n - o) / 3;
				t.push({
					key: "C",
					data: [
						l,
						d,
						f,
						p,
						a,
						o
					]
				}), s = e, c = n, r = a, i = o;
				break;
			}
			case "A": {
				let e = Math.abs(u[0]), n = Math.abs(u[1]), a = u[2], o = u[3], s = u[4], c = u[5], l = u[6];
				e === 0 || n === 0 ? (t.push({
					key: "C",
					data: [
						r,
						i,
						c,
						l,
						c,
						l
					]
				}), r = c, i = l) : (r !== c || i !== l) && (Sr(r, i, c, l, e, n, a, o, s).forEach(function(e) {
					t.push({
						key: "C",
						data: e
					});
				}), r = c, i = l);
				break;
			}
			case "Z":
				t.push({
					key: "Z",
					data: []
				}), r = a, i = o;
				break;
		}
		n = l;
	}
	return t;
}
function br(e) {
	return Math.PI * e / 180;
}
function xr(e, t, n) {
	return [e * Math.cos(n) - t * Math.sin(n), e * Math.sin(n) + t * Math.cos(n)];
}
function Sr(e, t, n, r, i, a, o, s, c, l) {
	let u = br(o), d = [], f = 0, p = 0, m = 0, h = 0;
	if (l) [f, p, m, h] = l;
	else {
		[e, t] = xr(e, t, -u), [n, r] = xr(n, r, -u);
		let o = (e - n) / 2, l = (t - r) / 2, d = o * o / (i * i) + l * l / (a * a);
		d > 1 && (d = Math.sqrt(d), i = d * i, a = d * a);
		let g = s === c ? -1 : 1, _ = i * i, v = a * a, y = _ * v - _ * l * l - v * o * o, b = _ * l * l + v * o * o, x = g * Math.sqrt(Math.abs(y / b));
		m = x * i * l / a + (e + n) / 2, h = x * -a * o / i + (t + r) / 2, f = Math.asin(parseFloat(((t - h) / a).toFixed(9))), p = Math.asin(parseFloat(((r - h) / a).toFixed(9))), e < m && (f = Math.PI - f), n < m && (p = Math.PI - p), f < 0 && (f = Math.PI * 2 + f), p < 0 && (p = Math.PI * 2 + p), c && f > p && (f -= Math.PI * 2), !c && p > f && (p -= Math.PI * 2);
	}
	let g = p - f;
	if (Math.abs(g) > Math.PI * 120 / 180) {
		let e = p, t = n, s = r;
		p = c && p > f ? f + Math.PI * 120 / 180 * 1 : f + Math.PI * 120 / 180 * -1, n = m + i * Math.cos(p), r = h + a * Math.sin(p), d = Sr(n, r, t, s, i, a, o, 0, c, [
			p,
			e,
			m,
			h
		]);
	}
	g = p - f;
	let _ = Math.cos(f), v = Math.sin(f), y = Math.cos(p), b = Math.sin(p), x = Math.tan(g / 4), S = 4 / 3 * i * x, ee = 4 / 3 * a * x, te = [e, t], ne = [e + S * v, t - ee * _], re = [n + S * b, r - ee * y], C = [n, r];
	if (ne[0] = 2 * te[0] - ne[0], ne[1] = 2 * te[1] - ne[1], l) return [
		ne,
		re,
		C
	].concat(d);
	{
		d = [
			ne,
			re,
			C
		].concat(d);
		let e = [];
		for (let t = 0; t < d.length; t += 3) {
			let n = xr(d[t][0], d[t][1], u), r = xr(d[t + 1][0], d[t + 1][1], u), i = xr(d[t + 2][0], d[t + 2][1], u);
			e.push([
				n[0],
				n[1],
				r[0],
				r[1],
				i[0],
				i[1]
			]);
		}
		return e;
	}
}
//#endregion
//#region ../../node_modules/roughjs/bin/renderer.js
var Cr = {
	randOffset: Lr,
	randOffsetWithRange: Rr,
	ellipse: kr,
	doubleLineOps: zr
};
function wr(e, t, n, r, i) {
	return {
		type: "path",
		ops: Ur(e, t, n, r, i)
	};
}
function Tr(e, t, n) {
	let r = (e || []).length;
	if (r > 2) {
		let i = [];
		for (let t = 0; t < r - 1; t++) i.push(...Ur(e[t][0], e[t][1], e[t + 1][0], e[t + 1][1], n));
		return t && i.push(...Ur(e[r - 1][0], e[r - 1][1], e[0][0], e[0][1], n)), {
			type: "path",
			ops: i
		};
	} else if (r === 2) return wr(e[0][0], e[0][1], e[1][0], e[1][1], n);
	return {
		type: "path",
		ops: []
	};
}
function Er(e, t) {
	return Tr(e, !0, t);
}
function Dr(e, t, n, r, i) {
	return Er([
		[e, t],
		[e + n, t],
		[e + n, t + r],
		[e, t + r]
	], i);
}
function Or(e, t) {
	if (e.length) {
		let n = typeof e[0][0] == "number" ? [e] : e, r = Gr(n[0], 1 * (1 + t.roughness * .2), t), i = t.disableMultiStroke ? [] : Gr(n[0], 1.5 * (1 + t.roughness * .22), Br(t));
		for (let e = 1; e < n.length; e++) {
			let a = n[e];
			if (a.length) {
				let e = Gr(a, 1 * (1 + t.roughness * .2), t), n = t.disableMultiStroke ? [] : Gr(a, 1.5 * (1 + t.roughness * .22), Br(t));
				for (let t of e) t.op !== "move" && r.push(t);
				for (let e of n) e.op !== "move" && i.push(e);
			}
		}
		return {
			type: "path",
			ops: r.concat(i)
		};
	}
	return {
		type: "path",
		ops: []
	};
}
function kr(e, t, n, r, i) {
	return jr(e, t, i, Ar(n, r, i)).opset;
}
function Ar(e, t, n) {
	let r = Math.sqrt(Math.PI * 2 * Math.sqrt(((e / 2) ** 2 + (t / 2) ** 2) / 2)), i = Math.ceil(Math.max(n.curveStepCount, n.curveStepCount / Math.sqrt(200) * r)), a = Math.PI * 2 / i, o = Math.abs(e / 2), s = Math.abs(t / 2), c = 1 - n.curveFitting;
	return o += z(o * c, n), s += z(s * c, n), {
		increment: a,
		rx: o,
		ry: s
	};
}
function jr(e, t, n, r) {
	let [i, a] = qr(r.increment, e, t, r.rx, r.ry, 1, r.increment * Hr(.1, Hr(.4, 1, n), n), n), o = Kr(i, null, n);
	if (!n.disableMultiStroke && n.roughness !== 0) {
		let [i] = qr(r.increment, e, t, r.rx, r.ry, 1.5, 0, n), a = Kr(i, null, n);
		o = o.concat(a);
	}
	return {
		estimatedPoints: a,
		opset: {
			type: "path",
			ops: o
		}
	};
}
function Mr(e, t, n, r, i, a, o, s, c) {
	let l = e, u = t, d = Math.abs(n / 2), f = Math.abs(r / 2);
	d += z(d * .01, c), f += z(f * .01, c);
	let p = i, m = a;
	for (; p < 0;) p += Math.PI * 2, m += Math.PI * 2;
	m - p > Math.PI * 2 && (p = 0, m = Math.PI * 2);
	let h = Math.PI * 2 / c.curveStepCount, g = Math.min(h / 2, (m - p) / 2), _ = Jr(g, l, u, d, f, p, m, 1, c);
	if (!c.disableMultiStroke) {
		let e = Jr(g, l, u, d, f, p, m, 1.5, c);
		_.push(...e);
	}
	return o && (s ? _.push(...Ur(l, u, l + d * Math.cos(p), u + f * Math.sin(p), c), ...Ur(l, u, l + d * Math.cos(m), u + f * Math.sin(m), c)) : _.push({
		op: "lineTo",
		data: [l, u]
	}, {
		op: "lineTo",
		data: [l + d * Math.cos(p), u + f * Math.sin(p)]
	})), {
		type: "path",
		ops: _
	};
}
function Nr(e, t) {
	let n = yr(vr(_r(e))), r = [], i = [0, 0], a = [0, 0];
	for (let { key: e, data: o } of n) switch (e) {
		case "M":
			a = [o[0], o[1]], i = [o[0], o[1]];
			break;
		case "L":
			r.push(...Ur(a[0], a[1], o[0], o[1], t)), a = [o[0], o[1]];
			break;
		case "C": {
			let [e, n, i, s, c, l] = o;
			r.push(...Yr(e, n, i, s, c, l, a, t)), a = [c, l];
			break;
		}
		case "Z":
			r.push(...Ur(a[0], a[1], i[0], i[1], t)), a = [i[0], i[1]];
			break;
	}
	return {
		type: "path",
		ops: r
	};
}
function Pr(e, t) {
	let n = [];
	for (let r of e) if (r.length) {
		let e = t.maxRandomnessOffset || 0, i = r.length;
		if (i > 2) {
			n.push({
				op: "move",
				data: [r[0][0] + z(e, t), r[0][1] + z(e, t)]
			});
			for (let a = 1; a < i; a++) n.push({
				op: "lineTo",
				data: [r[a][0] + z(e, t), r[a][1] + z(e, t)]
			});
		}
	}
	return {
		type: "fillPath",
		ops: n
	};
}
function Fr(e, t) {
	return cr(t, Cr).fillPolygons(e, t);
}
function Ir(e, t, n, r, i, a, o) {
	let s = e, c = t, l = Math.abs(n / 2), u = Math.abs(r / 2);
	l += z(l * .01, o), u += z(u * .01, o);
	let d = i, f = a;
	for (; d < 0;) d += Math.PI * 2, f += Math.PI * 2;
	f - d > Math.PI * 2 && (d = 0, f = Math.PI * 2);
	let p = (f - d) / o.curveStepCount, m = [];
	for (let e = d; e <= f; e += p) m.push([s + l * Math.cos(e), c + u * Math.sin(e)]);
	return m.push([s + l * Math.cos(f), c + u * Math.sin(f)]), m.push([s, c]), Fr([m], o);
}
function Lr(e, t) {
	return z(e, t);
}
function Rr(e, t, n) {
	return Hr(e, t, n);
}
function zr(e, t, n, r, i) {
	return Ur(e, t, n, r, i, !0);
}
function Br(e) {
	let t = Object.assign({}, e);
	return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function Vr(e) {
	return e.randomizer ||= new ur(e.seed || 0), e.randomizer.next();
}
function Hr(e, t, n, r = 1) {
	return n.roughness * r * (Vr(n) * (t - e) + e);
}
function z(e, t, n = 1) {
	return Hr(-e, e, t, n);
}
function Ur(e, t, n, r, i, a = !1) {
	let o = a ? i.disableMultiStrokeFill : i.disableMultiStroke, s = Wr(e, t, n, r, i, !0, !1);
	if (o) return s;
	let c = Wr(e, t, n, r, i, !0, !0);
	return s.concat(c);
}
function Wr(e, t, n, r, i, a, o) {
	let s = (e - n) ** 2 + (t - r) ** 2, c = Math.sqrt(s), l = 1;
	l = c < 200 ? 1 : c > 500 ? .4 : -.0016668 * c + 1.233334;
	let u = i.maxRandomnessOffset || 0;
	u * u * 100 > s && (u = c / 10);
	let d = u / 2, f = .2 + Vr(i) * .2, p = i.bowing * i.maxRandomnessOffset * (r - t) / 200, m = i.bowing * i.maxRandomnessOffset * (e - n) / 200;
	p = z(p, i, l), m = z(m, i, l);
	let h = [], g = () => z(d, i, l), _ = () => z(u, i, l), v = i.preserveVertices;
	return a && (o ? h.push({
		op: "move",
		data: [e + (v ? 0 : g()), t + (v ? 0 : g())]
	}) : h.push({
		op: "move",
		data: [e + (v ? 0 : z(u, i, l)), t + (v ? 0 : z(u, i, l))]
	})), o ? h.push({
		op: "bcurveTo",
		data: [
			p + e + (n - e) * f + g(),
			m + t + (r - t) * f + g(),
			p + e + 2 * (n - e) * f + g(),
			m + t + 2 * (r - t) * f + g(),
			n + (v ? 0 : g()),
			r + (v ? 0 : g())
		]
	}) : h.push({
		op: "bcurveTo",
		data: [
			p + e + (n - e) * f + _(),
			m + t + (r - t) * f + _(),
			p + e + 2 * (n - e) * f + _(),
			m + t + 2 * (r - t) * f + _(),
			n + (v ? 0 : _()),
			r + (v ? 0 : _())
		]
	}), h;
}
function Gr(e, t, n) {
	if (!e.length) return [];
	let r = [];
	r.push([e[0][0] + z(t, n), e[0][1] + z(t, n)]), r.push([e[0][0] + z(t, n), e[0][1] + z(t, n)]);
	for (let i = 1; i < e.length; i++) r.push([e[i][0] + z(t, n), e[i][1] + z(t, n)]), i === e.length - 1 && r.push([e[i][0] + z(t, n), e[i][1] + z(t, n)]);
	return Kr(r, null, n);
}
function Kr(e, t, n) {
	let r = e.length, i = [];
	if (r > 3) {
		let a = [], o = 1 - n.curveTightness;
		i.push({
			op: "move",
			data: [e[1][0], e[1][1]]
		});
		for (let t = 1; t + 2 < r; t++) {
			let n = e[t];
			a[0] = [n[0], n[1]], a[1] = [n[0] + (o * e[t + 1][0] - o * e[t - 1][0]) / 6, n[1] + (o * e[t + 1][1] - o * e[t - 1][1]) / 6], a[2] = [e[t + 1][0] + (o * e[t][0] - o * e[t + 2][0]) / 6, e[t + 1][1] + (o * e[t][1] - o * e[t + 2][1]) / 6], a[3] = [e[t + 1][0], e[t + 1][1]], i.push({
				op: "bcurveTo",
				data: [
					a[1][0],
					a[1][1],
					a[2][0],
					a[2][1],
					a[3][0],
					a[3][1]
				]
			});
		}
		if (t && t.length === 2) {
			let e = n.maxRandomnessOffset;
			i.push({
				op: "lineTo",
				data: [t[0] + z(e, n), t[1] + z(e, n)]
			});
		}
	} else r === 3 ? (i.push({
		op: "move",
		data: [e[1][0], e[1][1]]
	}), i.push({
		op: "bcurveTo",
		data: [
			e[1][0],
			e[1][1],
			e[2][0],
			e[2][1],
			e[2][0],
			e[2][1]
		]
	})) : r === 2 && i.push(...Wr(e[0][0], e[0][1], e[1][0], e[1][1], n, !0, !0));
	return i;
}
function qr(e, t, n, r, i, a, o, s) {
	let c = s.roughness === 0, l = [], u = [];
	if (c) {
		e /= 4, u.push([t + r * Math.cos(-e), n + i * Math.sin(-e)]);
		for (let a = 0; a <= Math.PI * 2; a += e) {
			let e = [t + r * Math.cos(a), n + i * Math.sin(a)];
			l.push(e), u.push(e);
		}
		u.push([t + r * Math.cos(0), n + i * Math.sin(0)]), u.push([t + r * Math.cos(e), n + i * Math.sin(e)]);
	} else {
		let c = z(.5, s) - Math.PI / 2;
		u.push([z(a, s) + t + .9 * r * Math.cos(c - e), z(a, s) + n + .9 * i * Math.sin(c - e)]);
		let d = Math.PI * 2 + c - .01;
		for (let o = c; o < d; o += e) {
			let e = [z(a, s) + t + r * Math.cos(o), z(a, s) + n + i * Math.sin(o)];
			l.push(e), u.push(e);
		}
		u.push([z(a, s) + t + r * Math.cos(c + Math.PI * 2 + o * .5), z(a, s) + n + i * Math.sin(c + Math.PI * 2 + o * .5)]), u.push([z(a, s) + t + .98 * r * Math.cos(c + o), z(a, s) + n + .98 * i * Math.sin(c + o)]), u.push([z(a, s) + t + .9 * r * Math.cos(c + o * .5), z(a, s) + n + .9 * i * Math.sin(c + o * .5)]);
	}
	return [u, l];
}
function Jr(e, t, n, r, i, a, o, s, c) {
	let l = a + z(.1, c), u = [];
	u.push([z(s, c) + t + .9 * r * Math.cos(l - e), z(s, c) + n + .9 * i * Math.sin(l - e)]);
	for (let a = l; a <= o; a += e) u.push([z(s, c) + t + r * Math.cos(a), z(s, c) + n + i * Math.sin(a)]);
	return u.push([t + r * Math.cos(o), n + i * Math.sin(o)]), u.push([t + r * Math.cos(o), n + i * Math.sin(o)]), Kr(u, null, c);
}
function Yr(e, t, n, r, i, a, o, s) {
	let c = [], l = [s.maxRandomnessOffset || 1, (s.maxRandomnessOffset || 1) + .3], u = [0, 0], d = s.disableMultiStroke ? 1 : 2, f = s.preserveVertices;
	for (let p = 0; p < d; p++) p === 0 ? c.push({
		op: "move",
		data: [o[0], o[1]]
	}) : c.push({
		op: "move",
		data: [o[0] + (f ? 0 : z(l[0], s)), o[1] + (f ? 0 : z(l[0], s))]
	}), u = f ? [i, a] : [i + z(l[p], s), a + z(l[p], s)], c.push({
		op: "bcurveTo",
		data: [
			e + z(l[p], s),
			t + z(l[p], s),
			n + z(l[p], s),
			r + z(l[p], s),
			u[0],
			u[1]
		]
	});
	return c;
}
//#endregion
//#region ../../node_modules/roughjs/node_modules/points-on-curve/lib/curve-to-bezier.js
function Xr(e) {
	return [...e];
}
function Zr(e, t = 0) {
	let n = e.length;
	if (n < 3) throw Error("A curve must have at least three points.");
	let r = [];
	if (n === 3) r.push(Xr(e[0]), Xr(e[1]), Xr(e[2]), Xr(e[2]));
	else {
		let n = [];
		n.push(e[0], e[0]);
		for (let t = 1; t < e.length; t++) n.push(e[t]), t === e.length - 1 && n.push(e[t]);
		let i = [], a = 1 - t;
		r.push(Xr(n[0]));
		for (let e = 1; e + 2 < n.length; e++) {
			let t = n[e];
			i[0] = [t[0], t[1]], i[1] = [t[0] + (a * n[e + 1][0] - a * n[e - 1][0]) / 6, t[1] + (a * n[e + 1][1] - a * n[e - 1][1]) / 6], i[2] = [n[e + 1][0] + (a * n[e][0] - a * n[e + 2][0]) / 6, n[e + 1][1] + (a * n[e][1] - a * n[e + 2][1]) / 6], i[3] = [n[e + 1][0], n[e + 1][1]], r.push(i[1], i[2], i[3]);
		}
	}
	return r;
}
//#endregion
//#region ../../node_modules/roughjs/node_modules/points-on-curve/lib/index.js
function Qr(e, t) {
	return Math.sqrt($r(e, t));
}
function $r(e, t) {
	return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2;
}
function ei(e, t, n) {
	let r = $r(t, n);
	if (r === 0) return $r(e, t);
	let i = ((e[0] - t[0]) * (n[0] - t[0]) + (e[1] - t[1]) * (n[1] - t[1])) / r;
	return i = Math.max(0, Math.min(1, i)), $r(e, ti(t, n, i));
}
function ti(e, t, n) {
	return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
}
function ni(e, t) {
	let n = e[t + 0], r = e[t + 1], i = e[t + 2], a = e[t + 3], o = 3 * r[0] - 2 * n[0] - a[0];
	o *= o;
	let s = 3 * r[1] - 2 * n[1] - a[1];
	s *= s;
	let c = 3 * i[0] - 2 * a[0] - n[0];
	c *= c;
	let l = 3 * i[1] - 2 * a[1] - n[1];
	return l *= l, o < c && (o = c), s < l && (s = l), o + s;
}
function ri(e, t, n, r) {
	let i = r || [];
	if (ni(e, t) < n) {
		let n = e[t + 0];
		i.length ? Qr(i[i.length - 1], n) > 1 && i.push(n) : i.push(n), i.push(e[t + 3]);
	} else {
		let r = .5, a = e[t + 0], o = e[t + 1], s = e[t + 2], c = e[t + 3], l = ti(a, o, r), u = ti(o, s, r), d = ti(s, c, r), f = ti(l, u, r), p = ti(u, d, r), m = ti(f, p, r);
		ri([
			a,
			l,
			f,
			m
		], 0, n, i), ri([
			m,
			p,
			d,
			c
		], 0, n, i);
	}
	return i;
}
function ii(e, t, n, r, i) {
	let a = i || [], o = e[t], s = e[n - 1], c = 0, l = 1;
	for (let r = t + 1; r < n - 1; ++r) {
		let t = ei(e[r], o, s);
		t > c && (c = t, l = r);
	}
	return Math.sqrt(c) > r ? (ii(e, t, l + 1, r, a), ii(e, l, n, r, a)) : (a.length || a.push(o), a.push(s)), a;
}
function ai(e, t = .15, n) {
	let r = [], i = (e.length - 1) / 3;
	for (let n = 0; n < i; n++) ri(e, n * 3, t, r);
	return n && n > 0 ? ii(r, 0, r.length, n) : r;
}
//#endregion
//#region ../../node_modules/points-on-path/node_modules/points-on-curve/lib/index.js
function oi(e, t) {
	return Math.sqrt(si(e, t));
}
function si(e, t) {
	return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2;
}
function ci(e, t, n) {
	let r = si(t, n);
	if (r === 0) return si(e, t);
	let i = ((e[0] - t[0]) * (n[0] - t[0]) + (e[1] - t[1]) * (n[1] - t[1])) / r;
	return i = Math.max(0, Math.min(1, i)), si(e, li(t, n, i));
}
function li(e, t, n) {
	return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
}
function ui(e, t) {
	let n = e[t + 0], r = e[t + 1], i = e[t + 2], a = e[t + 3], o = 3 * r[0] - 2 * n[0] - a[0];
	o *= o;
	let s = 3 * r[1] - 2 * n[1] - a[1];
	s *= s;
	let c = 3 * i[0] - 2 * a[0] - n[0];
	c *= c;
	let l = 3 * i[1] - 2 * a[1] - n[1];
	return l *= l, o < c && (o = c), s < l && (s = l), o + s;
}
function di(e, t, n, r) {
	let i = r || [];
	if (ui(e, t) < n) {
		let n = e[t + 0];
		i.length ? oi(i[i.length - 1], n) > 1 && i.push(n) : i.push(n), i.push(e[t + 3]);
	} else {
		let r = .5, a = e[t + 0], o = e[t + 1], s = e[t + 2], c = e[t + 3], l = li(a, o, r), u = li(o, s, r), d = li(s, c, r), f = li(l, u, r), p = li(u, d, r), m = li(f, p, r);
		di([
			a,
			l,
			f,
			m
		], 0, n, i), di([
			m,
			p,
			d,
			c
		], 0, n, i);
	}
	return i;
}
function fi(e, t) {
	return pi(e, 0, e.length, t);
}
function pi(e, t, n, r, i) {
	let a = i || [], o = e[t], s = e[n - 1], c = 0, l = 1;
	for (let r = t + 1; r < n - 1; ++r) {
		let t = ci(e[r], o, s);
		t > c && (c = t, l = r);
	}
	return Math.sqrt(c) > r ? (pi(e, t, l + 1, r, a), pi(e, l, n, r, a)) : (a.length || a.push(o), a.push(s)), a;
}
function mi(e, t = .15, n) {
	let r = [], i = (e.length - 1) / 3;
	for (let n = 0; n < i; n++) di(e, n * 3, t, r);
	return n && n > 0 ? pi(r, 0, r.length, n) : r;
}
//#endregion
//#region ../../node_modules/points-on-path/lib/index.js
function hi(e, t, n) {
	let r = yr(vr(_r(e))), i = [], a = [], o = [0, 0], s = [], c = () => {
		s.length >= 4 && a.push(...mi(s, t)), s = [];
	}, l = () => {
		c(), a.length && (i.push(a), a = []);
	};
	for (let { key: e, data: t } of r) switch (e) {
		case "M":
			l(), o = [t[0], t[1]], a.push(o);
			break;
		case "L":
			c(), a.push([t[0], t[1]]);
			break;
		case "C":
			if (!s.length) {
				let e = a.length ? a[a.length - 1] : o;
				s.push([e[0], e[1]]);
			}
			s.push([t[0], t[1]]), s.push([t[2], t[3]]), s.push([t[4], t[5]]);
			break;
		case "Z":
			c(), a.push([o[0], o[1]]);
			break;
	}
	if (l(), !n) return i;
	let u = [];
	for (let e of i) {
		let t = fi(e, n);
		t.length && u.push(t);
	}
	return u;
}
//#endregion
//#region ../../node_modules/roughjs/bin/generator.js
var B = "none", gi = class {
	constructor(e) {
		this.defaultOptions = {
			maxRandomnessOffset: 2,
			roughness: 1,
			bowing: 1,
			stroke: "#000",
			strokeWidth: 1,
			curveTightness: 0,
			curveFitting: .95,
			curveStepCount: 9,
			fillStyle: "hachure",
			fillWeight: -1,
			hachureAngle: -41,
			hachureGap: -1,
			dashOffset: -1,
			dashGap: -1,
			zigzagOffset: -1,
			seed: 0,
			disableMultiStroke: !1,
			disableMultiStrokeFill: !1,
			preserveVertices: !1,
			fillShapeRoughnessGain: .8
		}, this.config = e || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
	}
	static newSeed() {
		return lr();
	}
	_o(e) {
		return e ? Object.assign({}, this.defaultOptions, e) : this.defaultOptions;
	}
	_d(e, t, n) {
		return {
			shape: e,
			sets: t || [],
			options: n || this.defaultOptions
		};
	}
	line(e, t, n, r, i) {
		let a = this._o(i);
		return this._d("line", [wr(e, t, n, r, a)], a);
	}
	rectangle(e, t, n, r, i) {
		let a = this._o(i), o = [], s = Dr(e, t, n, r, a);
		if (a.fill) {
			let i = [
				[e, t],
				[e + n, t],
				[e + n, t + r],
				[e, t + r]
			];
			a.fillStyle === "solid" ? o.push(Pr([i], a)) : o.push(Fr([i], a));
		}
		return a.stroke !== B && o.push(s), this._d("rectangle", o, a);
	}
	ellipse(e, t, n, r, i) {
		let a = this._o(i), o = [], s = Ar(n, r, a), c = jr(e, t, a, s);
		if (a.fill) if (a.fillStyle === "solid") {
			let n = jr(e, t, a, s).opset;
			n.type = "fillPath", o.push(n);
		} else o.push(Fr([c.estimatedPoints], a));
		return a.stroke !== B && o.push(c.opset), this._d("ellipse", o, a);
	}
	circle(e, t, n, r) {
		let i = this.ellipse(e, t, n, n, r);
		return i.shape = "circle", i;
	}
	linearPath(e, t) {
		let n = this._o(t);
		return this._d("linearPath", [Tr(e, !1, n)], n);
	}
	arc(e, t, n, r, i, a, o = !1, s) {
		let c = this._o(s), l = [], u = Mr(e, t, n, r, i, a, o, !0, c);
		if (o && c.fill) if (c.fillStyle === "solid") {
			let o = Object.assign({}, c);
			o.disableMultiStroke = !0;
			let s = Mr(e, t, n, r, i, a, !0, !1, o);
			s.type = "fillPath", l.push(s);
		} else l.push(Ir(e, t, n, r, i, a, c));
		return c.stroke !== B && l.push(u), this._d("arc", l, c);
	}
	curve(e, t) {
		let n = this._o(t), r = [], i = Or(e, n);
		if (n.fill && n.fill !== B) if (n.fillStyle === "solid") {
			let t = Or(e, Object.assign(Object.assign({}, n), {
				disableMultiStroke: !0,
				roughness: n.roughness ? n.roughness + n.fillShapeRoughnessGain : 0
			}));
			r.push({
				type: "fillPath",
				ops: this._mergedShape(t.ops)
			});
		} else {
			let t = [], i = e;
			if (i.length) {
				let e = typeof i[0][0] == "number" ? [i] : i;
				for (let r of e) r.length < 3 ? t.push(...r) : r.length === 3 ? t.push(...ai(Zr([
					r[0],
					r[0],
					r[1],
					r[2]
				]), 10, (1 + n.roughness) / 2)) : t.push(...ai(Zr(r), 10, (1 + n.roughness) / 2));
			}
			t.length && r.push(Fr([t], n));
		}
		return n.stroke !== B && r.push(i), this._d("curve", r, n);
	}
	polygon(e, t) {
		let n = this._o(t), r = [], i = Tr(e, !0, n);
		return n.fill && (n.fillStyle === "solid" ? r.push(Pr([e], n)) : r.push(Fr([e], n))), n.stroke !== B && r.push(i), this._d("polygon", r, n);
	}
	path(e, t) {
		let n = this._o(t), r = [];
		if (!e) return this._d("path", r, n);
		e = (e || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
		let i = n.fill && n.fill !== "transparent" && n.fill !== B, a = n.stroke !== B, o = !!(n.simplification && n.simplification < 1), s = o ? 4 - 4 * (n.simplification || 1) : (1 + n.roughness) / 2, c = hi(e, 1, s), l = Nr(e, n);
		if (i) if (n.fillStyle === "solid") if (c.length === 1) {
			let t = Nr(e, Object.assign(Object.assign({}, n), {
				disableMultiStroke: !0,
				roughness: n.roughness ? n.roughness + n.fillShapeRoughnessGain : 0
			}));
			r.push({
				type: "fillPath",
				ops: this._mergedShape(t.ops)
			});
		} else r.push(Pr(c, n));
		else r.push(Fr(c, n));
		return a && (o ? c.forEach((e) => {
			r.push(Tr(e, !1, n));
		}) : r.push(l)), this._d("path", r, n);
	}
	opsToPath(e, t) {
		let n = "";
		for (let r of e.ops) {
			let e = typeof t == "number" && t >= 0 ? r.data.map((e) => +e.toFixed(t)) : r.data;
			switch (r.op) {
				case "move":
					n += `M${e[0]} ${e[1]} `;
					break;
				case "bcurveTo":
					n += `C${e[0]} ${e[1]}, ${e[2]} ${e[3]}, ${e[4]} ${e[5]} `;
					break;
				case "lineTo":
					n += `L${e[0]} ${e[1]} `;
					break;
			}
		}
		return n.trim();
	}
	toPaths(e) {
		let t = e.sets || [], n = e.options || this.defaultOptions, r = [];
		for (let e of t) {
			let t = null;
			switch (e.type) {
				case "path":
					t = {
						d: this.opsToPath(e),
						stroke: n.stroke,
						strokeWidth: n.strokeWidth,
						fill: B
					};
					break;
				case "fillPath":
					t = {
						d: this.opsToPath(e),
						stroke: B,
						strokeWidth: 0,
						fill: n.fill || B
					};
					break;
				case "fillSketch":
					t = this.fillSketch(e, n);
					break;
			}
			t && r.push(t);
		}
		return r;
	}
	fillSketch(e, t) {
		let n = t.fillWeight;
		return n < 0 && (n = t.strokeWidth / 2), {
			d: this.opsToPath(e),
			stroke: t.fill || B,
			strokeWidth: n,
			fill: B
		};
	}
	_mergedShape(e) {
		return e.filter((e, t) => t === 0 ? !0 : e.op !== "move");
	}
}, _i = class {
	constructor(e, t) {
		this.canvas = e, this.ctx = this.canvas.getContext("2d"), this.gen = new gi(t);
	}
	draw(e) {
		let t = e.sets || [], n = e.options || this.getDefaultOptions(), r = this.ctx, i = e.options.fixedDecimalPlaceDigits;
		for (let a of t) switch (a.type) {
			case "path":
				r.save(), r.strokeStyle = n.stroke === "none" ? "transparent" : n.stroke, r.lineWidth = n.strokeWidth, n.strokeLineDash && r.setLineDash(n.strokeLineDash), n.strokeLineDashOffset && (r.lineDashOffset = n.strokeLineDashOffset), this._drawToContext(r, a, i), r.restore();
				break;
			case "fillPath": {
				r.save(), r.fillStyle = n.fill || "";
				let t = e.shape === "curve" || e.shape === "polygon" || e.shape === "path" ? "evenodd" : "nonzero";
				this._drawToContext(r, a, i, t), r.restore();
				break;
			}
			case "fillSketch":
				this.fillSketch(r, a, n);
				break;
		}
	}
	fillSketch(e, t, n) {
		let r = n.fillWeight;
		r < 0 && (r = n.strokeWidth / 2), e.save(), n.fillLineDash && e.setLineDash(n.fillLineDash), n.fillLineDashOffset && (e.lineDashOffset = n.fillLineDashOffset), e.strokeStyle = n.fill || "", e.lineWidth = r, this._drawToContext(e, t, n.fixedDecimalPlaceDigits), e.restore();
	}
	_drawToContext(e, t, n, r = "nonzero") {
		e.beginPath();
		for (let r of t.ops) {
			let t = typeof n == "number" && n >= 0 ? r.data.map((e) => +e.toFixed(n)) : r.data;
			switch (r.op) {
				case "move":
					e.moveTo(t[0], t[1]);
					break;
				case "bcurveTo":
					e.bezierCurveTo(t[0], t[1], t[2], t[3], t[4], t[5]);
					break;
				case "lineTo":
					e.lineTo(t[0], t[1]);
					break;
			}
		}
		t.type === "fillPath" ? e.fill(r) : e.stroke();
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	line(e, t, n, r, i) {
		let a = this.gen.line(e, t, n, r, i);
		return this.draw(a), a;
	}
	rectangle(e, t, n, r, i) {
		let a = this.gen.rectangle(e, t, n, r, i);
		return this.draw(a), a;
	}
	ellipse(e, t, n, r, i) {
		let a = this.gen.ellipse(e, t, n, r, i);
		return this.draw(a), a;
	}
	circle(e, t, n, r) {
		let i = this.gen.circle(e, t, n, r);
		return this.draw(i), i;
	}
	linearPath(e, t) {
		let n = this.gen.linearPath(e, t);
		return this.draw(n), n;
	}
	polygon(e, t) {
		let n = this.gen.polygon(e, t);
		return this.draw(n), n;
	}
	arc(e, t, n, r, i, a, o = !1, s) {
		let c = this.gen.arc(e, t, n, r, i, a, o, s);
		return this.draw(c), c;
	}
	curve(e, t) {
		let n = this.gen.curve(e, t);
		return this.draw(n), n;
	}
	path(e, t) {
		let n = this.gen.path(e, t);
		return this.draw(n), n;
	}
}, vi = "http://www.w3.org/2000/svg", yi = class {
	constructor(e, t) {
		this.svg = e, this.gen = new gi(t);
	}
	draw(e) {
		let t = e.sets || [], n = e.options || this.getDefaultOptions(), r = this.svg.ownerDocument || window.document, i = r.createElementNS(vi, "g"), a = e.options.fixedDecimalPlaceDigits;
		for (let o of t) {
			let t = null;
			switch (o.type) {
				case "path":
					t = r.createElementNS(vi, "path"), t.setAttribute("d", this.opsToPath(o, a)), t.setAttribute("stroke", n.stroke), t.setAttribute("stroke-width", n.strokeWidth + ""), t.setAttribute("fill", "none"), n.strokeLineDash && t.setAttribute("stroke-dasharray", n.strokeLineDash.join(" ").trim()), n.strokeLineDashOffset && t.setAttribute("stroke-dashoffset", `${n.strokeLineDashOffset}`);
					break;
				case "fillPath":
					t = r.createElementNS(vi, "path"), t.setAttribute("d", this.opsToPath(o, a)), t.setAttribute("stroke", "none"), t.setAttribute("stroke-width", "0"), t.setAttribute("fill", n.fill || ""), (e.shape === "curve" || e.shape === "polygon") && t.setAttribute("fill-rule", "evenodd");
					break;
				case "fillSketch":
					t = this.fillSketch(r, o, n);
					break;
			}
			t && i.appendChild(t);
		}
		return i;
	}
	fillSketch(e, t, n) {
		let r = n.fillWeight;
		r < 0 && (r = n.strokeWidth / 2);
		let i = e.createElementNS(vi, "path");
		return i.setAttribute("d", this.opsToPath(t, n.fixedDecimalPlaceDigits)), i.setAttribute("stroke", n.fill || ""), i.setAttribute("stroke-width", r + ""), i.setAttribute("fill", "none"), n.fillLineDash && i.setAttribute("stroke-dasharray", n.fillLineDash.join(" ").trim()), n.fillLineDashOffset && i.setAttribute("stroke-dashoffset", `${n.fillLineDashOffset}`), i;
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	opsToPath(e, t) {
		return this.gen.opsToPath(e, t);
	}
	line(e, t, n, r, i) {
		let a = this.gen.line(e, t, n, r, i);
		return this.draw(a);
	}
	rectangle(e, t, n, r, i) {
		let a = this.gen.rectangle(e, t, n, r, i);
		return this.draw(a);
	}
	ellipse(e, t, n, r, i) {
		let a = this.gen.ellipse(e, t, n, r, i);
		return this.draw(a);
	}
	circle(e, t, n, r) {
		let i = this.gen.circle(e, t, n, r);
		return this.draw(i);
	}
	linearPath(e, t) {
		let n = this.gen.linearPath(e, t);
		return this.draw(n);
	}
	polygon(e, t) {
		let n = this.gen.polygon(e, t);
		return this.draw(n);
	}
	arc(e, t, n, r, i, a, o = !1, s) {
		let c = this.gen.arc(e, t, n, r, i, a, o, s);
		return this.draw(c);
	}
	curve(e, t) {
		let n = this.gen.curve(e, t);
		return this.draw(n);
	}
	path(e, t) {
		let n = this.gen.path(e, t);
		return this.draw(n);
	}
}, bi = {
	canvas(e, t) {
		return new _i(e, t);
	},
	svg(e, t) {
		return new yi(e, t);
	},
	generator(e) {
		return new gi(e);
	},
	newSeed() {
		return gi.newSeed();
	}
}, xi = function(e) {
	return typeof e == "function";
}, Si = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";
//#endregion
//#region ../../node_modules/ahooks/es/utils/depsAreSame.js
function Ci(e, t) {
	if (e === t) return !0;
	for (var n = 0; n < e.length; n++) if (!Object.is(e[n], t[n])) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/ahooks/es/useLatest/index.js
function wi(e) {
	var t = O(e);
	return t.current = e, t;
}
//#endregion
//#region ../../node_modules/ahooks/es/useUnmount/index.js
var Ti = function(e) {
	Si && (xi(e) || console.error(`useUnmount expected parameter is a function, got ${typeof e}`));
	var t = wi(e);
	D(function() {
		return function() {
			t.current();
		};
	}, []);
}, Ei = !!(typeof window < "u" && window.document && window.document.createElement);
//#endregion
//#region ../../node_modules/ahooks/es/utils/domTarget.js
function Di(e, t) {
	if (Ei) return e ? xi(e) ? e() : "current" in e ? e.current : e : t;
}
//#endregion
//#region ../../node_modules/ahooks/es/utils/useEffectWithTarget.js
var Oi = function(e) {
	return function(t, n, r) {
		var i = O(!1), a = O([]), o = O([]), s = O(void 0);
		e(function() {
			var e, c = (Array.isArray(r) ? r : [r]).map(function(e) {
				return Di(e);
			});
			if (!i.current) {
				i.current = !0, a.current = c, o.current = n, s.current = t();
				return;
			}
			(c.length !== a.current.length || !Ci(a.current, c) || !Ci(o.current, n)) && ((e = s.current) == null || e.call(s), a.current = c, o.current = n, s.current = t());
		}), Ti(function() {
			var e;
			(e = s.current) == null || e.call(s), i.current = !1;
		});
	};
}(D);
//#endregion
//#region ../../node_modules/ahooks/es/useEventListener/index.js
function V(e, t, n) {
	n === void 0 && (n = {});
	var r = n.enable, i = r === void 0 ? !0 : r, a = wi(t);
	Oi(function() {
		if (i) {
			var t = Di(n.target, window);
			if (t?.addEventListener) {
				var r = function(e) {
					return a.current(e);
				}, o = Array.isArray(e) ? e : [e];
				return o.forEach(function(e) {
					t.addEventListener(e, r, {
						capture: n.capture,
						once: n.once,
						passive: n.passive
					});
				}), function() {
					o.forEach(function(e) {
						t.removeEventListener(e, r, { capture: n.capture });
					});
				};
			}
		}
	}, [
		e,
		n.capture,
		n.once,
		n.passive,
		i
	], n.target);
}
//#endregion
//#region ../react-board/src/hooks/use-plugin-event.tsx
var ki = (e, t, n) => {
	V("pointerdown", (t) => {
		e.pointerDown(t);
	}, { target: n }), V("pointermove", (t) => {
		s.set(e, [t.x, t.y]), e.pointerMove(t);
	}, { target: t }), V("pointerleave", (t) => {
		s.delete(e), e.pointerLeave(t);
	}, { target: t }), V("pointerup", (t) => {
		e.pointerUp(t);
	}, { target: t }), V("touchstart", (t) => {
		e.touchStart(t);
	}, { target: t }), V("touchmove", (t) => {
		e.touchMove(t);
	}, { target: t }), V("touchend", (t) => {
		e.touchEnd(t);
	}, { target: t }), V("dblclick", (t) => {
		C.isFocus(e) && !C.hasBeenTextEditing(e) && e.dblClick(t);
	}, { target: n }), V("pointermove", (t) => {
		o.set(e, [t.x, t.y]), e.globalPointerMove(t);
	}), V("pointerup", (t) => {
		e.globalPointerUp(t);
	}), V("keydown", (t) => {
		e.globalKeyDown(t), C.isFocus(e) && !C.hasBeenTextEditing(e) && !Te(t.target) && e.keyDown(t);
	}), V("keyup", (t) => {
		C.isFocus(e) && !C.hasBeenTextEditing(e) && e?.keyUp(t);
	}), V("copy", (t) => {
		C.isFocus(e) && !C.hasBeenTextEditing(e) && (t.preventDefault(), Be(e, de.copy, t.clipboardData));
	}), V("paste", async (t) => {
		if (C.isFocus(e) && !C.isReadonly(e) && !C.hasBeenTextEditing(e)) {
			let n = C.getMovingPointInBoard(e);
			if (n) {
				let r = Xe(e, Ge(e, n[0], n[1])), i = await ye(t.clipboardData);
				e.insertFragment(i, r, de.paste);
			}
		}
	}), V("cut", (t) => {
		C.isFocus(e) && !C.isReadonly(e) && !C.hasBeenTextEditing(e) && (t.preventDefault(), Be(e, de.cut, t.clipboardData), ge(e));
	}), V("drop", (t) => {
		C.isReadonly(e) || (t.preventDefault(), e.drop(t));
	}, { target: t }), V("dragover", (e) => {
		e.preventDefault();
	}, { target: t });
}, Ai = (e, t) => {
	V("scroll", (t) => {
		if (Me(e)) He(e, !1);
		else {
			let { scrollLeft: n, scrollTop: r } = t.target;
			Qe(e, n, r);
		}
	}, { target: t }), V("contextmenu", (e) => {
		e.preventDefault();
	}, { target: t }), V("wheel", (t) => {
		if (t.metaKey || t.ctrlKey) {
			t.preventDefault();
			let { deltaY: n } = t, r = e.viewport.zoom, i = Math.sign(n), a = pe * 100, o = Math.abs(n), s = n;
			o > a && (s = a * i);
			let c = r - s / 100;
			c += Math.log10(Math.max(1, r)) * -i * Math.min(1, o / 20), u.updateZoom(e, c, C.getMovingPointInBoard(e));
		}
	}, {
		target: t,
		passive: !1
	});
	let n = O(!1);
	D(() => {
		let t = new ResizeObserver(() => {
			if (!n.current) {
				n.current = !0;
				return;
			}
			Oe(e), De(e), $e(e);
		});
		return t.observe(C.getBoardContainer(e)), () => {
			t.disconnect();
		};
	}, []);
}, ji = ut(null), H = () => {
	let e = pt(ji);
	if (!e) throw Error("The `useBoard` hook must be used inside the <Plait> component's context.");
	let { board: t } = e;
	return t;
}, Mi = () => {
	let e = pt(ji);
	if (!e) throw Error("The `useBoard` hook must be used inside the <Plait> component's context.");
	let { listRender: t } = e;
	return t;
}, Ni = ({ style: e, className: t, children: o, afterInit: s }) => {
	let u = O(null), d = O(null), f = O(null), p = O(null), h = O(null), _ = O(null), v = O(null), y = O(null), b = H(), x = Mi();
	return D(() => {
		let e = bi.svg(u.current, { options: {
			roughness: 0,
			strokeWidth: 1
		} });
		l.set(b, e), a.set(b, u.current), g.set(b, !0), i.set(b, {
			lowerHost: d.current,
			host: f.current,
			upperHost: p.current,
			topHost: h.current,
			activeHost: _.current,
			container: y.current,
			viewportContainer: v.current
		});
		let t = new ie();
		return r.set(b, t), S.set(b, /* @__PURE__ */ new Map()), x.initialized || (x.initialize(b.children, {
			board: b,
			parent: b,
			parentG: C.getElementHost(b)
		}), s && s(b)), Oe(b), De(b), ke(b), () => {
			r.delete(b), n.delete(b), c.delete(b), i.delete(b), g.delete(b), a.delete(b), l.delete(b), S.delete(b);
		};
	}, []), ki(b, v, u), Ai(b, v), /* @__PURE__ */ M("div", {
		className: A(t, m, `${Pi()}`, `theme-${b.theme?.themeColorMode}`, `pointer-${b.pointer}`, {
			focused: C.isFocus(b),
			readonly: C.isReadonly(b),
			"disabled-scroll": b.options?.disabledScrollOnNonFocus && !C.isFocus(b)
		}),
		ref: y,
		style: e,
		children: /* @__PURE__ */ N("div", {
			className: "viewport-container",
			ref: v,
			style: {
				width: "100%",
				height: "100%",
				overflow: "auto"
			},
			children: [
				/* @__PURE__ */ N("svg", {
					ref: u,
					width: "100%",
					height: "100%",
					style: { position: "relative" },
					className: "board-host-svg",
					children: [
						/* @__PURE__ */ M("g", {
							className: "element-lower-host",
							ref: d
						}),
						/* @__PURE__ */ M("g", {
							className: "element-host",
							ref: f
						}),
						/* @__PURE__ */ M("g", {
							className: "element-upper-host",
							ref: p
						}),
						/* @__PURE__ */ M("g", {
							className: "element-top-host",
							ref: h
						})
					]
				}),
				/* @__PURE__ */ M("svg", {
					width: "100%",
					height: "100%",
					className: "board-active-svg",
					children: /* @__PURE__ */ M("g", {
						className: "active-host-g",
						ref: _
					})
				}),
				o
			]
		})
	});
}, Pi = () => x ? "safari" : _ ? "chrome" : v ? "firefox" : "", Fi = (/* @__PURE__ */ Jn(((e) => {
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
			return c(e, t);
		}), i = function(e) {
			return r.some(function(t) {
				return l(t, e);
			});
		};
		return n == null ? i : i(n);
	}
	function s(e, t) {
		return o(e, { byKey: !0 }, t);
	}
	function c(e, t) {
		var a = t && t.byKey, o = {};
		e = e.replace("++", "+add");
		var s = e.split("+"), c = s.length;
		for (var l in n) o[n[l]] = !1;
		var f = !0, p = !1, m = void 0;
		try {
			for (var h = s[Symbol.iterator](), g; !(f = (g = h.next()).done); f = !0) {
				var _ = g.value, v = _.endsWith("?") && _.length > 1;
				v && (_ = _.slice(0, -1));
				var y = d(_), b = n[y];
				if (_.length > 1 && !b && !r[_] && !i[y]) throw TypeError("Unknown modifier: \"" + _ + "\"");
				(c === 1 || !b) && (a ? o.key = y : o.which = u(_)), b && (o[b] = v ? null : !0);
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
	function l(e, t) {
		for (var n in e) {
			var r = e[n], i = void 0;
			if (r != null && (i = n === "key" && t.key != null ? t.key.toLowerCase() : n === "which" ? r === 91 && t.which === 93 ? 91 : t.which : t[n], !(i == null && r === !1) && i !== r)) return !1;
		}
		return !0;
	}
	function u(e) {
		return e = d(e), i[e] || e.toUpperCase().charCodeAt(0);
	}
	function d(e) {
		return e = e.toLowerCase(), e = r[e] || e, e;
	}
	e.isHotkey = o, e.isKeyHotkey = s;
})))(), Ii = (e) => {
	let t = e, { insertData: n } = t;
	return t.insertBreak = () => {
		e.insertText("\n");
	}, t.insertSoftBreak = () => {
		e.insertText("\n");
	}, t.insertData = (e) => {
		let r = e.getData("text/plain");
		if (!e.getData("application/x-slate-fragment") && r) {
			r.endsWith("\n") && (r = r.substring(0, r.length - 1)), r = r.trim().replace(/\t+/g, " "), t.insertText(r);
			return;
		}
		n(e);
	}, t;
}, Li = () => /* @__PURE__ */ M("span", {
	contentEditable: !1,
	style: { fontSize: 0 },
	children: String.fromCodePoint(160)
}), Ri = ({ attributes: e, children: t, element: n }) => /* @__PURE__ */ N("a", {
	...e,
	style: {
		textDecoration: "none",
		cursor: "inherit"
	},
	"data-url": n.url,
	className: "plait-board-link",
	children: [
		/* @__PURE__ */ M(Li, {}),
		t,
		/* @__PURE__ */ M(Li, {})
	]
}), zi = (e) => {
	let { insertData: t, insertText: n, isInline: r } = e;
	return e.isInline = (e) => e.type && ["link"].includes(e.type) || r(e), e.insertText = (t) => {
		t && kt(t) ? Et.wrapLink(e, t, t) : n(t);
	}, e.insertData = (n) => {
		let r = n.getData("text/plain");
		r && kt(r) ? Et.wrapLink(e, r, r) : t(n);
	}, e;
}, Bi = (e) => {
	let { text: t, readonly: n, onChange: r, onComposition: i, afterInit: a } = e, o = ft((e) => /* @__PURE__ */ M(Ui, { ...e }), []), s = [t], [c] = k(() => {
		let e = zi(Ii(wt(Ct(yt()))));
		return a?.(e), e;
	});
	return D(() => {
		t !== c.children[0] && (c.children = [t], c.onChange());
	}, [t, c]), /* @__PURE__ */ M(St, {
		editor: c,
		initialValue: s,
		onChange: (e) => {
			r?.({
				newText: c.children[0],
				operations: c.operations
			});
		},
		children: /* @__PURE__ */ M(bt, {
			className: "slate-editable-container plait-text-container",
			renderElement: (e) => /* @__PURE__ */ M(Vi, { ...e }),
			renderLeaf: o,
			readOnly: n === void 0 ? !0 : n,
			onCompositionStart: (e) => {
				i && i(e);
			},
			onCompositionUpdate: (e) => {
				i && i(e);
			},
			onCompositionEnd: (e) => {
				i && i(e);
			},
			onKeyDown: (e) => {
				let { selection: t } = c;
				if (t && _t.isCollapsed(t)) {
					let { nativeEvent: t } = e;
					if ((0, Fi.isKeyHotkey)("left", t)) {
						e.preventDefault(), vt.move(c, {
							unit: "offset",
							reverse: !0
						});
						return;
					}
					if ((0, Fi.isKeyHotkey)("right", t)) {
						e.preventDefault(), vt.move(c, { unit: "offset" });
						return;
					}
				}
			}
		})
	});
}, Vi = (e) => {
	let { element: t } = e;
	switch (t.type) {
		case "link": return /* @__PURE__ */ M(Ri, { ...e });
		default: return /* @__PURE__ */ M(Hi, { ...e });
	}
}, Hi = ({ attributes: e, children: t, element: n }) => /* @__PURE__ */ M("div", {
	style: { textAlign: n.align },
	...e,
	children: t
}), Ui = ({ children: e, leaf: t, attributes: n }) => {
	t.bold && (e = /* @__PURE__ */ M("strong", { children: e })), t.code && (e = /* @__PURE__ */ M("code", { children: e })), t.italic && (e = /* @__PURE__ */ M("em", { children: e })), t.underlined && (e = /* @__PURE__ */ M("u", { children: e }));
	let r = t["font-size"];
	return /* @__PURE__ */ M("span", {
		style: { color: t.color },
		...n,
		"plait-font-size": r,
		children: e
	});
}, Wi = (e) => {
	let t = e;
	return t.renderText = (e, t) => {
		let n = gt(e), r, i = /* @__PURE__ */ M(Bi, {
			...t,
			afterInit: (e) => {
				r = e, t.afterInit?.(e);
			}
		});
		n.render(i);
		let a = { ...t };
		return {
			destroy: () => {
				setTimeout(() => {
					n.unmount();
				}, 0);
			},
			update: (e) => {
				if (!(e && a && !Object.keys(e).every((t) => e[t] === a[t]))) return;
				let t = xt.isReadOnly(r);
				a = {
					...a,
					...e
				}, n.render(/* @__PURE__ */ M(Bi, { ...a })), t === !0 && a.readonly === !1 ? setTimeout(() => {
					xt.focus(r);
				}, 100) : t === !1 && a.readonly === !0 && (xt.blur(r), xt.deselect(r));
			}
		};
	}, t;
}, Gi = /* @__PURE__ */ new WeakMap(), Ki = (e) => Gi.get(e)?.length === 2, qi = (e) => {
	let { touchStart: t, touchMove: n, touchEnd: r } = e, i = [], a = !1;
	return e.touchStart = (n) => {
		i = Array.from(n.touches).map((e) => ({
			pointerId: e.identifier,
			lastPoint: [e.clientX, e.clientY],
			currentPoint: [e.clientX, e.clientY],
			hasMoved: !1
		})), Gi.set(e, i), t(n);
	}, e.touchMove = (t) => {
		if (Array.from(t.changedTouches).forEach((e) => {
			let t = i.find((t) => t.pointerId === e.identifier);
			t && (t.lastPoint = t.currentPoint, t.currentPoint = [e.clientX, e.clientY], t.hasMoved = !0);
		}), i.length === 2 && t.preventDefault(), i.length === 2 && i.every((e) => e.hasMoved)) {
			let [t, n] = i, r = xe(...t.lastPoint, ...n.lastPoint), o = xe(...t.currentPoint, ...n.currentPoint), s = o[0] - r[0], c = o[1] - r[1], l = C.getBoardContainer(e).getBoundingClientRect(), d = l.width / 2, f = l.height / 2, p = e.viewport.zoom, m = we(e), h = m[0] + d / p - s / p, g = m[1] + f / p - c / p, _ = [h - l.width / 2 / p, g - l.height / 2 / p], v = p, y = _e(...t.lastPoint, ...n.lastPoint), b = _e(...t.currentPoint, ...n.currentPoint) / y, x = [t.currentPoint[0] - t.lastPoint[0], t.currentPoint[1] - t.lastPoint[1]], S = [n.currentPoint[0] - n.lastPoint[0], n.currentPoint[1] - n.lastPoint[1]], ee = (x[0] * S[0] + x[1] * S[1]) / (Math.sqrt(x[0] * x[0] + x[1] * x[1]) * Math.sqrt(S[0] * S[0] + S[1] * S[1]) || 1);
			if (a = !!(ee < -.7 || ee <= .8 && a && b >= .01), a) {
				v = Math.min(Math.max(e.viewport.zoom * b, re), te);
				let t = C.getBoardContainer(e).getBoundingClientRect(), n = o[0] - t.x, r = o[1] - t.y;
				h = _[0] + n / p, g = _[1] + r / p, _ = [h - n / v, g - r / v];
			}
			u.updateViewport(e, _, v), i[0].lastPoint = t.currentPoint, i[1].lastPoint = n.currentPoint, i[0].hasMoved = !1, i[1].hasMoved = !1;
			return;
		}
		n(t);
	}, e.touchEnd = (t) => {
		let n = i.findIndex((e) => e.pointerId === t.changedTouches[0].identifier);
		n !== -1 && i.splice(n, 1), Gi.set(e, i), r(t);
	}, e;
}, Ji = ({ value: e, children: t, options: r, plugins: i, viewport: a, theme: o, onChange: s, onSelectionChange: l, onValueChange: d, onViewportChange: f, onThemeChange: m }) => {
	let [h, g] = k(() => {
		let t = Yi(e, r, i, a, o);
		return {
			v: 0,
			board: t,
			listRender: Xi(t)
		};
	}), { board: _, listRender: v } = h, y = ft(() => {
		s && s({
			children: _.children,
			operations: _.operations,
			viewport: _.viewport,
			selection: _.selection,
			theme: _.theme
		});
		let e = _.operations.some((e) => w.isSetSelectionOperation(e)), t = _.operations.some((e) => w.isSetViewportOperation(e)), n = _.operations.some((e) => w.isSetThemeOperation(e)), r = _.operations.length > 0 && !_.operations.every((e) => w.isSetSelectionOperation(e) || w.isSetViewportOperation(e) || w.isSetThemeOperation(e));
		d && r && d(_.children), l && e && l(_.selection), f && t && f(_.viewport), m && n && m(_.theme.themeColorMode), g((e) => ({
			v: e.v + 1,
			board: _,
			listRender: v
		}));
	}, [
		_,
		v,
		s,
		l,
		m,
		d,
		f
	]);
	D(() => (c.set(_, () => {
		if (_.operations.length && _.operations.every((e) => e.type === "set_selection")) {
			v.update(_.children, {
				board: _,
				parent: _,
				parentG: C.getElementHost(_)
			});
			return;
		}
		let e = _.operations.length && _.operations.some((e) => e.type === "set_viewport");
		if (e && je(_)) {
			Ve(_, !1), v.update(_.children, {
				board: _,
				parent: _,
				parentG: C.getElementHost(_)
			});
			return;
		}
		v.update(_.children, {
			board: _,
			parent: _,
			parentG: C.getElementHost(_)
		}), e ? De(_) : Ze(_), $e(_), Ce(_).forEach((e) => {
			ae.getElementRef(e).updateActiveSection();
		});
	}), n.set(_, () => {
		y();
	}), () => {
		c.delete(_), n.delete(_);
	}), [
		_,
		v,
		y
	]);
	let b = O(!0);
	return D(() => {
		if (b.current) {
			b.current = !1;
			return;
		}
		e !== h.board.children && !p.get(_) && (_.children = e, o && (_.theme = o), v.update(_.children, {
			board: _,
			parent: _,
			parentG: C.getElementHost(_)
		}), u.fitViewport(_));
	}, [e]), /* @__PURE__ */ M(ji.Provider, {
		value: h,
		children: t
	});
}, Yi = (e, t, n, r, i) => {
	let a = st(rt(tt(nt(ct(at(et(it(ot(Wi(Ut(Wt(he(e, t)))))))))))));
	return n.forEach((e) => {
		a = e(a);
	}), qi(a), r && (a.viewport = r), i && (a.theme = i), a;
}, Xi = (e) => new ee(e), Zi = (e) => /* @__PURE__ */ M("span", {
	className: "mind-node-emoji",
	style: { fontSize: `${e.fontSize}px` },
	children: e.emojiItem.name
}), Qi = (e) => {
	let t = e;
	return e.setPluginOptions(gn, {
		emojiPadding: 0,
		spaceBetweenEmojis: 4
	}), t.renderEmoji = (e, t) => {
		let n = document.createElement("span");
		e.appendChild(n);
		let r = gt(n);
		r.render(/* @__PURE__ */ M(Zi, { ...t }));
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
				}, r.render(/* @__PURE__ */ M(Zi, { ...i }));
			}
		};
	}, t;
}, $i = (e) => /* @__PURE__ */ M("div", {
	style: { display: "flex" },
	children: /* @__PURE__ */ M("img", {
		src: e.imageItem.url,
		draggable: !1,
		width: "100%",
		className: A("image-origin", { "image-origin--focus": e.isFocus })
	})
}), ea = /* @__PURE__ */ function(e) {
	return e.COPY = "copy", e.PASTE = "paste", e.CUT = "cut", e.KEYDOWN = "keydown", e.KEYUP = "keyup", e.MOUSE_MOVE = "mousemove", e.RESIZE = "resize", e.UNLOAD = "unload", e.FOCUS = "focus", e.BLUR = "blur", e.DRAG_OVER = "dragover", e.DROP = "drop", e.GESTURE_END = "gestureend", e.BEFORE_UNLOAD = "beforeunload", e.GESTURE_START = "gesturestart", e.GESTURE_CHANGE = "gesturechange", e.POINTER_MOVE = "pointermove", e.POINTER_DOWN = "pointerdown", e.POINTER_UP = "pointerup", e.STATE_CHANGE = "statechange", e.WHEEL = "wheel", e.TOUCH_START = "touchstart", e.TOUCH_END = "touchend", e.HASHCHANGE = "hashchange", e.VISIBILITY_CHANGE = "visibilitychange", e.SCROLL = "scroll", e.MENU_ITEM_SELECT = "menu.itemSelect", e.MESSAGE = "message", e.FULLSCREENCHANGE = "fullscreenchange", e;
}({}), ta = {
	svg: "image/svg+xml",
	png: "image/png",
	jpg: "image/jpeg",
	gif: "image/gif",
	webp: "image/webp",
	bmp: "image/bmp",
	ico: "image/x-icon",
	avif: "image/avif",
	jfif: "image/jfif"
}, na = {
	json: "application/json",
	drawnix: "application/vnd.drawnix+json",
	...ta
}, ra = { drawnix: 1 }, ia = (() => {
	if (typeof self > "u") return !1;
	if ("top" in self && self !== top) try {
		top.window.document._ = 0;
	} catch {
		return !1;
	}
	return "showOpenFilePicker" in self;
})(), aa = ia ? Promise.resolve().then(function() {
	return ua;
}) : Promise.resolve().then(function() {
	return ha;
});
async function oa(...e) {
	return (await aa).default(...e);
}
ia ? Promise.resolve().then(function() {
	return pa;
}) : Promise.resolve().then(function() {
	return ga;
});
var sa = ia ? Promise.resolve().then(function() {
	return ma;
}) : Promise.resolve().then(function() {
	return _a;
});
async function ca(...e) {
	return (await sa).default(...e);
}
var la = async (e) => {
	let t = await e.getFile();
	return t.handle = e, t;
}, ua = {
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
		}), r = await Promise.all(n.map(la));
		return e[0].multiple ? r : r[0];
	}
};
function da(e) {
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
	return da = function(e) {
		this.s = e, this.n = e.next;
	}, da.prototype = {
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
	}, new da(e);
}
var fa = async (e, t, n = e.name, r) => {
	let i = [], a = [];
	var o, s = !1, c = !1;
	try {
		for (var l, u = function(e) {
			var t, n, r, i = 2;
			for (typeof Symbol < "u" && (n = Symbol.asyncIterator, r = Symbol.iterator); i--;) {
				if (n && (t = e[n]) != null) return t.call(e);
				if (r && (t = e[r]) != null) return new da(t.call(e));
				n = "@@asyncIterator", r = "@@iterator";
			}
			throw TypeError("Object is not async iterable");
		}(e.values()); s = !(l = await u.next()).done; s = !1) {
			let o = l.value, s = `${n}/${o.name}`;
			o.kind === "file" ? a.push(o.getFile().then((t) => (t.directoryHandle = e, t.handle = o, Object.defineProperty(t, "webkitRelativePath", {
				configurable: !0,
				enumerable: !0,
				get: () => s
			})))) : o.kind !== "directory" || !t || r && r(o) || i.push(fa(o, t, s, r));
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
}, pa = {
	__proto__: null,
	default: async (e = {}) => {
		e.recursive = e.recursive || !1, e.mode = e.mode || "read";
		let t = await window.showDirectoryPicker({
			id: e.id,
			startIn: e.startIn,
			mode: e.mode
		});
		return (await (await t.values()).next()).done ? [t] : fa(t, e.recursive, void 0, e.skipDirectory);
	}
}, ma = {
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
}, ha = {
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
}, ga = {
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
}, _a = {
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
}, va = (e) => {
	let t = e.extensions?.reduce((e, t) => (e.push(na[t]), e), []), n = e.extensions?.reduce((e, t) => t === "jpg" ? e.concat(".jpg", ".jpeg") : e.concat(`.${t}`), []);
	return oa({
		description: e.description,
		extensions: n,
		mimeTypes: t,
		multiple: e.multiple ?? !1
	});
}, ya = (e, t) => ca(e, {
	fileName: `${t.name}.${t.extension}`,
	description: t.description,
	extensions: [`.${t.extension}`]
}, t.fileHandle), ba = /* @__PURE__ */ function(e) {
	return e.drawnix = "drawnix", e;
}({}), xa = () => (/* @__PURE__ */ new Date()).getTime().toString(), Sa = async (e, t = xa()) => Ca(e, null, t), Ca = async (e, t = null, n = xa()) => {
	let r = Ea(e);
	return { fileHandle: await ya(new Blob([r], { type: na.drawnix }), {
		name: n,
		extension: "drawnix",
		description: "Drawnix file",
		fileHandle: t
	}) };
}, wa = async (e) => {
	let t = await va({ description: "Drawnix files" }), n = t.handle || null;
	return {
		data: await Da(e, await Aa(t)),
		fileHandle: n
	};
}, Ta = (e) => e && e.type === ba.drawnix && Array.isArray(e.elements) && typeof e.viewport == "object", Ea = (e) => {
	let t = {
		type: ba.drawnix,
		version: ra.drawnix,
		source: "web",
		elements: e.children,
		viewport: e.viewport,
		theme: e.theme
	};
	return JSON.stringify(t, null, 2);
}, Da = async (e, t) => {
	let n = await ja(t);
	try {
		let e = JSON.parse(n);
		if (Ta(e)) return e;
	} catch {}
	throw Error("Error: invalid file");
}, Oa = (e, t, n) => new File([e], n || "", { type: t }), ka = (e) => "arrayBuffer" in e ? e.arrayBuffer() : new Promise((t, n) => {
	let r = new FileReader();
	r.onload = (e) => {
		if (!e.target?.result) return n(/* @__PURE__ */ Error("Couldn't convert blob to ArrayBuffer"));
		t(e.target.result);
	}, r.readAsArrayBuffer(e);
}), Aa = async (e) => (e.type || e?.name?.endsWith(".drawnix") && (e = Oa(await ka(e), na.drawnix, e.name)), e), ja = async (e) => {
	let t;
	return t = "text" in Blob ? await e.text() : await new Promise((t) => {
		let n = new FileReader();
		n.readAsText(e, "utf8"), n.onloadend = () => {
			n.readyState === FileReader.DONE && t(n.result);
		};
	}), t;
}, Ma = async (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => {
		let e = r.result;
		t(e);
	}, r.onerror = (e) => n(e), r.readAsDataURL(e);
}), Na = (e) => !!e && Object.values(ta).includes(e), Pa = (e) => new Promise((t, n) => {
	let r = new Image();
	r.onload = () => {
		t(r);
	}, r.onerror = (e) => {
		n(e);
	}, r.src = e;
}), Fa = (e, t, n) => {
	let r = e.width > n ? n : e.width;
	return {
		url: t,
		width: r,
		height: r / e.width * e.height
	};
}, Ia = async (e, t, n, r) => {
	let i = Ce(e)[0] || It(e), a = i ? 240 : 400, o = await Ma(t), s = Fa(await Pa(o), o, a), c = n && be(e, n);
	if (r && c && dn.isMindElement(e, c)) {
		hn.setImage(e, c, s);
		return;
	}
	i && dn.isMindElement(e, i) && !r ? hn.setImage(e, i, s) : Jt.insertImage(e, s, n);
}, La = class {
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
}, Ra = (e) => {
	let t = e, { insertFragment: n, drop: r, pointerUp: i } = t, a = new La({
		zoomStep: .3,
		minZoom: .1,
		maxZoom: 5,
		enableKeyboard: !0
	});
	return t.insertFragment = (t, r, i) => {
		if (t?.files?.length && Na(t.files[0].type)) {
			let n = t.files[0];
			Ia(e, n, r, !1);
			return;
		}
		n(t, r, i);
	}, t.drop = (t) => {
		if (t.dataTransfer?.files?.length) {
			let n = t.dataTransfer.files[0];
			if (Na(n.type)) return Ia(e, n, Xe(e, Ge(e, t.x, t.y)), !0), !0;
		}
		return r(t);
	}, t.pointerUp = (t) => {
		let n = It(e);
		if (n && !Vt(e) && !Re(e) && !Ae(e)) {
			let r = Xe(e, Ge(e, t.x, t.y)), i = be(e, r);
			i && dn.isMindElement(e, i) && dn.hasImage(i) && yn(e, i, r) && n === i && a.open(i.data.image.url);
		}
		i(t);
	}, t;
}, za = {
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
}, Ba = {
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
}, Va = {
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
}, Ha = {
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
}, Ua = {
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
}, Wa = "zh", Ga = /* @__PURE__ */ new WeakMap(), Ka = {
	zh: za,
	en: Ba,
	ru: Va,
	ar: Ha,
	vi: Ua
}, qa = ut(void 0), Ja = (e, t) => {
	Ga.set(e, t);
}, Ya = ({ children: e, defaultLanguage: t = Wa, initialLanguage: n, onLanguageChange: r }) => {
	let [i, a] = k(() => n ?? t), o = ft((e) => {
		a(e), r?.(e);
	}, [r]), s = ft((e) => Ka[i][e] || e, [i]), c = ht(() => ({
		language: i,
		setLanguage: o,
		t: s
	}), [
		i,
		o,
		s
	]);
	return /* @__PURE__ */ M(qa.Provider, {
		value: c,
		children: e
	});
}, U = () => {
	let e = pt(qa);
	if (!e) throw Error("useI18n must be used within I18nProvider");
	return e;
}, Xa = (e) => {
	let t = () => (e ? Ga.get(e) : void 0) ?? Wa;
	return {
		t: (e) => Ka[t()][e] || e,
		get language() {
			return t();
		}
	};
}, Za = (e) => {
	let t = e;
	t.renderImage = (e, t) => {
		let n = gt(e);
		n.render(/* @__PURE__ */ M($i, { ...t }));
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
				}, n.render(/* @__PURE__ */ M($i, { ...r }));
			}
		};
	};
	let { t: n } = Xa(e);
	return t.getI18nValue = (e) => e === qt.lineText ? n("draw.lineText") : e === qt.geometryText ? n("draw.geometryText") : e === fn.mindCentralText ? n("mind.centralText") : e === fn.abstractNodeText ? n("mind.abstractNodeText") : null, Ra(t);
}, W = lt.forwardRef(({ children: e, padding: t, className: n, style: r, ...i }, a) => /* @__PURE__ */ M("div", {
	className: A("island", n),
	style: {
		"--padding": t,
		...r
	},
	ref: a,
	...i,
	children: e
})), G = {
	Row: dt(({ children: e, gap: t, align: n, justifyContent: r, className: i, style: a }, o) => /* @__PURE__ */ M("div", {
		className: A("stack stack_horizontal", i),
		style: {
			"--gap": t,
			alignItems: n,
			justifyContent: r,
			...a
		},
		ref: o,
		children: e
	})),
	Col: dt(({ children: e, gap: t, align: n, justifyContent: r, className: i, style: a }, o) => /* @__PURE__ */ M("div", {
		className: A("stack stack_vertical", i),
		style: {
			"--gap": t,
			justifyItems: n,
			justifyContent: r,
			...a
		},
		ref: o,
		children: e
	}))
}, Qa = class extends DOMException {
	constructor(e = "Request Aborted") {
		super(e, "AbortError");
	}
}, $a = (e) => !!e && typeof e == "object" && "then" in e && "catch" in e && "finally" in e, eo = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => function(r) {
	if (e?.(r), !n || !r?.defaultPrevented) return t?.(r);
}, to = (e) => {
	let t = e.split(","), n = t[0].match(/:(.*?);/)[1], r = atob(t[1]), i = r.length, a = new Uint8Array(i);
	for (; i--;) a[i] = r.charCodeAt(i);
	return new Blob([a], { type: n });
}, no = (e, t = {}) => qe(e, {
	fillStyle: "transparent",
	inlineStyleClassNames: ".extend,.emojis,.text",
	padding: 20,
	ratio: 4,
	...t
});
function ro(e, t) {
	let n = document.createElement("a"), r = window.URL.createObjectURL(e);
	n.href = r, n.download = t, document.body.append(n), n.click(), window.URL.revokeObjectURL(r), n.remove();
}
var io = (e, t) => {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}, ao = (e) => (e = e.replace(/\bAlt\b/i, "Alt").replace(/\bShift\b/i, "Shift").replace(/\b(Enter|Return)\b/i, "Enter"), h || b ? e.replace(/\bCtrlOrCmd\b/gi, "Cmd").replace(/\bAlt\b/i, "Option") : e.replace(/\bCtrlOrCmd\b/gi, "Ctrl")), K = lt.forwardRef((e, t) => {
	let { id: n } = { id: "drawnix" }, r = lt.useRef(null);
	lt.useImperativeHandle(t, () => r.current);
	let i = `tool-icon_size_${e.size || "medium"}`, [a, o] = k(!1), s = O(!0), c = async (t) => {
		let n = "onClick" in e && e.onClick?.(t);
		if ($a(n)) try {
			o(!0), await n;
		} catch (e) {
			if (e instanceof Qa) console.warn(e);
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
		return /* @__PURE__ */ N("button", {
			className: A("tool-icon_type_button", i, e.className, e.visible && !e.hidden ? "tool-icon_type_button--show" : "tool-icon_type_button--hide", {
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
				(e.icon || e.label) && /* @__PURE__ */ N("div", {
					className: "tool-icon__icon",
					"aria-hidden": "true",
					"aria-disabled": !!e.disabled,
					children: [e.icon || e.label, e.keyBindingLabel && /* @__PURE__ */ M("span", {
						className: "tool-icon__keybinding",
						children: e.keyBindingLabel
					})]
				}),
				e.showAriaLabel && /* @__PURE__ */ M("div", {
					className: "tool-icon__label",
					children: e["aria-label"]
				}),
				e.children && /* @__PURE__ */ M("div", {
					className: "tool-icon__icon",
					children: e.children
				})
			]
		});
	}
	return /* @__PURE__ */ N("label", {
		className: A("tool-icon", e.className),
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
		children: [/* @__PURE__ */ M("input", {
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
		}), /* @__PURE__ */ N("div", {
			className: "tool-icon__icon",
			children: [e.icon, e.keyBindingLabel && /* @__PURE__ */ M("span", {
				className: "tool-icon__keybinding",
				children: e.keyBindingLabel
			})]
		})]
	});
});
K.displayName = "ToolButton";
//#endregion
//#region src/components/icons.tsx
var q = (e) => e, oo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		id: "Hand",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M8.44583468,0.500225887 C9.07406934,0.510185679 9.54739531,0.839591366 9.86192311,1.34305279 C9.89696656,1.39914649 9.92878401,1.45492964 9.9576026,1.50991157 L9.9576026,1.50991157 L10.0210033,1.64201027 L10.061978,1.62350755 C10.1972891,1.56834247 10.3444107,1.53218464 10.5027907,1.51755353 L10.5027907,1.51755353 L10.6649031,1.51019133 C11.4883708,1.51019133 12.0208782,1.99343346 12.3023042,2.66393278 C12.3903714,2.87392911 12.4344191,3.10047818 12.4339446,3.3257952 L12.4339446,3.3257952 L12.4360033,3.80501027 L12.5160535,3.78341501 C12.6124478,3.76124046 12.7138812,3.74739854 12.820201,3.74250274 L12.820201,3.74250274 L12.9833264,3.74194533 C13.6121166,3.7657478 14.0645887,4.0801724 14.3087062,4.56112689 C14.4521117,4.8436609 14.4987984,5.11349437 14.4999262,5.33449618 L14.4999262,5.33449618 L14.3922653,12.049414 C14.3784752,12.909177 14.0717787,13.7360948 13.5212406,14.3825228 C13.4055676,14.5183496 13.2843697,14.643961 13.1582361,14.7596335 C12.4634771,15.3967716 11.755103,15.6538706 11.1897396,15.7000055 L11.1897396,15.7000055 L7.4723083,15.6798158 C7.14276373,15.634268 6.81580098,15.5154267 6.49455235,15.3472501 C6.25643701,15.2225944 6.06881706,15.0975452 5.88705731,14.9494308 L5.88705731,14.9494308 L2.55198782,11.500873 C2.39559475,11.3769079 2.17626793,11.1748532 1.9548636,10.9139403 C1.57867502,10.4706225 1.33501976,10.0139923 1.30330257,9.52833025 C1.28093191,9.18578476 1.37200912,8.85641102 1.5826788,8.56872564 C1.82538833,8.23725279 2.12881965,8.02107162 2.47470569,7.92957033 C2.95807982,7.80169771 3.42705723,7.92468989 3.86509644,8.18731167 C4.04431391,8.29475961 4.1816109,8.40304483 4.26225571,8.47866867 L4.26225571,8.47866867 L4.61400328,8.79701027 L4.57247249,3.59275349 L4.57628524,3.46204923 C4.5897691,3.23444442 4.64087578,2.95701848 4.75937106,2.66961597 C5.01017272,2.06131302 5.49670227,1.64692543 6.21363856,1.60818786 C6.44223508,1.59583681 6.65042099,1.62176802 6.83696985,1.68057551 L6.83696985,1.68057551 L6.86400328,1.69001027 C6.88501862,1.63593052 6.90764242,1.58175442 6.9331867,1.52672633 L6.9331867,1.52672633 L7.01883595,1.35955614 C7.31549194,0.832047939 7.79476072,0.48993549 8.44583468,0.500225887 Z M8.42684173,1.70001476 C8.26825412,1.69756905 8.16339456,1.77242008 8.06478367,1.94776814 C8.03967773,1.99241107 8.01831703,2.03811495 8.00083464,2.07855067 L8.00083464,2.07855067 L7.94879157,2.2035905 L7.94354455,2.20731401 L7.943,3.161 L7.97170661,3.16123746 L7.97170661,7.60991883 L6.77170661,7.60991883 L6.771,3.338 L6.74362358,3.33880359 C6.74284189,3.29064626 6.73014163,3.20282206 6.7002616,3.11094408 L6.66446012,3.01903385 C6.58982025,2.85766739 6.49843292,2.79455071 6.27838133,2.80644008 C6.07001018,2.81769881 5.95642108,2.91444507 5.86877664,3.12702089 C5.79792279,3.29887224 5.77228127,3.48655908 5.77246879,3.58977183 L5.77246879,3.58977183 L5.83613619,11.5252021 L3.41863956,9.33477657 L3.31637296,9.25979571 L3.24805011,9.21651224 C3.06096922,9.10434987 2.89279975,9.06024641 2.78159879,9.0896637 C2.71007735,9.10858411 2.63607367,9.1613084 2.55086305,9.27768211 C2.51020424,9.33320478 2.49638061,9.38319687 2.50075171,9.4501283 C2.51206889,9.62341997 2.64503022,9.87260054 2.86983366,10.1375191 C3.03268834,10.3294345 3.19762053,10.4813781 3.35554956,10.6131022 L3.35554956,10.6131022 L6.68454317,14.0569073 C6.71106575,14.0773808 6.74806086,14.1037158 6.79369091,14.1335929 L6.79369091,14.1335929 L6.95464838,14.2315311 L7.05111031,14.2841211 C7.25978123,14.3933622 7.46253523,14.4670573 7.55685495,14.4854708 L7.55685495,14.4854708 L11.1407985,14.5022108 C11.1503576,14.5013899 11.1627905,14.4997539 11.1779002,14.4971772 L11.1779002,14.4971772 L11.2991076,14.4694224 C11.3491682,14.4557375 11.4083624,14.437284 11.4751158,14.4130563 C11.769383,14.3062543 12.066676,14.1324596 12.3471758,13.8752234 C12.4371203,13.7927386 12.5240597,13.7026333 12.607654,13.6044743 C12.9760464,13.1719172 13.183059,12.6137678 13.1924195,12.030173 L13.1924195,12.030173 L13.3000132,5.32832551 C13.2997939,5.29016685 13.2826117,5.19085946 13.2386527,5.10425262 C13.1843838,4.99733326 13.1129774,4.94771265 12.9379578,4.94108739 C12.6814739,4.93138871 12.534132,5.11189595 12.4756792,5.39480062 L12.4768718,7.52734922 L11.2768718,7.52734922 L11.276,5.688 L11.2462883,5.6883208 L11.2339541,3.32771285 C11.2341,3.2560396 11.2209054,3.18817621 11.1957482,3.12818892 C11.0820579,2.85732094 10.9199288,2.71019133 10.6649031,2.71019133 C10.456829,2.71019133 10.3197487,2.87378067 10.2524297,3.11264939 L10.2530225,7.512783 L9.05302254,7.512783 L9.053,3.288 L9.01554331,3.28724203 L8.98800328,2.29901027 L8.9629175,2.22263368 C8.94515567,2.17417174 8.92167756,2.11937748 8.8924232,2.06330056 L8.8924232,2.06330056 L8.84420197,1.9788544 C8.72758855,1.79219249 8.59915015,1.70280728 8.42684173,1.70001476 Z" })
	})
})), so = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		id: "selection",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M1.38232686,2.38218266 L5.4143451,14.2246629 L5.45540179,14.3136477 C5.6738376,14.7029541 6.25143564,14.7273637 6.49230627,14.3232393 L8.11486037,11.5990854 L10.8833927,14.4351257 C11.1162256,14.673686 11.4988798,14.6767204 11.7354668,14.4418826 L14.1933351,12.0021862 L14.263123,11.9192708 C14.4260847,11.6858139 14.4039042,11.3621027 14.1959502,11.1531274 L11.3598604,8.30408543 L14.0003903,6.44278167 C14.4042341,6.15799031 14.3099422,5.5344405 13.8399491,5.38178897 L2.13023795,1.60291226 C1.65322163,1.44797961 1.20794286,1.91192855 1.38232686,2.38218266 Z M2.93689198,3.12556703 L12.3288604,6.15308543 L10.0883903,7.73315528 L10.0121747,7.79676991 C9.78025886,8.02517222 9.77056424,8.40723513 10.0088753,8.64671667 L12.9218604,11.5730854 L11.3198604,13.1630854 L8.42938714,10.2026992 L8.35682877,10.1391916 C8.07802132,9.93187508 7.66955488,10.0042813 7.48460396,10.3145856 L6.10286037,12.6310854 L2.93689198,3.12556703 Z" })
	})
})), co = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		id: "Mind",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M14.5,1.5 C15.3284271,1.5 16,2.17157288 16,3 L16,4.5 C16,5.32842712 15.3284271,6 14.5,6 L10.5,6 C9.70541385,6 9.05512881,5.38217354 9.00332687,4.60070262 L7.75,4.6 C6.70187486,4.6 5.75693372,5.0417832 5.09122946,5.7492967 L5.5,5.75 C6.32842712,5.75 7,6.42157288 7,7.25 L7,8.75 C7,9.57842712 6.32842712,10.25 5.5,10.25 L4.69703093,10.2512226 C5.3493111,11.2442937 6.47308134,11.9 7.75,11.9 L9.004,11.9 L9.00686658,11.85554 C9.07955132,11.0948881 9.72030388,10.5 10.5,10.5 L14.5,10.5 C15.3284271,10.5 16,11.1715729 16,12 L16,13.5 C16,14.3284271 15.3284271,15 14.5,15 L10.5,15 C9.67157288,15 9,14.3284271 9,13.5 L9,13.1 L7.75,13.1 C5.78479628,13.1 4.09258608,11.9311758 3.33061658,10.2507745 L1.5,10.25 C0.671572875,10.25 0,9.57842712 0,8.75 L0,7.25 C0,6.42157288 0.671572875,5.75 1.5,5.75 L3.5932906,5.74973863 C4.44206161,4.34167555 5.98606075,3.4 7.75,3.4 L9,3.4 L9,3 C9,2.17157288 9.67157288,1.5 10.5,1.5 L14.5,1.5 Z M14.5,11.7 L10.5,11.7 C10.3343146,11.7 10.2,11.8343146 10.2,12 L10.2,13.5 C10.2,13.6656854 10.3343146,13.8 10.5,13.8 L14.5,13.8 C14.6656854,13.8 14.8,13.6656854 14.8,13.5 L14.8,12 C14.8,11.8343146 14.6656854,11.7 14.5,11.7 Z M5.5,6.95 L1.5,6.95 C1.33431458,6.95 1.2,7.08431458 1.2,7.25 L1.2,8.75 C1.2,8.91568542 1.33431458,9.05 1.5,9.05 L5.5,9.05 C5.66568542,9.05 5.8,8.91568542 5.8,8.75 L5.8,7.25 C5.8,7.08431458 5.66568542,6.95 5.5,6.95 Z M14.5,2.7 L10.5,2.7 C10.3343146,2.7 10.2,2.83431458 10.2,3 L10.2,4.5 C10.2,4.66568542 10.3343146,4.8 10.5,4.8 L14.5,4.8 C14.6656854,4.8 14.8,4.66568542 14.8,4.5 L14.8,3 C14.8,2.83431458 14.6656854,2.7 14.5,2.7 Z" })
	})
})), lo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		id: "geometry",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M9.3,6.7 L1.7,6.7 L1.7,14.3 L9.3,14.3 L9.3,6.7 Z M10.5,9.8 C12.8748244,9.8 14.8,7.87482442 14.8,5.5 C14.8,3.12517558 12.8748244,1.2 10.5,1.2 C8.12517558,1.2 6.2,3.12517558 6.2,5.5 L9.5,5.5 C10.0522847,5.5 10.5,5.94771525 10.5,6.5 L10.5,9.8 Z M10.5,14.5 C10.5,15.0522847 10.0522847,15.5 9.5,15.5 L1.5,15.5 C0.94771525,15.5 0.5,15.0522847 0.5,14.5 L0.5,6.5 C0.5,5.94771525 0.94771525,5.5 1.5,5.5 L5,5.5 C5,2.46243388 7.46243388,0 10.5,0 C13.5375661,0 16,2.46243388 16,5.5 C16,8.53756612 13.5375661,11 10.5,11 L10.5,14.5 Z" })
	})
})), uo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		id: "font",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M4.75,14.5069828 C4.41862915,14.5069828 4.15,14.2383536 4.15,13.9069828 C4.15,13.5756119 4.41862915,13.3069828 4.75,13.3069828 L7.3993606,13.306 L7.3993606,2.7 L2.7113606,2.7 L2.7113606,4.10415313 C2.7113606,4.40238689 2.49377099,4.64979988 2.20868371,4.69630014 L2.1113606,4.70415313 C1.77998975,4.70415313 1.5113606,4.43552397 1.5113606,4.10415313 L1.5113606,2.1 C1.5113606,1.76862915 1.77998975,1.5 2.1113606,1.5 L13.8810378,1.5 C14.2124087,1.5 14.4810378,1.76862915 14.4810378,2.1 L14.4810378,4.10415313 C14.4810378,4.43552397 14.2124087,4.70415313 13.8810378,4.70415313 C13.549667,4.70415313 13.2810378,4.43552397 13.2810378,4.10415313 L13.2810378,2.7 L8.5993606,2.7 L8.5993606,13.306 L11.25,13.3069828 C11.5813708,13.3069828 11.85,13.5756119 11.85,13.9069828 C11.85,14.2383536 11.5813708,14.5069828 11.25,14.5069828 L4.75,14.5069828 Z" })
	})
})), fo = q(/* @__PURE__ */ N("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ M("path", {
			stroke: "none",
			d: "M0 0h24v24H0z"
		}),
		/* @__PURE__ */ M("path", { d: "M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" }),
		/* @__PURE__ */ M("path", { d: "M18 13.3l-6.3 -6.3" })
	]
})), po = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ M("g", {
		id: "straight-line",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", {
			d: "M8.55595221,-1.5261864 C8.88741773,-1.5261864 9.15621426,-1.25765205 9.15653772,-0.926186684 L9.16739175,10.3828136 L10.9946787,10.3836977 C11.2708211,10.3836977 11.4946787,10.6075553 11.4946787,10.8836977 C11.4946787,10.9607525 11.4768694,11.0367648 11.4426413,11.1058002 L8.8378495,16.3594519 C8.7642512,16.5078936 8.58425218,16.5685662 8.43581043,16.4949679 C8.37895485,16.4667786 8.33250284,16.4212859 8.30313336,16.3650308 L5.56226325,11.1150985 C5.43446412,10.8703088 5.52930372,10.5682659 5.77409341,10.4404667 C5.84552557,10.4031736 5.92491301,10.3836977 6.0054942,10.3836977 L7.96739175,10.3828136 L7.95653772,-0.926186684 C7.95621467,-1.25723416 8.22431979,-1.52586306 8.55536727,-1.52618611 Z",
			id: "",
			transform: "translate(8.500035, 7.500035) rotate(-135.000000) translate(-8.500035, -7.500035) "
		})
	})
})), mo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ M("path", {
		d: "M3 3h18v18H3z",
		stroke: "currentColor",
		strokeWidth: "2",
		fill: "none"
	})
})), ho = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ M("g", {
		id: "terminal",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M11,3 C13.7614237,3 16,5.23857625 16,8 C16,10.7614237 13.7614237,13 11,13 L5,13 C2.23857625,13 0,10.7614237 0,8 C0,5.23857625 2.23857625,3 5,3 L11,3 Z M11,4.2 L5,4.2 C2.90131795,4.2 1.2,5.90131795 1.2,8 C1.2,10.0330982 2.79664702,11.6932796 4.8044525,11.7950555 L5,11.8 L11,11.8 C13.098682,11.8 14.8,10.098682 14.8,8 C14.8,5.96690176 13.203353,4.30672042 11.1955475,4.20494454 L11,4.2 Z" })
	})
})), go = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ M("g", {
		id: "ellipse",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2.2 C4.79674845,2.2 2.2,4.79674845 2.2,8 C2.2,11.2032515 4.79674845,13.8 8,13.8 C11.2032515,13.8 13.8,11.2032515 13.8,8 C13.8,4.79674845 11.2032515,2.2 8,2.2 Z" })
	})
})), _o = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ M("g", {
		id: "triangle",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M8.23125547,1.21366135 C8.3114266,1.25857939 8.37766784,1.32472334 8.42270367,1.40482837 L15.6471754,14.2549655 C15.7825042,14.4956743 15.6970768,14.800513 15.456368,14.9358418 C15.3815505,14.977905 15.2971646,15 15.2113335,15 L0.787227066,15 C0.511084691,15 0.287227066,14.7761424 0.287227066,14.5 C0.287227066,14.414418 0.309194147,14.3302684 0.351025556,14.2556064 L7.55066033,1.40546924 C7.6856352,1.1645618 7.99034802,1.07868648 8.23125547,1.21366135 Z M7.98695902,3.07926294 L1.98095902,13.7992629 L14.014959,13.7992629 L7.98695902,3.07926294 Z" })
	})
})), vo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", {
			d: "M13.7636471,2.6449804 C13.7716713,2.69552516 13.7718878,2.74700226 13.7642892,2.79761274 L12.3875778,11.9671885 C12.3550099,12.1841069 12.184864,12.3544698 11.9679874,12.3873141 L2.78433018,13.7781116 C2.511301,13.8194599 2.25644773,13.6316454 2.21509947,13.3586162 C2.20737253,13.307594 2.20759072,13.2556831 2.21574631,13.2047277 L3.67471119,4.08923146 C3.70888725,3.87570215 3.87646006,3.70834166 4.09003253,3.67443635 L13.1914362,2.22955927 C13.4641633,2.18626298 13.7203508,2.37225335 13.7636471,2.6449804 Z M12.4355704,3.5645263 L4.77957044,4.7795263 L3.55157044,12.4485263 L11.2775704,11.2775263 L12.4355704,3.5645263 Z",
			transform: "translate(7.989647, 8.003560) rotate(-315.000000) translate(-7.989647, -8.003560) "
		})
	})
})), yo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M15.3062871,3.5 C15.5824294,3.5 15.8062871,3.72385763 15.8062871,4 C15.8062871,4.05374105 15.7976231,4.10713065 15.7806287,4.15811388 L13.113962,12.1581139 C13.045905,12.362285 12.8548356,12.5 12.6396204,12.5 L0.693712943,12.5 C0.417570568,12.5 0.193712943,12.2761424 0.193712943,12 C0.193712943,11.946259 0.202376883,11.8928694 0.219371294,11.8418861 L2.88603796,3.84188612 C2.95409498,3.63771505 3.14516441,3.5 3.36037961,3.5 L15.3062871,3.5 Z M14.335,4.7 L3.864,4.7 L1.664,11.3 L12.134,11.3 L14.335,4.7 Z" })
	})
})), bo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3,3 L13,3 C14.1045695,3 15,3.8954305 15,5 L15,11 C15,12.1045695 14.1045695,13 13,13 L3,13 C1.8954305,13 1,12.1045695 1,11 L1,5 C1,3.8954305 1.8954305,3 3,3 Z M3,4.2 C2.5581722,4.2 2.2,4.5581722 2.2,5 L2.2,11 C2.2,11.4418278 2.5581722,11.8 3,11.8 L13,11.8 C13.4418278,11.8 13.8,11.4418278 13.8,11 L13.8,5 C13.8,4.5581722 13.4418278,4.2 13,4.2 L3,4.2 Z"
		})
	})
})), xo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", {
			d: "M8.55595221,-1.5261864 C8.88741773,-1.5261864 9.15621426,-1.25765205 9.15653772,-0.926186684 L9.16739175,10.3828136 L10.9946787,10.3836977 C11.2708211,10.3836977 11.4946787,10.6075553 11.4946787,10.8836977 C11.4946787,10.9607525 11.4768694,11.0367648 11.4426413,11.1058002 L8.8378495,16.3594519 C8.7642512,16.5078936 8.58425218,16.5685662 8.43581043,16.4949679 C8.37895485,16.4667786 8.33250284,16.4212859 8.30313336,16.3650308 L5.56226325,11.1150985 C5.43446412,10.8703088 5.52930372,10.5682659 5.77409341,10.4404667 C5.84552557,10.4031736 5.92491301,10.3836977 6.0054942,10.3836977 L7.96739175,10.3828136 L7.95653772,-0.926186684 C7.95621467,-1.25723416 8.22431979,-1.52586306 8.55536727,-1.52618611 Z",
			transform: "translate(8.500035, 7.500035) rotate(-135.000000) translate(-8.500035, -7.500035) "
		})
	})
})), So = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M10.0153197,2.75391207 C10.0923746,2.75391207 10.1683869,2.77172133 10.2374222,2.80594949 L15.4910739,5.41074126 C15.6395156,5.48433956 15.7001882,5.66433859 15.6265899,5.81278033 C15.5984006,5.86963592 15.5529079,5.91608792 15.4966529,5.9454574 L10.2467205,8.68632752 C10.0019308,8.81412664 9.69988791,8.71928704 9.57208878,8.47449735 C9.53479568,8.40306519 9.51531974,8.32367776 9.51531974,8.24309656 L9.51458753,6.62591207 L6.16858753,6.62651279 L6.16914066,12.0061269 C6.16914066,12.3043606 5.95155104,12.5517736 5.66646377,12.5982739 L5.56914066,12.6061269 L0.534587532,12.6061269 C0.203216682,12.6061269 -0.0654124678,12.3374977 -0.0654124678,12.0061269 C-0.0654124678,11.674756 0.203216682,11.4061269 0.534587532,11.4061269 L4.96858753,11.4055128 L4.96914066,6.02651279 C4.96914066,5.72827903 5.18673027,5.48086604 5.47181754,5.43436578 L5.56914066,5.42651279 L9.51458753,5.42591207 L9.51531974,3.25391207 C9.51531974,2.9777697 9.73917736,2.75391207 10.0153197,2.75391207 Z" })
	})
})), Co = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M10.0153197,2.75391207 C10.0923746,2.75391207 10.1683869,2.77172133 10.2374222,2.80594949 L15.4910739,5.41074126 C15.6395156,5.48433956 15.7001882,5.66433859 15.6265899,5.81278033 C15.5984006,5.86963592 15.5529079,5.91608792 15.4966529,5.9454574 L10.2467205,8.68632752 C10.0019308,8.81412664 9.69988791,8.71928704 9.57208878,8.47449735 C9.53479568,8.40306519 9.51531974,8.32367776 9.51531974,8.24309656 L9.51423005,6.39035523 C5.97984781,6.85936966 3.21691607,9.08498364 1.18879108,13.1285821 C1.04022695,13.4247836 0.679673152,13.5444674 0.383471635,13.3959033 C0.0872701176,13.2473391 -0.0324136308,12.8867853 0.116150501,12.5905838 C2.34388813,8.14900524 5.48945543,5.65776043 9.51468497,5.18078677 L9.51531974,3.25391207 C9.51531974,2.9777697 9.73917736,2.75391207 10.0153197,2.75391207 Z" })
	})
})), wo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	children: /* @__PURE__ */ N("g", {
		strokeWidth: "1.5",
		children: [
			/* @__PURE__ */ M("path", {
				stroke: "none",
				d: "M0 0h24v24H0z"
			}),
			/* @__PURE__ */ M("line", {
				x1: "4",
				y1: "6",
				x2: "20",
				y2: "6"
			}),
			/* @__PURE__ */ M("line", {
				x1: "4",
				y1: "12",
				x2: "20",
				y2: "12"
			}),
			/* @__PURE__ */ M("line", {
				x1: "4",
				y1: "18",
				x2: "20",
				y2: "18"
			})
		]
	})
})), To = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	children: /* @__PURE__ */ M("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		fill: "none",
		d: "M7.5 15.833c-3.583 1.167-3.583-2.083-5-2.5m10 4.167v-2.917c0-.833.083-1.166-.417-1.666 2.334-.25 4.584-1.167 4.584-5a3.833 3.833 0 0 0-1.084-2.667 3.5 3.5 0 0 0-.083-2.667s-.917-.25-2.917 1.084a10.25 10.25 0 0 0-5.166 0C5.417 2.333 4.5 2.583 4.5 2.583a3.5 3.5 0 0 0-.083 2.667 3.833 3.833 0 0 0-1.084 2.667c0 3.833 2.25 4.75 4.584 5-.5.5-.5 1-.417 1.666V17.5",
		strokeWidth: "1.25"
	})
})), Eo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ N("g", {
		strokeWidth: "1.25",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		fill: "none",
		children: [
			/* @__PURE__ */ M("path", {
				stroke: "none",
				d: "M0 0h24v24H0z"
			}),
			/* @__PURE__ */ M("path", { d: "M15 8h.01" }),
			/* @__PURE__ */ M("path", { d: "M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5" }),
			/* @__PURE__ */ M("path", { d: "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" }),
			/* @__PURE__ */ M("path", { d: "M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598" }),
			/* @__PURE__ */ M("path", { d: "M19 16v6" }),
			/* @__PURE__ */ M("path", { d: "M22 19l-3 3l-3 -3" })
		]
	})
})), Do = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		id: "zoom-out",
		stroke: "none",
		fill: "currentColor",
		strokeWidth: "1",
		children: /* @__PURE__ */ M("path", {
			fillRule: "nonzero",
			d: "M6.85,2.73225886e-13 C10.6331505,2.73225886e-13 13.7,3.06684946 13.7,6.85 C13.7,8.54194045 13.0865836,10.0906098 12.0700142,11.2857448 L15.4201976,14.5717081 C15.6567367,14.8037768 15.6603607,15.1836585 15.4282919,15.4201976 C15.1962232,15.6567367 14.8163415,15.6603607 14.5798024,15.4282919 L14.5798024,15.4282919 L11.2163456,12.128262 C10.0309427,13.1099691 8.50937591,13.7 6.85,13.7 C3.06684946,13.7 4.58522109e-14,10.6331505 4.58522109e-14,6.85 C4.58522109e-14,3.06684946 3.06684946,2.73225886e-13 6.85,2.73225886e-13 Z M6.85,1.2 C3.72959116,1.2 1.2,3.72959116 1.2,6.85 C1.2,9.97040884 3.72959116,12.5 6.85,12.5 C8.31753357,12.5 9.65438791,11.9404957 10.6588859,11.0231643 C10.6855412,10.9625408 10.7245275,10.9050898 10.7743982,10.8542584 C10.8288931,10.7987137 10.8915387,10.7560124 10.9585649,10.7261903 C11.9144009,9.71595758 12.5,8.35136579 12.5,6.85 C12.5,3.72959116 9.97040884,1.2 6.85,1.2 Z M4.6,6.2 L9.12944565,6.2 C9.4608165,6.2 9.72944565,6.46862915 9.72944565,6.8 C9.72944565,7.09823376 9.51185604,7.34564675 9.22676876,7.39214701 L9.12944565,7.4 L4.6,7.4 C4.26862915,7.4 4,7.13137085 4,6.8 C4,6.50176624 4.21758961,6.25435325 4.50267688,6.20785299 L4.6,6.2 L9.12944565,6.2 Z"
		})
	})
})), Oo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		id: "zoom-in",
		stroke: "none",
		fill: "currentColor",
		strokeWidth: "1",
		children: /* @__PURE__ */ M("path", {
			fillRule: "nonzero",
			d: "M6.85,-1.81188398e-13 C10.6331505,-1.81188398e-13 13.7,3.06684946 13.7,6.85 C13.7,8.54194045 13.0865836,10.0906098 12.0700142,11.2857448 L15.4201976,14.5717081 C15.6567367,14.8037768 15.6603607,15.1836585 15.4282919,15.4201976 C15.1962232,15.6567367 14.8163415,15.6603607 14.5798024,15.4282919 L14.5798024,15.4282919 L11.2163456,12.128262 C10.0309427,13.1099691 8.50937591,13.7 6.85,13.7 C3.06684946,13.7 4.61852778e-14,10.6331505 4.61852778e-14,6.85 C4.61852778e-14,3.06684946 3.06684946,-1.81188398e-13 6.85,-1.81188398e-13 Z M6.85,1.2 C3.72959116,1.2 1.2,3.72959116 1.2,6.85 C1.2,9.97040884 3.72959116,12.5 6.85,12.5 C8.31753357,12.5 9.65438791,11.9404957 10.6588859,11.0231643 C10.6855412,10.9625408 10.7245275,10.9050898 10.7743982,10.8542584 C10.8288931,10.7987137 10.8915387,10.7560124 10.9585649,10.7261903 C11.9144009,9.71595758 12.5,8.35136579 12.5,6.85 C12.5,3.72959116 9.97040884,1.2 6.85,1.2 Z M6.86472282,3.93527718 C7.16295659,3.93527718 7.41036958,4.15286679 7.45686984,4.43795406 L7.46472282,4.53527718 L7.464,6.19927718 L9.12944565,6.2 C9.42767941,6.2 9.6750924,6.41758961 9.72159266,6.70267688 L9.72944565,6.8 C9.72944565,7.09823376 9.51185604,7.34564675 9.22676876,7.39214701 L9.12944565,7.4 L7.464,7.39927718 L7.46472282,9.06472282 C7.46472282,9.36295659 7.24713321,9.61036958 6.96204594,9.65686984 L6.86472282,9.66472282 C6.56648906,9.66472282 6.31907607,9.44713321 6.27257581,9.16204594 L6.26472282,9.06472282 L6.264,7.39927718 L4.6,7.4 C4.30176624,7.4 4.05435325,7.18241039 4.00785299,6.89732312 L4,6.8 C4,6.50176624 4.21758961,6.25435325 4.50267688,6.20785299 L4.6,6.2 L6.264,6.19927718 L6.26472282,4.53527718 C6.26472282,4.2701805 6.43664548,4.0452385 6.67507642,3.96586557 L6.76739971,3.94313016 L6.86472282,3.93527718 Z"
		})
	})
})), ko = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 18 18",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		id: "save-file",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", {
			fillRule: "nonzero",
			d: "M11.064 9.1l2.645 2.595.03-.029.848.849-3.523 3.323-.848-.848 1.994-1.883H7.5v-1.2h4.712l-1.996-1.958.848-.849zM9.356.3L13.7 3.71V7.9h-1.2l-.001-2.633H8.5V1.5L3.1 1.5a.4.4 0 0 0-.392.32L2.7 1.9v12a.4.4 0 0 0 .32.392l.08.008h3.418v1.2H3.1a1.6 1.6 0 0 1-1.593-1.454L1.5 13.9v-12A1.6 1.6 0 0 1 2.954.307L3.1.3h6.256zM9.7 2.095v1.973l2.51-.001L9.7 2.095z"
		})
	})
})), Ao = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 18 18",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		id: "save-file",
		stroke: "currentColor",
		fill: "none",
		children: /* @__PURE__ */ M("path", {
			d: "m9.257 6.351.183.183H15.819c.34 0 .727.182 1.051.506.323.323.505.708.505 1.05v5.819c0 .316-.183.7-.52 1.035-.337.338-.723.522-1.037.522H4.182c-.352 0-.74-.181-1.058-.5-.318-.318-.499-.705-.499-1.057V5.182c0-.351.181-.736.5-1.054.32-.321.71-.503 1.057-.503H6.53l2.726 2.726Z",
			strokeWidth: "1.25"
		})
	})
})), jo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	className: "background-color-icon",
	children: /* @__PURE__ */ N("g", {
		transform: "translate(1 1)",
		fillRule: "evenodd",
		fill: "#000",
		stroke: "none",
		children: [/* @__PURE__ */ M("circle", {
			fillOpacity: ".04",
			r: "11",
			cy: "11",
			cx: "11"
		}), /* @__PURE__ */ M("path", {
			d: "M17 20.221V17h3.221A11.06 11.06 0 0 1 17 20.221zm-12 0A11.06 11.06 0 0 1 1.779 17H5v3.221zM20.221 5H17V1.779A11.06 11.06 0 0 1 20.221 5zM9 .181V1H6.411A10.919 10.919 0 0 1 9 .181zM15.589 1H13V.181c.907.167 1.775.445 2.589.819zM13 21.819V21h2.589c-.814.374-1.682.652-2.589.819zm-4 0A10.919 10.919 0 0 1 6.411 21H9v.819zm-8-6.23A10.919 10.919 0 0 1 .181 13H1v2.589zm0-9.178V9H.181C.348 8.093.626 7.225 1 6.411zM21.819 9H21V6.411c.374.814.652 1.682.819 2.589zM21 15.589V13h.819A10.919 10.919 0 0 1 21 15.589zM5 1.779V5H1.779A11.06 11.06 0 0 1 5 1.779zM5 13h4v4H5v-4zm8 0h4v4h-4v-4zM5 5h4v4H5V5zm8 0h4v4h-4V5zm0 12v4H9v-4h4zm8-8v4h-4V9h4zm-8 0v4H9V9h4zM5 9v4H1V9h4zm8-8v4H9V1h4z",
			fillOpacity: ".12"
		})]
	})
})), Mo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 32 32",
	className: "no-color-icon",
	children: /* @__PURE__ */ N("g", {
		xmlns: "http://www.w3.org/2000/svg",
		fillRule: "nonzero",
		fill: "currentColor",
		stroke: "none",
		children: [/* @__PURE__ */ M("path", { d: "M2 16c0 7.733 6.267 14 14 14s14-6.267 14-14S23.733 2 16 2 2 8.267 2 16zm-1 0C1 7.716 7.714 1 16 1c8.284 0 15 6.714 15 15 0 8.284-6.714 15-15 15-8.284 0-15-6.714-15-15z" }), /* @__PURE__ */ M("path", { d: "M6.354 26.354l-.708-.708 20-20 .708.708z" })]
	})
})), No = q(/* @__PURE__ */ M("svg", {
	className: "selected-icon",
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ M("polyline", { points: "20 6 9 17 4 12" })
})), Po = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 24 24",
	className: "stroke-icon",
	children: /* @__PURE__ */ N("g", {
		xmlns: "http://www.w3.org/2000/svg",
		stroke: "none",
		fillRule: "evenodd",
		fill: "#000",
		children: [/* @__PURE__ */ M("path", {
			d: "M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0-4c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z",
			fillRule: "nonzero",
			fillOpacity: ".04"
		}), /* @__PURE__ */ M("path", {
			d: "M12 5V1c1.491 0 2.914.297 4.21.835L14.68 5.53A6.979 6.979 0 0 0 12 5zm4.95 2.048l2.828-2.828a11.016 11.016 0 0 1 2.388 3.568l-3.697 1.53a7.01 7.01 0 0 0-1.519-2.27zM19 12h4c0 1.491-.297 2.914-.835 4.21l-3.696-1.53c.342-.826.531-1.73.531-2.68zm-2.05 4.95l2.828 2.828a11.016 11.016 0 0 1-3.567 2.387l-1.532-3.696a7.01 7.01 0 0 0 2.27-1.52zM12 19v4c-1.491 0-2.914-.297-4.21-.835l1.53-3.696c.826.342 1.73.531 2.68.531zm-4.95-2.05l-2.828 2.828a11.016 11.016 0 0 1-2.387-3.567l3.696-1.532a7.01 7.01 0 0 0 1.52 2.27zM5 12H1c0-1.491.297-2.914.835-4.21L5.53 9.32A6.979 6.979 0 0 0 5 12zm2.05-4.95L4.222 4.222a11.016 11.016 0 0 1 3.567-2.387L9.321 5.53a7.01 7.01 0 0 0-2.27 1.52z",
			fillOpacity: ".12"
		})]
	})
})), Fo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ M("g", {
		xmlns: "http://www.w3.org/2000/svg",
		id: "icon-border-white",
		stroke: "none",
		strokeWidth: "1",
		fill: "none",
		fillRule: "evenodd",
		opacity: "0.1",
		children: /* @__PURE__ */ N("g", {
			id: "Group",
			children: [/* @__PURE__ */ M("path", {
				d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z",
				fill: "#000000",
				fillRule: "nonzero"
			}), /* @__PURE__ */ M("path", {
				d: "M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z M12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z",
				fill: "#000000",
				fillRule: "nonzero"
			})]
		})
	})
})), Io = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 24 32",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ N("g", {
		transform: "translate(0 14)",
		fillRule: "evenodd",
		fill: "none",
		children: [/* @__PURE__ */ M("path", { d: "M-18-19h60v40h-60z" }), /* @__PURE__ */ M("path", {
			d: "M0 0h24v2H0z",
			fill: "currentColor"
		})]
	})
})), Lo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 24 32",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		transform: "translate(0 14)",
		fillRule: "evenodd",
		fill: "none",
		children: /* @__PURE__ */ M("g", {
			fill: "currentColor",
			children: /* @__PURE__ */ M("path", { d: "M0 0h6v2H0zM9 0h6v2H9zM18 0h6v2h-6z" })
		})
	})
})), Ro = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 24 32",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		transform: "translate(0 14)",
		fillRule: "evenodd",
		fill: "none",
		children: /* @__PURE__ */ N("g", {
			fill: "currentColor",
			children: [
				/* @__PURE__ */ M("rect", {
					rx: "1",
					height: "2",
					width: "2"
				}),
				/* @__PURE__ */ M("rect", {
					rx: "1",
					x: "4",
					height: "2",
					width: "2"
				}),
				/* @__PURE__ */ M("rect", {
					rx: "1",
					x: "8",
					height: "2",
					width: "2"
				}),
				/* @__PURE__ */ M("rect", {
					rx: "1",
					x: "12",
					height: "2",
					width: "2"
				}),
				/* @__PURE__ */ M("rect", {
					rx: "1",
					x: "16",
					height: "2",
					width: "2"
				}),
				/* @__PURE__ */ M("rect", {
					rx: "1",
					x: "20",
					height: "2",
					width: "2"
				})
			]
		})
	})
})), zo = ({ currentColor: e }) => /* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	className: "font-color-icon",
	children: /* @__PURE__ */ N("g", {
		id: "font-color",
		strokeWidth: "1",
		fillRule: "evenodd",
		stroke: "none",
		fill: "currentColor",
		children: [/* @__PURE__ */ M("path", {
			id: "secondary-color",
			d: "M1.999 15.011h11.998V13.81H1.999z",
			fill: e || "#333333"
		}), /* @__PURE__ */ M("path", {
			d: "M6.034 7.59h4.104L8.086 2.297 6.034 7.59zm-.465 1.2l-1.437 3.707H2.845L7.301 1h1.287l-.001.004h.286l4.454 11.492h-1.288L10.603 8.79H5.569z",
			id: "A"
		})]
	})
}), Bo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("g", {
			id: "undo-cion",
			transform: "translate(1 1)",
			children: /* @__PURE__ */ M("path", {
				d: "M3.84 5.825a.6.6 0 0 1 .063.774l-.064.075a.6.6 0 0 1-.774.063l-.074-.063L.176 3.859a.6.6 0 0 1-.064-.775l.064-.074L3.01.176a.6.6 0 0 1 .912.774l-.063.074-1.795 1.794h6.851a5.1 5.1 0 0 1 .216 10.196l-.216.004h-4a.6.6 0 0 1-.097-1.192l.097-.008h4a3.9 3.9 0 0 0 .201-7.795l-.2-.005H2.033l1.805 1.807z",
				id: "undo-icon-path"
			})
		})
	})
})), Vo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("g", {
			id: "redo-cion",
			transform: "matrix(-1 0 0 1 15.015 1)",
			children: /* @__PURE__ */ M("path", {
				d: "M3.84 5.825a.6.6 0 0 1 .063.774l-.064.075a.6.6 0 0 1-.774.063l-.074-.063L.176 3.859a.6.6 0 0 1-.064-.775l.064-.074L3.01.176a.6.6 0 0 1 .912.774l-.063.074-1.795 1.794h6.851a5.1 5.1 0 0 1 .216 10.196l-.216.004h-4a.6.6 0 0 1-.097-1.192l.097-.008h4a3.9 3.9 0 0 0 .201-7.795l-.2-.005H2.033l1.805 1.807z",
				id: "redo-icon-path"
			})
		})
	})
})), Ho = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 20 20",
	fill: "none",
	stroke: "currentColor",
	children: /* @__PURE__ */ M("path", {
		strokeWidth: "1.25",
		d: "M3.333 5.833h13.334M8.333 9.167v5M11.667 9.167v5M4.167 5.833l.833 10c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.746 1.667-1.667l.833-10M7.5 5.833v-2.5c0-.46.373-.833.833-.833h3.334c.46 0 .833.373.833.833v2.5"
	})
})), Uo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 20 20",
	fill: "none",
	stroke: "currentColor",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ N("g", {
		strokeWidth: "1.25",
		children: [/* @__PURE__ */ M("path", { d: "M14.375 6.458H8.958a2.5 2.5 0 0 0-2.5 2.5v5.417a2.5 2.5 0 0 0 2.5 2.5h5.417a2.5 2.5 0 0 0 2.5-2.5V8.958a2.5 2.5 0 0 0-2.5-2.5Z" }), /* @__PURE__ */ M("path", { d: "M11.667 3.125c.517 0 .986.21 1.325.55.34.338.55.807.55 1.325v1.458H8.333c-.485 0-.927.185-1.26.487-.343.312-.57.75-.609 1.24l-.005 5.357H5a1.87 1.87 0 0 1-1.326-.55 1.87 1.87 0 0 1-.549-1.325V5c0-.518.21-.987.55-1.326.338-.34.807-.549 1.325-.549h6.667Z" })]
	})
})), Wo = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 1024 1024",
	fill: "currentColor",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("path", { d: "M170.794667 896c3.456 0 6.912-0.426667 10.325333-1.28l170.666667-42.666667c7.509333-1.877333 14.378667-5.76 19.84-11.221333L896.128 316.330667c16.128-16.128 25.002667-37.546667 25.002667-60.330667s-8.874667-44.202667-25.002667-60.330667L828.458667 128c-32.256-32.256-88.405333-32.256-120.661334 0L183.296 652.501333a42.794667 42.794667 0 0 0-11.221333 19.797334l-42.666667 170.666666A42.666667 42.666667 0 0 0 170.794667 896z m597.333333-707.669333L835.797333 256l-67.669333 67.669333L700.458667 256l67.669333-67.669333zM251.989333 704.469333l388.138667-388.138666L707.797333 384l-388.181333 388.138667-90.197333 22.528 22.570666-90.197334z" })
})), Go = q(/* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("g", {
		id: "image",
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M10.496 7c-.824 0-1.572-.675-1.498-1.5 0-.825.674-1.5 1.498-1.5.823 0 1.497.675 1.497 1.5S11.319 7 10.496 7zM13.8 9.476V2.2H2.2v5.432l.1-.078C3.132 6.904 4.029 6.5 5 6.5c.823 0 1.552.27 2.342.778.226.145.449.304.735.518.06.045.546.413.69.52 1.634 1.21 2.833 1.6 4.798 1.207l.235-.047zm0 1.523V10.7c-5 1-6.3-3-8.8-3-1.5 0-2.8 1.6-2.8 1.6v4.6h11.6V11zM14 1c.6 0 1 .536 1 1.071v11.784c0 .642-.4 1.071-1 1.071H2c-.6 0-1-.429-1-1.07V2.07c0-.535.4-1.07 1-1.07h12z" })
	})
})), Ko = q(/* @__PURE__ */ M("svg", {
	stroke: "currentColor",
	viewBox: "0 0 24 24",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ N("g", {
		strokeWidth: 1.8,
		fill: "none",
		children: [
			/* @__PURE__ */ M("path", {
				stroke: "none",
				d: "M0 0h24v24H0z",
				fill: "none"
			}),
			/* @__PURE__ */ M("path", { d: "M12 3l-4 7h8z" }),
			/* @__PURE__ */ M("path", { d: "M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }),
			/* @__PURE__ */ M("path", { d: "M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" })
		]
	})
})), qo = q(/* @__PURE__ */ M("svg", {
	stroke: "currentColor",
	viewBox: "0 0 512 512",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("path", {
		stroke: "none",
		fill: "currentColor",
		d: "M407.48,111.18C335.587,108.103 269.573,152.338 245.08,220C220.587,152.338 154.573,108.103 82.68,111.18C80.285,168.229 107.577,222.632 154.74,254.82C178.908,271.419 193.35,298.951 193.27,328.27L193.27,379.13L296.9,379.13L296.9,328.27C296.816,298.953 311.255,271.42 335.42,254.82C382.596,222.644 409.892,168.233 407.48,111.18Z"
	})
})), Jo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	version: "1.1",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", { d: "M14.85,2.5 C15.4851275,2.5 16,3.01487254 16,3.65 L16,12.35 C16,12.9851275 15.4851275,13.5 14.85,13.5 L1.15,13.5 C0.514872538,13.5 0,12.9851275 0,12.35 L0,3.65 C0,3.01487254 0.514872538,2.5 1.15,2.5 L14.85,2.5 Z M14.85,3.7 L1.15,3.7 C1.17735931,3.7 1.2,3.72264069 1.2,3.75 L1.2,12.25 C1.2,12.2773593 1.17735931,12.3 1.15,12.3 L14.85,12.3 C14.8226407,12.3 14.8,12.2773593 14.8,12.25 L14.8,3.75 C14.8,3.72264069 14.8226407,3.7 14.85,3.7 Z M3.5,10.5 L3.5,5.5 L5.25,5.5 L7,7.8 L8.75,5.5 L10.5,5.5 L10.5,10.5 L8.75,10.5 L8.75,7.5 L7,9.8 L5.25,7.5 L5.25,10.5 L3.5,10.5 Z M12.5,10.5 L11,8.5 L12.5,8.5 L12.5,5.5 L11,5.5 L12.5,5.5 L12.5,8.5 L14,8.5 L12.5,10.5 Z" })
	})
})), Yo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		children: /* @__PURE__ */ M("path", {
			d: "M12.253 4.13h-1.2v-1a2.8 2.8 0 0 0-5.6 0v4a2.8 2.8 0 0 0 2.8 2.8v1.2a4 4 0 0 1-4-4v-4a4 4 0 0 1 8 0v1zm-8 8h1.2v1a2.8 2.8 0 0 0 5.6 0v-4a2.8 2.8 0 0 0-2.8-2.8v-1.2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0v-1z",
			transform: "rotate(46 8.253 8.13)"
		})
	})
})), Xo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ N("g", {
		stroke: "none",
		fill: "currentColor",
		children: [
			/* @__PURE__ */ M("circle", {
				cx: "3",
				cy: "8",
				r: "1.2"
			}),
			/* @__PURE__ */ M("circle", {
				cx: "8",
				cy: "8",
				r: "1.2"
			}),
			/* @__PURE__ */ M("circle", {
				cx: "13",
				cy: "8",
				r: "1.2"
			})
		]
	})
})), Zo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		children: /* @__PURE__ */ M("path", { d: "M8.44521878,4.21103025 C8.58299906,3.97171622 8.8886944,3.88940684 9.12800843,4.02718711 L15.242109,7.54725833 C15.3194119,7.59176394 15.3834015,7.65613893 15.4274422,7.73370766 C15.5637831,7.97384463 15.4796398,8.27904026 15.2395028,8.41538118 L9.12748155,11.8855614 C9.0176214,11.947936 8.88822223,11.9664118 8.76529593,11.9372749 C8.4965984,11.8735862 8.33040588,11.604134 8.39409456,11.3354364 L9.018,8.69941945 L1.5,8.7 C1.22385763,8.7 1,8.47614237 1,8.2 L1,8 C1,7.72385763 1.22385763,7.5 1.5,7.5 L9.075,7.49941945 L8.39165922,4.57430951 C8.3700078,4.48168206 8.37536432,4.38547957 8.40609313,4.29679626 Z" })
	})
})), Qo = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		children: /* @__PURE__ */ M("rect", {
			x: "1",
			y: "7.5",
			width: "14",
			height: "1.2",
			rx: ".5"
		})
	})
})), $o = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		fillRule: "evenodd",
		children: /* @__PURE__ */ M("path", { d: "M13,4 L13,5.2 L6,5.2 L6,4 L13,4 Z M14,7.4 L14,8.6 L6,8.6 L6,7.4 L14,7.4 Z M10,10.8 L10,12 L6,12 L6,10.8 L10,10.8 Z M1,15.0041595 L1,13.8041595 L2.79468336,13.8041595 L2.79468336,9.78041534 C2.79468336,9.50369117 2.86643344,9.23268025 3.0016431,8.99336795 L3.09031773,8.85379228 L3.67068336,8.03815953 L3.05107199,7.08070632 C2.91160731,6.86500725 2.82653611,6.61956432 2.80205305,6.36536742 L2.79468336,6.21196672 L2.79468336,2.20015953 L1,2.2 L1,1 L3.39468336,1 C3.72605421,1 3.99468365,1.26862915 3.99468365,1.6 L3.99468365,6.21196672 C3.99468365,6.28902439 4.01694112,6.3644419 4.05878052,6.42915162 L4.89853762,7.72793804 C5.03190909,7.93421321 5.02607838,8.20094898 4.88382047,8.40119903 L4.06859195,9.54875958 C4.02051339,9.61643761 3.99468365,9.69739809 3.99468365,9.78041534 L3.99468365,14.4041595 C3.99468365,14.7355304 3.72605421,15.0041595 3.39468336,15.0041595 L1,15.0041595 Z" })
	})
})), es = q(/* @__PURE__ */ M("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16",
	children: /* @__PURE__ */ M("g", {
		stroke: "none",
		fill: "currentColor",
		fillRule: "evenodd",
		children: /* @__PURE__ */ M("path", { d: "M9,4 L9,5.2 L2,5.2 L2,4 L9,4 Z M10,7.4 L10,8.6 L2,8.6 L2,7.4 L10,7.4 Z M6,10.8 L6,12 L2,12 L2,10.8 L6,10.8 Z M15.0155409,1 L15.0155409,2.2 L13.2208576,2.2 L13.2208576,6.22374419 C13.2208576,6.50046836 13.1491075,6.77147928 13.0138978,7.01079158 L12.9252232,7.15036725 L12.3448576,7.966 L12.9644689,8.92345321 C13.1039336,9.13915228 13.1890048,9.38459521 13.2134879,9.63879211 L13.2208576,9.79219281 L13.2208576,13.804 L15.0155409,13.8041595 L15.0155409,15.0041595 L12.6208576,15.0041595 C12.2894867,15.0041595 12.0208573,14.7355304 12.0208573,14.4041595 L12.0208573,9.79219281 C12.0208573,9.71513514 11.9985998,9.63971763 11.9567604,9.57500791 L11.1170033,8.2762215 C10.9836318,8.06994632 10.9894625,7.80321055 11.1317204,7.6029605 L11.946949,6.45539995 C11.9950275,6.38772192 12.0208573,6.30676144 12.0208573,6.22374419 L12.0208573,1.6 C12.0208573,1.26862915 12.2894867,1 12.6208576,1 L15.0155409,1 Z" })
	})
})), ts = q(/* @__PURE__ */ M("svg", {
	width: "15",
	height: "15",
	viewBox: "0 0 15 15",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("path", {
		d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
		fill: "currentColor",
		fillRule: "evenodd",
		clipRule: "evenodd"
	})
})), ns = q(/* @__PURE__ */ M("svg", {
	width: "15",
	height: "15",
	viewBox: "0 0 15 15",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("path", {
		d: "M6.15803 11.8648C5.95657 11.6759 5.94637 11.3595 6.13523 11.158L9.56464 7.5L6.13523 3.84197C5.94637 3.64052 5.95657 3.3241 6.15803 3.13523C6.35949 2.94637 6.67591 2.95657 6.86477 3.15803L10.6148 7.15803C10.7951 7.35036 10.7951 7.64964 10.6148 7.84197L6.86477 11.842C6.67591 12.0434 6.35949 12.0536 6.15803 11.8648Z",
		fill: "currentColor",
		fillRule: "evenodd",
		clipRule: "evenodd"
	})
})), rs = q(/* @__PURE__ */ M("svg", {
	width: "15",
	height: "15",
	viewBox: "0 0 15 15",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ M("path", {
		d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
		fill: "currentColor",
		fillRule: "evenodd",
		clipRule: "evenodd"
	})
})), is = (e) => /* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	...e,
	children: /* @__PURE__ */ M("path", {
		d: "M4 10L8 6L12 10",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), as = (e) => /* @__PURE__ */ M("svg", {
	viewBox: "0 0 16 16",
	xmlns: "http://www.w3.org/2000/svg",
	...e,
	children: /* @__PURE__ */ M("path", {
		d: "M4 6L8 10L12 6",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), os = "TRANSPARENT", ss = "NO_COLOR", cs = "#FFFFFF", ls = [
	{
		name: "color.none",
		value: ss
	},
	{
		name: "color.default",
		value: f
	},
	{
		name: "color.white",
		value: cs
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
], us = .25, ds = (e) => ls.find((t) => t.name === e)?.value, fs = [
	{ strokeWidth: 2 },
	{
		strokeColor: ds("color.red") || ls[5].value,
		strokeWidth: 6
	},
	{
		strokeColor: ds("color.green") || ls[6].value,
		strokeWidth: 10
	}
], ps = (e = {}) => {
	let t = {};
	return typeof e.strokeColor == "string" && e.strokeColor && (t.strokeColor = e.strokeColor), typeof e.strokeWidth == "number" && (t.strokeWidth = e.strokeWidth), t;
}, ms = {
	[le.default]: {
		strokeColor: f,
		fill: "none"
	},
	[le.colorful]: {
		strokeColor: "#06ADBF",
		fill: "none"
	},
	[le.soft]: {
		strokeColor: "#6D89C1",
		fill: "none"
	},
	[le.retro]: {
		strokeColor: "#E9C358",
		fill: "none"
	},
	[le.dark]: {
		strokeColor: "#FFFFFF",
		fill: "none"
	},
	[le.starry]: {
		strokeColor: "#42ABE5",
		fill: "none"
	}
}, J = /* @__PURE__ */ function(e) {
	return e.eraser = "eraser", e.nibPen = "nibPen", e.feltTipPen = "feltTipPen", e.artisticBrush = "artisticBrush", e.markerHighlight = "markerHighlight", e;
}({}), hs = "freehand", gs = { isFreehand: (e) => typeof e == "object" && !!e && "type" in e && e.type === "freehand" }, _s = [
	"preset-1",
	"preset-2",
	"preset-3"
], vs = [{
	icon: Wo,
	pointer: J.feltTipPen,
	titleKey: "toolbar.pen"
}, {
	icon: fo,
	pointer: J.eraser,
	titleKey: "toolbar.eraser"
}];
//#endregion
//#region src/components/popover/popover.tsx
function ys({ initialOpen: e = !1, placement: t = "bottom", modal: n, sideOffset: r, open: i, onOpenChange: a } = {}) {
	let [o, s] = E.useState(e), [c, l] = E.useState(), [u, d] = E.useState(), f = i ?? o, p = a ?? s, m = Mn({
		placement: t,
		open: f,
		onOpenChange: p,
		whileElementsMounted: En,
		middleware: [
			On(r || 4),
			Dn({
				crossAxis: t.includes("-"),
				fallbackAxisSideDirection: "end",
				padding: 5
			}),
			kn({ padding: 5 })
		]
	}), h = m.context, g = Pn([
		An(h, { enabled: i == null }),
		jn(h),
		Rn(h)
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
var bs = E.createContext(null), xs = () => {
	let e = E.useContext(bs);
	if (e == null) throw Error("Popover components must be wrapped in <Popover />");
	return e;
};
function Y({ children: e, modal: t = !1, ...n }) {
	let r = ys({
		modal: t,
		...n
	});
	return /* @__PURE__ */ M(bs.Provider, {
		value: r,
		children: e
	});
}
var X = E.forwardRef(function({ children: e, asChild: t = !1, ...n }, r) {
	let i = xs(), a = e.ref, o = Ln([
		i.refs.setReference,
		r,
		a
	]);
	return t && E.isValidElement(e) ? E.cloneElement(e, i.getReferenceProps({
		ref: o,
		...n,
		...e.props,
		"data-state": i.open ? "open" : "closed"
	})) : /* @__PURE__ */ M("button", {
		ref: o,
		type: "button",
		"data-state": i.open ? "open" : "closed",
		...i.getReferenceProps(n),
		children: e
	});
}), Z = E.forwardRef(function({ container: e, initialFocus: t, style: n, ...r }, i) {
	let { context: a, ...o } = xs(), s = Ln([o.refs.setFloating, i]);
	return a.open ? /* @__PURE__ */ M(Tn, {
		root: e,
		children: /* @__PURE__ */ M(Sn, {
			context: a,
			modal: o.modal,
			initialFocus: t,
			children: /* @__PURE__ */ M("div", {
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
}), Ss = (e, t, n) => Math.min(n, Math.max(t, e)), Cs = (e) => {
	let t = e.toString(), n = t.indexOf(".");
	return n === -1 ? 0 : t.length - n - 1;
}, ws = ({ min: e = 0, max: t = 100, step: n = 1, defaultValue: r = 100, disabled: i = !1, onChange: a, beforeStart: o, afterEnd: s, title: c, variant: l = "default", compact: u = !1 }) => {
	let [d, f] = k(!1), [p, m] = k(r), h = O(null), g = Cs(n), _ = (p - e) / (t - e) * 100;
	D(() => {
		m(r);
	}, [r]);
	let v = (r) => {
		let i = Ss(Number((Math.round((r - e) / n) * n + e).toFixed(g)), e, t);
		m(i), a?.(i);
	}, y = (n) => {
		if (!h.current) return;
		let r = h.current.getBoundingClientRect();
		v(e + Ss((n - r.left) / r.width, 0, 1) * (t - e));
	}, b = (e, t) => {
		e.hasPointerCapture(t) && e.releasePointerCapture(t), f(!1), s?.();
	};
	return /* @__PURE__ */ M("div", {
		"data-tooltip": !0,
		title: c,
		className: A("slider-container", {
			disabled: i,
			"slider-container--neutral": l === "neutral",
			"slider-container--compact": u
		}),
		children: /* @__PURE__ */ N("div", {
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
			children: [/* @__PURE__ */ M("div", {
				className: "slider-range",
				style: { width: `${_}%` }
			}), /* @__PURE__ */ M("div", {
				className: "slider-thumb",
				style: { left: `${_}%` }
			})]
		})
	});
};
//#endregion
//#region src/utils/color.ts
function Ts(e) {
	return Math.round((100 - e) / 100 * 255);
}
function Es(e) {
	return Math.round((1 - e / 255) * 100);
}
function Ds(e, t) {
	return `${e}${Ts(100 - t).toString(16).padStart(2, "0")}`;
}
function Os(e) {
	e = e.replace(/^#/, "");
	let t;
	if (e.length === 8) t = parseInt(e.slice(6, 8), 16);
	else if (e.length === 4) t = parseInt(e.slice(3, 4).repeat(2), 16);
	else return 100;
	return 100 - Es(t);
}
function ks(e) {
	return e !== "none";
}
function As(e) {
	let t = e.replace(/^#/, "").toUpperCase();
	return t.length === 8 ? "#" + t.slice(0, 6) : t.length === 4 ? "#" + t.slice(0, 3) : t.length === 6 || t.length === 3 ? "#" + t : e;
}
function js(e) {
	return e === os;
}
function Ms(e) {
	return e === "#FFFFFF" || e === "#FFFFFF".toLocaleLowerCase();
}
function Ns(e) {
	return e === 0;
}
function Ps(e) {
	return e === 100;
}
function Fs(e) {
	return e === ss;
}
function Is(e) {
	return !e || e === f;
}
function Ls(e) {
	return C.getThemeColors(e).find((t) => t.mode === e.theme.themeColorMode)?.boardBackground;
}
//#endregion
//#region src/components/color-picker.tsx
var Rs = io(ls, 4), zs = lt.forwardRef((e, t) => {
	let n = H(), { t: r } = U(), { currentColor: i, onColorChange: a, onOpacityChange: o, hideOpacitySlider: s = !1 } = e, [c, l] = k(i && As(i) || Rs[0][0].value), [u, d] = k(() => {
		let e = i && Os(i);
		return Fe(e) ? 100 : e;
	});
	return /* @__PURE__ */ N(G.Col, {
		gap: 3,
		children: [!s && /* @__PURE__ */ M(ws, {
			title: r("popupToolbar.opacity"),
			step: 5,
			defaultValue: u,
			onChange: (e) => {
				d(e), o(e);
			},
			beforeStart: () => {
				ne.set(n, !0), se.setSplittingOnce(n, !0);
			},
			afterEnd: () => {
				ne.set(n, !1);
			},
			disabled: c === ls[0].value
		}), /* @__PURE__ */ M(G.Col, {
			gap: 2,
			children: Rs.map((e, t) => /* @__PURE__ */ M(G.Row, {
				gap: 2,
				children: e.map((e) => /* @__PURE__ */ N("button", {
					className: `color-select-item ${c === e.value ? "active" : ""} ${Fs(e.value) ? "no-color" : ""}`,
					style: {
						backgroundColor: Fs(e.value) ? os : e.value,
						color: Is(e.value) ? cs : f
					},
					onClick: () => {
						l(e.value), e.value === "NO_COLOR" && d(100), a(e.value);
					},
					title: r(e.name || "color.unknown"),
					"aria-label": r(e.name || "color.unknown"),
					children: [Fs(e.value) && Mo, c === e.value && No]
				}, e.value))
			}, t))
		})]
	});
});
//#endregion
//#region src/plugins/freehand/utils.ts
function Bs() {
	return [J.feltTipPen, J.eraser];
}
var Vs = (e) => {
	let t = e.appState, n = t?.toolState?.activeFreehandPresetIndex || 0;
	return ps(t?.toolState?.freehandPresets?.[n] || fs[n] || fs[0]);
}, Hs = (e, t, n = {}) => ({
	id: Ee(),
	type: "freehand",
	shape: e,
	points: t,
	...ps(n)
}), Us = (e, t, n) => {
	let r = ze(e, n, t) || n, i = t.points, a = Ys(e, t);
	return on(t.points) && a && a !== "none" && Le(r, i) || cn(i, r);
}, Ws = (e, t, n) => ln(ce.getRectangleByPoints([n.anchor, n.focus]), t.points, t.angle), Gs = (e) => Ce(e).filter((e) => gs.isFreehand(e)), Ks = (e) => ms[e].strokeColor, qs = (e) => ms[e].fill, Js = (e, t) => {
	let n = Ks(e.theme.themeColorMode);
	return t.strokeColor || n;
}, Ys = (e, t) => {
	let n = gs.isFreehand(t) && rn(e, t) ? qs(e.theme.themeColorMode) : Kt.fill;
	return t.fill || n;
};
function Xs(e, t) {
	return Math.exp(-(e * e) / (2 * t * t));
}
function Zs(e, t, n) {
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
			let o = a(n + i), d = Xs(i, t);
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
var Qs = (e) => e.toFixed(2).replace(/\.?0+$/, ""), $s = 16, ec = $s / 2, tc = 7, nc = 2, rc = 5.5, ic = "var(--color-gray-30)", ac = (e) => nc + (Math.min(Math.max(e, 1), 24) - 1) / 23 * (rc - nc), oc = ({ preset: e, selected: t, container: n, onSelect: r, onColorChange: i, onSizeChange: a }) => {
	let { t: o } = U(), s = H(), [c, l] = lt.useState(!1), u = e.color || Ks(s.theme.themeColorMode), d = Ms(u), f = ac(e.size), p = t || c;
	return lt.useEffect(() => {
		t || l(!1);
	}, [t]), /* @__PURE__ */ N(Y, {
		open: c,
		sideOffset: 12,
		onOpenChange: (e) => {
			if (e) {
				r(), l(!0);
				return;
			}
			l(!1);
		},
		children: [/* @__PURE__ */ M(X, {
			asChild: !0,
			children: /* @__PURE__ */ M(K, {
				className: A("freehand-style-preset"),
				selected: p,
				type: "button",
				size: "small",
				visible: !0,
				"aria-label": `${o("toolbar.pen")} ${e.id}`,
				onPointerUp: () => {
					if (t) {
						l(!c);
						return;
					}
					r(), l(!1);
				},
				children: /* @__PURE__ */ M("span", {
					className: "freehand-style-preset__preview",
					children: /* @__PURE__ */ N("svg", {
						className: "freehand-style-preset__preview-svg",
						viewBox: `0 0 ${$s} ${$s}`,
						"aria-hidden": "true",
						focusable: "false",
						children: [/* @__PURE__ */ M("circle", {
							className: "freehand-style-preset__preview-base",
							cx: ec,
							cy: ec,
							r: 7.5,
							stroke: "none"
						}), d ? /* @__PURE__ */ N(j, { children: [/* @__PURE__ */ M("circle", {
							className: "freehand-style-preset__preview-ring-contrast",
							cx: ec,
							cy: ec,
							r: tc,
							fill: "none",
							stroke: ic,
							strokeWidth: 1
						}), /* @__PURE__ */ M("circle", {
							className: "freehand-style-preset__preview-fill-contrast",
							cx: ec,
							cy: ec,
							r: f,
							fill: u,
							stroke: ic,
							strokeWidth: 1
						})] }) : /* @__PURE__ */ N(j, { children: [/* @__PURE__ */ M("circle", {
							className: "freehand-style-preset__preview-ring",
							cx: ec,
							cy: ec,
							r: tc,
							fill: "none",
							stroke: u,
							strokeWidth: 1
						}), /* @__PURE__ */ M("circle", {
							className: "freehand-style-preset__preview-fill",
							cx: ec,
							cy: ec,
							r: f,
							fill: u,
							stroke: "none"
						})] })]
					})
				})
			})
		}), /* @__PURE__ */ M(Z, {
			container: n,
			children: /* @__PURE__ */ M(W, {
				padding: 4,
				className: "freehand-style-setting",
				children: /* @__PURE__ */ N(G.Col, {
					gap: 3,
					children: [/* @__PURE__ */ M(ws, {
						title: Qs(e.size),
						min: 1,
						max: 24,
						step: us,
						defaultValue: e.size,
						variant: "neutral",
						compact: !0,
						onChange: (e) => {
							a(e);
						}
					}), /* @__PURE__ */ M(zs, {
						currentColor: e.color,
						hideOpacitySlider: !0,
						onColorChange: (e) => {
							i(Fs(e) ? void 0 : e);
						},
						onOpacityChange: () => {}
					})]
				})
			})
		})]
	});
}, sc = () => /* @__PURE__ */ M("span", {
	className: "freehand-style-divider",
	"aria-hidden": "true"
});
sc.displayName = "FreehandStyleDivider";
var cc = (e) => _s[e] || `preset-${e + 1}`, lc = (e, t) => ({
	id: cc(e),
	color: t.strokeColor,
	size: t.strokeWidth
}), uc = ({ freehandPresets: e, activePresetIndex: t, onPresetSelect: n, onStrokeColorSelect: r, onStrokeWidthSelect: i, onPointerUp: a }) => {
	let { t: o } = U(), s = H(), c = C.getBoardContainer(s), l = e.length ? e : fs, d = s.pointer !== J.eraser, f = (e) => {
		n(e), F(s, P.drawing), u.updatePointerType(s, J.feltTipPen), a(J.feltTipPen);
	};
	return /* @__PURE__ */ M(W, {
		padding: 1,
		children: /* @__PURE__ */ N(G.Row, {
			gap: 1,
			align: "start",
			className: "freehand-style-list",
			children: [
				vs.map((e, t) => /* @__PURE__ */ M(K, {
					className: A({ fillable: !1 }),
					selected: s.pointer === e.pointer,
					type: "icon",
					size: "small",
					visible: !0,
					icon: e.icon,
					title: o(e.titleKey),
					"aria-label": o(e.titleKey),
					onPointerDown: () => {
						F(s, P.dnd), u.updatePointerType(s, e.pointer);
					},
					onPointerUp: () => {
						F(s, P.drawing), a(e.pointer);
					}
				}, t)),
				d && vs.length > 0 && l.length > 0 && /* @__PURE__ */ M(sc, {}),
				d && l.map((e, n) => /* @__PURE__ */ M(oc, {
					preset: lc(n, e),
					selected: t === n,
					container: c,
					onSelect: () => {
						f(n);
					},
					onColorChange: (e) => {
						r(n, e);
					},
					onSizeChange: (e) => {
						i(n, e);
					}
				}, cc(n)))
			]
		})
	});
}, dc = [
	{
		icon: mo,
		title: "toolbar.shape.rectangle",
		pointer: I.rectangle
	},
	{
		icon: go,
		title: "toolbar.shape.ellipse",
		pointer: I.ellipse
	},
	{
		icon: _o,
		title: "toolbar.shape.triangle",
		pointer: I.triangle
	},
	{
		icon: bo,
		title: "toolbar.shape.roundRectangle",
		pointer: I.roundRectangle
	},
	{
		icon: $o,
		title: "toolbar.shape.noteCurlyRight",
		pointer: Yt.noteCurlyRight
	},
	{
		icon: es,
		title: "toolbar.shape.noteCurlyLeft",
		pointer: Yt.noteCurlyLeft
	},
	{
		icon: vo,
		title: "toolbar.shape.diamond",
		pointer: I.diamond
	},
	{
		icon: yo,
		title: "toolbar.shape.parallelogram",
		pointer: I.parallelogram
	},
	{
		icon: ho,
		title: "toolbar.shape.terminal",
		pointer: Yt.terminal
	}
], fc = io(dc, 5), pc = ({ onPointerUp: e }) => {
	let t = H(), { t: n } = U();
	return /* @__PURE__ */ M(W, {
		padding: 1,
		children: /* @__PURE__ */ M(G.Col, {
			gap: 1,
			children: fc.map((r, i) => /* @__PURE__ */ M(G.Row, {
				gap: 1,
				children: r.map((r, i) => /* @__PURE__ */ M(K, {
					className: A({ fillable: !1 }),
					type: "icon",
					size: "small",
					visible: !0,
					selected: C.isPointer(t, r.pointer),
					icon: r.icon,
					title: n(r.title || "toolbar.shape"),
					"aria-label": n(r.title || "toolbar.shape"),
					onPointerDown: () => {
						F(t, P.dnd), u.updatePointerType(t, r.pointer);
					},
					onPointerUp: () => {
						F(t, P.drawing), e(r.pointer);
					}
				}, i))
			}, i))
		})
	});
}, mc = [
	{
		icon: xo,
		title: "toolbar.arrow.straight",
		pointer: Gt.straight
	},
	{
		icon: So,
		title: "toolbar.arrow.elbow",
		pointer: Gt.elbow
	},
	{
		icon: Co,
		title: "toolbar.arrow.curve",
		pointer: Gt.curve
	}
], hc = ({ onPointerUp: e }) => {
	let t = H(), { t: n } = U();
	return /* @__PURE__ */ M(W, {
		padding: 1,
		children: /* @__PURE__ */ M(G.Row, {
			gap: 1,
			children: mc.map((r, i) => /* @__PURE__ */ M(K, {
				className: A({ fillable: !1 }),
				type: "icon",
				size: "small",
				visible: !0,
				selected: C.isPointer(t, r.pointer),
				icon: r.icon,
				title: n(r.title),
				"aria-label": n(r.title),
				onPointerDown: () => {
					F(t, P.drawing), u.updatePointerType(t, r.pointer);
				},
				onPointerUp: () => {
					e(r.pointer);
				}
			}, i))
		})
	});
}, gc = /* @__PURE__ */ function(e) {
	return e.mermaidToDrawnix = "mermaidToDrawnix", e.markdownToDrawnix = "markdownToDrawnix", e;
}({}), _c = () => ({
	pointer: T.hand,
	lastShapePointer: I.rectangle,
	lastArrowPointer: Gt.straight,
	lastFreehandPointer: J.feltTipPen,
	activeFreehandPresetIndex: 0,
	freehandPresets: fs.map((e) => ({ ...e }))
}), vc = (e) => {
	let t = _c(), n = e?.freehandPresets?.length ? e.freehandPresets : t.freehandPresets;
	return {
		...t,
		...e,
		freehandPresets: n.map((e) => ({ ...e }))
	};
}, yc = ut(null), Q = () => {
	let e = pt(yc);
	if (!e) throw Error("The `useDrawnix` hook must be used inside the <Drawnix> component's context.");
	return e;
}, bc = lt.createContext({}), xc = (e = "", t = !1) => `menu-item menu-item-base ${e} ${t ? "menu-item--active" : ""}`.trim(), Sc = (e, t) => {
	let n = pt(bc);
	return eo(e, (e) => {
		let r = new CustomEvent(ea.MENU_ITEM_SELECT, {
			bubbles: !0,
			cancelable: !0
		});
		t?.(r), r.defaultPrevented || n.onSelect?.(r);
	});
}, Cc = ({ children: e, className: t = "", onSelect: n, style: r, containerStyle: i }) => {
	let a = A(`menu ${t}`).trim();
	return /* @__PURE__ */ M(bc.Provider, {
		value: { onSelect: n },
		children: /* @__PURE__ */ M("div", {
			className: a,
			style: r,
			"data-testid": "menu",
			children: /* @__PURE__ */ M(W, {
				className: "menu-container",
				padding: 2,
				style: i,
				children: e
			})
		})
	});
};
Cc.displayName = "Menu";
//#endregion
//#region src/components/menu/menu-item-content.tsx
var wc = ({ icon: e, shortcut: t, children: n, hasSubmenu: r }) => /* @__PURE__ */ N(j, { children: [
	e && /* @__PURE__ */ M("div", {
		className: "menu-item__left",
		children: e
	}),
	/* @__PURE__ */ M("div", {
		className: "menu-item__text",
		children: n
	}),
	(t || r) && /* @__PURE__ */ N("div", {
		className: "menu-item__right",
		children: [t && /* @__PURE__ */ M("div", {
			className: "menu-item__shortcut",
			children: t
		}), r && /* @__PURE__ */ M("div", {
			className: "menu-item__submenu-indicator",
			children: ns
		})]
	})
] }), Tc = (e) => lt.isValidElement(e) && e.type?.__DRAWNIX_MENU_ITEM_CONTENT === !0, $ = ({ icon: e, onSelect: t, children: n, shortcut: r, className: i, selected: a, submenu: o, ...s }) => {
	let [c, l] = k(!1), u = O(), d = Sc(s.onClick, t), f = !!o, p = n && Tc(n) ? n : n ? /* @__PURE__ */ M(wc, {
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
	return o ? /* @__PURE__ */ N(Y, {
		open: c,
		onOpenChange: l,
		placement: "right-start",
		children: [/* @__PURE__ */ M(X, {
			asChild: !0,
			children: /* @__PURE__ */ M("button", {
				...s,
				type: "button",
				className: xc(i, a || c),
				title: s.title ?? s["aria-label"],
				onClick: g,
				onMouseEnter: m,
				onMouseLeave: h,
				children: p
			})
		}), /* @__PURE__ */ M(Z, {
			onMouseEnter: m,
			onMouseLeave: h,
			children: o
		})]
	}) : /* @__PURE__ */ M("button", {
		...s,
		onClick: d,
		type: "button",
		className: xc(i, a),
		title: s.title ?? s["aria-label"],
		children: p
	});
};
$.displayName = "MenuItem";
var Ec = ({ children: e }) => /* @__PURE__ */ M("div", {
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
Ec.displayName = "MenuItemBadge", $.Badge = Ec;
//#endregion
//#region src/components/toolbar/extra-tools/menu-items.tsx
var Dc = () => {
	let { appState: e, setAppState: t } = Q(), { t: n } = U();
	return /* @__PURE__ */ M($, {
		"data-testid": "marmaid-to-drawnix-button",
		onSelect: () => {
			t({
				...e,
				openDialogType: gc.mermaidToDrawnix
			});
		},
		icon: qo,
		"aria-label": n("extraTools.mermaidToDrawnix"),
		children: n("extraTools.mermaidToDrawnix")
	});
};
Dc.displayName = "MermaidToDrawnix";
var Oc = () => {
	let { appState: e, setAppState: t } = Q(), { t: n } = U();
	return /* @__PURE__ */ M($, {
		"data-testid": "markdown-to-drawnix-button",
		onSelect: () => {
			t({
				...e,
				openDialogType: gc.markdownToDrawnix
			});
		},
		icon: Jo,
		"aria-label": n("extraTools.markdownToDrawnix"),
		children: n("extraTools.markdownToDrawnix")
	});
};
Oc.displayName = "MarkdownToDrawnix";
//#endregion
//#region src/components/toolbar/extra-tools/extra-tools-button.tsx
var kc = () => {
	let e = H(), { t } = U(), n = C.getBoardContainer(e), [r, i] = k(!1);
	return /* @__PURE__ */ N(Y, {
		sideOffset: 12,
		open: r,
		onOpenChange: (e) => {
			i(e);
		},
		placement: "bottom-start",
		children: [/* @__PURE__ */ M(X, {
			asChild: !0,
			children: /* @__PURE__ */ M(K, {
				type: "icon",
				visible: !0,
				selected: r,
				icon: Ko,
				title: t("toolbar.extraTools"),
				"aria-label": t("toolbar.extraTools"),
				onPointerDown: () => {
					i(!r);
				}
			})
		}), /* @__PURE__ */ M(Z, {
			container: n,
			children: /* @__PURE__ */ N(Cc, {
				onSelect: () => {
					i(!1);
				},
				children: [/* @__PURE__ */ M(Dc, {}), /* @__PURE__ */ M(Oc, {})]
			})
		})]
	}, 0);
}, Ac = {
	svg: "image/svg+xml",
	png: "image/png"
}, jc = {
	svg: "toast.copyToClipboard.svg",
	png: "toast.copyToClipboard.png"
}, Mc = () => typeof navigator < "u" && !!navigator.clipboard?.write && typeof ClipboardItem < "u", Nc = () => ClipboardItem.supports, Pc = (e) => {
	if (!Mc()) return !1;
	let t = Nc();
	return typeof t == "function" ? t(Ac[e]) : e === "png";
}, Fc = async (e, t, n) => {
	if (!t || !Mc()) return;
	let r = { [Ac[e]]: t };
	n && (r[Ac.png] = n), await navigator.clipboard.write([new ClipboardItem(r)]);
}, Ic = (e, t, n) => {
	let { t: r } = Xa(e);
	e.showToast?.({
		type: "success",
		message: r(jc[t]),
		description: n ? r("toast.copyToClipboard.mode.transparent") : void 0
	});
}, Lc = async (e, t, n) => {
	let r = Ls(e) || "white", i = await Ye(e, {
		fillStyle: t ? os : r,
		padding: 20,
		ratio: 4,
		elements: n,
		inlineStyleClassNames: ".plait-text-container",
		styleNames: ["position"]
	});
	return new Blob([i], { type: Ac.svg });
}, Rc = async (e, t, n) => {
	let r = Ls(e) || "white", i = await no(e, {
		elements: n,
		fillStyle: t ? "transparent" : r
	});
	return i ? to(i) : null;
}, zc = (e) => {
	let t = !!e.appState?.exportTransparent, n = Ce(e);
	return Lc(e, t, n.length > 0 ? n : void 0).then((e) => {
		ro(e, `drawnix-${(/* @__PURE__ */ new Date()).getTime()}.svg`);
	});
}, Bc = (e) => {
	let t = !!e.appState?.exportTransparent, n = Ce(e);
	Rc(e, t, n.length > 0 ? n : void 0).then((e) => {
		e && ro(e, `drawnix-${(/* @__PURE__ */ new Date()).getTime()}.png`);
	});
}, Vc = async (e) => {
	let t = !!e.appState?.copyTransparent, n = Ce(e);
	if (n.length === 0) return;
	let [r, i] = await Promise.all([Lc(e, t, n), Rc(e, t, n)]);
	await Fc("svg", r, i), Ic(e, "svg", t);
}, Hc = async (e) => {
	let t = !!e.appState?.copyTransparent, n = Ce(e);
	if (n.length === 0) return;
	let r = await Rc(e, t, n);
	r && (await Fc("png", r), Ic(e, "png", t));
}, Uc = async (e) => {
	Ia(e, await va({
		description: "Image",
		extensions: Object.keys(ta)
	}));
}, Wc = (e) => e === T.hand || e === T.selection, Gc = [
	{
		icon: oo,
		pointer: T.hand,
		titleKey: "toolbar.hand"
	},
	{
		icon: so,
		pointer: T.selection,
		titleKey: "toolbar.selection"
	},
	{
		icon: co,
		pointer: pn.mind,
		titleKey: "toolbar.mind"
	},
	{
		icon: uo,
		pointer: I.text,
		titleKey: "toolbar.text"
	},
	{
		icon: Wo,
		pointer: J.feltTipPen,
		titleKey: "toolbar.pen",
		key: "freehand"
	},
	{
		icon: po,
		titleKey: "toolbar.arrow",
		key: "arrow",
		pointer: Gt.straight
	},
	{
		icon: lo,
		titleKey: "toolbar.shape",
		key: "shape",
		pointer: I.rectangle
	},
	{
		icon: Go,
		titleKey: "toolbar.image",
		key: "image"
	},
	{
		icon: Ko,
		titleKey: "toolbar.extraTools",
		key: "extra-tools"
	}
], Kc = (e) => Jc(e.pointer), qc = (e) => Yc(e.pointer), Jc = (e) => Object.values(Gt).includes(e), Yc = (e) => Object.values(I).includes(e) || Object.values(Yt).includes(e), Xc = (e) => e !== I.text && Yc(e), Zc = (e) => e === J.feltTipPen || e === J.eraser, Qc = () => {
	let e = H(), { appState: n, setAppState: r } = Q(), i = n.toolState, { t: a } = U(), o = C.getBoardContainer(e) ?? null, [s, c] = k(!1), [l, d] = k(!1), [f, p] = k(!1), m = vs.find((e) => e.pointer === i.lastFreehandPointer) || Gc.find((e) => e.key === "freehand") || Gc[4], h = Xc(i.pointer) ? i.pointer : i.lastShapePointer, g = Jc(i.pointer) ? i.pointer : i.lastArrowPointer, _ = dc.find((e) => e.pointer === h), v = mc.find((e) => e.pointer === g), y = (e) => {
		r((t) => ({
			...t,
			toolState: {
				...t.toolState,
				...e
			}
		}));
	};
	D(() => {
		if (o) {
			if (Zc(i.pointer)) {
				c(!0), d(!1), p(!1);
				return;
			}
			c(!1), Jc(i.pointer) || d(!1), Xc(i.pointer) || p(!1);
		}
	}, [o, i.pointer]);
	let b = (t) => {
		F(e, P.dnd), u.updatePointerType(e, t), y({ pointer: t });
	}, x = () => {
		F(e, P.drawing);
	}, S = (t) => C.isPointer(e, t.pointer) && !l && !f && !s, ee = (e) => Zc(e.pointer), te = (e, t) => {
		r((n) => ({
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
	return /* @__PURE__ */ M(W, {
		padding: 1,
		className: A("draw-toolbar", t),
		children: /* @__PURE__ */ M(G.Row, {
			gap: 1,
			children: Gc.map((t, r) => n.isMobile && t.pointer === T.hand ? null : t.key === "freehand" ? /* @__PURE__ */ N(Y, {
				open: s || ee(e),
				sideOffset: 12,
				onOpenChange: (e) => {
					c(e);
				},
				children: [/* @__PURE__ */ M(X, {
					asChild: !0,
					children: /* @__PURE__ */ M(K, {
						type: "icon",
						visible: !0,
						selected: s || ee(e),
						icon: m.icon,
						title: m.titleKey ? a(m.titleKey) : "Freehand",
						"aria-label": m.titleKey ? a(m.titleKey) : "Freehand",
						onPointerDown: () => {
							c(!s), m.pointer && b(m.pointer);
						},
						onPointerUp: () => {
							x();
						}
					})
				}), /* @__PURE__ */ M(Z, {
					container: o,
					initialFocus: -1,
					children: /* @__PURE__ */ M(uc, {
						freehandPresets: i.freehandPresets,
						activePresetIndex: i.activeFreehandPresetIndex,
						onPresetSelect: (e) => {
							y({ activeFreehandPresetIndex: e });
						},
						onStrokeColorSelect: (e, t) => {
							te(e, { strokeColor: t });
						},
						onStrokeWidthSelect: (e, t) => {
							te(e, { strokeWidth: t });
						},
						onPointerUp: (e) => {
							y({
								pointer: e,
								lastFreehandPointer: e
							});
						}
					})
				})]
			}, r) : t.key === "shape" ? /* @__PURE__ */ N(Y, {
				open: f,
				sideOffset: 12,
				onOpenChange: (e) => {
					p(e);
				},
				children: [/* @__PURE__ */ M(X, {
					asChild: !0,
					children: /* @__PURE__ */ M(K, {
						type: "icon",
						visible: !0,
						selected: f || qc(e) && !C.isPointer(e, I.text),
						icon: _?.icon || t.icon,
						title: t.titleKey ? a(t.titleKey) : "Shape",
						"aria-label": t.titleKey ? a(t.titleKey) : "Shape",
						onPointerDown: () => {
							p(!f), qc(e) ? u.updatePointerType(e, e.pointer) : (y({ pointer: i.lastShapePointer }), F(e, P.drawing), u.updatePointerType(e, i.lastShapePointer));
						}
					})
				}), /* @__PURE__ */ M(Z, {
					container: o,
					initialFocus: -1,
					children: /* @__PURE__ */ M(pc, { onPointerUp: (e) => {
						p(!1), y({
							pointer: e,
							lastShapePointer: e
						});
					} })
				})]
			}, r) : t.key === "arrow" ? /* @__PURE__ */ N(Y, {
				open: l,
				sideOffset: 12,
				onOpenChange: (e) => {
					d(e);
				},
				children: [/* @__PURE__ */ M(X, {
					asChild: !0,
					children: /* @__PURE__ */ M(K, {
						type: "icon",
						visible: !0,
						selected: l || Kc(e),
						icon: v?.icon || t.icon,
						title: t.titleKey ? a(t.titleKey) : "",
						"aria-label": t.titleKey ? a(t.titleKey) : "",
						onPointerDown: () => {
							d(!l), Kc(e) ? u.updatePointerType(e, e.pointer) : (F(e, P.drawing), u.updatePointerType(e, i.lastArrowPointer), y({ pointer: i.lastArrowPointer }));
						}
					})
				}), /* @__PURE__ */ M(Z, {
					container: o,
					initialFocus: -1,
					children: /* @__PURE__ */ M(hc, { onPointerUp: (e) => {
						d(!1), y({
							pointer: e,
							lastArrowPointer: e
						});
					} })
				})]
			}, r) : t.key === "extra-tools" ? /* @__PURE__ */ M(kc, {}, r) : /* @__PURE__ */ M(K, {
				type: "radio",
				icon: t.icon,
				checked: S(t),
				title: t.titleKey ? a(t.titleKey) : "",
				"aria-label": t.titleKey ? a(t.titleKey) : "",
				onPointerDown: () => {
					t.pointer && !Wc(t.pointer) && b(t.pointer);
				},
				onPointerUp: () => {
					t.pointer && !Wc(t.pointer) ? x() : t.pointer && Wc(t.pointer) && (u.updatePointerType(e, t.pointer), y({ pointer: t.pointer })), t.key === "image" && Uc(e);
				}
			}, r))
		})
	});
}, $c = () => {
	let e = H(), { t: n } = U(), r = C.getBoardContainer(e), [i, a] = k(!1);
	return /* @__PURE__ */ M(W, {
		padding: 1,
		className: A("zoom-toolbar", t),
		children: /* @__PURE__ */ N(G.Row, {
			gap: 1,
			children: [
				/* @__PURE__ */ M(K, {
					type: "button",
					icon: Do,
					visible: !0,
					title: n("zoom.out"),
					"aria-label": n("zoom.out"),
					onPointerUp: () => {
						u.updateZoom(e, e.viewport.zoom - .1);
					},
					className: "zoom-out-button"
				}, 0),
				/* @__PURE__ */ N(Y, {
					sideOffset: 12,
					open: i,
					onOpenChange: (e) => {
						a(e);
					},
					placement: "bottom-end",
					children: [/* @__PURE__ */ M(X, {
						asChild: !0,
						children: /* @__PURE__ */ N("div", {
							title: n("zoom.fit"),
							"aria-label": n("zoom.fit"),
							className: A("zoom-menu-trigger", { active: i }),
							onPointerUp: () => {
								a(!i);
							},
							children: [Number(((e?.viewport?.zoom || 1) * 100).toFixed(0)), "%"]
						}, 1)
					}), /* @__PURE__ */ M(Z, {
						container: r,
						children: /* @__PURE__ */ N(Cc, {
							onSelect: () => {
								a(!1);
							},
							children: [/* @__PURE__ */ M($, {
								"data-testid": "open-button",
								onSelect: () => {
									u.fitViewport(e);
								},
								"aria-label": n("zoom.fit"),
								shortcut: "Cmd+Shift+=",
								children: n("zoom.fit")
							}), /* @__PURE__ */ M($, {
								"data-testid": "open-button",
								onSelect: () => {
									u.updateZoom(e, 1);
								},
								"aria-label": n("zoom.100"),
								shortcut: "Cmd+0",
								children: n("zoom.100")
							})]
						})
					})]
				}),
				/* @__PURE__ */ M(K, {
					type: "button",
					icon: Oo,
					visible: !0,
					title: n("zoom.in"),
					"aria-label": n("zoom.in"),
					onPointerUp: () => {
						u.updateZoom(e, e.viewport.zoom + .1);
					},
					className: "zoom-in-button"
				}, 2)
			]
		})
	});
}, el = (e, t) => dn.isMindElement(e, t) || L.isDrawElement(t) && an(t) || rn(e, t), tl = (e, t) => {
	let n = t.fill;
	return n || (dn.isMindElement(e, t) && (n = _n(e, t)), (L.isDrawElement(t) || L.isCustomGeometryElement(e, t)) && (n = Zt(e, t))), n;
}, nl = (e, t) => {
	let n = t.strokeColor;
	return n || (dn.isMindElement(e, t) && (n = vn(e, t)), (L.isDrawElement(t) || L.isCustomGeometryElement(e, t)) && (n = en(e, t))), n;
}, rl = (e, t) => Ot(t).color, il = (e, t) => {
	Mt.setFillColor(e, null, {
		getMemorizeKey: $t,
		callback: (n, r) => {
			if (!el(e, n)) return;
			let i = tl(e, n);
			if (!ks(i)) return;
			let a = As(i), o = Ps(t) ? a : Ds(a, t);
			ue.setNode(e, { fill: o }, r);
		}
	});
}, al = (e, t) => {
	Mt.setFillColor(e, null, {
		getMemorizeKey: $t,
		callback: (n, r) => {
			if (!el(e, n)) return;
			let i = Os(tl(e, n));
			Fs(t) ? ue.setNode(e, { fill: null }, r) : Fe(i) || Ps(i) ? ue.setNode(e, { fill: t }, r) : ue.setNode(e, { fill: Ds(t, i) }, r);
		}
	});
}, ol = (e, t) => {
	Mt.setStrokeColor(e, null, {
		getMemorizeKey: $t,
		callback: (n, r) => {
			let i = As(nl(e, n)), a = Ps(t) ? i : Ds(i, t);
			ue.setNode(e, { strokeColor: a }, r);
		}
	});
}, sl = (e, t) => {
	Mt.setStrokeColor(e, null, {
		getMemorizeKey: $t,
		callback: (n, r) => {
			let i = Os(nl(e, n));
			Fs(t) ? ue.setNode(e, { strokeColor: null }, r) : Fe(i) || Ps(i) ? ue.setNode(e, { strokeColor: t }, r) : ue.setNode(e, { strokeColor: Ds(t, i) }, r);
		}
	});
}, cl = (e, t, n) => {
	let r = Os(t);
	Fs(n) ? Dt.setTextColor(e, null) : Dt.setTextColor(e, Ds(n, r));
}, ll = (e, t, n) => {
	let r = As(t), i = Ps(n) ? r : Ds(r, n);
	Dt.setTextColor(e, i);
}, ul = (e, t) => {
	!Number.isFinite(t) || t <= 0 || Dt.setFontSize(e, String(t), Tt);
}, dl = ({ board: e, currentColor: n, fontColorIcon: r, title: i }) => {
	let [a, o] = k(!1), s = C.getBoardContainer(e);
	return /* @__PURE__ */ N(Y, {
		sideOffset: 12,
		open: a,
		onOpenChange: (e) => {
			o(e);
		},
		placement: "top",
		children: [/* @__PURE__ */ M(X, {
			asChild: !0,
			children: /* @__PURE__ */ M(K, {
				className: A("property-button"),
				selected: a,
				visible: !0,
				icon: r,
				type: "button",
				title: i,
				"aria-label": i,
				onPointerUp: () => {
					o(!a);
				}
			})
		}), /* @__PURE__ */ M(Z, {
			container: s,
			children: /* @__PURE__ */ M(W, {
				padding: 4,
				className: A(`${t}`),
				children: /* @__PURE__ */ M(zs, {
					onColorChange: (t) => {
						cl(e, n || t, t);
					},
					onOpacityChange: (t) => {
						n && ll(e, n, t);
					},
					currentColor: n
				})
			})
		})]
	});
}, fl = E.createContext(null), pl = () => {
	let e = E.useContext(fl);
	if (!e) throw Error("Select components must be wrapped in <Select.Root />");
	return e;
}, ml = ({ children: e, value: t, defaultValue: n, onValueChange: r, open: i, defaultOpen: a = !1, onOpenChange: o, size: s = "2", disabled: c = !1, placement: l = "bottom-start", sideOffset: u = 4, hideSelectedIndicator: d = !1, disableItemHoverHighlight: f = !1, disableInitialHighlight: p = !1, disableTypeahead: m = !1 }) => {
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
	let { refs: oe, floatingStyles: se, context: w } = Mn({
		placement: l,
		open: _,
		onOpenChange: v,
		whileElementsMounted: En,
		middleware: [
			On(u),
			Dn({ padding: 5 }),
			kn({ padding: 5 })
		]
	}), T = An(w, { enabled: !c && i === void 0 }), ce = jn(w), le = Rn(w, { role: "listbox" }), ue = In(w, {
		listRef: ee,
		activeIndex: re,
		selectedIndex: ae,
		onNavigate: C,
		loop: !0,
		focusItemOnHover: !f
	}), de = zn(w, {
		listRef: te,
		activeIndex: re,
		selectedIndex: ae,
		onMatch: C
	}), { getReferenceProps: fe, getFloatingProps: pe, getItemProps: me } = Pn([
		T,
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
		refs: oe,
		floatingStyles: se,
		floatingContext: w,
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
		oe,
		se,
		w,
		s,
		d,
		f
	]);
	return /* @__PURE__ */ M(fl.Provider, {
		value: he,
		children: e
	});
};
ml.displayName = "Select.Root";
var hl = E.forwardRef(({ children: e, className: t, variant: n = "surface", color: r, radius: i, placeholder: a, asChild: o, ...s }, c) => {
	let l = pl(), u = Ln([l.refs.setReference, c]);
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
	return /* @__PURE__ */ N("button", {
		type: "button",
		ref: u,
		className: A("dx-reset", "dx-SelectTrigger", `dx-r-size-${l.size}`, `dx-variant-${n}`, t),
		"data-state": l.open ? "open" : "closed",
		"data-placeholder": f ? "" : void 0,
		...l.getReferenceProps(s),
		children: [/* @__PURE__ */ M("span", {
			className: "dx-SelectTriggerInner",
			children: p
		}), /* @__PURE__ */ M("span", {
			className: "dx-SelectIcon",
			children: ts
		})]
	});
});
hl.displayName = "Select.Trigger";
var gl = E.forwardRef(({ children: e, className: t, variant: n = "solid", color: r, highContrast: i, container: a, style: o, ...s }, c) => {
	let l = pl(), u = Ln([l.refs.setFloating, c]);
	return l.open ? /* @__PURE__ */ M(Tn, {
		root: a,
		children: /* @__PURE__ */ M(Sn, {
			context: l.floatingContext,
			initialFocus: -1,
			children: /* @__PURE__ */ M("div", {
				ref: u,
				className: A("dx-SelectContent", `dx-r-size-${l.size}`, `dx-variant-${n}`, t),
				"data-hide-selected-indicator": l.hideSelectedIndicator ? "" : void 0,
				style: {
					...l.floatingStyles,
					...o
				},
				...l.getFloatingProps(s),
				children: /* @__PURE__ */ M(Cn, {
					elementsRef: l.elementsRef,
					labelsRef: l.labelsRef,
					children: /* @__PURE__ */ M("div", {
						className: "dx-SelectViewport",
						children: e
					})
				})
			})
		})
	}) : null;
});
gl.displayName = "Select.Content";
var _l = E.forwardRef(({ children: e, className: t, value: n, textValue: r, disabled: i, ...a }, o) => {
	let s = pl(), { ref: c, index: l } = Fn({ label: r ?? (typeof e == "string" ? e : n) }), u = Ln([c, o]), d = s.activeIndex === l, f = s.value === n;
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
	return /* @__PURE__ */ N("button", {
		ref: u,
		type: "button",
		role: "option",
		"aria-selected": f,
		"data-highlighted": d ? "" : void 0,
		"data-state": f ? "checked" : "unchecked",
		"data-disabled": i ? "" : void 0,
		tabIndex: d ? 0 : -1,
		className: A("dx-SelectItem", t),
		disabled: i,
		...v,
		...s.disableItemHoverHighlight ? {} : {
			onPointerMove: m,
			onMouseMove: h,
			onMouseEnter: g,
			onMouseLeave: _
		},
		children: [!s.hideSelectedIndicator && /* @__PURE__ */ M("span", {
			className: "dx-SelectItemIndicator",
			children: f && rs
		}), /* @__PURE__ */ M("span", {
			className: "dx-SelectItemText",
			children: e
		})]
	});
});
_l.displayName = "Select.Item";
var vl = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ M("div", {
	ref: n,
	className: A("dx-SelectGroup", e),
	...t
}));
vl.displayName = "Select.Group";
var yl = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ M("div", {
	ref: n,
	className: A("dx-SelectLabel", e),
	...t
}));
yl.displayName = "Select.Label";
var bl = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ M("div", {
	ref: n,
	className: A("dx-SelectSeparator", e),
	...t
}));
bl.displayName = "Select.Separator";
var xl = {
	Root: ml,
	Trigger: hl,
	Content: gl,
	Item: _l,
	Group: vl,
	Label: yl,
	Separator: bl
}, Sl = [
	10,
	12,
	14,
	18,
	24,
	36,
	48
], Cl = 8, wl = 78, Tl = ({ board: e, currentFontSize: t, title: n, options: r = Sl }) => {
	let [i, a] = k(!1), o = O(null), s = ht(() => Number.isFinite(t) && t > 0 ? t : void 0, [t]), [c, l] = k(String(s || Tt));
	D(() => {
		l(String(s || Tt));
	}, [s]);
	let u = (t) => {
		if (!t) {
			l("");
			return;
		}
		let n = Number(t);
		if (!Number.isFinite(n)) return;
		let r = Math.min(wl, Math.max(Cl, Math.round(n)));
		l(String(r)), ul(e, r);
	}, d = () => {
		let e = Number(c);
		return Number.isFinite(e) ? Math.min(wl, Math.max(Cl, Math.round(e))) : typeof s == "number" && s > 0 ? Math.min(wl, Math.max(Cl, Math.round(s))) : Tt;
	}, f = (e) => {
		let t = d(), n = Math.min(wl, Math.max(Cl, Math.round(t + e))), r = String(n);
		l(r), u(r);
	}, p = C.getBoardContainer(e);
	return /* @__PURE__ */ N(xl.Root, {
		open: i,
		onOpenChange: a,
		placement: "top-start",
		sideOffset: 12,
		hideSelectedIndicator: !0,
		disableInitialHighlight: !0,
		disableItemHoverHighlight: !0,
		disableTypeahead: !0,
		children: [/* @__PURE__ */ M(xl.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ N("div", {
				className: "popup-font-size",
				title: n,
				"aria-label": n,
				onPointerDown: (e) => {
					e.stopPropagation();
				},
				onPointerUp: (e) => {
					e.stopPropagation();
				},
				children: [/* @__PURE__ */ M("input", {
					ref: o,
					className: "popup-font-size__input",
					type: "number",
					inputMode: "numeric",
					min: Cl,
					max: wl,
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
				}), /* @__PURE__ */ N("div", {
					className: "popup-font-size__stepper",
					"aria-hidden": "false",
					children: [/* @__PURE__ */ M("button", {
						type: "button",
						className: "popup-font-size__stepper-button",
						"aria-label": `${n} +`,
						onPointerDown: (e) => {
							e.preventDefault(), e.stopPropagation();
						},
						onPointerUp: (e) => {
							e.stopPropagation(), f(1), o.current?.focus();
						},
						children: /* @__PURE__ */ M(is, {
							className: "popup-font-size__stepper-icon",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ M("button", {
						type: "button",
						className: "popup-font-size__stepper-button",
						"aria-label": `${n} -`,
						onPointerDown: (e) => {
							e.preventDefault(), e.stopPropagation();
						},
						onPointerUp: (e) => {
							e.stopPropagation(), f(-1), o.current?.focus();
						},
						children: /* @__PURE__ */ M(as, {
							className: "popup-font-size__stepper-icon",
							"aria-hidden": "true"
						})
					})]
				})]
			})
		}), /* @__PURE__ */ M(xl.Content, {
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
				return /* @__PURE__ */ M(xl.Item, {
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
}, El = ({ board: e, currentColor: n, currentStyle: r, title: i, hasStrokeStyle: a, children: o }) => {
	let [s, c] = k(!1), l = n && As(n), u = n ? Os(n) : 100, d = C.getBoardContainer(e), { t: f } = U(), p = Ns(u) ? Po : Ms(l) ? Fo : void 0, m = (t) => {
		Mt.setStrokeStyle(e, t, { getMemorizeKey: $t });
	};
	return /* @__PURE__ */ N(Y, {
		sideOffset: 12,
		open: s,
		onOpenChange: (e) => {
			c(e);
		},
		placement: "top",
		children: [/* @__PURE__ */ M(X, {
			asChild: !0,
			children: /* @__PURE__ */ M(K, {
				className: A("property-button"),
				visible: !0,
				selected: s,
				icon: p,
				type: "button",
				title: i,
				"aria-label": i,
				onPointerUp: () => {
					c(!s);
				},
				children: !p && o
			})
		}), /* @__PURE__ */ M(Z, {
			container: d,
			children: /* @__PURE__ */ M(W, {
				padding: 4,
				className: A(`${t}`, "stroke-setting", { "has-stroke-style": a }),
				children: /* @__PURE__ */ N(G.Col, { children: [a && /* @__PURE__ */ N(G.Row, {
					className: A("stroke-style-picker"),
					children: [
						/* @__PURE__ */ M(K, {
							visible: !0,
							selected: !r || r === Nt.solid,
							icon: Io,
							type: "button",
							title: `${i} — ${f("stroke.solid")}`,
							"aria-label": `${i} — ${f("stroke.solid")}`,
							onPointerUp: () => {
								m(Nt.solid);
							}
						}),
						/* @__PURE__ */ M(K, {
							visible: !0,
							selected: r === Nt.dashed,
							icon: Lo,
							type: "button",
							title: `${i} — ${f("stroke.dashed")}`,
							"aria-label": `${i} — ${f("stroke.dashed")}`,
							onPointerUp: () => {
								m(Nt.dashed);
							}
						}),
						/* @__PURE__ */ M(K, {
							visible: !0,
							selected: r === Nt.dotted,
							icon: Ro,
							type: "button",
							title: `${i} — ${f("stroke.dotted")}`,
							"aria-label": `${i} — ${f("stroke.dotted")}`,
							onPointerUp: () => {
								m(Nt.dotted);
							}
						})
					]
				}), /* @__PURE__ */ M(zs, {
					onColorChange: (t) => {
						sl(e, t);
					},
					onOpacityChange: (t) => {
						ol(e, t);
					},
					currentColor: n
				})] })
			})
		})]
	});
}, Dl = ({ board: e, currentColor: n, title: r, children: i }) => {
	let [a, o] = k(!1), s = n && As(n), c = n ? Os(n) : 100, l = C.getBoardContainer(e), u = !s || Ns(c) ? jo : void 0;
	return /* @__PURE__ */ N(Y, {
		sideOffset: 12,
		open: a,
		onOpenChange: (e) => {
			o(e);
		},
		placement: "top",
		children: [/* @__PURE__ */ M(X, {
			asChild: !0,
			children: /* @__PURE__ */ M(K, {
				className: A("property-button"),
				visible: !0,
				selected: a,
				icon: u,
				type: "button",
				title: r,
				"aria-label": r,
				onPointerUp: () => {
					o(!a);
				},
				children: !u && i
			})
		}), /* @__PURE__ */ M(Z, {
			container: l,
			children: /* @__PURE__ */ M(W, {
				padding: 4,
				className: A(`${t}`),
				children: /* @__PURE__ */ M(zs, {
					onColorChange: (t) => {
						al(e, t);
					},
					onOpacityChange: (t) => {
						il(e, t);
					},
					currentColor: n
				})
			})
		})]
	});
}, Ol = ({ board: e, title: t }) => {
	let { t: n } = U(), { appState: r, setAppState: i } = Q();
	return /* @__PURE__ */ M(K, {
		className: A("property-button"),
		visible: !0,
		selected: r.linkState?.isEditing || r.linkState?.isHovering || r.linkState?.isHoveringOrigin,
		icon: Yo,
		type: "button",
		title: t,
		"aria-label": t,
		onPointerUp: () => {
			let t = Ce(e)[0], a = Lt(t);
			Et.getLinkElement(a) || Et.wrapLink(a, n("textPlaceholders.link"), ""), setTimeout(() => {
				let e = Et.getLinkElement(a)[0], t = xt.toDOMNode(a, e);
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
}, kl = ({ end: e, property: n }) => {
	let r = H(), { marker: i } = n, { t: a } = U(), o = (t) => {
		Mt.setProperty(r, { [e]: {
			...n,
			marker: t
		} });
	};
	return /* @__PURE__ */ M(W, {
		padding: 2,
		className: A(`${t} ${e === "source" ? "source-arrow-island" : ""} `),
		children: /* @__PURE__ */ N(G.Row, {
			gap: 1,
			children: [/* @__PURE__ */ M(K, {
				className: A("property-button"),
				visible: !0,
				icon: Qo,
				type: "button",
				title: a("line.none"),
				"aria-label": a("line.none"),
				selected: i === "none",
				onPointerUp: () => {
					o("none");
				}
			}), /* @__PURE__ */ M(K, {
				className: A("property-button"),
				visible: !0,
				icon: Zo,
				type: "button",
				title: a("line.arrow"),
				"aria-label": a("line.arrow"),
				selected: i === "arrow",
				onPointerUp: () => {
					o("arrow");
				}
			})]
		})
	});
}, Al = ({ board: e, end: t, endProperty: n }) => {
	let [r, i] = k(!1), a = C.getBoardContainer(e), { t: o } = U();
	if (!n) return null;
	let s = n.marker ?? "none", c = t === "source" ? "line.source" : "line.target", l = s === "none" ? "line.none" : "line.arrow", u = `${o(c)} — ${o(l)}`;
	return /* @__PURE__ */ N(Y, {
		sideOffset: 12,
		open: r,
		onOpenChange: (e) => {
			i(e);
		},
		placement: "top",
		children: [/* @__PURE__ */ M(X, {
			asChild: !0,
			children: /* @__PURE__ */ M(K, {
				className: A(`property-button  ${t === "source" ? "source-arrow-button" : ""}`),
				visible: !0,
				icon: s === "none" ? Qo : Zo,
				type: "button",
				title: u,
				"aria-label": u,
				selected: r,
				onPointerUp: () => {
					i(!r);
				}
			})
		}), /* @__PURE__ */ M(Z, {
			container: a,
			children: /* @__PURE__ */ M(kl, {
				end: t,
				property: n
			})
		})]
	});
}, jl = ({ checked: e }) => /* @__PURE__ */ M("span", {
	className: `menu-item-switch ${e ? "menu-item-switch--checked" : ""}`.trim(),
	"aria-hidden": "true",
	children: /* @__PURE__ */ M("span", { className: "menu-item-switch__thumb" })
});
jl.displayName = "MenuItemSwitch";
//#endregion
//#region src/components/menu/menu-item-content-switch.tsx
var Ml = ({ checked: e, children: t }) => /* @__PURE__ */ N(j, { children: [/* @__PURE__ */ M("div", {
	className: "menu-item__left",
	"aria-hidden": "true",
	children: /* @__PURE__ */ M(jl, { checked: e })
}), /* @__PURE__ */ M("div", {
	className: "menu-item__right",
	children: /* @__PURE__ */ M("div", {
		className: "menu-item__label",
		children: t
	})
})] });
Ml.displayName = "MenuItemContentSwitch", Ml.__DRAWNIX_MENU_ITEM_CONTENT = !0;
//#endregion
//#region src/components/toolbar/popup-toolbar/more-options-button.tsx
var Nl = ({ board: e }) => {
	let { t } = U(), { appState: n, setAppState: r } = Q(), i = C.getBoardContainer(e), [a, o] = k(!1), s = Pc("svg"), c = Pc("png"), l = s || c;
	return /* @__PURE__ */ N(Y, {
		sideOffset: 12,
		open: a,
		onOpenChange: (e) => {
			o(e);
		},
		placement: "bottom-start",
		children: [/* @__PURE__ */ M(X, {
			asChild: !0,
			children: /* @__PURE__ */ M(K, {
				className: A("property-button"),
				visible: !0,
				selected: a,
				icon: Xo,
				type: "icon",
				title: t("general.moreOptions"),
				"aria-label": t("general.moreOptions"),
				onPointerDown: () => {
					o(!a);
				}
			})
		}), /* @__PURE__ */ M(Z, {
			container: i,
			children: /* @__PURE__ */ N(Cc, {
				className: A("popup-toolbar-more-options-menu"),
				onSelect: () => {
					o(!1);
				},
				children: [
					/* @__PURE__ */ M($, {
						onSelect: () => {
							ve(e);
						},
						shortcut: ao("CtrlOrCmd+D"),
						"aria-label": t("general.duplicate"),
						children: t("general.duplicate")
					}),
					/* @__PURE__ */ M($, {
						onSelect: () => {
							ge(e);
						},
						shortcut: ao("Backspace"),
						"aria-label": t("general.delete"),
						children: t("general.delete")
					}),
					/* @__PURE__ */ M($, {
						onSelect: () => void 0,
						"aria-label": t("general.copyToClipboard"),
						disabled: !l,
						submenu: /* @__PURE__ */ N(Cc, {
							onSelect: () => {
								o(!1);
							},
							children: [
								/* @__PURE__ */ M($, {
									onSelect: () => {
										Vc(e).catch(() => void 0);
									},
									disabled: !s,
									shortcut: ao("Shift+Alt+C"),
									"aria-label": t("general.copyToClipboard.svg"),
									children: t("general.copyToClipboard.svg")
								}),
								/* @__PURE__ */ M($, {
									onSelect: () => {
										Hc(e).catch(() => void 0);
									},
									disabled: !c,
									"aria-label": t("general.copyToClipboard.png"),
									children: t("general.copyToClipboard.png")
								}),
								/* @__PURE__ */ M($, {
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
									children: /* @__PURE__ */ M(Ml, {
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
}, Pl = () => {
	let e = H(), { t: n } = U(), r = Ce(e), [i, a] = k(!1), o = O(i), s = r.some(L.isImage), c = r.length > 0 && !Re(e), { viewport: l, selection: u, children: d } = e, { refs: f, floatingStyles: p } = Mn({
		placement: "right-start",
		middleware: [On(32), Dn()]
	}), m = { fill: "red" };
	if (c && !i && !s) {
		let t = r.some((t) => Rl(e, t)) && !C.hasBeenTextEditing(e), n = r.some((t) => Vl(e, t)), i = r.some((t) => zl(e, t)) && !C.hasBeenTextEditing(e), a = r.some((t) => Bl(e, t)) && !C.hasBeenTextEditing(e), o = r.every((e) => L.isArrowLine(e));
		m = {
			...Ll(e),
			hasFill: t,
			hasFontColor: n,
			hasStroke: i,
			hasStrokeStyle: a,
			hasText: n,
			isLine: o
		};
	}
	return D(() => {
		if (c) {
			let t = r.length > 0;
			if (!i && t) {
				let t = Se(e, Ce(e), !1), [n, r] = ce.getPoints(t), i = Je(e, Ke(e, n)), a = Je(e, Ke(e, r)), o = a[0] - i[0], s = a[1] - i[1];
				f.setPositionReference({ getBoundingClientRect() {
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
		l,
		u,
		d,
		i
	]), D(() => {
		o.current = i;
	}, [i]), D(() => {
		let { pointerUp: t, pointerMove: n } = e;
		return e.pointerMove = (t) => {
			(Pe(e) || Ae(e)) && !o.current && a(!0), n(t);
		}, e.pointerUp = (n) => {
			o.current && (Pe(e) || Ae(e)) && a(!1), t(n);
		}, () => {
			e.pointerUp = t, e.pointerMove = n;
		};
	}, [e]), /* @__PURE__ */ M(j, { children: c && !i && /* @__PURE__ */ M(W, {
		padding: 1,
		className: A("popup-toolbar", t),
		ref: f.setFloating,
		style: p,
		children: /* @__PURE__ */ N(G.Row, {
			gap: 1,
			children: [
				m.hasText && /* @__PURE__ */ M(Tl, {
					board: e,
					currentFontSize: Hl(m.marks),
					title: n("popupToolbar.fontSize")
				}, "font-size"),
				m.hasFontColor && /* @__PURE__ */ M(dl, {
					board: e,
					currentColor: m.marks?.color,
					title: n("popupToolbar.fontColor"),
					fontColorIcon: /* @__PURE__ */ M(zo, { currentColor: m.marks?.color })
				}, 0),
				m.hasStroke && /* @__PURE__ */ M(El, {
					board: e,
					currentColor: m.strokeColor,
					currentStyle: m.strokeStyle,
					title: n("popupToolbar.stroke"),
					hasStrokeStyle: m.hasStrokeStyle || !1,
					children: /* @__PURE__ */ M("label", {
						className: A("stroke-label", "color-label"),
						style: { borderColor: m.strokeColor }
					})
				}, 1),
				m.hasFill && /* @__PURE__ */ M(Dl, {
					board: e,
					currentColor: m.fill,
					title: n("popupToolbar.fillColor"),
					children: /* @__PURE__ */ M("label", {
						className: A("fill-label", "color-label", { "color-white": m.fill && Ms(As(m.fill)) }),
						style: { backgroundColor: m.fill }
					})
				}, 2),
				m.hasText && /* @__PURE__ */ M(Ol, {
					board: e,
					title: n("popupToolbar.link")
				}, 3),
				m.isLine && /* @__PURE__ */ N(j, { children: [/* @__PURE__ */ M(Al, {
					board: e,
					end: "source",
					endProperty: m.source
				}, 4), /* @__PURE__ */ M(Al, {
					board: e,
					end: "target",
					endProperty: m.target
				}, 5)] }),
				/* @__PURE__ */ M(Nl, { board: e }, 6)
			]
		})
	}) });
}, Fl = (e, t) => {
	let n = Ot(t);
	return {
		fill: t.fill,
		strokeColor: vn(e, t),
		strokeStyle: tn(e, t),
		marks: n
	};
}, Il = (e, t) => {
	let n = Ot(t);
	return {
		fill: t.fill,
		strokeColor: en(e, t),
		strokeStyle: tn(e, t),
		marks: n,
		source: t?.source || {},
		target: t?.target || {}
	};
}, Ll = (e) => {
	let t = Ce(e)[0];
	return dn.isMindElement(e, t) ? Fl(e, t) : Il(e, t);
}, Rl = (e, t) => dn.isMindElement(e, t) || rn(e, t) ? !0 : L.isDrawElement(t) ? L.isShapeElement(t) && !L.isImage(t) && !L.isText(t) && an(t) : !1, zl = (e, t) => dn.isMindElement(e, t) || gs.isFreehand(t) ? !0 : L.isDrawElement(t) ? L.isShapeElement(t) && !L.isImage(t) && !L.isText(t) || L.isArrowLine(t) || L.isVectorLine(t) || L.isTable(t) : !1, Bl = (e, t) => zl(e, t), Vl = (e, t) => dn.isMindElement(e, t) ? !0 : L.isDrawElement(t) ? sn([t]) : !1, Hl = (e) => {
	let t = e?.["font-size"], n = typeof t == "number" ? t : Number(t);
	return Number.isFinite(n) && n > 0 ? n : void 0;
}, Ul = ({ icon: e, shortcut: t, href: n, children: r, onSelect: i, className: a = "", selected: o, ...s }) => {
	let c = Sc(s.onClick, i);
	return /* @__PURE__ */ M("a", {
		...s,
		href: n,
		target: "_blank",
		rel: "noreferrer",
		className: xc(a, o),
		title: s.title ?? s["aria-label"],
		onClick: c,
		children: /* @__PURE__ */ M(wc, {
			icon: e,
			shortcut: t,
			children: r
		})
	});
};
Ul.displayName = "MenuItemLink";
//#endregion
//#region src/components/toolbar/app-toolbar/app-menu-items.tsx
var Wl = () => {
	let e = H(), { appState: t, setAppState: n } = Q(), { t: r } = U();
	return t.fileHandle ? /* @__PURE__ */ M($, {
		"data-testid": "save-button",
		onSelect: () => {
			Ca(e, t.fileHandle).then(({ fileHandle: e }) => {
				n((t) => ({
					...t,
					fileHandle: e
				}));
			});
		},
		icon: ko,
		"aria-label": r("menu.saveFile"),
		shortcut: ao("CtrlOrCmd+S"),
		children: r("menu.saveFile")
	}) : null;
};
Wl.displayName = "SaveToFile";
var Gl = () => {
	let e = H(), { setAppState: t } = Q(), { t: n } = U();
	return /* @__PURE__ */ M($, {
		"data-testid": "save-as-button",
		onSelect: () => {
			Sa(e).then(({ fileHandle: e }) => {
				t((t) => ({
					...t,
					fileHandle: e
				}));
			});
		},
		icon: ko,
		"aria-label": n("menu.saveAsFile"),
		shortcut: ao("CtrlOrCmd+Shift+S"),
		children: n("menu.saveAsFile")
	});
};
Gl.displayName = "SaveAsFile";
var Kl = () => {
	let e = H(), t = Mi(), { setAppState: n } = Q(), { t: r } = U(), i = (n, r, i) => {
		e.children = n, e.viewport = r || { zoom: 1 }, i && (e.theme = i), t.update(e.children, {
			board: e,
			parent: e,
			parentG: C.getElementHost(e)
		}), u.fitViewport(e);
	};
	return /* @__PURE__ */ M($, {
		"data-testid": "open-button",
		onSelect: () => {
			wa(e).then(({ data: e, fileHandle: t }) => {
				i(e.elements, e.viewport, e.theme), n((e) => ({
					...e,
					fileHandle: t
				}));
			});
		},
		icon: Ao,
		"aria-label": r("menu.open"),
		children: r("menu.open")
	});
};
Kl.displayName = "OpenFile";
var ql = () => {
	let e = H(), { appState: t, setAppState: n } = Q(), r = pt(bc), { t: i } = U();
	return /* @__PURE__ */ M($, {
		icon: Eo,
		"data-testid": "image-export-button",
		onSelect: () => void 0,
		submenu: /* @__PURE__ */ N(Cc, {
			onSelect: () => {
				let e = new CustomEvent(ea.MENU_ITEM_SELECT, {
					bubbles: !0,
					cancelable: !0
				});
				r.onSelect?.(e);
			},
			children: [
				/* @__PURE__ */ M($, {
					onSelect: () => {
						zc(e);
					},
					"aria-label": i("menu.exportImage.svg"),
					shortcut: ao("CtrlOrCmd+Shift+E"),
					children: i("menu.exportImage.svg")
				}),
				/* @__PURE__ */ M($, {
					onSelect: () => {
						Bc(e);
					},
					"aria-label": i("menu.exportImage.png"),
					children: i("menu.exportImage.png")
				}),
				/* @__PURE__ */ M($, {
					onSelect: (e) => {
						e.preventDefault(), n((e) => ({
							...e,
							exportTransparent: !e.exportTransparent
						}));
					},
					className: "menu-item--setting",
					role: "menuitemcheckbox",
					"aria-checked": t.exportTransparent,
					"aria-label": i("general.copyToClipboard.transparent"),
					children: /* @__PURE__ */ M(Ml, {
						checked: t.exportTransparent,
						children: i("general.copyToClipboard.transparent")
					})
				})
			]
		}),
		"aria-label": i("menu.exportImage"),
		children: i("menu.exportImage")
	});
};
ql.displayName = "SaveAsImage";
var Jl = () => {
	let { appState: e, setAppState: t } = Q(), { t: n } = U();
	return /* @__PURE__ */ M($, {
		icon: Ho,
		"data-testid": "reset-button",
		onSelect: () => {
			t({
				...e,
				openCleanConfirm: !0
			});
		},
		shortcut: ao("CtrlOrCmd+Backspace"),
		"aria-label": n("menu.cleanBoard"),
		children: n("menu.cleanBoard")
	});
};
Jl.displayName = "CleanBoard";
var Yl = () => /* @__PURE__ */ M(Ul, {
	icon: To,
	href: "https://github.com/plait-board/drawnix",
	"aria-label": "GitHub",
	children: "GitHub"
});
Yl.displayName = "Socials";
//#endregion
//#region src/components/toolbar/app-toolbar/language-switcher-menu.tsx
var Xl = () => {
	let { language: e, setLanguage: t, t: n } = U(), r = pt(bc);
	return /* @__PURE__ */ M($, {
		icon: wo,
		"data-testid": "language-switcher-button",
		onSelect: () => {},
		submenu: /* @__PURE__ */ N(Cc, {
			onSelect: () => {
				let e = new CustomEvent(ea.MENU_ITEM_SELECT, {
					bubbles: !0,
					cancelable: !0
				});
				r.onSelect?.(e);
			},
			children: [
				/* @__PURE__ */ M($, {
					onSelect: () => {
						t("zh");
					},
					"aria-label": n("language.chinese"),
					selected: e === "zh",
					children: n("language.chinese")
				}),
				/* @__PURE__ */ M($, {
					onSelect: () => {
						t("en");
					},
					"aria-label": n("language.english"),
					selected: e === "en",
					children: n("language.english")
				}),
				/* @__PURE__ */ M($, {
					onSelect: () => {
						t("ru");
					},
					"aria-label": n("language.russian"),
					selected: e === "ru",
					children: n("language.russian")
				}),
				/* @__PURE__ */ M($, {
					onSelect: () => {
						t("ar");
					},
					"aria-label": n("language.arabic"),
					selected: e === "ar",
					children: n("language.arabic")
				}),
				/* @__PURE__ */ M($, {
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
Xl.displayName = "LanguageSwitcherMenu";
//#endregion
//#region src/components/menu/menu-separator.tsx
var Zl = () => /* @__PURE__ */ M("div", { style: {
	height: "1px",
	backgroundColor: "var(--color-gray-10)",
	margin: ".5rem 0"
} });
Zl.displayName = "MenuSeparator";
//#endregion
//#region src/components/toolbar/app-toolbar/app-toolbar.tsx
var Ql = () => {
	let e = H(), { t: n } = U(), r = C.getBoardContainer(e), i = Ce(e), [a, o] = k(!1), s = e.history.undos.length <= 0, c = e.history.redos.length <= 0;
	return /* @__PURE__ */ M(W, {
		padding: 1,
		className: A("app-toolbar", t),
		children: /* @__PURE__ */ N(G.Row, {
			gap: 1,
			children: [
				/* @__PURE__ */ N(Y, {
					sideOffset: 12,
					open: a,
					onOpenChange: (e) => {
						o(e);
					},
					placement: "bottom-start",
					children: [/* @__PURE__ */ M(X, {
						asChild: !0,
						children: /* @__PURE__ */ M(K, {
							type: "icon",
							visible: !0,
							selected: a,
							icon: wo,
							title: n("general.menu"),
							"aria-label": n("general.menu"),
							onPointerDown: () => {
								o(!a);
							}
						})
					}), /* @__PURE__ */ M(Z, {
						container: r,
						children: /* @__PURE__ */ N(Cc, {
							onSelect: () => {
								o(!1);
							},
							children: [
								/* @__PURE__ */ M(Kl, {}),
								/* @__PURE__ */ M(Wl, {}),
								/* @__PURE__ */ M(Gl, {}),
								/* @__PURE__ */ M(ql, {}),
								/* @__PURE__ */ M(Jl, {}),
								/* @__PURE__ */ M(Zl, {}),
								/* @__PURE__ */ M(Xl, {}),
								/* @__PURE__ */ M(Yl, {})
							]
						})
					})]
				}, 0),
				/* @__PURE__ */ M(K, {
					type: "icon",
					icon: Bo,
					visible: !0,
					title: n("general.undo"),
					"aria-label": n("general.undo"),
					onPointerUp: () => {
						e.undo();
					},
					disabled: s
				}, 1),
				/* @__PURE__ */ M(K, {
					type: "icon",
					icon: Vo,
					visible: !0,
					title: n("general.redo"),
					"aria-label": n("general.redo"),
					onPointerUp: () => {
						e.redo();
					},
					disabled: c
				}, 2),
				i.length > 0 && /* @__PURE__ */ M(K, {
					className: "duplicate",
					type: "icon",
					icon: Uo,
					visible: !0,
					title: n("general.duplicate"),
					"aria-label": n("general.duplicate"),
					onPointerUp: () => {
						ve(e);
					}
				}, 3),
				i.length > 0 && /* @__PURE__ */ M(K, {
					className: "trash",
					type: "icon",
					icon: Ho,
					visible: !0,
					title: n("general.delete"),
					"aria-label": n("general.delete"),
					onPointerUp: () => {
						ge(e);
					}
				}, 4)
			]
		})
	});
}, $l = (e) => (t) => {
	let { globalKeyDown: n, keyDown: r } = t, i = (n, r = {}) => {
		e({ toolState: {
			...t.appState.toolState,
			pointer: n,
			...r
		} });
	};
	return t.globalKeyDown = (r) => {
		if (!(r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement) && (C.getMovingPointInBoard(t) || C.isMovingPointInBoard(t)) && !C.hasBeenTextEditing(t)) {
			if ((0, Fi.isHotkey)(["mod+shift+e"], { byKey: !0 })(r)) {
				zc(t), r.preventDefault();
				return;
			}
			if ((0, Fi.isHotkey)(["mod+shift+s"], { byKey: !0 })(r)) {
				Sa(t).then(({ fileHandle: t }) => {
					e({ fileHandle: t });
				}), r.preventDefault();
				return;
			}
			if ((0, Fi.isHotkey)(["mod+s"], { byKey: !0 })(r)) {
				Ca(t, t.appState.fileHandle).then(({ fileHandle: t }) => {
					e({ fileHandle: t });
				}), r.preventDefault();
				return;
			}
			if ((0, Fi.isHotkey)(["mod+backspace"])(r) || (0, Fi.isHotkey)(["mod+delete"])(r)) {
				e({ openCleanConfirm: !0 }), r.preventDefault();
				return;
			}
			if ((0, Fi.isHotkey)(["mod+u"])(r)) {
				Uc(t), r.preventDefault();
				return;
			}
			if (!r.altKey && !r.metaKey && !r.ctrlKey) {
				if (r.key === "h") {
					u.updatePointerType(t, T.hand), i(T.hand), r.preventDefault();
					return;
				}
				if (r.key === "v") {
					u.updatePointerType(t, T.selection), i(T.selection), r.preventDefault();
					return;
				}
				if (r.key === "m") {
					F(t, P.dnd), u.updatePointerType(t, pn.mind), i(pn.mind), r.preventDefault();
					return;
				}
				if (r.key === "e") {
					F(t, P.drawing), u.updatePointerType(t, J.eraser), i(J.eraser, { lastFreehandPointer: J.eraser }), r.preventDefault();
					return;
				}
				if (r.key === "p") {
					F(t, P.drawing), u.updatePointerType(t, J.feltTipPen), i(J.feltTipPen, { lastFreehandPointer: J.feltTipPen }), r.preventDefault();
					return;
				}
				if (r.key === "a" && !(0, Fi.isHotkey)(["mod+a"])(r) && Ce(t).length === 0) {
					F(t, P.drawing), u.updatePointerType(t, Gt.straight), i(Gt.straight, { lastArrowPointer: Gt.straight }), r.preventDefault();
					return;
				}
				if (r.key === "r" || r.key === "o" || r.key === "t") {
					let e = {
						r: I.rectangle,
						o: I.ellipse,
						t: I.text
					};
					e[r.key] === I.text ? F(t, P.dnd) : F(t, P.drawing), u.updatePointerType(t, e[r.key]), e[r.key] === I.text ? i(e[r.key]) : i(e[r.key], { lastShapePointer: e[r.key] }), r.preventDefault();
					return;
				}
			}
			if ((0, Fi.isHotkey)("shift+alt+c")(r)) {
				Pc("svg") && (Vc(t).catch(() => void 0), r.preventDefault());
				return;
			}
		}
		n(r);
	}, t.keyDown = (e) => {
		if ((0, Fi.isHotkey)(["mod+z"], { byKey: !0 })(e)) {
			t.undo(), e.preventDefault();
			return;
		}
		if ((0, Fi.isHotkey)(["mod+shift+z"], { byKey: !0 })(e)) {
			t.redo(), e.preventDefault();
			return;
		}
		r(e);
	}, t;
}, eu = (e, t) => {
	let n = e.appState?.toolState;
	!n || n.pointer === e.pointer || t(e.pointer);
}, tu = (e) => (t) => {
	let { pointerUp: n, globalPointerUp: r } = t;
	return t.pointerUp = (r) => {
		n(r), eu(t, e);
	}, t.globalPointerUp = (n) => {
		r(n), eu(t, e);
	}, t;
}, nu = class extends jt {
	draw(e) {
		let t = {
			strokeWidth: nn(e),
			stroke: Js(this.board, e),
			fill: Ys(this.board, e),
			fillStyle: "solid"
		}, n = C.getRoughSVG(this.board).curve(Zs(e.points, 1, 3), t);
		return Ue(n, "round"), n;
	}
	canDraw(e) {
		return !0;
	}
}, ru = class extends At {
	constructor() {
		super();
	}
	initializeGenerator() {
		this.activeGenerator = Ft(this.board, {
			getRectangle: (e) => ce.getRectangleByPoints(e.points),
			getStrokeWidth: () => e,
			getStrokeOpacity: () => 1,
			hasResizeHandle: () => Rt(this.board, this.element)
		}), this.generator = new nu(this.board), this.getRef().updateActiveSection = () => {
			this.activeGenerator.processDrawing(this.element, C.getActiveHost(this.board), { selected: this.selected });
		};
	}
	initialize() {
		super.initialize(), this.initializeGenerator(), this.generator.processDrawing(this.element, this.getElementG());
	}
	onContextChanged(e, t) {
		e.element !== t.element || e.hasThemeChanged ? (this.generator.processDrawing(this.element, this.getElementG()), this.activeGenerator.processDrawing(this.element, C.getActiveHost(this.board), { selected: this.selected })) : (e.selected !== t.selected || e.selected) && this.activeGenerator.processDrawing(this.element, C.getActiveHost(this.board), { selected: this.selected });
	}
	destroy() {
		super.destroy(), this.activeGenerator?.destroy();
	}
}, iu = class {
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
		return _e(e[0], e[1], t[0], t[1]);
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
}, au = (e) => {
	let { pointerDown: t, pointerMove: n, pointerUp: r, globalPointerUp: i, touchStart: a } = e, o = !1, s = !1, c = [], l = null, u = new nu(e), d = new iu({
		smoothing: .7,
		pressureSensitivity: .6
	}), f = null, p = (t) => {
		if (o) {
			let t = C.getPointer(e), n = Vs(e);
			s && c.push(c[0]), f = Hs(t, c, n);
		}
		f && !t && ue.insertNode(e, f, [e.children.length]), u?.destroy(), f = null, o = !1, c = [], d.reset();
	};
	return e.touchStart = (t) => {
		let n = Bs();
		if (C.isInPointer(e, n) && Bt(e)) return t.preventDefault();
		a(t);
	}, e.pointerDown = (n) => {
		let r = Bs();
		if (C.isInPointer(e, r) && Bt(e) && Ne(n)) {
			o = !0, l = [n.x, n.y];
			let t = d.process(l), r = Xe(e, Ge(e, t[0], t[1]));
			c.push(r);
		}
		t(n);
	}, e.pointerMove = (t) => {
		if (o && !Ki(e)) {
			let n = [t.x, t.y];
			s = !!(l && _e(l[0], l[1], n[0], n[1]) < 8);
			let r = d.process(n);
			if (r) {
				u?.destroy();
				let t = Xe(e, Ge(e, r[0], r[1]));
				c.push(t), f = Hs(C.getPointer(e), c, Vs(e)), u.processDrawing(f, C.getElementTopHost(e));
			}
			return;
		}
		if (Ki(e) && o) {
			p(!0);
			return;
		}
		n(t);
	}, e.pointerUp = (e) => {
		p(), r(e);
	}, e.globalPointerUp = (e) => {
		p(!0), i(e);
	}, e;
}, ou = (e) => {
	let t = e, { getDeletedFragment: n, buildFragment: r, insertFragment: i } = t;
	return t.getDeletedFragment = (e) => {
		let r = Gs(t);
		return r.length && e.push(...r), n(e);
	}, t.buildFragment = (e, n, i, a) => {
		let o = Gs(t);
		if (o.length) {
			let r = Pt(t, o, n ? [n.x, n.y] : [0, 0]);
			e = me(e, {
				text: "",
				type: fe.elements,
				elements: r
			});
		}
		return r(e, n, i, a);
	}, t.insertFragment = (e, n, r) => {
		let a = e?.elements?.filter((e) => gs.isFreehand(e));
		a && a.length > 0 && zt(t, a, n), i(e, n, r);
	}, t;
}, su = "laser-pointer", cu = (e) => {
	let t = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
	return (window.devicePixelRatio || 1) / t;
}, lu = class {
	constructor() {
		this.mouseTrack = [], this.mouseMoveHandler = null, this.resizeHandler = null, this.cvsDom = null, this.ctx = null, this.canvasPos = null, this.drawing = !1, this.container = null;
	}
	init(e) {
		this.container = C.getBoardContainer(e).closest(".drawnix"), this.cvsDom = this.container.querySelector(`.${su}`), this.ctx = this.cvsDom.getContext("2d"), this.canvasPos = this.cvsDom.getBoundingClientRect(), this.mouseMoveHandler = (e) => {
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
		if (this.mouseTrack = Bn(this.mouseTrack), this.mouseTrack.length >= 3) Hn(211, 211, 211), Un(180), qn(!0), Wn(10), Gn(0), Kn(.6), Vn(this.ctx, this.mouseTrack), e = !0;
		else {
			let e = this.mouseTrack[this.mouseTrack.length - 1];
			if (!e) return;
			this.ctx.save(), this.ctx.beginPath(), this.ctx.fillStyle = "rgba(211, 211, 211)", this.ctx.arc(e.x, e.y, 5, 0, Math.PI * 2, !1), this.ctx.closePath(), this.ctx.fill(), this.ctx.restore();
		}
		e ? requestAnimationFrame(() => this.draw()) : this.drawing = !1;
	}
	setCanvasSize() {
		if (!this.cvsDom || !this.ctx) return;
		let e = this.cvsDom.getBoundingClientRect(), t = cu(this.ctx);
		this.cvsDom.setAttribute("width", `${e.width * t}px`), this.cvsDom.setAttribute("height", `${e.height * t}px`), this.ctx.scale(t, t), this.canvasPos = this.cvsDom.getBoundingClientRect();
	}
}, uu = (e) => {
	let { pointerDown: t, pointerMove: n, pointerUp: r, globalPointerUp: i, touchStart: a } = e, o = new lu(), s = !1, c = /* @__PURE__ */ new Set(), l = (t) => {
		let n = Xe(e, Ge(e, t[0], t[1]));
		e.children.filter((e) => gs.isFreehand(e)).forEach((t) => {
			!c.has(t.id) && Us(e, t, n) && (ae.getElementG(t).style.opacity = "0.2", c.add(t.id));
		});
	}, u = () => {
		if (c.size > 0) {
			let t = e.children.filter((e) => c.has(e.id));
			t.length > 0 && d.removeElements(e, t);
		}
	}, f = () => {
		s && (u(), s = !1, c.clear(), o.destroy());
	};
	return e.touchStart = (t) => {
		if (C.isInPointer(e, [J.eraser]) && Bt(e)) return t.preventDefault();
		a(t);
	}, e.pointerDown = (n) => {
		if (C.isInPointer(e, [J.eraser]) && Bt(e) && Ne(n)) {
			s = !0, c.clear(), l([n.x, n.y]), o.init(e);
			return;
		}
		t(n);
	}, e.pointerMove = (t) => {
		if (s && !Ki(e)) {
			We(e, "with-freehand-erase", () => {
				l([t.x, t.y]);
			});
			return;
		}
		if (s && Ki(e)) {
			f();
			return;
		}
		n(t);
	}, e.pointerUp = (e) => {
		if (s) {
			f();
			return;
		}
		r(e);
	}, e.globalPointerUp = (e) => {
		if (s) {
			f();
			return;
		}
		i(e);
	}, e;
}, du = (e) => {
	let { getRectangle: t, drawElement: n, isHit: r, isRectangleHit: i, getOneHitElement: a, isMovable: o, isAlign: s } = e;
	return e.drawElement = (e) => gs.isFreehand(e.element) ? ru : n(e), e.getRectangle = (e) => gs.isFreehand(e) ? ce.getRectangleByPoints(e.points) : t(e), e.isRectangleHit = (t, n) => gs.isFreehand(t) ? Ws(e, t, n) : i(t, n), e.isHit = (t, n, i) => gs.isFreehand(t) ? Us(e, t, n) : r(t, n, i), e.getOneHitElement = (t, n) => t.every((e) => gs.isFreehand(e)) ? Qt(e, t, n) : a(t, n), e.isMovable = (e) => gs.isFreehand(e) ? !0 : o(e), e.isAlign = (e) => gs.isFreehand(e) ? !0 : s(e), e.setPluginOptions(Xt, { customGeometryTypes: [hs] }), uu(ou(au(e)));
}, fu = () => {
	let e = H(), { t: n } = U(), r = e.theme;
	return /* @__PURE__ */ M(W, {
		padding: 1,
		className: A("theme-toolbar", t),
		children: /* @__PURE__ */ N("select", {
			onChange: (t) => {
				let n = t.target.value;
				u.updateThemeColor(e, n);
			},
			value: r.themeColorMode,
			children: [
				/* @__PURE__ */ M("option", {
					value: "default",
					children: n("theme.default")
				}),
				/* @__PURE__ */ M("option", {
					value: "colorful",
					children: n("theme.colorful")
				}),
				/* @__PURE__ */ M("option", {
					value: "soft",
					children: n("theme.soft")
				}),
				/* @__PURE__ */ M("option", {
					value: "retro",
					children: n("theme.retro")
				}),
				/* @__PURE__ */ M("option", {
					value: "dark",
					children: n("theme.dark")
				}),
				/* @__PURE__ */ M("option", {
					value: "starry",
					children: n("theme.starry")
				})
			]
		})
	});
}, pu = /* @__PURE__ */ new WeakMap(), mu = (e) => !!pu.get(e), hu = (e, t) => {
	pu.set(e, t);
}, gu = (e) => (t) => {
	let { pointerDown: n } = t;
	return t.pointerDown = (r) => {
		Ie(r) && !mu(t) && (hu(t, !0), e({ isPencilMode: !0 })), !(mu(t) && !Ie(r)) && n(r);
	}, t;
}, _u = () => {
	let e = H(), { appState: t, setAppState: n } = Q();
	return /* @__PURE__ */ M(j, { children: t.isPencilMode && /* @__PURE__ */ M("div", {
		className: "pencil-mode-toolbar",
		children: /* @__PURE__ */ M(K, {
			type: "button",
			visible: !0,
			title: "X Pencil",
			"aria-label": "Arrow",
			label: "Pencil X",
			onPointerDown: () => {
				n({
					...t,
					isPencilMode: !1
				}), hu(e, !1);
			}
		})
	}) });
};
//#endregion
//#region src/components/dialog/dialog.tsx
function vu({ initialOpen: e = !1, open: t, onOpenChange: n } = {}) {
	let [r, i] = E.useState(e), [a, o] = E.useState(), [s, c] = E.useState(), l = t ?? r, u = n ?? i, d = Mn({
		open: l,
		onOpenChange: u
	}), f = d.context, p = Pn([
		An(f, { enabled: t == null }),
		jn(f, { outsidePressEvent: "mousedown" }),
		Rn(f)
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
var yu = E.createContext(null), bu = () => {
	let e = E.useContext(yu);
	if (e == null) throw Error("Dialog components must be wrapped in <Dialog />");
	return e;
};
function xu({ children: e, ...t }) {
	let n = vu(t);
	return /* @__PURE__ */ M(yu.Provider, {
		value: n,
		children: e
	});
}
E.forwardRef(function({ children: e, asChild: t = !1, ...n }, r) {
	let i = bu(), a = e.ref, o = Ln([
		i.refs.setReference,
		r,
		a
	]);
	return t && E.isValidElement(e) ? E.cloneElement(e, i.getReferenceProps({
		ref: o,
		...n,
		...e.props,
		"data-state": i.open ? "open" : "closed"
	})) : /* @__PURE__ */ M("button", {
		ref: o,
		"data-state": i.open ? "open" : "closed",
		...i.getReferenceProps(n),
		children: e
	});
});
var Su = E.forwardRef(function(e, t) {
	let { context: n, ...r } = bu(), i = Ln([r.refs.setFloating, t]);
	return n.open ? /* @__PURE__ */ M(Tn, {
		root: e.container,
		children: /* @__PURE__ */ M(wn, {
			className: "Dialog-overlay",
			lockScroll: !0,
			children: /* @__PURE__ */ M(Sn, {
				context: n,
				children: /* @__PURE__ */ M("div", {
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
	let { setLabelId: r } = bu(), i = Nn();
	return E.useLayoutEffect(() => (r(i), () => r(void 0)), [i, r]), /* @__PURE__ */ M("h2", {
		...t,
		ref: n,
		id: i,
		children: e
	});
}), E.forwardRef(function({ children: e, ...t }, n) {
	let { setDescriptionId: r } = bu(), i = Nn();
	return E.useLayoutEffect(() => (r(i), () => r(void 0)), [i, r]), /* @__PURE__ */ M("p", {
		...t,
		ref: n,
		id: i,
		children: e
	});
}), E.forwardRef(function(e, t) {
	let { setOpen: n } = bu();
	return /* @__PURE__ */ M("button", {
		type: "button",
		...e,
		ref: t,
		onClick: () => n(!1)
	});
});
//#endregion
//#region src/components/ttd-dialog/ttd-dialog-panels.tsx
var Cu = ({ children: e }) => /* @__PURE__ */ M("div", {
	className: "ttd-dialog-panels",
	children: e
}), wu = ({ label: e, children: t, panelAction: n, panelActionDisabled: r = !1, onTextSubmitInProgress: i, renderTopRight: a, renderSubmitShortcut: o, renderBottomRight: s }) => /* @__PURE__ */ N("div", {
	className: "ttd-dialog-panel",
	children: [
		/* @__PURE__ */ N("div", {
			className: "ttd-dialog-panel__header",
			children: [/* @__PURE__ */ M("label", { children: e }), a?.()]
		}),
		t,
		/* @__PURE__ */ N("div", {
			className: A("ttd-dialog-panel-button-container", { invisible: !n }),
			style: {
				display: "flex",
				alignItems: "center"
			},
			children: [
				/* @__PURE__ */ M("button", {
					className: "ttd-dialog-panel-button drawnix-button ",
					onClick: n && n.action,
					disabled: r || i,
					children: /* @__PURE__ */ N("div", {
						className: A({ invisible: i }),
						children: [n?.label, n?.icon && /* @__PURE__ */ M("span", { children: n.icon })]
					})
				}),
				!r && !i && o?.(),
				s?.()
			]
		})
	]
}), Tu = {
	ARROW_DOWN: "ArrowDown",
	ARROW_LEFT: "ArrowLeft",
	ARROW_RIGHT: "ArrowRight",
	ARROW_UP: "ArrowUp",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	BACKSPACE: "Backspace",
	ALT: "Alt",
	CTRL_OR_CMD: y || h ? "metaKey" : "ctrlKey",
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
}, Eu = ({ input: e, placeholder: t, onChange: n, onKeyboardSubmit: r }) => {
	let i = O(null), a = O(r);
	return a.current = r, D(() => {
		if (!a.current) return;
		let e = i.current;
		if (e) {
			let t = (e) => {
				e[Tu.CTRL_OR_CMD] && e.key === Tu.ENTER && (e.preventDefault(), a.current?.());
			};
			return e.addEventListener(ea.KEYDOWN, t), () => {
				e.removeEventListener(ea.KEYDOWN, t);
			};
		}
	}, []), /* @__PURE__ */ M("textarea", {
		className: "ttd-dialog-input",
		onChange: n,
		value: e,
		placeholder: t,
		autoFocus: !0,
		ref: i
	});
}, Du = ({ error: e }) => /* @__PURE__ */ N("div", {
	"data-testid": "ttd-dialog-output-error",
	className: "ttd-dialog-output-error",
	children: ["Error! ", /* @__PURE__ */ M("p", { children: e })]
}), Ou = ({ error: e, value: t, loaded: n }) => {
	let r = [
		un,
		bn,
		Ht,
		Za
	], i = {
		readonly: !0,
		hideScrollbar: !1,
		disabledScrollOnNonFocus: !0,
		themeColors: mn
	};
	return /* @__PURE__ */ N("div", {
		className: "ttd-dialog-output-wrapper",
		children: [e && /* @__PURE__ */ M(Du, { error: e.message }), /* @__PURE__ */ M("div", {
			style: { opacity: e ? "0.15" : 1 },
			className: "ttd-dialog-output-canvas-container",
			children: /* @__PURE__ */ M(Ji, {
				value: t,
				options: i,
				plugins: r,
				children: /* @__PURE__ */ M(Ni, {})
			})
		})]
	});
}, ku = () => /* @__PURE__ */ N("div", {
	className: "ttd-dialog-submit-shortcut",
	children: [/* @__PURE__ */ M("div", {
		className: "ttd-dialog-submit-shortcut__key",
		children: ao("CtrlOrCmd")
	}), /* @__PURE__ */ M("div", {
		className: "ttd-dialog-submit-shortcut__key",
		children: ao("Enter")
	})]
}), Au = "flowchart TD\n A[Christmas] -->|Get money| B(Go shopping)\n B --> C{Let me think}\n C -->|One| D[Laptop]\n C -->|Two| E[iPhone]\n C -->|Three| F[Car]", ju = () => {
	let { appState: e, setAppState: t } = Q(), { t: n, language: r } = U(), [i, a] = k({
		loaded: !1,
		api: Promise.resolve({ parseMermaidToDrawnix: async () => ({ elements: [] }) })
	});
	D(() => {
		(async () => {
			try {
				let e = await import("@plait-board/mermaid-to-drawnix");
				a({
					loaded: !0,
					api: Promise.resolve(e)
				});
			} catch (e) {
				console.error("Failed to load mermaid library:", e), f(Error(n("dialog.error.loadMermaid")));
			}
		})();
	}, []);
	let [o, s] = k(() => Au), [c, l] = k(() => []), u = mt(o.trim()), [d, f] = k(null), p = H();
	D(() => {
		(async () => {
			try {
				let e = await i.api, t;
				try {
					t = await e.parseMermaidToDrawnix(u);
				} catch {
					t = await e.parseMermaidToDrawnix(u.replace(/"/g, "'"));
				}
				let { elements: n } = t;
				l(n), f(null);
			} catch (e) {
				f(e);
			}
		})();
	}, [u, i]);
	let m = () => {
		if (!c.length) return;
		let n = C.getBoardContainer(p).getBoundingClientRect(), r = [n.width / 2, n.height / 2], i = p.viewport.zoom, a = we(p), o = a[0] + r[0] / i, s = a[1] + r[1] / i, l = c, u = ce.getBoundingRectangle(l.filter((e) => !oe.isGroup(e)).map((e) => ce.getRectangleByPoints(e.points))), d = [o - u.width / 2, s - u.height / 2];
		p.insertFragment({ elements: JSON.parse(JSON.stringify(l)) }, d, de.paste), t({
			...e,
			openDialogType: null
		});
	};
	return /* @__PURE__ */ N(j, { children: [/* @__PURE__ */ M("div", {
		className: "ttd-dialog-desc",
		children: r === "zh" ? /* @__PURE__ */ N(j, { children: [
			n("dialog.mermaid.description"),
			" ",
			/* @__PURE__ */ M("a", {
				href: "https://mermaid.js.org/syntax/flowchart.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.flowchart")
			}),
			"、",
			/* @__PURE__ */ M("a", {
				href: "https://mermaid.js.org/syntax/sequenceDiagram.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.sequence")
			}),
			" ",
			"和",
			" ",
			/* @__PURE__ */ M("a", {
				href: "https://mermaid.js.org/syntax/classDiagram.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.class")
			}),
			n("dialog.mermaid.otherTypes")
		] }) : /* @__PURE__ */ N(j, { children: [
			n("dialog.mermaid.description"),
			" ",
			/* @__PURE__ */ M("a", {
				href: "https://mermaid.js.org/syntax/flowchart.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.flowchart")
			}),
			",",
			" ",
			/* @__PURE__ */ M("a", {
				href: "https://mermaid.js.org/syntax/sequenceDiagram.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.sequence")
			}),
			",",
			" ",
			/* @__PURE__ */ M("a", {
				href: "https://mermaid.js.org/syntax/classDiagram.html",
				target: "_blank",
				rel: "noreferrer",
				children: n("dialog.mermaid.class")
			}),
			n("dialog.mermaid.otherTypes")
		] })
	}), /* @__PURE__ */ N(Cu, { children: [/* @__PURE__ */ M(wu, {
		label: n("dialog.mermaid.syntax"),
		children: /* @__PURE__ */ M(Eu, {
			input: o,
			placeholder: n("dialog.mermaid.placeholder"),
			onChange: (e) => s(e.target.value),
			onKeyboardSubmit: () => {
				m();
			}
		})
	}), /* @__PURE__ */ M(wu, {
		label: n("dialog.mermaid.preview"),
		panelAction: {
			action: () => {
				m();
			},
			label: n("dialog.mermaid.insert")
		},
		renderSubmitShortcut: () => /* @__PURE__ */ M(ku, {}),
		children: /* @__PURE__ */ M(Ou, {
			value: c,
			loaded: i.loaded,
			error: d
		})
	})] })] });
}, Mu = () => {
	let { appState: e, setAppState: t } = Q(), { t: n, language: r } = U(), [i, a] = k({
		loaded: !1,
		api: Promise.resolve({ parseMarkdownToDrawnix: (e, t) => null })
	});
	D(() => {
		(async () => {
			try {
				let e = await import("@plait-board/markdown-to-drawnix");
				a({
					loaded: !0,
					api: Promise.resolve(e)
				});
			} catch (e) {
				console.error("Failed to load mermaid library:", e), f(Error(n("dialog.error.loadMermaid")));
			}
		})();
	}, []);
	let [o, s] = k(() => n("markdown.example")), [c, l] = k(() => []), u = mt(o.trim()), [d, f] = k(null), p = H();
	D(() => {
		s(n("markdown.example"));
	}, [r]), D(() => {
		(async () => {
			try {
				let e = await i.api, t;
				try {
					t = await e.parseMarkdownToDrawnix(u);
				} catch {
					t = await e.parseMarkdownToDrawnix(u.replace(/"/g, "'"));
				}
				let n = t;
				n.points = [[0, 0]], n && (l([n]), f(null));
			} catch (e) {
				f(e);
			}
		})();
	}, [u, i]);
	let m = () => {
		if (!c.length) return;
		let n = C.getBoardContainer(p).getBoundingClientRect(), r = [n.width / 4, n.height / 2 - 20], i = p.viewport.zoom, a = we(p), o = a[0] + r[0] / i, s = a[1] + r[1] / i, l = c;
		p.insertFragment({ elements: JSON.parse(JSON.stringify(l)) }, [o, s], de.paste), t({
			...e,
			openDialogType: null
		});
	};
	return /* @__PURE__ */ N(j, { children: [/* @__PURE__ */ M("div", {
		className: "ttd-dialog-desc",
		children: n("dialog.markdown.description")
	}), /* @__PURE__ */ N(Cu, { children: [/* @__PURE__ */ M(wu, {
		label: n("dialog.markdown.syntax"),
		children: /* @__PURE__ */ M(Eu, {
			input: o,
			placeholder: n("dialog.markdown.placeholder"),
			onChange: (e) => s(e.target.value),
			onKeyboardSubmit: () => {
				m();
			}
		})
	}), /* @__PURE__ */ M(wu, {
		label: n("dialog.markdown.preview"),
		panelAction: {
			action: () => {
				m();
			},
			label: n("dialog.markdown.insert")
		},
		renderSubmitShortcut: () => /* @__PURE__ */ M(ku, {}),
		children: /* @__PURE__ */ M(Ou, {
			value: c,
			loaded: i.loaded,
			error: d
		})
	})] })] });
}, Nu = ({ container: e }) => {
	let { appState: t, setAppState: n } = Q();
	return /* @__PURE__ */ N(j, { children: [/* @__PURE__ */ M(xu, {
		open: t.openDialogType === gc.mermaidToDrawnix,
		onOpenChange: (e) => {
			n({
				...t,
				openDialogType: e ? gc.mermaidToDrawnix : null
			});
		},
		children: /* @__PURE__ */ M(Su, {
			className: "Dialog ttd-dialog",
			container: e,
			children: /* @__PURE__ */ M(ju, {})
		})
	}), /* @__PURE__ */ M(xu, {
		open: t.openDialogType === gc.markdownToDrawnix,
		onOpenChange: (e) => {
			n({
				...t,
				openDialogType: e ? gc.markdownToDrawnix : null
			});
		},
		children: /* @__PURE__ */ M(Su, {
			className: "Dialog ttd-dialog",
			container: e,
			children: /* @__PURE__ */ M(Mu, {})
		})
	})] });
}, Pu = ({ container: e }) => {
	let { appState: t, setAppState: n } = Q(), { t: r } = U(), i = H();
	return /* @__PURE__ */ M(xu, {
		open: t.openCleanConfirm,
		onOpenChange: (e) => {
			n({
				...t,
				openCleanConfirm: e
			});
		},
		children: /* @__PURE__ */ N(Su, {
			className: "clean-confirm",
			container: e,
			children: [
				/* @__PURE__ */ M("h2", {
					className: "clean-confirm__title",
					children: r("cleanConfirm.title")
				}),
				/* @__PURE__ */ M("p", {
					className: "clean-confirm__description",
					children: r("cleanConfirm.description")
				}),
				/* @__PURE__ */ N("div", {
					className: "clean-confirm__actions",
					children: [/* @__PURE__ */ M("button", {
						className: "clean-confirm__button clean-confirm__button--cancel",
						onClick: () => {
							n({
								...t,
								openCleanConfirm: !1
							});
						},
						children: r("cleanConfirm.cancel")
					}), /* @__PURE__ */ M("button", {
						className: "clean-confirm__button clean-confirm__button--ok",
						autoFocus: !0,
						onClick: () => {
							i.deleteFragment(i.children), n({
								...t,
								openCleanConfirm: !1
							});
						},
						children: r("cleanConfirm.ok")
					})]
				})
			]
		})
	});
}, Fu = (e) => {
	let { appState: t } = e;
	return t && t.linkState && t.linkState.isHovering;
}, Iu = (e) => {
	let { appState: t } = e;
	return t && t.linkState && t.linkState.isEditing;
}, Lu = (e) => (t) => {
	let { pointerMove: n } = t, r = null, i = null;
	return t.pointerMove = (a) => {
		(C.isPointer(t, T.selection) || C.isPointer(t, T.hand)) && !Pe(t) && !Vt(t) && !Fu(t) && !Iu(t) && We(t, "with-text-link", () => {
			let n = a.target.closest(".plait-board-link");
			if (n && n !== r) {
				let t = n.closest(".plait-text-container"), a = xt.toSlateNode(void 0, t), o = xt.toSlateNode(void 0, n);
				r = n, e({ linkState: {
					targetDom: n,
					targetElement: o,
					editor: a,
					isEditing: !1,
					isHovering: !1,
					isHoveringOrigin: !0
				} }), clearTimeout(i);
			} else !n && r && (i = setTimeout(() => {
				!Fu(t) && !Iu(t) && e({ linkState: null });
			}, 300), r = null);
		}), n(a);
	}, t;
}, Ru = () => {
	let { t: e } = U(), [t, n] = k(""), { appState: r, setAppState: i } = Q(), a = H(), { refs: o, floatingStyles: s } = Mn({
		placement: "top",
		middleware: [On(20), Dn()]
	}), c = r.linkState, l = r.linkState?.targetDom || null, u = r.linkState?.isEditing || !1, d = r.linkState?.isHoveringOrigin || !1, f = r.linkState?.isHovering || !1, p = u || d || f, m = O(r.linkState);
	D(() => {
		m.current = r.linkState, r.linkState ? n(r.linkState.targetElement.url) : n("");
	}, [r.linkState]), D(() => {
		if (l) {
			let e = l.getBoundingClientRect();
			o.setPositionReference({ getBoundingClientRect() {
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
	}, [a.viewport, l]), D(() => {
		let e = (e) => {
			if (o.floating.current && !o.floating.current.contains(e.target)) {
				if (m.current) {
					let e = Et.getLinkElement(m.current.editor);
					e && !e[0].url.trim() && Et.unwrapLink(m.current.editor);
				}
				i({
					...r,
					linkState: null
				});
			}
		};
		return document.addEventListener("mousedown", e), () => {
			document.removeEventListener("mousedown", e);
		};
	}, []);
	let h = () => {
		if (t !== c.targetElement.url) {
			let e = c.editor, n = c.targetElement, r = xt.findPath(e, n);
			vt.setNodes(e, { url: t }, { at: r });
		}
		let e = Et.getLinkElement(c.editor);
		i({
			...r,
			linkState: {
				...r.linkState,
				targetElement: e[0],
				isEditing: !1,
				isHoveringOrigin: !0
			}
		});
	};
	return p && /* @__PURE__ */ M(W, {
		ref: o.setFloating,
		style: s,
		padding: 1,
		className: A("link-popup"),
		onPointerEnter: () => {
			f || i({
				...r,
				linkState: {
					...r.linkState,
					isHovering: !0
				}
			});
		},
		onPointerLeave: () => {
			u || i({
				...r,
				linkState: {
					...r.linkState,
					isHovering: !1
				}
			});
		},
		children: /* @__PURE__ */ M(G.Row, {
			gap: 1,
			align: "center",
			children: u ? /* @__PURE__ */ N(j, { children: [/* @__PURE__ */ M("input", {
				type: "text",
				value: t,
				onChange: (e) => {
					n(e.target.value);
				},
				onKeyDown: (e) => {
					e.key === "Enter" && h();
				},
				className: "link-popup__input",
				autoFocus: !0
			}), /* @__PURE__ */ M(K, {
				type: "icon",
				visible: !0,
				icon: Ho,
				title: e("popupLink.delLink"),
				"aria-label": e("popupLink.delLink"),
				onPointerDown: () => {
					let e = c.editor, t = c.targetElement, n = xt.findPath(e, t);
					vt.unwrapNodes(e, { at: n }), i({
						...r,
						linkState: null
					});
				}
			})] }) : /* @__PURE__ */ N(j, { children: [
				/* @__PURE__ */ M("a", {
					href: t,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "link-popup__link",
					children: t
				}),
				/* @__PURE__ */ M(K, {
					className: "link-popup__edit",
					type: "icon",
					visible: !0,
					icon: Wo,
					title: "Edit link",
					"aria-label": "Edit link",
					onPointerDown: ({ event: e }) => {
						e.preventDefault(), i({
							...r,
							linkState: {
								...r.linkState,
								isEditing: !0
							}
						});
					}
				}),
				/* @__PURE__ */ M(K, {
					type: "icon",
					visible: !0,
					icon: Ho,
					title: e("popupLink.delLink"),
					"aria-label": e("popupLink.delLink"),
					onPointerDown: () => {
						let e = c.editor, t = c.targetElement, n = xt.findPath(e, t);
						vt.unwrapNodes(e, { at: n }), i({
							...r,
							linkState: null
						});
					}
				})
			] })
		})
	});
}, zu = () => {
	let { t: e } = U();
	return /* @__PURE__ */ M("div", {
		className: "drawnix-tutorial",
		children: /* @__PURE__ */ M("div", {
			className: "tutorial-overlay",
			children: /* @__PURE__ */ N("div", {
				className: "tutorial-content",
				children: [
					/* @__PURE__ */ M("h1", {
						className: "brand-title",
						children: e("tutorial.title")
					}),
					/* @__PURE__ */ M("p", {
						className: "brand-description",
						children: e("tutorial.description")
					}),
					/* @__PURE__ */ M("p", {
						className: "brand-tooltip",
						children: e("tutorial.dataDescription")
					}),
					/* @__PURE__ */ N("div", {
						className: "feature-pointer top-left",
						children: [/* @__PURE__ */ N("svg", {
							className: "pointer-arrow-svg",
							width: "130",
							height: "100",
							viewBox: "0 0 130 100",
							children: [/* @__PURE__ */ M("defs", { children: /* @__PURE__ */ M("marker", {
								id: "arrow-left",
								markerWidth: "10",
								markerHeight: "10",
								refX: "0",
								refY: "3",
								orient: "auto",
								markerUnits: "strokeWidth",
								children: /* @__PURE__ */ M("path", {
									d: "M0,0 L0,6 L6,3 z",
									fill: "#888"
								})
							}) }), /* @__PURE__ */ M("path", {
								d: "M 80,70 Q 35,60 15,15",
								fill: "none",
								stroke: "#aaa",
								strokeWidth: "1.5",
								markerEnd: "url(#arrow-left)"
							})]
						}), /* @__PURE__ */ M("div", {
							className: "pointer-content",
							children: /* @__PURE__ */ M("p", { children: e("tutorial.appToolbar") })
						})]
					}),
					/* @__PURE__ */ N("div", {
						className: "feature-pointer top-center",
						children: [/* @__PURE__ */ N("svg", {
							className: "pointer-arrow-svg",
							width: "100",
							height: "130",
							viewBox: "0 0 100 130",
							children: [/* @__PURE__ */ M("defs", { children: /* @__PURE__ */ M("marker", {
								id: "arrow-top",
								markerWidth: "10",
								markerHeight: "10",
								refX: "0",
								refY: "3",
								orient: "auto",
								markerUnits: "strokeWidth",
								children: /* @__PURE__ */ M("path", {
									d: "M0,0 L0,6 L6,3 z",
									fill: "#888"
								})
							}) }), /* @__PURE__ */ M("path", {
								d: "M 45,90 Q 20,50 45,10",
								fill: "none",
								stroke: "#aaa",
								strokeWidth: "1.5",
								markerEnd: "url(#arrow-top)"
							})]
						}), /* @__PURE__ */ M("div", {
							className: "pointer-content",
							children: /* @__PURE__ */ M("p", { children: e("tutorial.creationToolbar") })
						})]
					}),
					/* @__PURE__ */ N("div", {
						className: "feature-pointer bottom-right",
						children: [/* @__PURE__ */ N("svg", {
							className: "pointer-arrow-svg",
							width: "180",
							height: "100",
							viewBox: "0 0 180 100",
							children: [/* @__PURE__ */ M("defs", { children: /* @__PURE__ */ M("marker", {
								id: "arrow-right",
								markerWidth: "10",
								markerHeight: "10",
								refX: "0",
								refY: "3",
								orient: "auto",
								markerUnits: "strokeWidth",
								children: /* @__PURE__ */ M("path", {
									d: "M0,0 L0,6 L6,3 z",
									fill: "#888"
								})
							}) }), /* @__PURE__ */ M("path", {
								d: "M 20,25 Q 75,20 105,70",
								fill: "none",
								stroke: "#aaa",
								strokeWidth: "1.5",
								markerEnd: "url(#arrow-right)"
							})]
						}), /* @__PURE__ */ M("div", {
							className: "pointer-content",
							children: /* @__PURE__ */ M("p", { children: e("tutorial.themeDescription") })
						})]
					})
				]
			})
		})
	});
}, Bu = () => {
	let [e, t] = k(null), n = O(0), r = O(null), i = ft((e) => {
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
}, Vu = ({ toast: e, container: t }) => /* @__PURE__ */ M(Tn, {
	root: t,
	preserveTabOrder: !1,
	children: e && /* @__PURE__ */ M("div", {
		className: "drawnix-toast-wrapper",
		"aria-live": "polite",
		"aria-atomic": "true",
		children: /* @__PURE__ */ N("div", {
			role: "status",
			className: A("drawnix-toast", `drawnix-toast--${e.type}`),
			children: [/* @__PURE__ */ M("div", {
				className: "drawnix-toast__message",
				children: e.message
			}), e.description && /* @__PURE__ */ M("div", {
				className: "drawnix-toast__description",
				children: e.description
			})]
		})
	})
}), Hu = (e, t) => {
	u.updatePointerType(e, t.pointer), t.pointer !== T.hand && t.pointer !== T.selection && F(e, P.drawing);
}, Uu = ({ value: e, viewport: t, theme: n, initialToolState: r, initialPreference: i, initialLanguage: a, onChange: o, onSelectionChange: s, onViewportChange: c, onThemeChange: l, onValueChange: u, onToolStateChange: d, onPreferenceChange: f, onLanguageChange: p, afterInit: m, tutorial: h = !1 }) => {
	let g = {
		readonly: !1,
		hideScrollbar: !0,
		disabledScrollOnNonFocus: !1,
		themeColors: mn
	}, [_, v] = k(() => {
		let e = new xn(window.navigator.userAgent);
		return {
			toolState: vc(r),
			isMobile: e.mobile() !== null,
			isPencilMode: !1,
			fileHandle: null,
			openDialogType: null,
			openCleanConfirm: !1,
			copyTransparent: i?.copyTransparent ?? !1,
			exportTransparent: i?.exportTransparent ?? !1
		};
	}), [y, b] = k(null), [x, S] = k(n?.themeColorMode || le.default), { toast: ee, showToast: te } = Bu(), ne = O(a ?? "zh");
	y && (y.appState = _, y.showToast = te), D(() => {
		y && Ja(y, ne.current);
	}, [y]);
	let re = O(!1), C = O(d);
	C.current = d, D(() => {
		if (!re.current) {
			re.current = !0;
			return;
		}
		C.current?.(_.toolState);
	}, [_.toolState]);
	let ie = O(!1), ae = O(f);
	ae.current = f, D(() => {
		if (!ie.current) {
			ie.current = !0;
			return;
		}
		ae.current?.({
			copyTransparent: _.copyTransparent,
			exportTransparent: _.exportTransparent
		});
	}, [_.copyTransparent, _.exportTransparent]), D(() => {
		n?.themeColorMode && S(n.themeColorMode);
	}, [n?.themeColorMode]);
	let oe = (e) => {
		v((t) => ({
			...t,
			...e
		}));
	}, se = [
		un,
		Ht,
		bn,
		Qi,
		Za,
		$l(oe),
		du,
		gu(oe),
		Lu(oe),
		tu((e) => {
			v((t) => t.toolState.pointer === e ? t : {
				...t,
				toolState: {
					...t.toolState,
					pointer: e
				}
			});
		})
	], w = O(null);
	return /* @__PURE__ */ M(Ya, {
		initialLanguage: a,
		onLanguageChange: (e) => {
			ne.current = e, y && Ja(y, e), p?.(e);
		},
		children: /* @__PURE__ */ M(yc.Provider, {
			value: {
				appState: _,
				setAppState: v,
				showToast: te
			},
			children: /* @__PURE__ */ N("div", {
				className: A("drawnix", {
					"drawnix--mobile": _.isMobile,
					[`theme--${x}`]: x
				}),
				ref: w,
				children: [/* @__PURE__ */ N(Ji, {
					value: e,
					viewport: t,
					theme: n,
					options: g,
					plugins: se,
					onChange: (e) => {
						o?.(e);
					},
					onSelectionChange: s,
					onViewportChange: c,
					onThemeChange: (e) => {
						S(e), l?.(e);
					},
					onValueChange: u,
					children: [
						/* @__PURE__ */ M(Ni, {
							afterInit: (e) => {
								let t = e;
								Hu(t, _.toolState), b(t), m?.(e);
							},
							children: h && y && /* @__PURE__ */ M(zu, {})
						}),
						/* @__PURE__ */ M(Ql, {}),
						/* @__PURE__ */ M(Qc, {}),
						/* @__PURE__ */ M($c, {}),
						/* @__PURE__ */ M(fu, {}),
						/* @__PURE__ */ M(Pl, {}),
						/* @__PURE__ */ M(Ru, {}),
						/* @__PURE__ */ M(_u, {}),
						/* @__PURE__ */ M(Nu, { container: w.current }),
						/* @__PURE__ */ M(Pu, { container: w.current }),
						/* @__PURE__ */ M(Vu, {
							toast: ee,
							container: w.current
						})
					]
				}), /* @__PURE__ */ M("canvas", { className: `${su} mouse-course-hidden` })]
			})
		})
	});
};
//#endregion
export { Uu as Drawnix, Ya as I18nProvider, Uc as addImage, Ds as applyOpacityToHex, to as base64ToBlob, no as boardToImage, Pc as canCopySelectionAs, eo as composeEventHandlers, Hc as copySelectionAsPng, Vc as copySelectionAsSvg, ro as download, Ls as getBackgroundColor, tl as getCurrentFill, rl as getCurrentFontColor, nl as getCurrentStrokeColor, ao as getShortcutKey, Os as hexAlphaToOpacity, Xa as i18nInsidePlaitHook, el as isClosedElement, Is as isDefaultStroke, Ps as isFullyOpaque, Ns as isFullyTransparent, Fs as isNoColor, $a as isPromiseLike, js as isTransparent, ks as isValidColor, Ms as isWhite, As as removeHexAlpha, Bc as saveAsPng, zc as saveAsSvg, Ja as setBoardLanguage, io as splitRows, U as useI18n };
