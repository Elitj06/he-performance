# HE Performance — Planejamento Detalhado

> Criado em 2026-07-10 por TJ | Status: Aguardando aprovação Eliandro

## Visão Geral

Transformar a landing page atual em uma plataforma completa de gestão clínica com IA, permitindo:
1. Portal do paciente com fichas de acompanhamento
2. Portal médico com dashboard inteligente
3. Chatbot de WhatsApp integrado à ficha do paciente
4. IA para leitura de prescrições e organização de protocolos

---

## Fases e Prioridades

### FASE 0 — Fundação (1 semana) 🟡 PRIORIDADE ALTA

#### 0.1 Supabase Setup
- Criar projeto Supabase dedicado (`he-performance`)
- Esquema inicial com migrations
- Row Level Security (RLS) por paciente/médico
- Storage para exames (PDF/imagem)
- Service role key no backend, anon key só para auth

#### 0.2 Esquema de Banco — Tabelas
```
patients
  - id (uuid, pk)
  - name, email, phone, birth_date
  - created_at, updated_at

medical_records (ficha do paciente)
  - id (uuid, pk)
  - patient_id (fk → patients)
  - doctor_id (fk → doctors)
  - anamnesis (jsonb)
  - allergies, medications_history
  - created_at, updated_at

prescriptions
  - id (uuid, pk)
  - patient_id (fk → patients)
  - doctor_id (fk → doctors)
  - medications (jsonb) — [{name, dosage, frequency, schedule}]
  - start_date, end_date
  - status (active|paused|completed)
  - created_at

consultations
  - id (uuid, pk)
  - patient_id, doctor_id
  - date, type (presential|telemedicine)
  - notes (text)
  - prescription_id (fk → prescriptions, nullable)

exams
  - id (uuid, pk)
  - patient_id (fk)
  - type, date, results (jsonb)
  - file_url (storage path)
  - status (pending|reviewed)

evolution_logs
  - id (uuid, pk)
  - patient_id (fk)
  - weight, body_fat, measurements (jsonb)
  - energy_level (1-10)
  - symptoms (text[])
  - created_at

protocols
  - id (uuid, pk)
  - name, description
  - phases (jsonb)
  - duration_days

doctors
  - id (uuid, pk)
  - name, crm, specialty
  - user_id (fk → auth.users)

appointments
  - id (uuid, pk)
  - patient_id, doctor_id
  - scheduled_at, duration_min
  - status (scheduled|completed|cancelled)
```

#### 0.3 Auth
- Next.js middleware com Supabase Auth
- Login paciente (email/senha)
- Login médico (email/senha + role)
- Session management com JWT

**Entregável:** Banco pronto, auth funcionando, migrations versionadas.

---

### FASE 1 — Portal do Paciente (1.5 semanas) 🔴 PRIORIDADE MÁXIMA

#### 1.1 Login real do paciente
- Substituir placeholder `/login` por auth Supabase real
- Reset password via email
- Primeiro acesso com convite (email do paciente cadastrado pelo médico)

#### 1.2 Dashboard do paciente (`/app`)
- **Minhas prescrições** — lista de medicações ativas com dosagem e horários
- **Próximas consultas** — agendamentos confirmados
- **Meus exames** — upload + visualização de resultados
- **Minha evolução** — gráfico de peso, medidas, energia ao longo do tempo
- **Lembretes** — notificações de medicação configuradas

#### 1.3 Ficha de acompanhamento
- Visualização da ficha completa (anamnese, histórico, alergias)
- Apenas leitura para o paciente
- Campo para "diário do paciente" — como se sente, sintomas, efeitos

**Entregável:** Paciente faz login, vê sua ficha, prescrições, exames e evolução.

---

### FASE 2 — Portal Médico / Dashboard (1.5 semanas) 🟡 PRIORIDADE ALTA

#### 2.1 Login médico (`/dashboard`)
- Auth com role `doctor`
- Lista de pacientes
- Busca e filtro por nome, protocolo, status

#### 2.2 Editor de ficha do paciente
- Criar/editar anamnese
- Prescrever medicações (medicação, dosagem, frequência, horários)
- Registrar consulta
- Fazer upload de exames
- Definir protocolo

#### 2.3 Visão de evolução
- Gráficos de evolução do paciente
- Comparação entre protocolos
- Alertas de risco (variação significativa em indicadores)
- Timeline de consultas e intervenções

**Entregável:** Dr. João loga, vê pacientes, edita fichas, prescreve, acompanha evolução.

---

### FASE 3 — IA: Leitura de Prescrições (1 semana) 🔴 PRIORIDADE MÁXIMA

#### 3.1 OCR de prescrições
- Upload de foto/PDF da receita médica
- IA extrai: medicação, dosagem, frequência, horários, duração
- Apresenta estrutura organizada para revisão do médico
- Médico confirma → salva na ficha do paciente

#### 3.2 Organização automática
- Gera cronograma visual de medicações por paciente
- Detecta conflitos/interações básicas (biblioteca de referência)
- Sugere lembretes automáticos

**Entregável:** Dr. João fotografa receita → IA organiza na ficha do paciente.

---

### FASE 4 — Chatbot WhatsApp com IA (1.5 semanas) 🔴 PRIORIDADE MÁXIMA

