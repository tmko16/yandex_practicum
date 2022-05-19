export function sum(...args) {
    if (args.length === 0) {
        throw new Error('sum required an args')
    }
    return args.reduce((res, current) => res + current, 0);
}
