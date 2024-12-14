"use client";

import { useState, useEffect } from "react";
import "./projects.css"

export default function Projects({ handleBack }) {
    const repoLinks = [
        "https://github.com/ayd1ndemirci/portfolio-nextjs",
        "https://github.com/ayd1ndemirci/get2qr",
        "https://github.com/ayd1ndemirci/login-register",
        "https://github.com/ayd1ndemirci/blog-platform",
        "https://github.com/ayd1ndemirci/netflix-clone",
        "https://github.com/ayd1ndemirci/url-shortener"
    ];

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const repoData = await Promise.all(
                    repoLinks.map(async (link) => {
                        const repoName = link.split("/").pop(); 
                        const response = await fetch(`https://api.github.com/repos/ayd1ndemirci/${repoName}`);
                        const data = await response.json();
                        return {
                            name: repoName,
                            stargazers_count: data.stargazers_count,
                            forks_count: data.forks_count,
                            html_url: link
                        };
                    })
                );
                setRepos(repoData);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        fetchRepos();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="projects-section">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-grid">
                {repos.map((repo) => (
                    <div
                        key={repo.name}
                        className="project-card"
                        onClick={() => window.open(repo.html_url, '_blank')}
                    >
                        <div className="project-header">
                            <h2 className="project-name">{repo.name}</h2>
                            <span className="repo-stars">⭐ {repo.stargazers_count}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="back" onClick={handleBack}> &larr; back</button>
        </div>
    );
    
}
