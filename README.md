# CREATOR

[![PIECIOSHKA]()](https://github.com/piecioshka/warsawjs-workshop-24-admin-panel)

# warsawjs-workshop-24-admin-panel

[![travis](https://img.shields.io/travis/piecioshka/warsawjs-workshop-24-admin-panel.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/warsawjs-workshop-24-admin-panel)
[![dependencies](https://david-dm.org/piecioshka/warsawjs-workshop-24-admin-panel.svg)](https://github.com/piecioshka/warsawjs-workshop-24-admin-panel)
[![Build Status](https://semaphoreci.com/api/v1/piecioshka/warsawjs-workshop-24-admin-panel/branches/master/badge.svg)](https://semaphoreci.com/piecioshka/warsawjs-workshop-24-admin-panel)

WarsawJS Workshop #24: Projekt panelu administracyjnego

## Wykorzystywane narzędzia

* <https://webpack.js.org/>
* <https://jestjs.io/>
* <https://babeljs.io>
* <https://eslint.org>
* <https://json-schema-faker.js.org/>
* <https://github.com/DavidAnson/markdownlint>
* <https://github.com/typicode/json-server>

## Krok po kroku

### Baza danych

1. Zainstalować `npm/json-server`
2. Wygenerować danych za pomocą schemy:
    + <https://gist.github.com/piecioshka/b071e2d53a1115527ab5a5b21765bed3>
3. Zbudować polecenia: `npm run start:back-end`,
4. Uruchomić serwer bazodanowy

### Continuous Integration

1. Zalogować sie do Semaphore CI za pomocą GitHuba
2. Skonfigurować projekt
3. Dodać badge do `README.md` projektu

### Napisać aplikację (zgodnie z metodologią "test first")

1. Wygenerowanie konfiguracji dla `Jest`-a

    ```bash
    npx jest --init
    ```

2. Integracja z `Babel.js`

    ```bash
    npm i -D babel-jest regenerator-runtime @babel/preset-env @babel/core babel-core@^7.0.0-bridge.0
    ```

3. Stworzyć plik `.babelrc` o zawartości:

    ```json
    {
        "presets": [
            "env"
        ]
    }
    ```

4. Napisać test, który będzie weryfikować serwis do pobierania danych z serwera
5. Napisać wcześniej wspomniany serwis
6. Napisać test, który będzie weryfikować komponent do prezentcji
    + Zamockować DOM za pomocą `npm/jsdom`
7. Napisać wcześniej wspomniany komponent
8. Napisać test, który będzie weryfikować model
9. Napisać wcześniej wspomniany model
10. Stworzyć stronę DEMO, gdzie osadzić uprzednio stworzony komponent
    + Stowrzyć plik `front-end/main.js`, który połączy wszystkie 3 moduły
    + Wykorzystać `Webpacka` do zbudowania pliku `dist/bundle.js`

## Problemy do rozwiązania

* Usunięcie parametryzacji funkcji utilsowych
* Agregacja funkcji utilsowych to jednego pliku
* Zabicie na sztywno
* Skopiowanie funkcji utilsowych kilka razy w jednym pliku + zmienić ich nazwę

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
