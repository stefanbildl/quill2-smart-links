const I = /https?:\/\/[^\s]+/;
class m {
  constructor(n, f) {
    n.on("text-change", function(d) {
      const i = n.getSelection(!1), t = i == null ? void 0 : i.index;
      if (t === null || typeof t > "u")
        return;
      const [r] = n.getLeaf(t);
      if (r == null)
        return;
      const [x] = d.ops.filter((s) => s.insert).map((s) => s.insert) ?? [null], o = r.value();
      if (!o || typeof o != "string" || r.parent.domNode.localName === "a")
        return;
      const u = [`
`, "	"].find((s) => s === x), g = f.linkRegex ?? I, [e] = o.match(g) ?? [null];
      if (e === null)
        return;
      const c = o.indexOf(e);
      if (c === null)
        return;
      const l = n.getIndex(r), a = l + c, p = a + e.length;
      !u && t <= p && t > a || (n.deleteText(l + c, e.length, "api"), n.insertText(l + c, e, "link", e));
    });
  }
}
export {
  m as SmartLinks
};
