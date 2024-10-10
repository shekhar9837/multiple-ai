'use client'

import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import '../../../../theme/dark.css'

import { Editor } from '@toast-ui/react-editor';

const OutputFormSection = () => {
  const editorRef:any = useRef();

  return (
    <div className='shadow-lg border  rounded-lg '>
      
      <Editor
      ref={editorRef}
    initialValue="let's do something interesting"
    // previewStyle="vertical"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=> console.log(editorRef.current.getInstance().getMarkdown())}
    
  />

    </div>
  )
}

export default OutputFormSection