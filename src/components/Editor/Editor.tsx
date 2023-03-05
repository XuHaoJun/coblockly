import React, { useState } from "react";
import type { WorkspaceSvg } from "react-blockly";
import Blockly from "blockly";
import dynamic from "next/dynamic";
import styles from "./Editor.module.scss";
import "./custom_Blocks";
import { DEFAULT_TOOLBOX_CATEGORIES } from "./editor.constant";

const BlocklyWorkspace2 = dynamic(
  // @ts-ignore
  () => import("react-blockly").then((mod) => mod.BlocklyWorkspace),
  { ssr: false }
);

export default function App() {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  // '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const initialXml =
    '<xml xmlns="https://developers.google.com/blockly/xml"><block type="pm_exec_chain_constantly" id="1$sxVDlG{EPMj8^euGM4" x="130" y="150"><statement name="CODE"><block type="controls_repeat_ext" id="E0s]rG=a{iZ.{gxCG{Vt"><value name="TIMES"><shadow type="math_number" id="zx4C-jd}31$?nJ^u-v4}"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="pm_move_by_velocity" id="p(%z!KZ/Is+up1$C*)*a"><field name="ENTITY_ID">box2</field><field name="DIRECTION">FORWARD</field><value name="SECONDS"><block type="math_number" id="ha$eV%x.XR.vI^JU5Jw6"><field name="NUM">4</field></block></value><value name="DISTANCE"><block type="math_number" id="_lU{,qoHrr4d)TwXgL(z"><field name="NUM">5</field></block></value><next><block type="pm_set_color" id="EBLm0(vwdItRb,TR1Q5x"><field name="ENTITY_ID">box1</field><field name="COLOR">#ff0000</field><next><block type="pm_delay_seconds" id="TYPK+tM,E%N4Cbw!~-u#"><value name="VALUE"><block type="math_number" id="20PCBeDYZ],oh%o3qz8)"><field name="NUM">0.5</field></block></value><next><block type="pm_set_color" id="$[v^,F9Jzf%BCI5`m]!D"><field name="ENTITY_ID">box1</field><field name="COLOR">#009900</field><next><block type="pm_delay_seconds" id="glm*4fB-:I)-]@1YtZx9"><value name="VALUE"><block type="math_number" id="noV}_;M/f0cynWD-)X#y"><field name="NUM">0.5</field></block></value><next><block type="pm_set_color" id="^^k7c1g}Wc`s-.4Mq@$="><field name="ENTITY_ID">box1</field><field name="COLOR">#3333ff</field><next><block type="pm_delay_seconds" id="H3S*Mu)Y(dE[7+P@o=$t"><value name="VALUE"><block type="math_number" id="J?[M0TfP~KxG_t*OlH.n"><field name="NUM">0.5</field></block></value><next><block type="pm_move_by_velocity" id="o$05eL9Q$e@jX-wWIMO*"><field name="ENTITY_ID">box2</field><field name="DIRECTION">BACKWARD</field><value name="SECONDS"><block type="math_number" id="|bItW)Knipsnd;%|W9I7"><field name="NUM">1</field></block></value><value name="DISTANCE"><block type="math_number" id="amP7/%nIp98q-*2xgnYZ"><field name="NUM">5</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></statement></block></xml>'
  const toolboxCategories = DEFAULT_TOOLBOX_CATEGORIES;
  function workspaceDidChange(workspace: WorkspaceSvg) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code);
    setJavascriptCode(code);
  }

  return (
    <>
      <button
        style={{
          zIndex: 1,
          height: 60,
          width: 80,
          position: "fixed",
          top: 0,
          right: 0,
          userSelect: "none",
        }}
        onClick={() => console.log(eval(javascriptCode))}
      >
        play
      </button>
      <div className={styles["editor-wrapper"]}>
        <BlocklyWorkspace2
          toolboxConfiguration={toolboxCategories}
          initialXml={initialXml}
          className={styles["editor-contianer"]}
          workspaceConfiguration={{
            grid: {
              spacing: 20,
              length: 3,
              colour: "#ccc",
              snap: true,
            },
          }}
          onWorkspaceChange={workspaceDidChange}
          onXmlChange={function (xml: string): void {
            console.log(xml);
            // throw new Error("Function not implemented.");
          }}
          onImportXmlError={function (error: any): void {
            // throw new Error("Function not implemented.");
          }}
          onInject={function (newWorkspace: WorkspaceSvg): void {
            // throw new Error("Function not implemented.");
          }}
          onDispose={function (workspace: WorkspaceSvg): void {
            // throw new Error("Function not implemented.");
          }}
        />

        {/* <pre id="generated-xml">{xml}</pre> */}
      </div>
    </>
  );
}
