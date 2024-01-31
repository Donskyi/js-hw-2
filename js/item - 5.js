// Користувач може оформити доставку товару до себе в країну, вказавши її при
// відвідуванні сторінки в prompt. Врахуй, користувач може ввести ім'я країни не
// тільки буквами нижнього реєстру, а й на приклад 'кИтАЙ'.

// Напишіть скрипт, який виводить повідомлення про вартість доставки у вказану
// країну. Формат повідомлення: 'Доставка в [країна] буде коштувати [ціна]
// кредитів.

// Якщо зазначеної країни немає в списку, то виводи в alert повідомлення 'В вашій
// країні доставка не доступна'.

// Нижче наведено список країн і вартість доставки.

const destinatinAndCosts = {кИтАЙ : 100,чилі: 250,австралія: 170,індія: 80,ямайка: 120,};

const destinationCountry = prompt("Введіть країну для доставки:");

if (destinationCountry === null) {
    console.log('Операцію скасовано!');
}
else {
const asignedCountry = destinationCountry.toLowerCase();
if(destinatinAndCosts.hasOwnProperty(asignedCountry))
    {
const deliveryCost = destinatinAndCosts[asignedCountry];
console.log(`Доставка в ${destinationCountry} буде коштувати ${deliveryCost} кредитів.`);
    }
else{
    alert("В вашій країні доставка не доступна.")
}
}

