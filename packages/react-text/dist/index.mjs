import { Range as e, Transforms as t, createEditor as n } from "slate";
import { isKeyHotkey as r } from "is-hotkey";
import { Editable as i, Slate as a, withReact as o } from "slate-react";
import { useCallback as s, useEffect as c, useState as l } from "react";
import { withHistory as u } from "slate-history";
import { LinkEditor as d, isUrl as f } from "@plait/text-plugins";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/plugins/with-text.ts
var h = (e) => {
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
}, g = () => /* @__PURE__ */ p("span", {
	contentEditable: !1,
	style: { fontSize: 0 },
	children: String.fromCodePoint(160)
}), _ = ({ attributes: e, children: t, element: n }) => /* @__PURE__ */ m("a", {
	...e,
	style: {
		textDecoration: "none",
		cursor: "inherit"
	},
	"data-url": n.url,
	className: "plait-board-link",
	children: [
		/* @__PURE__ */ p(g, {}),
		t,
		/* @__PURE__ */ p(g, {})
	]
}), v = (e) => {
	let { insertData: t, insertText: n, isInline: r } = e;
	return e.isInline = (e) => e.type && ["link"].includes(e.type) || r(e), e.insertText = (t) => {
		t && f(t) ? d.wrapLink(e, t, t) : n(t);
	}, e.insertData = (n) => {
		let r = n.getData("text/plain");
		r && f(r) ? d.wrapLink(e, r, r) : t(n);
	}, e;
}, y = (d) => {
	let { text: f, readonly: m, onChange: g, onComposition: _, afterInit: y } = d, x = s((e) => /* @__PURE__ */ p(S, { ...e }), []), C = [f], [w] = l(() => {
		let e = v(h(u(o(n()))));
		return y?.(e), e;
	});
	return c(() => {
		f !== w.children[0] && (w.children = [f], w.onChange());
	}, [f, w]), /* @__PURE__ */ p(a, {
		editor: w,
		initialValue: C,
		onChange: (e) => {
			g?.({
				newText: w.children[0],
				operations: w.operations
			});
		},
		children: /* @__PURE__ */ p(i, {
			className: "slate-editable-container plait-text-container",
			renderElement: (e) => /* @__PURE__ */ p(b, { ...e }),
			renderLeaf: x,
			readOnly: m === void 0 ? !0 : m,
			onCompositionStart: (e) => {
				_ && _(e);
			},
			onCompositionUpdate: (e) => {
				_ && _(e);
			},
			onCompositionEnd: (e) => {
				_ && _(e);
			},
			onKeyDown: (n) => {
				let { selection: i } = w;
				if (i && e.isCollapsed(i)) {
					let { nativeEvent: e } = n;
					if (r("left", e)) {
						n.preventDefault(), t.move(w, {
							unit: "offset",
							reverse: !0
						});
						return;
					}
					if (r("right", e)) {
						n.preventDefault(), t.move(w, { unit: "offset" });
						return;
					}
				}
			}
		})
	});
}, b = (e) => {
	let { element: t } = e;
	switch (t.type) {
		case "link": return /* @__PURE__ */ p(_, { ...e });
		default: return /* @__PURE__ */ p(x, { ...e });
	}
}, x = ({ attributes: e, children: t, element: n }) => /* @__PURE__ */ p("div", {
	style: { textAlign: n.align },
	...e,
	children: t
}), S = ({ children: e, leaf: t, attributes: n }) => {
	t.bold && (e = /* @__PURE__ */ p("strong", { children: e })), t.code && (e = /* @__PURE__ */ p("code", { children: e })), t.italic && (e = /* @__PURE__ */ p("em", { children: e })), t.underlined && (e = /* @__PURE__ */ p("u", { children: e }));
	let r = t["font-size"];
	return /* @__PURE__ */ p("span", {
		style: { color: t.color },
		...n,
		"plait-font-size": r,
		children: e
	});
};
//#endregion
export { y as Text };
