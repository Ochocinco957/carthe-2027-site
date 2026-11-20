"use client";

import { useState } from "react";

/* ============================================================
   PAST EVENT VIDEOS — edit this list
   ============================================================

   TWO WAYS TO ADD A VIDEO:

   1) YOUTUBE
      Take the ID from the URL. For:
        https://www.youtube.com/watch?v=dQw4w9WgXcQ
      the id is:  dQw4w9WgXcQ
      For a youtu.be link like https://youtu.be/dQw4w9WgXcQ
      the id is the part after the slash.

      { type: "youtube", id: "REPLACE_WITH_YOUTUBE_ID", title: "...", caption: "..." }

   2) SELF-HOSTED (cPanel)
      Upload the .mp4 to your hosting (e.g. public_html/videos/),
      then use the full URL. A poster image is optional but
      recommended — otherwise the tile shows a black frame.

      { type: "file",
        src: "https://yourdomain.com/videos/carthe-2026.mp4",
        poster: "https://yourdomain.com/videos/carthe-2026.jpg",
        title: "...", caption: "..." }
   ============================================================ */
/* NOTE: CARTHE 2027 is the INAUGURAL edition — there are no past CARTHE
   events. These videos should show the organisers' other work, partner
   footage, or a teaser for this event. Do not label anything as a previous
   CARTHE edition. */
const VIDEOS = [
  {
    type: "youtube",
    id: "REPLACE_WITH_YOUTUBE_ID",
    title: "About the Organisers",
    caption: "The team convening the inaugural delegation.",
  },
  {
    type: "youtube",
    id: "REPLACE_WITH_YOUTUBE_ID",
    title: "Previous Work",
    caption: "Projects and events delivered by the organising team.",
  },
  {
    type: "youtube",
    id: "REPLACE_WITH_YOUTUBE_ID",
    title: "What to Expect",
    caption: "The format, the room and the programme in brief.",
  },
];

function youTubeThumb(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function VideoTile({ video }) {
  const [playing, setPlaying] = useState(false);
  const unset = video.type === "youtube" && video.id.startsWith("REPLACE_");

  // Self-hosted file — native player, metadata only until played
  if (video.type === "file") {
    return (
      <div className="video-tile">
        <div className="video-frame">
          <video controls preload="metadata" poster={video.poster} playsInline>
            <source src={video.src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
        <h4>{video.title}</h4>
        <p>{video.caption}</p>
      </div>
    );
  }

  return (
    <div className="video-tile">
      <div className="video-frame">
        {unset ? (
          <div className="video-placeholder">
            <span>Add a YouTube ID in</span>
            <code>components/VideoGallery.js</code>
          </div>
        ) : playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="video-facade"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${video.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={youTubeThumb(video.id)} alt="" loading="lazy" />
            <span className="video-play">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <h4>{video.title}</h4>
      <p>{video.caption}</p>
    </div>
  );
}

export default function VideoGallery() {
  return (
    <div className="video-grid">
      {VIDEOS.map((v, i) => (
        <VideoTile key={i} video={v} />
      ))}
    </div>
  );
}
