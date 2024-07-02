export declare function objectKeys<T extends object>(object: T): Array<keyof T>;
export declare function objectToArray<TObject extends object, TEach>(object: TObject, converter: (item: TObject[keyof TObject], key: keyof TObject) => TEach): Array<TEach>;
export declare function filterNulls<TItem>(array: Array<TItem | undefined>): Array<TItem>;
//# sourceMappingURL=objectHelper.d.ts.map