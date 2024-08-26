import Header from "./my_sol/components/Header";
import Sidebar from "./my_sol/components/Sidebar";
import DynamicContent from "./my_sol/components/DynamicContent";
import { useState } from "react";
function App() {
  const [isForm, setIsForm] = useState(false);
  function handleDisplayForm() {
    setIsForm((previousState) => !previousState);
  }
  return (
    <>
      <Header />
      <main className="flex flex-row mt-5">
        <section className="basis-1/6">
          <Sidebar setFormState={handleDisplayForm} />
        </section>
        <section className="basis-5/6 p-8">
          <DynamicContent isForm={isForm} setFormState={handleDisplayForm} />
        </section>
      </main>
    </>
  );
}

export default App;
