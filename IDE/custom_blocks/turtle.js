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
  var code = `
  for i = 1,${number_steps} do
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
  var code = `
  for i = 1,${number_steps} do
    turtle.back()
  end\n`;
  return code;
};

Blockly.Lua['turtle_up'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  // TODO: Assemble Lua into code variable.
  var code = `
  for i = 1,${number_steps} do
    turtle.up()
  end\n`;
  return code;
};

Blockly.Lua['turtle_down'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  // TODO: Assemble Lua into code variable.
  var code = `
  for i = 1,${number_steps} do
    turtle.down()
  end\n`;
  return code;
};

Blockly.Lua['turtle_turnleft'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  // TODO: Assemble Lua into code variable.
  var code = `
  for i = 1,${number_steps} do
    turtle.turnLeft()
  end\n`;
  return code;
};

Blockly.Lua['turtle_turnright'] = function(block) {
  var number_steps = block.getFieldValue('steps');
  // TODO: Assemble Lua into code variable.
  var code = `
  for i = 1,${number_steps} do
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
  var code = 'turtle.getItemCount('+number_slot+')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};