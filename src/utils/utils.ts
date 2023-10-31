export const getObjData = (ar: { id: number; name: string }[]) => {
  return ar.map((item) => item.name);
};

export const parseObjToStringForUrl = (key: string, obj: string[]) => {
  return obj.map((item) => `${key}=${encodeURIComponent(item)}`).join('&');
};
