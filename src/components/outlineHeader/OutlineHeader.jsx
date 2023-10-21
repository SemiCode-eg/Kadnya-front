import { DotsThree, Stack } from '@phosphor-icons/react';
import imageSquare from '../../assets/images/courses/ImageSquare.png';
import MainButton from '../MainButton/MainButton';

function OutlineHeader() {
  return (
    <div className="mb-2 flex gap-5 flex-col lg:flex-row">
      <div className="flex justify-between gap-[35px] flex-1 flex-col lg:flex-row flex-wrap">
        <div className="flex items-center gap-[20px]">
          <img
            src={imageSquare}
            alt="course image"
            className="w-full max-w-[94px] h-auto bg-white rounded-[10px] border-[1.5px] border-neutral-400 shadow-1"
          />

          <p className="text-gray-950 capitalize text-[20px]">name</p>
        </div>
        <div className="flex items-center gap-[20px] flex-1 justify-end">
          <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center border-[1px] border-black/10 cursor-pointer">
            <DotsThree size={40} weight="bold" />
          </div>
          <MainButton
            text="Add Content"
            icon={
              <>
                <Stack size={30} weight="fill" />
              </>
            }
            reverse={true}
            className="text-white bg-sky-950 hover:bg-teal-200 hover:text-sky-950"
          />
        </div>
      </div>
    </div>
  );
}

export default OutlineHeader;
