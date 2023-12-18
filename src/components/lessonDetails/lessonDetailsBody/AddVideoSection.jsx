import { EyeClosed, Link, VideoCamera } from '@phosphor-icons/react'
import MainButton from '../../mainButton/MainButton'
import LessonDetailsLinkCard from '../lessonDetailsLinkCard/LessonDetailsLinkCard'
import { useState } from 'react'

function AddVideoSection() {
  const [isVideo, setIsVideo] = useState(false)

  return (
    <>
      <div className="flex flex-col gap-[7px] items-start w-full">
        <p className="text-sky-950 font-[600] text-lg tracking-[-0.25px]">
          Media
        </p>
        <div className="flex items-end gap-4 flex-wrap">
          <MainButton
            icon={<EyeClosed size={30} />}
            text="None"
            isPrimary={false}
            isForm={!isVideo}
            className={
              isVideo
                ? 'border-[1.5px] border-neutral-400/75 rounded-[5px]'
                : null
            }
            handleClick={() => setIsVideo(false)}
          />
          <MainButton
            icon={<VideoCamera size={30} weight="fill" />}
            text="Video"
            isPrimary={false}
            isForm={isVideo}
            className={
              !isVideo
                ? 'border-[1.5px] border-neutral-400/75 rounded-[5px]'
                : null
            }
            handleClick={() => setIsVideo(true)}
          />
        </div>
      </div>
      {isVideo ? (
        <LessonDetailsLinkCard
          text="add link"
          icon={<Link size={30} className="text-neutral-400" />}
        />
      ) : (
        <div className="my-[120px] lg:block hidden" />
      )}{' '}
    </>
  )
}

export default AddVideoSection
