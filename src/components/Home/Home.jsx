import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: '"The Shining" filminin posterinin yaranması - Saul Bass kimdir?',
    thumbnail: 'shining1.jpg',
    category: 'Filmlər',
    excerpt: 'Filmi izlədin... Bəyəndin, ya da bəyənmədin, fərqi yoxdur. O filmin adını eşidəndə yenə də gözünün önünə onun posteri gələcək. Saul Bass-ın "The Shining" filmi üçün hazırladığı posterlərə nəzər salaq.',
  },
  
  {
    id: 2,
    title: 'Aphex Twin və onun ikonik gülüşü',
    thumbnail: 'aphex5.webp',
    category: 'Musiqi',
    excerpt: 'Aphex Twin-i maraqlı edən isə təkcə onun musiqisi yox, həm də albomlarının qeyri-adi üz qabıqlarıdır. Gəlin olun ikonik albom qabıqlarına nəzər salaq.',
  },

  {
    id: 3,
    title: 'Onuncu və sonuncu film?! Quentin Tarantino-nun kinematik dünyası',
    thumbnail: 'qt.jpeg',
    category: 'Filmlər',
    excerpt: 'Quentin Tarantino unikal hekayə anlatımı və özünə məxsus şiddət səhnələri ilə tanınır. Gəlin onun son filmi olacaq "The Movie Critic"-ə nəzər salaq.',
  },

  {
    id: 4,
    title: 'Teyana Taylor Jordan brend kolleksiyasına ilk rəssamlığını gətirir',
    thumbnail: '5.jpg',
    category: 'Filmlər',
    excerpt: 'Yeni nəsil üçün basketbol mədəniyyətini genişləndirən müğənni, aktrisa və rəssam Teyana Taylor Air Jordan 1 Zoom CMFT 2 başlıqlı Jordan Brand ilə ilk kapsul kolleksiyasını buraxır. Gəlin bu kollaborasiyaya nəzər salaq.',
  },

  {
    id: 5,
    title: 'Kanye West: musiqi dahisi',
    thumbnail: 'kw1.jpg',
    category: 'Musiqi',
    excerpt: 'Kanye West hip-hopun sərhədlərini yenidən müəyyənləşdirdi və musiqi sənayesinə təsir etdi. Kanye-nin musiqiyə olan təsirini və səyahətini kəşf edək.',
  },

  {
    id: 6,
    title: 'Jean-Michel Basquiat: inqilabçı rəssamın dəbdə rolu',
    thumbnail: 'jmb2.webp',
    category: 'İncəsənət , Moda',
    excerpt: 'Jean-Michel Basquiat güclü və ifadəli rəsmləri ilə sənət aləmində silinməz iz qoyub. Rəssamın həyat və yaradıcılığını araşdıraq.',
  },

  {
    id: 7,
    title: 'Kimdir?',
    thumbnail: 'ye.webp',
    category: 'İncəsənət , Musiqi',
    excerpt: 'Bu buraxılışda haqqında danışdığım bütün albomlar mənim favorit albomlarım arasındadır. Məhz buna görə bu albomların üz qabıqlarının hekayələrini araşdırmaq mənə daha maraqlı idi.',
  },

  {
    id: 8,
    title: 'Gaspar Noé-nin “Vortex” filmi',
    thumbnail: 'vortex1.webp',
    category: 'İncəsənət',
    excerpt: 'Gaspar Noé-nin yeni filmi “Vortex” premyerasını 74-cü Kann kinofestivalında — 2021-ci ildə etmişdi. Pozitivliyə çox uzaq olan bu film haqqında qısa da olsa, yazmaq istədim. Narahat olmayın, çalışacağam ki, spoylerdən qaçınım.',
  },

]

export default function Home() {
  return (
    <div className="homepage">
      <br/>
      <h1>dördüncü blog'a xoş gəldiniz!</h1>
      <br/>
      <div className="article-list">
        {articles.map((article) => (
          <div key={article.id} className="article-thumbnail">
            <img src={article.thumbnail} alt={article.title} />
            <Link to={"/article/"+article.id}>
              <h2>{article.title}</h2>
            </Link>
            <h3>{article.category}</h3>
            <h4>{article.excerpt}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

