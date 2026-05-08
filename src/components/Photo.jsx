import { useState } from 'react';

/**
 * Image with graceful fallback. If the src fails to load, renders a
 * paper-textured placeholder with the alt text — so the page never breaks.
 */
export default function Photo({ src, alt, className = '', ...rest }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`photo-fallback ${className}`.trim()}
        role="img"
        aria-label={alt}
        {...rest}
      >
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
      {...rest}
    />
  );
}
