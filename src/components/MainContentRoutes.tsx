import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Airplane = React.lazy(() => import('../pages/animations/Airplane/Airplane'));
const FoldingCube = React.lazy(() => import('../pages/animations/FoldingCube/FoldingCube'));
const Cube3D = React.lazy(() => import('../pages/animations/Cube3D/Cube3D'));
const Tetrahedron = React.lazy(() => import('../pages/animations/Tetrahedron/Tetrahedron'));
const Cubes = React.lazy(() => import('../pages/animations/Cubes/Cubes'));
const Checkbox = React.lazy(() => import('../pages/animations/Checkbox/Checkbox'));
const TextTyping = React.lazy(() => import('../pages/animations/TextTyping/TextTyping'));
const UseReducer = React.lazy(() => import('../pages/react/hooks/useReducer/UseReducer'));
const UseMemo = React.lazy(() => import('../pages/react/hooks/useMemo/UseMemo'));
const Tricks = React.lazy(() => import('../pages/css/Tricks/Tricks'));
const Html = React.lazy(() => import('../pages/html/Html'));
const DebouncedValue = React.lazy(() => import('../pages/react/DebouncedValue/DebouncedValue'));
const DebouncedCallback = React.lazy(() => import('../pages/react/DebouncedCallback/DebouncedCallback'));
const UseCallback = React.lazy(() => import('../pages/react/hooks/useCallback/UseCallback'));
const PageOne = React.lazy(() => import('../pages/PageOne/PageOne'));
const PageTwo = React.lazy(() => import('../pages/PageTwo/PageTwo'))
const UseState = React.lazy(() => import('../pages/react/hooks/useState/UseState'))
const UseRef = React.lazy(() => import('../pages/react/hooks/useRef/UseRef'))
const UseEffect = React.lazy(() => import('../pages/react/hooks/useEffect/UseEffect'))
const UseContext = React.lazy(() => import('../pages/react/hooks/useContext/UseContext'))
const Test = React.lazy(() => import('../pages/Test/Test'))

const MainContentRoutes = () => {
    return (
        <Routes>
            <Route path="/site" element={<div>Home</div>} />
            <Route path="/site/one" element={<PageOne />} />
            <Route path="/site/two" element={<PageTwo />} />
            <Route path="/site/usestate" element={<UseState />} />
            <Route path="/site/usecallback" element={<UseCallback />} />
            <Route path="/site/test" element={<Test />} />
            <Route path="/site/useref" element={<UseRef />} />
            <Route path="/site/usememo" element={<UseMemo />} />
            <Route path="/site/useeffect" element={<UseEffect />} />
            <Route path="/site/usecontext" element={<UseContext />} />
            <Route path="/site/usereducer" element={<UseReducer />} />
            <Route path="/site/deb_v" element={<DebouncedValue />} />
            <Route path="/site/deb_c" element={<DebouncedCallback />} />
            <Route path="/site/html" element={<Html />} />
            <Route path="/site/css_tricks" element={<Tricks />} />
            <Route path="/site/text_typing" element={<TextTyping />} />
            <Route path="/site/checkbox" element={<Checkbox />} />
            <Route path="/site/cubes" element={<Cubes />} />
            <Route path="/site/tetrahedron" element={<Tetrahedron />} />
            <Route path="/site/cube3d" element={<Cube3D />} />
            <Route path="/site/folding" element={<FoldingCube />} />
            <Route path="/site/airplane" element={<Airplane />} />
        </Routes>
    );
}

export default MainContentRoutes;
