'use client';

import { useEffect, useState } from 'react';
import { allocationTools } from '../data/allocationTools';
import ToolInquiryForm from './ToolInquiryForm';

const TOOL_COUNT = allocationTools.length;

function nodePoint(index, radius) {
  const angle = ((index / TOOL_COUNT) * 360 - 90) * (Math.PI / 180);
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

function ToolDetail({ tool, formId }) {
  return (
    <div className="hub-dropdown-grid">
      <div className="hub-dropdown-info">
        <div className="hub-dropdown-meta">
          <span className="hub-cat-pill" style={{ '--node-color': tool.color }}>{tool.category}</span>
          <span className="hub-dropdown-tagline">{tool.tagline}</span>
        </div>
        <h3>{tool.name}</h3>
        <p>{tool.description}</p>
        <p className="hub-best-for"><strong>Best allocated when:</strong> {tool.bestFor}</p>
        <ul className="hub-capabilities">
          {tool.capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="hub-dropdown-form">
        <ToolInquiryForm tool={tool} formId={formId} />
      </div>
    </div>
  );
}

export default function ResearchHub() {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (allocationTools.some((tool) => tool.id === hash)) {
        setActiveId(hash);
      }
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  useEffect(() => {
    if (!activeId) return;
    const isCompact = window.matchMedia('(max-width: 900px)').matches;
    const target = document.getElementById(isCompact ? `hub-acc-item-${activeId}` : 'hub-dropdown-panel');
    if (!target) return;
    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [activeId]);

  const toggleTool = (id) => {
    const next = activeId === id ? null : id;
    setActiveId(next);
    if (typeof window !== 'undefined') {
      const url = next ? `${window.location.pathname}#${next}` : window.location.pathname;
      window.history.replaceState(null, '', url);
    }
  };

  const activeTool = allocationTools.find((tool) => tool.id === activeId) || null;

  return (
    <section id="research-hub" className="research-hub section section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-label reveal-up">Third-Party Platform Sales</div>
          <h2 className="section-title text-center reveal-up delay-1">
            Research <em>Allocation Hub</em>
          </h2>
          <p className="section-subtitle reveal-up delay-2">
            Select a platform on the outer ring. Each node expands with allocation guidance and a dedicated
            enquiry form — your lead is stored in our CRM against that tool only.
          </p>
        </div>

        <div className="hub-steps reveal-up delay-2">
          <div className="hub-step">
            <span>01</span>
            <p>Choose a platform on the outer circle</p>
          </div>
          <div className="hub-step">
            <span>02</span>
            <p>Review fit, capabilities, and allocation notes</p>
          </div>
          <div className="hub-step">
            <span>03</span>
            <p>Submit the enquiry — it lands in the CRM</p>
          </div>
        </div>

        <div className="hub-orbit-wrap reveal-up delay-3" aria-hidden="false">
          <div
            className="hub-orbit"
            role="group"
            aria-label="Partner platforms"
          >
            <div className="hub-ring hub-ring-outer"></div>
            <div className="hub-ring hub-ring-inner"></div>
            <svg className="hub-spokes" viewBox="0 0 100 100" aria-hidden="true">
              {allocationTools.map((tool, index) => {
                const point = nodePoint(index, 38);
                return (
                  <line
                    key={tool.id}
                    x1="50"
                    y1="50"
                    x2={(50 + point.x).toFixed(2)}
                    y2={(50 + point.y).toFixed(2)}
                    className={activeId === tool.id ? 'is-active' : ''}
                  />
                );
              })}
            </svg>

            <div className="hub-core">
              <span className="hub-core-kicker">TLBISBIG</span>
              <strong>Allocation Hub</strong>
              <span className="hub-core-count">{TOOL_COUNT} platforms</span>
            </div>

            {allocationTools.map((tool, index) => {
              const isActive = activeId === tool.id;
              const point = nodePoint(index, 42);
              return (
                <button
                  key={tool.id}
                  type="button"
                  className={`hub-node${isActive ? ' is-active' : ''}`}
                  style={{
                    '--node-color': tool.color,
                    left: `calc(50% + ${point.x}%)`,
                    top: `calc(50% + ${point.y}%)`,
                  }}
                  aria-expanded={isActive}
                  aria-controls="hub-dropdown-panel"
                  onClick={() => toggleTool(tool.id)}
                >
                  <span className="hub-node-icon" aria-hidden="true">
                    <i className={tool.icon}></i>
                  </span>
                  <span className="hub-node-name">{tool.shortName}</span>
                  <span className="hub-node-chevron" aria-hidden="true">
                    <i className={`fas fa-chevron-${isActive ? 'up' : 'down'}`}></i>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`hub-dropdown${activeTool ? ' is-open' : ''}`}
          id="hub-dropdown-panel"
          style={activeTool ? { '--node-color': activeTool.color } : undefined}
        >
          {activeTool ? (
            <>
              <div className="hub-dropdown-bar">
                <div>
                  <span className="section-label">Expanded platform</span>
                  <h3 className="hub-dropdown-title">{activeTool.name}</h3>
                </div>
                <button type="button" className="hub-close" onClick={() => toggleTool(activeTool.id)}>
                  Close <i className="fas fa-times"></i>
                </button>
              </div>
              <ToolDetail tool={activeTool} formId={`orbit-${activeTool.id}`} />
            </>
          ) : (
            <p className="hub-dropdown-placeholder">
              Select any platform on the outer circle to expand its allocation brief and enquiry form.
            </p>
          )}
        </div>

        <div className="hub-accordion" aria-label="Platform list">
          {allocationTools.map((tool) => {
            const isOpen = activeId === tool.id;
            return (
              <div
                key={tool.id}
                id={`hub-acc-item-${tool.id}`}
                className={`hub-acc-item${isOpen ? ' is-open' : ''}`}
                style={{ '--node-color': tool.color }}
              >
                <button
                  type="button"
                  className="hub-acc-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`hub-acc-${tool.id}`}
                  onClick={() => toggleTool(tool.id)}
                >
                  <span className="hub-node-icon" aria-hidden="true">
                    <i className={tool.icon}></i>
                  </span>
                  <span className="hub-acc-copy">
                    <strong>{tool.name}</strong>
                    <em>{tool.category}</em>
                  </span>
                  <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                </button>
                {isOpen ? (
                  <div className="hub-acc-panel" id={`hub-acc-${tool.id}`}>
                    <p className="hub-acc-summary">{tool.summary}</p>
                    <ToolDetail tool={tool} formId={`acc-${tool.id}`} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
