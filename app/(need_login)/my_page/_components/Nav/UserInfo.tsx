'use client'

import Image from 'next/image'
import ProfileImage from './ProfileImage'
import editIcon from '/public/icons/pencil.svg'
import { useState } from 'react'
import EditMode from './EditMode'

interface userProps {
  nickname: string
  description: string
}

const UserInfo: React.FC<userProps> = ({ nickname, description }) => {
  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <>
      <li className="mb-[50px]">
        <ProfileImage />
        {isEditMode ? (
          <EditMode setIsEditMode={setIsEditMode} />
        ) : (
          <>
            <div className="flex justify-center">
              <div className="text-[25px] font-bold mr-[5px]">{nickname}</div>
              <div className="pt-[8px]">
                <button
                  className="w-[25px] h-[25px] border-[1px] border-black rounded-full p-[2px]"
                  onClick={() => setIsEditMode(true)}
                >
                  <Image src={editIcon} alt="edit" />
                </button>
              </div>
            </div>
            <div className="w-[140px] m-center">{description}</div>
          </>
        )}
      </li>
    </>
  )
}

export default UserInfo