#### 4.1 Agente HE Performance no WhatsApp
- Paciente conversa no WhatsApp
- IA acessa ficha do paciente em tempo real (via API)
- Responde dúvidas sobre: horários de medicação, dosagem, próximos retornos
- NUNCA diagnostica, prescreve ou interpreta exames

#### 4.2 Lembretes automáticos
- Notificação antes de cada horário de medicação
- Lembrete de consulta (24h antes)
- Check-in periódico: "Como está se sentindo com o protocolo?"
- Alerta de renovação: "Sua receita de X termina em 5 dias"

#### 4.3 Triagem inteligente
- Classifica dúvidas: rotina vs clínica
- Rotina → responde direto (baseado na ficha)
- Clínica → "Vou encaminhar pro Dr. João. Ele vai te retornar"
- Urgência → SAMU 192 / hospital

#### 4.4 Integração com Evolution/WhatsApp
- Número dedicado da clínica
- Transferência para humano (recepcionista ou Dr. João)
- Histórico de conversas arquivado na ficha

**Entregável:** Paciente recebe lembretes, tira dúvidas, triagem funciona.

---

### FASE 5 — Features Avançadas (pós-MVP) 🟢 PRIORIDADE MÉDIA

#### 5.1 Dashboard analítico do médico
- Taxa de adesão aos protocolos
- Pacientes com maior risco de abandono
- Indicadores clínicos agregados

#### 5.2 App mobile (PWA aprimorado)
- Push notifications reais
- Offline-first para consulta de fichas
- Camera integration para foto de exames

#### 5.3 Integração com calendário
- Google Calendar / Outlook
- Confirmação automática de consulta
- Reagendamento via chatbot

#### 5.4 Dashboard financeiro
- Faturamento por paciente
- Controle de sessões/consultas
- Integração com pagamento

#### 5.5 Multi-clínica
- Suporte a múltiplas clínicas no mesmo sistema
- White-label para outras clínicas

---

## Estimativa de Timeline

| Fase | Duração | Entrega |
|---|---|---|
| Fase 0 — Fundação | 1 semana | Banco + Auth |
| Fase 1 — Portal Paciente | 1.5 semanas | Login + Ficha + Prescrições |
| Fase 2 — Portal Médico | 1.5 semanas | Dashboard + Editor |
| Fase 3 — IA Prescrições | 1 semana | OCR + Organização |
| Fase 4 — Chatbot WhatsApp | 1.5 semanas | Lembretes + Triagem |
| **Total MVP** | **~6.5 semanas** | **Plataforma completa** |

> Fase 5 é pós-MVP, conforme demanda e priorização do Dr. João.

---

## Stack Técnica Definitiva

| Camada | Tecnologia |
|---|---|
| Frontend | Next.js 15 App Router + TypeScript + Tailwind CSS 4 |
| Backend | Next.js Route Handlers (API routes) |
| Banco | Supabase (PostgreSQL + Auth + Storage + RLS) |
| IA | OpenClaw agents (GLM-5.1/5.2 + Mimo V2.5 Pro) |
| OCR | GPT-5.4 vision / GLM-4.6V (prescrições) |
| WhatsApp | OpenClaw nativo (chatbot) |
| Deploy | Vercel (já configurado) |
| Monitoring | OpenClaw telemetry |

---

## Arquitetura Limpa (conforme padrão TJ)

```
he-performance/
├── app/                    # Rotas Next.js
│   ├── (public)/           # Landing page
│   ├── (auth)/             # Login/registro
│   ├── (patient)/          # Portal do paciente
│   │   ├── app/            # Dashboard paciente
│   │   ├── prescriptions/  # Minhas prescrições
│   │   ├── exams/          # Meus exames
│   │   └── evolution/      # Minha evolução
│   └── (doctor)/           # Portal médico
│       ├── dashboard/      # Painel médico
│       ├── patients/       # Lista de pacientes
│       └── prescriptions/  # Prescrever
├── routes/                 # API Route Handlers (HTTP only)
│   ├── auth/
│   ├── patients/
│   ├── prescriptions/
│   └── exams/
├── services/               # Lógica de negócio
│   ├── patient-service.ts
│   ├── prescription-service.ts
│   ├── exam-service.ts
│   └── ocr-service.ts
├── data/                   # Acesso ao banco (Supabase)
│   ├── patient-repo.ts
│   ├── prescription-repo.ts
│   └── exam-repo.ts
├── types/                  # Types compartilhados
│   ├── patient.ts
│   ├── prescription.ts
│   └── exam.ts
├── components/             # UI components
├── lib/                    # Config, utils, constants
└── public/                 # Assets estáticos
```

**Regras:**
- NUNCA lógica de negócio em route handlers
- NUNCA acesso direto ao banco fora de `data/`
- Arquivo máximo 300 linhas
- Função máxima 50 linhas

---

## Compliance Legal (Inegociável)

1. NUNCA diagnosticar, prescrever ou interpretar exames
2. IA sempre direciona dúvidas clínicas para o médico
3. Urgências → SAMU 192 / hospital
4. LGPD: dados de pacientes criptografados, consentimento explícito
5. Logs de auditoria para todo acesso a fichas

---

## Próximos Passos

1. ✅ Eliandro aprova este plano
2. Coletar demandas específicas do Dr. João (via Lia)
3. Priorizar fases baseado no feedback
4. Iniciar Fase 0 (Supabase + Auth)
5. Iterar com feedback do Dr. João em cada fase
