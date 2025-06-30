import { lazy, Suspense } from "react";
import "./App.css";
import { useEffect } from "react";


const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import clarity from "@microsoft/clarity";

const App = () => {

  useEffect(() => {
    if (import.meta.env.PROD) {
      clarity.init("s7mkjrwgdt"); // replace with your Clarity project ID
    }
  }, []);
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
