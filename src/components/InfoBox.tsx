import type { FC, ReactNode } from "react";

// short way but not safe enough
// interface InfoBoxProps {
//   mode: "hint" | "warning";
//   severity?: "low" | "medium" | "high";
//   children: ReactNode;
// }

// safe way Discriminated Unions.
interface HintProps {
  mode: "hint";
  children: ReactNode;
}

interface warningProps {
  mode: "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
}

type InfoBoxProps = HintProps | warningProps;

const InfoBox: FC<InfoBoxProps> = (props) => {
  if (props.mode === "hint")
    return (
      <aside className={`infobox infobox-hint`}>
        <p>{props.children}</p>
      </aside>
    );

  const { mode, severity, children } = props;
  const warningType = severity ? `warning--${severity}` : "warning--medium";

  return (
    <aside className={`infobox infobox-warning ${warningType}`}>
      <h2>{mode}</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
