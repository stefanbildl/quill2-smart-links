const g = /https?:\/\/[^\s]+/;
class I {
  constructor(n) {
    n.on("text-change", function(f) {
      const i = n.getSelection(!1), t = i == null ? void 0 : i.index;
      if (t === null || typeof t > "u")
        return;
      const [r] = n.getLeaf(t);
      if (r == null)
        return;
      const [d] = f.ops.filter((s) => s.insert).map((s) => s.insert) ?? [null], o = r.value();
      if (!o || typeof o != "string" || r.parent.domNode.localName === "a")
        return;
      const u = [`
`, "	"].find((s) => s === d), [e] = o.match(g) ?? [null];
      if (e === null)
        return;
      const c = o.indexOf(e);
      if (c === null)
        return;
      const l = n.getIndex(r), a = l + c, x = a + e.length;
      !u && t <= x && t > a || (n.deleteText(l + c, e.length, "api"), n.insertText(l + c, e, "link", e));
    });
  }
}
export {
  I as DetectLinks
};
