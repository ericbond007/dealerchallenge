import React from 'react';


const Profile = ({user}) => (
  <div>
    User Profile
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img src={user.images["230"]} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p>{user.display_name}</p>
          <p><a rel="noopener noreferrer" target="_blank" href={'https://behance.net/' + user.username}>@{user.username}</a></p>
    <p>Links: <a rel="noopener noreferrer" target="_blank" href={user.links[0].url}>{user.links[0].title}</a></p>

        </div>
      </div>
      <div className="content">
        <p>About Me: {user.sections["About Me"]}</p>
      </div>
    </div>

    <div className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Appreciations</p>
          <p className="title">{user.stats.appreciations}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Comments</p>
          <p className="title">{user.stats.comments}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Followers</p>
          <p className="title">{user.stats.followers}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Following</p>
          <p className="title">{user.stats.following}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Views</p>
          <p className="title">{user.stats.views}</p>
        </div>
      </div>

    </div>

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


  </div>
)

export default Profile
