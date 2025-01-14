import { Button, Checkbox, Input } from '@nextui-org/react'
import './Formulary.scss'
import { Markdown } from '@firecms/ui'
import { FormEvent, useRef, useState } from 'react'
export default function Formulary(_: {
    headline1: string,
    steps: string[],
    headline2: string,
    button: string,
}) {
    const { button, headline1, headline2, steps } = _
    const formRef = useRef<HTMLFormElement>(null)
    const [isAccept, setIsAccept] = useState(false)

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        if (isAccept) {
          const formData = new FormData(formRef.current!)
          let complete = true
          formData.forEach((v) => {
            if (v === undefined) {
              complete = false
            }
          })
          if (complete) {
            formData.append("Accepted", `${isAccept}`)
            formData.forEach((v, k) => { console.log(`${k}: ${v}`) })
            fetch("https://script.google.com/macros/s/AKfycbwt4r-QmUbWJ6KhXNlOdh649340QAeM0YCAdFEBYnHmA_Cs_g53_vF4MFxRwixtgyvq/exec",
              { method: "POST", body: formData, mode: "no-cors" }
            ).then((value) => { console.log(value) })
            alert("Muchas gracias, nos pondremos en contacto")
          }
        } else {
          alert("Aceptar los terminos y condiciones")
        }
      }
    return (
        <div className='formulary' id='formulary'>
            <div className="instructive">
                <h1><Markdown source={headline1} /></h1>
                {
                    steps.map((e, i) => {
                        return (
                            <h2 key={`step-${i}`}><span>{i + 1}</span>{e}</h2>
                        )
                    })
                }
            </div>
            <form ref={formRef} onSubmit={(e)=>submitHandler(e)} className="formulary-box">
                <h1>{headline2}</h1>
                <div className="formulary-inputs">
                    <div className='form-col1'>
                        <Input name='Name' label="Nombre completo" variant='underlined'></Input>
                        <Input name='Whatsapp' label="Whatsapp o celular" variant='underlined'></Input>
                    </div>
                    <div className="form-col2">
                        <Input name='Email' label="Correo Electrónico" type='email' variant='underlined'></Input>
                        <Input name='Description' label="Prendas a entallar" variant='underlined'></Input>
                    </div>
                </div>
                <Checkbox required isSelected={isAccept} onValueChange={setIsAccept}>Acepto los Terminos y Condiciones</Checkbox>
                <Button color='primary' radius='full' size='lg' type='submit'>{button}</Button>
            </form>
            
        </div>
    )
}
//<img className='carreteImg' src="https://img.freepik.com/vector-premium/carretes-hilos_202271-2468.jpg" alt="imagen bordado" />