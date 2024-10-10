const question = 'ゲーム市場、もっとも売れたゲームきたどれ？';

const answers = ['スーパファミコン',
'プレイステーション２',
'ニンテンドウースイッチ',
'ニンテンドウーDS'
];
const ccorrect = 'ニンテンドーDS';

document.getElementById('js-question').textContent = question;

document.getElementsByTagName('button')[0].textContent = answers[0];
