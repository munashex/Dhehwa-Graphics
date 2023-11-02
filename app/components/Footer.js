import Link from 'next/link' 


const Footer = () => {

    const footerlinks = [
        {name: 'graphic design & branding', url: '/graphic-design'},
        {name: 'printing', url: '/printing'},
        {name: 'about', url: '/about'},
        {name: 'our work', url: '/work'}
    ]

  

    return (
       <footer className="bg-zinc-600 text-white p-9"> 

        <div className="flex flex-col gap-y-3 text-lg">
         {footerlinks.map((item) => (
            <Link href={item.url}>{item.name}</Link>
         ))}
        </div>

        <h1 className="text-center mt-6">Copyright © 2019-2023 Dhehwa graphics - All Rights Reserved</h1>

       </footer>
    )
}

export default Footer 