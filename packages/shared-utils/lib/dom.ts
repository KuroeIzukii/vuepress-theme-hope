/**
 * 改变 DOM 的 class
 *
 * @param domClass DOM 节点的 class 列表
 * @param insert 新插入的 class
 * @param remove 待移除的 class
 */
export const changeClass = (
  domClass: DOMTokenList,
  insert: string[],
  remove: string[]
): void => {
  const oldClasses: string[] = [];

  domClass.remove(...remove);
  domClass.forEach((classname) => {
    oldClasses.push(classname);
  });
  domClass.value = "";
  domClass.add(...insert, ...oldClasses);
};

export const addMatchMediaListener = (
  mediaQueryString: string,
  handler: (event: MediaQueryListEvent) => void
): void => {
  const mediaQueryList = window.matchMedia(mediaQueryString);

  if (mediaQueryList.addEventListener)
    mediaQueryList.addEventListener("change", handler);
  else mediaQueryList.addListener(handler);
};

export default {
  addMatchMediaListener,
  changeClass,
};
