import React, { useEffect } from 'react';
import './BlogsPost.css';

// Minimal markdown-like renderer: handles **bold** and \n for line breaks
function renderParagraph(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Handle \n within a paragraph as a line break
    return part.split('\n').map((line, j, arr) => (
      <React.Fragment key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </React.Fragment>
    ));
  });
}

export default function BlogPost({ post, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <article className="post-section">
      {/* Back */}
      <button className="post-back" onClick={onBack}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
        </svg>
        Back to writings
      </button>

      {/* Header */}
      <header className="post-header">
        <div className="post-meta-top">
          <span className="post-read-time">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime} min read
          </span>
          <span className="post-date">{post.date}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-lead">{post.description}</p>
        <div className="post-tags">
          {post.tags.map(t => (
            <span key={t} className="post-tag">{t}</span>
          ))}
        </div>
      </header>

      <hr className="post-divider" />

      {/* Body */}
      <div className="post-body">
        {post.content.map((para, i) => (
          <p key={i}>{renderParagraph(para)}</p>
        ))}
      </div>

      <hr className="post-divider" />

      {/* Footer */}
      <footer className="post-footer">
        <p>Written by <strong>Alekhya Jujjuri</strong></p>
        <button className="post-back" onClick={onBack}>← Back to writings</button>
      </footer>
    </article>
  );
}