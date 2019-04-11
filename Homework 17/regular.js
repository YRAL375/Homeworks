/*Пишем регулярку для мобильного телефона. Под шаблон должны подходить строки:
+375-25-777-77-77
375339999999
8-044-666-66-66
8033-6666666

То есть:
+ перед 375 - опциональный
в начале либо 8-0 либо 375, далее код (29 или 25 или 44 или 33) и далее номер
и также номер может и не содержать каких-то тирешек
и надо учесть что перед 8 плюса быть не может
хорошенько потестируйте регулярку
лишнего тоже в регулярке быть не должно*/

/^(\+?375-?|8-?0)(29|25|44|33|17)-?\d{3}-?\d{2}-?\d{2}$/.test('8-025-666-77-66');

// Регулярка для e-mail
/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z]{1,6}\.com$/i.test('alesya_lobatch-9999@gmail.com');
