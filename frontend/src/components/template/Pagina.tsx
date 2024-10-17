import Footer from "./Footer";
import Header from "./Header";

export interface PaginaProps {
    children: any
    className?: string
    semCabecalho?: boolean
    semRodape?: boolean
}


export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col h-screen w-screen bg-green-700">
            {/* Header ocupa o topo */}
            <Header />
            
            {/* Main content ocupa o centro com flex-grow para preencher o restante da tela */}
            <main className={`bg-pink-400 p-5 rounded-lg mx-auto my-auto container ${props.className ?? ''}`}>
                {props.children}
            </main>
    
            {/* Footer só aparece se "semRodape" não for passado como true */}
            {!props.semRodape && <Footer />}
        </div>  
    )
    
    
}