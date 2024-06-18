import type { FC } from "react";
import BreadScrumbs from "../BreadScrumbs/BreadScrumbs";
import "./SectionHeader.scss";

type Props = {
  breadscrumbs: string[] | undefined[];
  title: string;
};

const SectionHeader: FC<Props> = ({ breadscrumbs, title }) => {
  console.log(breadscrumbs)
  return (
    <div className="section_header-content">
      <h2 className="section_header-title">{title}</h2>
      <div className="section_header-breadcrumb">
        <BreadScrumbs breadscrumbs={breadscrumbs} />
      </div>
    </div>
  );
};

export default SectionHeader;
