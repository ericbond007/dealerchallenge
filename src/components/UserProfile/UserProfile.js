import React from 'react';

const UserProfile = ({user}) => (
  <div>
    User Profile
    <p>Name {user.display_name}</p>
    <p>User Name {user.username}</p>
    <img src={user.images["230"]} />
    <p>About Me: {user.sections["About Me"]}</p>
    <p>Stats</p>
    <p>Appreciations: {user.stats.appreciations}</p>
    <p>Comments: {user.stats.comments}</p>
    <p>Followers: {user.stats.followers}</p>
    <p>Following: {user.stats.following}</p>
    <p>Team Members: {user.stats.team_members}</p>
    <p>Views: {user.stats.views}</p>
    <p>Projects:</p>
    <ul>
    {user.features.map(feature => (
    <li key={feature.id}>
        <a href={feature.site.url}>
          <img src={feature.site.ribbon.image} />
          {feature.site.name}
        </a>
    </li>
    ))}
  </ul>


    <p>Links: <a rel="noopener noreferrer" target="_blank" href={user.links[0].url}>{user.links[0].title}</a></p>
  </div>
)

export default UserProfile
