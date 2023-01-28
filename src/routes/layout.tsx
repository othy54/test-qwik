import { component$, Slot, createContext, useContextProvider, useStore } from '@builder.io/qwik';

export const CTX = createContext('stuff');
export default component$(() => {

  const menu = useStore({
    isActive: false,
  })

  useContextProvider(CTX, menu);
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
