import { useEffect, useRef } from 'react';

export default function useMountEffect(func, deps) {
  const mount = useRef(false);

  useEffect(() => {
    if (mount.current) func();
    else mount.current = true;
  }, deps);
};

