import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';
import { Provider } from 'react-redux';
import appStore from './utiles/appStore';

const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children : [
    {
      path : "/",
      element : <MainContainer/>
    },
    {
      path : "/watch",
      element : <Watch/>
    }
  ]
}])

function App() {
  return (
    <Provider store={appStore}>
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
