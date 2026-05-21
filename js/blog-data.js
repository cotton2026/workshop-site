// ブログ記事データ
// 新しい記事を追加する場合は、この配列に新しいオブジェクトを追加してください

const blogPosts = [
    {
        id: 1,
        title: "ワークショップを開催しました",
        date: "9/13",
        year: "2025",
        category: "活動報告",
        image: "images/September workshop.png",
        imageAlt: "9月のワークショップの様子",
        content: [
            "2か月ぶりのワークショップでした。2ヶ月あくと、久しぶり感があり少し緊張し変な汗をいっぱいかきながらの会となりました。",
            "ランチには栗ごはんが出て、秋を感じられました。少しずつですが、朝晩涼しくなってきましたのでどうか皆様ご自愛ください。",
            "ココロとカラダのビタミン♡コットンパールの会"
        ]
    },
    {
        id: 2,
        title: "ワークショップを開催しました",
        date: "7/5",
        year: "2025",
        category: "活動報告",
        image: "images/July workshop.png",
        imageAlt: "7月のワークショップの様子",
        content: [
            "夏らしくバレッタのデコレーションをしました。暑いので、作られた自分だけのオリジナルバレッタをたくさん使ってほしいです。",
            "ココロとカラダのビタミン♡コットンパールの会"
        ]
    },
        {
        id: 3,
        title: "アクセサリー教室再始動します！",
        date: "3/09",
        year: "2026",
        category: "活動報告",
        image: "images/Image_fx (1).png",
        imageAlt: "ワークショップイメージ",
        content: [
            "半年間のお休み期間を終え、4月から教室再始動いたします",
            "次回、4月4日(土)10：30～です",
            "ぜひご参加ください♪"
        ]
    },
        {
        id: 4,
        title: "半年ぶりのワークショップはスロースタート",
        date: "4/04",
        year: "2026",
        category: "活動報告",
        image: "images/April workshop.jpg",
        imageAlt: "ワークショップイメージ",
        content: [
            "半年ぶりのワークショップはどうなることか…ととても緊張しましたが",
            "ふたを開けてみると参加者4人と少なめで、逆にそれがよかったのかも(;^ω^)",
            "一人一人とちゃんとお話できて、準備もゆったりとできました",
            "これからまた定期的に開催していくので、まだご無沙汰の方はこれからお会いしましょう♪",
            "次回の開催は5/16(土)10：30～です"
        ]
    },
         {
        id: 4,
        title: "再開して2回目ですが、まだ頭がボケているようです。。。",
        date: "5/16",
        year: "2026",
        category: "活動報告",
        image: "images/May workshop.png",
        imageAlt: "ワークショップイメージ",
        content: [
            "ワークショップ再開して2回目の会",
            "今回も5人と余裕のある人数で余裕をもって準備できました",
            "・・・が！客注品を作るのをすっかり忘れていて、まだまだ頭はボケボケのようです((+_+)),
            "これからも一つ一つの会をしっかりと丁寧にやっていきたいです♪",
            "次回の開催は6/6(土)10：30～です。また次回もどうぞよろしくお願いします。"
        ]
    },
];  // ← ここで配列を閉じる！
    

// カテゴリーごとの記事数を取得する関数
function getPostCountByCategory(category) {
    if (category === 'all') {
        return blogPosts.length;
    }
    return blogPosts.filter(post => post.category === category).length;
}

// 日付でソート（新しい順）
blogPosts.sort((a, b) => {
    const dateA = new Date(`${a.year}/${a.date}`);
    const dateB = new Date(`${b.year}/${b.date}`);
    return dateB - dateA;
});
