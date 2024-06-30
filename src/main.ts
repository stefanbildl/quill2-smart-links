import Quill from "quill";

const link_regex = /https?:\/\/[^\s]+/;

export class DetectLinks {
  constructor(quill: Quill) {
    quill.on("text-change", function (delta) {
      const selection = quill.getSelection(false);

      const myIndex = selection?.index;
      if (myIndex === null || typeof myIndex === "undefined") {
        return;
      }

      const [leaf] = quill.getLeaf(myIndex);
      if (leaf == null) {
        return;
      }

      const [insert] = delta.ops
        .filter((x) => x.insert)
        .map((x) => x.insert) ?? [null];

      const value = leaf.value();
      if (
        !value ||
        typeof value !== "string" ||
        leaf.parent.domNode.localName === "a"
      ) {
        return;
      }

      const specialkeyPressed = ["\n", "\t"].find((x) => x === insert);

      const [link] = value.match(link_regex) ?? [null];
      if (link === null) {
        return;
      }

      const subtringIndex = value.indexOf(link);
      if (subtringIndex === null) {
        return;
      }

      const leafIndex = quill.getIndex(leaf);
      const startIndex = leafIndex + subtringIndex;
      const endIndex = startIndex + link.length;

      if (!specialkeyPressed && myIndex <= endIndex && myIndex > startIndex) {
        return;
      }

      // remove the link text
      // add a link there
      quill.deleteText(leafIndex + subtringIndex, link.length, "api");
      quill.insertText(leafIndex + subtringIndex, link, "link", link);
    });
  }
}
