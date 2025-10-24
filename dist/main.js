const p = /https?:\/\/[^\s]+/;
class m {
  constructor(e, a) {
    e.on("text-change", function(f) {
      const t = e.getSelection(!1)?.index;
      if (t === null || typeof t > "u")
        return;
      const [o] = e.getLeaf(t);
      if (o == null)
        return;
      const [d] = f?.ops?.filter((s) => s.insert)?.map((s) => s.insert) ?? [null], r = o.value();
      if (!r || typeof r != "string" || o.parent.domNode.localName === "a")
        return;
      const x = [`
`, "	"].find((s) => s === d), u = a.linkRegex ?? p, [n] = r.match(u) ?? [null];
      if (n === null)
        return;
      const c = r.indexOf(n);
      if (c === null)
        return;
      const i = e.getIndex(o), l = i + c, g = l + n.length;
      !x && t <= g && t > l || (e.deleteText(i + c, n.length, "api"), e.insertText(i + c, n, "link", n));
    });
  }
}
export {
  m as SmartLinks
};
