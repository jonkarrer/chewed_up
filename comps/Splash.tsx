import { useRef } from "react";
import { animated, useSpring } from "react-spring";
import styles from "../styles/Splash.module.css";

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

const transform: any = (x: number, y: number) =>
  `translate3d(${x / 30}px,${y / 8}px,0)`;

function Splash({ handleClick }): JSX.Element {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 250, friction: 20 },
  }));

  const displayChange: any = useRef(0);

  return (
    <>
      <div
        className={styles.Splash}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        ref={displayChange}
      >
        <header>
          <img className={styles.image} src="/Up.jpg" alt="title block" />
        </header>
        <main className={styles.main}>
          <div className={styles.arrow}>
            <animated.svg
              width="100%"
              height="100%"
              viewBox="0 0 260.135 427"
              onClick={() => {
                displayChange.current.style.transform = `translateY(-100vh)`;
                handleClick();
              }}
              style={{ transform: props.xy.interpolate(transform) }}
            >
              <g
                id="Group_3"
                data-name="Group 3"
                transform="translate(-60 -468)"
              >
                <g
                  id="Rectangle_3"
                  data-name="Rectangle 3"
                  transform="matrix(0.819, -0.574, 0.574, 0.819, 60, 737.723)"
                  fill="#f4e7be"
                  stroke="rgba(112,112,112,0.01)"
                  strokeWidth="1"
                >
                  <rect width="40" height="192" stroke="none" />
                  <rect x="0.5" y="0.5" width="39" height="191" fill="none" />
                </g>

                <g
                  id="Rectangle_2"
                  data-name="Rectangle 2"
                  transform="matrix(0.819, 0.574, -0.574, 0.819, 287.369, 715.599)"
                  fill="#f4e7be"
                  stroke="rgba(112,112,112,0.01)"
                  strokeWidth="1"
                >
                  <rect width="40" height="191" stroke="none" />
                  <rect x="0.5" y="0.5" width="39" height="190" fill="none" />
                </g>

                <g
                  id="Rectangle_1"
                  data-name="Rectangle 1"
                  transform="translate(170 468)"
                  fill="#f4e7be"
                  stroke="rgba(112,112,112,0.01)"
                  strokeWidth="1"
                >
                  <rect width="40" height="427" stroke="none" />
                  <rect x="0.5" y="0.5" width="39" height="426" fill="none" />
                </g>
              </g>
            </animated.svg>
          </div>
          <div className={styles.summary}>
            <h1>
              A blog about experiences, deep thoughts, tech, and wellness.
            </h1>
          </div>
        </main>
      </div>
      <div></div>
    </>
  );
}

export default Splash;
