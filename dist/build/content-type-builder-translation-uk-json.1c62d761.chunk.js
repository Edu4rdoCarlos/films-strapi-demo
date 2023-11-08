"use strict";
(self["webpackChunkfilms_demo"] = self["webpackChunkfilms_demo"] || []).push([[8573],{

/***/ 76316:
/***/ ((module) => {

module.exports = JSON.parse('{"attribute.boolean":"Boolean","attribute.boolean.description":"Так чи ні, 1 чи 0, правда чи брехня","attribute.component":"Компонент","attribute.component.description":"Група полей, які ви можете повторювати","attribute.date":"Date","attribute.date.description":"Елемент вибору дати та часу","attribute.datetime":"Дата та час","attribute.dynamiczone":"Динамічна зона","attribute.dynamiczone.description":"Динамічний вибір компонентів підчас редагування контенту","attribute.email":"Email","attribute.email.description":"Поле email з перевіркою формату","attribute.enumeration":"Enumeration","attribute.enumeration.description":"Перелік значень, вибирається одне","attribute.json":"JSON","attribute.json.description":"Інформація у форматі JSON","attribute.media":"Media","attribute.media.description":"Файли, як-то картнки, відео тощо","attribute.null":" ","attribute.number":"Number","attribute.number.description":"Числа (integer, float, decimal)","attribute.password":"Password","attribute.password.description":"Поле паролю з шифруванням","attribute.relation":"Relation","attribute.relation.description":"Зв\'язок з Collection Type","attribute.richtext":"Rich text","attribute.richtext.description":"Текст з можливістю форматування","attribute.text":"Text","attribute.text.description":"Короткий або довгий текст, як заголовок чи опис","attribute.time":"Time","attribute.timestamp":"Мітка часу","attribute.uid":"UID","attribute.uid.description":"Унікальний ідентифікатор","button.attributes.add.another":"Додате ще одне поле","button.component.add":"Додати компонент","button.component.create":"Створити новий компонент","button.model.create":"Створити Collection Type","button.single-types.create":"Створити Single Type","component.repeatable":"(повторюваний)","components.componentSelect.no-component-available":"Ви вже добавили всі компоненти","components.componentSelect.no-component-available.with-search":"Немає компонентів, які відповідають вашему запиту","components.componentSelect.value-component":"{number} вибраних компонентів (напишіть для пошуку)","components.componentSelect.value-components":"{number} вибраних компонентів","configurations":"налаштування","contentType.collectionName.description":"Корисно, коли назва вашего Content Type та вашої таблиці різні","contentType.collectionName.label":"Назва колекції","contentType.displayName.label":"Назва для відображення","contentType.kind.change.warning":"Ви тільки що змінили тип Content Type: API буде перезавантажене (маршрути, контролери та сервіси будуть переписані).","error.attributeName.reserved-name":"Ця назва не може буди використана для вашого Content Type, так як воно може зламати іншу функціональність","error.contentTypeName.reserved-name":"Ця назва не може буди використана у вашому проекті, так як воно може зламати іншу функціональність","error.validation.enum-duplicate":"Значення не можуть повторюватись","error.validation.minSupMax":"Не може бути більше","error.validation.regex":"Неправильний регулярний вираз","error.validation.relation.targetAttribute-taken":"Це ім\'я вже існує в цільовій моделі","form.attribute.component.option.add":"Додати компонент","form.attribute.component.option.create":"Додати новий компонент","form.attribute.component.option.create.description":"Компонент використовується в типах та інших компонентах, він буде доступний всюди.","form.attribute.component.option.repeatable":"Повторюваний компонент","form.attribute.component.option.repeatable.description":"Підходить для множинних об\'єктів (масиву), наприклад, інгридієнтів, метатегів тощо...","form.attribute.component.option.reuse-existing":"Використати існуючий компонент","form.attribute.component.option.reuse-existing.description":"Використовуйте створений вами компонент, щоб підтримувати узгодженність данних серед різних Content Types.","form.attribute.component.option.single":"Одиничний компонент","form.attribute.component.option.single.description":"Підходить для групування полей, наприклад, повна адреса, основна інформація тощо...","form.attribute.item.customColumnName":"Власні назви стовпців","form.attribute.item.customColumnName.description":"Корисно для перейменування назв стовпців у базі даних для підтримки більш зрозумілого формату відповідей API","form.attribute.item.defineRelation.fieldName":"Назва поля","form.attribute.item.enumeration.graphql":"Назва поля для GraphQL","form.attribute.item.enumeration.graphql.description":"Дозволяє перейменувати згенеровану для GraphQL назву поля","form.attribute.item.enumeration.placeholder":"Наприклад:\\nранок\\nдень\\nвечір","form.attribute.item.enumeration.rules":"Значення (одне на рядок)","form.attribute.item.maximum":"Максимальне значення","form.attribute.item.maximumLength":"Максимальна довжина","form.attribute.item.minimum":"Мінімальне значення","form.attribute.item.minimumLength":"Мінімальна довжина","form.attribute.item.number.type":"Формат числа","form.attribute.item.number.type.biginteger":"big integer (ex: 123456789)","form.attribute.item.number.type.decimal":"decimal (ex: 2.22)","form.attribute.item.number.type.float":"float (ex: 3.33333333)","form.attribute.item.number.type.integer":"integer (ex: 10)","form.attribute.item.privateField":"Приватне поле","form.attribute.item.privateField.description":"Це поле не буде відображатися у відповіді API","form.attribute.item.requiredField":"Обов\'язкове поле","form.attribute.item.requiredField.description":"Ви не зможете створити запис якщо не заповните це поле","form.attribute.item.text.regex":"Регулярний вираз (RegExp)","form.attribute.item.text.regex.description":"Шаблон регулярного виразу.","form.attribute.item.uniqueField":"Унікальне поле","form.attribute.item.uniqueField.description":"Ви не зможете створити запис, якщо вже існує запис із таким самим значенням поля","form.attribute.media.allowed-types":"Виберіть дозволені типи медіа","form.attribute.media.allowed-types.option-files":"Файли","form.attribute.media.allowed-types.option-images":"Картинки","form.attribute.media.allowed-types.option-videos":"Відео","form.attribute.media.option.multiple":"Множинні медіа","form.attribute.media.option.multiple.description":"Підходить для слайдерів, каруселей або завантаження кількох файлів","form.attribute.media.option.single":"Одиничне медіа","form.attribute.media.option.single.description":"Підходить для аватарок, картинок профіля або обкладинок","form.attribute.settings.default":"Значення за замовчуванням","form.attribute.text.option.long-text":"Довгий текст","form.attribute.text.option.long-text.description":"Підходить для описів, тексту про себе. Точний пошук вимкнено.","form.attribute.text.option.short-text":"Короткий текст","form.attribute.text.option.short-text.description":"Підходить для назв, імен, посиалань (URL). Дозволяє точний пошук по цьому полю.","form.button.add-components-to-dynamiczone":"Додати компоненти у зону.","form.button.add-field":"Додати ще одне поле","form.button.add-first-field-to-created-component":"Додати перше поле компоненту","form.button.add.field.to.collectionType":"Додати ще одне поле до цього Collection Type","form.button.add.field.to.component":"Додати ще одне поле до цього компоненту","form.button.add.field.to.contentType":"Додати ще одне поле до цього Content Type","form.button.add.field.to.singleType":"Додати ще одне поле до цього Single Type","form.button.cancel":"Скасувати","form.button.collection-type.description":"Підходить для множинних об\'єктів, як-то дописи, товари, коментарі тощо.","form.button.configure-component":"Налаштувати компонент","form.button.configure-view":"Налаштувати вигляд","form.button.select-component":"Вибрати компонент","form.button.single-type.description":"Підходить для поодиноких об\'єктів, як-то домашня сторінка, про нас тощо","from":"з","modalForm.attribute.form.base.name.description":"Для назви атрибута не допускається пробілів","modalForm.attribute.form.base.name.placeholder":"наприклад, slug, seoUrl, canonicalUrl","modalForm.attribute.target-field":"Пов\'язане поле","modalForm.attributes.select-component":"Виберіть компонент","modalForm.attributes.select-components":"Виберіть компоненти","modalForm.component.header-create":"Створити компонент","modalForm.components.create-component.category.label":"Виберіть категорію або введіть назву для створення нової","modalForm.components.icon.label":"Іконка","modalForm.editCategory.base.name.description":"Для назви категорії не допускається пробілів","modalForm.header-edit":"Редагувати {name}","modalForm.header.categories":"Категорії","modalForm.header.back":"Назад","modalForm.singleType.header-create":"Створити Single Type","modalForm.sub-header.addComponentToDynamicZone":"Додати новий компонент до динамічної зони","modalForm.sub-header.attribute.create":"Додати нове поле {type}","modalForm.sub-header.attribute.create.step":"Додати новий компонент ({step}/2)","modalForm.sub-header.attribute.edit":"Редагувати {name}","modalForm.sub-header.chooseAttribute.collectionType":"Виберіть поле для вашего Collection Type","modalForm.sub-header.chooseAttribute.component":"Виберіть поле для вашого компоненту","modalForm.sub-header.chooseAttribute.singleType":"Виберіть поле для вашего Single Type","modelPage.attribute.relation-polymorphic":"Зв\'язок (поліморфний)","modelPage.attribute.relationWith":"Зв\'язок з","notification.info.autoreaload-disable":"Функція autoReload має буте включена. Будь ласка, запустіть свій додаток вікористовуючи `strapi develop`.","notification.info.creating.notSaved":"Будь ласка, збережіть ваші зміни перед тим як створювати новий компонент або Collection Type","plugin.description.long":"Моделюйте структуру данних для вашого API. Створюйте нові поля та зв\'язки за хвилину. Файли будуть автоматично створені та оновлені в вашему проекту.","plugin.description.short":"Моделюйте структуру данних для вашого API.","popUpForm.navContainer.advanced":"Розширені налаштування","popUpForm.navContainer.base":"Основне","popUpWarning.bodyMessage.cancel-modifications":"Ви впевнені, що хочете скасувати свої зміни?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Ви впевнені, що хочете скасувати свої зміни? Деякі компоненти були змінені, або створені нові...","popUpWarning.bodyMessage.category.delete":"Ви впевнені, що хочете видалити цю категорію? Всі компоненти також будуть видалені.","popUpWarning.bodyMessage.component.delete":"Ви впевнені, що хочете видалити цей компонент?","popUpWarning.bodyMessage.contentType.delete":"Ви впевнені, що хочете видалити цей Collection Type?","prompt.unsaved":"Ви впевнені що хочете залишити сторінку? Всі виші зміни будуть втарчені.","relation.attributeName.placeholder":"Ex: author, category, tag","relation.manyToMany":"містить і належить багатьом","relation.manyToOne":"містить багато","relation.manyWay":"містить багато","relation.oneToMany":"належить до багатьох","relation.oneToOne":"містить і належить до однієї","relation.oneWay":"містить одне"}');

/***/ })

}]);