import { useState, useEffect, useRef } from "react";
import Title from "../components/PageTitle";

// TODO: перенести вспомогательные функции в отдельный файл
interface TimerRef {
  current: ReturnType<typeof setTimeout> | null;
}

function clear(ref: TimerRef): void {
  if (ref.current !== null) {
    clearTimeout(ref.current);
    ref.current = null;
  }
}

function useNavigationLoad() {
  // TODO: перенести константы в отдельный файл
  const [done, setDone] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [hideRect, setHideRect] = useState(false);
  const fallbackTimerRef = useRef<number | null>(null);
  const showNavTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (done) {
      setHideRect(true);
      showNavTimerRef.current = window.setTimeout(() => {
        setShowNav(true);
      }, 500); // TODO: перенести константы в отдельный файл

      return () => {
        clear(fallbackTimerRef);
      };
    }
  }, [done]);
  return {
    done,
    setDone,
    showNav,
    hideRect,
    fallbackTimerRef,
  };
}

function LoadAnimation({
  done,
  setDone,
  hideRect,
  fallbackTimerRef,
  showNav,
}: {
  done: boolean;
  setDone: (v: boolean) => void;
  hideRect: boolean;
  fallbackTimerRef: TimerRef;
  showNav: boolean;
}) {
  return (
    <div className="load_block">
      {!showNav && (
        <>
          <p className={`${hideRect ? "hide_animation" : ""}`}>Loading</p>
          <div className={`rect_load ${hideRect ? "hide_animation" : ""}`}>
            {!done && (
              <div
                className="fill"
                onAnimationEnd={() => {
                  clear(fallbackTimerRef);
                  setDone(true);
                }}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

function NavBar() {
  return (
    <div className="nav show_nav load_block">
      <ul>
        <li className="about">
          <a href="/about">&rarr; Обо мне</a>
        </li>
        <li className="works">
          <a href="/works">&rarr; Работы</a>
        </li>
      </ul>
    </div>
  );
}
function NavigationLoad() {
  const { done, setDone, showNav, hideRect, fallbackTimerRef } =
    useNavigationLoad();

  return (
    <>
      {!showNav && (
        <LoadAnimation
          done={done}
          setDone={setDone}
          hideRect={hideRect}
          fallbackTimerRef={fallbackTimerRef}
          showNav={showNav}
        />
      )}
      {showNav && <NavBar />}
    </>
  );
}

function Home() {
  return (
    <div className="Home">
      <div className="title">
        <Title text="ПОРТФОЛИО"></Title>
        <h2>2025</h2>
      </div>
      <NavigationLoad></NavigationLoad>{" "}
    </div>
  );
}

export function HomeWithoutLoad() {
  return (
    <div className="Home">
      <div className="title">
        <Title text="ПОРТФОЛИО"></Title>
        <h2>2025</h2>
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
