const commands = `
/start - Перезапустити бот
`;

const status = false;

const textWelcome = `<b>Namaste!</b>
LiveLoveSpace бот вітає Вас!`;

const team = {
	Oleksii: {
		id: "558982454",
		link: "t.me/cubachatou",
		photo: "./images/cinema.jpg",
	},
	Amet: {
		id: "431001589",
		link: "t.me/original_amet",
		photo: "./images/Amet.jpg",
		text_info: "Амєт — адміністратор",
	},
	Anna: {
		id: "",
		link: "t.me/annaliveloveyoga",
		photo: "./images/Anna.jpg",
		text_info: "Анна — мама спейсу",
	},
	Maks: {
		id: "",
		link: "t.me/Chefuknow",
		photo: "./images/Maks.jpg",
		text_info: "Максим — відповідальний за практики",
	},
};

const events = [
	{
		name: "🧘  Йога",
		master: team.Anna.link,
		photo: team.Anna.photo,
		text: `Йога з Анною Паніною.

По вівторках на четвергах, на 18:30.
Вартість 200грн.`,
	},
	{
		name: "🍃 Чай та дзадзен",
		master: team.Amet.link,
		photo: team.Amet.photo,
		text: `Дзадзен та чай з Амєтом.

По середам, на 18:30.
Вартість 200грн.`,
	},
	{
		name: "☯️  Цігун",
		master: team.Maks.link,
		photo: team.Maks.photo,
		text: `Цігун із Максом.

По вівторках та четвергах, на 18:30.
Вартість 200грн.`,
	},
	{
		name: "📽️  Кіночай",
		master: team.Amet.link,
		photo: team.Oleksii.photo,
		text: `<b>Людина з планети Земля</b>
    
Сюжет фокусується на Джоні Олдмені, університетському професорові, який стверджує, що він насправді є кроманьйонцем (або мадленська печерна людина), хто загадково зумів прожити більше 14 000 років. Єдине місце дії — рідний будинок Олдмена, всередині і навколо нього під час його прощальної вечірки, сюжет просувається через інтелектуальні суперечки між Олдменом і його колегами-викладачами. Фільм майже повністю складається з діалогів.

`,
	},
	{
		name: "🍃  Чай",
		master: team.Amet.link,
		photo: team.Amet.photo,
		text: `Чаювання по домашньому.

Кожну неділю, з 12:00 по 14:00.
Вартість 250грн.`,
	},
	// 	{
	// 		name: "🍁  Теплий Indoor Live Love Festival",
	// 		master: team.Anna.link,
	// 		photo: "./images/fest.jpg",
	// 		text: `
	// Що значить indoor? Це значить, що цей осінній фестиваль буде проходити у нас в спейсі, в самому центрі Києва 🍂 Ті хто був у нас знають, що наш спейс особливий, бо має одразу декілька поверхів і секретних місцин, та ще й внутрішній дворик. Хто ще не знає – приходьте вже нарешті знайомитись та відчути атмосферу!

	// Вартість від 500грн`,
	// 	},
];

const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"];

const teaSend = {
	src: "./images/tea.jpg",
	text: `Привіт Друже! 

Я твій Чайний Майстер і я запрошую тебе в твою першу Чайну Мандрівку. Моя мета - показати тобі Світ Справжнього чаю. 

Пропоную почати нашу спільну подорож з Чайної Підписки. 

Чайна підписка - це можливість щотижня отримувати один із перевіренних чаїв з моєї колекції. 

4 різних чая, листівка з описом його властивостей і особливостей, мої рекомендації тобі щодо заварювання кожного з них. І так цілий місяць 🙌 

Я відкрию для тебе Світ справжнього крутого чаю. Зі мною ти зрозумієш - Чайна традиція - це просто, смачно і захоплююче! 

Для цього паралельно я запускаю чайний ютуб канал, де ти зможешь більше дізнатись про чай та про чайну культуру взагалом
і разом зі мною подолати шлях від чайного новачка, який заварює чай в пакетику в стакані, до майстра зі своїм супер чайним набором. 

По поредньому замовленню ти отримаєшь підписку на 20% дешевше. Так я зможу віддячити тобі за довіру! 🙌`,
};

const info = {
	info_main: {
		text: `🌌 <b>Адреса</b>:
    ➺ м.Київ, вул. Городецкього 11Б, 34-K

⏱ <b>Як ми працюємо?</b>
    ➺ Наші двері відчинені шодня з 10:00 до 20:00
    
<b>Контакти:</b>
    `,
	},
	info_delivery: {
		text: `
📦 <b>Варіанти доставки</b>:
    ➺ Нова пошта
    ➺ Самовивіз у Києві

💵 <b>Варіанти оплати</b>:
    ➺ Передоплата на карту
    ➺ Накладений платіж`,
	},
};

module.exports.commands = commands;
module.exports.status = status;
module.exports.textWelcome = textWelcome;
module.exports.team = team;
module.exports.events = events;
module.exports.days = days;
module.exports.teaSend = teaSend;
module.exports.info = info;
