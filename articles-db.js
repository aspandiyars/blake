const itemData = [
    {
      id: 1,
      data: "19 Сентябрь, 2023",
      datapublished: "2023-09-19",
      title: "BLAKE: Новый портал Моды, Развлечений и Стиля открывает двери",
      paragraphs: [
          "Мир в онлайне постоянно расширяется, и новые проекты, созданные для того, чтобы удовлетворить потребности и интересы пользователей, появляются каждый день. Сегодня мы хотим представить вам уникальный новостной веб-портал BLAKE, который охватывает моду, развлечения и стиль. Этот сайт обещает стать неотъемлемым источником информации и вдохновения для тех, кто интересуется модой и стилем, а также теми, кто желает быть в курсе актуальных политических событий.",
          "BLAKE — это место, где мода и стиль становятся не просто повседневными темами обсуждения, а настоящим искусством, которое формирует культуру и самовыражение. Мы не только расскажем вам о последних трендах и дизайнерских новинках, но и погрузимся в историю моды, а также обсудим важные вопросы связанные с устойчивостью и разнообразием в индустрии моды.",
          "BLAKE гордится своими экспертами и журналистами, которые не просто следят за событиями, но и анализируют их. Наши статьи охватывают все аспекты моды и стиля, от уличных трендов до глянцевых событий. Мы также обращаем внимание на важность внутреннего и внешнего самовыражения, предоставляя советы и рекомендации для каждого, кто ищет свой неповторимый стиль.",
          "Политика - это неотъемлемая часть нашей жизни, и мы убеждены, что разговор о ней должен быть доступным и информативным для всех. Сайт BLAKE с гордостью предоставляет своим читателям аналитические материалы и обзоры наиболее важных событий в мире политики.",
          "Мы стремимся предоставить беспристрастную и объективную информацию, которая поможет нашим читателям сформировать собственное мнение о текущих событиях. Вместе с этим, мы считаем, что разнообразие мнений и диалог с ключевыми участниками политической арены - это то, что делает нас особенными.",
      ],
      author: "Аспандияр Сапарбек",
      authorlink: "aspandiyar-saparbek",
      category: "Общество",
      image: "../article.photos/1.jpg",
      image0: "article.photos/1.jpg",
    },
];

