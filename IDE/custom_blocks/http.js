Blockly.Blocks['http_get'] = {
    init: function() {
      this.appendValueInput("url")
          .setCheck("String")
          .appendField("http.get");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("http.get");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['http_request_readall'] = {
    init: function() {
      this.appendValueInput("request")
          .setCheck(null)
          .appendField("request: ");
      this.appendDummyInput()
          .appendField(".readAll()");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("request.readAll()");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['http_request_close'] = {
    init: function() {
      this.appendValueInput("request")
          .setCheck(null)
          .appendField("request:");
      this.appendDummyInput()
          .appendField(".close()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['http_checkurl'] = {
    init: function() {
      this.appendValueInput("url")
          .setCheck("String")
          .appendField("http.checkURL");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Lua['http_get'] = function(block) {
    var value_url = Blockly.Lua.valueToCode(block, 'url', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    var code = ` http.get(${value_url}) `;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
  };
  
  Blockly.Lua['http_request_readall'] = function(block) {
    var value_request = Blockly.Lua.valueToCode(block, 'request', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    var code = ` ${value_request}.readAll() \n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
  };
  
  Blockly.Lua['http_request_close'] = function(block) {
    var value_request = Blockly.Lua.valueToCode(block, 'request', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    var code = ` ${value_request}.close() \n`;
    return code;
  };

  Blockly.Lua['http_checkurl'] = function(block) {
    var value_url = Blockly.Lua.valueToCode(block, 'url', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    var code = ` http.checkUrl(${value_url}) `;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
  };