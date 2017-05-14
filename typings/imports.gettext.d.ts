declare namespace imports {

    namespace gettext {

        class __gettextDomain {

            gettext(s: string): string;

            ngettext(s: string): string;

            pgettext(s: string): string;

        }

        function domain(domain: string): __gettextDomain;

    }

}
