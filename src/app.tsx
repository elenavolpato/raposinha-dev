import { Suspense, type Component } from 'solid-js'

const App: Component<{ children: Element }> = (props) => {
  return (
    <>
      <main class="overflow-x-hidden">
        <Suspense>{props.children}</Suspense>
      </main>
    </>
  )
}

export default App
