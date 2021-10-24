Blockly.Blocks['turtle_forward'] = {
  init: function() {
    this.appendValueInput("steps")
        .setCheck("Number")
        .appendField("turtle.forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.forward()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_back'] = {
  init: function() {
    this.appendValueInput("steps")
        .setCheck("Number")
        .appendField("turtle.back");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.back()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_up'] = {
  init: function() {
    this.appendValueInput("steps")
        .setCheck("Number")
        .appendField("turtle.up");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.up()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_down'] = {
  init: function() {
    this.appendValueInput("steps")
        .setCheck("Number")
        .appendField("turtle.up");
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
        .appendField("turtle.turnLeft");
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
        .appendField("turtle.turnRight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.turnRight()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_place'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck(["String", "Number"])
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
    this.appendValueInput("text")
        .setCheck(["Number", "String"])
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
    this.appendValueInput("text")
        .setCheck(["Number", "String"])
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
    this.appendValueInput("qtd")
        .setCheck("Number")
        .appendField("turtle.drop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.drop()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_dropup'] = {
  init: function() {
    this.appendValueInput("qtd")
        .setCheck("Number")
        .appendField("turtle.dropUp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.dropUp()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_dropdown'] = {
  init: function() {
    this.appendValueInput("qtd")
        .setCheck("Number")
        .appendField("turtle.dropDown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.dropDown()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_select'] = {
  init: function() {
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("turtle.select");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("turtle.select()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getitemcount'] = {
  init: function() {
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("turtle.getItemCount");
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("turtle.getItemCount()");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getitemspace'] = {
  init: function() {
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("turtle.getItemSpace");
    this.setOutput(true, "Number");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_suck'] = {
  init: function() {
    this.appendValueInput("atd")
        .setCheck("Number")
        .appendField("turtle.suck");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_suckup'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("turtle.suckUp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_suckdown'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("turtle.suckDown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_refuel'] = {
  init: function() {
    this.appendValueInput("qtd")
        .setCheck("Number")
        .appendField("turtle.refuel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_compareto'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("compareTo");
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_transferto'] = {
  init: function() {
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("turtle.transferTo");
    this.appendValueInput("qtd")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("Transfer to slot the amount");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getitemdetail'] = {
  init: function() {
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("turtle.getItemDetail");
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_craft'] = {
  init: function() {
    this.appendValueInput("qtd")
        .setCheck("Number")
        .appendField("turtle.craft");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
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


/* part 2 */
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

Blockly.Lua['turtle_getfuellevel'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = ` turtle.getFuelLevel() `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
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


Blockly.Lua['turtle_forward'] = function(block) {
  var value_steps = Blockly.Lua.valueToCode(block, 'steps', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  value_steps = (value_steps) ? value_steps : 1;
  let rand = Math.random().toString(36).substr(2, 5);
  var code = `
  for i${rand} = 1,${value_steps} do
    turtle.forward()
  end\n`;
  return code;
  
};

Blockly.Lua['turtle_back'] = function(block) {
  var value_steps = Blockly.Lua.valueToCode(block, 'steps', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  value_steps = (value_steps) ? value_steps : 1;
  let rand = Math.random().toString(36).substr(2, 5);
  var code = `
  for i${rand} = 1,${value_steps} do
    turtle.back()
  end\n`;
  return code;
};

Blockly.Lua['turtle_up'] = function(block) {
  var value_steps = Blockly.Lua.valueToCode(block, 'steps', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  value_steps = (value_steps) ? value_steps : 1;
  let rand = Math.random().toString(36).substr(2, 5);
  var code = `
  for i${rand} = 1,${value_steps} do
    turtle.up()
  end\n`;
  return code;
};

Blockly.Lua['turtle_down'] = function(block) {
  var value_steps = Blockly.Lua.valueToCode(block, 'steps', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  value_steps = (value_steps) ? value_steps : 1;
  let rand = Math.random().toString(36).substr(2, 5);
  var code = `
  for i${rand} = 1,${value_steps} do
    turtle.down()
  end\n`;
  return code;
};

Blockly.Lua['turtle_turnleft'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.turnLeft()\n';
  return code;
};

Blockly.Lua['turtle_turnright'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.turnRight()\n';
  return code;
};

Blockly.Lua['turtle_place'] = function(block) {
  var value_text = Blockly.Lua.valueToCode(block, 'text', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  if (value_text)
  {
    return  `turtle.place(${value_text})\n`;
  }
  
  return 'turtle.place()\n';
};

Blockly.Lua['turtle_placeup'] = function(block) {
  var value_text = Blockly.Lua.valueToCode(block, 'text', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  if (value_text)
  {
    return  `turtle.placeUp(${value_text})\n`;
  }
  
  return 'turtle.placeUp()\n';
};

Blockly.Lua['turtle_placedown'] = function(block) {
  var value_text = Blockly.Lua.valueToCode(block, 'text', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  if (value_text)
  {
    return  `turtle.placeDown(${value_text})\n`;
  }
  
  return 'turtle.placeDown()\n';
};

Blockly.Lua['turtle_drop'] = function(block) {
  var value_qtd = Blockly.Lua.valueToCode(block, 'qtd', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  if (value_qtd)
  {
    return  `turtle.drop(${value_qtd})\n`;
  }
  
  return 'turtle.drop()\n';
};

Blockly.Lua['turtle_dropup'] = function(block) {
  var value_qtd = Blockly.Lua.valueToCode(block, 'qtd', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  if (value_qtd)
  {
    return  `turtle.dropUp(${value_qtd})\n`;
  }
  
  return 'turtle.dropUp()\n';
};

Blockly.Lua['turtle_dropdown'] = function(block) {
  var value_qtd = Blockly.Lua.valueToCode(block, 'qtd', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  if (value_qtd)
  {
    return  `turtle.dropDown(${value_qtd})\n`;
  }
  
  return 'turtle.dropDown()\n';
};

Blockly.Lua['turtle_select'] = function(block) {
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  value_slot = (value_slot > 16 || value_slot < 1) ? 1 : value_slot;
  var code = `turtle.select(${value_slot})\n`;
  return code;
};

Blockly.Lua['turtle_getitemcount'] = function(block) {
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  let code;
  if (value_slot)
  {
    value_slot = (value_slot > 16 || value_slot < 1) ? 1 : value_slot;
    code =  ` turtle.getItemCount(${value_slot}) `;
  }
  else
  {
    code =  ' turtle.getItemCount() ';
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_getitemspace'] = function(block) {
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  let code;
  if (value_slot)
  {
    value_slot = (value_slot > 16 || value_slot < 1) ? 1 : value_slot;
    code =  ` turtle.getItemSpace(${value_slot}) `;
  }
  else
  {
    code = ` turtle.getItemSpace() `;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_suck'] = function(block) {
  var value_atd = Blockly.Lua.valueToCode(block, 'atd', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  let code;
  if (value_atd)
  {
    code =  `turtle.suck(${value_atd})\n`;
  }
  else
  {
    code = `turtle.suck()\n`;
  }
  return code;
};

Blockly.Lua['turtle_suckup'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  let code;
  if (value_name)
  {
    code =  `turtle.suckUp(${value_name})\n`;
  }
  else
  {
    code = `turtle.suckUp()\n`;
  }
  return code;
};

Blockly.Lua['turtle_suckdown'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  let code;
  if (value_name)
  {
    code =  `turtle.suckDown(${value_name})\n`;
  }
  else
  {
    code = `turtle.suckDown()\n`;
  }
  return code;
};

Blockly.Lua['turtle_refuel'] = function(block) {
  var value_qtd = Blockly.Lua.valueToCode(block, 'qtd', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  let code;
  if (value_qtd)
  {
    code =  `turtle.refuel(${value_qtd})\n`;
  }
  else
  {
    code = `turtle.refuel()\n`;
  }
  return code;
};

Blockly.Lua['turtle_compareto'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  value_name = (value_name > 16 || value_name < 1) ? 1 : value_name;
  var code = ` turtle.compareTo(${value_name}) `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_transferto'] = function(block) {
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  var value_qtd = Blockly.Lua.valueToCode(block, 'qtd', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  value_slot = (value_slot > 16 || value_slot < 1) ? 1 : value_slot;
  var code = ` turtle.transferTo(${value_slot},${value_qtd})\n`;
  return code;
};

Blockly.Lua['turtle_getitemdetail'] = function(block) {
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  let code;
  if (value_slot)
  {
    value_slot = (value_slot > 16 || value_slot < 1) ? 1 : value_slot;
    code =  ` turtle.getItemDetail(${value_slot}) `;
  }
  else
  {
    code = ` turtle.getItemDetail() `;
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_craft'] = function(block) {
  var value_qtd = Blockly.Lua.valueToCode(block, 'qtd', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  let code;
  if (value_qtd)
  {
    code =  `turtle.craft(${value_qtd})\n`;
  }
  else
  {
    code = `turtle.craft()\n`;
  }
  return code;
};