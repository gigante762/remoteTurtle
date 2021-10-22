let demoWorkspace = Blockly.inject('blocklyDiv',
      {
        media: 'media/',
        toolbox: document.getElementById('toolbox'),
        trashcan: true,
        scrollbars: true,
        theme: 'dark',
        renderer: 'thrasos',
        comments: true,
        zoom:
        {
          controls: true,
          wheel: false,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true
        },
      });