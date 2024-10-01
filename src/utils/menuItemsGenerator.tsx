import { TMenuItems, TPath } from "../types";

export const menuItemsGenerator = (items: TPath[]) => {
    const menuItems = items.reduce((acc: TMenuItems[], item) => {
        if (item.path && item.name) {
          acc.push({
            name: item.name,
            path: item.path,
          });
        }

        if (item.children) {
          item.children.forEach((child) => {
            acc.push({
              name: child.name!,
              path: child.path!,
            });
          });
        } 
        return acc;
      }, []);
      return menuItems;
}