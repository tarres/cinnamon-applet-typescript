/// <reference path="typings/global.d.ts" />
/// <reference path="typings/imports.gettext.d.ts" />
/// <reference path="typings/imports.gi.clutter.d.ts" />
/// <reference path="typings/imports.gi.st.d.ts" />
/// <reference path="typings/imports.lang.d.ts" />
/// <reference path="typings/imports.misc.d.ts" />
/// <reference path="typings/imports.ui.d.ts" />
/// <reference path="typings/metadata.d.ts" />

const Gettext = imports.gettext.domain('cinnamon-applets');
const _: (s: string) => string = Gettext.gettext;

class MyApplet extends imports.ui.applet.IconApplet {

    menuManager: imports.ui.popupMenu.PopupMenuManager;
    menu: imports.ui.applet.AppletPopupMenu;

    constructor(metadata, orientation) {
        super(metadata, orientation);
    }


    _init(metadata, orientation) {
        try {
            this.set_applet_icon_path(metadata.path + '/icon.png');
            this.set_applet_tooltip(_("Information about typescript"));

            this.menuManager = new imports.ui.popupMenu.PopupMenuManager(this);
            this.menu = new imports.ui.applet.AppletPopupMenu(this, orientation);
            this.menuManager.addMenu(this.menu);

            let item = new imports.ui.popupMenu.PopupIconMenuItem(_("System Settings"), "preferences-system", 0); //St.IconType.SYMBOLIC
            item.connect('activate', imports.lang.bind(this, function() {
                imports.misc.util.spawnCommandLine("cinnamon-settings");
            }));
            this.menu.addMenuItem(item);
        }
        catch (e) {
            global.logError(e);
        }
    }

    public on_applet_clicked() {
        global.log('Before this.menu.toggle()');
        this.menu.toggle();
        global.log('TS applet clicked')
    }

}

function main(metadata: CinnamonXletMetadata, orientation): MyApplet {
    return new MyApplet(metadata, orientation);
}