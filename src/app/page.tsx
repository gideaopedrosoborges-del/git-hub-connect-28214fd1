import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Target, BarChart3, ShieldCheck, Globe, Cpu } from "lucide-react"

export default function Home() {
  const partners = [
    {
      name: "Marcos",
      role: "Estrategista Digital e Fundador",
      image: "/eu.png",
      description: "Estrategista Digital e fundador da Takkeoff Digital. Especialista em arquitetura de funis de conversão e inteligência de vendas."
    },
    {
      name: "Gideão",
      role: "Growth & Performance",
      image: "/gide.png",
      description: "Especialista em Growth e Performance. Background na Papapá (maior empresa de alimentos para bebês da América Latina) e Conquer. Mais de R$ 15 milhões em faturamento gerados."
    },
    {
      name: "Guilherme",
      role: "Direção Comercial",
      image: "/GUI.png",
      description: "Diretor Comercial com mais de 15 anos de experiência. Responsável direto por gerar mais de R$ 20 milhões em vendas de alto valor."
    }
  ]

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[#2bffa0] selection:text-black font-sans overflow-x-hidden">
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/NOVOFLOWVERDE.png" alt="Novo Flow" width={180} height={45} className="object-contain" />
          </div>
          <a 
            href="https://form.respondi.app/lDg0Bifo" 
            target="_blank" 
            className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#2bffa0] transition-colors"
          >
            Aplicar para Consultoria <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#2bffa0]/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] animate-fade-in-down">
            <Cpu size={12} />
            The AI-Driven Performance Engine
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter animate-fade-in bg-gradient-to-r from-white via-green-200 to-[#2bffa0] bg-clip-text text-transparent pb-2">
            Instalar uma Máquina de <br />
            <span className="italic">Performance.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-medium animate-fade-in animate-delay-200">
            Escalamos operações High-Ticket com inteligência de dados e processos de elite. 
            <span className="text-foreground block mt-2">1 Mês de Google Meu Negócio / Casa Arrumada + 3 Meses de Tração e Escala.</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 animate-fade-in-up animate-delay-400">
            <Button asChild className="h-16 px-10 bg-[#2bffa0] hover:bg-[#2bffa0]/90 text-black font-black uppercase tracking-widest text-lg rounded-none group transition-all duration-300 hover:scale-105">
              <a href="https://form.respondi.app/lDg0Bifo" target="_blank">
                Ativar Minha Máquina
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <div className="flex items-center gap-4 text-left">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">U{i}</div>
                ))}
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-tighter text-primary">+R$ 35 Milhões</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Track Record Combinado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Specialists */}
      <section className="py-32 px-6 bg-zinc-950/50 relative overflow-hidden">
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
                <CardContent className="p-0 relative aspect-[4/5]">
                  <Image 
                    src={partner.image} 
                    alt={partner.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
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
      <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter bg-gradient-to-r from-white via-green-200 to-[#2bffa0] bg-clip-text text-transparent pb-2">
            A Implantação que <span className="text-[#2bffa0]">Gera Tração.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enquanto outros focam em "branding contemplativo", nós instalamos infraestrutura de venda. 
            Não é sobre ser visto, é sobre ser inescapável para o seu público ideal. O processo é focado em Posicionamento Local e Google Meu Negócio nos primeiros 30 dias.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-zinc-900/50 border-l-2 border-[#2bffa0] hover:border-l-4 transition-all">
              <ShieldCheck className="text-[#2bffa0] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest">Semana 1: Estrutura de Autoridade</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Inteligência Local & Configuração de Base.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-zinc-900/50 border-l-2 border-[#2bffa0] hover:border-l-4 transition-all">
              <Globe className="text-[#2bffa0] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest">Semana 2: Reputação e Presença</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Prova Social & Otimização da Casa Digital.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-zinc-900/50 border-l-2 border-[#2bffa0] hover:border-l-4 transition-all">
              <Zap className="text-[#2bffa0] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest">Semana 3: Engajamento e Tração</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Manutenção Ativa & Construção de Desejo.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-zinc-900/50 border-l-2 border-[#2bffa0] hover:border-l-4 transition-all">
              <Target className="text-[#2bffa0] shrink-0" />
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest">Semana 4: Performance Final</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Máxima Conversão & Análise de Resultados.</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-[#2bffa0]/10 border border-[#2bffa0]/20 rounded-sm">
              <p className="text-xs text-[#2bffa0] font-bold uppercase tracking-widest text-center">
                Após 30 dias: 3 meses de Manutenção + Tráfego com foco em ROI.
              </p>
            </div>
          </div>
        </div>

        <div className="relative aspect-square bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="relative z-10 text-center space-y-4">
             <div className="text-8xl font-black text-[#2bffa0]/20 italic select-none">DATA</div>
             <BarChart3 size={80} className="mx-auto text-primary animate-bounce" />
             <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Optimized in Real-Time</div>
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
            Se você fatura mais de R$ 50k/mês, o Novo Flow é o seu próximo degrau.
          </p>
          <Button asChild className="h-24 px-16 bg-black hover:bg-zinc-900 text-white font-black uppercase tracking-widest text-2xl rounded-none shadow-[20px_20px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none transition-all duration-300">
            <a href="https://form.respondi.app/lDg0Bifo" target="_blank">
              Quero Minha Auditoria Grátis
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Image src="/NOVOFLOWVERDE.png" alt="Novo Flow" width={150} height={38} className="object-contain" />
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-medium leading-loose">
              Copyright © 2026 Novo Flow Performance. <br />
              Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
             <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Estratégia & Contato</span>
             <a href="https://wa.me/5541984370981" target="_blank" className="text-xl font-black hover:text-primary transition-colors">
               (41) 98437-0981
             </a>
          </div>

          <div className="flex justify-center md:justify-end gap-6">
             <div className="flex flex-col items-center md:items-end">
               <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Sede Operacional</span>
               <span className="text-xs font-bold uppercase tracking-tight text-white mt-1">Curitiba / PR - Brasil</span>
             </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <Button asChild className="w-full h-16 bg-primary text-black font-black uppercase tracking-widest rounded-none shadow-xl">
           <a href="https://wa.me/5541984370981" target="_blank">Falar no WhatsApp</a>
        </Button>
      </div>
    </main>
  )
}
