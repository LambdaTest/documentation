import React from 'react';

const VideoEmbed = ({ src, title }) => (
  <div style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '56.25%' }}>
    <iframe
      src={src}
      title={title}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
      }}
      allowFullScreen
      allow="encrypted-media; fullscreen;"
      loading="lazy"
    />
  </div>
);

export default VideoEmbed;