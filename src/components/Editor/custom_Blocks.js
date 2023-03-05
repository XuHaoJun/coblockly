import * as Blockly from "blockly/core";
import JavaScriptGenerator from "blockly/javascript";

Blockly.JavaScript = JavaScriptGenerator.javascriptGenerator;

function getAllEntityIdOptions() {
  const xs = document.querySelectorAll("a-scene > [scriptable]");
  return [...xs.values()].map((x) => {
    const id = x.getAttribute("id");
    return [id, id];
  });
}

Blockly.Blocks["string_length"] = {
  init: function () {
    this.appendValueInput("VALUE").setCheck("String").appendField("length of");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("Returns number of letters in the provided text.");
    this.setHelpUrl("http://www.w3schools.com/jsref/jsref_length_string.asp");
  },
};

Blockly.JavaScript["string_length"] = function (block) {
  var argument0 =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE",
      Blockly.JavaScript.ORDER_FUNCTION_CALL
    ) || "''";
  return [argument0 + ".length", Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks["pm_set_color"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("設定")
      .appendField(new Blockly.FieldDropdown(this.generateOptions), "ENTITY_ID")
      .appendField("顏色為")
      .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },

  generateOptions: function () {
    return getAllEntityIdOptions();
  },
};

Blockly.JavaScript["pm_set_color"] = function (block) {
  const entityId = block.getFieldValue("ENTITY_ID");
  const colour_name = block.getFieldValue("COLOR");
  return `document.querySelector('#${entityId}')?.setAttribute('color', '${colour_name}');\n`;
};

Blockly.Blocks["pm_exec_chain_constantly"] = {
  init: function () {
    this.appendStatementInput("CODE").setCheck(null).appendField("當播放");
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["pm_exec_chain_constantly"] = function (block) {
  const statementCode = Blockly.JavaScript.statementToCode(block, "CODE");
  return `(async () => {${statementCode}})();`;
};

Blockly.Blocks["pm_delay_seconds"] = {
  init: function () {
    this.appendValueInput("VALUE").setCheck("Number").appendField("等待");
    this.appendDummyInput().appendField("秒");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["pm_delay_seconds"] = function (block) {
  const milleseconds =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE",
      Blockly.JavaScript.ORDER_FUNCTION_CALL
    ) * 1000 || 0;
  return `await new Promise((resolve) => setTimeout(resolve, ${milleseconds}));\n`;
};

Blockly.Blocks["pm_move_by_velocity"] = {
  init: function () {
    this.appendValueInput("SECONDS").setCheck("Number").appendField("在");
    this.appendDummyInput()
      .appendField("秒內移動")
      .appendField(new Blockly.FieldDropdown(this.generateOptions), "ENTITY_ID");
    this.appendValueInput("DISTANCE").setCheck("Number");
    this.appendDummyInput()
      .appendField("米")
      .appendField(
        new Blockly.FieldDropdown([
          ["往前", "FORWARD"],
          ["往後", "BACKWARD"],
          ["向左", "LEFT"],
          ["向右", "RIGHT"],
          ["向上", "UP"],
          ["向下", "DOWN"],
        ]),
        "DIRECTION"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },

  generateOptions: function () {
    return getAllEntityIdOptions();
  },
};

Blockly.JavaScript["pm_move_by_velocity"] = function (block) {
  const seconds = Blockly.JavaScript.valueToCode(
    block,
    "SECONDS",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const entityId = block.getFieldValue("ENTITY_ID");
  const distance = Blockly.JavaScript.valueToCode(
    block,
    "DISTANCE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const direction = block.getFieldValue("DIRECTION");
  const v = distance / seconds;

  const xDir = {
    RIGHT: 1,
    LEFT: -1,
  };
  const xv = (xDir[direction] ?? 0) * v;

  const yDir = {
    UP: 1,
    DOWN: -1,
  };
  const yv = (yDir[direction] ?? 0) * v;

  const zDir = {
    FORWARD: -1,
    BACKWARD: 1,
  };
  const zv = (zDir[direction] ?? 0) * v;
  return `
document.querySelector('#${entityId}')?.setAttribute("velocity", {x: ${xv}, y: ${yv}, z: ${zv}});
await new Promise((resolve) => setTimeout(resolve, ${seconds * 1000}));
document.querySelector('#${entityId}')?.setAttribute("velocity", {x: ${0}, y: ${0}, z: ${0}});

`;
};
