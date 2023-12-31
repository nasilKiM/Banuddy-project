'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useSearchParams } from 'next/navigation'
import PersonalInfoSection from './_components/PersonalInfoSection'
import VolunteerInfoSection from './_components/VolunteerInfoSection'
import '../style.css'

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요'),
  phoneNumber: yup.string().required('휴대폰번호를 입력해주세요'),
  emergencyContact: yup.string().required('비상연락처를 입력해주세요'),
  age: yup.string().required('나이를 입력해주세요'),
  isFemale: yup.boolean().oneOf([true], '성별을 선택해주세요'),
  address: yup.string().required('집주소를 입력하세요'),
  applicants: yup.string().required('희망 참가 인원을 입력해주세요'),
  shelterName: yup.string().required('보호소명을 입력해주세요'),
  shelterContact: yup.string().required('보호소 연락처를 입력해주세요'),
  desiredDate: yup.date().required('희망일자를 선택해주세요'),
  consentText: yup
    .string()
    .required('개인정보 수집 및 이용에 대한 동의를 입력하세요'),
  consentCheckbox: yup.boolean().oneOf([true], '동의해야 합니다'),
})

export interface ApplicationFormData {
  name: string
  phoneNumber: string
  emergencyContact: string
  age: string
  isFemale: boolean
  address: string
  applicants: number
  shelterName: string
  shelterContact: string
  desiredDate: Date | null
  consentText: string
  consentCheckbox: boolean
}

const ApplicationFormPage: React.FC = () => {
  const searchParams = useSearchParams()
  const shelterName = searchParams.get('shelterName')
  const shelterContact = searchParams.get('shelterContact')

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      shelterName: shelterName || '',
      shelterContact: shelterContact || '',
    },
  })

  const onSubmit: SubmitHandler<ApplicationFormData> = (data, e) => {
    e?.preventDefault()
    console.log(data)
  }

  return (
    <div className="w-content m-auto bg-[#eaebf0] pb-20">
      <div>
        <img src="/images/formHeader.png" />
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-xl font-bold mb-2 pb-[5px] pt-[10px]">봉사 신청</h2>
        <p className="pb-[40px]">
          도움의 손길이 필요한 곳에 따뜻한 나눔을 전해보아요!
        </p>
      </div>
      <div className="flex flex-col text-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <PersonalInfoSection control={control} errors={errors} />
          <VolunteerInfoSection control={control} errors={errors} />
          <div className="flex flex-col text-center mt-[50px] mb-[30px] text-sm">
            저희 페이지는 직접 보호소에 봉사 신청을 연결하지 않으며, 입력하신
            개인정보는 저장되지 않습니다. <br /> 봉사활동에 관심이 있으신 분들은
            위의 연락처를 통해 각 보호소의 웹사이트나 연락처로 직접 문의하시기
            바랍니다. <br /> 유기동물에 관심을 가지고 소중한 시간을 내어주신
            여러분들께 감사드립니다.
          </div>
          <button
            className="submit-btn"
            type="submit"
            style={{ display: 'block', margin: '0 auto' }}
          >
            신청하기
          </button>
        </form>
      </div>
    </div>
  )
}

export default ApplicationFormPage
