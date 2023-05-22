const scanner = require('i18next-scanner')
const path = require('path')

module.exports = {
  input: [
    './src/**/*.{js,jsx,ts,tsx}',
    // Ignore things in node_modules
    '!./**/node_modules/**',
  ],
  output: './',
  options: {
    debug: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    trans: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallbackKey: (ns, value) => value,
    },
    lngs: ['en', 'de'],
    ns: ['translations'],
    defaultLng: 'en',
    defaultNs: 'translations',
    defaultValue: (lng, ns, key) => key,
    resource: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      savePath: 'src/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false, // not allowed if using flatten
    keySeparator: false, // not allowed if using flatten
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
}
