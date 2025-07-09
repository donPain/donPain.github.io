import React, { useEffect, useState } from "react";
import styles from "./MediumArticles.module.css";

const MEDIUM_RSS_URL = "https://medium.com/feed/@2l";

function parseRSS(xml) {
  const parser = new window.DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const items = Array.from(doc.querySelectorAll("item"));
  return items.map((item) => ({
    title: item.querySelector("title")?.textContent || "",
    link: item.querySelector("link")?.textContent || "",
    pubDate: item.querySelector("pubDate")?.textContent || "",
    description: item.querySelector("description")?.textContent || "",
    thumbnail:
      item.getElementsByTagName("media:thumbnail")[0]?.getAttribute("url") ||
      null,
  }));
}

const PAGE_SIZE = 5;
const MediumArticles = () => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadMoreRef = React.useRef(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`
        );
        const data = await res.json();
        if (data.status === "ok") {
          setArticles(data.items);
          setVisibleArticles(data.items.slice(0, PAGE_SIZE));
        } else {
          setError("Erro ao carregar artigos.");
        }
      } catch (err) {
        setError("Erro ao buscar artigos do Medium.");
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  // Scroll infinito usando IntersectionObserver
  useEffect(() => {
    if (!articles.length) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => {
            const nextPage = prev + 1;
            setVisibleArticles(articles.slice(0, nextPage * PAGE_SIZE));
            return nextPage;
          });
        }
      },
      { threshold: 1 }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [articles, loadMoreRef]);

  if (loading) return <div className={styles.mediumArticlesLoading}>Carregando artigos...</div>;
  if (error) return <div className={styles.mediumArticlesError}>{error}</div>;

  return (
    <div className={styles.mediumArticlesContainer}>
      {visibleArticles.map((article) => (
        <a
          key={article.guid}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mediumArticleCard}
        >
          <div className={styles.mediumArticleInfo}>
            <div className={styles.mediumArticleHeader}>
              <img
                src={"https://miro.medium.com/v2/resize:fill:176:176/1*5DUxhmkyxAE5XtSyfIO7uA.jpeg"}
                alt={article.author || 'Avatar'}
                className={styles.mediumArticleAvatar}
              />
              <div className={styles.mediumArticleMeta}>
                <span className={styles.mediumArticleAuthor}>{article.author || 'Autor'}</span>
                <span className={styles.mediumArticleDateRow}>{new Date(article.pubDate).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>
            <h3 className={styles.mediumArticleTitle}>{article.title}</h3>
            <div
              className={styles.mediumArticleDesc}
              dangerouslySetInnerHTML={{ __html: article.description.replace(/<img[^>]*>/g, '').slice(0, 180) + '...' }}
            />
          </div>
        </a>
      ))}
      <div ref={loadMoreRef} style={{height: '1px'}} />
    </div>
  );
};

export default MediumArticles;
