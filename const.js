const commands = `
/start - Перезапустити бот
`;

const textWelcome = `<b>Namaste!</b>
LiveLoveSpace бот вітає Вас!`;

const masters = {
	Anna: "t.me/annaliveloveyoga",
	Amet: "t.me/original_amet",
	Maks: "t.me/Chefuknow",
};

const events = [
	{
		name: "Йога",
		callbackId: "yoga",
		master: masters.Anna,
		text: `Йога з Анною Паніною.

По вівторках на четвергах, на 18:30.
Вартість 200грн.`,
	},
	{
		name: "Чай",
		callbackId: "tea",
		master: masters.Amet,
		text: `Дзадзен та чай з Амєтом.

По середам, на 18:30.
Вартість 200грн.`,
	},
	{
		name: "Цігун",
		callbackId: "qiqong",
		master: masters.Maks,
		text: `Цігун із Максом.

По вівторках та четвергах, на 18:30.
Вартість 200грн.`,
	},
	{
		name: "Медитація",
		callbackId: "meditation",
		master: masters.Amet,
		text: `Дзадзен та чай з Амєтом.

По середам, на 18:30.
Вартість 200грн.`,
	},
	{
		name: "Чаювання по домашньому",
		callbackId: "teaWeekend",
		master: masters.Amet,
		text: `Чаювання по домашньому.

Кожну неділю, з 12:00 по 14:00.
Вартість 250грн.`,
	},
	{
		name: "Теплий Indoor Live Love Festival",
		callbackId: "customEvent",
		master: masters.Anna,
		text: `
Що значить indoor? Це значить, що цей осінній фестиваль буде проходити у нас в спейсі, в самому центрі Києва 🍂 Ті хто був у нас знають, що наш спейс особливий, бо має одразу декілька поверхів і секретних місцин, та ще й внутрішній дворик. Хто ще не знає – приходьте вже нарешті знайомитись та відчути атмосферу!

Чому ми назвали фест теплим? Бо маємо на меті 🍁

1️⃣ показати вам різних майстрів основних напрямків роботи нашого спейсу: йога, чай, творчість та музика; зробити теплу і затишну атмосферу перезавантаження та натхнення для кожного учасника\ці 🙌

2️⃣ разом з цим ми хочемо зробити тепло і нашим воїнам 👉 25% з кожного проданного квиточку на фест ми збираємо на теплий шмот для військових і відправляємо в спеціалізовану банку перевіренним волонтерам зі Зграї 🇺🇦

🍁 30 вересня – 2 жовтня, вечір п'ятниці і всі вихідні ми запрошуємо вас в гості стати учасником фесту, зарядитись і змінити атмосферу, познайомитись з новими людьми, попрактикувати нове для себе та, авжеж, смачно поїсти 😇 Ми готуємо максимально цікаву і приємну программу, з якою ознайомимо вас вже дуже скоро 😍

А поки поспішайте зайняти місце – адже їх буде небагато, щоб зберегти душевність та тепло цього івенту 🙏

Вартість участі у всіх днях фесту разом зі смачною їжою і крутими практиками 2200 грн *при ранньому бронюванні. Вже чекаємо вас! 😇

Обійнялипоцілували 💛💙
    `,
	},
];

const days = [
	{
		day: "Tuesday",
	},
	{
		day: "Wednesday",
	},
	{
		day: "Thursday",
	},
	{
		day: "Saturday",
	},
	{
		day: "Sunday",
	},
];

module.exports.commands = commands;
module.exports.textWelcome = textWelcome;
module.exports.masters = masters;
module.exports.events = events;
module.exports.days = days;
