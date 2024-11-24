import clsx from 'clsx'

export default function ContainerLayout({children, className}){
    return <div className={clsx("w-[900px] mx-auto box-border", className)}>{children}</div>
}