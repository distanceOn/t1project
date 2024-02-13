# t1project

Это веб-приложение создано с использованием React, TypeScript и Create React App. В проекте реализован подход Atomic Design для организации компонентов, стилизация выполнена с использованием CSS Modules (SCSS). Компоненты функциональные с типизированными пропсами, реализовано переиспользование компонентов. Проект включает в себя анимации, семантическую верстку, оптимизацию загрузки изображений с помощью `react-lazy-load-image-component` и оптимизированную загрузку шрифтов. Для документации и демонстрации компонентов используется Storybook.

## Технологии

- **React** ^18.2.0
- **TypeScript** ^4.9.5
- **React Router Dom** ^6.22.0
- **Storybook** ^7.6.14 для документации компонентов
- **CSS Modules** с SCSS для стилизации
- **react-lazy-load-image-component** ^1.6.0 для оптимизации изображений

## Как запустить проект локально

Для запуска проекта на вашем локальном компьютере выполните следующие шаги:

### Клонирование репозитория

```bash
git clone https://github.com/distanceOn/t1project.git
```

### Переход в директорию проекта

```bash
cd t1project
```

### Установка зависимостей

```bash
npm install

# или
# pnpm i
# yarn
```

### Запуск проекта

```bash
npm start
# или
# pnpm start
# yarn start
```

После запуска проект будет доступен на localhost:3000.

## Запуск Storybook

### Для просмотра и тестирования компонентов в Storybook:

```bash
npm run storybook
# или
# pnpm storybook
# yarn storybook
```

Storybook будет доступен на localhost:6006.

## Деплой

Проект развернут и доступен по следующей ссылке: [t1project](https://main--t1project.netlify.app/)

## Авторы

- Роман Кондрашев - distanceOn@yandex.ru
