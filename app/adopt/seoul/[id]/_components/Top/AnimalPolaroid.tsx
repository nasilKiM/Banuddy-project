import Image from 'next/image'
import ImageSlide from './ImageSlide'
import Cat from '/public/icons/cat.svg'
import { useAtom } from 'jotai'
import { mergedItem } from '@/app/api/adopt/seoul/seoul.type'
import State from '@/constants/adoptState'
import { Seoul } from '@/store'

const AnimalPolaroid: React.FC = () => {
  const [targetAnimal] = useAtom(Seoul.animalAtom)

  if (targetAnimal) {
    const { NM, ADP_STTUS } = targetAnimal.list

    const dynamicClassName = `absolute top-[80px] left-[90px] w-[75px] h-[75px] bg-primary-300 rounded-full p-[10px]`
    return (
      <div className="w-[500px] border-solid border-[1px] border-gray-100 shadow relative">
        <ImageSlide />
        <div className={dynamicClassName}>
          <p className="w-[45px] ml-[5px] text-center">{State[ADP_STTUS]}</p>
        </div>
        <div className="flex mt-[140px]">
          <span>
            <Image src={Cat} alt="cat" />
          </span>
          <div className="text-[24px] ml-[30px] text-center">
            안녕하세요 저는{' '}
            <span className="text-[40px] font-bold">{NM.split('(')[0]}</span>
            입니다.
          </div>
        </div>
      </div>
    )
  } else {
    return <div>:)</div>
  }
}

export default AnimalPolaroid
