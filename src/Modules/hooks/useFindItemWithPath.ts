import { MenuItem } from "../../Constants/MenuItem";

export const useFindItemWithPath = (route: any) => {
  const breadsrcumb = MenuItem.map((item) => {
    if (item.childrens) {
      const chilIndex = item.childrens.findIndex(
        (child) => child.path === route.pathname
      );
      if (chilIndex !== -1) {
        return {
          name: item.name,
          path: item.path,
          child: item.childrens[chilIndex],
        };
      }
    }
  }).filter(Boolean)[0];

  const childrens = MenuItem.find(
    (item) =>
      item.childrens &&
      item.childrens.some((child) => child.path === route.pathname)
  )?.childrens;

  return { breadsrcumb, childrens };
};
