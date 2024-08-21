import { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";

const DebounceThrottlePage = lazy(() => import("../page/DebounceThrottlePage"));
const Flexbox01Page = lazy(() => import("../page/Flexbox01Page"));
const FlexboxItemGrowPage = lazy(() => import("../page/FlexboxItemGrowPage"));
const FlexboxItemShrinkPage = lazy(() => import("../page/FlexboxItemShrinkPage"));
const FlexRulePage = lazy(() => import("../page/FlexRulePage"));
const ImageLazyPage = lazy(() => import("../page/ImageLazyPage"));
const RwdFlexboxCardPage = lazy(() => import("../page/RwdFlexboxCardPage"));
const ImageRatioPage = lazy(() => import("../page/ImageRatioPage"));
const CardImagePage = lazy(() => import("../page/cardImage/CardImagePage"));
const SuspenseImgPage = lazy(() => import("../page/suspense/SuspenseImgPage"));
const UseLayoutEffectPage = lazy(() => import("../page/useLayoutEffect/UseLayoutEffectPage"));
const MemoPage = lazy(() => import("../page/optimization/MemoPage"));
const CallbackPage = lazy(() => import("../page/optimization/CallbackPage"));
const ObjectFitImagePage = lazy(() => import("../page/objectFitImage/ObjectFitImagePage"));
const HocPage = lazy(() => import("../page/hoc/HocPage"));
const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/debounce-throttle", element: <DebounceThrottlePage /> },
    { path: "/flexbox-01", element: <Flexbox01Page /> },
    { path: "/flexbox-item-grow", element: <FlexboxItemGrowPage /> },
    { path: "/flexbox-item-shrink", element: <FlexboxItemShrinkPage /> },
    { path: "/flexbox-rule", element: <FlexRulePage /> },
    { path: "/image-lazy", element: <ImageLazyPage /> },
    { path: "/rwd-flexbox-card", element: <RwdFlexboxCardPage /> },
    { path: "/img-ratio", element: <ImageRatioPage /> },
    { path: "/card-image", element: <CardImagePage /> },
    { path: "/suspense-image", element: <SuspenseImgPage /> },
    { path: "/useLayoutEffect", element: <UseLayoutEffectPage /> },
    { path: "/memo", element: <MemoPage /> },
    { path: "/useCallback", element: <CallbackPage /> },
    { path: "/object-fit-image", element: <ObjectFitImagePage /> },
    { path: "/hoc", element: <HocPage /> },
]);

const Routes = () => {
    return (
        <Suspense fallback={<div className='text-2xl text-red-500'>Page Level Loading ...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default Routes;
