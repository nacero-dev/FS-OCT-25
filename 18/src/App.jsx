import FocusProvider from "./provider/FocusProvider";
import RenderCountProvider from "./provider/RenderCountProvider";
import PreviousCounterProvider from "./provider/PreviousCounterProvider";

import FocusInput from "./componentes/focus-input";
import RenderCounter from "./componentes/render-counter";
import PreviousCounter from "./componentes/previous-counter";

export default function App() {
  return (
    <>
      <FocusProvider>
        <FocusInput />
      </FocusProvider>

      <RenderCountProvider>
        <RenderCounter />
      </RenderCountProvider>

      <PreviousCounterProvider>
        <PreviousCounter />
      </PreviousCounterProvider>
    </>
  );
}
