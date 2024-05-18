const FlexRulePage = () => {
    return (
        <div className='my-10'>
            <h1 className='py-4 text-3xl'>Flex basis</h1>
            <p className='my-1 text-xl'>如果有設定 flex-basis, 優先度會高於 width </p>
            <p className='my-1 text-xl'>
                設為 <span className='text-red-400'>auto</span> 時，內容決定寬度
            </p>
            <p className='my-1 text-xl'>
                如果 <span className='text-red-400'>flex-direction: column</span> 時，
                <span className='text-red-400'>flex-basis</span>就不是 width，而是 height
            </p>
            <h1 className='py-4 text-3xl'>設定 flex item 寬</h1>
            <p className='my-1 text-xl'>沒有設定 width 會發生什麼事？ </p>
            <p className='my-1 text-sm'>內容決定 width </p>
            <p className='my-1 text-xl'>設定 width 會發生什麼事？ </p>
            <p className='my-1 text-sm'> width 會是 flex item 的最大寬度，如果要固定 width，就會需要 flex:wrap </p>
        </div>
    );
};
export default FlexRulePage;
