interface ISessionProps {
  key: string | undefined;
  value?: string;
}

/**
 *
 * Sets Item in local storage
 */
export const setItem = ({ key, value }: ISessionProps) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key!, value!);
  }
};

/**
 *
 * Retrieve Item from Local storage
 */
// eslint-disable-next-line consistent-return
export const getItem = ({ key }: ISessionProps) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key!);
  }
};

/**
 * Removes a particular key value from store
 */
export const removeItem = ({ key }: ISessionProps) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key!);
  }
};

/**
 * Clears all Local storage Keys and values
 */
const clearStore = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

const LocalStore = {
  setItem,
  getItem,
  removeItem,
  clearStore,
};

/**
 * Function that sets session token after Login in Local Storage
 */
export const setSessionToken = (value: string) => {
  const key = `${process.env.NEXT_PUBLIC_SESSION_TOKEN}`;
  return LocalStore.setItem({ key, value });
};

/**
 * Function that gets session token from local storage
 */
export const getSessionToken = () => {
  const key = `${process.env.NEXT_PUBLIC_SESSION_TOKEN}`;
  return LocalStore.getItem({ key });
};

export const logoutSession = () => {
  LocalStore.clearStore();
};

/**
 * Function that gets session token from local storage
 */
// export const getUserDetails = () => {
//   const key = `${process.env.NEXT_PUBLIC_USER_DETAILS}`;
//   return JSON.stringify(LocalStore.getItem({ key })) as IUserdetails;
// };

export default LocalStore;
