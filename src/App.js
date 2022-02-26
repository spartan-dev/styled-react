import "./App.css";
import RootNavigation from "./RootNavigation";
// import {useNavigate} from 'react-router-dom';
// import {useDispatch,useSelector} from 'react-redux'
// import {loginProcess} from './redux/UserDucks'
function App() {
  // para el login
  // const navigate = useNavigate();
  // const dispatch = useDispatch()
  // const onSubmit =()=>{
  //   //login
  //   dispatch(loginProcess(hookState, navigate) )
  // }
  return (
    <div className="App">
      <RootNavigation/>
    </div>
  );
}

export default App;
