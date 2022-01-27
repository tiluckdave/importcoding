/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

function NotFound() {
  return (
    <Layout
      title={translate({
        id: "theme.NotFound.title",
        message: "Page Not Found",
      })}
    >
      <main className="container margin-vert--xl">
        <div className="row text-center">
          <div className="col col--6 col--offset-3" style={{ paddingTop: '4em' }}>
            <h1 className="hero__title size-2x">
              404 Not Found
            </h1>
            <p className="homepage-subtitle">
              We could not find what you were looking for.
            </p>
            <Link
              to="/"
              className={`button button--primary margin-horiz--xl`}
            > Go To Homepage
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
