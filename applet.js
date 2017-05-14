/// <reference path="typings/global.d.ts" />
/// <reference path="typings/imports.gettext.d.ts" />
/// <reference path="typings/imports.gi.clutter.d.ts" />
/// <reference path="typings/imports.gi.st.d.ts" />
/// <reference path="typings/imports.lang.d.ts" />
/// <reference path="typings/imports.misc.d.ts" />
/// <reference path="typings/imports.ui.d.ts" />
/// <reference path="typings/metadata.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Gettext = imports.gettext.domain('cinnamon-applets');
var _ = Gettext.gettext;
var MyApplet = (function (_super) {
    __extends(MyApplet, _super);
    function MyApplet(metadata, orientation) {
        return _super.call(this, metadata, orientation) || this;
    }
    MyApplet.prototype._init = function (metadata, orientation) {
        try {
            this.set_applet_icon_path(metadata.path + '/icon.png');
            this.set_applet_tooltip(_("Information about typescript"));
            this.menuManager = new imports.ui.popupMenu.PopupMenuManager(this);
            this.menu = new imports.ui.applet.AppletPopupMenu(this, orientation);
            this.menuManager.addMenu(this.menu);
            var item = new imports.ui.popupMenu.PopupIconMenuItem(_("System Settings"), "preferences-system", 0); //St.IconType.SYMBOLIC
            item.connect('activate', imports.lang.bind(this, function () {
                imports.misc.util.spawnCommandLine("cinnamon-settings");
            }));
            this.menu.addMenuItem(item);
        }
        catch (e) {
            global.logError(e);
        }
    };
    MyApplet.prototype.on_applet_clicked = function () {
        global.log('Before this.menu.toggle()');
        this.menu.toggle();
        global.log('TS applet clicked');
    };
    return MyApplet;
}(imports.ui.applet.IconApplet));
function main(metadata, orientation) {
    return new MyApplet(metadata, orientation);
}
