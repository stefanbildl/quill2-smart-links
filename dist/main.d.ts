import Quill from "quill";
type SmartLinksOptions = {
    linkRegex?: RegExp;
};
export declare class SmartLinks {
    constructor(quill: Quill, options: SmartLinksOptions);
}
export {};
