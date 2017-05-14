declare namespace imports {

    namespace gi {

        namespace St {
            enum Side {
                TOP,
                RIGHT,
                BOTTOM,
                LEFT
            }

            /*
             typedef enum {
             ST_CORNER_TOPLEFT,
             ST_CORNER_TOPRIGHT,
             ST_CORNER_BOTTOMRIGHT,
             ST_CORNER_BOTTOMLEFT
             } StCorner;

             // These are the CSS values; that doesn't mean we have to implement blink...
             typedef enum {
             ST_TEXT_DECORATION_UNDERLINE    = 1 << 0,
             ST_TEXT_DECORATION_OVERLINE     = 1 << 1,
             ST_TEXT_DECORATION_LINE_THROUGH = 1 << 2,
             ST_TEXT_DECORATION_BLINK        = 1 << 3
             } StTextDecoration;

             typedef enum {
             ST_TEXT_ALIGN_LEFT = PANGO_ALIGN_LEFT,
             ST_TEXT_ALIGN_CENTER = PANGO_ALIGN_CENTER,
             ST_TEXT_ALIGN_RIGHT = PANGO_ALIGN_RIGHT,
             ST_TEXT_ALIGN_JUSTIFY
             } StTextAlign;

             typedef enum {
             ST_GRADIENT_NONE,
             ST_GRADIENT_VERTICAL,
             ST_GRADIENT_HORIZONTAL,
             ST_GRADIENT_RADIAL
             } StGradientType;
             */

            class BoxLayout {
                constructor()

            }
        }

        namespace Clutter {

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

    }

}