"use client";
import { useState } from "react";

export default function Skill({ handleBack }) {
    const skills = [
        { name: "JavaScript", category: "languages" },
        { name: "Python", category: "languages" },
        { name: "HTML", category: "languages" },
        { name: "CSS", category: "languages" },
        { name: "PHP", category: "languages" },
        { name: "C", category: "languages" },
        { name: "C++", category: "languages" },
        { name: "Node.JS", category: "languages" },
        { name: "GoLang", category: "languages"},
        
        { name: "MySQL", category: "databases" },
        { name: "SQLite", category: "databases" },
        { name: "MongoDB", category: "databases" },

        { name: "Git", category: "tools" },
        { name: "Windows", category: "tools" },
        { name: "JetBrains", category: "tools" },
        { name: "VSC", category: "tools" },
        { name: "Next.js", category: "frameworks" },  
        { name: "React", category: "frameworks" },   
    ];

    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredSkills =
        selectedCategory === "all"
            ? skills
            : skills.filter((skill) => skill.category === selectedCategory);

    return (
        <div className="skill-section">
            <div className="skill-categories">
                <button onClick={() => setSelectedCategory("all")}>All</button>
                <button onClick={() => setSelectedCategory("languages")}>Languages</button>
                <button onClick={() => setSelectedCategory("databases")}>Databases</button>
                <button onClick={() => setSelectedCategory("frameworks")}>Frameworks</button>
                <button onClick={() => setSelectedCategory("tools")}>Tools</button>
            </div>
            <div className="skill-list">
                {filteredSkills.map((skill) => (
                    <div
                        key={skill.name} 
                        className="skill-item"
                    >
                        {skill.name}
                    </div>
                ))}
            </div>
            <button className="back" onClick={handleBack}>
                &larr; back
            </button>
        </div>
    );
}
