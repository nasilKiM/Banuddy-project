'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
import OneNationalAnimal from './OneNationalAnimal'
import { getAbandonmentPublic } from '@/app/api/adopt/national/national.api'
import type { responseAbandonedPublic } from '@/app/api/adopt/national/national.type'
import { National } from '@/store'

const NationalAnimalList: React.FC = () => {
  const [data, setData] = useAtom(National.dataAtom)
  const [page, setPage] = useAtom(National.pageAtom)

  useEffect(() => {
    // const prop = filterValue.isSubmit
    //   ? { listEnd: 28, photoEnd: 250, filter: filterValue }
    //   : { listEnd: 28, photoEnd: 250 }
    getAbandonmentPublic(page).then((res) => {
      if (res) {
        const response: responseAbandonedPublic = res
        setData(response.response.body)
      }
    })
  }, [])

  const handlePage = (n: number) => {
    setPage(n)
  }

  if (data)
    return (
      <>
        <div className="w-content m-auto mt-[50px]">
          <div>
            <div className="font-bold mb-10 text-[24px]">
              동물 공고{' '}
              <span className="text-brown-200">{data.totalCount}</span>건
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-8">
              {data.items.item.map((animal) => (
                <OneNationalAnimal animal={animal} key={Math.random() * 1000} />
              ))}
            </div>
          </div>
          {/* <Pagination
            total={data.length}
            currentPage={1}
            limit={8}
            handlePage={handlePage}
          /> */}
        </div>
      </>
    )
}

export default NationalAnimalList
