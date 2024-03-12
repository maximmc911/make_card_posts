import { Route, Routes } from 'react-router-dom';
import { routes } from './route/index'
const App = () => {
  const setRoutes = () =>
    routes.map(({ id, path, element }) => (
      <Route key={id} path={path} element={element} />
    ));
  return (
    <>
      <nav>
        <h1>Посты</h1>
      </nav>
      <Routes>
        {setRoutes()}
      </Routes>

    </>
  )
}

export default App