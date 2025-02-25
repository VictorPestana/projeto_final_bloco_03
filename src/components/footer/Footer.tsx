import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode } from 'react'

function Footer() {

    let data = new Date().getFullYear()

		return (
            <div className="flex justify-center bg-black text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Farmácia Victor Pestana | Copyright: {data}</p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/victorgpestana/" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="#" target="_blank">
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        )

    }

export default Footer
