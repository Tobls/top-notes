import {createI18n} from "vue-i18n";
import {nextTick} from "vue";

export const SUPPORTED_LOCALES = ["de", "en"]

export function setupI18n(options = {locale: "en", legacy: false}) {
    const i18n = createI18n(options)
    setI18nLanguage(i18n, options.locale)

    return i18n
}

export function setI18nLanguage(i18n, locale) {
    if (i18n.mode === "legacy") {
        i18n.global.locale = locale
    } else {
        i18n.global.locale.value = locale
    }
    document.querySelector("html").setAttribute("lang", locale)
}

export async function loadLocaleMessages(i18n, locale) {
    const messages = await import(`./locales/${locale}.json`)
    i18n.global.setLocaleMessage(locale, messages.default)

    return nextTick()
}