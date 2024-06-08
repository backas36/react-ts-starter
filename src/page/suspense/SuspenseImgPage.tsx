import { Suspense } from "react";

import SuspenseImage from "@/components/SuspenseImage";

const data = [
    { id: 1, src: "https://picsum.photos/id/684/800/600" },
    { id: 2, src: "https://picsum.photos/id/681/800/600" },
    //{ id: 3, src: "https://picsum.photos/id/682/800/600" },
    //{ id: 4, src: "https://picsum.photos/id/683/800/600" },
    //{ id: 5, src: "https://picsum.photos/id/685/800/600" },
    //{ id: 6, src: "https://picsum.photos/id/686/800/600" },
    //{ id: 7, src: "https://picsum.photos/id/687/800/600" },
    //{ id: 8, src: "https://picsum.photos/id/688/800/600" },
    //{ id: 9, src: "https://picsum.photos/id/689/800/600" },
    //{ id: 10, src: "https://picsum.photos/id/694/800/600" },
];

// TODO: 解決照片一行一行載入問題
const ImagePlaceholder = () => {
    return (
        <div className='aspect-square w-full rounded-md border border-blue-300 p-4 shadow'>
            <div className='flex h-full animate-pulse  flex-col justify-stretch'>
                <div className='h-[30%] w-[30%] self-center rounded-full bg-slate-400'></div>
                <div className='mt-2 inline-flex flex-1 flex-col justify-between'>
                    <div className='h-4 rounded bg-slate-400'></div>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='col-span-2 h-4 rounded bg-slate-400'></div>
                        <div className='col-span-1 h-4 rounded bg-slate-400'></div>
                    </div>
                    <div className='h-[70%] rounded bg-slate-400 '></div>
                </div>
            </div>
        </div>
    );
};
const SuspenseImgPage = () => {
    return (
        <Suspense fallback={<div>Container Loading....</div>}>
            <div className='mt-5 flex flex-wrap gap-4 px-5'>
                {data?.map((item) => {
                    return (
                        <div
                            className='mb-4 flex w-[32%] flex-col items-center rounded border-[1px] border-slate-500 p-4'
                            key={item.id}
                        >
                            <figure className='w-3/4'>
                                <Suspense fallback={<ImagePlaceholder />}>
                                    <SuspenseImage
                                        className='aspect-square rounded object-cover object-center'
                                        src={item.src}
                                    />
                                </Suspense>
                            </figure>
                            <div className='mt-4 text-center'>
                                <div className='text-xl font-bold'>Suspense Image</div>
                                <p className='cardDesc'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus ad esse
                                    consequuntur, facere ex.
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Suspense>
    );
};
export default SuspenseImgPage;
