import Link from 'next/link';
import { allocationTools } from '../data/allocationTools';

export default function SolutionsPreview() {
  return (
    <section id="solutions-preview" className="solutions-preview section">
      <div className="container">
        <div className="section-header">
          <div className="section-label reveal-up">Third-Party Platform Sales</div>
          <h2 className="section-title text-center reveal-up delay-1">
            Research <em>Allocation Hub</em>
          </h2>
          <p className="section-subtitle reveal-up delay-2">
            We allocate and sell the operating stack for growing companies. Open the hub to expand any
            platform and send a CRM-tracked enquiry from that tool alone.
          </p>
        </div>

        <div className="solutions-preview-grid reveal-up delay-2">
          {allocationTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/solutions#${tool.id}`}
              className="solutions-chip"
              style={{ '--node-color': tool.color }}
            >
              <span className="hub-node-icon" aria-hidden="true">
                <i className={tool.icon}></i>
              </span>
              <span>
                <strong>{tool.name}</strong>
                <em>{tool.category}</em>
              </span>
            </Link>
          ))}
        </div>

        <div className="page-hero-actions reveal-up delay-3">
          <Link href="/solutions" className="btn btn-gold btn-lg">
            Open Allocation Hub <i className="fas fa-circle-nodes"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
