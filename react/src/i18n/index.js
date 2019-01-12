import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import en_US from './en-US';
import zh_CN from './zh-CN';
import { getCookie } from '../utils/browser';

// Configure multiple languages
addLocaleData([...en, ...zh]);
const intl = {
	'en-US': { name: 'English', locale: 'en', messages: en_US },
	'zh-CN': { name: '简体中文', locale: 'zh', messages: zh_CN }
}

// Multi-language options
let languages = [];
for (let key in intl) {
	languages.push({ value: key, label: intl[key].name });
}

// Current language
let lang = getCookie('userLanguage');
if (!lang || !intl[lang]) {
	lang = navigator.language == 'zh-CN' ? 'zh-CN' : 'en-US';
}

export { intl, languages, lang };
