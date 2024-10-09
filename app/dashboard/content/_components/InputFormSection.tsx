'use client'

import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'


interface PROPS {
  selectedTemplate?: TEMPLATE
  useFormInput:any
}

const InputFormSection = ({selectedTemplate, useFormInput}:PROPS) => {
  const [formData, setFormData] = useState<any>()

  const handleInputChange = (e:any)=>{
    const {name, value} =e.target;
    setFormData({...formData, [name]: value})

  }

  const onSubmit = (e:any)=>{
    e.preventDefault();
    // console.log(formData)
    useFormInput(formData)
  }


  return (
    <div className='p-5 shadow-md border rounded-lg'>
      {/* @ts-ignore */}
      <Image  
      src={selectedTemplate?.icon}
      alt='icon'
      width={50}
      height={50} 
      />
      <h2 className='font-bold mb-2 tracking-wide text-xl'>{selectedTemplate?.name}</h2>
      <p className='text-sm text-gray-500 dark:text-white'>{selectedTemplate?.desc}</p>

      <form className='mt-6' onSubmit={onSubmit}>

        
          {selectedTemplate?.form?.map((item, index)=>(
            <div className='my-2 flex flex-col gap-2 mb-7'>
                <Label className="font-bold">{item.label}</Label>
                {item.field == 'input' ?
                <Input name={item.name} required={item?.required} onChange={handleInputChange} />
                :
                item.field == 'textarea'?
                <Textarea   name={item.name} required={item?.required} onChange={handleInputChange} />:null  
              }
            </div>
          ))}

          <Button type='submit' className='w-full py-6 font-light tracking-wide'>
            Generate Content
          </Button>
      




      </form>
            


    </div>
  )
}

export default InputFormSection