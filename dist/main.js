const m = /https?:\/\/[^\s]+/;
class y {
  constructor(n, d) {
    n.on("text-change", function(i) {
      var x, u;
      const f = n.getSelection(!1), t = f == null ? void 0 : f.index;
      if (t === null || typeof t > "u")
        return;
      const [r] = n.getLeaf(t);
      if (r == null)
        return;
      const [g] = ((u = (x = i == null ? void 0 : i.ops) == null ? void 0 : x.filter((s) => s.insert)) == null ? void 0 : u.map((s) => s.insert)) ?? [null], o = r.value();
      if (!o || typeof o != "string" || r.parent.domNode.localName === "a")
        return;
      const p = [`
`, "	"].find((s) => s === g), I = d.linkRegex ?? m, [e] = o.match(I) ?? [null];
      if (e === null)
        return;
      const c = o.indexOf(e);
      if (c === null)
        return;
      const l = n.getIndex(r), a = l + c, k = a + e.length;
      !p && t <= k && t > a || (n.deleteText(l + c, e.length, "api"), n.insertText(l + c, e, "link", e));
    });
  }
}
export {
  y as SmartLinks
};
