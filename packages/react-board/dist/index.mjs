import e from "roughjs/bin/rough";
import { BOARD_TO_AFTER_CHANGE as t, BOARD_TO_CONTEXT as n, BOARD_TO_ELEMENT_HOST as r, BOARD_TO_HOST as i, BOARD_TO_MOVING_POINT as a, BOARD_TO_MOVING_POINT_IN_BOARD as o, BOARD_TO_ON_CHANGE as s, BOARD_TO_ROUGH_SVG as c, BoardTransforms as l, FLUSHING as u, HOST_CLASS_NAME as d, IS_BOARD_ALIVE as f, IS_CHROME as p, IS_FIREFOX as m, IS_SAFARI as h, KEY_TO_ELEMENT_MAP as g, ListRender as _, MAX_ZOOM as v, MIN_ZOOM as y, PlaitBoard as b, PlaitBoardContext as x, PlaitElement as S, PlaitOperation as C, WritableClipboardOperationType as w, ZOOM_STEP as T, createBoard as E, deleteFragment as ee, distanceBetweenPointAndPoint as D, getClipboardData as te, getPointBetween as O, getSelectedElements as ne, getViewportOrigination as re, hasInputOrTextareaTarget as ie, initializeViewBox as k, initializeViewportContainer as A, initializeViewportOffset as ae, isFromScrolling as oe, isFromViewportChange as se, setFragment as j, setIsFromScrolling as ce, setIsFromViewportChange as le, toHostPoint as ue, toViewBoxPoint as de, updateViewBox as fe, updateViewportByScrolling as pe, updateViewportOffset as M, withBoard as me, withHandPointer as N, withHistory as P, withHotkey as F, withI18n as I, withMoving as L, withOptions as R, withRelatedFragment as z, withSelection as he } from "@plait/core";
import { createContext as ge, useCallback as _e, useContext as B, useEffect as V, useRef as H, useState as ve } from "react";
import ye from "classnames";
import { useEventListener as U } from "ahooks";
import { jsx as W, jsxs as G } from "react/jsx-runtime";
import { createRoot as be } from "react-dom/client";
import { Text as K } from "@plait-board/react-text";
import { ReactEditor as q } from "slate-react";
import { withImage as xe, withText as Se } from "@plait/common";
//#region src/hooks/use-plugin-event.tsx
var Ce = (e, t, n) => {
	U("pointerdown", (t) => {
		e.pointerDown(t);
	}, { target: n }), U("pointermove", (t) => {
		o.set(e, [t.x, t.y]), e.pointerMove(t);
	}, { target: t }), U("pointerleave", (t) => {
		o.delete(e), e.pointerLeave(t);
	}, { target: t }), U("pointerup", (t) => {
		e.pointerUp(t);
	}, { target: t }), U("touchstart", (t) => {
		e.touchStart(t);
	}, { target: t }), U("touchmove", (t) => {
		e.touchMove(t);
	}, { target: t }), U("touchend", (t) => {
		e.touchEnd(t);
	}, { target: t }), U("dblclick", (t) => {
		b.isFocus(e) && !b.hasBeenTextEditing(e) && e.dblClick(t);
	}, { target: n }), U("pointermove", (t) => {
		a.set(e, [t.x, t.y]), e.globalPointerMove(t);
	}), U("pointerup", (t) => {
		e.globalPointerUp(t);
	}), U("keydown", (t) => {
		e.globalKeyDown(t), b.isFocus(e) && !b.hasBeenTextEditing(e) && !ie(t.target) && e.keyDown(t);
	}), U("keyup", (t) => {
		b.isFocus(e) && !b.hasBeenTextEditing(e) && e?.keyUp(t);
	}), U("copy", (t) => {
		b.isFocus(e) && !b.hasBeenTextEditing(e) && (t.preventDefault(), j(e, w.copy, t.clipboardData));
	}), U("paste", async (t) => {
		if (b.isFocus(e) && !b.isReadonly(e) && !b.hasBeenTextEditing(e)) {
			let n = b.getMovingPointInBoard(e);
			if (n) {
				let r = de(e, ue(e, n[0], n[1])), i = await te(t.clipboardData);
				e.insertFragment(i, r, w.paste);
			}
		}
	}), U("cut", (t) => {
		b.isFocus(e) && !b.isReadonly(e) && !b.hasBeenTextEditing(e) && (t.preventDefault(), j(e, w.cut, t.clipboardData), ee(e));
	}), U("drop", (t) => {
		b.isReadonly(e) || (t.preventDefault(), e.drop(t));
	}, { target: t }), U("dragover", (e) => {
		e.preventDefault();
	}, { target: t });
}, we = (e, t) => {
	U("scroll", (t) => {
		if (se(e)) le(e, !1);
		else {
			let { scrollLeft: n, scrollTop: r } = t.target;
			pe(e, n, r);
		}
	}, { target: t }), U("contextmenu", (e) => {
		e.preventDefault();
	}, { target: t }), U("wheel", (t) => {
		if (t.metaKey || t.ctrlKey) {
			t.preventDefault();
			let { deltaY: n } = t, r = e.viewport.zoom, i = Math.sign(n), a = T * 100, o = Math.abs(n), s = n;
			o > a && (s = a * i);
			let c = r - s / 100;
			c += Math.log10(Math.max(1, r)) * -i * Math.min(1, o / 20), l.updateZoom(e, c, b.getMovingPointInBoard(e));
		}
	}, {
		target: t,
		passive: !1
	});
	let n = H(!1);
	V(() => {
		let t = new ResizeObserver(() => {
			if (!n.current) {
				n.current = !0;
				return;
			}
			A(e), k(e), M(e);
		});
		return t.observe(b.getBoardContainer(e)), () => {
			t.disconnect();
		};
	}, []);
}, J = ge(null), Y = () => {
	let e = B(J);
	if (!e) throw Error("The `useBoard` hook must be used inside the <Plait> component's context.");
	let { board: t } = e;
	return t;
}, X = () => {
	let e = B(J);
	if (!e) throw Error("The `useBoard` hook must be used inside the <Plait> component's context.");
	let { listRender: t } = e;
	return t;
}, Te = ({ style: a, className: o, children: l, afterInit: u }) => {
	let p = H(null), m = H(null), h = H(null), _ = H(null), v = H(null), y = H(null), S = H(null), C = H(null), w = Y(), T = X();
	return V(() => {
		let a = e.svg(p.current, { options: {
			roughness: 0,
			strokeWidth: 1
		} });
		c.set(w, a), i.set(w, p.current), f.set(w, !0), r.set(w, {
			lowerHost: m.current,
			host: h.current,
			upperHost: _.current,
			topHost: v.current,
			activeHost: y.current,
			container: C.current,
			viewportContainer: S.current
		});
		let o = new x();
		return n.set(w, o), g.set(w, /* @__PURE__ */ new Map()), T.initialized || (T.initialize(w.children, {
			board: w,
			parent: w,
			parentG: b.getElementHost(w)
		}), u && u(w)), A(w), k(w), ae(w), () => {
			n.delete(w), t.delete(w), s.delete(w), r.delete(w), f.delete(w), i.delete(w), c.delete(w), g.delete(w);
		};
	}, []), Ce(w, S, p), we(w, S), /* @__PURE__ */ W("div", {
		className: ye(o, d, `${Z()}`, `theme-${w.theme?.themeColorMode}`, `pointer-${w.pointer}`, {
			focused: b.isFocus(w),
			readonly: b.isReadonly(w),
			"disabled-scroll": w.options?.disabledScrollOnNonFocus && !b.isFocus(w)
		}),
		ref: C,
		style: a,
		children: /* @__PURE__ */ G("div", {
			className: "viewport-container",
			ref: S,
			style: {
				width: "100%",
				height: "100%",
				overflow: "auto"
			},
			children: [
				/* @__PURE__ */ G("svg", {
					ref: p,
					width: "100%",
					height: "100%",
					style: { position: "relative" },
					className: "board-host-svg",
					children: [
						/* @__PURE__ */ W("g", {
							className: "element-lower-host",
							ref: m
						}),
						/* @__PURE__ */ W("g", {
							className: "element-host",
							ref: h
						}),
						/* @__PURE__ */ W("g", {
							className: "element-upper-host",
							ref: _
						}),
						/* @__PURE__ */ W("g", {
							className: "element-top-host",
							ref: v
						})
					]
				}),
				/* @__PURE__ */ W("svg", {
					width: "100%",
					height: "100%",
					className: "board-active-svg",
					children: /* @__PURE__ */ W("g", {
						className: "active-host-g",
						ref: y
					})
				}),
				l
			]
		})
	});
}, Z = () => h ? "safari" : p ? "chrome" : m ? "firefox" : "", Ee = (e) => {
	let t = e;
	return t.renderText = (e, t) => {
		let n = be(e), r, i = /* @__PURE__ */ W(K, {
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
				let t = q.isReadOnly(r);
				a = {
					...a,
					...e
				}, n.render(/* @__PURE__ */ W(K, { ...a })), t === !0 && a.readonly === !1 ? setTimeout(() => {
					q.focus(r);
				}, 100) : t === !1 && a.readonly === !0 && (q.blur(r), q.deselect(r));
			}
		};
	}, t;
}, Q = /* @__PURE__ */ new WeakMap(), De = (e) => Q.get(e)?.length === 2, $ = (e) => {
	let { touchStart: t, touchMove: n, touchEnd: r } = e, i = [], a = !1;
	return e.touchStart = (n) => {
		i = Array.from(n.touches).map((e) => ({
			pointerId: e.identifier,
			lastPoint: [e.clientX, e.clientY],
			currentPoint: [e.clientX, e.clientY],
			hasMoved: !1
		})), Q.set(e, i), t(n);
	}, e.touchMove = (t) => {
		if (Array.from(t.changedTouches).forEach((e) => {
			let t = i.find((t) => t.pointerId === e.identifier);
			t && (t.lastPoint = t.currentPoint, t.currentPoint = [e.clientX, e.clientY], t.hasMoved = !0);
		}), i.length === 2 && t.preventDefault(), i.length === 2 && i.every((e) => e.hasMoved)) {
			let [t, n] = i, r = O(...t.lastPoint, ...n.lastPoint), o = O(...t.currentPoint, ...n.currentPoint), s = o[0] - r[0], c = o[1] - r[1], u = b.getBoardContainer(e).getBoundingClientRect(), d = u.width / 2, f = u.height / 2, p = e.viewport.zoom, m = re(e), h = m[0] + d / p - s / p, g = m[1] + f / p - c / p, _ = [h - u.width / 2 / p, g - u.height / 2 / p], x = p, S = D(...t.lastPoint, ...n.lastPoint), C = D(...t.currentPoint, ...n.currentPoint) / S, w = [t.currentPoint[0] - t.lastPoint[0], t.currentPoint[1] - t.lastPoint[1]], T = [n.currentPoint[0] - n.lastPoint[0], n.currentPoint[1] - n.lastPoint[1]], E = (w[0] * T[0] + w[1] * T[1]) / (Math.sqrt(w[0] * w[0] + w[1] * w[1]) * Math.sqrt(T[0] * T[0] + T[1] * T[1]) || 1);
			if (a = !!(E < -.7 || E <= .8 && a && C >= .01), a) {
				x = Math.min(Math.max(e.viewport.zoom * C, y), v);
				let t = b.getBoardContainer(e).getBoundingClientRect(), n = o[0] - t.x, r = o[1] - t.y;
				h = _[0] + n / p, g = _[1] + r / p, _ = [h - n / x, g - r / x];
			}
			l.updateViewport(e, _, x), i[0].lastPoint = t.currentPoint, i[1].lastPoint = n.currentPoint, i[0].hasMoved = !1, i[1].hasMoved = !1;
			return;
		}
		n(t);
	}, e.touchEnd = (t) => {
		let n = i.findIndex((e) => e.pointerId === t.changedTouches[0].identifier);
		n !== -1 && i.splice(n, 1), Q.set(e, i), r(t);
	}, e;
}, Oe = ({ value: e, children: n, options: r, plugins: i, viewport: a, theme: o, onChange: c, onSelectionChange: d, onValueChange: f, onViewportChange: p, onThemeChange: m }) => {
	let [h, g] = ve(() => {
		let t = ke(e, r, i, a, o);
		return {
			v: 0,
			board: t,
			listRender: Ae(t)
		};
	}), { board: _, listRender: v } = h, y = _e(() => {
		c && c({
			children: _.children,
			operations: _.operations,
			viewport: _.viewport,
			selection: _.selection,
			theme: _.theme
		});
		let e = _.operations.some((e) => C.isSetSelectionOperation(e)), t = _.operations.some((e) => C.isSetViewportOperation(e)), n = _.operations.some((e) => C.isSetThemeOperation(e)), r = _.operations.length > 0 && !_.operations.every((e) => C.isSetSelectionOperation(e) || C.isSetViewportOperation(e) || C.isSetThemeOperation(e));
		f && r && f(_.children), d && e && d(_.selection), p && t && p(_.viewport), m && n && m(_.theme.themeColorMode), g((e) => ({
			v: e.v + 1,
			board: _,
			listRender: v
		}));
	}, [
		_,
		v,
		c,
		d,
		m,
		f,
		p
	]);
	V(() => (s.set(_, () => {
		if (_.operations.length && _.operations.every((e) => e.type === "set_selection")) {
			v.update(_.children, {
				board: _,
				parent: _,
				parentG: b.getElementHost(_)
			});
			return;
		}
		let e = _.operations.length && _.operations.some((e) => e.type === "set_viewport");
		if (e && oe(_)) {
			ce(_, !1), v.update(_.children, {
				board: _,
				parent: _,
				parentG: b.getElementHost(_)
			});
			return;
		}
		v.update(_.children, {
			board: _,
			parent: _,
			parentG: b.getElementHost(_)
		}), e ? k(_) : fe(_), M(_), ne(_).forEach((e) => {
			S.getElementRef(e).updateActiveSection();
		});
	}), t.set(_, () => {
		y();
	}), () => {
		s.delete(_), t.delete(_);
	}), [
		_,
		v,
		y
	]);
	let x = H(!0);
	return V(() => {
		if (x.current) {
			x.current = !1;
			return;
		}
		e !== h.board.children && !u.get(_) && (_.children = e, o && (_.theme = o), v.update(_.children, {
			board: _,
			parent: _,
			parentG: b.getElementHost(_)
		}), l.fitViewport(_));
	}, [e]), /* @__PURE__ */ W(J.Provider, {
		value: h,
		children: n
	});
}, ke = (e, t, n, r, i) => {
	let a = z(F(N(P(he(L(me(I(R(Ee(xe(Se(E(e, t)))))))))))));
	return n.forEach((e) => {
		a = e(a);
	}), $(a), r && (a.viewport = r), i && (a.theme = i), a;
}, Ae = (e) => new _(e);
//#endregion
export { Te as Board, J as BoardContext, Q as TOUCH_RECORDS, Oe as Wrapper, De as isTwoFingerMode, Y as useBoard, X as useListRender, $ as withPinchZoom };
