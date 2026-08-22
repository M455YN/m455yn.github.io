(function () {
    const STORAGE_KEY = 'm455yn-lang'
    const DEFAULT_LANG = 'pl'

    const dict = {
        pl: {
            'nav.home': 'Dom',
            'nav.about': 'O mnie',
            'nav.work': 'Portfolio',
            'nav.career': 'Kariera',
            'home.cta': 'Zobacz projekty',
            'about.heading': 'O mnie',
            'about.headingAttr': '// 01 — about',
            'about.exp': 'Doświadczenie',
            'about.expVal': '4+ lata',
            'about.done': 'Ukończono',
            'about.doneVal': '10+ projektów',
            'about.cta': 'Kariera & stack',
            'work.heading': 'Projekty',
            'work.headingAttr': '// 02 — portfolio',
            'work.all': 'Wszystko',
            'work.games': 'Gry',
            'work.tools': 'Narzędzia',
            'work.web': 'WWW',
            'work.more': 'Więcej',
            'work.popupPrefix': 'Projekt —',
            'work.created': 'Utworzono —',
            'work.tech': 'Technologie —',
            'work.role': 'Role —',
            'work.www': 'WWW —',
            'proj.ninja.title': 'Dynamiczna gra platformowa.',
            'proj.ninja.desc': 'Twoim zadaniem jest zostać potężnym ninją i pokonać mistrza ninja Żeralta z Piwii!',
            'proj.castle.title': 'Eksploracja zamku opanowanego przez potwory.',
            'proj.castle.desc': 'Gra osadzona w roku 1999, w której musisz pokonać hordy wroga i odkryć tajemnice zamku.',
            'proj.entra.title': 'Aplikacja .NET do zarządzania Azure Blob Storage.',
            'proj.entra.desc': 'Program .NET do obsługi Microsoft Azure Blob Storage z autoryzacją OAuth 2.0.',
            'proj.swift.title': 'Szybkie, zunifikowane wyszukiwanie w VS Code.',
            'proj.swift.desc': 'Rozszerzenie inspirowane JetBrains — zakładki Files / Folders / Text / Symbols / Commands, filtry (regex, fuzzy, gitignore) i ripgrep pod spodem.',
            'proj.razor.title': 'IntelliSense dla custom Tag Helpers w Razor.',
            'proj.razor.desc': 'Rozszerzenie VS Code skanujące projekty C# — wykrywa Tag Helpery, podpowiada tagi i atrybuty w .cshtml/.razor oraz pokazuje dokumentację XML na hover.',
            'proj.sgs.title': 'Launcher do gier studia SzyrGameStudio.',
            'proj.sgs.desc': 'Aplikacja umożliwiająca zarządzanie i uruchamianie gier z jednego miejsca.',
            'proj.site.title': 'Personalna strona portfolio.',
            'proj.site.desc': 'Strona internetowa użytkownika M455YN, prezentująca projekty i portfolio.',
            'proj.sgswww.title': 'Oficjalna strona studia SzyrGameStudio.',
            'proj.sgswww.desc': 'Prezentacja gier i projektów realizowanych przez studio.',
            'footer.about': 'O mnie',
            'footer.work': 'Portfolio',
            'footer.career': 'Kariera',
            'career.pageTitle': 'Kariera — M455YN',
            'career.label': '// career · xp · stack',
            'career.title': 'Kariera',
            'career.lead': 'Ścieżka zawodowa, wykształcenie i stack — bez pasków procentowych, tylko to, czym faktycznie pracuję.',
            'career.path': 'Ścieżka',
            'career.pathAttr': '// 01 — path',
            'career.exp': 'Doświadczenie',
            'career.edu': 'Wykształcenie',
            'career.role.dev': 'Programista',
            'career.role.junior': 'Młodszy Programista',
            'career.role.intern': 'Praktyki',
            'career.now': '2024 — Obecnie',
            'career.internDate': 'Marzec 2020',
            'career.edu.ukw': 'Inżynierskie, Moduł: sieci i systemy rozproszone',
            'career.edu.tech': 'Technik informatyk',
            'career.skills': 'Kompetencje',
            'career.skillsAttr': '// 02 — stack',
            'career.backendMeta': '4+ lata · produkcja',
            'career.frontendMeta': 'HTML / CSHTML · CSS · TS & React (kilka mies.)',
            'career.tools': 'Narzędzia & inne',
            'career.toolsMeta': 'codzienny toolkit',
            'career.next': '// next',
            'career.ctaTitle': 'Zobacz projekty',
            'career.ctaBtn': 'Portfolio',
            'meta.indexDesc': 'Portfolio Mateusza Afelta (M455YN) — backend .NET, T-SQL, projekty i narzędzia.',
            'meta.careerDesc': 'Kariera i kompetencje Mateusza Afelta (M455YN) — backend .NET, T-SQL, doświadczenie i stack.'
        },
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.work': 'Portfolio',
            'nav.career': 'Career',
            'home.cta': 'View projects',
            'about.heading': 'About',
            'about.headingAttr': '// 01 — about',
            'about.exp': 'Experience',
            'about.expVal': '4+ years',
            'about.done': 'Completed',
            'about.doneVal': '10+ projects',
            'about.cta': 'Career & stack',
            'work.heading': 'Projects',
            'work.headingAttr': '// 02 — portfolio',
            'work.all': 'All',
            'work.games': 'Games',
            'work.tools': 'Tools',
            'work.web': 'Web',
            'work.more': 'More',
            'work.popupPrefix': 'Project —',
            'work.created': 'Created —',
            'work.tech': 'Technologies —',
            'work.role': 'Role —',
            'work.www': 'WWW —',
            'proj.ninja.title': 'A dynamic platformer.',
            'proj.ninja.desc': 'Become a powerful ninja and defeat the master ninja Żeralta of Piwa!',
            'proj.castle.title': 'Explore a castle overrun by monsters.',
            'proj.castle.desc': 'Set in 1999 — defeat enemy hordes and uncover the castle’s secrets.',
            'proj.entra.title': '.NET app for Azure Blob Storage.',
            'proj.entra.desc': '.NET tool for Microsoft Azure Blob Storage with OAuth 2.0 auth.',
            'proj.swift.title': 'Fast, unified search for VS Code.',
            'proj.swift.desc': 'JetBrains-inspired extension — Files / Folders / Text / Symbols / Commands tabs, filters (regex, fuzzy, gitignore) and ripgrep under the hood.',
            'proj.razor.title': 'IntelliSense for custom Razor Tag Helpers.',
            'proj.razor.desc': 'VS Code extension that scans C# projects — detects Tag Helpers, suggests tags and attributes in .cshtml/.razor, and shows XML docs on hover.',
            'proj.sgs.title': 'Game launcher for SzyrGameStudio.',
            'proj.sgs.desc': 'Manage and launch games from one place.',
            'proj.site.title': 'Personal portfolio site.',
            'proj.site.desc': 'M455YN’s website showcasing projects and portfolio.',
            'proj.sgswww.title': 'Official SzyrGameStudio website.',
            'proj.sgswww.desc': 'Presentation of the studio’s games and projects.',
            'footer.about': 'About',
            'footer.work': 'Portfolio',
            'footer.career': 'Career',
            'career.pageTitle': 'Career — M455YN',
            'career.label': '// career · xp · stack',
            'career.title': 'Career',
            'career.lead': 'Career path, education and stack — no percentage bars, just what I actually work with.',
            'career.path': 'Path',
            'career.pathAttr': '// 01 — path',
            'career.exp': 'Experience',
            'career.edu': 'Education',
            'career.role.dev': 'Developer',
            'career.role.junior': 'Junior Developer',
            'career.role.intern': 'Internship',
            'career.now': '2024 — Present',
            'career.internDate': 'March 2020',
            'career.edu.ukw': 'B.Eng., track: networks and distributed systems',
            'career.edu.tech': 'IT technician',
            'career.skills': 'Skills',
            'career.skillsAttr': '// 02 — stack',
            'career.backendMeta': '4+ years · production',
            'career.frontendMeta': 'HTML / CSHTML · CSS · TS & React (few months)',
            'career.tools': 'Tools & other',
            'career.toolsMeta': 'daily toolkit',
            'career.next': '// next',
            'career.ctaTitle': 'See projects',
            'career.ctaBtn': 'Portfolio',
            'meta.indexDesc': 'Portfolio of Mateusz Afelt (M455YN) — .NET backend, T-SQL, projects and tools.',
            'meta.careerDesc': 'Career and skills of Mateusz Afelt (M455YN) — .NET backend, T-SQL, experience and stack.'
        }
    }

    function getLang() {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved === 'en' || saved === 'pl' ? saved : DEFAULT_LANG
    }

    function t(key, lang) {
        const l = lang || getLang()
        return (dict[l] && dict[l][key]) || (dict.pl && dict.pl[key]) || key
    }

    function apply(lang) {
        document.documentElement.lang = lang
        localStorage.setItem(STORAGE_KEY, lang)

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            el.textContent = t(el.getAttribute('data-i18n'), lang)
        })

        document.querySelectorAll('[data-i18n-heading]').forEach((el) => {
            el.setAttribute('data-heading', t(el.getAttribute('data-i18n-heading'), lang))
        })

        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
            document.title = t(el.getAttribute('data-i18n-title'), lang)
        })

        document.querySelectorAll('[data-i18n-meta]').forEach((el) => {
            el.setAttribute('content', t(el.getAttribute('data-i18n-meta'), lang))
        })

        document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
            btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang)
        })

        window.dispatchEvent(new CustomEvent('m455yn:lang', { detail: { lang } }))
    }

    function init() {
        const lang = getLang()
        apply(lang)

        document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const next = btn.getAttribute('data-lang')
                if (next) apply(next)
            })
        })
    }

    window.M455YN_I18N = { t, getLang, apply, dict }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init)
    } else {
        init()
    }
})()
