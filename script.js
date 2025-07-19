// 双语内容配置
const languageContent = {
    en: {
        "page-title": "🥨 Nanyan Amber Jiang 🥨",
        "name-title": "Nanyan Jiang",
        "job-title": "Software Developer & UX Designer",
        "about-title": "About Me",
        "about-content": "I'm a full-time designer and developer passionate about creating software. I focus on delivering simple, practical user experiences, and I also enjoy building mini-programs for fun. Love Cats.",
        "projects-title": "My Mini-Programs",
        "project1-title": "The Book of Answers",
        "project1-desc": "This is abook of Answers that can address any question on your mind.",
        "project2-title": "What's for lunch (SAP Shanghai Labs Version)",
        "project2-desc": "Pick a resturant for our hard-working SAPers.",
        "project3-title": "Progress Album",
        "project3-desc": "My first WeChat mini-program. It allows local photo uploads for progress tracking through images, enabling before-and-after photo comparisons.",
        "view-detail": "View Details",
        "contact-text": "Contact me:",
        "email":"nanyanjiang@qq.com",
        "copyright": "© 2025 Nanyan Jiang. All rights reserved."
    },
    zh: {
        "page-title": "🥨 Nanyan Amber Jiang 🥨",
        "name-title": "Nanyan Jiang",
        "job-title": "软件开发程序员 & UX设计师",
        "about-title": "关于我",
        "about-content": "我是一个热爱创造小程序的设计师/开发者。专注于简洁、实用的用户体验。喜欢猫。",
        "projects-title": "我的小程序",
        "project1-title": "答案之书",
        "project1-desc": "这是一本神奇的答案之书，能回答你心中任何疑问。",
        "project2-title": "今天吃什么",
        "project2-desc": "帮你解决今天吃什么的问题。SAP Shanghai Labs专属版。",
        "project3-title": "进度相册",
        "project3-desc": "我的第一个微信小程序。可以本地上传照片，做图片记录进度，查看照片前后对比。",
        "view-detail": "查看详情",
        "contact-text": "联系我:",
        "email":"nanyanjiang@qq.com",
        "copyright": "© 2025 Nanyan Jiang. 保留所有权利."
    }
};

// 切换语言函数
function switchLanguage(lang) {
    // 更新所有文本内容
    Object.keys(languageContent[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key === 'page-title') {
                document.title = languageContent[lang][key];
            } else {
                element.textContent = languageContent[lang][key];
            }
        }
    });
    
    // 更新按钮激活状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`${lang}-btn`).classList.add('active');
    
    // 保存语言偏好到本地存储
    localStorage.setItem('preferredLanguage', lang);
}

// 初始化语言
function initLanguage() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(preferredLanguage);
    
    // 添加按钮事件监听
    document.getElementById('en-btn').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('zh-btn').addEventListener('click', () => switchLanguage('zh'));
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initLanguage);