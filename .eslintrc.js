module.exports = {
    "extends": "airbnb",
    "rules": {
      'jsx-a11y/anchor-has-content': 'off',
      'react/destructuring-assignment': 'off',
      'import/no-cycle': 'off',
      'react/no-typos': 'off',
      "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] } ],
      "react/jsx-tag-spacing": ["error", {"beforeClosing": "never"}],
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
    ],
    "env": {
       "browser": true,
       "jest": true,
    },
};
