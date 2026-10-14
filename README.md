# NoTab

Адаптивный лендинг платформы NoTab для баров и ночных клубов.

Макет: [Figma](https://www.figma.com/file/rRs4BZnofKg58kqoIXRMVL/Test-Landing?node-id=1%3A1094)

## Запуск

Откройте `index.html` в браузере. Сборка не нужна: страница подключает `landing/styles/css/style.css`.

Исходные стили лежат в `landing/styles/sass/style.scss`. После правок скомпилируйте их:

```bash
npx sass landing/styles/sass/style.scss landing/styles/css/style.css
```

## Стек

- Семантическая вёрстка, БЭМ
- SCSS
- Ванильный JS: баннер cookies и проверка формы

## Вёрстка

- Адаптив, актуальные Google Chrome и Firefox
- Валидная разметка: [validator.w3.org](https://validator.w3.org/)
- Все поля формы обязательны, у пустых полей есть состояние ошибки
- У кликабельных элементов есть hover
