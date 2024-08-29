import ImageWithSkeleton from "@/components/imgWithSkeleton/ImageWithSkeleton";

const ImageLazyLoading02Page = () => {
    return (
        <div className='mt-5 flex flex-wrap items-stretch justify-center gap-4'>
            <div className='relative min-h-[400px] w-[400px]'>
                <ImageWithSkeleton src='https://picsum.photos/seed/1724941182738/400/400' alt='Image' />
            </div>
            <div className='relative min-h-[400px] w-[400px]'>
                <ImageWithSkeleton src='' alt='Image' />
            </div>
        </div>
    );
};
export default ImageLazyLoading02Page;
