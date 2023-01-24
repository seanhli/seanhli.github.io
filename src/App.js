import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<></>} />
            <Route
              path="home"
              element={
                <>
                  {/* <SideMenu />
                  <MainDisplay /> */}
                </>
              }
            >
              <Route
                path="reading"
                element={loaded ? <></> : <></>}
              />
              <Route
                path="meaning"
                element={loaded ? <></> : <></>}
              />
            </Route>
          </Route>
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
