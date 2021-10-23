Blockly.Blocks['others_run'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("os.run")
          .appendField(new Blockly.FieldTextInput(""), "path");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("run an especific program");
   this.setHelpUrl("");
    }
};

Blockly.Lua['others_run'] = function(block) {
    var text_path = block.getFieldValue('path');
    // TODO: Assemble Lua into code variable.
    var code = `os.run({}, "codes/${text_path}.lua")\n`;
    return code;
  };

/* Gambiarra pra tabelas */
Blockly.Blocks['table_manip'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("table")
          .appendField(new Blockly.FieldVariable("list"), "tab")
          .appendField(new Blockly.FieldTextInput(""), "code");
      this.setOutput(true, null);
      this.setColour(60);
   this.setTooltip("Recebe uma tabela como primeiro argumento e depois deixa escrever um código personalizado");
   this.setHelpUrl("");
    }
  };


  Blockly.Lua['table_manip'] = function(block) {
    var variable_tab = Blockly.Lua.nameDB_.getName(block.getFieldValue('tab'), Blockly.Variables.NAME_TYPE);
    var text_code = block.getFieldValue('code');
    // TODO: Assemble Lua into code variable.
    var code = `${variable_tab}${text_code}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
  };

  Blockly.Blocks['data_manip_att'] = {
    init: function() {
      this.appendValueInput("data")
          .setCheck(null)
          .appendField("data");
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput(""), "code");
      this.setOutput(true, null);
      this.setColour(60);
   this.setTooltip("Recebe uma variável e adiciona o código digitado, e retorna o resultado");
   this.setHelpUrl("");
    }
  };

Blockly.Lua['data_manip_att'] = function(block) {
    var value_data = Blockly.Lua.valueToCode(block, 'data', Blockly.Lua.ORDER_ATOMIC);
    var text_code = block.getFieldValue('code');
    // TODO: Assemble Lua into code variable.
    var code = `${value_data}${text_code}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
};
