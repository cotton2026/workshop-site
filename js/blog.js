// ブログ機能のメインスクリプト

// ページ読み込み時に全記事を表示
document.addEventListener('DOMContentLoaded', function() {
    displayPosts('all');
    updateArticleCount('all');
});

// 記事を表示する関数
function displayPosts(category) {
    const container = document.getElementById('articlesContainer');
    container.innerHTML = ''; // コンテナをクリア
    
    // カテゴリーでフィルタリング
    let filteredPosts = blogPosts;
    if (category !== 'all') {
        filteredPosts = blogPosts.filter(post => post.category === category);
    }
    
    // 記事が0件の場合
    if (filteredPosts.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">該当する記事がありません。</p>';
        return;
    }
    
    // 各記事を生成
    filteredPosts.forEach(post => {
        const article = createArticleElement(post);
        container.appendChild(article);
    });
}

// 記事要素を生成する関数
function createArticleElement(post) {
    const article = document.createElement('article');
    
    // 記事ヘッダー
    const header = document.createElement('header');
    header.className = 'post-info';
    
    const title = document.createElement('h2');
    title.className = 'post-title';
    title.textContent = post.title;
    
    const date = document.createElement('p');
    date.className = 'post-date';
    date.innerHTML = `${post.date} <span>${post.year}</span>`;
    
    const category = document.createElement('p');
    category.className = 'post-cat';
    category.textContent = `カテゴリー: ${post.category}`;
    
    header.appendChild(title);
    header.appendChild(date);
    header.appendChild(category);
    
    // 画像
    const img = document.createElement('img');
    img.src = post.image;
    img.alt = post.imageAlt;
    img.onerror = function() {
        this.style.display = 'none'; // 画像が見つからない場合は非表示
    };
    
    // 本文
    const contentDiv = document.createElement('div');
    post.content.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        contentDiv.appendChild(p);
    });
    
    // 要素を組み立て
    article.appendChild(header);
    article.appendChild(img);
    article.appendChild(contentDiv);
    
    return article;
}

// 記事数を更新する関数
function updateArticleCount(category) {
    const countElement = document.getElementById('articleCount');
    const count = getPostCountByCategory(category);
    const categoryName = category === 'all' ? 'すべて' : category;
    countElement.textContent = `${categoryName}の記事: ${count}件`;
}

// フィルターボタンのイベントリスナー
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // アクティブクラスを切り替え
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // 記事を表示
        displayPosts(category);
        updateArticleCount(category);
        
        // ページトップにスムーススクロール
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// サイドバーのカテゴリーリンクのイベントリスナー
const categoryLinks = document.querySelectorAll('.category-link');
categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.getAttribute('data-category');
        
        // 対応するフィルターボタンをアクティブに
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-category') === category) {
                btn.click();
            }
        });
    });
});
