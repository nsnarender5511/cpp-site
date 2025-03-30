/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3 text-center">
            <div className="p-lg">
              <Heading as="h1" className="text-burgundy mb-lg">
                Page Not Found
              </Heading>
              <div className="card p-lg mb-lg">
                <p className="text-md mb-md">We couldn't find what you were looking for.</p>
                <p className="text-sm text-secondary mb-lg">
                  Please contact the owner of the site that linked you to the
                  original URL and let them know their link is broken.
                </p>
                <Link className="button button--primary-gradient mx-auto" to="/">
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 