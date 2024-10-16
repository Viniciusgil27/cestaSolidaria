import Footer from "./Footer";
import Header from "./Header";

export interface PaginaProps {
    children: any
    className?: string
    semCabecalho?: boolean
    semRodape?: boolean
}


export default function Pagina(props: PaginaProps) {
    return (<div
        className="flex flex-col min-h-screen bg-[#F7F6F9]"
    >
        <div
            className="flex-1 flex flex-col w-screen"
            style={{ background: 'url("/background.png")' }}
        >
            <Header />
            <main className={`flex-1 flex flex-col ${props.className ?? ''}`}>
                {props.children}
            </main>
            {!props.semRodape && <Footer />}
        </div>
    </div>
    )
}