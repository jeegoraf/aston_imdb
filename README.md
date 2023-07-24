## Итак, моя обертка над Кинопоиском! 

### По функциональным требованиям: 

1. Только функциональные компоненты.
 
2. Есть разделение на [умные](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/components/Header.tsx) и [глупые](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/components/SignInAndRegister.tsx) компоненты.
3. Есть [рендеринг списков](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/components/FilmsList.tsx).
4. Реализована [форма](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/components/Form.tsx) регистрации и авторизации.
5. Есть применение Context API - инициализируется в [App](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/App.tsx), потребляется [Header'ом](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/components/Header.tsx).
6. Применяется [предохранитель](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/components/FilmsList.tsx).
7. Есть кастомный [хук](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/hooks/useAuth.ts).
8. Используются [Proptypes](https://github.com/jeegoraf/kinopoisk_wrapper/blob/bugfix/no-ref/final-cleanup/src/components/HistoryList.tsx).
9. debounce реализован внутри готовой компоненты [react-search-autocomplete](https://github.com/sickdyd/react-search-autocomplete). Чему мы научились? Научились больше ее не использовать.
10. Есть применение [lazy+Suspense](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/App.tsx).


### Что касается Redux:
1. Использовался [Redux-Toolkit](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/store/store.ts), напрямую к API Redux'a не обращался.
2. Использовались [слайсы](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/store/slices/userSlice.ts).
3. Используются [кастомные мидлвары](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/store/store.ts) для логирования изменений в Redux Store.
4. Зато использовал [RTK-Query и Transforming Responses](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/api.ts)
 
 <b>Из дополнительных требований</b> я решил использовать Typescript и Firebase ([регистрация](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/components/Register.tsx), [авторизация](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/components/SignIn.tsx), [избранное](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/components/buttons/AddToFavouritesButton.tsx),[история (например, добавление в базу данных по запросу по ключевому слову)](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/components/SearchPanel.tsx). И на всякий случай оставлю здесь [конфиг Firebase](https://github.com/jeegoraf/kinopoisk_wrapper/blob/master/src/firebase.ts). 
<br>

Деплоя не случилось, так что для запуска нужен будет .env-файл. Из соображений безопасности, cюда его выкладывать не буду.
### Чтобы запустить приложение: 
1. Склонируйте репозиторий.
2. Запустите из папки с репозиторием npm install для установки всех необходимых зависимостей.
3. Добавьте в корень проекта .env файл.
4. npm start - и можно наслаждаться!

 

