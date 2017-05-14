declare namespace imports.gi.Clutter {

    /*
     * https://people.gnome.org/~gcampagna/docs/Clutter-1.0/Clutter.EventType.html
     */
    enum EventType {
        NOTHING,
        KEY_PRESS,
        KEY_RELEASE,
        MOTION,
        ENTER,
        LEAVE,
        BUTTON_PRESS,
        BUTTON_RELEASE,
        SCROLL,
        STAGE_STATE,
        DESTROY_NOTIFY,
        CLIENT_MESSAGE,
        DELETE,
        TOUCH_BEGIN,
        TOUCH_UPDATE,
        TOUCH_END,
        TOUCH_CANCEL,
        EVENT_LAST
    }

    /*
     * https://people.gnome.org/~gcampagna/docs/Clutter-1.0/Clutter.Event.html
     */
    class Event {
        constructor(type: EventType)
    }


}