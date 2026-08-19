import type { ReactNode } from "react";
import PauseWhenHiddenVideo from "./PauseWhenHiddenVideo";

/* One customer case, laid out like the reference "Symphony × Amazon" slide:
   left — objective, four KPI tiles, one headline stat;
   right — three phase columns (crawl / walk / run), each with a line of
   copy and one visual. Purely presentational; all copy comes in as props
   so the same frame serves WPP, L'Oréal, Goodtake, Tec-do and AppLovin. */

export type GbsMedia =
  | { kind: "image"; src: string; alt: string; fit?: "cover" | "contain" }
  | { kind: "video"; src: string; poster?: string; label: string }
  | { kind: "placeholder"; note: ReactNode };

export type GbsPhase = { tag: string; when: string; copy: ReactNode; media: GbsMedia };
export type GbsKpi = { value: ReactNode; label: ReactNode; tone?: "blue" | "ink" };

export type GbsCaseProps = {
  id: string;
  index: string;
  kicker: ReactNode;
  title: ReactNode;
  titleNote?: ReactNode;
  objectiveTitle: ReactNode;
  objective: ReactNode;
  kpis: GbsKpi[];
  headline?: { value: ReactNode; label: ReactNode };
  phases: [GbsPhase, GbsPhase] | [GbsPhase, GbsPhase, GbsPhase];
  footnote?: ReactNode;
};

function Media({ m }: { m: GbsMedia }) {
  if (m.kind === "video") {
    return <PauseWhenHiddenVideo src={m.src} poster={m.poster} autoPlay loop muted playsInline preload="metadata" ariaLabel={m.label} />;
  }
  if (m.kind === "image") {
    return <img src={m.src} alt={m.alt} loading="lazy" style={m.fit ? { objectFit: m.fit } : undefined} />;
  }
  return <div className="gbsCasePlaceholder"><span>{m.note}</span></div>;
}

export default function GbsCase(p: GbsCaseProps) {
  return (
    <article className="gbsCase" id={p.id} aria-labelledby={`${p.id}-title`}>
      <header className="gbsCaseHead">
        <span className="gbsCaseKicker">{p.kicker}</span>
        <h3 id={`${p.id}-title`}>
          <i aria-hidden="true">{p.index}</i>
          {p.title}
          {p.titleNote ? <small>{p.titleNote}</small> : null}
        </h3>
      </header>

      <div className="gbsCaseBody">
        <aside className="gbsCaseLeft">
          <div className="gbsCaseObjective">
            <b>{p.objectiveTitle}</b>
            <p>{p.objective}</p>
          </div>
          <ul className="gbsCaseKpis">
            {p.kpis.map((k, i) => (
              <li key={i} className={k.tone === "ink" ? "isInk" : ""}>
                <b>{k.value}</b>
                <span>{k.label}</span>
              </li>
            ))}
          </ul>
          {p.headline ? (
            <div className="gbsCaseHeadline">
              <b>{p.headline.value}</b>
              <span>{p.headline.label}</span>
            </div>
          ) : null}
        </aside>

        <ol className={`gbsCasePhases${p.phases.length === 2 ? " isPair" : ""}`}>
          {p.phases.map((ph, i) => (
            <li key={i} className="gbsCasePhase">
              <header>
                <b>{ph.tag}</b>
                <span>{ph.when}</span>
              </header>
              <p>{ph.copy}</p>
              <figure className={`gbsCaseMedia is-${ph.media.kind}`}>
                <Media m={ph.media} />
              </figure>
            </li>
          ))}
        </ol>
      </div>

      {p.footnote ? <p className="gbsCaseFoot">{p.footnote}</p> : null}
    </article>
  );
}
