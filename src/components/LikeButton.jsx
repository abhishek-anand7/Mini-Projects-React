import { useState } from "react"

export function LikeButton() {
  const [liked, setLiked] = useState(false);
  return(
    <>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "Like"}
      </button>
    </>
  )
}

/*A slightly cleaner version

Since the new state depends on the previous state, it's recommended to use the functional updater:

import { useState } from "react";

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(prev => !prev)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}

Using setLiked(prev => !prev) avoids potential issues with stale state if multiple updates are queued.

Your original code is perfectly fine for this use case; the functional updater is simply the recommended React pattern.
*/