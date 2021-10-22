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