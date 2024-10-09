'use client'

import React from 'react'
import Template from '@/app/(data)/Template'
import InputFormSection from '../_components/InputFormSection'
import OutputFormSection from '../_components/OutputFormSection'
import { TEMPLATE } from '../../_components/TemplateSection'

interface PROPS{
  params:{
    'template-slug':string
  }
}


const CreateNewContent = (props:PROPS) => {

  const selectedTemplate:TEMPLATE| undefined = Template.find((item)=> item.slug ==props.params['template-slug'] )

  const GenerateAiContent = (formData:any)=>{

  }


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5  p-5'>
        <InputFormSection  selectedTemplate={selectedTemplate} useFormInput={(value:any)=> GenerateAiContent(value)} />

        <div className='col-span-2'>

        <OutputFormSection/>
        </div>

    </div>
  )
}

export default CreateNewContent