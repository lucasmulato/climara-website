export type SeedId = "desperta" | "suntera" | "lead";

export type Seed = {
  id: SeedId;
  name: string;
  model: string;
  commission: string;
  fit: string;
  href: string;
  start: string;
};

export const SEEDS: Seed[] = [
  {
    id: "desperta",
    name: "Desperta Energia",
    model: "Solar por assinatura, sem obra.",
    commission: "Até 60% de 1 conta, ou 3,5% recorrente.",
    fit: "Comércio com conta acima de R$300.",
    href: "https://despertaenergia.com/blog/parcerias-energia-solar",
    start: "Se você fala com comerciante, começa aqui. Venda mais fácil.",
  },
  {
    id: "suntera",
    name: "Suntera Solar",
    model: "Indicação de instalação completa.",
    commission: "7 a 10% do projeto (R$700 a R$20.000). Uma venda típica: R$1.400 a R$4.000.",
    fit: "Casas grandes e galpões.",
    href: "https://lp.suntera.com.br/parceiros",
    start: "Se você conhece gente com casa própria, começa aqui.",
  },
  {
    id: "lead",
    name: "Lead Energy",
    model: "Energia por assinatura, recorrência de 4 anos.",
    commission: "0,5% + R$4 a R$7 por MWh, por 4 anos.",
    fit: "Quem quer colher sem vender de novo.",
    href: "https://afiliados.leadenergy.com.br",
    start: "Renda passiva. Não tenta fazer as três ao mesmo tempo.",
  },
];

export const WEEK = [
  { id: "d1", label: "D1 · Hoje", detail: "Cadastre-se em duas: Desperta e Suntera." },
  { id: "d2", label: "D2 · Amanhã", detail: "Peça o kit de vendas no WhatsApp de cada uma." },
  { id: "d3", label: "D3", detail: "Liste 10 pessoas: 5 comércios e 5 casas grandes." },
  { id: "d4", label: "D4 a D7", detail: "Mande mensagem 1 a 1. Uma conversa de cada vez." },
] as const;

export const MESSAGE = `Oi, tô começando um projeto de energia limpa aqui em Guarulhos (CLIMARA). Tô ajudando comércios e casas a reduzir 15-20% da conta de luz sem precisar instalar nada. Se quiser, me manda uma conta de luz que eu faço uma análise rápida pra ver se vale a pena pra você?`;

export type LogEntry = {
  id: string;
  date: string;
  seed: SeedId;
  who: string;
  note: string;
};

export type ProspectKind = "comercio" | "casa";
export type ProspectStatus = "lista" | "mensagem" | "conta" | "avanco";

export type Prospect = {
  id: string;
  name: string;
  kind: ProspectKind;
  seed: SeedId;
  status: ProspectStatus;
};

export type RoofStatus = "olhar" | "medido" | "proposta";

export type Roof = {
  id: string;
  place: string;
  note: string;
  status: RoofStatus;
};

export type Scout = {
  id: string;
  name: string;
  focus: string;
};

export type FieldState = {
  checks: Record<string, boolean>;
  logs: LogEntry[];
  prospects: Prospect[];
  roofs: Roof[];
  scouts: Scout[];
};

export const EMPTY_FIELD: FieldState = {
  checks: {},
  logs: [],
  prospects: [],
  roofs: [],
  scouts: [],
};

export const STATUS_LABEL: Record<ProspectStatus, string> = {
  lista: "Na lista",
  mensagem: "Mensagem enviada",
  conta: "Conta enviada",
  avanco: "Avançou",
};

export const ROOF_LABEL: Record<RoofStatus, string> = {
  olhar: "A olhar",
  medido: "Medido",
  proposta: "Proposta",
};

export function uid(): string {
  return crypto.randomUUID();
}

export function todayLabel(): string {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}`;
}

export function formatLog(entry: LogEntry): string {
  const seed = SEEDS.find((s) => s.id === entry.seed)?.name ?? entry.seed;
  return `[${entry.date}] - ${seed} - ${entry.who} - ${entry.note}`;
}
