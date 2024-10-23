declare const _default: {
    isAlphabets: (value: any) => boolean;
    isAlphaNumeric: (value: any) => boolean;
    isDate: (value: any) => boolean;
    isTime: (value: any) => boolean;
    isDateTime: (value: any) => any;
    isValidDate: (first: any, op: any, second: any) => boolean | undefined;
    isUndefined: (value: any) => boolean;
    isNullOrEmpty: (value: any) => boolean;
    isNumber(value: any): boolean;
    isURL(string: string): boolean;
    isPhone: (value: string) => boolean;
    isEmail: (email: string) => boolean;
    isPassword(password: string): boolean;
    hasSpecialCharacters(value: string): boolean;
};
export default _default;
