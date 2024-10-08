'use client'


import template from "@/app/(data)/Template";
import TemplateCard from "./TemplateCard";
import { useStyleRegistry } from "styled-jsx";
import { useEffect, useState } from "react";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateSection = ({ userSearchInput }: any) => {
  const [templateList, setTemplateList] = useState(template)

  useEffect(()=>{

    if(userSearchInput){
      const filterData = template.filter((item: TEMPLATE) => item.name.toLowerCase().includes(userSearchInput.toLowerCase()))

      setTemplateList(filterData)
    }else{
      setTemplateList(template)
    }

  }, [userSearchInput])


  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  p-6 ">
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard {...item} />
      ))}
    </div>
  );
};

export default TemplateSection;
