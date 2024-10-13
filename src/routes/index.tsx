import { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";

const DebounceThrottlePage = lazy(() => import("../page/DebounceThrottlePage"));
const Flexbox01Page = lazy(() => import("../page/Flexbox01Page"));
const FlexboxItemGrowPage = lazy(() => import("../page/FlexboxItemGrowPage"));
const FlexboxItemShrinkPage = lazy(() => import("../page/FlexboxItemShrinkPage"));
const FlexRulePage = lazy(() => import("../page/FlexRulePage"));
const ImageLazyPage = lazy(() => import("../page/imageLazyLoading/ImageLazyPage"));
const RwdFlexboxCardPage = lazy(() => import("../page/RwdFlexboxCardPage"));
const ImageRatioPage = lazy(() => import("../page/ImageRatioPage"));
const CardImagePage = lazy(() => import("../page/cardImage/CardImagePage"));
const SuspenseImgPage = lazy(() => import("../page/suspense/SuspenseImgPage"));
const UseLayoutEffectPage = lazy(() => import("../page/useLayoutEffect/UseLayoutEffectPage"));
const MemoPage = lazy(() => import("../page/optimization/MemoPage"));
const CallbackPage = lazy(() => import("../page/optimization/CallbackPage"));
const ObjectFitImagePage = lazy(() => import("../page/objectFitImage/ObjectFitImagePage"));
const HocPage = lazy(() => import("../page/hoc/HocPage"));
const HOCPermissionPage = lazy(() => import("../page/hoc/HOCPermissionPage"));
const ExtensibleStylePatternPage01 = lazy(() => import("../page/extensibleStylePattern/ExtensibleStylePatternPage01"));
const CompoundComponent01Page = lazy(() => import("../page/compound/CompoundComponent01Page"));
const ImageLazyLoading02Page = lazy(() => import("../page/imageLazyLoading/ImageLazyLoading02Page"));
const RenderPropsPage01 = lazy(() => import("../page/renderProps/RenderPropsPage01"));
const ForwardRefPage01 = lazy(() => import("../page/forwardRef/ForwardRefPage01"));
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
    { path: "/hoc-check-permission", element: <HOCPermissionPage /> },
    { path: "/extensible-style-pattern-01", element: <ExtensibleStylePatternPage01 /> },
    { path: "/compound-component-01", element: <CompoundComponent01Page /> },
    { path: "/image-lazy-02", element: <ImageLazyLoading02Page /> },
    { path: "/render-props-01", element: <RenderPropsPage01 /> },
    { path: "/forward-ref", element: <ForwardRefPage01 /> },
]);

const Routes = () => {
    return (
        <Suspense fallback={<div className='text-2xl text-red-500'>Page Level Loading ...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default Routes;
