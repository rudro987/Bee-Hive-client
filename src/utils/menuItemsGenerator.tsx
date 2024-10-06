import { TMenuItems, TPath } from "../types";

export const menuItemsGenerator = (items: TPath[]) => {
    const menuItems = items.reduce((acc: TMenuItems[], item) => {
        if (item.path && item.name && item.name!== 'Create Room' && item.name!== 'Create Slot' && item.name!== 'Login' && item.name!== 'Register') {
          acc.push({
            name: item.name,
            path: item.path,
          });
        }
        return acc;
      }, []);
      return menuItems;
}