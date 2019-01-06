import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import en_US from './i18n/en-US';
import zh_CN from './i18n/zh-CN';
import { getCookie } from './utils/browser';

// Configure multiple languages
addLocaleData([...en, ...zh]);
const i18n = {
	'en-US': { name: 'English', locale: 'en', messages: en_US },
	'zh-CN': { name: '简体中文', locale: 'zh', messages: zh_CN }
}

// Multi-language options
let languages = [];
for (let key in i18n) {
	languages.push({ value: key, label: i18n[key].name });
}

// Current language
let language = getCookie('language');
if (!language || !i18n[language]) {
	language = navigator.language == 'zh-CN' ? 'zh-CN' : 'en-US';
}

const intl = i18n[language];

export { intl, languages };
