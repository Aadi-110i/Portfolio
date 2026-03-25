import { motion } from 'framer-motion'
import '../styles/coding-profiles.css'

const profiles = [
    {
        platform: 'LeetCode',
        icon: <img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="LeetCode" className="platform-logo-img" />,
        stats: [
            { label: 'Problems Solved', value: '500+' },
            { label: 'Contest Rating', value: '1850' },
            { label: 'Global Rank', value: 'Top 5%' }
        ],
        link: 'https://leetcode.com',
        color: '#FFA116'
    },
    {
        platform: 'Codeforces',
        icon: (
            <svg viewBox="0 0 24 24" className="platform-logo-img">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3z" fill="#F44336" />
                <path d="M13.5 3c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3z" fill="#2196F3" />
                <path d="M22.5 10.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" fill="#FFEB3B" />
            </svg>
        ),
        stats: [
            { label: 'Rating', value: '1400' },
            { label: 'Max Rank', value: 'Specialist' },
            { label: 'Problems Solved', value: '300+' }
        ],
        link: 'https://codeforces.com',
        color: '#318CE7'
    },
    {
        platform: 'CodeChef',
        icon: <img src="https://cdn.simpleicons.org/codechef/D4A373" alt="CodeChef" className="platform-logo-img" />,
        stats: [
            { label: 'Rating', value: '1650' },
            { label: 'Highest Rating', value: '3 Star' },
            { label: 'Problems Solved', value: '250+' }
        ],
        link: 'https://codechef.com',
        color: '#8B4513'
    },
    {
        platform: 'GitHub',
        icon: <img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" className="platform-logo-img" />,
        stats: [
            { label: 'Repositories', value: '45' },
            { label: 'Contributions', value: '1,200+' },
            { label: 'Followers', value: '50' }
        ],
        link: 'https://github.com',
        color: '#2ea44f'
    }
]

const CodingProfiles = () => {
    return (
        <section id="coding-profiles" className="coding-profiles-section container section">
            <div className="profiles-header">
                <h2 className="text-huge">STATS<span className="text-coral">.</span></h2>
                <p className="text-mono">Coding Platforms & Achievements</p>
            </div>

            <div className="profiles-grid">
                {profiles.map((profile, index) => (
                    <motion.div
                        key={profile.platform}
                        className="flip-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="platform-logo" style={{ color: profile.color }}>
                                    {profile.icon}
                                </div>
                                <h3 className="platform-name text-mono">{profile.platform}</h3>
                                <div className="flip-hint text-mono">Hover to see stats</div>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="platform-name-back text-mono">{profile.platform}</h3>
                                <ul className="stats-list text-mono">
                                    {profile.stats.map((stat, i) => (
                                        <li key={i}>
                                            <span className="stat-label">{stat.label}</span>
                                            <span className="stat-value">{stat.value}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href={profile.link} target="_blank" rel="noopener noreferrer" className="view-profile-btn text-mono">View Profile ↗</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default CodingProfiles
