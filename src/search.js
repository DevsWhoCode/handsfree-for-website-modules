import openUrl from './helpers/open-url';

export function searchSomething({ commandName }) {
  openUrl(`https://www.google.com/search?q=${commandName}`);
  return {
    commandWasExecuted: true,
  };
}

export default {
  name: 'i18n-name',
  description: 'i18n-description',
  icon: 'fa fa-search',
  contexts: [{
    context: 'root',
    commands: [{
      name: 'i18n-command.search',
      help: 'i18n-help.search',
      action: () => {},
      switchToContext: 'search',
      group: 'i18n-group.search',
    }],
    i18n: {
      en: {
        'command.search': 'search',
        'help.search': 'Search something in Google',
        'group.search': 'Search',
      },
      es: {
        'command.search': 'buscar',
        'help.search': 'Busca algo en Google',
        'group.search': 'Buscar',
      },
      pt: {
        'command.search': 'pesquisar',
        'help.search': 'Pesquisa algo no Google',
        'group.search': 'Pesquisar',
      },
      yue: {
        'command.search': '搜尋',
        'help.search': '在Google內搜尋資料',
        'group.search': '搜尋',
      },
    },
  }, {
    context: 'search',
    name: 'i18n-name',
    commands: [{
      name: '*',
      help: 'i18n-help.*',
      group: 'i18n-group',
      action: searchSomething,
      switchToContext: 'root',
    }],
    i18n: {
      en: {
        name: 'Search',
        'help.*': 'Say the name of what you want to search',
        group: 'Search',
        'search-params': 'Say the name of what you want to search',
        exit: 'Exit',
      },
      es: {
        name: 'Buscar',
        'help.*': 'Indica el nombre de lo que desees buscar',
        group: 'Buscar',
        'search-params': 'Indica el nombre de lo que desees buscar',
        exit: 'Salir',
      },
      pt: {
        name: 'Pesquisar',
        'help.*': 'Diga o nome do que você deseja pesquisar',
        group: 'Pesquisar',
        'search-params': 'Diga o nome do que você deseja pesquisar',
        exit: 'Sair',
      },
      yue: {
        name: '搜尋',
        'help.*': '讀出你想搜尋的事物',
        group: '搜尋',
        'search-params': '讀出你想搜尋的事物',
        exit: '離開',
      },
    },
  }],
  i18n: {
    en: {
      name: 'Search',
      description: 'This module allows you to easily search for something.',
    },
    es: {
      name: 'Buscar',
      description: 'Este módulo permite buscar algo fácilmente.',
    },
    pt: {
      name: 'Pesquisar',
      description: 'Este módulo permite que pesquise facilmente algo.',
    },
    yue: {
      name: '搜尋',
      description: '你可以用這個模組輕易搜尋',
    },
  },
};
