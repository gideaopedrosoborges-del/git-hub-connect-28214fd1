import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Target, ShieldCheck, Globe, Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const partners = [
    {
      name: "Marcos",
      role: "Estrategista Digital e Fundador",
      image: "/eu.png",
      description: "Estrategista Digital e fundador da Takkeoff Digital. Especialista em arquitetura de funis de conversão e inteligência de vendas.",
    },
    {
      name: "Gideão",
      role: "Growth & Performance",
      image: "/gide.png",
      description: "Especialista em Growth e Performance. Background na Papapá (maior empresa de alimentos para bebês da América Latina) e Conquer. Mais de R$ 15 milhões em faturamento gerados.",
    },
    {
      name: "Guilherme",
      role: "Direção Comercial",
      image: "/GUI.png",
      description: "Diretor Comercial com mais de 15 anos de experiência e background na Conquer. Responsável direto por gerar mais de R$ 20 milhões em vendas de alto valor.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[#2bffa0] selection:text-black font-sans overflow-x-hidden">
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/NOVOFLOWBRANCO.png" alt="Novo Flow" className="object-contain h-[45px]" />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#fundadores" className="text-xs font-bold uppercase tracking-widest hover:text-[#2bffa0] transition-colors">Fundadores</a>
            <Link to="/manifesto" className="text-xs font-bold uppercase tracking-widest hover:text-[#2bffa0] transition-colors">Manifesto</Link>
            <a href="https://form.respondi.app/lDg0Bifo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#2bffa0] transition-colors">
              Aplicar para Consultoria <ArrowRight size={14} />
            </a>
          </div>

          <button className="md:hidden text-foreground hover:text-[#2bffa0] transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 px-6 py-6 flex flex-col gap-6 shadow-xl">
            <a href="#fundadores" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest hover:text-[#2bffa0] transition-colors">Fundadores</a>
            <Link to="/manifesto" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest hover:text-[#2bffa0] transition-colors">Manifesto</Link>
            <a href="https://form.respondi.app/lDg0Bifo" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#2bffa0] transition-colors">
              Aplicar para Consultoria <ArrowRight size={16} />
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#2bffa0]/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter animate-fade-in bg-gradient-to-r from-white via-green-200 to-[#2bffa0] bg-clip-text text-transparent pb-2">
            Instalar uma Máquina de <br />
            <span className="italic">Performance.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-medium animate-fade-in animate-delay-200">
            Escalamos operações com inteligência de dados e processos de elite.
          </p>
          <div className="flex justify-center pt-8 animate-fade-in-up animate-delay-400">
            <Button asChild className="h-16 px-10 bg-[#2bffa0] hover:bg-[#2bffa0]/90 text-black font-black uppercase tracking-widest text-lg rounded-none group transition-all duration-300 hover:scale-105">
              <a href="https://form.respondi.app/lDg0Bifo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Ativar Minha Máquina
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners / Specialists */}
      <section id="fundadores" className="py-32 px-6 bg-zinc-950/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter bg-gradient-to-r from-white via-green-200 to-[#2bffa0] bg-clip-text text-transparent pb-2">
              Arquitetos de <span className="underline decoration-4 underline-offset-8 decoration-[#2bffa0]">Elite.</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold">Estrategistas vindos de grandes operações de escala.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="bg-black border-white/5 rounded-none overflow-hidden group hover:border-[#2bffa0]/50 transition-colors duration-500">
                <CardContent className="p-0 relative aspect-square md:aspect-[4/5]">
                  <img src={partner.image} alt={partner.name} className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-0 p-8 w-full space-y-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <p className="text-[#2bffa0] font-black uppercase tracking-[0.2em] text-[10px]">{partner.role}</p>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">{partner.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {partner.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 px-6 max-w-3xl mx-auto grid grid-cols-1 gap-20 items-center">
        <div className="space-y-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter bg-gradient-to-r from-white via-green-200 to-[#2bffa0] bg-clip-text text-transparent pb-2">
            A Implantação que <span className="text-[#2bffa0]">Gera Tração.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enquanto outros focam em &quot;branding contemplativo&quot;, nós instalamos infraestrutura de venda.
            Não é sobre ser visto, é sobre ser inescapável para o seu público ideal. O processo é focado em Posicionamento Local e Google Meu Negócio nos primeiros 30 dias.
          </p>
          <div className="space-y-4 text-left">
            <div className="flex gap-4 p-5 bg-zinc-900/50 border-l-2 border-[#2bffa0] hover:border-l-4 transition-all">
              <ShieldCheck className="text-[#2bffa0] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest">Semana 1: Estrutura de Autoridade</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Inteligência Local &amp; Configuração de Base.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-zinc-900/50 border-l-2 border-[#2bffa0] hover:border-l-4 transition-all">
              <Globe className="text-[#2bffa0] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest">Semana 2: Reputação e Presença</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Prova Social &amp; Otimização da Casa Digital.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-zinc-900/50 border-l-2 border-[#2bffa0] hover:border-l-4 transition-all">
              <Zap className="text-[#2bffa0] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest">Semana 3: Engajamento e Tração</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Manutenção Ativa &amp; Construção de Desejo.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-zinc-900/50 border-l-2 border-[#2bffa0] hover:border-l-4 transition-all">
              <Target className="text-[#2bffa0] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest">Semana 4: Performance Final</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Máxima Conversão &amp; Análise de Resultados.</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-[#2bffa0]/10 border border-[#2bffa0]/20 rounded-sm">
              <p className="text-xs text-[#2bffa0] font-bold uppercase tracking-widest text-center">
                Após 30 dias: 3 meses de Manutenção + Tráfego com foco em ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-[#2bffa0] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none">
            Pare de jogar <br /> <span className="text-black italic">DINHEIRO</span> fora.
          </h2>
          <p className="text-black text-lg md:text-xl font-bold uppercase tracking-widest max-w-2xl mx-auto">
            Se você fatura em média R$ 10k e R$ 50k/mês, o Novo Flow é o seu próximo degrau.
          </p>
          <Button asChild className="h-24 px-16 bg-black hover:bg-zinc-900 text-white font-black uppercase tracking-widest text-2xl rounded-none shadow-[20px_20px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none transition-all duration-300">
            <a href="https://form.respondi.app/lDg0Bifo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              Ativar Minha Máquina
              <ArrowRight size={28} />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-start gap-12 md:gap-8">
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <img src="/NOVOFLOWBRANCO.png" alt="Novo Flow" className="object-contain h-[38px]" />
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-medium leading-loose">
              Copyright © 2026 Novo Flow Performance.<br />
              Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 w-full md:w-auto text-center md:text-left">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Navegação</span>
              <a href="#fundadores" className="text-xs font-bold uppercase tracking-widest hover:text-[#2bffa0] text-white transition-colors">Os Fundadores</a>
              <Link to="/manifesto" className="text-xs font-bold uppercase tracking-widest hover:text-[#2bffa0] text-white transition-colors">Nosso Manifesto</Link>
              <a href="https://www.instagram.com/novoflowdigital" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-[#2bffa0] text-white transition-colors">Instagram</a>
              <a href="https://share.google/pLLiKYJLPaw2vygw1" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-[#2bffa0] text-white transition-colors">Google</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Programas</span>
              <a href="https://form.respondi.app/lDg0Bifo" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-[#2bffa0] text-white transition-colors">
                Ativar Minha Máquina
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Contato</span>
              <a href="https://wa.me/5541984370981" target="_blank" rel="noopener noreferrer" className="text-sm font-black hover:text-[#2bffa0] text-white transition-colors">
                (41) 98437-0981
              </a>
              <a href="https://share.google/pLLiKYJLPaw2vygw1" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-tight text-white mt-2 px-3 py-1.5 rounded transition-all duration-200 hover:bg-[#2bffa0] hover:text-white">
                Curitiba / PR - Brasil
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/5541984370981" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.479-1.639-1.653-1.936-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </main>
  );
}