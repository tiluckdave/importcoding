import React from "react";
import Link from "@docusaurus/Link";
import "./header.css";

export default function HomepageHeader() {
    return (
        <div className="homepage-header">
            <p>
                Welcome to <span className="primary">Import</span> Coding!
            </p>
            <h1>Projects, Tutorials and more...</h1>
        </div >
    );
}