function displayArticle(articleId) {
    const article = itemData.find((item) => item.id === articleId);

    if (!article) {
        console.log("Статья не найдена.");
        return;
    }

    document.title = article.title;

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = article.paragraphs.join(" "); 

    const head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(metaDescription);

    const metaDatePublished = document.createElement("meta");
    metaDatePublished.setAttribute("itemprop", "datePublished");
    metaDatePublished.content = article.datapublished;
    head.appendChild(metaDatePublished);

    const containerP = document.querySelector(".container-p");
    containerP.innerHTML = ""; 

    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    const categoryHeading = document.createElement("a");
    categoryHeading.classList.add("heading");
    categoryHeading.href = `./heading/${article.category}`;
    categoryHeading.textContent = article.category;

    const titleParagraph = document.createElement("p");
    titleParagraph.classList.add("title1");
    titleParagraph.textContent = article.title;

    const authorParagraph = document.createElement("p");
    authorParagraph.classList.add("author");
    authorParagraph.innerHTML = `Автор: <a href="../author/${article.authorlink}">${article.author}</a>`;

    const dataParagraph = document.createElement("p");
    dataParagraph.classList.add("data");
    dataParagraph.textContent = article.data;

    const imageElement = document.createElement("img");
    imageElement.classList.add("image1");
    imageElement.src = article.image;

    const shareContainer = document.createElement("div");
shareContainer.classList.add("share-container");

const shareButton = document.createElement("button");
shareButton.classList.add("shareButton");
shareButton.id = "shareButton";
shareButton.innerHTML = '<img class="shareImage" src="../img/sharebutton.png">Поделиться';
shareButton.setAttribute('data-action', 'share');

const copyButton = document.createElement("button");
copyButton.classList.add("shareButton");
copyButton.id = "copyButton";
copyButton.innerHTML = '<img class="shareImage1" src="../img/copybutton.png">';
copyButton.setAttribute('data-action', 'copy');

const mobileButton = document.createElement("button");
mobileButton.classList.add("shareButton");
mobileButton.id = "mobileButton";
mobileButton.innerHTML = '<img class="shareImage1" src="../img/smsbutton.jpg">';
mobileButton.addEventListener("click", prepareAndShare);

const emailButton = document.createElement("button");
emailButton.classList.add("shareButton");
emailButton.id = "emailButton";
emailButton.innerHTML = '<img class="shareImage1" src="../img/mailbutton.jpg">';
emailButton.addEventListener("click", prepareAndSendEmail);


function prepareAndShare() {
  var currentURL = window.location.href;
  var messageText = "Прочитайте: " + currentURL; 
  var shareLink = "sms:?body=" + encodeURIComponent(messageText);
  window.location.href = shareLink;
}

function prepareAndSendEmail() {
  var currentURL = window.location.href;
  var messageText = "Прочитайте: " + currentURL;
  var emailLink = "mailto:?body=" + encodeURIComponent(messageText);
  window.location.href = emailLink;
}


shareContainer.addEventListener('click', function(event) {
  var target = event.target;

  if (target.getAttribute('data-action') === 'share') {
    if (navigator.share) {
      var pageTitle = document.title;
      var pageDescription = document.querySelector('meta[name="description"]').getAttribute('content');
      var pageUrl = window.location.href;

      navigator.share({
        title: pageTitle,
        text: pageDescription,
        url: pageUrl
      })
      .then(function() {
        console.log('Успешно поделено');
      })
      .catch(function(error) {
        console.error('Ошибка шаринга:', error);
      });
    } else {
      alert('Web Share API не поддерживается в вашем браузере');
    }
  } else if (target.getAttribute('data-action') === 'copy') {
    var tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);

    tempInput.select();

    document.execCommand('copy');

    document.body.removeChild(tempInput);

    alert('Ссылка скопирована!');
  }
});

    shareContainer.appendChild(shareButton);
    shareContainer.appendChild(copyButton);
    shareContainer.appendChild(mobileButton);
    shareContainer.appendChild(emailButton);

    articleElement.appendChild(categoryHeading);
    articleElement.appendChild(titleParagraph);
    articleElement.appendChild(authorParagraph);
    articleElement.appendChild(dataParagraph);
    articleElement.appendChild(shareContainer);
    articleElement.appendChild(imageElement);

    const firstParagraphElement = document.createElement("p");
    firstParagraphElement.classList.add("text");
    firstParagraphElement.textContent = article.paragraphs[0];
    articleElement.appendChild(firstParagraphElement);

    const secondParagraphElement = document.createElement("p");
    secondParagraphElement.classList.add("text");
    secondParagraphElement.textContent = article.paragraphs[1];
    articleElement.appendChild(secondParagraphElement);

    const imageBetweenParagraphs = document.createElement("img");
    imageBetweenParagraphs.classList.add("image-between-paragraphs");
    imageBetweenParagraphs.src = "../img/blakead.jpg";
    const linkToImage = document.createElement("a");
    linkToImage.href = "https://www.instagram.com/blake.kz";
    linkToImage.appendChild(imageBetweenParagraphs);
    const randomValue = Math.random();
    if (randomValue <= 0.5) {
      articleElement.appendChild(linkToImage);
    }

    for (let i = 2; i < article.paragraphs.length; i++) {
        const paragraphElement = document.createElement("p");
        paragraphElement.classList.add("text");
        paragraphElement.textContent = article.paragraphs[i];
        articleElement.appendChild(paragraphElement);
    }

    containerP.appendChild(articleElement);
}

function createDynamicURL(id) {
  const url = new URL(window.location.href);
  url.searchParams.set('', id);
  const pathname = url.pathname.replace(/a.html/, '/');
  url.pathname = pathname;
  history.pushState({}, '', url.href);
  console.log('Updated URL:', url.href);
}


document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  let queryString = urlParams.toString(); 
  queryString = queryString.replace("=", "");

  const articleId = parseInt(queryString);
  displayArticle(articleId);

  createDynamicURL(articleId);
});




// next article // 

const articleContainer = document.querySelector(".article-container");

for (let i = 0; i < 5 && i < itemData.length; i++) {
    const article = itemData[i];
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    const articleLink = document.createElement("a");
    articleLink.setAttribute("href", `../article/a?${article.id}`);
    articleLink.classList.add("article-link");

    const imageElement = document.createElement("div");
    imageElement.classList.add("article-image");
    imageElement.style.backgroundImage = `url(${article.image}), url(${article.image0})`;


    const articleInfoElement = document.createElement("div");
    articleInfoElement.classList.add("article-info");

    const categoryElement = document.createElement("p");
    categoryElement.classList.add("category");
    categoryElement.innerHTML = `${article.category}`;
    articleInfoElement.appendChild(categoryElement);

    const titleElement = document.createElement("p");
    titleElement.classList.add("title");
    titleElement.textContent = article.title;
    articleInfoElement.appendChild(titleElement);

    const firstParagraph = article.paragraphs[0].substr(0, 110) + (article.paragraphs[0].length > 110 ? "..." : "");
    
    articleInfoElement.innerHTML += `
    <p class="nonmobile">${firstParagraph}</p>
        <p class="author2">Автор: ${article.author}</p>
    `;

    articleLink.appendChild(imageElement);
        articleLink.appendChild(articleInfoElement);
    
        articleElement.appendChild(articleLink);
    
        articleContainer.appendChild(articleElement);
}

// name //

