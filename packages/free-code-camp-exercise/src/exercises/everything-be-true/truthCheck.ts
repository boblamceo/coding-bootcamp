export default (collection: Array<{ [key: string]: any }>, pre: string): boolean =>
    collection.every((current) => Boolean(current[pre]));
