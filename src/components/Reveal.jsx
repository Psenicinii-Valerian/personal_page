import { useEffect, useRef, useState } from 'react';

export default function Reveal({
  as: Tag = 'div',
  className = '',
  children,
  delay = 0,
  rootMargin = '0px 0px -8% 0px',
  threshold = 0.08,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin, threshold]);

  const style = delay
    ? { transitionDelay: `${delay}s`, ...(rest.style || {}) }
    : rest.style;

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      {...rest}
      style={style}
    >
      {children}
    </Tag>
  );
}
