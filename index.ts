export default {
  isAlphabets: (value: any) => {
    let pattern = /^[a-zA-Z\s]+$/;
    return pattern.test(value);
  },
  isAlphaNumeric: (value: any) => {
    let pattern = /^[-_ a-zA-Z0-9]+$/;
    return pattern.test(value);
  },
  isDate: (value: any) => {
    let pattern = /^\d{4}-\d{2}-\d{2}$/;
    return pattern.test(value);
  },

  isTime: (value: any) => {
    let pattern = /^\d{2}:\d{2}:\d{2}$/;
    return pattern.test(value);
  },

  isDateTime: (value: any) => {
    let pattern = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/;
    return value.test(pattern);
  },

  isValidDate: (first: any, op: any, second: any) => {
    const date1st = new Date(first);
    let date2nd = new Date(second);
    if (op === "<") {
      return date1st.getTime() < date2nd.getTime();
    } else if (op === "<=") {
      return date1st.getTime() <= date2nd.getTime();
    } else if (op === ">") {
      return date1st.getTime() > date2nd.getTime();
    } else if (op === ">=") {
      return date1st.getTime() >= date2nd.getTime();
    }
  },
  isUndefined: (value: any) => {
    return value === undefined;
  },
  isNullOrEmpty: (value: any) => {
    if (Array.isArray(value)) {
      return value.length <= 0;
    } else if (typeof value === "object" && value !== null) {
      return Object.keys(value).length <= 0;
    } else {
      return value === null || value.trim() === "";
    }
  },
  isNumber(value: any) {
    return Number.isNaN(value);
  },
  isURL(string: string) {
    var regex =
      /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return regex.test(string) ? true : false;
  },
  isPhone: (value: string) => {
    //let pattern = /^[+]?\d+$/;
    let pattern = /^\d+$/;
    return pattern.test(value);
  },
  isEmail: (email: string) => {
    const regx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(String(email).toLowerCase());
  },
  isPassword(password: string) {
    let pattern = /^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{7,}$/;
    return pattern.test(password);
  },
  hasSpecialCharacters(value: string) {
    let pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return pattern.test(value);
  },
};
