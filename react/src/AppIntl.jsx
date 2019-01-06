import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import en_US from 'i18n/en-US';
import zh_CN from 'i18n/zh-CN';
import { getCookie, getLanguage } from 'utils/browser';

// Configure multiple languages
addLocaleData([...en, ...zh]);
const i18n = {
	'en-US': { name: 'English', locale: 'en', messages: en_US },
	'zh-CN': { name: '简体中文', locale: 'zh', messages: zh_CN }
}

// Multi-language options
let languages = [];
for (var key in i18n) {
	languages.push({ value: key, label: i18n[key].name });
}

const language = getCookie('language') || getLanguage();
const intl = i18n[language];
const locale = intl.locale;
const messages = intl.messages;

export { locale, messages, languages };
