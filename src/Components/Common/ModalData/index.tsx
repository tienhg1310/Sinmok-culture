import React from "react";
import {
  documentToHtmlString,
  NodeRenderer,
} from "@contentful/rich-text-html-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import "./style.scss";

function ModalData({ item }: any) {
  const { detail } = item;
  const options: any = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, next: any) =>
        `<p>${next(node.content).replace(/\n/g, "<br/>")}</p>`,
    },
    preserveWhitespace: true,
  };

  const htmlString = documentToHtmlString(detail, options);

  return (
    <div style={{ overflow: "auto" }} className='modal-data'>
      <div
        dangerouslySetInnerHTML={{ __html: htmlString }}
        style={{ padding: "0 10px" }}
      ></div>
    </div>
  );
}

export default ModalData;
