/// <reference path="imports.misc.d.ts" />

declare namespace imports {

    namespace ui {
        namespace applet {

            const enum PopupMenuItemIconType{
                STANDARD = 0 // TODO Add more
            }

            class Applet {
                _init(orientation: gi.St.Side, panelHeight?: number, instance_id?: number)

                set_applet_tooltip(path: string);

                set_applet_enabled(enabled: boolean)

                on_applet_clicked(event:gi.Clutter.Event)

                on_applet_instances_changed()

                on_applet_added_to_panel()

                on_applet_removed_from_panel()

                setOrientation(orientation: gi.St.Side)

                on_orientation_changed(orientation: gi.St.Side)

                setPanelHeight(panelHeight: number)

                on_panel_height_changed()

                actor: gi.St.BoxLayout;
                instance_id:number;
                _uuid: string;
                _panelLocation: gi.St.BoxLayout;
                panel:any; //Panel.Panel
                _meta:string; //JSON
                _order:number;
                _draggable:number; //Dnd._draggable
                _scaleMode:boolean;
                _applet_tooltip:any; // tooltips.PanelItemTooltip;
                _menuManager: popupMenu.PopupMenuManager;
                _applet_context_menu: AppletContextMenu;
                _applet_tooltip_text: string;
            }

            class AppletContextMenu {

            }

            /**
             *
             */
            class IconApplet extends Applet {
                constructor(metadata, orientation);

                set_applet_icon_path(path: string);
            }

            class AppletPopupMenu {
                constructor(launcher: Applet, orientation)

                addMenuItem(menuitem: imports.ui.popupMenu.PopupIconMenuItem)

                toggle()
            }

        }

        namespace popupMenu {

            import PopupMenuItemIconType = imports.ui.applet.PopupMenuItemIconType;

            class PopupMenuManager {
                constructor(parent:any)

                addMenu(menu: imports.ui.applet.AppletPopupMenu)
            }

            class PopupIconMenuItem {
                constructor(title: string, something: string, icontype: PopupMenuItemIconType)
                connect(eventName: MenuItemEvent, callback:()=>void)
            }

            class PopupMenuSection {

            }

            type MenuItemEvent = 'activate'; // TODO Add more events here
        }
    }

}