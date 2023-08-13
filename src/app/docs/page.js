'use client';

// test component
import BorderedButton from '@/components/atoms/BorderedButton';
import ArrowButton from '@/components/atoms/ArrowButton';
import FillButton from '@/components/atoms/FillButton';
import HeroIcon from '@/components/atoms/HeroIcon';

const Docs = () => {
    return (
        <div className='bg-secondary-1 flex h-screen w-screen flex-col items-center justify-center gap-10 '>
            <div className='flex flex-col items-center justify-center rounded-rad-5 bg-white p-5 shadow-high'>
                <h1 className='pb-3 font-bold'>Arrow Button</h1>
                <div className='flex gap-10 '>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <p>Left</p>
                        <ArrowButton directionIcon={'left'} widthIcon={20} heightIcon={20} />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <p>Right</p>
                        <ArrowButton directionIcon={'right'} widthIcon={20} heightIcon={20} />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <p>Top</p>
                        <ArrowButton directionIcon={'top'} widthIcon={20} heightIcon={20} />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <p>Bottom</p>
                        <ArrowButton directionIcon={'bottom'} widthIcon={20} heightIcon={20} />
                    </div>
                </div>
            </div>
            <div className='flex gap-5'>
                <FillButton>test</FillButton>
                <BorderedButton theme='light'>test</BorderedButton>
                <BorderedButton theme='dark'>test</BorderedButton>
            </div>

            <div>
                <HeroIcon alt='icons' imgUrl='/images/voice-icon.svg' height={100} width={100} />
            </div>
        </div>
    );
};

export default Docs;
