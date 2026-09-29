import React, { useState } from 'react';
import { blogs } from '../data/blogs';
import BlogPost from './BlogsPost';
// import './BlogList.css';
import './Blogs.css'

const ALL_TAGS = ['All', ...Array.from(new Set(blogs.flatMap(b => b.tags)))];

export default function BlogList() {
  const [activeTag, setActiveTag] = useState('All');
  const [openPost, setOpenPost] = useState(null);

  const filtered =
    activeTag === 'All' ? blogs : blogs.filter(b => b.tags.includes(activeTag));

  if (openPost) {
    return <BlogPost post={openPost} onBack={() => setOpenPost(null)} />;
  }

  return (
    <section id="blogs" className="blog-section">
      {/* Header */}
      <div className="blog-header">
        <div className="blog-header-title">
          <span className="blog-icon">✦</span>
          <h2>Writings</h2>
        </div>
        <p className="blog-header-desc">
          Practical notes on React Native, mobile development, and things I've
          figured out — or gotten wrong — building production apps.
        </p>
      </div>

      {/* Tag filter */}
      <div className="blog-filters">
        {ALL_TAGS.slice(0, 8).map(tag => (
          <button
            key={tag}
            className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="blog-grid">
        {filtered.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-meta">
              <span className="read-time">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                {post.readTime} min read
              </span>
              <span className="post-date">{post.date}</span>
            </div>

            <h3 className="blog-card-title">{post.title}</h3>
            <p className="blog-card-desc">{post.description}</p>

            <div className="blog-card-tags">
              {post.tags.map(t => (
                <span key={t} className="blog-tag">{t}</span>
              ))}
            </div>

            <button
              className="read-link"
              onClick={() => setOpenPost(post)}
            >
              Read Article
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="blog-empty">No posts tagged "{activeTag}" yet.</div>
      )}
    </section>
  );
}