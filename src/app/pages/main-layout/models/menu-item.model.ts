export interface MenuItem {
  name: string;
  url: string;
  icon: string;
  isSelected: boolean;
  hasSubmenu: boolean;
  submenu?: MenuItem[];
}
