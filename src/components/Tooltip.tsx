import { useEffect, useCallback, useRef, type FC, type CSSProperties, type RefObject, useState } from 'react';
import styles from './Tooltip.module.css';

const Tooltip: FC<{ info: string | JSX.Element }> = (props) => {
    const el = useRef<HTMLElement>(null);
    const infoEl = useRef<HTMLElement>(null);
    const arrowEl = useRef<HTMLElement>(null);

    const [arrowStyle, setArrowStyle] = useState<CSSProperties>({});
    const [infoStyle, setInfoStyle] = useState<CSSProperties>({});

    const hide = useCallback(() => {
      setInfoStyle((state) => ({
        ...state,
        display: 'none'
      }));
      setArrowStyle((state) => ({
        ...state,
        display: 'none'
      }));
    }, []);

    const offset = useCallback(
      (element: RefObject<HTMLElement>): {top: number; left: number} => {
      if (!element.current) {
        return { top:0, left: 0}
      }
      const rect = element.current.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      }
    }, []);

    const alignToLeftInner = useCallback(
      (offsetLeft: number) => {
        setInfoStyle((state) => ({
          ...state,
          width: `${document.body.offsetWidth}px`,
          marginLeft: `-${offsetLeft}px`
        })); 
    },[]);

    const alignToLeft = useCallback(
      (offsetLeft: number) => {
      if (document.body.offsetLeft > offsetLeft) {
        setInfoStyle((state) => ({
          ...state,
          left: 0,
          right: 'auto',
        }));
        alignToLeftInner(offsetLeft);
      }
    }, [alignToLeftInner]);

    const adjustPosition = useCallback(async () => {
      setArrowStyle((state) => ({
        ...state,
        display: 'block'
      }));
      setInfoStyle((state) => ({
        ...state,
        display: 'block',
      }));

      if (document.body.offsetLeft > offset(infoEl).left) {
        setInfoStyle((state) => ({
          ...state,
          left: '0',
          transform: 'none',
        }));

        if (document.body.offsetWidth < (offset(infoEl).left + (infoEl.current?.offsetWidth ?? 0))) {
          alignToLeftInner(offset(infoEl).left)
        }
      } else if (document.body.offsetWidth < (offset(infoEl).left +(infoEl.current?.offsetWidth ?? 0))) {
        setInfoStyle((state) => ({
          ...state,
          right: '0',
          left: 'auto',
          transform: 'none',
        }));

        infoEl.current?.classList.add('right-limit');

        alignToLeft(offset(infoEl).left);
      } else if (infoEl.current?.classList.contains('right-limit')) {
        setInfoStyle((state) => ({
          ...state,
          right: '0',
          left: 'auto',
        }));
        alignToLeft(offset(el).left);
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