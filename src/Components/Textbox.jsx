import React  from 'react'


const Textbox = ({ fontBold, fontItalic, fontUnderline ,fontStyle,fontSize,transformFont, textColor,TextAreaField,textAlign,inputField}) => {

   


    return (
        <textarea placeholder='Start Typing...' onChange={(e)=>inputField(e.target.value)} style={{color:textColor,fontFamily:fontStyle,fontSize:fontSize,textTransform:transformFont , textAlign:textAlign}} ref={TextAreaField}  className={`${fontBold ? "font-bold" : ""} ${fontItalic ? "italic" : ""} ${fontUnderline ? "underline" : "" } h-56 lg:h-96 placeholder:italic w-full  focus:outline-none p-4`}>
                
        </textarea>
        
    )
}

export default Textbox