import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Spec-Driven AI Book"
      description="A practical guide to creating AI-assisted books using Docusaurus"
    >
      <main style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>📘 Spec-Driven AI Book</h1>
        <p>
          Learn how to design, write, and publish AI-assisted books using a
          structured spec-driven workflow.
        </p>

        <Link
          className="button button--primary"
          to="/docs/intro"
        >
          Start Reading →
        </Link>
      </main>
    </Layout>
  );
}
