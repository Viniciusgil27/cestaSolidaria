import Footer from "./Footer";
import Header from "./Header";

export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
  semCabecalho?: boolean;
  semRodape?: boolean;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-300">
      {/* Header opcional */}
      {!props.semCabecalho && <Header />}

      {/* Main content ocupa o centro e é responsivo */}
      <main
        className={`flex-grow  p-2 rounded-lg max-w-7xl mx-auto w-full mt-5  ${
          props.className ?? ""
        }`}
      >
        {props.children}
      </main>

      {/* Footer opcional */}
      {!props.semRodape && <Footer />}
    </div>
  );
}
