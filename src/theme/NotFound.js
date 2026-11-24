/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

function NotFound() {
  return (
    <Layout
      title={translate({
        id: 'theme.NotFound.title',
        message: 'Page Not Found',
      })}>
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">
              <Translate
                id="theme.NotFound.title"
                description="The title of the 404 page">
                Page Not Found
              </Translate>
            </h1>
            <p>LambdaTest is now TestMu AI. We've moved from lambdatest.com to testmuai.com.<br /> This page may have a new location or no longer exist.
              Chat with us and we'll help you find what you need.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
