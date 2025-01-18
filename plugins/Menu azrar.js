function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender];
    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })
  const zack = 'https://qu.ax/GHdQp.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
  const sn = '*جـاًر تـجـهيز الـقـائـمـه🛰️...*'; // replace with the actual serial number
    conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', 'ميتسوري فى خدمتك 🌸', 'status@broadcast');

conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `harley`}, body: { text: `*╮⊰ـ᯽⊱═══┤⊰🍁⊱├═══⊰᯽ـ⊱╭*
*˼⚡˹↜ مـࢪحـبـا بـڪ︱ـي↶*
*˼‏么˹ @${m.sender.split('@')[0]}*
*˼🪪˹ \`↜ مــعــلــومــاتــك ↶\`*
*╮─────────────⟢ـ*
*┆⚡↜ بـريـمـيـوم↞⌊ ${user.premiumTime > 0 ? 'مــمـ🔱ـيز' : (isPrems ? 'مــمـ🔱ـيز' : 'عــ🍁ــادي') || ''} ⌉*
*┆⚜️↜ مـــســـتواك↞⌊ ${level} ⌉*
*┆💫↜ رتـبـتـك↞⌊ ${role} ⌉*
*┆🧰↜ الـخـبـرة↞⌊  ${exp} ⌉*
*┆💎↜ الـمـاس↞⌊  ${limit} ⌉*
*╯─────────────⟢ـ*
*˼🤖˹ \`↜معلومات الــبــوت↶\`*
*╮─────────────⟢ـ*
*┆⚙️↜ اسـم البوت ↶*
*┆ \`﹝ميتسوري﹞\`🌸*
*┆🪄 ↜اسـم الـمـطـور ↶*
*┆ \`﹝تشون يوها﹞\`🎭*
*┆📌 ↜الـتـشـغـيـل ↶*
*┆﹝${uptime}﹞ـ*
*┆🔖 ↜الــمــســتـخـدمـيـن ↶*
*┆﹝${rtotalreg}﹞ـ*
*╯─────────────⟢ـ*
*\`ـCheon  么 Yoohaメ\`*
*╯⊰ـ᯽⊱═══┤⊰🍁⊱├═══⊰᯽ـ⊱╰*`,subtitle: "Araab Zack",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: zack } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: false,
                    },nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: '⌈📜╎قـائـمه الاوامـر╎📜⌋',
                        sections: [
                            {
                                title: 'مرحـبا بـك هـنا الاوامر خاص لى ميتسوري🌸',
                                highlight_label: 'ميتسوري🌸',
                                rows: [
                                    {
                                        header: 'يعطيك قسم اوامر الجروب🗣️',
                                        title: 'قـسـم الجـروبـات👥✬⃝',
                                        description: '',
                                        id: '.قسم-الجروبات'
                                    },
                                    {
                                        header: 'يعطيك قسم اوامر التنزيلات و البحث📤',
                                        title: 'قـسـم الـتنـزيلات📥✬⃝',
                                        description: '',
                                        id: '.قسم-التنزيلات'
                                    },
                                    {
                                        header: 'يعطيك قسم اوامر الترفيه🛸',
                                        title: 'قـسـم الـتـرفيـه🎮✬⃝',
                                        description: '',
                                        id: '.قسم-الترفيه'
                                    },
                                    {
                                        header: 'يعطيك قسم اوامر التحويل🃏',
                                        title: 'قـسـم الـتحـويل🪄✬⃝',
                                        description: '',
                                        id: '.قسم-التحويل'
                                    },
                                    {
                                        header: 'يعطيك قسم اوامر الفعاليات🧸',
                                        title: 'قـسـم الفـعالـيات🧩✬⃝',
                                        description: '',
                                        id: '.قسم-الفعاليات'
                                    },
                                    {
                                        header: 'يعطيك قسم اوامر الذكاء الاصطناعي 🌐',
                                        title: 'قـسـم الذكاء الاصطناعي🤖✬⃝',
                                        description: '',
                                        id: '.قسم-الذكاء'
                                    },
                                    {
                                        header: 'يعطيك قسم اوامر الدين والأسلام👳🏻‍♂️',
                                        title: 'قـسـم الـديـني✨✬⃝',
                                        description: '',
                                        id: '.قسم-ديني'
                                    },
                                    {
                                        header: 'يعطيك قسم اوامر المطور⚙️',
                                        title: ' قـسـم الـمـطور🙎🏻✬⃝',
                                        description: '',
                                        id: '.قسم-المطور'
                                    },
                                    {
                                        header: 'يعطيك قسم اوامر الألقاب🖊️',
                                        title: ' قـسـم الألقاب📕✬⃝',
                                        description: '',
                                        id: '.قسم-الألقاب'
                                    },
                                    {
                                        header: 'يعطيك قـسم الالعاب🕹️',
                                        title: ' قـسم الالعاب🧩✬⃝',
                                        description: '',
                                        id: '.قسم-الالعاب'
                                    }
                                ]
                            }
                        ]
                    }),
                    messageParamsJson: ''
                },
                {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "⌈⚜️╎قـناة الـبوت╎⚜️⌋",
                        url: "https://whatsapp.com/channel/0029VaaPtwOLikgHE4rA8b28",
                        merchant_url: "https://whatsapp.com/channel/0029VaaPtwOLikgHE4rA8b28"
                    })
                },
                {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "⌈🔗╎مـوقع الـبوت╎🔗⌋",
                        url: "https://675351499ecba.site123.me/",
                        merchant_url: "https://675351499ecba.site123.me/"
                    })
                },
                {
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: '⌈📥╎مـعـلومات الـبوت╎📥⌋',
                        sections: [
                            {
                                title: '📜معلومات عن البوت📜',
                                highlight_label: 'cheon',
                                rows: [
                                    {
                                        header: 'الـمطور الـبوت🎭',
                                        title: 'cheon yooha',
                                        description: '',
                                        id: '.المطور'
                                    },
                                    {
                                        header: 'خصوصيه استخدام البوت❔❕',
                                        title: 'الاسـتخدام📜',
                                        description: '',
                                        id: '.قوانين'
                                    },
                                    {
                                        header: 'ابلاغ او ارسال رساله للمطور💭',
                                        title: 'طـلـب ابـلاغ📨',
                                        description: '',
                                        id: '.بلاغ'
                                        },
                                       {
                                        header: 'روابط دعم البوت✔️',
                                        title: 'الـروابـط💥',
                                        description: '',
                                        id: '.قمرين'
                                    },
                                    {
                                        header: 'كيفيه ادخال البوت لجروبك🔮',
                                        title: 'عـروض البـوت❓',
                                        description: '',
                                        id: '.عروض'
                                    },
                                    {
                                        header: 'تقيم البوت⭐',
                                        title: 'طـلب تقـيم🌟',
                                        description: '',
                                        id: '.تقيم'
                                    }
                                ]
                            }
                        ]
                    }),
                    messageParamsJson: ''
                          }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['menu', 'مهام', 'اوامر','الاوامر','قائمة','القائمة']

export default handler;
        
