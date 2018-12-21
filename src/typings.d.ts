declare module '*.png' {
    const value: string;
    export default value;
}

declare function require(path: string): any;