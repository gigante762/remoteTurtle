Blockly.Blocks['turtle_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.forward")
        .appendField(new Blockly.FieldNumber(1, 1), "steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.forward()");
 this.setHelpUrl("");
  }
};

Blockly.Lua['turtle_forward'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  // TODO: Assemble Lua into code variable.
  let rand = Math.random().toString(36).substr(2, 5);
  var code = `
  for i${rand} = 1,${number_steps} do
    turtle.forward()
  end\n`;
  return code;
};



Blockly.Blocks['turtle_back'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.back")
        .appendField(new Blockly.FieldNumber(1, 1), "steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.back()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.up")
        .appendField(new Blockly.FieldNumber(1, 1), "steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.up()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.down")
        .appendField(new Blockly.FieldNumber(1), "steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.down()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_turnleft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.turnLeft")
        .appendField(new Blockly.FieldNumber(1, 1), "steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.turnLeft()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_turnright'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.turnRight")
        .appendField(new Blockly.FieldNumber(1, 1), "steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.turnRight()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_digup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.digUp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.digUp()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_dig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.dig");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.dig()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_digdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.digDown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.digDown()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.place");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.place");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_placeup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.placeUp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.placeUp()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_placedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.placeDown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_drop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.drop")
        .appendField(new Blockly.FieldNumber(1, 0, 64), "qtd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.drop()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_dropup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.dropUp")
        .appendField(new Blockly.FieldNumber(1, 0, 64), "qtd");
    this.setColour(105);
 this.setTooltip("turtle.dropUp()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_dropdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.dropDown")
        .appendField(new Blockly.FieldNumber(1, 0), "qtd");
    this.setColour(105);
 this.setTooltip("turtle.dropDown()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.select")
        .appendField(new Blockly.FieldNumber(0, 1, 16), "slot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.select()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getitemcount'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.getItemCount")
        .appendField(new Blockly.FieldNumber(0, 1, 16), "slot");
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("turtle.getItemCount()");
 this.setHelpUrl("");
  }
};

Blockly.Lua['turtle_back'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  // TODO: Assemble Lua into code variable.
  let rand = Math.random().toString(36).substr(2, 5);
  var code = `
  for i${rand} = 1,${number_steps} do
    turtle.back()
  end\n`;
  return code;
};

Blockly.Lua['turtle_up'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  // TODO: Assemble Lua into code variable.
  let rand = Math.random().toString(36).substr(2, 5);
  var code = `
  for i${rand} = 1,${number_steps} do
    turtle.up()
  end\n`;
  return code;
};

Blockly.Lua['turtle_down'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  // TODO: Assemble Lua into code variable.
  let rand = Math.random().toString(36).substr(2, 5);
  var code = `
  for i${rand} = 1,${number_steps} do
    turtle.down()
  end\n`;
  return code;
};

Blockly.Lua['turtle_turnleft'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  // TODO: Assemble Lua into code variable.
  let rand = Math.random().toString(36).substr(2, 5);
  var code = `
  for i${rand} = 1,${number_steps} do
    turtle.turnLeft()
  end\n`;
  return code;
};

Blockly.Lua['turtle_turnright'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  // TODO: Assemble Lua into code variable.
  let rand = Math.random().toString(36).substr(2, 5);
  var code = `
  for i${rand} = 1,${number_steps} do
    turtle.turnRight()
  end\n`;
  return code;
};

Blockly.Lua['turtle_digup'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.digUp()\n';
  return code;
};

Blockly.Lua['turtle_dig'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.dig()\n';
  return code;
};

Blockly.Lua['turtle_digdown'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.digDown()\n';
  return code;
};

Blockly.Lua['turtle_place'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.place()\n';
  return code;
};

Blockly.Lua['turtle_placeup'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.placeUp()\n';
  return code;
};

Blockly.Lua['turtle_placedown'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.placeDown()\n';
  return code;
};

Blockly.Lua['turtle_drop'] = function(block) {
  var number_qtd = block.getFieldValue('qtd');
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.drop('+number_qtd+')\n';
  return code;
};

Blockly.Lua['turtle_dropup'] = function(block) {
  var number_qtd = block.getFieldValue('qtd');
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.dropUp('+number_qtd+')\n';
  return code;
};

Blockly.Lua['turtle_dropdown'] = function(block) {
  var number_qtd = block.getFieldValue('qtd');
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.dropDown('+number_qtd+')\n';
  return code;
};

Blockly.Lua['turtle_select'] = function(block) {
  var number_slot = block.getFieldValue('slot');
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.select('+number_slot+')\n';
  return code;
};

