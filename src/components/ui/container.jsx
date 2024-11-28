import clsx from 'clsx'

export default function ContainerLayout({children, className}){
    return <div className={clsx("lg:w-[900px] sm:w-full mx-auto box-border", className)}>{children}</div>
}