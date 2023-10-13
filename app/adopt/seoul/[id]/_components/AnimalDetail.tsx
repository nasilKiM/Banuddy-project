import { useAtom } from 'jotai'
import AnimalVideo from './AnimalVideo'
import { animalAtom } from '../../_components/OneSeoulAnimal'
import { mergedItem } from '../../_components/SeoulAnimalList'
import { colorMatch } from '@/constants/colorMatch'
import { stringToHTML } from '@/lib/stringToHtml'

interface animalProps {
  type: 'cat' | 'dog' | 'others'
}

const AnimalDetail: React.FC<animalProps> = ({ type }) => {
  const [targetAnimal] = useAtom(animalAtom)

  if (targetAnimal) {
    const target = targetAnimal as mergedItem
    const { SPCS, INTRCN_CN } = target.list

    console.log(stringToHTML(INTRCN_CN))

    const dynamicClassName = `border-t-4 border-b-4 border-primary-300 bg-primary-100`

    return (
      <div className={dynamicClassName}>
        <div className="w-content m-center ">
          {/* <AnimalVideo /> */}
          <div className="text-center m-[50px] leading-[3rem]">
            {stringToHTML(INTRCN_CN)}
          </div>
        </div>
      </div>
    )
  }
}

export default AnimalDetail