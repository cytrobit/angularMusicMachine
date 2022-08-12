# Angular + Typescript Project - AKAI Music Machine
## Collegium Da Vinci Poznań 2020/2021
### Z repozytorium https://github.com/cdv-poznan/angular-project-2021
## AKAI Music Machine - emulator kultowego sekwencera/samplera firmy AKAI
### Naciskamy pady i z przypisanych do nich ścieżek tworzymy własną melodię
LINKI:
* [AKAI MPC] (https://pl.wikipedia.org/wiki/Akai_MPC)
* [AKAI PRO] (https://www.akaipro.com/)
### Sterowanie z poziomu klawiatury:
klawisz Z | klawisz X | klawisz C | klawisz V | klawisz B | klawisz N | klawisz M | klawisz K | klawisz L
-------- | -------- | ---------- | -------- | ------ | -------- | -------- | -------- | --------
perkusja | gitara akustyczna | gitara basowa | keyboard | trąbka | śpiew kobiecy | Beatbox 1 | Beatbox 2 | chór
### Sterowanie myszką: play -> click; stop -> click
### Dotknięcie na ekranie dotykowym - przytrzymujemy dane przyciski i gramy melodię
### Ścieżki zrobione przez Piotr "Liroy" Marzec (gitara akustyczna, keyboard, trąbka) oraz Marcin "Cytrobit" Ciesielski (reszta ścieżek)

> Działająca w pełni wersja dostępna pod adresem: [`https://www.cytrobit.com/akai`](https://www.cytrobit.com/akai).

## Instalacja zależności

```shell
npm install
```

## Serwer deweloperski

```shell
npm start
```

lub z zainstalowanym globalnie Angular CLI (`@angular/cli`)

```shell
ng serve
```

> Po uruchomieniu serwera aplikacja jest dostępna pod adresem [`http://localhost:4200/`](http://localhost:4200/).

## Generowanie kodu

```shell
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Budowanie aplikacji

```shell
npm run build
```

lub z zainstalowanym globalnie Angular CLI (`@angular/cli`)

```shell
ng build --prod
```