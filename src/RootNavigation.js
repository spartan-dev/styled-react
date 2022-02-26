import { Route, Routes } from 'react-router-dom';
//import pages



function RootNavigation(){
    return(
        <Routes>
            <Route path="/" element={<h1>Este mejasaje</h1>}/>
        </Routes>
    )
}

export default RootNavigation;