import { useState, useEffect, useCallback, useRef, type FC, type CSSProperties } from 'react';
import styles from './Tooltip.module.css';

const Tooltip: FC<{ info: string | JSX.Element }> = (props) => {
  const el = useRef<HTMLElement>(null);
  const infoEl = useRef<HTMLElement>(null);
  const arrowEl = useRef<HTMLElement>(null);

  const [arrowStyle, setArrowStyle] = useState<CSSProperties>({});
  const [infoStyle, setInfoStyle] = useState<CSSProperties>({});

  const hide = useCallback(() => {
    setInfoStyle((state) => ({...state, display: 'none'}));
    setArrowStyle((state) => ({...state, display: 'none'}));
  }, []);

  const offset = useCallback((): {top: number; left: number} =>{
    if (!infoEl.current) {
      return { top:0, left: 0}
    }
    const rect = infoEl.current.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    }
  }, []);

  const alignToLeftInner = useCallback(() => {
    const offsetLeft = offset().left;
    setInfoStyle((state) => ({
      ...state,
      width: `${document.body.offsetWidth}px`,
      marginLeft: `-${offsetLeft}px`
    })); 
  },[offset]);

  const alignToLeft = useCallback(() => {
    const offsetLeft = offset().left;
    if (document.body.offsetLeft > offsetLeft) {
      setInfoStyle((state) => ({
        ...state,
        left: 0,
        right: 'auto',
      }));
      alignToLeftInner();
    }
  }, [alignToLeftInner, offset]);

  const adjustPosition = useCallback(async () => {
    setArrowStyle((state) => ({
      ...state,
      display: 'block'
    }));
    setInfoStyle((state) => ({
      ...state,
      display: 'block',
    }));

    if (document.body.offsetLeft > offset().left) {
      setInfoStyle((state) => ({
        ...state,
        left: '0',
        transform: 'none',
      }));

      if (document.body.offsetWidth < (offset().left + (infoEl.current?.offsetWidth ?? 0))) {
        alignToLeftInner()
      }
    } else if (document.body.offsetWidth < (offset().left +(infoEl.current?.offsetWidth ?? 0))) {
      setInfoStyle((state) => ({
        ...state,
        right: '0',
        left: 'auto',
        transform: 'none',
      }));

      alignToLeft();
    }
  }, [alignToLeft, alignToLeftInner, offset]);

  useEffect(() => {
    const currentEl = el.current;
    currentEl?.addEventListener('mouseenter', adjustPosition);
    currentEl?.addEventListener('mouseleave', hide);

    return () => {
      currentEl?.removeEventListener('mouseenter', adjustPosition);
      currentEl?.removeEventListener('mouseleave', hide);
    }
  });

  return (
    <span
      ref={el}
      className={styles.tooltip}
    >
      <span
        ref={arrowEl}
        className={styles.arrow}
        style={arrowStyle}
      ></span>
      {props.children}
      <span
        ref={infoEl}
        className={styles.information}
        style={infoStyle}
      >{props.info}</span>
    </span>
  );
}

export default Tooltip;