Blockly.Lua['turtle_getitemcount'] = function(block) {
  var number_slot = block.getFieldValue('slot');
  // TODO: Assemble Lua into code variable.
  var code = ' turtle.getItemCount('+number_slot+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

/* part 2 */

Blockly.Blocks['turtle_getitemspace'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.getItemSpace()");
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_detect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.detect()");
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_detectup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.detectUp()");
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_detectdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.detectDown");
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_compare'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.compare()");
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_compareup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.compareUp()");
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_comparedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.compareDown()");
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_attack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.attack()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_attackup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.attackUp()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_attackdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.attackDown()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_suck'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.suck")
        .appendField(new Blockly.FieldNumber(1, 0), "qtd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_suckup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.suckUp")
        .appendField(new Blockly.FieldNumber(0, 0), "qtd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_suckdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.suckDown")
        .appendField(new Blockly.FieldNumber(0, 0), "qtd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getfuellevel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.getFuelLevel()");
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_refuel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.refuel")
        .appendField(new Blockly.FieldNumber(0, 0), "qtd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_compareto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("compareTo")
        .appendField(new Blockly.FieldNumber(0, 0, 16), "slot");
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_transferto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.transferTo")
        .appendField(new Blockly.FieldNumber(1, 1, 16), "slot")
        .appendField(new Blockly.FieldNumber(1, 0), "qtd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getselectedslot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.getSelectedSlot()");
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getfuellimit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.getFuelLimit()");
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_equipleft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.equipLeft()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_equipright'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.equipRight()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_inspect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.inspect()");
    this.setOutput(true, ["Boolean", "Array"]);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_inspectup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.inspectUp()");
    this.setOutput(true, ["Boolean", "Array"]);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_inspectdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.inspectDown()");
    this.setOutput(true, ["Boolean", "Array"]);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getitemdetail'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.getItemDetail")
        .appendField(new Blockly.FieldNumber(0, 1, 16), "slot");
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_craft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.craft")
        .appendField(new Blockly.FieldNumber(0, 1, 64), "qtd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Lua['turtle_getitemspace'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ' turtle.getItemSpace() ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_detect'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ' turtle.detect() ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_detectup'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ' turtle.detectUp() ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_detectdown'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ' turtle.detectDown() ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_compare'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ' turtle.compare() ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_compareup'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ' turtle.compareUp() ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_comparedown'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ' turtle.compareDown() ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_attack'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.attack()\n';
  return code;
};

Blockly.Lua['turtle_attackup'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.attackUp()\n';
  return code;
};

Blockly.Lua['turtle_attackdown'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.attackDown()\n';
  return code;
};

Blockly.Lua['turtle_suck'] = function(block) {
  var number_qtd = block.getFieldValue('qtd');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.suck(${number_qtd})\n`;
  return code;
};

Blockly.Lua['turtle_suckup'] = function(block) {
  var number_qtd = block.getFieldValue('qtd');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.suckUp(${number_qtd})\n`;
  return code;
};

Blockly.Lua['turtle_suckdown'] = function(block) {
  var number_qtd = block.getFieldValue('qtd');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.suckDown(${number_qtd})\n`;
  return code;
};

Blockly.Lua['turtle_getfuellevel'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ` turtle.getFuelLevel() `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_refuel'] = function(block) {
  var number_qtd = block.getFieldValue('qtd');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.refuel(${number_qtd})\n`;
  return code;
};

Blockly.Lua['turtle_compareto'] = function(block) {
  var number_slot = block.getFieldValue('slot');
  // TODO: Assemble Lua into code variable.
  var code = ` turtle.compareTo(${number_slot}) `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_transferto'] = function(block) {
  var number_slot = block.getFieldValue('slot');
  var number_qtd = block.getFieldValue('qtd');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.transferTo(${number_slot}, ${number_qtd})\n`;
  return code;
};

Blockly.Lua['turtle_getselectedslot'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ` turtle.getSelectedSlot() `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_getfuellimit'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ` turtle.getFuelLimit() `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};


Blockly.Lua['turtle_equipleft'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = `turtle.equipLeft()\n`;
  return code;
};

Blockly.Lua['turtle_equipright'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = `turtle.equipRight()\n`;
  return code;
};

Blockly.Lua['turtle_inspect'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ` turtle.inspect() `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_inspectup'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ` turtle.inspectUp() `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_inspectdown'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ` turtle.inspectDown() `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_getitemdetail'] = function(block) {
  var number_slot = block.getFieldValue('slot');
  // TODO: Assemble Lua into code variable.
  var code = ` turtle.getitemDetail() `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_craft'] = function(block) {
  var number_qtd = block.getFieldValue('qtd');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.craft()\n`;
  return code;
};