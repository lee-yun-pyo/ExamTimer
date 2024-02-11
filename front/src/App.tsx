import { RouterProvider } from "react-router-dom";

import { ModalProvider } from "@/components/common/ModalProvider";

import { router } from "@/routes/router";

function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  );
}

export default App;
