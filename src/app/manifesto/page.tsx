import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export default function ManifestoPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-primary-foreground font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para a Máquina
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
            Nosso Manifesto
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
            O Fim da Era das <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Agências de Vaidade.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Nós não vendemos tráfego. Construímos ativos de previsibilidade e lucro para negócios High-Ticket.
          </p>
        </div>
      </section>

      {/* Manifesto Body */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-24">
          
          {/* A Dor */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold tracking-tight text-white/90">
              A Ilusão do Volume
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
              <p>
                O mercado digital foi corrompido por promessas vazias e métricas de vaidade. Agências tradicionais comemoram curtidas, impressões e um volume inflado de leads desqualificados, enquanto os boletos da sua operação continuam chegando.
              </p>
              <p>
                Eles operam em modelos focados em volume sem margem. Entregam relatórios bonitos que não refletem no caixa da empresa. A verdade nua e crua é que <strong className="text-white font-medium">curtidas não pagam boletos</strong> e leads frios apenas sobrecarregam seu time comercial.
              </p>
            </div>
          </div>

          {/* A Visão */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold tracking-tight text-white/90">
              Engenharia Precisa
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
              <p>
                Vender produtos ou serviços <em className="text-white not-italic font-medium">High-Ticket</em> exige uma abordagem completamente diferente. Não se trata de pescar de rede, mas de usar um rifle de precisão. Exige engenharia, inteligência de dados e um entendimento profundo da jornada de compra de um cliente sofisticado.
              </p>
              <p>
                Nossa visão é clara: foco obsessivo em ROI verdadeiro, lucro líquido e previsibilidade de escala. Cada campanha, cada automação e cada linha de copy é projetada com um único objetivo: <strong className="text-white font-medium">gerar receita sustentável</strong>.
              </p>
            </div>
          </div>

          {/* O Compromisso */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold tracking-tight text-white/90">
              O Compromisso Novo Flow
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
              <p>
                Nosso trabalho não termina quando o lead cai no CRM. Ele termina no faturamento. Nós assumimos a responsabilidade pela qualidade do ecossistema que construímos.
              </p>
              <p>
                É por isso que estruturamos ciclos estratégicos de 4 meses. O tempo necessário para auditar, construir, validar e escalar máquinas de vendas complexas. Não acreditamos em milagres de 30 dias; acreditamos em trabalho árduo, dados e otimização contínua.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Conclusion & CTA */}
      <section className="py-32 px-6 border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            O Seu Último Destino.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Se você tem um negócio High-Ticket, possui capacidade de entrega e quer escala previsível, a <span className="text-white font-medium">Novo Flow</span> é a parceria definitiva que você estava procurando.
          </p>
          
          <div className="pt-8">
            <Link 
              href="https://form.respondi.app/lDg0Bifo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-none font-black tracking-widest transition-all transform hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(37,231,122,0.5)] group"
            >
              INICIAR DIAGNÓSTICO ESTRATÉGICO
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-6 text-sm text-zinc-500 font-medium tracking-wide uppercase">
              Aplicação confidencial • Vagas limitadas por ciclo
            </p>
          </div>
        </div>
      </section>

      {/* Global Styles for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />
    </main>
  );
}
