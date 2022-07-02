import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Parallax = React.lazy(() => import('../pages/animations/Parallax/Parallax'));
const Scene3D = React.lazy(() => import('../pages/animations/Scene3D/Scene3D'));
const Checkbox2 = React.lazy(() => import('../pages/css/UI/Checkbox2/Checkbox2'));
const Navbar = React.lazy(() => import('../pages/css/UI/Navbar/Navbar'));
const Triangle = React.lazy(() => import('../pages/css/UI/Triangle/Triangle'));
const Gallery3D = React.lazy(() => import('../pages/animations/Gallery3D/Gallery3D'));
const Text3D = React.lazy(() => import('../pages/animations/Text3D/Text3D'));
const Menu3D = React.lazy(() => import('../pages/css/UI/Menu3D/Menu3D'));
const Scroll = React.lazy(() => import('../pages/react/Scroll/Scroll'));
const Redux = React.lazy(() => import('../pages/react/Redux/Redux'));
const ReduxSaga = React.lazy(() => import('../pages/react/ReduxSaga/ReduxSaga'));
const Hooks = React.lazy(() => import('../pages/react/TypeScript/Hooks'));
const Events = React.lazy(() => import('../pages/react/TypeScript/Events'));
const Props = React.lazy(() => import('../pages/react/TypeScript/Props'));
const TypeScript = React.lazy(() => import('../pages/react/TypeScript/TypeScript'));
const UseTransition = React.lazy(() => import('../pages/react/hooks/useTransition/UseTransition'));
const ReduxThunk = React.lazy(() => import('../pages/react/ReduxThunk/components/ReduxThunk'));
const TodoList = React.lazy(() => import('../pages/react/ReduxThunk/components/TodoList'));
const UserList = React.lazy(() => import('../pages/react/ReduxThunk/components/UserList'));
const Water = React.lazy(() => import('../pages/animations/Water/Water'));
const Creative = React.lazy(() => import('../pages/animations/Creative/Creative'));
const Airplane = React.lazy(() => import('../pages/animations/Airplane/Airplane'));
const FoldingCube = React.lazy(() => import('../pages/animations/FoldingCube/FoldingCube'));
const Cube3D = React.lazy(() => import('../pages/animations/Cube3D/Cube3D'));
const Tetrahedron = React.lazy(() => import('../pages/animations/Tetrahedron/Tetrahedron'));
const Cubes = React.lazy(() => import('../pages/animations/Cubes/Cubes'));
const Checkbox = React.lazy(() => import('../pages/css/UI/Checkbox/Checkbox'));
const TextTyping = React.lazy(() => import('../pages/animations/TextTyping/TextTyping'));
const UseReducer = React.lazy(() => import('../pages/react/hooks/useReducer/UseReducer'));
const UseMemo = React.lazy(() => import('../pages/react/hooks/useMemo/UseMemo'));
const Tricks = React.lazy(() => import('../pages/css/Tricks/Tricks'));
const Html = React.lazy(() => import('../pages/html/Html'));
const DebouncedValue = React.lazy(() => import('../pages/react/DebouncedValue/DebouncedValue'));
const DebouncedCallback = React.lazy(() => import('../pages/react/DebouncedCallback/DebouncedCallback'));
const UseCallback = React.lazy(() => import('../pages/react/hooks/useCallback/UseCallback'));
const UseState = React.lazy(() => import('../pages/react/hooks/useState/UseState'))
const UseRef = React.lazy(() => import('../pages/react/hooks/useRef/UseRef'))
const UseEffect = React.lazy(() => import('../pages/react/hooks/useEffect/UseEffect'))
const UseContext = React.lazy(() => import('../pages/react/hooks/useContext/UseContext'))
const Test = React.lazy(() => import('../pages/Test/Test'))

const MainContentRoutes = () => {
    return (
        <Routes>
            <Route path="/site" element={<div>Home</div>} />
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
            <Route path="/site/creative" element={<Creative />} />
            <Route path="/site/water" element={<Water />} />
            <Route path="/site/redux/" element={<Redux />} />
            <Route path="/site/reduxthunk/" element={<ReduxThunk />}>
                <Route path="users" element={<UserList />} />
                <Route path="todos" element={<TodoList />} />
            </Route>
            <Route path="/site/saga" element={<ReduxSaga />} />
            <Route path="/site/ts/" element={<TypeScript />}>
                <Route path="props" element={<Props />} />
                <Route path="events" element={<Events />} />
                <Route path="hooks" element={<Hooks />} />
            </Route>
            <Route path="/site/usetransition" element={<UseTransition />} />
            <Route path="/site/scroll" element={<Scroll />} />
            <Route path="/site/text3d" element={<Text3D />} />
            <Route path="/site/menu3d" element={<Menu3D />} />
            <Route path="/site/gallery3D" element={<Gallery3D />} />
            <Route path="/site/triangle" element={<Triangle />} />
            <Route path="/site/navbar" element={<Navbar />} />
            <Route path="/site/checkbox2" element={<Checkbox2 />} />
            <Route path="/site/scene3D" element={<Scene3D />} />
            <Route path="/site/parallax" element={<Parallax />} />
        </Routes>
    );
}

export default MainContentRoutes;
